package com.securitylab.dao;

import com.securitylab.db.DatabaseManager;
import com.securitylab.model.QuizQuestion;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class QuizDAO {

    /**
     * Get all quiz questions for a lesson.
     */
    public List<QuizQuestion> getQuestionsByLessonId(int lessonId) throws SQLException {
        String sql = "SELECT * FROM quiz_questions WHERE lesson_id = ? ORDER BY sort_order";
        List<QuizQuestion> list = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, lessonId);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    list.add(mapQuestion(rs));
                }
            }
        }
        return list;
    }

    /**
     * Get a single question by ID.
     */
    public QuizQuestion getQuestionById(int id) throws SQLException {
        String sql = "SELECT * FROM quiz_questions WHERE id = ?";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return mapQuestion(rs);
                }
            }
        }
        return null;
    }

    /**
     * Check answer for a question.
     */
    public boolean checkAnswer(int questionId, String selected) throws SQLException {
        String sql = "SELECT correct FROM quiz_questions WHERE id = ?";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, questionId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return rs.getString("correct").equalsIgnoreCase(selected);
                }
            }
        }
        return false;
    }

    /**
     * Save a quiz attempt and return whether correct.
     */
    public boolean saveAttempt(int userId, int lessonId, int questionId, String selected) throws SQLException {
        boolean isCorrect = checkAnswer(questionId, selected);

        String sql = "INSERT INTO quiz_attempts (user_id, lesson_id, question_id, selected_option, is_correct) VALUES (?, ?, ?, ?, ?)";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, userId);
            ps.setInt(2, lessonId);
            ps.setInt(3, questionId);
            ps.setString(4, selected.toUpperCase());
            ps.setBoolean(5, isCorrect);
            ps.executeUpdate();
        }
        return isCorrect;
    }

    private QuizQuestion mapQuestion(ResultSet rs) throws SQLException {
        QuizQuestion q = new QuizQuestion();
        q.setId(rs.getInt("id"));
        q.setLessonId(rs.getInt("lesson_id"));
        q.setQuestion(rs.getString("question"));
        q.setOptionA(rs.getString("option_a"));
        q.setOptionB(rs.getString("option_b"));
        q.setOptionC(rs.getString("option_c"));
        q.setOptionD(rs.getString("option_d"));
        q.setCorrect(rs.getString("correct"));
        q.setExplanation(rs.getString("explanation"));
        q.setSortOrder(rs.getInt("sort_order"));
        return q;
    }
}
