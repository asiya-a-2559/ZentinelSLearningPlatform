# ZentinelS - Development Prompts

## 1. Project Setup
```
Create a Java web application for a security learning platform called "ZentinelS". 
Use Java 17, Servlets, MySQL 8.0, and pure JavaScript (no frameworks).
Set up Maven project structure with pom.xml including dependencies for 
servlet-api, mysql-connector, and gson.
```

## 2. Database Schema
```
Design a MySQL database schema for a learning platform with:
- Users (id, username, password_hash, full_name, created_at)
- Courses (id, title, slug, description, icon, color, difficulty, sort_order)
- Levels (id, course_id, title, description, sort_order)
- Lessons (id, level_id, title, slug, summary, theory_content, demo_type, lab_type, difficulty)
- Categories (id, name, slug)
- UserProgress (id, user_id, lesson_id, demo_completed, lab_completed, quiz_completed, quiz_score, lesson_status, completed)
- QuizQuestions (id, lesson_id, question, option_a/b/c/d, correct_answer, explanation)

Include foreign keys and indexes for performance.
```

## 3. Backend API Layer
```
Create REST API endpoints using Java Servlets:
- GET /api/courses - List all courses with lesson/level counts
- GET /api/courses/{slug} - Course detail with levels and lessons
- GET /api/lessons - List all lessons
- GET /api/lessons/{slug} - Lesson detail with full content
- GET /api/quiz/{lessonId} - Get quiz questions for a lesson
- POST /api/auth/login - User authentication
- POST /api/auth/register - User registration
- GET /api/progress - Get user's progress
- POST /api/progress - Update lesson progress

Use a BaseServlet for common JSON response handling.
Create DAO classes for database operations.
```

## 4. Frontend SPA Structure
```
Build a single-page application with:
- Dark sidebar navigation with user info
- Light main content area
- Hash-based routing (#/courses, #/lesson/slug, etc.)
- Global search functionality
- Authentication modal (login/register)
- Toast notifications

State management with a simple state object for user, courses, lessons, progress.
```

## 5. Course Content Structure
```
Create 8 security courses:
1. Computer Components & Concepts (motherboard, CPU, RAM, binary, ASCII, base64, etc.)
2. OS and Virtualization (boot process, hypervisors, VMs)
3. Linux (terminal, sudo, file permissions, processes, SSH)
4. Web (HTTP, cookies, Google dorks)
5. Networking (hardware, IP, TCP/UDP, subnets, DNS, OSI model, DoS)
6. Offensive Security (SQLi, XSS, CSRF, IDOR, command injection, path traversal, etc.)
7. Servers and Services
8. Advanced Hardware

Each course has multiple levels, each level has multiple lessons.
Each lesson has: Theory, Interactive Demo, Hands-on Lab, Quiz
```

## 6. Interactive Demos
```
Create interactive demos for each security concept:
- SQL Injection: Show how ' OR '1'='1 bypasses login
- XSS: Demonstrate script injection in comment fields
- CSRF: Show unauthorized bank transfer attack
- IDOR: Demonstrate changing user IDs to access other profiles
- Command Injection: Show how ; cat /etc/passwd exploits inputs

Each demo should have:
- Step-by-step progression
- Visual browser mockup
- SQL/code panel showing what happens
- Explanation of the vulnerability
```

## 7. Lab Exercises
```
Create multiple-choice lab exercises for each lesson.
Labs should test practical understanding:
- "Which payload would bypass this login?"
- "What command reveals the vulnerability?"
- Include hints system
- Track completion and provide feedback
```

## 8. Quiz System
```
Create a quiz system with:
- 5 questions per lesson (500 total for 100 lessons)
- Multiple choice (A/B/C/D)
- Progress bar showing question number
- Immediate feedback with explanations
- Score calculation (pass = 60%)
- Store results in UserProgress
```

## 9. Progress Tracking
```
Implement progress tracking:
- Track demo_completed, lab_completed, quiz_completed per lesson
- Calculate lesson_status: new, in_progress, completed
- Show progress bars on courses
- Display completion badges on lessons
```

## 10. Quick Win Features
```
Add user experience enhancements:

1. Global Search - Search lessons by title, summary, category
2. Reading Time - Calculate ~200 words/min for theory content
3. Related Lessons - Show 3 lessons from same course
4. Day Streak - Track consecutive days of activity using localStorage
5. PDF Certificate - Generate downloadable certificate on course completion
```

## 11. UI/UX Polish
```
Style the application with:
- CSS variables for consistent theming
- Smooth transitions and hover effects
- Responsive grid layouts
- Card-based design for courses/lessons
- Progress indicators and badges
- Loading spinners and empty states
```

## 12. Deployment
```
Create deployment script that:
1. Builds WAR file with Maven
2. Stops Tomcat
3. Removes old deployment
4. Copies new WAR
5. Starts Tomcat
6. Health checks the application

Also create NoCacheFilter to prevent browser caching during development.
```

## File Structure

```
securitylab/
├── pom.xml                          # Maven config
├── deploy.sh                        # Deployment script
├── docker-compose.yml               # MySQL container
├── db/
│   ├── schema.sql                   # Database schema
│   └── quiz_questions_batch*.sql    # 500 quiz questions
└── src/main/
    ├── java/com/securitylab/
    │   ├── dao/                     # Database access
    │   │   ├── CourseDAO.java
    │   │   ├── LessonDAO.java
    │   │   ├── ProgressDAO.java
    │   │   ├── QuizDAO.java
    │   │   └── UserDAO.java
    │   ├── db/
    │   │   └── DatabaseManager.java # Connection pool
    │   ├── filter/
    │   │   └── NoCacheFilter.java   # Cache prevention
    │   ├── listener/
    │   │   └── AppContextListener.java
    │   ├── model/                   # Data models
    │   │   ├── Course.java
    │   │   ├── Level.java
    │   │   ├── Lesson.java
    │   │   ├── User.java
    │   │   ├── UserProgress.java
    │   │   └── QuizQuestion.java
    │   └── servlet/                 # API endpoints
    │       ├── BaseServlet.java
    │       ├── AuthServlet.java
    │       ├── CourseServlet.java
    │       ├── LessonServlet.java
    │       ├── ProgressServlet.java
    │       └── QuizServlet.java
    └── webapp/
        ├── index.html               # SPA entry point
        ├── css/style.css            # All styles (~1500 lines)
        └── js/app.js                # SPA logic (~3700 lines)
```
