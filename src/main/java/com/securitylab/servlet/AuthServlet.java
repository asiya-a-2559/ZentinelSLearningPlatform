package com.securitylab.servlet;

import com.securitylab.dao.UserDAO;
import com.securitylab.model.User;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Handles user authentication.
 *
 * POST /api/auth/login     - Login
 * POST /api/auth/register  - Register
 * POST /api/auth/logout    - Logout
 * GET  /api/auth/me        - Get current user
 */
@WebServlet(urlPatterns = "/api/auth/*")
public class AuthServlet extends BaseServlet {

    private final UserDAO userDAO = new UserDAO();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String action = getPathSegment(req, 0);

        if ("me".equals(action)) {
            int userId = getCurrentUserId(req);
            if (userId == -1) {
                sendError(resp, 401, "Not authenticated");
                return;
            }
            try {
                User user = userDAO.getUserById(userId);
                if (user != null) {
                    Map<String, Object> data = new HashMap<>();
                    data.put("id", user.getId());
                    data.put("username", user.getUsername());
                    data.put("displayName", user.getDisplayName());
                    data.put("email", user.getEmail());
                    sendJson(resp, data);
                } else {
                    sendError(resp, 404, "User not found");
                }
            } catch (Exception e) {
                sendError(resp, 500, "Server error: " + e.getMessage());
            }
        } else {
            sendError(resp, 404, "Unknown endpoint");
        }
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String action = getPathSegment(req, 0);
        Map<String, Object> body = parseJsonBody(req);

        try {
            switch (action != null ? action : "") {
                case "login":
                    handleLogin(req, resp, body);
                    break;
                case "register":
                    handleRegister(req, resp, body);
                    break;
                case "logout":
                    handleLogout(req, resp);
                    break;
                default:
                    sendError(resp, 404, "Unknown endpoint: " + action);
            }
        } catch (Exception e) {
            sendError(resp, 500, "Server error: " + e.getMessage());
        }
    }

    private void handleLogin(HttpServletRequest req, HttpServletResponse resp, Map<String, Object> body) throws Exception {
        String username = getStringParam(body, "username");
        String password = getStringParam(body, "password");

        if (username == null || password == null) {
            sendError(resp, 400, "Username and password are required");
            return;
        }

        User user = userDAO.authenticate(username, password);
        if (user != null) {
            HttpSession session = req.getSession(true);
            session.setAttribute("userId", user.getId());
            session.setAttribute("username", user.getUsername());

            Map<String, Object> data = new HashMap<>();
            data.put("id", user.getId());
            data.put("username", user.getUsername());
            data.put("displayName", user.getDisplayName());
            sendSuccess(resp, "Login successful", data);
        } else {
            sendError(resp, 401, "Invalid username or password");
        }
    }

    private void handleRegister(HttpServletRequest req, HttpServletResponse resp, Map<String, Object> body) throws Exception {
        String username = getStringParam(body, "username");
        String email = getStringParam(body, "email");
        String password = getStringParam(body, "password");
        String displayName = getStringParam(body, "displayName");

        if (username == null || email == null || password == null) {
            sendError(resp, 400, "Username, email, and password are required");
            return;
        }

        if (password.length() < 6) {
            sendError(resp, 400, "Password must be at least 6 characters");
            return;
        }

        int userId = userDAO.register(username, email, password, displayName);
        if (userId > 0) {
            HttpSession session = req.getSession(true);
            session.setAttribute("userId", userId);
            session.setAttribute("username", username);

            Map<String, Object> data = new HashMap<>();
            data.put("id", userId);
            data.put("username", username);
            sendSuccess(resp, "Registration successful", data);
        } else {
            sendError(resp, 409, "Username or email already exists");
        }
    }

    private void handleLogout(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        req.getSession().invalidate();
        sendSuccess(resp, "Logged out successfully");
    }
}
