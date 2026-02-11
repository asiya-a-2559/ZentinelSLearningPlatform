# ============================================================
# ZentinelS Learning Platform — Multi-stage Dockerfile
# Stage 1: Maven build → Stage 2: Tomcat 9 runtime
# ============================================================

# ── Stage 1: Build ──────────────────────────────────────────
FROM maven:3.9-eclipse-temurin-17 AS builder

WORKDIR /build
COPY pom.xml .
# Download dependencies first (cached layer)
RUN mvn dependency:go-offline -q

COPY src/ src/
RUN mvn clean package -DskipTests -q

# ── Stage 2: Runtime ────────────────────────────────────────
FROM tomcat:9.0-jdk17-temurin-jammy

# Remove default webapps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy WAR from builder
COPY --from=builder /build/target/securitylab.war /usr/local/tomcat/webapps/securitylab.war

# Copy schema for optional init
COPY db/schema.sql /docker-entrypoint-initdb.d/schema.sql

EXPOSE 8080

# Environment defaults (overridden by docker-compose)
ENV DB_HOST=mysql \
    DB_PORT=3306 \
    DB_NAME=securitylab \
    DB_USER=root \
    DB_PASS=zentinels

CMD ["catalina.sh", "run"]
