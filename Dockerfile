# ============================================================
# SecurityLab – Dockerfile (Tomcat + WAR deployment)
# ============================================================
FROM maven:3.9-eclipse-temurin-11 AS build

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline -B

COPY src ./src
RUN mvn clean package -DskipTests -B

# ---- Runtime ----
FROM tomcat:9.0-jdk11-temurin-jammy

# Remove default webapps
RUN rm -rf /usr/local/tomcat/webapps/*

# Copy WAR
COPY --from=build /app/target/securitylab.war /usr/local/tomcat/webapps/securitylab.war

# Environment variables (overridden by docker-compose)
ENV DB_HOST=mysql \
    DB_PORT=3306 \
    DB_NAME=securitylab \
    DB_USER=securitylab \
    DB_PASS=securitylab123

EXPOSE 8080

CMD ["catalina.sh", "run"]
