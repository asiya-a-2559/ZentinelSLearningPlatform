package com.securitylab.servlet;

import com.securitylab.dao.ProgressDAO;
import com.securitylab.model.UserProgress;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * REST API for user progress and scores.
 *
 * GET  /api/progress                  - Get all progress for logged-in user
 * GET  /api/progress/dashboard        - Get score dashboard
 * GET  /api/progress/{lessonId}       - Get progress for a specific lesson
 * POST /api/progress/start/{lessonId} - Start a lesson (mark as in_progress)
 * POST /api/progress/complete/{lessonId} - Complete a lesson (mark as completed)
 * POST /api/progress/demo/{lessonId}  - Mark demo complete
 * POST /api/progress/lab/{lessonId}   - Mark lab complete
 */
@WebServlet(urlPatterns = "/api/progress/*")
public class ProgressServlet extends BaseServlet {

    private final ProgressDAO progressDAO = new ProgressDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        int userId = getCurrentUserId(req);
        if (userId < 1) {
            sendError(resp, 401, "Please login to view progress");
            return;
        }

        String seg1 = getPathSegment(req, 0);

        try {
            if (seg1 == null) {
                // GET /api/progress → all progress
                List<UserProgress> progress = progressDAO.getAllProgress(userId);
                sendJson(resp, progress);

            } else if ("dashboard".equals(seg1)) {
                // GET /api/progress/dashboard
                Map<String, Object> dashboard = progressDAO.getScoreDashboard(userId);
                sendJson(resp, dashboard);

            } else {
                // GET /api/progress/{lessonId}
                int lessonId = Integer.parseInt(seg1);
                UserProgress progress = progressDAO.getProgress(userId, lessonId);
                if (progress != null) {
                    sendJson(resp, progress);
                } else {
                    // Return empty progress
                    Map<String, Object> empty = new HashMap<>();
                    empty.put("userId", userId);
                    empty.put("lessonId", lessonId);
                    empty.put("lessonStatus", "not_started");
                    empty.put("demoCompleted", false);
                    empty.put("labCompleted", false);
                    empty.put("quizCompleted", false);
                    empty.put("quizScore", 0);
                    empty.put("completed", false);
                    sendJson(resp, empty);
                }
            }
        } catch (NumberFormatException e) {
            sendError(resp, 400, "Invalid lesson ID");
        } catch (Exception e) {
            sendError(resp, 500, "Server error: " + e.getMessage());
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        int userId = getCurrentUserId(req);
        if (userId < 1) {
            sendError(resp, 401, "Please login to save progress");
            return;
        }

        String seg1 = getPathSegment(req, 0);
        String seg2 = getPathSegment(req, 1);

        try {
            if ("start".equals(seg1) && seg2 != null) {
                int lessonId = Integer.parseInt(seg2);
                progressDAO.startLesson(userId, lessonId);
                sendSuccess(resp, "Lesson started");

            } else if ("complete".equals(seg1) && seg2 != null) {
                int lessonId = Integer.parseInt(seg2);
                progressDAO.completeLesson(userId, lessonId);
                sendSuccess(resp, "Lesson completed");

            } else if ("demo".equals(seg1) && seg2 != null) {
                int lessonId = Integer.parseInt(seg2);
                progressDAO.completeDemo(userId, lessonId);
                sendSuccess(resp, "Demo marked as complete");

            } else if ("lab".equals(seg1) && seg2 != null) {
                int lessonId = Integer.parseInt(seg2);
                progressDAO.completeLab(userId, lessonId);
                sendSuccess(resp, "Lab marked as complete");

            } else {
                sendError(resp, 404, "Unknown endpoint");
            }
        } catch (NumberFormatException e) {
            sendError(resp, 400, "Invalid lesson ID");
        } catch (Exception e) {
            sendError(resp, 500, "Server error: " + e.getMessage());
        }
    }
}
