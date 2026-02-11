package com.securitylab.dao;

import com.securitylab.db.DatabaseManager;
import com.securitylab.model.UserProgress;

import java.sql.*;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ProgressDAO {

    /**
     * Get or create progress record for user+lesson.
     */
    public UserProgress getProgress(int userId, int lessonId) throws SQLException {
        String sql = "SELECT up.*, l.title as lesson_title FROM user_progress up " +
                     "JOIN lessons l ON up.lesson_id = l.id " +
                     "WHERE up.user_id = ? AND up.lesson_id = ?";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, userId);
            ps.setInt(2, lessonId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) return mapProgress(rs);
            }
        }
        return null;
    }

    /**
     * Get all progress for a user.
     */
    public List<UserProgress> getAllProgress(int userId) throws SQLException {
        String sql = "SELECT up.*, l.title as lesson_title FROM user_progress up " +
                     "JOIN lessons l ON up.lesson_id = l.id " +
                     "WHERE up.user_id = ? ORDER BY up.lesson_id";
        List<UserProgress> list = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, userId);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    list.add(mapProgress(rs));
                }
            }
        }
        return list;
    }

    /**
     * Start a lesson — create progress record with 'in_progress' status.
     */
    public void startLesson(int userId, int lessonId) throws SQLException {
        String sql = "INSERT INTO user_progress (user_id, lesson_id, lesson_status, started_at) " +
                     "VALUES (?, ?, 'in_progress', NOW()) " +
                     "ON DUPLICATE KEY UPDATE lesson_status = IF(lesson_status = 'not_started', 'in_progress', lesson_status), " +
                     "started_at = IF(started_at IS NULL, NOW(), started_at)";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, userId);
            ps.setInt(2, lessonId);
            ps.executeUpdate();
        }
    }

    /**
     * Complete a lesson — mark status as 'completed'.
     */
    public void completeLesson(int userId, int lessonId) throws SQLException {
        String sql = "INSERT INTO user_progress (user_id, lesson_id, lesson_status, started_at, completed_at) " +
                     "VALUES (?, ?, 'completed', NOW(), NOW()) " +
                     "ON DUPLICATE KEY UPDATE lesson_status = 'completed', " +
                     "completed_at = IF(completed_at IS NULL, NOW(), completed_at)";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, userId);
            ps.setInt(2, lessonId);
            ps.executeUpdate();
        }
    }

    /**
     * Mark demo as completed.
     */
    public void completeDemo(int userId, int lessonId) throws SQLException {
        upsertProgress(userId, lessonId, "demo_completed", true);
    }

    /**
     * Mark lab as completed.
     */
    public void completeLab(int userId, int lessonId) throws SQLException {
        upsertProgress(userId, lessonId, "lab_completed", true);
    }

    /**
     * Save quiz completion with score.
     */
    public void completeQuiz(int userId, int lessonId, int score) throws SQLException {
        String sql = "INSERT INTO user_progress (user_id, lesson_id, lesson_status, quiz_completed, quiz_score, started_at, completed_at) " +
                     "VALUES (?, ?, 'in_progress', TRUE, ?, NOW(), NULL) " +
                     "ON DUPLICATE KEY UPDATE quiz_completed = TRUE, quiz_score = GREATEST(quiz_score, ?), " +
                     "lesson_status = IF(lesson_status = 'not_started', 'in_progress', lesson_status), " +
                     "started_at = IF(started_at IS NULL, NOW(), started_at)";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, userId);
            ps.setInt(2, lessonId);
            ps.setInt(3, score);
            ps.setInt(4, score);
            ps.executeUpdate();
        }
    }

    /**
     * Get aggregate score dashboard for user.
     */
    public Map<String, Object> getScoreDashboard(int userId) throws SQLException {
        Map<String, Object> dashboard = new HashMap<>();

        // Total lessons
        String totalSql = "SELECT COUNT(*) as total FROM lessons";
        // Completed lessons
        String completedSql = "SELECT COUNT(*) as completed FROM user_progress " +
                              "WHERE user_id = ? AND lesson_status = 'completed'";
        // In-progress lessons
        String inProgressSql = "SELECT COUNT(*) as in_progress FROM user_progress " +
                               "WHERE user_id = ? AND lesson_status = 'in_progress'";
        // Average quiz score
        String avgSql = "SELECT COALESCE(AVG(quiz_score), 0) as avg_score FROM user_progress " +
                        "WHERE user_id = ? AND quiz_completed = TRUE";
        // Total points (sum of quiz scores)
        String pointsSql = "SELECT COALESCE(SUM(quiz_score), 0) as total_points FROM user_progress WHERE user_id = ?";

        try (Connection conn = DatabaseManager.getConnection()) {
            try (PreparedStatement ps = conn.prepareStatement(totalSql);
                 ResultSet rs = ps.executeQuery()) {
                if (rs.next()) dashboard.put("totalLessons", rs.getInt("total"));
            }

            try (PreparedStatement ps = conn.prepareStatement(completedSql)) {
                ps.setInt(1, userId);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) dashboard.put("completedLessons", rs.getInt("completed"));
                }
            }

            try (PreparedStatement ps = conn.prepareStatement(inProgressSql)) {
                ps.setInt(1, userId);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) dashboard.put("inProgressLessons", rs.getInt("in_progress"));
                }
            }

            try (PreparedStatement ps = conn.prepareStatement(avgSql)) {
                ps.setInt(1, userId);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) dashboard.put("averageScore", rs.getDouble("avg_score"));
                }
            }

            try (PreparedStatement ps = conn.prepareStatement(pointsSql)) {
                ps.setInt(1, userId);
                try (ResultSet rs = ps.executeQuery()) {
                    if (rs.next()) dashboard.put("totalPoints", rs.getInt("total_points"));
                }
            }
        }
        return dashboard;
    }

    private void upsertProgress(int userId, int lessonId, String column, boolean value) throws SQLException {
        String sql = "INSERT INTO user_progress (user_id, lesson_id, lesson_status, " + column + ", started_at) " +
                     "VALUES (?, ?, 'in_progress', ?, NOW()) " +
                     "ON DUPLICATE KEY UPDATE " + column + " = ?, " +
                     "lesson_status = IF(lesson_status = 'not_started', 'in_progress', lesson_status), " +
                     "started_at = IF(started_at IS NULL, NOW(), started_at)";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, userId);
            ps.setInt(2, lessonId);
            ps.setBoolean(3, value);
            ps.setBoolean(4, value);
            ps.executeUpdate();
        }
    }

    private UserProgress mapProgress(ResultSet rs) throws SQLException {
        UserProgress p = new UserProgress();
        p.setId(rs.getInt("id"));
        p.setUserId(rs.getInt("user_id"));
        p.setLessonId(rs.getInt("lesson_id"));
        p.setLessonTitle(rs.getString("lesson_title"));
        p.setLessonStatus(rs.getString("lesson_status"));
        p.setDemoCompleted(rs.getBoolean("demo_completed"));
        p.setLabCompleted(rs.getBoolean("lab_completed"));
        p.setQuizCompleted(rs.getBoolean("quiz_completed"));
        p.setQuizScore(rs.getInt("quiz_score"));
        p.setStartedAt(rs.getTimestamp("started_at"));
        p.setCompletedAt(rs.getTimestamp("completed_at"));
        return p;
    }
}
