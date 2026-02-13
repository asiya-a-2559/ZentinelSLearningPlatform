package com.securitylab.servlet;

import com.securitylab.db.DatabaseManager;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.*;
import java.util.*;

/**
 * Admin Console API - Handles all admin operations.
 * 
 * GET  /api/admin/stats          - Dashboard statistics
 * GET  /api/admin/users          - List all users
 * GET  /api/admin/users/{id}     - Get user details
 * POST /api/admin/users/{id}     - Update user
 * DELETE /api/admin/users/{id}   - Delete user
 * GET  /api/admin/courses        - List courses with stats
 * GET  /api/admin/lessons        - List lessons
 * POST /api/admin/lessons/{id}   - Update lesson
 * GET  /api/admin/quizzes        - List quiz questions
 * POST /api/admin/quizzes/{id}   - Update quiz question
 * DELETE /api/admin/quizzes/{id} - Delete quiz question
 * GET  /api/admin/progress       - User progress analytics
 * GET  /api/admin/activity       - Recent activity log
 */
@WebServlet(urlPatterns = "/api/admin/*")
public class AdminServlet extends BaseServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        // Check admin access
        if (!isAdmin(req)) {
            sendError(resp, 403, "Admin access required");
            return;
        }

        String[] path = getPathSegments(req);
        String action = path.length > 0 ? path[0] : "";

        try {
            switch (action) {
                case "stats":
                    getStats(resp);
                    break;
                case "users":
                    if (path.length > 1) {
                        getUserById(resp, Integer.parseInt(path[1]));
                    } else {
                        getUsers(req, resp);
                    }
                    break;
                case "courses":
                    getCourses(resp);
                    break;
                case "lessons":
                    getLessons(req, resp);
                    break;
                case "quizzes":
                    getQuizzes(req, resp);
                    break;
                case "progress":
                    getProgressAnalytics(resp);
                    break;
                case "activity":
                    getRecentActivity(resp);
                    break;
                default:
                    sendError(resp, 404, "Unknown endpoint: " + action);
            }
        } catch (Exception e) {
            sendError(resp, 500, "Server error: " + e.getMessage());
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        if (!isAdmin(req)) {
            sendError(resp, 403, "Admin access required");
            return;
        }

        String[] path = getPathSegments(req);
        String action = path.length > 0 ? path[0] : "";
        Map<String, Object> body = parseJsonBody(req);

        try {
            switch (action) {
                case "users":
                    if (path.length > 1) {
                        updateUser(resp, Integer.parseInt(path[1]), body);
                    } else {
                        sendError(resp, 400, "User ID required");
                    }
                    break;
                case "lessons":
                    if (path.length > 1) {
                        updateLesson(resp, Integer.parseInt(path[1]), body);
                    } else {
                        sendError(resp, 400, "Lesson ID required");
                    }
                    break;
                case "quizzes":
                    if (path.length > 1) {
                        updateQuiz(resp, Integer.parseInt(path[1]), body);
                    } else {
                        createQuiz(resp, body);
                    }
                    break;
                default:
                    sendError(resp, 404, "Unknown endpoint");
            }
        } catch (Exception e) {
            sendError(resp, 500, "Server error: " + e.getMessage());
        }
    }

    @Override
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        if (!isAdmin(req)) {
            sendError(resp, 403, "Admin access required");
            return;
        }

        String[] path = getPathSegments(req);
        String action = path.length > 0 ? path[0] : "";

        try {
            if (path.length < 2) {
                sendError(resp, 400, "ID required");
                return;
            }
            int id = Integer.parseInt(path[1]);

            switch (action) {
                case "users":
                    deleteUser(resp, id);
                    break;
                case "quizzes":
                    deleteQuiz(resp, id);
                    break;
                default:
                    sendError(resp, 404, "Unknown endpoint");
            }
        } catch (Exception e) {
            sendError(resp, 500, "Server error: " + e.getMessage());
        }
    }

    private boolean isAdmin(HttpServletRequest req) {
        HttpSession session = req.getSession(false);
        if (session == null) return false;
        
        Integer userId = (Integer) session.getAttribute("userId");
        if (userId == null) return false;

        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement("SELECT role FROM users WHERE id = ?")) {
            ps.setInt(1, userId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    String role = rs.getString("role");
                    return "admin".equals(role) || "instructor".equals(role);
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    private String[] getPathSegments(HttpServletRequest req) {
        String pathInfo = req.getPathInfo();
        if (pathInfo == null || pathInfo.equals("/")) {
            return new String[0];
        }
        return pathInfo.substring(1).split("/");
    }

    // ==================== STATS ====================
    private void getStats(HttpServletResponse resp) throws SQLException, IOException {
        Map<String, Object> stats = new HashMap<>();

        try (Connection conn = DatabaseManager.getConnection()) {
            // Total users
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery("SELECT COUNT(*) FROM users")) {
                if (rs.next()) stats.put("totalUsers", rs.getInt(1));
            }

            // Total courses
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery("SELECT COUNT(*) FROM courses")) {
                if (rs.next()) stats.put("totalCourses", rs.getInt(1));
            }

            // Total lessons
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery("SELECT COUNT(*) FROM lessons")) {
                if (rs.next()) stats.put("totalLessons", rs.getInt(1));
            }

            // Total quiz questions
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery("SELECT COUNT(*) FROM quiz_questions")) {
                if (rs.next()) stats.put("totalQuizzes", rs.getInt(1));
            }

            // Completed lessons (from progress)
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery("SELECT COUNT(*) FROM user_progress WHERE lesson_status = 'completed'")) {
                if (rs.next()) stats.put("completedLessons", rs.getInt(1));
            }

            // Quiz attempts
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery("SELECT COUNT(*) FROM user_progress WHERE quiz_completed = 1")) {
                if (rs.next()) stats.put("quizAttempts", rs.getInt(1));
            }

            // Average quiz score
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery("SELECT AVG(quiz_score) FROM user_progress WHERE quiz_completed = 1 AND quiz_score > 0")) {
                if (rs.next()) stats.put("avgQuizScore", Math.round(rs.getDouble(1) * 100) / 100.0);
            }

            // New users this week
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery("SELECT COUNT(*) FROM users WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)")) {
                if (rs.next()) stats.put("newUsersThisWeek", rs.getInt(1));
            }

            // Users by role
            List<Map<String, Object>> roleStats = new ArrayList<>();
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery("SELECT role, COUNT(*) as count FROM users GROUP BY role")) {
                while (rs.next()) {
                    Map<String, Object> r = new HashMap<>();
                    r.put("role", rs.getString("role"));
                    r.put("count", rs.getInt("count"));
                    roleStats.add(r);
                }
            }
            stats.put("usersByRole", roleStats);

            // Course completion stats
            List<Map<String, Object>> courseStats = new ArrayList<>();
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery(
                     "SELECT c.id, c.title, COUNT(DISTINCT l.id) as total_lessons, " +
                     "COUNT(DISTINCT CASE WHEN up.lesson_status = 'completed' THEN up.id END) as completed " +
                     "FROM courses c LEFT JOIN lessons l ON c.id = l.course_id " +
                     "LEFT JOIN user_progress up ON l.id = up.lesson_id " +
                     "GROUP BY c.id ORDER BY c.id")) {
                while (rs.next()) {
                    Map<String, Object> cs = new HashMap<>();
                    cs.put("id", rs.getInt("id"));
                    cs.put("title", rs.getString("title"));
                    cs.put("totalLessons", rs.getInt("total_lessons"));
                    cs.put("completed", rs.getInt("completed"));
                    courseStats.add(cs);
                }
            }
            stats.put("courseStats", courseStats);
        }

        sendJson(resp, stats);
    }

    // ==================== USERS ====================
    private void getUsers(HttpServletRequest req, HttpServletResponse resp) throws SQLException, IOException {
        String search = req.getParameter("search");
        String role = req.getParameter("role");
        int page = getIntParam(req, "page", 1);
        int limit = getIntParam(req, "limit", 50);
        int offset = (page - 1) * limit;

        StringBuilder sql = new StringBuilder(
            "SELECT u.*, " +
            "(SELECT COUNT(*) FROM user_progress WHERE user_id = u.id AND lesson_status = 'completed') as lessons_completed, " +
            "(SELECT AVG(quiz_score) FROM user_progress WHERE user_id = u.id AND quiz_completed = 1 AND quiz_score > 0) as avg_score " +
            "FROM users u WHERE 1=1 "
        );

        List<Object> params = new ArrayList<>();
        if (search != null && !search.isEmpty()) {
            sql.append("AND (u.username LIKE ? OR u.email LIKE ? OR u.display_name LIKE ?) ");
            params.add("%" + search + "%");
            params.add("%" + search + "%");
            params.add("%" + search + "%");
        }
        if (role != null && !role.isEmpty()) {
            sql.append("AND u.role = ? ");
            params.add(role);
        }
        sql.append("ORDER BY u.created_at DESC LIMIT ? OFFSET ?");
        params.add(limit);
        params.add(offset);

        List<Map<String, Object>> users = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql.toString())) {
            for (int i = 0; i < params.size(); i++) {
                ps.setObject(i + 1, params.get(i));
            }
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    Map<String, Object> u = new HashMap<>();
                    u.put("id", rs.getInt("id"));
                    u.put("username", rs.getString("username"));
                    u.put("email", rs.getString("email"));
                    u.put("displayName", rs.getString("display_name"));
                    u.put("role", rs.getString("role"));
                    u.put("createdAt", rs.getTimestamp("created_at"));
                    u.put("lessonsCompleted", rs.getInt("lessons_completed"));
                    u.put("avgScore", rs.getObject("avg_score") != null ? Math.round(rs.getDouble("avg_score") * 100) / 100.0 : null);
                    users.add(u);
                }
            }
        }

        // Get total count
        int total = 0;
        StringBuilder countSql = new StringBuilder("SELECT COUNT(*) FROM users WHERE 1=1 ");
        List<Object> countParams = new ArrayList<>();
        if (search != null && !search.isEmpty()) {
            countSql.append("AND (username LIKE ? OR email LIKE ? OR display_name LIKE ?) ");
            countParams.add("%" + search + "%");
            countParams.add("%" + search + "%");
            countParams.add("%" + search + "%");
        }
        if (role != null && !role.isEmpty()) {
            countSql.append("AND role = ? ");
            countParams.add(role);
        }

        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(countSql.toString())) {
            for (int i = 0; i < countParams.size(); i++) {
                ps.setObject(i + 1, countParams.get(i));
            }
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) total = rs.getInt(1);
            }
        }

        Map<String, Object> result = new HashMap<>();
        result.put("users", users);
        result.put("total", total);
        result.put("page", page);
        result.put("pages", (int) Math.ceil((double) total / limit));

        sendJson(resp, result);
    }

    private void getUserById(HttpServletResponse resp, int id) throws SQLException, IOException {
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(
                 "SELECT u.*, " +
                 "(SELECT COUNT(*) FROM user_progress WHERE user_id = u.id AND lesson_status = 'completed') as lessons_completed, " +
                 "(SELECT AVG(quiz_score) FROM user_progress WHERE user_id = u.id AND quiz_completed = 1 AND quiz_score > 0) as avg_score " +
                 "FROM users u WHERE u.id = ?")) {
            ps.setInt(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    Map<String, Object> u = new HashMap<>();
                    u.put("id", rs.getInt("id"));
                    u.put("username", rs.getString("username"));
                    u.put("email", rs.getString("email"));
                    u.put("displayName", rs.getString("display_name"));
                    u.put("role", rs.getString("role"));
                    u.put("createdAt", rs.getTimestamp("created_at"));
                    u.put("lessonsCompleted", rs.getInt("lessons_completed"));
                    u.put("avgScore", rs.getObject("avg_score") != null ? Math.round(rs.getDouble("avg_score") * 100) / 100.0 : null);
                    
                    // Get recent progress
                    List<Map<String, Object>> progress = new ArrayList<>();
                    try (PreparedStatement pps = conn.prepareStatement(
                        "SELECT up.*, l.title as lesson_title FROM user_progress up " +
                        "JOIN lessons l ON up.lesson_id = l.id WHERE up.user_id = ? " +
                        "ORDER BY up.started_at DESC LIMIT 20")) {
                        pps.setInt(1, id);
                        try (ResultSet prs = pps.executeQuery()) {
                            while (prs.next()) {
                                Map<String, Object> p = new HashMap<>();
                                p.put("lessonId", prs.getInt("lesson_id"));
                                p.put("lessonTitle", prs.getString("lesson_title"));
                                p.put("completed", "completed".equals(prs.getString("lesson_status")));
                                p.put("quizScore", prs.getObject("quiz_score"));
                                p.put("startedAt", prs.getTimestamp("started_at"));
                                progress.add(p);
                            }
                        }
                    }
                    u.put("recentProgress", progress);
                    
                    sendJson(resp, u);
                } else {
                    sendError(resp, 404, "User not found");
                }
            }
        }
    }

    private void updateUser(HttpServletResponse resp, int id, Map<String, Object> body) throws SQLException, IOException {
        String role = getStringParam(body, "role");
        String displayName = getStringParam(body, "displayName");

        StringBuilder sql = new StringBuilder("UPDATE users SET ");
        List<Object> params = new ArrayList<>();
        boolean hasUpdate = false;

        if (role != null) {
            sql.append("role = ?");
            params.add(role);
            hasUpdate = true;
        }
        if (displayName != null) {
            if (hasUpdate) sql.append(", ");
            sql.append("display_name = ?");
            params.add(displayName);
            hasUpdate = true;
        }

        if (!hasUpdate) {
            sendError(resp, 400, "No fields to update");
            return;
        }

        sql.append(" WHERE id = ?");
        params.add(id);

        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql.toString())) {
            for (int i = 0; i < params.size(); i++) {
                ps.setObject(i + 1, params.get(i));
            }
            int rows = ps.executeUpdate();
            if (rows > 0) {
                sendSuccess(resp, "User updated successfully");
            } else {
                sendError(resp, 404, "User not found");
            }
        }
    }

    private void deleteUser(HttpServletResponse resp, int id) throws SQLException, IOException {
        try (Connection conn = DatabaseManager.getConnection()) {
            // Delete progress first
            try (PreparedStatement ps = conn.prepareStatement("DELETE FROM user_progress WHERE user_id = ?")) {
                ps.setInt(1, id);
                ps.executeUpdate();
            }
            // Delete user
            try (PreparedStatement ps = conn.prepareStatement("DELETE FROM users WHERE id = ?")) {
                ps.setInt(1, id);
                int rows = ps.executeUpdate();
                if (rows > 0) {
                    sendSuccess(resp, "User deleted successfully");
                } else {
                    sendError(resp, 404, "User not found");
                }
            }
        }
    }

    // ==================== COURSES ====================
    private void getCourses(HttpServletResponse resp) throws SQLException, IOException {
        List<Map<String, Object>> courses = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             Statement st = conn.createStatement();
             ResultSet rs = st.executeQuery(
                 "SELECT c.*, " +
                 "(SELECT COUNT(*) FROM lessons WHERE course_id = c.id) as lesson_count, " +
                 "(SELECT COUNT(*) FROM quiz_questions q JOIN lessons l ON q.lesson_id = l.id WHERE l.course_id = c.id) as quiz_count " +
                 "FROM courses c ORDER BY c.id")) {
            while (rs.next()) {
                Map<String, Object> c = new HashMap<>();
                c.put("id", rs.getInt("id"));
                c.put("title", rs.getString("title"));
                c.put("slug", rs.getString("slug"));
                c.put("description", rs.getString("description"));
                c.put("lessonCount", rs.getInt("lesson_count"));
                c.put("quizCount", rs.getInt("quiz_count"));
                courses.add(c);
            }
        }
        sendJson(resp, courses);
    }

    // ==================== LESSONS ====================
    private void getLessons(HttpServletRequest req, HttpServletResponse resp) throws SQLException, IOException {
        String courseId = req.getParameter("courseId");
        String search = req.getParameter("search");
        int page = getIntParam(req, "page", 1);
        int limit = getIntParam(req, "limit", 50);
        int offset = (page - 1) * limit;

        StringBuilder sql = new StringBuilder(
            "SELECT l.*, c.title as course_title, " +
            "(SELECT COUNT(*) FROM quiz_questions WHERE lesson_id = l.id) as quiz_count " +
            "FROM lessons l JOIN courses c ON l.course_id = c.id WHERE 1=1 "
        );

        List<Object> params = new ArrayList<>();
        if (courseId != null && !courseId.isEmpty()) {
            sql.append("AND l.course_id = ? ");
            params.add(Integer.parseInt(courseId));
        }
        if (search != null && !search.isEmpty()) {
            sql.append("AND (l.title LIKE ? OR l.slug LIKE ?) ");
            params.add("%" + search + "%");
            params.add("%" + search + "%");
        }
        sql.append("ORDER BY l.course_id, l.id LIMIT ? OFFSET ?");
        params.add(limit);
        params.add(offset);

        List<Map<String, Object>> lessons = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql.toString())) {
            for (int i = 0; i < params.size(); i++) {
                ps.setObject(i + 1, params.get(i));
            }
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    Map<String, Object> l = new HashMap<>();
                    l.put("id", rs.getInt("id"));
                    l.put("courseId", rs.getInt("course_id"));
                    l.put("courseTitle", rs.getString("course_title"));
                    l.put("title", rs.getString("title"));
                    l.put("slug", rs.getString("slug"));
                    l.put("difficulty", rs.getString("difficulty"));
                    l.put("quizCount", rs.getInt("quiz_count"));
                    l.put("descriptionLength", rs.getString("description") != null ? rs.getString("description").length() : 0);
                    lessons.add(l);
                }
            }
        }

        Map<String, Object> result = new HashMap<>();
        result.put("lessons", lessons);
        sendJson(resp, result);
    }

    private void updateLesson(HttpServletResponse resp, int id, Map<String, Object> body) throws SQLException, IOException {
        String title = getStringParam(body, "title");
        String description = getStringParam(body, "description");
        String difficulty = getStringParam(body, "difficulty");

        StringBuilder sql = new StringBuilder("UPDATE lessons SET ");
        List<Object> params = new ArrayList<>();
        boolean hasUpdate = false;

        if (title != null) {
            sql.append("title = ?");
            params.add(title);
            hasUpdate = true;
        }
        if (description != null) {
            if (hasUpdate) sql.append(", ");
            sql.append("description = ?");
            params.add(description);
            hasUpdate = true;
        }
        if (difficulty != null) {
            if (hasUpdate) sql.append(", ");
            sql.append("difficulty = ?");
            params.add(difficulty);
            hasUpdate = true;
        }

        if (!hasUpdate) {
            sendError(resp, 400, "No fields to update");
            return;
        }

        sql.append(" WHERE id = ?");
        params.add(id);

        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql.toString())) {
            for (int i = 0; i < params.size(); i++) {
                ps.setObject(i + 1, params.get(i));
            }
            int rows = ps.executeUpdate();
            if (rows > 0) {
                sendSuccess(resp, "Lesson updated successfully");
            } else {
                sendError(resp, 404, "Lesson not found");
            }
        }
    }

    // ==================== QUIZZES ====================
    private void getQuizzes(HttpServletRequest req, HttpServletResponse resp) throws SQLException, IOException {
        String lessonId = req.getParameter("lessonId");
        String search = req.getParameter("search");
        int page = getIntParam(req, "page", 1);
        int limit = getIntParam(req, "limit", 50);
        int offset = (page - 1) * limit;

        StringBuilder sql = new StringBuilder(
            "SELECT q.*, l.title as lesson_title FROM quiz_questions q " +
            "JOIN lessons l ON q.lesson_id = l.id WHERE 1=1 "
        );

        List<Object> params = new ArrayList<>();
        if (lessonId != null && !lessonId.isEmpty()) {
            sql.append("AND q.lesson_id = ? ");
            params.add(Integer.parseInt(lessonId));
        }
        if (search != null && !search.isEmpty()) {
            sql.append("AND q.question LIKE ? ");
            params.add("%" + search + "%");
        }
        sql.append("ORDER BY q.lesson_id, q.id LIMIT ? OFFSET ?");
        params.add(limit);
        params.add(offset);

        List<Map<String, Object>> quizzes = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql.toString())) {
            for (int i = 0; i < params.size(); i++) {
                ps.setObject(i + 1, params.get(i));
            }
            try (ResultSet rs = ps.executeQuery()) {
                while (rs.next()) {
                    Map<String, Object> q = new HashMap<>();
                    q.put("id", rs.getInt("id"));
                    q.put("lessonId", rs.getInt("lesson_id"));
                    q.put("lessonTitle", rs.getString("lesson_title"));
                    q.put("question", rs.getString("question"));
                    q.put("optionA", rs.getString("option_a"));
                    q.put("optionB", rs.getString("option_b"));
                    q.put("optionC", rs.getString("option_c"));
                    q.put("optionD", rs.getString("option_d"));
                    q.put("correct", rs.getString("correct"));
                    q.put("explanation", rs.getString("explanation"));
                    quizzes.add(q);
                }
            }
        }

        Map<String, Object> result = new HashMap<>();
        result.put("quizzes", quizzes);
        sendJson(resp, result);
    }

    private void createQuiz(HttpServletResponse resp, Map<String, Object> body) throws SQLException, IOException {
        Integer lessonId = getIntParam(body, "lessonId");
        String question = getStringParam(body, "question");
        String optionA = getStringParam(body, "optionA");
        String optionB = getStringParam(body, "optionB");
        String optionC = getStringParam(body, "optionC");
        String optionD = getStringParam(body, "optionD");
        String correct = getStringParam(body, "correct");
        String explanation = getStringParam(body, "explanation");

        if (lessonId == null || question == null || optionA == null || optionB == null || 
            optionC == null || optionD == null || correct == null) {
            sendError(resp, 400, "Missing required fields");
            return;
        }

        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(
                 "INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) " +
                 "VALUES (?, ?, ?, ?, ?, ?, ?, ?)", Statement.RETURN_GENERATED_KEYS)) {
            ps.setInt(1, lessonId);
            ps.setString(2, question);
            ps.setString(3, optionA);
            ps.setString(4, optionB);
            ps.setString(5, optionC);
            ps.setString(6, optionD);
            ps.setString(7, correct);
            ps.setString(8, explanation);
            ps.executeUpdate();

            try (ResultSet keys = ps.getGeneratedKeys()) {
                if (keys.next()) {
                    Map<String, Object> data = new HashMap<>();
                    data.put("id", keys.getInt(1));
                    sendSuccess(resp, "Quiz question created", data);
                }
            }
        }
    }

    private void updateQuiz(HttpServletResponse resp, int id, Map<String, Object> body) throws SQLException, IOException {
        String question = getStringParam(body, "question");
        String optionA = getStringParam(body, "optionA");
        String optionB = getStringParam(body, "optionB");
        String optionC = getStringParam(body, "optionC");
        String optionD = getStringParam(body, "optionD");
        String correct = getStringParam(body, "correct");
        String explanation = getStringParam(body, "explanation");

        StringBuilder sql = new StringBuilder("UPDATE quiz_questions SET ");
        List<Object> params = new ArrayList<>();
        boolean first = true;

        if (question != null) { sql.append("question = ?"); params.add(question); first = false; }
        if (optionA != null) { if (!first) sql.append(", "); sql.append("option_a = ?"); params.add(optionA); first = false; }
        if (optionB != null) { if (!first) sql.append(", "); sql.append("option_b = ?"); params.add(optionB); first = false; }
        if (optionC != null) { if (!first) sql.append(", "); sql.append("option_c = ?"); params.add(optionC); first = false; }
        if (optionD != null) { if (!first) sql.append(", "); sql.append("option_d = ?"); params.add(optionD); first = false; }
        if (correct != null) { if (!first) sql.append(", "); sql.append("correct = ?"); params.add(correct); first = false; }
        if (explanation != null) { if (!first) sql.append(", "); sql.append("explanation = ?"); params.add(explanation); }

        if (params.isEmpty()) {
            sendError(resp, 400, "No fields to update");
            return;
        }

        sql.append(" WHERE id = ?");
        params.add(id);

        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql.toString())) {
            for (int i = 0; i < params.size(); i++) {
                ps.setObject(i + 1, params.get(i));
            }
            int rows = ps.executeUpdate();
            if (rows > 0) {
                sendSuccess(resp, "Quiz question updated");
            } else {
                sendError(resp, 404, "Quiz question not found");
            }
        }
    }

    private void deleteQuiz(HttpServletResponse resp, int id) throws SQLException, IOException {
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement("DELETE FROM quiz_questions WHERE id = ?")) {
            ps.setInt(1, id);
            int rows = ps.executeUpdate();
            if (rows > 0) {
                sendSuccess(resp, "Quiz question deleted");
            } else {
                sendError(resp, 404, "Quiz question not found");
            }
        }
    }

    // ==================== ANALYTICS ====================
    private void getProgressAnalytics(HttpServletResponse resp) throws SQLException, IOException {
        Map<String, Object> analytics = new HashMap<>();

        try (Connection conn = DatabaseManager.getConnection()) {
            // Top users by lessons completed
            List<Map<String, Object>> topUsers = new ArrayList<>();
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery(
                     "SELECT u.id, u.username, u.display_name, COUNT(*) as completed, " +
                     "AVG(up.quiz_score) as avg_score FROM users u " +
                     "JOIN user_progress up ON u.id = up.user_id WHERE up.lesson_status = 'completed' " +
                     "GROUP BY u.id ORDER BY completed DESC LIMIT 10")) {
                while (rs.next()) {
                    Map<String, Object> u = new HashMap<>();
                    u.put("id", rs.getInt("id"));
                    u.put("username", rs.getString("username"));
                    u.put("displayName", rs.getString("display_name"));
                    u.put("completed", rs.getInt("completed"));
                    u.put("avgScore", rs.getObject("avg_score") != null ? Math.round(rs.getDouble("avg_score") * 100) / 100.0 : null);
                    topUsers.add(u);
                }
            }
            analytics.put("topUsers", topUsers);

            // Course completion rates
            List<Map<String, Object>> courseRates = new ArrayList<>();
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery(
                     "SELECT c.id, c.title, " +
                     "(SELECT COUNT(DISTINCT l.id) FROM lessons l WHERE l.course_id = c.id) as total_lessons, " +
                     "(SELECT COUNT(DISTINCT up.lesson_id) FROM user_progress up JOIN lessons l ON up.lesson_id = l.id WHERE l.course_id = c.id AND up.lesson_status = 'completed') as completions " +
                     "FROM courses c ORDER BY c.id")) {
                while (rs.next()) {
                    Map<String, Object> cr = new HashMap<>();
                    cr.put("id", rs.getInt("id"));
                    cr.put("title", rs.getString("title"));
                    cr.put("totalLessons", rs.getInt("total_lessons"));
                    cr.put("completions", rs.getInt("completions"));
                    courseRates.add(cr);
                }
            }
            analytics.put("courseRates", courseRates);

            // Daily activity (last 30 days)
            List<Map<String, Object>> dailyActivity = new ArrayList<>();
            try (Statement st = conn.createStatement();
                 ResultSet rs = st.executeQuery(
                     "SELECT DATE(started_at) as date, COUNT(*) as activity " +
                     "FROM user_progress WHERE started_at >= DATE_SUB(NOW(), INTERVAL 30 DAY) " +
                     "GROUP BY DATE(started_at) ORDER BY date")) {
                while (rs.next()) {
                    Map<String, Object> da = new HashMap<>();
                    da.put("date", rs.getDate("date").toString());
                    da.put("activity", rs.getInt("activity"));
                    dailyActivity.add(da);
                }
            }
            analytics.put("dailyActivity", dailyActivity);
        }

        sendJson(resp, analytics);
    }

    private void getRecentActivity(HttpServletResponse resp) throws SQLException, IOException {
        List<Map<String, Object>> activity = new ArrayList<>();
        try (Connection conn = DatabaseManager.getConnection();
             Statement st = conn.createStatement();
             ResultSet rs = st.executeQuery(
                 "SELECT up.*, u.username, u.display_name, l.title as lesson_title " +
                 "FROM user_progress up " +
                 "JOIN users u ON up.user_id = u.id " +
                 "JOIN lessons l ON up.lesson_id = l.id " +
                 "ORDER BY COALESCE(up.completed_at, up.started_at) DESC LIMIT 50")) {
            while (rs.next()) {
                Map<String, Object> a = new HashMap<>();
                a.put("userId", rs.getInt("user_id"));
                a.put("username", rs.getString("username"));
                a.put("displayName", rs.getString("display_name"));
                a.put("lessonId", rs.getInt("lesson_id"));
                a.put("lessonTitle", rs.getString("lesson_title"));
                a.put("completed", "completed".equals(rs.getString("lesson_status")));
                a.put("quizScore", rs.getObject("quiz_score"));
                a.put("updatedAt", rs.getTimestamp("started_at"));
                activity.add(a);
            }
        }
        sendJson(resp, activity);
    }

    // ==================== HELPERS ====================
    private int getIntParam(HttpServletRequest req, String name, int defaultValue) {
        String val = req.getParameter(name);
        if (val != null && !val.isEmpty()) {
            try {
                return Integer.parseInt(val);
            } catch (NumberFormatException e) {
                return defaultValue;
            }
        }
        return defaultValue;
    }

    private Integer getIntParam(Map<String, Object> body, String name) {
        Object val = body.get(name);
        if (val instanceof Number) return ((Number) val).intValue();
        if (val instanceof String) {
            try { return Integer.parseInt((String) val); } catch (NumberFormatException e) { return null; }
        }
        return null;
    }
}
