package com.securitylab.listener;

import com.securitylab.db.DatabaseManager;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 * Application lifecycle listener.
 * Initializes DB pool on startup, cleans up on shutdown.
 */
@WebListener
public class AppContextListener implements ServletContextListener {

    @Override
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("╔══════════════════════════════════════════╗");
        System.out.println("║  ZentinelS - Learning Platform v2.0     ║");
        System.out.println("║  Initializing database connection...    ║");
        System.out.println("╚══════════════════════════════════════════╝");

        try {
            DatabaseManager.init();
            System.out.println("[ZentinelS] ✅ Database connection pool initialized");
        } catch (Exception e) {
            System.err.println("[ZentinelS] ❌ Failed to initialize database: " + e.getMessage());
            e.printStackTrace();
        }
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        System.out.println("[ZentinelS] Shutting down database connection pool...");
        DatabaseManager.shutdown();
        System.out.println("[ZentinelS] ✅ Shutdown complete");
    }
}
