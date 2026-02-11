# 📊 ZentinelS – Data Model Diagram

> **Database:** MySQL 8.0 · **Engine:** InnoDB · **Charset:** utf8mb4

---

## Entity Relationship Diagram (ERD)

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│                            ZentinelS – Learning Platform Data Model                             │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘

    ┌──────────────────────┐          ┌──────────────────────────┐
    │       USERS          │          │         COURSES          │
    │  (2 seed records)    │          │     (6 records)          │
    ├──────────────────────┤          ├──────────────────────────┤
    │ PK id            INT │          │ PK id              INT   │
    │    username  VCR(50) │◄──┐      │    title        VCR(200) │
    │ UK email    VCR(150) │   │      │ UK slug         VCR(200) │
    │    password_ VCR(255)│   │      │    description     TEXT  │
    │    display_  VCR(100)│   │      │    icon         VCR(50)  │
    │    avatar_   VCR(500)│   │      │    color        VCR(20)  │
    │    role       ENUM   │   │      │    difficulty    ENUM    │
    │    created_at  TS    │   │      │    sort_order    INT     │
    └──────────┬───────────┘   │      │    created_at    TS      │
               │               │      └────────────┬─────────────┘
               │               │                   │
               │ 1             │                   │ 1
               │               │                   │
               ▼ ∞             │                   ▼ ∞
    ┌──────────────────────┐   │      ┌──────────────────────────┐
    │   USER_PROGRESS      │   │      │         LEVELS           │
    │   (tracking table)   │   │      │     (21 records)         │
    ├──────────────────────┤   │      ├──────────────────────────┤
    │ PK id            INT │   │      │ PK id              INT   │
    │ FK user_id       INT │───┘      │ FK course_id       INT   │──────┐
    │ FK lesson_id     INT │──────┐   │    title        VCR(200) │      │
    │    lesson_status ENUM│      │   │    description     TEXT  │      │
    │    demo_completed BOL│      │   │    level_number    INT   │      │
    │    lab_completed  BOL│      │   │    sort_order      INT   │      │
    │    quiz_completed BOL│      │   └────────────┬─────────────┘      │
    │    quiz_score     INT│      │                │                    │
    │    started_at     TS │      │                │ 1                  │
    │    completed_at   TS │      │                │                    │
    │ UK (user_id,         │      │                │                    │
    │    lesson_id)        │      │                │                    │
    └──────────────────────┘      │                │                    │
                                  │                │                    │
    ┌──────────────────────┐      │                ▼ ∞                  │
    │     CATEGORIES       │      │   ┌──────────────────────────────┐  │
    │   (25 records)       │      │   │          LESSONS             │  │
    ├──────────────────────┤      │   │      (100 records)           │  │
    │ PK id            INT │      │   ├──────────────────────────────┤  │
    │ UK name      VCR(100)│      │   │ PK id                 INT   │  │
    │ UK slug      VCR(100)│      │   │ FK category_id        INT   │──┼──┐
    │    description   TEXT│      │   │ FK level_id       INT NULL   │──┘  │
    │    icon       VCR(50)│      │   │ FK course_id      INT NULL  │─────┘
    │    sort_order     INT│      │   │    title           VCR(200) │
    │    created_at     TS │      │   │ UK slug            VCR(200) │
    └──────────┬───────────┘      │   │    difficulty       ENUM    │
               │                  │   │    summary           TEXT   │
               │ 1                │   │    description    LONGTEXT  │
               │                  │   │    demo_html      LONGTEXT  │
               └──────────────────┼──▶│    lab_html       LONGTEXT  │
                                  │   │    lab_solution      TEXT   │
                                  │   │    sort_order        INT    │
                                  │   │    created_at        TS     │
                                  │   │    updated_at        TS     │
                                  │   └─────────┬──────────────────┘
                                  │             │
                                  │             │ 1
                                  │             │
                                  │             ▼ ∞
                                  │   ┌──────────────────────────────┐
                                  │   │      QUIZ_QUESTIONS          │
                                  │   │      (108 records)           │
                                  │   ├──────────────────────────────┤
                                  │   │ PK id                 INT   │
                                  │   │ FK lesson_id           INT  │
                                  │   │    question           TEXT   │
                                  │   │    option_a        VCR(500) │
                                  │   │    option_b        VCR(500) │
                                  │   │    option_c        VCR(500) │
                                  │   │    option_d        VCR(500) │
                                  │   │    correct         CHAR(1)  │
                                  │   │    explanation       TEXT   │
                                  │   │    sort_order        INT    │
                                  │   └─────────┬──────────────────┘
                                  │             │
                                  │             │ 1
    ┌──────────────────────┐      │             │
    │    QUIZ_ATTEMPTS     │      │             │
    │  (attempt tracking)  │      │             │
    ├──────────────────────┤      │             │
    │ PK id            INT │      │             │
    │ FK user_id       INT │──────┤             │
    │ FK lesson_id     INT │──────┘             │
    │ FK question_id   INT │────────────────────┘
    │    selected_option C1│
    │    is_correct    BOOL│
    │    attempted_at    TS│
    └──────────────────────┘
