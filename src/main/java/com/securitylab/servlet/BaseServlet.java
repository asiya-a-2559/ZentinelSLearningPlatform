package com.securitylab.servlet;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

/**
 * Base servlet with common JSON helper methods.
 */
public abstract class BaseServlet extends HttpServlet {

    protected static final Gson gson = new GsonBuilder()
            .setDateFormat("yyyy-MM-dd'T'HH:mm:ss")
            .create();

    protected void sendJson(HttpServletResponse resp, Object data) throws IOException {
        resp.setContentType("application/json");
        resp.setCharacterEncoding("UTF-8");
        PrintWriter out = resp.getWriter();
        out.print(gson.toJson(data));
        out.flush();
    }

    protected void sendJson(HttpServletResponse resp, int status, Object data) throws IOException {
        resp.setStatus(status);
        sendJson(resp, data);
    }

    protected void sendError(HttpServletResponse resp, int status, String message) throws IOException {
        Map<String, Object> error = new HashMap<>();
        error.put("error", true);
        error.put("message", message);
        sendJson(resp, status, error);
    }

    protected void sendSuccess(HttpServletResponse resp, String message) throws IOException {
        Map<String, Object> result = new HashMap<>();
        result.put("success", true);
        result.put("message", message);
        sendJson(resp, result);
    }

    protected void sendSuccess(HttpServletResponse resp, String message, Map<String, Object> extra) throws IOException {
        extra.put("success", true);
        extra.put("message", message);
        sendJson(resp, extra);
    }

    protected Map<String, Object> parseJsonBody(HttpServletRequest req) throws IOException {
        StringBuilder sb = new StringBuilder();
        try (BufferedReader reader = req.getReader()) {
            String line;
            while ((line = reader.readLine()) != null) {
                sb.append(line);
            }
        }
        @SuppressWarnings("unchecked")
        Map<String, Object> map = gson.fromJson(sb.toString(), Map.class);
        return map != null ? map : new HashMap<>();
    }

    protected String getStringParam(Map<String, Object> body, String key) {
        Object val = body.get(key);
        return val != null ? val.toString() : null;
    }

    protected int getIntParam(Map<String, Object> body, String key, int defaultVal) {
        Object val = body.get(key);
        if (val instanceof Number) {
            return ((Number) val).intValue();
        }
        try {
            return Integer.parseInt(val.toString());
        } catch (Exception e) {
            return defaultVal;
        }
    }

    /**
     * Get current user ID from session, or -1 if not logged in.
     */
    protected int getCurrentUserId(HttpServletRequest req) {
        Object uid = req.getSession().getAttribute("userId");
        return uid != null ? (int) uid : -1;
    }

    /**
     * Extract path info segment: /api/lessons/sql-injection-101 → "sql-injection-101"
     */
    protected String getPathSegment(HttpServletRequest req, int index) {
        String pathInfo = req.getPathInfo();
        if (pathInfo == null || pathInfo.equals("/")) return null;
        String[] parts = pathInfo.split("/");
        // parts[0] is empty (before first /)
        if (parts.length > index + 1) {
            return parts[index + 1];
        }
        return parts.length > 1 ? parts[1] : null;
    }
}
