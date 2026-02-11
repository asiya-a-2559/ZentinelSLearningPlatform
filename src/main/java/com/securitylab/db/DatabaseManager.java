package com.securitylab.db;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import java.sql.Connection;
import java.sql.SQLException;

/**
 * Database connection pool manager using HikariCP.
 * Configured via environment variables for Docker compatibility.
 */
public class DatabaseManager {

    private static HikariDataSource dataSource;

    private DatabaseManager() {}

    public static synchronized void init() {
        if (dataSource != null) return;

        String host = env("DB_HOST", "localhost");
        String port = env("DB_PORT", "3306");
        String db   = env("DB_NAME", "securitylab");
        String user = env("DB_USER", "securitylab");
        String pass = env("DB_PASS", "securitylab123");

        String jdbcUrl = String.format("jdbc:mysql://%s:%s/%s?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC&characterEncoding=UTF-8", host, port, db);

        HikariConfig config = new HikariConfig();
        config.setJdbcUrl(jdbcUrl);
        config.setUsername(user);
        config.setPassword(pass);
        config.setDriverClassName("com.mysql.cj.jdbc.Driver");

        // Pool settings
        config.setMaximumPoolSize(10);
        config.setMinimumIdle(2);
        config.setIdleTimeout(300000);       // 5 minutes
        config.setConnectionTimeout(20000);  // 20 seconds
        config.setMaxLifetime(1200000);      // 20 minutes

        config.addDataSourceProperty("cachePrepStmts", "true");
        config.addDataSourceProperty("prepStmtCacheSize", "250");
        config.addDataSourceProperty("prepStmtCacheSqlLimit", "2048");

        dataSource = new HikariDataSource(config);
    }

    public static Connection getConnection() throws SQLException {
        if (dataSource == null) {
            init();
        }
        return dataSource.getConnection();
    }

    public static void shutdown() {
        if (dataSource != null && !dataSource.isClosed()) {
            dataSource.close();
        }
    }

    private static String env(String key, String defaultVal) {
        String val = System.getenv(key);
        return (val != null && !val.isEmpty()) ? val : defaultVal;
    }
}
