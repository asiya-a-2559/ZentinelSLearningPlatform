package com.securitylab.servlet;

import com.securitylab.dao.LessonDAO;
import com.securitylab.model.Category;
import com.securitylab.model.Lesson;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * REST API for lessons.
 *
 * GET /api/lessons                         - List all lessons
 * GET /api/lessons/categories              - List all categories
 * GET /api/lessons/category/{slug}         - Lessons by category
 * GET /api/lessons/{slug}                  - Full lesson detail
 * POST /api/lessons/{id}/check-lab         - Validate lab answer
 */
@WebServlet(urlPatterns = "/api/lessons/*")
public class LessonServlet extends BaseServlet {

    private final LessonDAO lessonDAO = new LessonDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String seg1 = getPathSegment(req, 0);
        String seg2 = getPathSegment(req, 1);

        try {
            if (seg1 == null) {
                // GET /api/lessons → all lessons
                List<Lesson> lessons = lessonDAO.getAllLessons();
                sendJson(resp, lessons);

            } else if ("categories".equals(seg1)) {
                // GET /api/lessons/categories
                List<Category> categories = lessonDAO.getAllCategories();
                sendJson(resp, categories);

            } else if ("category".equals(seg1) && seg2 != null) {
                // GET /api/lessons/category/{slug}
                List<Lesson> lessons = lessonDAO.getLessonsByCategory(seg2);
                sendJson(resp, lessons);

            } else {
                // GET /api/lessons/{slug}
                Lesson lesson = lessonDAO.getLessonBySlug(seg1);
                if (lesson != null) {
                    sendJson(resp, lesson);
                } else {
                    sendError(resp, 404, "Lesson not found: " + seg1);
                }
            }
        } catch (Exception e) {
            sendError(resp, 500, "Server error: " + e.getMessage());
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String seg1 = getPathSegment(req, 0);
        String seg2 = getPathSegment(req, 1);

        if (seg1 != null && "check-lab".equals(seg2)) {
            try {
                int lessonId = Integer.parseInt(seg1);
                Map<String, Object> body = parseJsonBody(req);
                String answer = getStringParam(body, "answer");

                boolean correct = lessonDAO.checkLabAnswer(lessonId, answer);

                Map<String, Object> result = new HashMap<>();
                result.put("correct", correct);
                result.put("message", correct ? "✅ Correct! You successfully exploited the vulnerability." : "❌ Not quite. Try again!");

                // Update progress if user is logged in
                if (correct) {
                    int userId = getCurrentUserId(req);
                    if (userId > 0) {
                        new com.securitylab.dao.ProgressDAO().completeLab(userId, lessonId);
                        result.put("progressSaved", true);
                    }
                }

                sendJson(resp, result);
            } catch (NumberFormatException e) {
                sendError(resp, 400, "Invalid lesson ID");
            } catch (Exception e) {
                sendError(resp, 500, "Server error: " + e.getMessage());
            }
        } else {
            sendError(resp, 404, "Unknown endpoint");
        }
    }
}
