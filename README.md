# 🔧 ZentinelS Learning Platform — Reproduction Guide

> **Purpose:** This document provides the **skillset requirements** and a **step-by-step prompt sequence** to reproduce the exact ZentinelS application using **Claude Opus** (via VS Code Copilot, Claude.ai, or API).

---

## 📋 Table of Contents

1. [Application Overview](#1-application-overview)
2. [Required Skillset](#2-required-skillset)
3. [Prerequisites (Environment Setup)](#3-prerequisites-environment-setup)
4. [Prompt Sequence — Step by Step](#4-prompt-sequence--step-by-step)
5. [Verification Checklist](#5-verification-checklist)
6. [Architecture Reference](#6-architecture-reference)

---

## 1. Application Overview

**ZentinelS** is a Hacksplaining-style interactive cybersecurity learning platform — a Single-Page Application (SPA) with:

| Dimension | Detail |
|---|---|
| **Name** | ZentinelS – Learning Platform |
| **Style** | Dark sidebar + Light content, modern flat UI |
| **Backend** | Java 11+ Servlets (WAR deployed on Tomcat 9) |
| **Frontend** | Pure HTML/CSS/JavaScript SPA (no frameworks) |
| **Database** | MySQL 8.0 |
| **Dependencies** | Gson 2.10.1, MySQL Connector 8.0.33, HikariCP 5.0.1, SLF4J 2.0.9 |
| **Build** | Maven 3.8+ |
| **Courses** | 11 courses, 52 levels, 266 lessons, 1336 quiz questions, 51 categories |
| **Fonts** | Inter (UI) + JetBrains Mono (code) from Google Fonts |

### Course Structure

| # | Course | Lessons | Difficulty |
|---|--------|---------|------------|
| C1 | Computer Components & Concepts | 14 | Beginner |
| C2 | OS & Virtualization | 4 | Beginner |
| C3 | Linux | 17 | Beginner |
| C4 | Web | 9 | Beginner |
| C5 | Networking | 24 | Intermediate |
| C6 | Offensive Security Concepts | 32 | Intermediate |
| C7 | Servers & Services | 35 | Intermediate |
| C8 | Advanced Hardware | 16 | Intermediate |
| C9 | Security Concepts | 52 | Advanced |
| C10 | Network Infiltration | 23 | Advanced |
| C11 | AI/ML Fundamentals | 40 | Advanced |

### Each Lesson Has 4 Tabs
1. **Theory** — Rich HTML content (rendered from a client-side `theories` object keyed by lesson slug)
2. **Demo** — Interactive JavaScript simulation (e.g., live SQLi sandbox, logic gate builder, terminal emulator)
3. **Lab** — Multiple-choice challenge question rendered by a `labGeneric()` helper
4. **Quiz** — Pulled from the database, graded server-side

---

## 2. Required Skillset

### Person Using the Prompt
- **Familiarity with terminal/CLI** — running Maven, MySQL, Tomcat commands
- **Basic understanding of file paths** — navigating a Maven project structure
- **MySQL admin basics** — creating databases, running SQL scripts
- **Tomcat basics** — deploying WAR files, starting/stopping the server
- **VS Code or similar editor** — to interact with Claude Copilot or paste prompt outputs

### Technical Skills Claude Will Apply
The prompt relies on Claude having knowledge of:

| Skill | Usage |
|---|---|
| **Java Servlets (javax.servlet)** | REST API endpoints for auth, courses, lessons, progress, quiz |
| **Maven** | pom.xml, WAR packaging, dependency management |
| **MySQL 8.0** | Schema design, seed data, SHA2 password hashing |
| **HikariCP** | Database connection pooling |
| **Gson** | JSON serialization in servlets |
| **Pure JavaScript SPA** | Hash-based routing, DOM manipulation, fetch API, no frameworks |
| **CSS3 Custom Properties** | Design system with CSS variables, responsive layout |
| **Cybersecurity Concepts** | Content for all 6 courses (hardware, OS, Linux, web, networking, offensive security) |
| **Interactive Demos** | Building simulated attack environments (SQLi, XSS, CSRF, etc.) in pure JS |

---

## 3. Prerequisites (Environment Setup)

Before running the prompts, ensure you have:

```
✅ JDK 11 or 17 installed (JAVA_HOME set)
✅ Apache Maven 3.8+ installed
✅ MySQL 8.0 installed and running
✅ Apache Tomcat 9.0.x installed
✅ A MySQL user created:
   CREATE USER 'securitylab'@'localhost' IDENTIFIED BY 'securitylab123';
   GRANT ALL PRIVILEGES ON securitylab.* TO 'securitylab'@'localhost';
   FLUSH PRIVILEGES;
✅ VS Code with Claude / Copilot extension (or claude.ai access)
```

### Environment Variables for Tomcat
Set these in Tomcat's `bin/setenv.sh` (create if it doesn't exist):
```bash
export DB_HOST=localhost
export DB_PORT=3306
export DB_NAME=securitylab
export DB_USER=securitylab
export DB_PASS=securitylab123
```

---

## 4. Prompt Sequence — Step by Step

> ⚠️ **IMPORTANT:** Run these prompts **one at a time**, wait for full completion, and verify before proceeding. Each prompt builds on the previous output. If using Claude.ai (not Copilot), you will need to manually create the files from the output.

---

### PROMPT 1 — Project Scaffolding + Backend

```
Create a Java web application called "ZentinelS – Learning Platform" — a Hacksplaining-style interactive cybersecurity education Single-Page Application.

TECHNOLOGY STACK:
- Java 11+ Servlets (javax.servlet-api 4.0.1), deployed as WAR on Tomcat 9
- MySQL 8.0 database via HikariCP 5.0.1 connection pool
- Gson 2.10.1 for JSON serialization
- SLF4J 2.0.9 for logging
- Pure HTML/CSS/JavaScript frontend — NO React, Angular, or any framework
- Maven build system, finalName = "securitylab"

PROJECT STRUCTURE:
securitylab/
├── pom.xml
├── db/
│   └── schema.sql
├── src/main/
│   ├── java/com/securitylab/
│   │   ├── db/DatabaseManager.java        (HikariCP pool, reads DB_HOST/DB_PORT/DB_NAME/DB_USER/DB_PASS env vars)
│   │   ├── model/
│   │   │   ├── User.java                  (id, username, email, passwordHash, displayName, role)
│   │   │   ├── Course.java                (id, title, slug, description, icon, color, difficulty, sortOrder + lessonCount, completedCount transients)
│   │   │   ├── Level.java                 (id, courseId, title, description, levelNumber)
│   │   │   ├── Category.java              (id, name, slug, description, icon)
│   │   │   ├── Lesson.java                (id, categoryId, levelId, courseId, title, slug, difficulty, summary, description, demoHtml, labHtml, labSolution, sortOrder)
│   │   │   ├── QuizQuestion.java          (id, lessonId, question, optionA-D, correct, explanation)
│   │   │   └── UserProgress.java          (id, userId, lessonId, lessonStatus, demoCompleted, labCompleted, quizCompleted, quizScore)
│   │   ├── dao/
│   │   │   ├── UserDAO.java               (findByUsername, create with SHA2 hashing, authenticate)
│   │   │   ├── CourseDAO.java             (findAll with lesson counts, findBySlug with levels and lessons)
│   │   │   ├── LessonDAO.java             (findAll, findBySlug, findByCourse)
│   │   │   ├── QuizDAO.java               (findByLessonId)
│   │   │   └── ProgressDAO.java           (findByUser, upsert, markDemoComplete, markLabComplete, submitQuiz)
│   │   ├── servlet/
│   │   │   ├── BaseServlet.java           (extends HttpServlet, JSON response helpers, session user extraction)
│   │   │   ├── AuthServlet.java           (POST /api/auth/login, /api/auth/register, /api/auth/logout, GET /api/auth/me)
│   │   │   ├── CourseServlet.java         (GET /api/courses, GET /api/courses/{slug})
│   │   │   ├── LessonServlet.java         (GET /api/lessons, GET /api/lessons/{slug})
│   │   │   ├── QuizServlet.java           (GET /api/quiz/{lessonId}, POST /api/quiz/submit)
│   │   │   └── ProgressServlet.java       (GET /api/progress, POST /api/progress/demo, /api/progress/lab)
│   │   ├── filter/CorsFilter.java         (CORS headers for all /api/* requests)
│   │   └── listener/AppContextListener.java (initializes DatabaseManager on startup)
│   └── webapp/
│       ├── WEB-INF/web.xml                (display-name, welcome-file index.html, session-timeout 60)
│       ├── index.html
│       ├── css/style.css
│       └── js/app.js

SERVLET URL MAPPINGS (use @WebServlet annotations):
- AuthServlet → /api/auth/*
- CourseServlet → /api/courses/*
- LessonServlet → /api/lessons/*
- QuizServlet → /api/quiz/*
- ProgressServlet → /api/progress/*
- CorsFilter → /api/*

DATABASE DESIGN:
- users: id, username (unique), email (unique), password_hash (SHA2-256), display_name, avatar_url, role ENUM('student','instructor','admin'), created_at
- courses: id, title, slug (unique), description, icon (emoji), color (hex), difficulty ENUM, sort_order
- levels: id, course_id FK, title, description, level_number, sort_order
- categories: id, name (unique), slug (unique), description, icon, sort_order
- lessons: id, category_id FK, level_id FK nullable, course_id FK nullable, title, slug (unique), difficulty, summary, description LONGTEXT, demo_html LONGTEXT, lab_html LONGTEXT, lab_solution, sort_order
- quiz_questions: id, lesson_id FK, question, option_a/b/c/d, correct CHAR(1), explanation, sort_order
- user_progress: id, user_id FK, lesson_id FK, lesson_status ENUM, demo_completed BOOL, lab_completed BOOL, quiz_completed BOOL, quiz_score INT, unique(user_id, lesson_id)
- quiz_attempts: id, user_id FK, lesson_id FK, question_id FK, selected_option, is_correct BOOL, attempted_at

SEED DATA (include in schema.sql):
- 2 demo users: demo/demo123 (student), admin/admin123 (admin)
- 6 courses (C1-C6), 21 levels, 25 categories, 100 lessons, 108 quiz questions
- Course breakdown: C1 Computer Components & Concepts (14 lessons, 5 levels), C2 OS & Virtualization (4 lessons, 2 levels), C3 Linux (17 lessons, 5 levels), C4 Web (9 lessons, 2 levels), C5 Networking (24 lessons, 5 levels), C6 Offensive Security Concepts (32 lessons, 2 levels)

KEY BACKEND BEHAVIORS:
- DatabaseManager reads env vars: DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS
- Authentication uses SHA2(password, 256) — stored in session
- CourseDAO.findAll returns each course with lessonCount and completedCount for the logged-in user
- CourseDAO.findBySlug returns course with nested levels array, each level containing its lessons array
- ProgressDAO.upsert creates or updates progress; separate endpoints for demo/lab/quiz completion
- All servlets return JSON via Gson; errors return { "error": "message" }

Generate ALL files completely — no placeholders, no "TODO", no truncation.
```

---

### PROMPT 2 — Frontend HTML + CSS

```
Now create the complete frontend for ZentinelS. Generate the full index.html and style.css.

INDEX.HTML STRUCTURE:
- Auth overlay modal (login/register form with username, password, optional name)
  - Demo credentials hint: demo / demo123
- App layout: sidebar (dark) + main content (light)
- Sidebar contains:
  - Brand: ⚡ ZentinelS
  - User avatar section (hidden until login)
  - Navigation: Dashboard, Courses, All Lessons | My Progress, Achievements | Sign In, Sign Out
  - Footer: "ZentinelS v2.0 © 2025 Education Only"
- Main area: topbar (hamburger toggle, breadcrumb, Sign Up button) + #mainContent div
- Toast container for notifications
- Google Fonts: Inter (400-800) + JetBrains Mono (400,600)
- Favicon: ⚡ emoji SVG

STYLE.CSS — DESIGN SYSTEM:
- CSS custom properties in :root for the entire color palette:
  - Backgrounds: --main-bg (#f0f4f8), --card-bg (#ffffff), --sidebar-bg (#0f172a), --sidebar-hover (#1e293b)
  - Text: --text-dark (#1a202c), --text-body (#4a5568), --text-muted (#a0aec0)
  - Accents: --accent-blue (#4c9aff), --accent-green (#48bb78), --accent-red (#e53e3e), --accent-orange (#ed8936), --accent-purple (#9f7aea)
  - Borders: --border-light (#e2e8f0)
  - Shadows: --shadow-sm, --shadow-md, --shadow-lg
  - Radii: --radius-sm (8px), --radius-md (12px), --radius-lg (16px)
  - Transition: --transition (all 0.2s ease)
  - Also add aliases: --success (#48bb78), --danger (#e53e3e), --warning (#d69e2e), --accent (#4c9aff), --bg-secondary (#f7fafc), --border (#e2e8f0)

- Layout: CSS Grid — sidebar 260px fixed, main fills remaining
- Sidebar: fixed height 100vh, dark background, scrollable nav, brand with glow effect
- Cards: white background, border-radius, shadow, hover lift effect
- Buttons (.btn base class): inline-flex, font-family: inherit, border: 1.5px solid transparent, radius, font-weight 600, cursor pointer
  - .btn-primary: blue background, white text
  - .btn-outline: transparent bg, blue border and text
  - .btn-sm: smaller padding
  - .btn-block: full width
- Auth modal: centered overlay with backdrop blur, slide-in animation
- Course cards: colored left border (4px), icon, title, description, difficulty badge, progress bar
- Lesson cards: clean rows with status indicator (⬚ not started, 🔵 in progress, ✅ completed)
- Tab system: .tab-nav with .tab-btn items, active gets blue bottom border + blue text
- Toast notifications: slide in from top-right, color-coded (info/success/error)
- Responsive: sidebar collapses on mobile (transform translateX), hamburger toggle

CRITICAL BUTTON STYLING:
- .back-btn: must have appearance: none, -webkit-appearance: none, font-family: inherit, outline: none, box-shadow, modern flat design matching the card aesthetic. Color: accent-blue text, card-bg background, border-light border. Hover: blue tint background, translateX(-2px) slide.
- .lab-option buttons: must have appearance: none, -webkit-appearance: none, font-family: inherit, outline: none. Full-width block buttons with card-bg background, border-light border, shadow-sm. Hover: blue border, translateX(4px) slide. States: .selected (blue ring), .correct (green bg + ✓ prefix), .wrong (red bg + ✗ prefix + shake animation).
- .demo-btn: blue background, white text, border: none, font-family: inherit, hover darkens.

ADDITIONAL CSS COMPONENTS NEEDED:
- .demo-section, .demo-controls, .demo-output, .demo-badge, .demo-badge-info
- .lab-header, .lab-badge, .lab-badge-challenge, .lab-title, .lab-body, .lab-options, .lab-feedback
- .theory-content with styled h1-h4, paragraphs, ul/ol lists, code blocks, .info-box, .warning-box
- Score/progress page: stat cards grid, progress bars
- Achievements page: achievement cards with lock/unlock states
- Loading spinner animation

Generate the complete files — no truncation, no "..." placeholders.
```

---

### PROMPT 3 — Frontend JavaScript SPA (Core + Router + Auth + Rendering)

```
Now create the complete app.js for ZentinelS. This is a self-contained IIFE SPA. Generate the FULL file.

ARCHITECTURE:
- Wrapped in (function() { 'use strict'; ... })();
- const API = '/securitylab/api';
- State object: user, courses, lessons, categories, progress, currentLesson, quizData, quizIndex, quizScore, quizAnswered, quizAnswers
- DOM helpers: $(selector, parent), $$(selector, parent), el(tag, cls, html)
- Progress helpers: isLessonCompleted(id), isLessonStarted(id), getLessonProgress(id)
- API helper: async api(path, opts) — fetch with credentials, JSON parse, error handling
- toast(msg, type) — creates toast notifications
- esc(s) — HTML escape function for XSS prevention

ROUTING (hash-based):
- #/ → renderDashboard
- #/courses → renderCourses
- #/courses/{slug} → renderCourseDetail
- #/lesson/{slug} → renderLessonDetail
- #/lessons → renderAllLessons
- #/score → renderScore
- #/achievements → renderAchievements
- window.onhashchange = router; DOMContentLoaded → initAuth(), router()

AUTH SYSTEM:
- initAuth(): binds login/register modal, form submission, login/register/logout API calls
- updateAuthUI(): shows/hides sidebar user section, sign in/out buttons
- checkSession(): GET /api/auth/me on load
- loadProgress(): GET /api/progress after login

PAGES:
1. renderDashboard: welcome hero, stat cards (total courses, completed lessons, quiz avg, achievements), recent courses grid
2. renderCourses: grid of course cards with icon, title, description, difficulty badge, lesson count, progress bar
3. renderCourseDetail(slug): course header with back button, level accordion — each level expands to show its lessons with completion status
4. renderAllLessons: search bar + filterable list of all 100 lessons grouped by course
5. renderLessonDetail(slug): lesson header with back button + 4-tab interface (Theory | Demo | Lab | Quiz)
6. renderScore: progress stats, per-course breakdown
7. renderAchievements: achievement cards (beginner, explorer, completionist, etc.)

LESSON DETAIL — 4 TABS:
Each tab is rendered into the same content pane. Active tab gets highlighted.

TAB 1 — THEORY:
- renderTheory(lesson) calls generateTheoryContent(lesson)
- Contains a large `theories` object keyed by lesson slug
- Each entry is a multi-paragraph HTML string with headers, lists, code blocks, .info-box, .warning-box
- Must cover ALL 100 lesson slugs across all 6 courses
- Content should be educational, detailed (500-1500 words per lesson), covering the actual cybersecurity/IT topic

TAB 2 — DEMO:
- renderDemo(lesson) uses a demoGenerators map (slug → function)
- Each demo function takes a pane element and builds interactive HTML
- Examples: SQLi demo with fake login form + SQL visualization, XSS demo with reflected script injection, logic gate interactive builder, terminal command simulator, binary converter, etc.
- Must have demo functions for ALL 100 lessons (use slug-based mapping)

TAB 3 — LAB:
- renderLab(lesson) uses a labGenerators map (slug → function)  
- labGeneric(pane, title, question, answers, correctIdx) — reusable helper that renders a multiple-choice challenge
- Each lab function calls labGeneric with a topic-appropriate question
- On correct answer: green highlight, ✓ prefix, success feedback, POST to /api/progress/lab
- On wrong answer: red highlight, ✗ prefix, shake animation, retry prompt
- Must have lab functions for ALL 100 lessons

TAB 4 — QUIZ:
- renderQuizTab(lesson): fetches quiz questions from API, renders one at a time
- renderQuizQuestion(pane): shows question + 4 option buttons (A/B/C/D)
- On answer: highlight correct/wrong, show explanation, auto-advance after 1.5s
- renderQuizResults(pane): final score card with percentage, badge, per-question review

IMPORTANT NOTES:
- All HTML generated in JS must use the esc() function for user-supplied data
- Demo/lab content is purely client-side (no server rendering)
- The theories object, demo generators map, and lab generators map together will make this file very large (5000+ lines) — that is expected and correct
- Use single quotes for JS strings; be careful with nested quotes (escape properly)
- All button elements in generated HTML must NOT rely on browser default styling

Generate the COMPLETE file. Do not truncate, skip, or use placeholders like "// ... similar for other lessons". Every lesson slug must have a theory entry, a demo function, and a lab function.
```

> ⚠️ **NOTE:** This is the largest prompt. Claude may need to generate this in multiple turns due to output limits. If truncated, follow up with:

```
Continue generating app.js from where you left off. Do not repeat what was already generated. Pick up exactly at the last function/line you wrote.
```

Repeat until the file ends with `})();`

---

### PROMPT 4 — Database Setup + Build + Deploy

```
Now set up the database and deploy the application.

1. Run the schema.sql against MySQL:
   mysql -u securitylab -psecuritylab123 < db/schema.sql

2. Build the WAR:
   mvn clean package -DskipTests

3. Copy to Tomcat:
   cp target/securitylab.war $CATALINA_HOME/webapps/

4. Start Tomcat if not running:
   $CATALINA_HOME/bin/startup.sh

5. Verify by opening: http://localhost:8080/securitylab/

Run these commands and report any errors.
```

---

### PROMPT 5 — Verification & Bug Fixes

```
Open http://localhost:8080/securitylab/ and verify the following works:

1. Dashboard loads with stats and course cards
2. Click a course → course detail page with level accordion
3. Click a lesson → lesson detail with 4 tabs (Theory, Demo, Lab, Quiz)
4. Theory tab shows rich educational content
5. Demo tab shows an interactive simulation
6. Lab tab shows a multiple-choice question with proper styled buttons
7. Quiz tab loads questions from database
8. "← All Courses" back button looks like a modern flat button (NOT browser default)
9. Lab option buttons look like modern card-style buttons (NOT browser default 3D bevel)
10. Auth modal works: login with demo/demo123
11. Progress tracking works after login

If any JavaScript syntax errors appear in the browser console, or any buttons look like unstyled browser defaults, fix them immediately.

Common issues to check:
- Unescaped quotes inside JS string literals
- Missing CSS classes referenced in JS-generated HTML
- CSS variables used in JS inline styles but not defined in :root
- Button elements missing appearance:none and font-family:inherit
```

---

## 5. Verification Checklist

After all prompts are completed, verify:

| # | Check | Expected |
|---|-------|----------|
| 1 | `mvn clean package` | BUILD SUCCESS |
| 2 | MySQL: `SELECT COUNT(*) FROM lessons` | 100 |
| 3 | MySQL: `SELECT COUNT(*) FROM quiz_questions` | 108 |
| 4 | MySQL: `SELECT COUNT(*) FROM courses` | 6 |
| 5 | Browser: no console errors | Clean console |
| 6 | Dashboard renders | Stats + course cards |
| 7 | All 6 courses accessible | Click each one |
| 8 | Theory tab has content | Not empty for any lesson |
| 9 | Demo tab is interactive | Buttons/inputs work |
| 10 | Lab tab has styled buttons | Modern flat design, not browser default |
| 11 | Quiz tab loads questions | 1-3 questions per lesson |
| 12 | Login works | demo / demo123 |
| 13 | Progress saves | Refresh maintains state |
| 14 | Back buttons are modern | No 3D bevel borders |
| 15 | Mobile responsive | Sidebar collapses |

---

## 6. Architecture Reference

### File Inventory

```
securitylab/
├── pom.xml                                    (81 lines)
├── db/schema.sql                              (719 lines)
├── src/main/
│   ├── java/com/securitylab/
│   │   ├── db/DatabaseManager.java            (67 lines)
│   │   ├── model/
│   │   │   ├── User.java                      (34 lines)
│   │   │   ├── Course.java                    (54 lines)
│   │   │   ├── Level.java                     (42 lines)
│   │   │   ├── Category.java                  (32 lines)
│   │   │   ├── Lesson.java                    (67 lines)
│   │   │   ├── QuizQuestion.java              (44 lines)
│   │   │   └── UserProgress.java              (55 lines)
│   │   ├── dao/
│   │   │   ├── UserDAO.java                   (99 lines)
│   │   │   ├── CourseDAO.java                 (141 lines)
│   │   │   ├── LessonDAO.java                 (157 lines)
│   │   │   ├── QuizDAO.java                   (97 lines)
│   │   │   └── ProgressDAO.java               (205 lines)
│   │   ├── servlet/
│   │   │   ├── BaseServlet.java               (108 lines)
│   │   │   ├── AuthServlet.java               (141 lines)
│   │   │   ├── CourseServlet.java             (71 lines)
│   │   │   ├── LessonServlet.java             (100 lines)
│   │   │   ├── QuizServlet.java               (177 lines)
│   │   │   └── ProgressServlet.java           (119 lines)
│   │   ├── filter/CorsFilter.java             (37 lines)
│   │   └── listener/AppContextListener.java   (38 lines)
│   └── webapp/
│       ├── WEB-INF/web.xml                    (19 lines)
│       ├── index.html                         (130 lines)
│       ├── css/style.css                      (~1984 lines)
│       └── js/app.js                          (~5337 lines)
├── TOTAL JAVA: ~1,885 lines
├── TOTAL PROJECT: ~8,120+ lines
```

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/login | Login (username, password) |
| POST | /api/auth/register | Register (username, password, email, displayName) |
| POST | /api/auth/logout | Logout (clear session) |
| GET | /api/auth/me | Current session user |
| GET | /api/courses | All courses with lesson counts |
| GET | /api/courses/{slug} | Course detail with levels + lessons |
| GET | /api/lessons | All lessons |
| GET | /api/lessons/{slug} | Single lesson by slug |
| GET | /api/quiz/{lessonId} | Quiz questions for a lesson |
| POST | /api/quiz/submit | Submit quiz answers |
| GET | /api/progress | User's progress (requires auth) |
| POST | /api/progress/demo | Mark demo complete |
| POST | /api/progress/lab | Mark lab complete |

### SPA Routes

| Hash | Page |
|------|------|
| `#/` | Dashboard |
| `#/courses` | All Courses |
| `#/courses/{slug}` | Course Detail (level accordion) |
| `#/lessons` | All Lessons (searchable) |
| `#/lesson/{slug}` | Lesson Detail (4 tabs) |
| `#/score` | My Progress |
| `#/achievements` | Achievements |

### CSS Design Tokens (Key Variables)

```css
--main-bg: #f0f4f8          --accent-blue: #4c9aff
--card-bg: #ffffff           --accent-green: #48bb78
--sidebar-bg: #0f172a       --accent-red: #e53e3e
--text-dark: #1a202c        --accent-purple: #9f7aea
--text-body: #4a5568        --border-light: #e2e8f0
--radius-sm: 8px            --radius-md: 12px
--shadow-sm: 0 1px 3px...   --transition: all 0.2s ease
```

---

## 💡 Tips for Success

1. **Token Limits:** The app.js file is ~5,300 lines. Claude may not generate it in one pass. Use "continue from where you left off" prompts.

2. **Largest Sections:** The `theories` object (~2,000 lines), demo functions (~1,200 lines), and lab functions (~800 lines) are the bulk. Prompt for these separately if needed.

3. **Common Bugs to Watch For:**
   - Unescaped single quotes inside single-quoted JS strings (e.g., `'it's'` → `'it\\'s'` or use backticks)
   - Missing CSS classes for JS-generated HTML elements
   - CSS variables used in JS `style` attributes but not defined in `:root`
   - `<button>` elements need `appearance: none; font-family: inherit;` to not look like browser defaults

4. **Build Command:**
   ```bash
   cd securitylab && mvn clean package -DskipTests -q && cp target/securitylab.war $CATALINA_HOME/webapps/
   ```

5. **Quick DB Reset:**
   ```bash
   mysql -u securitylab -psecuritylab123 < db/schema.sql
   ```

---

*Generated from a working ZentinelS v2.0 instance. All prompts tested with Claude Opus.*
