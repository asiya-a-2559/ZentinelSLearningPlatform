package com.securitylab.dao;

import com.securitylab.db.DatabaseManager;
import com.securitylab.model.Category;
import com.securitylab.model.Lesson;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class LessonDAO {

    /**
     * Get all categories with lesson counts.
     */
    public List<Category> getAllCategories() throws SQLException {
        String sql = "SELECT c.*, COUNT(l.id) as lesson_count " +
                     "FROM categories c LEFT JOIN lessons l ON c.id = l.category_id " +
                     "GROUP BY c.id ORDER BY c.sort_order";
        List<Category> list = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                Category c = new Category();
                c.setId(rs.getInt("id"));
                c.setName(rs.getString("name"));
                c.setSlug(rs.getString("slug"));
                c.setDescription(rs.getString("description"));
                c.setIcon(rs.getString("icon"));
                c.setSortOrder(rs.getInt("sort_order"));
                c.setLessonCount(rs.getInt("lesson_count"));
                list.add(c);
            }
        }
        return list;
    }

    /**
     * Get all lessons (summary only, no HTML content).
     */
    public List<Lesson> getAllLessons() throws SQLException {
        String sql = "SELECT l.id, l.category_id, c.name as category_name, l.level_id, l.course_id, " +
                     "l.title, l.slug, l.difficulty, l.summary, l.sort_order, l.created_at " +
                     "FROM lessons l JOIN categories c ON l.category_id = c.id " +
                     "ORDER BY c.sort_order, l.sort_order";
        List<Lesson> list = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                list.add(mapLessonSummary(rs));
            }
        }
        return list;
    }

    /**
     * Get lessons by category slug.
     */
    public List<Lesson> getLessonsByCategory(String categorySlug) throws SQLException {
        String sql = "SELECT l.id, l.category_id, c.name as category_name, l.level_id, l.course_id, " +
                     "l.title, l.slug, l.difficulty, l.summary, l.sort_order, l.created_at " +
                     "FROM lessons l JOIN categories c ON l.category_id = c.id " +
                     "WHERE c.slug = ? ORDER BY l.sort_order";
        List<Lesson> list = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, categorySlug);
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    list.add(mapLessonSummary(rs));
                }
            }
        }
        return list;
    }

    /**
     * Get full lesson by slug (includes demo_html, lab_html).
     */
    public Lesson getLessonBySlug(String slug) throws SQLException {
        String sql = "SELECT l.*, c.name as category_name FROM lessons l " +
                     "JOIN categories c ON l.category_id = c.id WHERE l.slug = ?";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, slug);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return mapFullLesson(rs);
                }
            }
        }
        return null;
    }

    /**
     * Get full lesson by ID.
     */
    public Lesson getLessonById(int id) throws SQLException {
        String sql = "SELECT l.*, c.name as category_name FROM lessons l " +
                     "JOIN categories c ON l.category_id = c.id WHERE l.id = ?";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return mapFullLesson(rs);
                }
            }
        }
        return null;
    }

    /**
     * Validate lab answer.
     */
    public boolean checkLabAnswer(int lessonId, String answer) throws SQLException {
        String sql = "SELECT lab_solution FROM lessons WHERE id = ?";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, lessonId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    String solution = rs.getString("lab_solution");
                    return answer != null && answer.toLowerCase().contains(solution.toLowerCase());
                }
            }
        }
        return false;
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

    private Lesson mapFullLesson(ResultSet rs) throws SQLException {
        Lesson l = mapLessonSummary(rs);
        l.setDescription(rs.getString("description"));
        l.setDemoHtml(rs.getString("demo_html"));
        l.setLabHtml(rs.getString("lab_html"));
        l.setLabSolution(rs.getString("lab_solution"));
        return l;
    }
}
