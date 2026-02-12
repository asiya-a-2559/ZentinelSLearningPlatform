---
name: zentinels-learning-platform
description: Skill for building an interactive cybersecurity education Single-Page Application with Java Servlets, MySQL, and pure HTML/CSS/JS. Use this skill when tasked with creating a full-stack learning platform featuring Theory → Demo → Lab → Quiz workflows, course management, user authentication, progress tracking, or extracting educational content from PDF resources into structured web applications. Triggers include requests for e-learning platforms, cybersecurity training apps, interactive lab environments, quiz systems, or Tomcat-deployed Java web applications.
---

# ZentinelS Learning Platform

An interactive cybersecurity education platform — a full-stack SPA where users learn security concepts through **Theory → Demo → Lab → Quiz** for every lesson.

## Quick Reference

| Task | Guide |
|------|-------|
| Build & deploy | `./deploy.sh` |
| Reset database + deploy | `./deploy.sh --db` |
| Restart Tomcat only | `./deploy.sh --restart` |
| Health check | `./deploy.sh --status` |
| Reproduce from scratch | Follow prompts in `README.md` |

---

## Core Capabilities

### 1. Full-Stack SPA Architecture

Build a zero-framework Single-Page Application with client-side routing, dynamic DOM rendering, and REST API backend.

- **Frontend**: Pure HTML/CSS/JavaScript — no React, no Vue, no Angular
- **Backend**: Java 11+ Servlets on Tomcat 9
- **Database**: MySQL 8.0 with HikariCP connection pooling
- **Build**: Maven WAR packaging

**Key pattern**: Hash-based routing (`#courses`, `#lesson/42`) with a single `index.html` shell and all views rendered via `app.js`.

---

### 2. Educational Content Pipeline

Extract and structure educational content from PDF source material into a web-deliverable format.

| Step | Action |
|------|--------|
| **Source** | 186 PDF documents across 6 course directories |
| **Extract** | Parse theory text, key concepts, practical exercises |
| **Structure** | Map to `courses → levels → categories → lessons` hierarchy |
| **Inject** | Generate JavaScript functions for theory, demo, and lab content |
| **Validate** | Verify all 100 lessons have matching content in `app.js` |

---

### 3. Interactive Demo System

45+ browser-based simulations that visualize cybersecurity concepts without requiring any backend tools.

**Demo patterns used:**
- Terminal emulators with simulated command output
- Network packet visualizations with animated flows
- File system explorers with interactive navigation
- Cipher/encoding tools with live input/output
- Protocol handshake step-through animations

**Implementation**: Each demo is a standalone JavaScript function (`renderDemo_lessonX()`) that creates DOM elements, event listeners, and animations within a container div.

---

### 4. Hands-On Lab System

45+ challenge exercises with validation, hints, and scoring — all client-side.

**Lab patterns used:**
- Command-line challenges with answer validation
- Configuration file editors with correctness checking
- Drag-and-drop network topology builders
- Multi-step guided exercises with progress indicators
- Timed challenges with scoring

**Implementation**: Each lab is a standalone JavaScript function (`renderLab_lessonX()`) with built-in validation logic and hint systems.

---

### 5. Quiz Engine

108 questions across 100 lessons with immediate feedback, score tracking, and retry capability.

**Features:**
- Multiple choice (4 options per question)
- Instant grading with correct/incorrect highlighting
- Score persistence per user session
- Per-lesson quiz association via `lesson_id` foreign key

---

### 6. Course Structure

6 progressive courses from hardware fundamentals to offensive security:

| # | Course | Lessons | Scope |
|---|--------|---------|-------|
| C1 | Computer Components & Concepts | 14 | Hardware, storage, data representation, cloud |
| C2 | OS & Virtualization | 4 | Operating systems, hypervisors, VMs |
| C3 | Linux | 17 | Navigation, permissions, shell, processes |
| C4 | Web | 9 | HTTP, DNS, cookies, web architecture |
| C5 | Networking | 24 | TCP/IP, routing, firewalls, protocols |
| C6 | Offensive Security | 32 | Reconnaissance, exploitation, privilege escalation |

**Hierarchy**: `course → level → category → lesson`

---

### 7. Design System

A complete CSS design system with dark theme, responsive layout, and consistent component library.

**Design tokens:**
- CSS custom properties for all colors, spacing, typography
- Dark background palette (`#0a0e17`, `#0f1923`, `#1a2332`)
- Cyan accent system (`#00d4ff` primary, with hover/active states)
- Glass-morphism effects with `backdrop-filter` and semi-transparent backgrounds

