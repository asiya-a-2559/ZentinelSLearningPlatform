# 🛡️ SecurityLab – Interactive Security Learning Platform

A **Hacksplaining-style** web application for learning application security through interactive **demos**, hands-on **labs**, and challenging **quizzes** — with full **score tracking**.

Built with **pure HTML/CSS/JavaScript** frontend, **Java Servlets** on **Apache Tomcat**, and **MySQL** database, all containerized with **Docker**.

---

## 📸 Features

| Section | Description |
|---------|-------------|
| **🎬 Demo** | Step-by-step animated walkthrough showing how each vulnerability works |
| **🧪 Lab** | Hands-on terminal-style environment where you exploit vulnerabilities yourself |
| **📝 Quiz** | Multiple-choice questions with instant feedback and explanations |
| **📊 Score** | Dashboard tracking your progress across all lessons |

### Pre-loaded Lessons
- SQL Injection Fundamentals
- Cross-Site Scripting (XSS) Basics
- *(easily extensible — just add rows to the DB)*

---

## 🏗️ Architecture

```
┌──────────────────────────────────┐
│         Browser (Client)         │
│   Pure HTML + CSS + JavaScript   │
│   Hash-based SPA Router          │
└──────────────┬───────────────────┘
               │ REST API (JSON)
               ▼
┌──────────────────────────────────┐
│     Apache Tomcat 9 (Server)     │
│   Java Servlets (javax.servlet)  │
│   ├── AuthServlet                │
│   ├── LessonServlet              │
│   ├── QuizServlet                │
│   └── ProgressServlet            │
│   HikariCP Connection Pool       │
│   Gson JSON Serialization        │
└──────────────┬───────────────────┘
               │ JDBC
               ▼
┌──────────────────────────────────┐
│         MySQL 8.0                │
│   ├── categories                 │
│   ├── lessons (demo/lab HTML)    │
│   ├── quiz_questions             │
│   ├── users                      │
│   ├── user_progress              │
│   └── quiz_attempts              │
└──────────────────────────────────┘
```

---

## 🚀 Quick Start (Docker)

### Prerequisites
- Docker & Docker Compose installed

### Run
```bash
# Clone the project
cd securitylab

# Start everything (builds + runs)
docker-compose up --build

# The app will be available at:
# http://localhost:8080/securitylab/
```

### Stop
```bash
docker-compose down          # Stop containers
docker-compose down -v       # Stop + remove database volume
```

---

## 🛠️ Development Setup (Without Docker)

### Prerequisites
- Java 11+
- Maven 3.6+
- MySQL 8.0+

### 1. Setup Database
```bash
# Login to MySQL
mysql -u root -p

# Run the schema
source db/schema.sql
```

### 2. Set Environment Variables
```bash
export DB_HOST=localhost
export DB_PORT=3306
export DB_NAME=securitylab
export DB_USER=securitylab
export DB_PASS=securitylab123
```

### 3. Build & Deploy
```bash
# Build the WAR file
mvn clean package

# Copy to Tomcat
cp target/securitylab.war $CATALINA_HOME/webapps/

# Start Tomcat
$CATALINA_HOME/bin/startup.sh
```

### 4. Open
```
http://localhost:8080/securitylab/
```

---

## 📡 REST API Reference

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/login` | Login (`{username, password}`) |
| POST | `/api/auth/register` | Register (`{username, email, password, displayName}`) |
| POST | `/api/auth/logout` | Logout |
| GET | `/api/auth/me` | Get current user |

### Lessons
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/lessons` | List all lessons (summary) |
| GET | `/api/lessons/categories` | List categories |
| GET | `/api/lessons/category/{slug}` | Lessons by category |
| GET | `/api/lessons/{slug}` | Full lesson (with demo/lab HTML) |
| POST | `/api/lessons/{id}/check-lab` | Validate lab answer (`{answer}`) |

### Quiz
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/quiz/{lessonId}` | Get questions (answers hidden) |
| POST | `/api/quiz/check` | Check single answer (`{questionId, selected}`) |
| POST | `/api/quiz/{lessonId}/submit` | Submit full quiz (`{answers: [{questionId, selected}]}`) |

### Progress
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/progress` | All progress for current user |
| GET | `/api/progress/dashboard` | Score dashboard |
| GET | `/api/progress/{lessonId}` | Progress for a lesson |
| POST | `/api/progress/demo/{lessonId}` | Mark demo complete |
| POST | `/api/progress/lab/{lessonId}` | Mark lab complete |

---

## 📁 Project Structure

```
securitylab/
├── pom.xml                          # Maven build config
├── Dockerfile                       # Multi-stage Docker build
├── docker-compose.yml               # App + MySQL orchestration
├── db/
│   └── schema.sql                   # Full database schema + seed data
└── src/main/
    ├── java/com/securitylab/
    │   ├── db/
    │   │   └── DatabaseManager.java         # HikariCP connection pool
    │   ├── model/
    │   │   ├── Category.java
    │   │   ├── Lesson.java
    │   │   ├── QuizQuestion.java
    │   │   ├── User.java
    │   │   └── UserProgress.java
    │   ├── dao/
    │   │   ├── LessonDAO.java               # Lesson CRUD
    │   │   ├── QuizDAO.java                 # Quiz operations
    │   │   ├── UserDAO.java                 # Auth operations
    │   │   └── ProgressDAO.java             # Progress tracking
    │   ├── servlet/
    │   │   ├── BaseServlet.java             # JSON helpers
    │   │   ├── AuthServlet.java             # /api/auth/*
    │   │   ├── LessonServlet.java           # /api/lessons/*
    │   │   ├── QuizServlet.java             # /api/quiz/*
    │   │   └── ProgressServlet.java         # /api/progress/*
    │   ├── filter/
    │   │   └── CorsFilter.java              # CORS support
    │   └── listener/
    │       └── AppContextListener.java      # Startup/shutdown
    └── webapp/
        ├── index.html                       # SPA entry point
        ├── css/style.css                    # Dark theme CSS
        ├── js/app.js                        # Full SPA logic
        └── WEB-INF/web.xml                  # Servlet config
```

---

## 🔧 Adding New Lessons

Just insert into the database:

```sql
-- 1. Add the lesson
INSERT INTO lessons (category_id, title, slug, difficulty, summary, demo_html, lab_html, lab_solution, sort_order)
VALUES (3, 'CSRF Attack Basics', 'csrf-101', 'intermediate',
    'Learn how attackers forge requests on behalf of authenticated users.',
    '<div class="demo-container">...your demo HTML...</div>',
    '<div class="lab-container">...your lab HTML...</div>',
    'expected_answer', 1);

-- 2. Add quiz questions
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation)
VALUES (LAST_INSERT_ID(), 'What is CSRF?', 'opt A', 'opt B', 'opt C', 'opt D', 'B', 'Explanation here...');
```

The frontend automatically picks up new lessons — no code changes needed!

---

## 🔒 Demo Credentials

| Username | Password | Role |
|----------|----------|------|
| `demo` | `demo123` | Demo User |

---

## 📜 License

This project is for **educational purposes only**. Do not use the vulnerable lab exercises against real systems without authorization.
