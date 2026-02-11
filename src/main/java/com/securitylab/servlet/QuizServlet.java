package com.securitylab.servlet;

import com.securitylab.dao.QuizDAO;
import com.securitylab.dao.ProgressDAO;
import com.securitylab.model.QuizQuestion;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;
import java.util.stream.Collectors;

/**
 * REST API for quizzes.
 *
 * GET  /api/quiz/{lessonId}          - Get quiz questions (without correct answers)
 * POST /api/quiz/{lessonId}/submit   - Submit quiz answers and get score
 * POST /api/quiz/check               - Check a single question
 */
@WebServlet(urlPatterns = "/api/quiz/*")
public class QuizServlet extends BaseServlet {

    private final QuizDAO quizDAO = new QuizDAO();
    private final ProgressDAO progressDAO = new ProgressDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String seg1 = getPathSegment(req, 0);

        if (seg1 == null) {
            sendError(resp, 400, "Lesson ID is required: /api/quiz/{lessonId}");
            return;
        }

        try {
            int lessonId = Integer.parseInt(seg1);
            List<QuizQuestion> questions = quizDAO.getQuestionsByLessonId(lessonId);

            // Strip correct answers before sending to client
            List<Map<String, Object>> sanitized = questions.stream().map(q -> {
                Map<String, Object> map = new LinkedHashMap<>();
                map.put("id", q.getId());
                map.put("lessonId", q.getLessonId());
                map.put("question", q.getQuestion());
                map.put("optionA", q.getOptionA());
                map.put("optionB", q.getOptionB());
                map.put("optionC", q.getOptionC());
                map.put("optionD", q.getOptionD());
                map.put("sortOrder", q.getSortOrder());
                // Do NOT send correct answer or explanation
                return map;
            }).collect(Collectors.toList());

            sendJson(resp, sanitized);
        } catch (NumberFormatException e) {
            sendError(resp, 400, "Invalid lesson ID");
        } catch (Exception e) {
            sendError(resp, 500, "Server error: " + e.getMessage());
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String seg1 = getPathSegment(req, 0);
        String seg2 = getPathSegment(req, 1);

        try {
            if ("check".equals(seg1)) {
                // Check single question
                handleCheckSingle(req, resp);
            } else if (seg1 != null && "submit".equals(seg2)) {
                // Submit full quiz
                handleSubmitQuiz(req, resp, Integer.parseInt(seg1));
            } else {
                sendError(resp, 404, "Unknown endpoint");
            }
        } catch (NumberFormatException e) {
            sendError(resp, 400, "Invalid ID");
        } catch (Exception e) {
            sendError(resp, 500, "Server error: " + e.getMessage());
        }
    }

    /**
     * Check a single question answer.
     * POST /api/quiz/check { questionId, selected }
     */
    private void handleCheckSingle(HttpServletRequest req, HttpServletResponse resp) throws Exception {
        Map<String, Object> body = parseJsonBody(req);
        int questionId = getIntParam(body, "questionId", -1);
        String selected = getStringParam(body, "selected");

        if (questionId < 1 || selected == null) {
            sendError(resp, 400, "questionId and selected are required");
            return;
        }

        QuizQuestion q = quizDAO.getQuestionById(questionId);
        if (q == null) {
            sendError(resp, 404, "Question not found");
            return;
        }

        boolean correct = q.getCorrect().equalsIgnoreCase(selected);
        Map<String, Object> result = new HashMap<>();
        result.put("correct", correct);
        result.put("correctAnswer", q.getCorrect());
        result.put("explanation", q.getExplanation());
        sendJson(resp, result);
    }

    /**
     * Submit full quiz for a lesson.
     * POST /api/quiz/{lessonId}/submit { answers: [{questionId, selected}] }
     */
    private void handleSubmitQuiz(HttpServletRequest req, HttpServletResponse resp, int lessonId) throws Exception {
        Map<String, Object> body = parseJsonBody(req);
        @SuppressWarnings("unchecked")
        List<Map<String, Object>> answers = (List<Map<String, Object>>) body.get("answers");

        if (answers == null || answers.isEmpty()) {
            sendError(resp, 400, "No answers provided");
            return;
        }

        List<QuizQuestion> questions = quizDAO.getQuestionsByLessonId(lessonId);
        int userId = getCurrentUserId(req);

        int correctCount = 0;
        List<Map<String, Object>> results = new ArrayList<>();

        for (Map<String, Object> ans : answers) {
            int qId = getIntParam(ans, "questionId", -1);
            String selected = getStringParam(ans, "selected");

            QuizQuestion question = questions.stream()
                    .filter(q -> q.getId() == qId)
                    .findFirst().orElse(null);

            if (question != null) {
                boolean isCorrect = question.getCorrect().equalsIgnoreCase(selected);
                if (isCorrect) correctCount++;

                // Save attempt if logged in
                if (userId > 0) {
                    quizDAO.saveAttempt(userId, lessonId, qId, selected);
                }

                Map<String, Object> r = new HashMap<>();
                r.put("questionId", qId);
                r.put("correct", isCorrect);
                r.put("correctAnswer", question.getCorrect());
                r.put("explanation", question.getExplanation());
                results.add(r);
            }
        }

        int totalQuestions = questions.size();
        int scorePercent = totalQuestions > 0 ? (correctCount * 100) / totalQuestions : 0;

        // Save progress if logged in
        if (userId > 0) {
            progressDAO.completeQuiz(userId, lessonId, scorePercent);
        }

        Map<String, Object> response = new HashMap<>();
        response.put("lessonId", lessonId);
        response.put("totalQuestions", totalQuestions);
        response.put("correctAnswers", correctCount);
        response.put("score", scorePercent);
        response.put("passed", scorePercent >= 70);
        response.put("results", results);

        sendJson(resp, response);
    }
}