**Components:**
- Navigation sidebar with course/level/category tree
- Lesson cards with hover animations
- Tab system (Theory / Demo / Lab / Quiz)
- Terminal-style output containers
- Progress bars and score displays
- Modal dialogs for alerts and confirmations

---

### 8. Database Schema

8 normalized tables with proper indexing and foreign key relationships:

```
users ──────────────── user_progress
                           │
courses ── levels ── categories ── lessons ── quiz_questions
                                      │
                                 lesson_content
```

**Key tables:**
- `users` — authentication with bcrypt password hashing
- `courses/levels/categories/lessons` — 4-tier content hierarchy
- `quiz_questions` — 108 questions linked to lessons
- `lesson_content` — theory HTML stored per lesson
- `user_progress` — per-lesson completion tracking

---

### 9. REST API Layer

Servlet-based API endpoints with JSON responses (Gson serialization):

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/courses` | GET | All courses with nested levels/categories |
| `/api/lessons` | GET | Lessons by category |
| `/api/lesson/{id}` | GET | Single lesson with content |
| `/api/quiz/{lessonId}` | GET | Quiz questions for a lesson |
| `/api/quiz/submit` | POST | Submit answers, return score |
| `/api/progress` | GET/POST | User progress tracking |
| `/api/auth/login` | POST | User authentication |
| `/api/auth/register` | POST | User registration |

**Cross-cutting**: CORS filter, authentication filter, HikariCP connection pooling via `ServletContextListener`.

---

### 10. Deployment Automation

Single-script deployment with 4 modes:

```bash
./deploy.sh          # Build + deploy WAR to Tomcat
./deploy.sh --db     # Reset database + build + deploy
./deploy.sh --restart # Restart Tomcat only
./deploy.sh --status  # Health check (Java, Maven, MySQL, Tomcat, WAR)
```

**Environment variables**: `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASS`

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Language | Java | 17 |
| Build | Maven | 3.8+ |
| Server | Apache Tomcat | 9.x |
| Database | MySQL | 8.0 |
| Connection Pool | HikariCP | 5.x |
| JSON | Gson | 2.x |
| Servlet API | Jakarta/Javax | 4.0 |
| Frontend | HTML5 / CSS3 / ES6+ | — |
| Password Hashing | jBCrypt | 0.4 |

---

## Technical Skills Required

### Backend (Java)
- **Java 17** - Core language
- **Java Servlets** - HTTP request handling (`HttpServlet`, `doGet`, `doPost`)
- **JDBC** - Database connectivity and SQL operations
- **MySQL 8.0** - Relational database design and queries
- **JSON Processing** - Gson library for API responses
- **Servlet Filters** - Request/response interceptors (CORS, Auth, NoCache)
- **Session Management** - User authentication state

### Frontend (Pure JavaScript SPA)
- **Vanilla JavaScript (ES6+)** - No frameworks
- **HTML5/CSS3** - Semantic markup, Flexbox, Grid
- **Hash-based Routing** - SPA navigation without page reloads
- **Async/Await** - API communication
- **DOM Manipulation** - Dynamic content rendering
- **LocalStorage** - Client-side persistence (streaks)

### DevOps
- **Apache Tomcat 9.x** - Servlet container deployment
- **Maven** - Build automation and dependency management
- **Docker** - Containerization (MySQL)
- **Bash scripting** - Deployment automation

---

## Content Scale

| Metric | Count |
|--------|-------|
| Courses | 6 |
| Levels | 21 |
| Categories | 25 |
| Lessons | 100 |
| Quiz Questions | 108 |
| Demo Functions | 45+ |
| Lab Functions | 45+ |
| Theory Entries | ~79 |
| Source PDFs | 186 |
| Java Files | 21 |
| Java Lines | ~1,885 |
| JavaScript Lines | ~5,337 |
| CSS Lines | ~1,984 |
| SQL Lines | ~719 |

---

## Reproduction

This entire platform can be reproduced from scratch using 5 sequential prompts. See `README.md` for the complete reproduction guide.

---

## References

- **[README.md](README.md)** — Full reproduction guide with 5 prompts
- **[DATA_MODEL.md](DATA_MODEL.md)** — ERD, table definitions, indexes, Java POJOs
- **[SUMMARY.md](SUMMARY.md)** — Project overview
- **[deploy.sh](deploy.sh)** — Deployment automation script
- **[db/schema.sql](db/schema.sql)** — Complete database schema with seed data