```

---

## Relationship Summary

```
  COURSES ──────< LEVELS ──────< LESSONS >────── CATEGORIES
     │                             │  │
     │                             │  └──────< QUIZ_QUESTIONS
     │                             │                  │
     └─────────────────────────────┼──────────────────┤
                                   │                  │
  USERS ──────< USER_PROGRESS >────┘                  │
     │                                                │
     └──────< QUIZ_ATTEMPTS >─────────────────────────┘
```

| Parent | → | Child | Cardinality | ON DELETE |
|--------|---|-------|-------------|-----------|
| **courses** | → | **levels** | 1 : ∞ | CASCADE |
| **courses** | → | **lessons** | 1 : ∞ | SET NULL |
| **levels** | → | **lessons** | 1 : ∞ | SET NULL |
| **categories** | → | **lessons** | 1 : ∞ | CASCADE |
| **lessons** | → | **quiz_questions** | 1 : ∞ | CASCADE |
| **users** | → | **user_progress** | 1 : ∞ | CASCADE |
| **lessons** | → | **user_progress** | 1 : ∞ | CASCADE |
| **users** | → | **quiz_attempts** | 1 : ∞ | CASCADE |
| **lessons** | → | **quiz_attempts** | 1 : ∞ | CASCADE |
| **quiz_questions** | → | **quiz_attempts** | 1 : ∞ | CASCADE |

---

## Table Details

### 🔵 USERS
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | INT | PK, AUTO_INCREMENT | |
| `username` | VARCHAR(50) | NOT NULL, UNIQUE | Login identifier |
| `email` | VARCHAR(150) | NOT NULL, UNIQUE | Email address |
| `password_hash` | VARCHAR(255) | NOT NULL | SHA2-256 hash |
| `display_name` | VARCHAR(100) | | Shown in UI |
| `avatar_url` | VARCHAR(500) | | Profile picture URL |
| `role` | ENUM | DEFAULT 'student' | student \| instructor \| admin |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

### 🟢 COURSES
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | INT | PK, AUTO_INCREMENT | |
| `title` | VARCHAR(200) | NOT NULL | Course name |
| `slug` | VARCHAR(200) | NOT NULL, UNIQUE | URL-friendly ID |
| `description` | TEXT | | Course overview |
| `icon` | VARCHAR(50) | DEFAULT '🛡️' | Emoji icon |
| `color` | VARCHAR(20) | DEFAULT '#58a6ff' | Theme hex color |
| `difficulty` | ENUM | DEFAULT 'beginner' | beginner \| intermediate \| advanced |
| `sort_order` | INT | DEFAULT 0 | Display order |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

### 🟡 LEVELS
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | INT | PK, AUTO_INCREMENT | |
| `course_id` | INT | FK → courses.id, NOT NULL | Parent course |
| `title` | VARCHAR(200) | NOT NULL | Level name |
| `description` | TEXT | | Level overview |
| `level_number` | INT | NOT NULL, DEFAULT 1 | Sequence within course |
| `sort_order` | INT | DEFAULT 0 | Display order |

### 🟠 CATEGORIES
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | INT | PK, AUTO_INCREMENT | |
| `name` | VARCHAR(100) | NOT NULL, UNIQUE | Category name |
| `slug` | VARCHAR(100) | NOT NULL, UNIQUE | URL-friendly ID |
| `description` | TEXT | | Category overview |
| `icon` | VARCHAR(50) | DEFAULT 'shield' | Icon key |
| `sort_order` | INT | DEFAULT 0 | Display order |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |

### 🔴 LESSONS
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | INT | PK, AUTO_INCREMENT | |
| `category_id` | INT | FK → categories.id, NOT NULL | Topic category |
| `level_id` | INT | FK → levels.id, NULLABLE | Parent level |
| `course_id` | INT | FK → courses.id, NULLABLE | Parent course |
| `title` | VARCHAR(200) | NOT NULL | Lesson name |
| `slug` | VARCHAR(200) | NOT NULL, UNIQUE | URL-friendly ID |
| `difficulty` | ENUM | DEFAULT 'beginner' | Difficulty level |
| `summary` | TEXT | | Short description |
| `description` | LONGTEXT | | Full theory content |
| `demo_html` | LONGTEXT | | Interactive demo markup |
| `lab_html` | LONGTEXT | | Lab exercise markup |
| `lab_solution` | TEXT | | Expected lab answer |
| `sort_order` | INT | DEFAULT 0 | Display order |
| `created_at` | TIMESTAMP | DEFAULT NOW() | |
| `updated_at` | TIMESTAMP | AUTO-UPDATE | Last modified |

### 🟣 QUIZ_QUESTIONS
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | INT | PK, AUTO_INCREMENT | |
| `lesson_id` | INT | FK → lessons.id, NOT NULL | Parent lesson |
| `question` | TEXT | NOT NULL | Question text |
| `option_a` | VARCHAR(500) | NOT NULL | Choice A |
| `option_b` | VARCHAR(500) | NOT NULL | Choice B |
| `option_c` | VARCHAR(500) | NOT NULL | Choice C |
| `option_d` | VARCHAR(500) | NOT NULL | Choice D |
| `correct` | CHAR(1) | NOT NULL | A \| B \| C \| D |
| `explanation` | TEXT | | Answer explanation |
| `sort_order` | INT | DEFAULT 0 | Display order |

### ⚪ USER_PROGRESS
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | INT | PK, AUTO_INCREMENT | |
| `user_id` | INT | FK → users.id, NOT NULL | Student |
| `lesson_id` | INT | FK → lessons.id, NOT NULL | Lesson tracked |
| `lesson_status` | ENUM | DEFAULT 'not_started' | not_started \| in_progress \| completed |
| `demo_completed` | BOOLEAN | DEFAULT FALSE | Demo tab finished |
| `lab_completed` | BOOLEAN | DEFAULT FALSE | Lab tab finished |
| `quiz_completed` | BOOLEAN | DEFAULT FALSE | Quiz tab finished |
| `quiz_score` | INT | DEFAULT 0 | Quiz percentage |
| `started_at` | TIMESTAMP | NULLABLE | First interaction |
| `completed_at` | TIMESTAMP | NULLABLE | All tabs done |
| | | **UNIQUE(user_id, lesson_id)** | One row per user×lesson |

### ⚫ QUIZ_ATTEMPTS
| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| `id` | INT | PK, AUTO_INCREMENT | |
| `user_id` | INT | FK → users.id, NOT NULL | Student |
| `lesson_id` | INT | FK → lessons.id, NOT NULL | Lesson context |
| `question_id` | INT | FK → quiz_questions.id, NOT NULL | Question answered |
| `selected_option` | CHAR(1) | NOT NULL | A \| B \| C \| D |
| `is_correct` | BOOLEAN | NOT NULL | Graded result |
| `attempted_at` | TIMESTAMP | DEFAULT NOW() | |

---

## Indexes

| Table | Index | Columns | Type |
|-------|-------|---------|------|
| users | PRIMARY | id | Clustered |
| users | username | username | UNIQUE |
| users | email | email | UNIQUE |
| courses | PRIMARY | id | Clustered |
| courses | slug | slug | UNIQUE |
| levels | PRIMARY | id | Clustered |
| levels | idx_course | course_id | Non-unique |
| categories | PRIMARY | id | Clustered |
| categories | name | name | UNIQUE |
| categories | slug | slug | UNIQUE |
| lessons | PRIMARY | id | Clustered |
| lessons | slug | slug | UNIQUE |
| lessons | idx_category | category_id | Non-unique |
| lessons | idx_level | level_id | Non-unique |
| lessons | idx_course | course_id | Non-unique |
| quiz_questions | PRIMARY | id | Clustered |
| quiz_questions | idx_lesson | lesson_id | Non-unique |
| user_progress | PRIMARY | id | Clustered |
| user_progress | uk_user_lesson | (user_id, lesson_id) | UNIQUE |
| quiz_attempts | PRIMARY | id | Clustered |
| quiz_attempts | idx_user_lesson | (user_id, lesson_id) | Non-unique |

---

## Data Volume (Current Seed)

```
┌──────────────────┬───────┬──────────────────────────────────────┐
│ Table            │ Rows  │ Notes                                │
├──────────────────┼───────┼──────────────────────────────────────┤
│ users            │     2 │ demo (student), admin (admin)        │
│ courses          │     6 │ C1–C6 matching resources/ dirs       │
│ levels           │    21 │ 5+2+5+2+5+2 across 6 courses        │
│ categories       │    25 │ Hardware → Exploitation Tools        │
│ lessons          │   100 │ 14+4+17+9+24+32 across courses      │
│ quiz_questions   │   108 │ ~1-3 per lesson                     │
│ user_progress    │     1 │ grows per user interaction           │
│ quiz_attempts    │     2 │ grows per quiz answer                │
└──────────────────┴───────┴──────────────────────────────────────┘
```

---

## Domain Model (Java POJOs)

```
┌─────────────────┐   ┌────────────────────┐   ┌─────────────────┐
│      User       │   │      Course        │   │     Level       │
├─────────────────┤   ├────────────────────┤   ├─────────────────┤
│ id              │   │ id                 │   │ id              │
│ username        │   │ title / slug       │   │ courseId         │
│ email           │   │ description        │   │ title           │
│ passwordHash    │   │ icon / color       │   │ description     │
│ displayName     │   │ difficulty         │   │ levelNumber     │
│ role            │   │ sortOrder          │   │ sortOrder       │
│                 │   │ ── computed ──     │   └─────────────────┘
│                 │   │ levelCount    ★    │
│                 │   │ lessonCount   ★    │   ┌─────────────────┐
│                 │   │ completedLessons ★ │   │   Category      │
│                 │   └────────────────────┘   ├─────────────────┤
│                 │                             │ id              │
│                 │   ┌────────────────────┐   │ name / slug     │
│                 │   │      Lesson        │   │ description     │
│                 │   ├────────────────────┤   │ icon            │
│                 │   │ id                 │   └─────────────────┘
│                 │   │ categoryId         │
│                 │   │ levelId / courseId  │   ┌─────────────────┐
│                 │   │ title / slug       │   │  QuizQuestion   │
│                 │   │ difficulty         │   ├─────────────────┤
│                 │   │ summary            │   │ id              │
│                 │   │ description        │   │ lessonId        │
│                 │   │ demoHtml / labHtml │   │ question        │
│                 │   │ labSolution        │   │ optionA–D       │
│                 │   └────────────────────┘   │ correct (A–D)   │
│                 │                             │ explanation     │
│                 │   ┌────────────────────┐   └─────────────────┘
│                 │   │   UserProgress     │
│                 │   ├────────────────────┤       ★ = transient
│                 │   │ id                 │       (not in DB,
│                 │   │ userId / lessonId  │        computed by
│                 │   │ lessonStatus       │        CourseDAO)
│                 │   │ demoCompleted      │
│                 │   │ labCompleted       │
│                 │   │ quizCompleted      │
│                 │   │ quizScore          │
└─────────────────┘   └────────────────────┘
```

---

*ZentinelS v2.0 — Data Model v3.0 — MySQL 8.0 / InnoDB*
