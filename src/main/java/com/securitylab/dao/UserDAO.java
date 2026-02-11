package com.securitylab.dao;

import com.securitylab.db.DatabaseManager;
import com.securitylab.model.User;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.*;

public class UserDAO {

    /**
     * Register a new user. Returns user ID or -1 if username/email already exists.
     */
    public int register(String username, String email, String password, String displayName) throws SQLException {
        String checkSql = "SELECT id FROM users WHERE username = ? OR email = ?";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement check = conn.prepareStatement(checkSql)) {
            check.setString(1, username);
            check.setString(2, email);
            try (ResultSet rs = check.executeQuery()) {
                if (rs.next()) return -1; // already exists
            }

            String sql = "INSERT INTO users (username, email, password_hash, display_name) VALUES (?, ?, ?, ?)";
            try (PreparedStatement ps = conn.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS)) {
                ps.setString(1, username);
                ps.setString(2, email);
                ps.setString(3, hashPassword(password));
                ps.setString(4, displayName != null ? displayName : username);
                ps.executeUpdate();
                try (ResultSet keys = ps.getGeneratedKeys()) {
                    if (keys.next()) return keys.getInt(1);
                }
            }
        }
        return -1;
    }

    /**
     * Authenticate user. Returns User object or null.
     */
    public User authenticate(String username, String password) throws SQLException {
        String sql = "SELECT * FROM users WHERE username = ? AND password_hash = ?";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setString(1, username);
            ps.setString(2, hashPassword(password));
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return mapUser(rs);
                }
            }
        }
        return null;
    }

    /**
     * Get user by ID.
     */
    public User getUserById(int id) throws SQLException {
        String sql = "SELECT * FROM users WHERE id = ?";
        try (Connection conn = DatabaseManager.getConnection();
             PreparedStatement ps = conn.prepareStatement(sql)) {
            ps.setInt(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    return mapUser(rs);
                }
            }
        }
        return null;
    }

    private User mapUser(ResultSet rs) throws SQLException {
        User u = new User();
        u.setId(rs.getInt("id"));
        u.setUsername(rs.getString("username"));
        u.setEmail(rs.getString("email"));
        u.setDisplayName(rs.getString("display_name"));
        u.setAvatarUrl(rs.getString("avatar_url"));
        u.setCreatedAt(rs.getTimestamp("created_at"));
        return u;
    }

    private String hashPassword(String password) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            byte[] hash = md.digest(password.getBytes());
            StringBuilder sb = new StringBuilder();
            for (byte b : hash) {
                sb.append(String.format("%02x", b));
            }
            return sb.toString();
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("SHA-256 not available", e);
        }
    }
}
