package com.securitylab.dao;

import com.securitylab.db.DatabaseManager;
import com.securitylab.model.Course;
import com.securitylab.model.Level;
import com.securitylab.model.Lesson;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class CourseDAO {

    public List<Course> getAllCourses() throws SQLException {
        String sql = "SELECT c.*, " +
                     "(SELECT COUNT(*) FROM levels WHERE course_id = c.id) as level_count, " +
                     "(SELECT COUNT(*) FROM lessons WHERE course_id = c.id) as lesson_count " +
                     "FROM courses c ORDER BY c.sort_order";
        List<Course> list = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                list.add(mapCourse(rs));
            }
        }
        return list;
    }

    public Course getCourseBySlug(String slug) throws SQLException {
        String sql = "SELECT c.*, " +
                     "(SELECT COUNT(*) FROM levels WHERE course_id = c.id) as level_count, " +
                     "(SELECT COUNT(*) FROM lessons WHERE course_id = c.id) as lesson_count " +
                     "FROM courses c WHERE c.slug = ?";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, slug);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) return mapCourse(rs);
            }
        }
        return null;
    }

    public List<Level> getLevelsByCourse(int courseId) throws SQLException {
        String sql = "SELECT lv.*, " +
                     "(SELECT COUNT(*) FROM lessons WHERE level_id = lv.id) as lesson_count " +
                     "FROM levels lv WHERE lv.course_id = ? ORDER BY lv.sort_order";
        List<Level> list = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, courseId);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    list.add(mapLevel(rs));
                }
            }
        }
        return list;
    }

    public List<Lesson> getLessonsByLevel(int levelId) throws SQLException {
        String sql = "SELECT l.id, l.category_id, c.name as category_name, l.level_id, l.course_id, " +
                     "l.title, l.slug, l.difficulty, l.summary, l.sort_order, l.created_at " +
                     "FROM lessons l JOIN categories c ON l.category_id = c.id " +
                     "WHERE l.level_id = ? ORDER BY l.sort_order";
        List<Lesson> list = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, levelId);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    list.add(mapLessonSummary(rs));
                }
            }
        }
        return list;
    }

    public List<Lesson> getLessonsByCourse(int courseId) throws SQLException {
        String sql = "SELECT l.id, l.category_id, c.name as category_name, l.level_id, l.course_id, " +
                     "l.title, l.slug, l.difficulty, l.summary, l.sort_order, l.created_at " +
                     "FROM lessons l JOIN categories c ON l.category_id = c.id " +
                     "WHERE l.course_id = ? ORDER BY l.sort_order";
        List<Lesson> list = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, courseId);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    list.add(mapLessonSummary(rs));
                }
            }
        }
        return list;
    }

    private Course mapCourse(ResultSet rs) throws SQLException {
        Course c = new Course();
        c.setId(rs.getInt("id"));
        c.setTitle(rs.getString("title"));
        c.setSlug(rs.getString("slug"));
        c.setDescription(rs.getString("description"));
        c.setIcon(rs.getString("icon"));
        c.setColor(rs.getString("color"));
        c.setDifficulty(rs.getString("difficulty"));
        c.setSortOrder(rs.getInt("sort_order"));
        c.setCreatedAt(rs.getTimestamp("created_at"));
        c.setLevelCount(rs.getInt("level_count"));
        c.setLessonCount(rs.getInt("lesson_count"));
        return c;
    }

    private Level mapLevel(ResultSet rs) throws SQLException {
        Level l = new Level();
        l.setId(rs.getInt("id"));
        l.setCourseId(rs.getInt("course_id"));
        l.setTitle(rs.getString("title"));
        l.setDescription(rs.getString("description"));
        l.setLevelNumber(rs.getInt("level_number"));
        l.setSortOrder(rs.getInt("sort_order"));
        l.setLessonCount(rs.getInt("lesson_count"));
        return l;
    }

    private Lesson mapLessonSummary(ResultSet rs) throws SQLException {
        Lesson l = new Lesson();
        l.setId(rs.getInt("id"));
        l.setCategoryId(rs.getInt("category_id"));
        l.setCategoryName(rs.getString("category_name"));
        l.setLevelId(rs.getInt("level_id"));
        l.setCourseId(rs.getInt("course_id"));
        l.setTitle(rs.getString("title"));
        l.setSlug(rs.getString("slug"));
        l.setDifficulty(rs.getString("difficulty"));
        l.setSummary(rs.getString("summary"));
        l.setSortOrder(rs.getInt("sort_order"));
        l.setCreatedAt(rs.getTimestamp("created_at"));
        return l;
    }
}
