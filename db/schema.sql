-- ============================================================
-- ZentinelS - Learning Platform
-- MySQL Database Schema v3.0
-- Courses → Levels → Lessons (Demo + Lab + Quiz)
-- All 6 courses with full lesson content
-- ============================================================

CREATE DATABASE IF NOT EXISTS securitylab
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE securitylab;

-- Drop existing tables for clean reinstall
DROP TABLE IF EXISTS quiz_attempts;
DROP TABLE IF EXISTS user_progress;
DROP TABLE IF EXISTS quiz_questions;
DROP TABLE IF EXISTS lessons;
DROP TABLE IF EXISTS levels;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;

-- ============================================================
-- Users
-- ============================================================
CREATE TABLE users (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    username      VARCHAR(50)  NOT NULL UNIQUE,
    email         VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    display_name  VARCHAR(100),
    avatar_url    VARCHAR(500),
    role          ENUM('student','instructor','admin') DEFAULT 'student',
    created_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ============================================================
-- Courses
-- ============================================================
CREATE TABLE courses (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    title         VARCHAR(200) NOT NULL,
    slug          VARCHAR(200) NOT NULL UNIQUE,
    description   TEXT,
    icon          VARCHAR(50)  DEFAULT '🛡️',
    color         VARCHAR(20)  DEFAULT '#58a6ff',
    difficulty    ENUM('beginner','intermediate','advanced') DEFAULT 'beginner',
    sort_order    INT          DEFAULT 0,
    created_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ============================================================
-- Levels (within a course)
-- ============================================================
CREATE TABLE levels (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    course_id     INT          NOT NULL,
    title         VARCHAR(200) NOT NULL,
    description   TEXT,
    level_number  INT          NOT NULL DEFAULT 1,
    sort_order    INT          DEFAULT 0,
    FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
    INDEX idx_course (course_id)
) ENGINE=InnoDB;

-- ============================================================
-- Categories
-- ============================================================
CREATE TABLE categories (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(100) NOT NULL UNIQUE,
    slug        VARCHAR(100) NOT NULL UNIQUE,
    description TEXT,
    icon        VARCHAR(50)  DEFAULT 'shield',
    sort_order  INT          DEFAULT 0,
    created_at  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- ============================================================
-- Lessons
-- ============================================================
CREATE TABLE lessons (
    id            INT AUTO_INCREMENT PRIMARY KEY,
    category_id   INT          NOT NULL,
    level_id      INT          NULL,
    course_id     INT          NULL,
    title         VARCHAR(200) NOT NULL,
    slug          VARCHAR(200) NOT NULL UNIQUE,
    difficulty    ENUM('beginner','intermediate','advanced') DEFAULT 'beginner',
    summary       TEXT,
    description   LONGTEXT     COMMENT 'Full lesson description/theory',
    demo_html     LONGTEXT     COMMENT 'Interactive demo HTML/JS',
    lab_html      LONGTEXT     COMMENT 'Lab exercise HTML/JS',
    lab_solution  TEXT         COMMENT 'Expected answer for auto-check',
    sort_order    INT          DEFAULT 0,
    created_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (level_id)    REFERENCES levels(id) ON DELETE SET NULL,
    FOREIGN KEY (course_id)   REFERENCES courses(id) ON DELETE SET NULL,
    INDEX idx_category (category_id),
    INDEX idx_level (level_id),
    INDEX idx_course (course_id)
) ENGINE=InnoDB;

-- ============================================================
-- Quiz questions
-- ============================================================
CREATE TABLE quiz_questions (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    lesson_id   INT          NOT NULL,
    question    TEXT         NOT NULL,
    option_a    VARCHAR(500) NOT NULL,
    option_b    VARCHAR(500) NOT NULL,
    option_c    VARCHAR(500) NOT NULL,
    option_d    VARCHAR(500) NOT NULL,
    correct     CHAR(1)      NOT NULL,
    explanation TEXT,
    sort_order  INT          DEFAULT 0,
    FOREIGN KEY (lesson_id) REFERENCES lessons(id) ON DELETE CASCADE,
    INDEX idx_lesson (lesson_id)
) ENGINE=InnoDB;

-- ============================================================
-- User progress
-- ============================================================
CREATE TABLE user_progress (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    user_id         INT     NOT NULL,
    lesson_id       INT     NOT NULL,
    lesson_status   ENUM('not_started','in_progress','completed') DEFAULT 'not_started',
    demo_completed  BOOLEAN DEFAULT FALSE,
    lab_completed   BOOLEAN DEFAULT FALSE,
    quiz_completed  BOOLEAN DEFAULT FALSE,
    quiz_score      INT     DEFAULT 0,
    started_at      TIMESTAMP NULL,
    completed_at    TIMESTAMP NULL,
    FOREIGN KEY (user_id)   REFERENCES users(id)   ON DELETE CASCADE,
    FOREIGN KEY (lesson_id) REFERENCES lessons(id)  ON DELETE CASCADE,
    UNIQUE KEY uk_user_lesson (user_id, lesson_id)
) ENGINE=InnoDB;

-- ============================================================
-- Quiz attempts
-- ============================================================
CREATE TABLE quiz_attempts (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    user_id         INT      NOT NULL,
    lesson_id       INT      NOT NULL,
    question_id     INT      NOT NULL,
    selected_option CHAR(1)  NOT NULL,
    is_correct      BOOLEAN  NOT NULL,
    attempted_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id)     REFERENCES users(id)           ON DELETE CASCADE,
    FOREIGN KEY (lesson_id)   REFERENCES lessons(id)         ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES quiz_questions(id)  ON DELETE CASCADE,
    INDEX idx_user_lesson (user_id, lesson_id)
) ENGINE=InnoDB;

-- ============================================================
-- SEED DATA
-- ============================================================

-- Demo users
INSERT INTO users (username, email, password_hash, display_name, role) VALUES
('demo', 'demo@zentinels.local', SHA2('demo123', 256), 'Demo User', 'student'),
('admin', 'admin@zentinels.local', SHA2('admin123', 256), 'Admin', 'admin');

-- ============================================================
-- Courses (matching resources/C1..C6 directories)
-- ============================================================
INSERT INTO courses (id, title, slug, description, icon, color, difficulty, sort_order) VALUES
(1, 'Computer Components & Concepts', 'computer-components',
 'Understand the building blocks of modern computers — hardware components, data storage and representation, logic gates, file systems, and cloud computing.',
 '🖥️', '#58a6ff', 'beginner', 1),
(2, 'OS & Virtualization', 'os-virtualization',
 'Explore how operating systems manage hardware resources, processes, and boot sequences. Learn about virtualization technology.',
 '⚙️', '#8b5cf6', 'beginner', 2),
(3, 'Linux', 'linux',
 'Master the Linux operating system from installation to advanced system administration.',
 '🐧', '#22c55e', 'beginner', 3),
(4, 'Web', 'web',
 'Learn how the web works — from search engines to web servers, HTTP, HTML, JavaScript, server-side languages, cookies, and local storage.',
 '🌐', '#f59e0b', 'beginner', 4),
(5, 'Networking', 'networking',
 'Build a solid networking foundation covering network types, hardware, IP/MAC, TCP/UDP, subnetting, email, DNS, ICMP, DHCP, OSI model, ARP, and DoS attacks.',
 '🔗', '#06b6d4', 'intermediate', 5),
(6, 'Offensive Security Concepts', 'offensive-security',
 'Explore offensive security techniques — Command Injection, SQLi, XSS, CSRF, Buffer Overflows, Metasploit, Social Engineering, Phishing, and Privilege Escalation.',
 '⚔️', '#e53e3e', 'intermediate', 6);

-- ============================================================
-- Levels
-- ============================================================
-- Course 1: Computer Components & Concepts (5 levels)
INSERT INTO levels (id, course_id, title, description, level_number, sort_order) VALUES
(1, 1, 'Level 1 – Intro to Computer Hardware', 'Motherboards, CPUs, RAM, GPUs, storage, I/O devices, heat sinks, and power supplies.', 1, 1),
(2, 1, 'Level 2 – Data Storage & Representation', 'Bits, binary, hexadecimal, ASCII, encoding, and file headers.', 2, 2),
(3, 1, 'Level 3 – Logic & Data Manipulation', 'Boolean logic, AND, OR, NOT, NAND, NOR, XOR, encryption with XOR.', 3, 3),
(4, 1, 'Level 4 – Storing Data & Files', 'File systems — FAT32, exFAT, NTFS, EXT3/EXT4.', 4, 4),
(5, 1, 'Level 5 – Cloud Computing', 'Cloud service models — SaaS, IaaS, PaaS.', 5, 5);

-- Course 2: OS & Virtualization (2 levels)
INSERT INTO levels (id, course_id, title, description, level_number, sort_order) VALUES
(6, 2, 'Level 1 – Operating Systems', 'The kernel, processes, interrupts, BIOS/UEFI, and boot loaders.', 1, 1),
(7, 2, 'Level 2 – Virtualization', 'Types and uses of virtualization, hypervisors, and setting up a VM.', 2, 2);

-- Course 3: Linux (5 levels)
INSERT INTO levels (id, course_id, title, description, level_number, sort_order) VALUES
(8, 3, 'Level 1 – Introduction to Linux', 'What is Linux, distributions, GUI, and the terminal.', 1, 1),
(9, 3, 'Level 2 – Linux Environment', 'Super user, navigation, folder structure, file permissions, environment variables.', 2, 2),
(10, 3, 'Level 3 – Linux Navigation', 'Tab completion, history, interrupts, clear, parameters, and man pages.', 3, 3),
(11, 3, 'Level 4 – Linux Commands', 'cp, mkdir, mv, rm, cat, less, find, grep, which, apropos, file, strings, wget.', 4, 4),
(12, 3, 'Level 5 – Linux Architecture', 'Processes, pipes, redirects, passwd files, cron, package managers, building from source, SSH.', 5, 5);

-- Course 4: Web (2 levels)
INSERT INTO levels (id, course_id, title, description, level_number, sort_order) VALUES
(13, 4, 'Level 1 – Search SuperPowers', 'How search works, Google commands, wildcards, troubleshooting, and alternative search engines.', 1, 1),
(14, 4, 'Level 2 – WWW & Web Serving', 'Web servers, HTTP protocol, HTML, JavaScript, PHP, cookies, and local storage.', 2, 2);

-- Course 5: Networking (5 levels)
INSERT INTO levels (id, course_id, title, description, level_number, sort_order) VALUES
(15, 5, 'Level 1 – Networking Fundamentals I', 'Network types, hardware, IP addresses, MAC addresses, packets, protocols, TCP, UDP.', 1, 1),
(16, 5, 'Level 2 – Networking Fundamentals II', 'IP addressing in depth, subnets, TCP/UDP in depth, protocols, Wireshark.', 2, 2),
(17, 5, 'Level 3 – Email & Protocols', 'Email, SMTP, POP3/IMAP/Exchange, email spoofing, SPF, DKIM.', 3, 3),
(18, 5, 'Level 4 – DNS', 'Domain Name System, TLDs, forward/reverse lookups, recursive/iterative, DNS records.', 4, 4),
(19, 5, 'Level 5 – Advanced Networking', 'ICMP, DHCP, OSI model, TCP/IP model, packet headers, ARP, DoS attacks.', 5, 5);

-- Course 6: Offensive Security Concepts (2 levels)
INSERT INTO levels (id, course_id, title, description, level_number, sort_order) VALUES
(20, 6, 'Level 1 – Offensive Techniques', 'Command Injection, XSS, CSRF, SQLi, File Inclusion, Path Traversal, Buffer Overflows, Metasploit, Social Engineering, Phishing.', 1, 1),
(21, 6, 'Level 2 – Privilege Escalation', 'Linux and Windows privilege escalation — services, kernel exploits, SUID, sudo, UAC bypass, stored credentials.', 2, 2);

-- ============================================================
-- Categories
-- ============================================================
INSERT INTO categories (id, name, slug, description, icon, sort_order) VALUES
(1, 'Hardware',               'hardware',            'Computer hardware components and architecture',               'cpu',       1),
(2, 'Data Representation',    'data-representation', 'Number systems, encoding, and data formats',                   'binary',    2),
(3, 'Logic',                  'logic',               'Boolean logic and data manipulation',                          'gate',      3),
(4, 'File Systems',           'file-systems',        'File system types and data storage',                            'hdd',       4),
(5, 'Cloud',                  'cloud',               'Cloud computing models and services',                           'cloud',     5),
(6, 'Operating Systems',      'operating-systems',   'OS concepts, kernel, processes',                                'os',        6),
(7, 'Virtualization',         'virtualization',      'Virtual machines, hypervisors',                                  'vm',        7),
(8, 'Linux Basics',           'linux-basics',        'Linux distributions, GUI, terminal',                             'linux',     8),
(9, 'Linux Administration',   'linux-admin',         'Linux environment, permissions, commands',                       'terminal',  9),
(10, 'Web Technologies',      'web-tech',            'Web servers, HTTP, HTML, JavaScript, PHP',                       'web',       10),
(11, 'Networking',            'networking-cat',      'Network types, protocols, hardware',                             'network',   11),
(12, 'Email & DNS',           'email-dns',           'Email protocols, DNS, name resolution',                          'email',     12),
(13, 'Network Security',      'network-security',    'ICMP, DHCP, ARP, DoS attacks',                                  'shield',    13),
(14, 'SQL Injection',         'sql-injection',       'Exploiting database queries via unsanitized input',              'database',  14),
(15, 'Cross-Site Scripting',  'xss',                 'Injecting malicious scripts into web pages',                     'code',      15),
(16, 'CSRF',                  'csrf',                'Forcing users to perform unwanted actions',                      'refresh',   16),
(17, 'Authentication',        'broken-auth',         'Weaknesses in authentication mechanisms',                        'lock',      17),
(18, 'Access Control',        'access-control',      'Insecure direct object references and access control',           'folder',    18),
(19, 'Injection',             'injection',           'Command injection and code execution',                           'terminal',  19),
(20, 'File Security',         'file-security',       'Path traversal, file inclusion, file upload',                    'file',      20),
(21, 'Security Config',       'security-config',     'Misconfigurations, scanners, patch management',                  'settings',  21),
(22, 'Binary Exploitation',   'binary-exploit',      'Buffer overflows, format strings, integer overflows',            'bug',       22),
(23, 'Social Engineering',    'social-eng',          'Social engineering, phishing, credential harvesting',            'people',    23),
(24, 'Privilege Escalation',  'privesc',             'Linux and Windows privilege escalation techniques',              'arrow-up',  24),
(25, 'Exploitation Tools',    'exploit-tools',       'Metasploit, exploit databases, vulnerability scanners',          'wrench',    25);

-- ============================================================
-- LESSONS — Course 1: Computer Components & Concepts
-- ============================================================

-- Level 1: Intro to Computer Hardware (lessons 33-42)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(33, 1, 1, 1, 'Motherboards', 'motherboards', 'beginner', 'Learn about the main circuit board that connects all computer components.', 'The motherboard is the central PCB in a computer. It houses the CPU socket, RAM slots, expansion slots, and connectors for all peripherals.', 'motherboard-demo', 'motherboard-lab', 'ATX', 1),
(34, 1, 1, 1, 'CPUs & Processing', 'cpus-processing', 'beginner', 'Understand how the CPU executes instructions.', 'The CPU is the brain of the computer. It processes instructions using cores, operates at a clock speed measured in GHz, and uses context switching to multitask.', 'cpu-demo', 'cpu-lab', 'context switching', 2),
(35, 1, 1, 1, 'RAM & Storage', 'ram-storage', 'beginner', 'Learn the difference between volatile and non-volatile storage.', 'RAM is fast volatile memory used for active processes. Storage (HDD/SSD) is non-volatile. SSDs are faster with no moving parts.', 'ram-demo', 'ram-lab', 'volatile', 3),
(36, 1, 1, 1, 'GPUs & Output Devices', 'gpus-output', 'beginner', 'Understand graphics processing and output interfaces.', 'GPUs handle parallel number crunching for graphics, AI, and password cracking. Output interfaces include VGA, DVI, HDMI, and DisplayPort.', NULL, NULL, NULL, 4),
(37, 1, 1, 1, 'Power Supply & Cooling', 'psu-cooling', 'beginner', 'Learn about power delivery and thermal management in computers.', 'The PSU converts AC to DC using ATX 20/24-pin connectors, SATA power, and Molex. Heat sinks with thermal paste and fans manage heat.', NULL, NULL, NULL, 5);

-- Level 2: Data Storage & Representation (lessons 38-42)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(38, 2, 2, 1, 'Bits, Bytes & Number Bases', 'bits-bytes-bases', 'beginner', 'Understand the fundamental units of digital data and alternate number systems.', 'Computers use binary (base 2). 8 bits = 1 byte. Hexadecimal (base 16) is a compact way to represent binary. 1 KiB = 1024 bytes vs 1 kB = 1000 bytes.', 'binary-demo', 'binary-lab', '1010', 1),
(39, 2, 2, 1, 'ASCII & Character Encoding', 'ascii-encoding', 'beginner', 'Learn how text is represented digitally using encoding standards.', 'ASCII uses 7 bits for 128 characters. Extended ASCII uses 8 bits for 256 characters. Unicode supports all world languages with variable-length encoding (UTF-8).', 'ascii-demo', 'ascii-lab', '65', 2),
(40, 2, 2, 1, 'Base64 Encoding', 'base64-encoding', 'beginner', 'Understand Base64 encoding for transmitting binary data as text.', 'Base64 converts binary data to printable ASCII using a 64-character alphabet (A-Z, a-z, 0-9, +, /). It is NOT encryption — it is encoding. Padding uses = signs.', 'base64-demo', 'base64-lab', 'SGVsbG8=', 3),
(41, 2, 2, 1, 'File Headers & Magic Numbers', 'file-headers', 'beginner', 'Learn how files are identified by their header bytes regardless of extension.', 'File headers (magic numbers) identify file types: ZIP starts with 50 4B 03 04, JPG with FF D8 FF, PNG with 89 50 4E 47. The file extension can lie, but headers do not.', 'fileheader-demo', 'fileheader-lab', 'FF D8 FF', 4);

-- Level 3: Logic & Data Manipulation (lessons 42-44)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(42, 3, 3, 1, 'Boolean Logic & Gates', 'boolean-logic', 'beginner', 'Master the fundamental logic gates used in computing.', 'Boolean logic uses AND (&&), OR (||), NOT (!), NAND, NOR, and XOR gates. These form the basis of all computation and digital circuits.', 'logic-demo', 'logic-lab', 'XOR', 1),
(43, 3, 3, 1, 'XOR Encryption', 'xor-encryption', 'beginner', 'Learn how XOR is used for simple encryption.', 'XOR encryption: plaintext XOR key = ciphertext. Applying XOR with the same key reverses it. This is the basis of many cryptographic algorithms.', 'xor-demo', 'xor-lab', 'XOR', 2);

-- Level 4: File Systems (lessons 44-45)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(44, 4, 4, 1, 'File Systems Overview', 'file-systems-overview', 'beginner', 'Compare major file systems: FAT32, NTFS, EXT3/EXT4.', 'FAT32: max 4GB file size, universal compatibility. NTFS: permissions, encryption, shadow copies, Windows default. EXT3: journaling, 2TB max. EXT4: unlimited practical size, Linux default.', 'fs-demo', 'fs-lab', 'NTFS', 1),
(45, 4, 4, 1, 'Slack Space & Forensics', 'slack-space', 'beginner', 'Understand how file systems store data in clusters and the forensic implications.', 'Files are stored in clusters. Slack space is unused space within a cluster. Deleted files remain until overwritten. Forensic tools can recover data from slack space.', NULL, NULL, NULL, 2);

-- Level 5: Cloud Computing (lesson 46)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(46, 5, 5, 1, 'Cloud Service Models', 'cloud-models', 'beginner', 'Understand SaaS, IaaS, and PaaS cloud computing models.', 'SaaS: Software as a Service (Gmail, Office 365). IaaS: Infrastructure as a Service (AWS EC2, Azure VMs). PaaS: Platform as a Service (Heroku, Google App Engine). Each model differs in what you manage vs what the provider manages.', 'cloud-demo', 'cloud-lab', 'IaaS', 1);

-- ============================================================
-- LESSONS — Course 2: OS & Virtualization
-- ============================================================

-- Level 1: Operating Systems (lessons 47-48)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(47, 6, 6, 2, 'Operating System Fundamentals', 'os-fundamentals', 'beginner', 'Understand the role of an OS, the kernel, processes, and interrupts.', 'The OS manages hardware resources. The kernel runs in protected memory. Processes are running programs. Interrupts (hardware and software) signal the CPU to handle events. BIOS/UEFI initializes hardware before the OS loads.', 'os-demo', 'os-lab', 'kernel', 1),
(48, 6, 6, 2, 'Boot Process & BIOS/UEFI', 'boot-process', 'beginner', 'Learn the computer boot sequence from power-on to OS load.', 'Boot sequence: Power On → POST → BIOS/UEFI → Boot Loader (GRUB/Windows Boot Manager) → OS Kernel → User Space. UEFI is the modern replacement for BIOS with a graphical interface and Secure Boot.', NULL, NULL, NULL, 2);

-- Level 2: Virtualization (lessons 49-50)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(49, 7, 7, 2, 'Virtual Machines & Hypervisors', 'vms-hypervisors', 'beginner', 'Learn how virtualization works and the types of hypervisors.', 'VMs emulate complete computers. Type 1 (bare-metal) hypervisors run directly on hardware (VMware ESXi, Hyper-V). Type 2 (hosted) run on top of an OS (VirtualBox, VMware Workstation). Used for cloud hosting, security testing, and development.', 'vm-demo', 'vm-lab', 'Type 1', 1),
(50, 7, 7, 2, 'Virtualization Use Cases', 'virtualization-uses', 'beginner', 'Explore practical applications of virtualization in security and development.', 'Virtualization enables: cloud computing (multiple VMs on one server), security testing (isolated malware analysis), development (consistent environments), disaster recovery (snapshots), and running multiple OSes simultaneously.', NULL, NULL, NULL, 2);

-- ============================================================
-- LESSONS — Course 3: Linux
-- ============================================================

-- Level 1: Introduction to Linux (lessons 51-52)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(51, 8, 8, 3, 'Linux Distributions & GUI', 'linux-distros', 'beginner', 'Explore Linux distributions, the desktop environment, and when to use a GUI vs terminal.', 'Linux is an open-source OS kernel. Distributions (Ubuntu, Fedora, Kali) bundle the kernel with software. Desktop versions have a GUI with dock, file browser, and system tray. Server versions are terminal-only.', NULL, NULL, NULL, 1),
(52, 8, 8, 3, 'The Linux Terminal', 'linux-terminal', 'beginner', 'Get started with the Bash shell and basic terminal interaction.', 'The terminal provides a text interface to the OS. Bash is the default shell. The prompt shows username@hostname:directory$. Commands follow the pattern: command [options] [arguments].', 'terminal-demo', 'terminal-lab', 'bash', 2);

-- Level 2: Linux Environment (lessons 53-56)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(53, 9, 9, 3, 'Superuser & Sudo', 'superuser-sudo', 'beginner', 'Understand root privileges, su, and sudo.', 'The root user (UID 0) has unrestricted access. su switches to another user. sudo runs a single command with elevated privileges. Always use sudo instead of logging in as root.', 'sudo-demo', 'sudo-lab', 'sudo', 1),
(54, 9, 9, 3, 'Linux Folder Structure', 'linux-folders', 'beginner', 'Navigate the Linux filesystem hierarchy.', 'Key directories: /bin (binaries), /etc (configs), /home (user dirs), /var (logs), /tmp (temporary), /root (root home), /usr (programs), /dev (devices), /proc (process info), /opt (optional software).', 'folders-demo', 'folders-lab', '/etc', 2),
(55, 9, 9, 3, 'File Permissions', 'file-permissions', 'beginner', 'Master Linux file permissions: read, write, execute for user, group, others.', 'Permissions: r(4) w(2) x(1) for user/group/others. chmod changes permissions (e.g., chmod 755). chown changes ownership. The SUID bit (s) runs a file with the owners privileges.', 'permissions-demo', 'permissions-lab', '755', 3),
(56, 9, 9, 3, 'Environment Variables & PATH', 'env-variables', 'beginner', 'Understand environment variables, PATH, and hidden files.', 'Environment variables store system-wide settings. PATH lists directories searched for commands. export VAR=value sets a variable. Hidden files start with a dot (.). env shows all variables.', 'env-demo', 'env-lab', 'PATH', 4);

-- Level 3: Linux Navigation (lessons 57-59)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(57, 9, 10, 3, 'Tab Completion & History', 'tab-completion', 'beginner', 'Speed up your terminal workflow with tab completion and command history.', 'Tab auto-completes commands and filenames. Up/Down arrows navigate history. CTRL+R does reverse search. history command shows all previous commands stored in .bash_history.', NULL, NULL, NULL, 1),
(58, 9, 10, 3, 'Interrupts & Job Control', 'interrupts-jobs', 'beginner', 'Control running processes with keyboard interrupts and job management.', 'CTRL+C sends SIGINT (interrupt/kill). CTRL+Z sends SIGTSTP (suspend). fg resumes in foreground, bg in background. clear clears the screen. CTRL+L also clears.', NULL, NULL, NULL, 2),
(59, 9, 10, 3, 'Man Pages & Parameters', 'man-pages', 'beginner', 'Learn to use manual pages and command parameters effectively.', 'man command shows the manual. Parameters use - for short flags (-a) and -- for long flags (--all). Combine short flags: ls -la. man -k keyword searches all man pages.', NULL, NULL, NULL, 3);

-- Level 4: Linux Commands (lessons 60-63)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(60, 9, 11, 3, 'File Operations: cp, mkdir, mv, rm', 'file-operations', 'beginner', 'Master essential file manipulation commands.', 'cp copies files (-r for directories). mkdir creates directories (-p for nested). mv moves or renames files. rm removes files (-r for directories, -f to force). Always be careful with rm -rf!', 'fileops-demo', 'fileops-lab', 'cp -r', 1),
(61, 9, 11, 3, 'File Viewing: cat, less, head, tail', 'file-viewing', 'beginner', 'Learn to view file contents in different ways.', 'cat displays entire file. less shows page by page (q to quit). head shows first N lines. tail shows last N lines (-f to follow live logs). Use less for large files.', NULL, NULL, NULL, 2),
(62, 9, 11, 3, 'Search: find, grep, which, apropos', 'search-commands', 'beginner', 'Find files, search content, and locate commands.', 'find searches by name/type/size. grep searches file contents (-i case insensitive, -r recursive). which locates a command binary. apropos searches command descriptions.', 'search-demo', 'search-lab', 'grep -r', 3),
(63, 9, 11, 3, 'File Analysis: file, strings, wget', 'file-analysis', 'beginner', 'Analyze files and download from the web.', 'file identifies type by magic bytes (not extension). strings extracts printable text from binary files — useful for malware analysis. wget downloads files from URLs.', NULL, NULL, NULL, 4);

-- Level 5: Linux Architecture (lessons 64-67)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(64, 9, 12, 3, 'Processes & Job Management', 'processes', 'beginner', 'Monitor and manage running processes.', 'ps aux lists all processes. kill PID sends signals (SIGTERM default, SIGKILL -9). top/htop show live process info. Every process has a PID and a parent PID (PPID).', 'process-demo', 'process-lab', 'ps aux', 1),
(65, 9, 12, 3, 'Pipes & Redirects', 'pipes-redirects', 'beginner', 'Chain commands and redirect output to files.', 'Pipe (|) sends output of one command as input to another. > redirects output to file (overwrite). >> appends. 2> redirects errors. < provides file as input. Example: cat log.txt | grep error > errors.txt', 'pipes-demo', 'pipes-lab', '|', 2),
(66, 9, 12, 3, 'Scheduled Tasks & Package Management', 'cron-packages', 'beginner', 'Automate tasks with cron and manage software packages.', '/etc/passwd stores user info. /etc/shadow stores hashed passwords. crontab -e edits scheduled tasks (minute hour day month weekday command). apt/apt-get manages packages on Debian. dpkg for local .deb files.', NULL, NULL, NULL, 3),
(67, 9, 12, 3, 'SSH & Building from Source', 'ssh-building', 'intermediate', 'Secure remote access and compiling software.', 'SSH provides encrypted remote access: ssh user@ip, ssh -i keyfile user@ip. Building from source: ./configure && make && make install. Shell customization: .bashrc, zsh with oh-my-zsh, powerlevel10k theme.', 'ssh-demo', 'ssh-lab', 'ssh -i', 4);

-- ============================================================
-- LESSONS — Course 4: Web
-- ============================================================

-- Level 1: Search SuperPowers (lessons 68-71)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(68, 10, 13, 4, 'How Search Engines Work', 'search-engines', 'beginner', 'Understand how search engines crawl, index, and rank web pages.', 'Search engines use crawlers to visit pages, index all words, follow links, and repeat. Results are ranked by authority — pages linked to by many relevant pages rank higher. Google is keyword-based — fewer, more relevant keywords give better results.', NULL, NULL, NULL, 1),
(69, 10, 13, 4, 'Google Commands & Dorks', 'google-dorks', 'beginner', 'Master advanced Google search operators for precise results.', 'site:example.com restricts to a domain. filetype:pdf finds specific file types. Google Dorks are clever searches that find unintended content — unsecured cameras, password files, and vulnerable software. Quotes force exact phrase matching. Wildcard (*) matches any word.', 'dorks-demo', 'dorks-lab', 'site:', 2),
(70, 10, 13, 4, 'Troubleshooting with Search', 'search-troubleshooting', 'beginner', 'Use search engines to diagnose and fix technical problems.', 'Troubleshooting process: generic search → find forums → locate log files → search specific errors → follow fixes. Always backup before applying fixes. Error codes are more specific than symptoms.', NULL, NULL, NULL, 3);

-- Level 2: WWW & Web Serving (lessons 71-76)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(71, 10, 14, 4, 'Web Servers', 'web-servers', 'beginner', 'Understand generic (Apache, Nginx) vs custom (NodeJS) web servers.', 'Generic servers (Apache, Nginx) serve files from a web root containing index.html. Custom servers (NodeJS) have routes programmed in code. HTTP uses port 80, HTTPS uses port 443.', NULL, NULL, NULL, 1),
(72, 10, 14, 4, 'HTTP Protocol', 'http-protocol', 'beginner', 'Master HTTP request methods, response codes, and headers.', 'HTTP methods: GET (retrieve), POST (submit), PUT (store), DELETE (remove), HEAD (metadata only). Response codes: 200 OK, 302 Redirect, 404 Not Found, 500 Server Error. Headers include User-Agent, Content-Type, and Server.', 'http-demo', 'http-lab', '200', 2),
(73, 10, 14, 4, 'HTML & Web Pages', 'html-basics', 'beginner', 'Learn the markup language that structures web content.', 'HTML is a markup language (not programming) that describes content using tags: html, head, title, body, h1, p, a, img. HTML alone is static — it cannot change based on user input without JavaScript or server-side code.', NULL, NULL, NULL, 3),
(74, 10, 14, 4, 'JavaScript in the Browser', 'javascript-browser', 'beginner', 'Understand client-side JavaScript and its security implications.', 'JavaScript runs in the browser (client-side) inside script tags. It can modify HTML after loading. JavaScript is visible in page source — never use it for password protection. It enables dynamic, interactive web pages.', NULL, NULL, NULL, 4),
(75, 10, 14, 4, 'Server-Side Languages & PHP', 'server-side-php', 'beginner', 'Learn how server-side code processes requests before sending responses.', 'PHP executes on the server; only the HTML result is sent to the client. Users never see PHP source code. Server-side code handles login, database queries, and dynamic page generation. JavaScript = client controls it; PHP = server controls it.', NULL, NULL, NULL, 5),
(76, 10, 14, 4, 'Cookies & Local Storage', 'cookies-storage', 'beginner', 'Understand how websites store data in your browser.', 'Cookies: small files set by servers, commonly store session IDs after login, have expiry dates, only readable by the setting domain (except third-party ad cookies for tracking). Local Storage: up to 5MB per site, persists until cleared, used by modern web apps.', 'cookies-demo', 'cookies-lab', 'session', 6);

-- ============================================================
-- LESSONS — Course 5: Networking
-- ============================================================

-- Level 1: Networking Fundamentals I (lessons 77-82)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(77, 11, 15, 5, 'Network Types & Topologies', 'network-types', 'beginner', 'Understand LAN, WAN, and network topology designs.', 'WAN = Wide Area Network (the internet). LAN = Local Area Network (office/home). Topologies: Star (central switch, most common), Bus (shared cable, one at a time), Ring, Token Ring.', NULL, NULL, NULL, 1),
(78, 11, 15, 5, 'Network Hardware', 'network-hardware', 'beginner', 'Learn about switches, hubs, routers, and NICs.', 'Switch: directs data to correct port by MAC address. Hub: broadcasts to all ports (wireless APs are hubs). Router: connects two networks, has NAT. NIC: Network Interface Card for Ethernet or WiFi.', 'hardware-demo', 'hardware-lab', 'switch', 2),
(79, 11, 15, 5, 'IP Addresses', 'ip-addresses', 'beginner', 'Understand IPv4 addressing, private vs public IPs, and NAT.', 'IP addresses identify computers on networks. Private IPs are for LANs (192.168.x.x, 10.x.x.x, 172.16-31.x.x). Public IPs face the internet. NAT translates between private and public.', 'ip-demo', 'ip-lab', '192.168', 3),
(80, 11, 15, 5, 'MAC Addresses', 'mac-addresses', 'beginner', 'Learn about hardware addresses burned into network cards.', 'MAC addresses are 48-bit addresses burned into NICs at manufacturing (e.g., 34:13:65:76:09:86). Used by switches for local delivery. Meant to be globally unique and permanent.', NULL, NULL, NULL, 4),
(81, 11, 15, 5, 'Packets & Protocols', 'packets-protocols', 'beginner', 'Understand how data is packaged and rules governing transmission.', 'Packets contain payload (data) + headers (destination IP, MAC). Max size: 1500–65535 bytes. Protocols define data format, integrity checks, and error handling.', NULL, NULL, NULL, 5),
(82, 11, 15, 5, 'TCP vs UDP', 'tcp-vs-udp', 'beginner', 'Compare reliable TCP with fast UDP protocols.', 'TCP: 3-way handshake (SYN→SYN/ACK→ACK), reliable, ordered, retransmits lost data. Uses ports 0-65535. UDP: no handshake, no retransmission, fast. Used for video/VOIP/gaming. TCP and UDP port ranges are separate.', 'tcpudp-demo', 'tcpudp-lab', 'SYN', 6);

-- Level 2: Networking Fundamentals II (lessons 83-86)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(83, 11, 16, 5, 'IPv4 vs IPv6', 'ipv4-ipv6', 'intermediate', 'Compare IPv4 (32-bit) and IPv6 (128-bit) addressing.', 'IPv4: 32 bits, ~4.3 billion addresses, all used up. IPv6: 128 bits, 3.4x10^38 addresses. IPv6 format: 2001:0db8::ff00:42:8329. No need for NAT with IPv6, but loses NATs accidental firewall benefit.', NULL, NULL, NULL, 1),
(84, 11, 16, 5, 'Subnetting & CIDR', 'subnetting', 'intermediate', 'Master subnetting, subnet masks, and CIDR notation.', 'Subnet mask splits IP into network and host parts. 255.255.255.0 (/24) = 254 hosts. 255.255.0.0 (/16) = 65534 hosts. Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. Loopback: 127.0.0.1.', 'subnet-demo', 'subnet-lab', '/24', 2),
(85, 11, 16, 5, 'TCP & UDP In Depth', 'tcp-udp-depth', 'intermediate', 'Deep dive into TCP handshakes and UDP simplicity.', 'TCP handshake: SYN (Seq=0) → SYN/ACK (Seq=0, Ack=1) → ACK (Ack=1). Sequence numbers track ordering. ACK numbers confirm receipt. UDP has no handshake or acknowledgement — if a packet is lost, neither side knows.', NULL, NULL, NULL, 3),
(86, 11, 16, 5, 'Application Protocols & Wireshark', 'app-protocols', 'intermediate', 'Explore HTTP/FTP protocols and network analysis with Wireshark.', 'HTTP: GET request → 200 OK + headers + body. FTP: file upload/download protocol. Wireshark captures and analyzes network traffic — use Follow TCP Stream to reconstruct sessions.', NULL, NULL, NULL, 4);

-- Level 3: Email & Protocols (lessons 87-90)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(87, 12, 17, 5, 'How Email Works', 'email-basics', 'beginner', 'Understand the email delivery process and protocols.', 'Email flow: compose → outgoing server → lookup recipient server → deliver → recipient syncs. Protocols: SMTP for sending, POP3/IMAP for receiving. No encryption by default; modern servers use STARTTLS.', NULL, NULL, NULL, 1),
(88, 12, 17, 5, 'SMTP Protocol', 'smtp-protocol', 'intermediate', 'Learn the Simple Mail Transfer Protocol commands and security.', 'SMTP commands: MAIL (sender), RCPT (recipient), DATA (message). Text-based, connection-oriented over TCP. Authentication added later but does not prevent spoofing the FROM address.', NULL, NULL, NULL, 2),
(89, 12, 17, 5, 'POP3 vs IMAP vs Exchange', 'pop3-imap', 'beginner', 'Compare email retrieval protocols.', 'POP3: downloads and deletes from server, single device. IMAP: messages stay on server, syncs across devices, server-side search. Microsoft Exchange: supports MAPI, IMAP, POP3, EAS — Windows Server only.', NULL, NULL, NULL, 3),
(90, 12, 17, 5, 'Email Spoofing, SPF & DKIM', 'email-spoofing-spf', 'intermediate', 'Understand email spoofing attacks and anti-spoofing defenses.', 'Email Spoofing: anyone can forge the FROM address. SPF: DNS TXT record listing authorized sender IPs. DKIM: DNS TXT record with public key for message signing. DKIM + SPF → DMARC significantly reduces spoofing.', 'spf-demo', 'spf-lab', 'SPF', 4);

-- Level 4: DNS (lessons 91-94)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(91, 12, 18, 5, 'DNS Fundamentals', 'dns-fundamentals', 'beginner', 'Understand how the Domain Name System translates names to IPs.', 'DNS translates domain names to IP addresses. Every device needs a DNS server configured (often via DHCP). DNS is hierarchical — TLD nameservers point to authoritative nameservers. Results are cached for performance.', NULL, NULL, NULL, 1),
(92, 12, 18, 5, 'Forward & Reverse DNS Lookups', 'dns-lookups', 'intermediate', 'Learn forward (name→IP) and reverse (IP→name) DNS resolution.', 'Forward lookup: domain → IP (most common). Reverse lookup: IP → domain using in-addr.arpa (e.g., 1.0.168.192.in-addr.arpa). Requires PTR record on authoritative nameserver.', NULL, NULL, NULL, 2),
(93, 12, 18, 5, 'Recursive vs Iterative Queries', 'dns-queries', 'intermediate', 'Compare recursive and iterative DNS resolution strategies.', 'Recursive: server resolves on your behalf by querying other servers. Iterative: server returns the next server to ask and you keep querying. Iterative is the current internet standard — less server burden.', NULL, NULL, NULL, 3),
(94, 12, 18, 5, 'DNS Record Types', 'dns-records', 'intermediate', 'Master A, AAAA, CNAME, MX, NS, PTR, and TXT records.', 'A: domain→IPv4. AAAA: domain→IPv6. CNAME: alias. MX: mail server. NS: authoritative nameserver. PTR: reverse DNS. TXT: text data (SPF, DKIM keys). Each record type serves a specific purpose in the DNS ecosystem.', 'dns-demo', 'dns-lab', 'MX', 4);

-- Level 5: Advanced Networking (lessons 95-100)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(95, 13, 19, 5, 'ICMP & Ping', 'icmp-ping', 'intermediate', 'Understand ICMP for error reporting and network diagnostics.', 'ICMP transmits error messages and operational info. Type 8/Code 0 = echo request (ping). Type 0/Code 0 = echo response. Type 11/Code 0 = TTL exceeded. TTL = number of hops before packet is discarded.', NULL, NULL, NULL, 1),
(96, 13, 19, 5, 'DHCP', 'dhcp', 'intermediate', 'Learn how DHCP automatically configures network clients.', 'DHCP automatically assigns IP, DNS, gateway to devices joining a network. Prevents IP conflicts. Only one DHCP server per network. Attackers controlling DHCP can redirect traffic (man-in-the-middle).', NULL, NULL, NULL, 2),
(97, 13, 19, 5, 'OSI Model', 'osi-model', 'intermediate', 'Master the 7-layer OSI network communication model.', 'Layer 7 Application (HTTP/FTP), Layer 6 Presentation (formatting/encryption), Layer 5 Session (connections), Layer 4 Transport (TCP/UDP), Layer 3 Network (IP routing), Layer 2 Data Link (Ethernet/MAC), Layer 1 Physical (electrical signals). Data goes down when sending, up when receiving.', 'osi-demo', 'osi-lab', '7', 3),
(98, 13, 19, 5, 'TCP/IP Model & Packet Headers', 'tcpip-model', 'intermediate', 'Compare TCP/IP with OSI and understand packet encapsulation.', 'TCP/IP has 4 layers: Application (OSI 5-7), Transport (TCP/UDP), Internet (IP routing), Network Access (OSI 1-2). Encapsulation: App data → TCP header → IP header → Ethernet frame → electrical signals.', NULL, NULL, NULL, 4),
(99, 13, 19, 5, 'ARP Protocol', 'arp-protocol', 'intermediate', 'Understand Address Resolution Protocol for IP-to-MAC mapping.', 'ARP resolves IP to MAC on local networks. Broadcast: "Who has 192.168.0.10?" → Response with MAC. Results cached in ARP table. ARP is local-only — for internet, computer ARPs for the routers MAC address.', NULL, NULL, NULL, 5),
(100, 13, 19, 5, 'Denial of Service Attacks', 'dos-attacks', 'intermediate', 'Learn about DoS and DDoS attack types and defenses.', 'DoS consumes resources preventing legitimate access. Types: bandwidth saturation or application-layer (expensive endpoints like /login). DDoS uses botnets for massive distributed attacks. Protocol layer (TCP flood) or application layer (HTTP POST flood).', 'dos-demo', 'dos-lab', 'DDoS', 6);

-- ============================================================
-- LESSONS — Course 6: Offensive Security (keep existing IDs 1-32)
-- ============================================================

-- Level 1: Offensive Techniques (lessons 1-26)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(1, 14, 20, 6, 'SQL Injection', 'sql-injection-101', 'beginner', 'Learn how attackers manipulate SQL queries to bypass authentication and extract data.', 'SQL Injection exploits vulnerabilities by inserting malicious SQL through user input fields.', 'sqli-demo', 'sqli-lab', 'admin'' --', 1),
(2, 15, 20, 6, 'Cross-Site Scripting (XSS)', 'xss-101', 'beginner', 'Understand how attackers inject malicious scripts into trusted websites.', 'XSS injects malicious scripts into web pages. Reflected XSS is in the URL; Stored XSS persists in the database.', 'xss-demo', 'xss-lab', '<script>alert', 2),
(3, 16, 20, 6, 'Cross-Site Request Forgery (CSRF)', 'csrf-101', 'intermediate', 'Learn how attackers trick users into performing unintended actions.', 'CSRF forces authenticated users to submit requests they did not intend. Mitigate with CSRF tokens and checking origin/referrer headers.', 'csrf-demo', 'csrf-lab', 'onload', 3),
(4, 17, 20, 6, 'Broken Authentication', 'broken-auth-101', 'intermediate', 'Discover common authentication weaknesses.', 'Broken authentication occurs when auth mechanisms are flawed — weak passwords, no MFA, session fixation.', 'auth-demo', 'auth-lab', '123456', 4),
(5, 18, 20, 6, 'Insecure Direct Object References (IDOR)', 'idor-101', 'intermediate', 'Learn how attackers access unauthorized resources by manipulating references.', 'IDOR occurs when an application exposes internal object references without proper authorization checks.', 'idor-demo', 'idor-lab', '403', 5),
(6, 19, 20, 6, 'Command Injection', 'command-injection-101', 'intermediate', 'Learn how attackers execute arbitrary OS commands.', 'Command injection passes unsafe user data to a system shell. Use semicolons to chain commands.', 'cmdi-demo', 'cmdi-lab', ';', 6),
(7, 20, 20, 6, 'Path Traversal', 'path-traversal-101', 'intermediate', 'Learn how attackers escape intended directories.', 'Path traversal uses ../ sequences to access files outside the intended directory.', 'path-demo', 'path-lab', '../', 7),
(8, 21, 20, 6, 'Security Misconfiguration', 'security-misconfig-101', 'beginner', 'Identify common server and application misconfigurations.', 'Security misconfiguration is the most commonly seen vulnerability class — default credentials, debug mode, missing security headers.', 'misconfig-demo', 'misconfig-lab', 'x-frame-options', 8),
(9, 20, 20, 6, 'File Inclusion (LFI & RFI)', 'file-inclusion-101', 'intermediate', 'Learn how attackers exploit file inclusion vulnerabilities.', 'File inclusion occurs when applications dynamically include files based on user input. LFI reads local files; RFI includes remote files.', 'fi-demo', 'fi-lab', '../../../../etc/passwd', 9),
(10, 17, 20, 6, 'Session Guessing', 'session-guessing', 'intermediate', 'Understand how attackers predict or brute-force session identifiers.', 'Session guessing exploits weak session ID generation — sequential numbers, user IDs, or MD5 hashes of predictable values.', 'session-demo', 'session-lab', 'random', 10),
(11, 21, 20, 6, 'Clickjacking', 'clickjacking', 'intermediate', 'Learn how attackers trick users into clicking hidden elements.', 'Clickjacking uses transparent iframes overlaid on visible pages. CSS opacity:0 and z-index make the iframe invisible. Mitigate with X-Frame-Options header.', 'clickjack-demo', 'clickjack-lab', 'X-Frame-Options', 11),
(12, 20, 20, 6, 'Directory Traversal', 'directory-traversal', 'intermediate', 'Explore advanced directory traversal and encoded bypass techniques.', 'Directory traversal uses ../ and encoded variants (%2e%2e%2f, %2e%2e/, ..%2f, ..%c0%af) to escape intended directories. Use numerical indexes mapped to files as defense.', 'dirtraversal-demo', 'dirtraversal-lab', '%2e%2e%2f', 12),
(13, 20, 20, 6, 'File Upload Vulnerabilities', 'file-upload', 'intermediate', 'Learn how unrestricted file uploads lead to remote code execution.', 'Attackers upload web shells (shell.php.jpg) and manipulate MIME types. Mitigate by whitelisting file types, scanning headers, removing execute permissions from upload directories.', 'upload-demo', 'upload-lab', '.php', 13),
(14, 25, 20, 6, 'Vulnerability Scanners', 'vulnerability-scanners', 'intermediate', 'Discover tools used to automatically find security weaknesses.', 'Scanners crawl pages, index them, attempt attacks, and report findings. Configure attack categories, exclude logout links, validate false positives manually. Use WAF alongside secure coding.', NULL, NULL, NULL, 14),
(15, 25, 20, 6, 'Finding Existing Exploits', 'finding-exploits', 'intermediate', 'Learn to search for public exploits from Exploit-DB and CVE.', 'Responsible disclosure: researcher → vendor → timeline → patch → public. Search exploit-db.com or Google for "Software Version exploit". WannaCry showed the danger of unpatched systems.', NULL, NULL, NULL, 15),
(16, 22, 20, 6, 'Introduction to Buffer Overflows', 'buffer-overflow-intro', 'advanced', 'Understand how buffer overflows work.', 'Buffer overflows occur when input exceeds reserved memory, overwriting adjacent addresses including the return pointer (EIP).', 'bof-demo', 'bof-lab', 'EIP', 16),
(17, 22, 20, 6, 'Integer Overflow', 'integer-overflow', 'advanced', 'Learn how integer overflows lead to security bypasses.', 'Unsigned 32-bit: 0 to 4,294,967,295. Signed: MSB is sign bit. Overflow flips the sign. Mitigate by validating arithmetic results.', 'intoverflow-demo', 'intoverflow-lab', '4294967295', 17),
(18, 22, 20, 6, 'Buffer Overflow Exploitation', 'buffer-overflow', 'advanced', 'Learn practical buffer overflow exploitation with shellcode and NOP sleds.', 'Exploit structure: padding + EIP overwrite + NOP sled (0x90) + shellcode. Compile with -fno-stack-protector -z execstack. Disable ASLR for testing.', NULL, NULL, NULL, 18),
(19, 22, 20, 6, 'Buffer Overflow Mitigations', 'buffer-overflow-mitigations', 'advanced', 'Understand stack canaries, NX/DEP, and ASLR protections.', 'Stack Canary: value before return pointer, terminates if changed. NX/DEP: separates code/data in memory. ASLR: randomizes memory layout. All can be bypassed but raise the bar significantly.', NULL, NULL, NULL, 19),
(20, 22, 20, 6, 'Format String Attacks', 'format-string', 'advanced', 'Understand format string vulnerabilities for memory reading and writing.', 'printf(input) without format specifier lets attackers read stack memory with %x and specific addresses with %s. Can also write to memory. Never use printf without a format specifier.', NULL, NULL, NULL, 20),
(21, 25, 20, 6, 'Exploiting FTP & Web Apps', 'exploiting-services', 'intermediate', 'Walk through exploiting vulnerable FTP services and web applications.', 'FTP: nmap -vv -sV to identify versions, search exploit-db. Web apps: find CVEs for software versions (e.g., MyBB RCE). Attack chain: recon → vulnerability ID → exploit → access.', NULL, NULL, NULL, 21),
(22, 25, 20, 6, 'Metasploit Framework', 'metasploit', 'intermediate', 'Master the Metasploit exploitation framework.', 'Steps: msfconsole → search exploit → use module → set PAYLOAD → set RHOST/LHOST → exploit. Meterpreter provides post-exploitation: screenshots, file access, privilege escalation.', 'msf-demo', 'msf-lab', 'msfconsole', 22),
(23, 21, 20, 6, 'Patch Cycles & End of Support', 'patch-cycles', 'beginner', 'Understand why timely patching is critical for security.', 'Patch cycles: approved delay for testing. Prioritize internet-facing and critical systems. End of Support (e.g., Windows XP): no more patches = permanent vulnerability. Mitigate legacy with isolated VMs.', NULL, NULL, NULL, 23),
(24, 23, 20, 6, 'Social Engineering', 'social-engineering', 'beginner', 'Learn how attackers manipulate human psychology.', 'Social engineering tricks people into actions against their interests. Pretexting: impersonating authority figures via phone/email. Requires acting skill, psychological insight, and extensive reconnaissance.', NULL, NULL, NULL, 24),
(25, 23, 20, 6, 'Phishing & Drive-by Downloads', 'phishing', 'beginner', 'Understand phishing techniques and browser-based attacks.', 'Mass phishing vs spear phishing (targeted). Drive-by downloads compromise visited sites to exploit browser vulnerabilities using SET. Word macros and malicious PDFs are common vectors targeting HR/Legal.', 'phishing-demo', 'phishing-lab', 'spear', 25),
(26, 23, 20, 6, 'Credential Harvesting & CEO Fraud', 'credential-harvesting', 'intermediate', 'Learn about credential harvesting and business email compromise.', 'Credential harvesting: clone login pages with SET. CEO Fraud (whaling): impersonate executives to authorize transfers, modify invoice account numbers. Often undetected for weeks.', NULL, NULL, NULL, 26);

-- Level 2: Privilege Escalation (lessons 27-32)
INSERT INTO lessons (id, category_id, level_id, course_id, title, slug, difficulty, summary, description, demo_html, lab_html, lab_solution, sort_order) VALUES
(27, 24, 21, 6, 'Introduction to Privilege Escalation', 'privesc-intro', 'intermediate', 'Understand why privilege escalation is critical in penetration testing.', 'Exploits typically give unprivileged access (e.g., www-data). Privilege escalation gets root/admin access to spread through the network. SUID (chmod u+s) runs programs with owners privileges.', 'privesc-demo', 'privesc-lab', 'SUID', 1),
(28, 24, 21, 6, 'Exploiting Services & Kernel', 'privesc-services', 'intermediate', 'Exploit vulnerable services and kernel flaws for root access.', 'List processes with ps auxf, identify versions, search exploit-db. DirtyCOW (CVE-2016-5195): race condition allowing overwrite of non-writable files. Compile: gcc -pthread dirty.c -o dirty -lcrypt.', NULL, NULL, NULL, 2),
(29, 24, 21, 6, 'SUID, Sudo & Wildcard Injection', 'privesc-suid-sudo', 'intermediate', 'Find and exploit SUID binaries, sudo misconfigurations, and wildcard injection.', 'Find SUID: find / -perm -4000 -user root. Sudo exploit: sudo find /etc -exec sh -i. Wildcard injection: filenames like -e sh file.c trick rsync cron jobs into executing arbitrary scripts as root.', 'suid-demo', 'suid-lab', 'find / -perm -4000', 3),
(30, 24, 21, 6, 'Windows Privilege Escalation', 'privesc-windows', 'intermediate', 'Learn Windows-specific privilege escalation techniques.', 'Privilege levels: User < Administrator < SYSTEM. UAC bypass using exploit/windows/local/ask or PowerShell. Kernel exploits: enum_patches → ms10_015_kitrap0d. Stored credentials in unattend.xml (Base64 encoded).', 'winprivesc-demo', 'winprivesc-lab', 'SYSTEM', 4),
(31, 24, 21, 6, 'Unquoted Service Paths & Registry', 'privesc-paths-registry', 'intermediate', 'Exploit unquoted service paths and weak registry permissions.', 'Unquoted paths: Windows tries paths sequentially (C:\\Program.exe, then C:\\Program Files\\Vuln.exe). Weak registry: modify ImagePath to point to malicious executable. Find: wmic service get pathname.', NULL, NULL, NULL, 5),
(32, 24, 21, 6, 'Weak Permissions & AlwaysInstallElevated', 'privesc-weak-perms', 'intermediate', 'Exploit weak folder permissions and AlwaysInstallElevated policy.', 'Replace service executables in weakly-permissioned folders. AlwaysInstallElevated: both HKCU and HKLM registry keys = 0x1 allows any user to install MSI as SYSTEM. Generate payload with msfvenom.', NULL, NULL, NULL, 6);

-- ============================================================
-- Quiz Questions — ALL Courses
-- ============================================================

-- C1 L1: Motherboards (lesson 33)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(33, 'What is the largest standard motherboard form factor?', 'Mini-ITX', 'Micro-ATX', 'ATX', 'E-ATX', 'D', 'E-ATX (Extended ATX) is the largest standard form factor, followed by ATX, Micro-ATX, and Mini-ITX.', 1),
(33, 'What connects the CPU to the motherboard?', 'RAM slot', 'CPU socket', 'PCI Express', 'SATA port', 'B', 'The CPU socket on the motherboard holds the processor and provides electrical connections.', 2),
(33, 'Which bus connects high-speed components like GPUs?', 'USB', 'SATA', 'PCI Express', 'PS/2', 'C', 'PCI Express (PCIe) is the high-speed expansion bus used for GPUs and other fast components.', 3);

-- C1 L1: CPUs (lesson 34)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(34, 'What allows a CPU to handle multiple tasks?', 'Higher voltage', 'Context switching', 'Larger cache', 'More RAM', 'B', 'Context switching allows a CPU to rapidly switch between tasks, giving the illusion of multitasking.', 1),
(34, 'What unit measures CPU speed?', 'Megabytes', 'Gigahertz (GHz)', 'Watts', 'Pixels', 'B', 'CPU clock speed is measured in GHz — billions of cycles per second.', 2);

-- C1 L1: RAM & Storage (lesson 35)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(35, 'What happens to RAM contents when power is lost?', 'Data is saved to disk', 'Data persists for 24 hours', 'Data is lost (volatile)', 'Data is compressed', 'C', 'RAM is volatile — all contents are lost when power is removed.', 1),
(35, 'Which storage device has no moving parts?', 'HDD', 'Floppy disk', 'SSD', 'Tape drive', 'C', 'SSDs use flash memory with no moving parts, making them faster and more durable than HDDs.', 2);

-- C1 L2: Bits & Bytes (lesson 38)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(38, 'How many bits are in one byte?', '4', '8', '16', '32', 'B', 'One byte consists of 8 bits.', 1),
(38, 'What is the binary representation of decimal 10?', '1000', '1010', '1100', '1110', 'B', 'Decimal 10 = 8+2 = 1010 in binary.', 2),
(38, 'What base does hexadecimal use?', 'Base 2', 'Base 8', 'Base 10', 'Base 16', 'D', 'Hexadecimal uses base 16 (0-9 and A-F).', 3);

-- C1 L2: ASCII (lesson 39)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(39, 'What is the ASCII code for uppercase A?', '41', '65', '97', '48', 'B', 'The ASCII code for A is 65 (decimal) or 41 (hexadecimal).', 1),
(39, 'How many characters can standard ASCII represent?', '64', '128', '256', '512', 'B', 'Standard ASCII uses 7 bits to represent 128 characters.', 2);

-- C1 L2: Base64 (lesson 40)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(40, 'What character is used for Base64 padding?', '#', '*', '=', '&', 'C', 'Base64 uses the = sign for padding when the input length is not divisible by 3.', 1),
(40, 'Is Base64 a form of encryption?', 'Yes, it is strong encryption', 'Yes, but weak encryption', 'No, it is encoding (reversible without a key)', 'No, it is hashing', 'C', 'Base64 is encoding, not encryption. Anyone can decode it without a key.', 2);

-- C1 L2: File Headers (lesson 41)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(41, 'What are magic numbers in files?', 'Random encryption keys', 'Header bytes identifying file type', 'File size indicators', 'Version numbers', 'B', 'Magic numbers are the first few bytes of a file that identify its type regardless of extension.', 1),
(41, 'What magic bytes identify a JPEG file?', '50 4B 03 04', '89 50 4E 47', 'FF D8 FF', '47 49 46', 'C', 'JPEG files begin with the magic bytes FF D8 FF.', 2);

-- C1 L3: Boolean Logic (lesson 42)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(42, 'What does the AND gate output when both inputs are 1?', '0', '1', 'Undefined', 'Alternates', 'B', 'AND outputs 1 only when ALL inputs are 1.', 1),
(42, 'Which gate outputs 1 when inputs differ?', 'AND', 'OR', 'XOR', 'NAND', 'C', 'XOR (exclusive OR) outputs 1 when inputs are different.', 2),
(42, 'What is the opposite of an AND gate?', 'OR', 'NOT', 'NAND', 'XOR', 'C', 'NAND outputs the opposite of AND — 0 only when both inputs are 1.', 3);

-- C1 L3: XOR Encryption (lesson 43)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(43, 'In XOR encryption, how do you decrypt?', 'Apply XOR with a different key', 'Apply XOR with the same key', 'Reverse the bits', 'Use the inverse key', 'B', 'XOR is its own inverse — applying the same key decrypts the ciphertext.', 1);

-- C1 L4: File Systems (lesson 44)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(44, 'What is the maximum file size on FAT32?', '2 GB', '4 GB', '16 GB', 'Unlimited', 'B', 'FAT32 has a maximum individual file size of 4 GB.', 1),
(44, 'Which file system supports permissions and encryption?', 'FAT32', 'exFAT', 'NTFS', 'EXT2', 'C', 'NTFS supports file permissions, encryption (EFS), and shadow copies.', 2),
(44, 'What is the default file system for modern Linux?', 'NTFS', 'FAT32', 'EXT3', 'EXT4', 'D', 'EXT4 is the default file system for most modern Linux distributions.', 3);

-- C1 L5: Cloud (lesson 46)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(46, 'Gmail is an example of which cloud model?', 'IaaS', 'PaaS', 'SaaS', 'On-premises', 'C', 'Gmail is Software as a Service — you use the software without managing any infrastructure.', 1),
(46, 'In IaaS, what does the provider manage?', 'Everything including applications', 'Physical hardware and networking', 'Only the operating system', 'Nothing', 'B', 'IaaS provides virtualized computing resources — the provider manages physical hardware.', 2);

-- C2 L1: OS Fundamentals (lesson 47)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(47, 'What part of the OS runs in protected memory?', 'Shell', 'Kernel', 'Desktop', 'Browser', 'B', 'The kernel operates in protected memory space to prevent user programs from corrupting core OS functions.', 1),
(47, 'What signals the CPU to handle an event immediately?', 'A process', 'An interrupt', 'A thread', 'A driver', 'B', 'Interrupts (hardware or software) signal the CPU to pause current work and handle the event.', 2),
(47, 'What initializes hardware before the OS loads?', 'Kernel', 'Shell', 'BIOS/UEFI', 'Desktop Manager', 'C', 'BIOS/UEFI firmware initializes hardware and hands control to the boot loader.', 3);

-- C2 L2: VMs & Hypervisors (lesson 49)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(49, 'Which hypervisor type runs directly on hardware?', 'Type 1 (bare-metal)', 'Type 2 (hosted)', 'Type 3 (hybrid)', 'Type 4 (cloud)', 'A', 'Type 1 hypervisors run directly on hardware without a host OS (e.g., VMware ESXi).', 1),
(49, 'VirtualBox is which type of hypervisor?', 'Type 1', 'Type 2', 'Type 3', 'Not a hypervisor', 'B', 'VirtualBox is a Type 2 (hosted) hypervisor that runs on top of an existing OS.', 2);

-- C3 L1: Linux Terminal (lesson 52)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(52, 'What is the default shell on most Linux systems?', 'zsh', 'fish', 'bash', 'csh', 'C', 'Bash (Bourne Again Shell) is the default shell on most Linux distributions.', 1);

-- C3 L2: Superuser (lesson 53)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(53, 'What command runs a single command with root privileges?', 'su', 'sudo', 'root', 'admin', 'B', 'sudo runs a single command with elevated privileges without switching to the root user.', 1),
(53, 'What is the UID of the root user?', '1', '0', '1000', '999', 'B', 'The root user always has UID 0 on Linux systems.', 2);

-- C3 L2: File Permissions (lesson 55)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(55, 'What numeric value represents rwxr-xr-x?', '644', '777', '755', '700', 'C', 'rwx(7) r-x(5) r-x(5) = 755.', 1),
(55, 'What does the SUID bit do?', 'Deletes the file after execution', 'Runs the file with the owners privileges', 'Encrypts the file', 'Makes the file read-only', 'B', 'SUID (Set User ID) runs a program with the file owners permissions regardless of who executes it.', 2);

-- C3 L2: Environment Variables (lesson 56)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(56, 'What does the PATH variable contain?', 'The current working directory', 'A list of directories searched for commands', 'The home directory path', 'The system hostname', 'B', 'PATH lists directories the shell searches when you type a command.', 1);

-- C3 L4: File Operations (lesson 60)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(60, 'What flag copies directories recursively?', 'cp -f', 'cp -r', 'cp -a', 'cp -d', 'B', 'The -r flag copies directories and their contents recursively.', 1),
(60, 'What does mkdir -p do?', 'Prompts before creating', 'Creates nested parent directories', 'Sets permissions', 'Moves directories', 'B', 'mkdir -p creates all necessary parent directories in the path.', 2);

-- C3 L4: Search Commands (lesson 62)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(62, 'Which command searches file contents for a pattern?', 'find', 'grep', 'which', 'locate', 'B', 'grep searches within file contents for matching text patterns.', 1),
(62, 'Which command locates a binary in PATH?', 'find', 'grep', 'which', 'file', 'C', 'which shows the full path of a command binary found in PATH.', 2);

-- C3 L5: Processes (lesson 64)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(64, 'What command lists all running processes?', 'ls -all', 'ps aux', 'top -list', 'proc -a', 'B', 'ps aux lists all running processes with detailed information.', 1);

-- C3 L5: Pipes (lesson 65)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(65, 'What does the pipe symbol (|) do?', 'Redirects output to a file', 'Sends output of one command as input to another', 'Runs commands in parallel', 'Creates a symbolic link', 'B', 'The pipe (|) sends the stdout of one command as stdin to the next command.', 1),
(65, 'What does >> do vs >?', '>> overwrites, > appends', '>> appends, > overwrites', 'Both overwrite', 'Both append', 'B', '> overwrites the file; >> appends to it.', 2);

-- C3 L5: SSH (lesson 67)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(67, 'What does SSH provide?', 'Unencrypted remote access', 'Encrypted remote access', 'File system encryption', 'Network monitoring', 'B', 'SSH provides encrypted remote terminal access over an insecure network.', 1);

-- C4 L1: Google Dorks (lesson 69)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(69, 'What does site:example.com do in Google?', 'Creates a new site', 'Restricts results to that domain', 'Blocks that domain', 'Shows site statistics', 'B', 'The site: operator restricts search results to a specific domain.', 1),
(69, 'What are Google Dorks?', 'Google employees', 'Clever searches that find unintended content', 'Google error pages', 'Encrypted search results', 'B', 'Google Dorks use advanced operators to find sensitive unintended content like passwords and cameras.', 2);

-- C4 L2: HTTP Protocol (lesson 72)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(72, 'What HTTP method retrieves a resource?', 'POST', 'GET', 'PUT', 'DELETE', 'B', 'GET retrieves a resource from the server without modifying it.', 1),
(72, 'What does HTTP status 404 mean?', 'Server error', 'Redirect', 'Not Found', 'OK', 'C', '404 means the requested resource was not found on the server.', 2),
(72, 'What port does HTTPS use by default?', '80', '8080', '443', '22', 'C', 'HTTPS uses port 443 by default; HTTP uses port 80.', 3);

-- C4 L2: Cookies (lesson 76)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(76, 'What is the most common use of cookies?', 'Storing passwords', 'Session identification', 'Running scripts', 'Blocking ads', 'B', 'Cookies most commonly store session IDs to maintain login state across requests.', 1),
(76, 'How much data can Local Storage hold per site?', '1 KB', '100 KB', '5 MB', '50 MB', 'C', 'Web Local Storage allows up to 5 MB of data per origin.', 2);

-- C5 L1: Network Hardware (lesson 78)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(78, 'What device directs data to the correct port by MAC address?', 'Hub', 'Switch', 'Router', 'Modem', 'B', 'A switch directs data to the correct port based on the destination MAC address.', 1),
(78, 'What is the main difference between a hub and a switch?', 'Hubs are faster', 'Switches send data to all ports', 'Hubs send data to all ports (broadcast)', 'There is no difference', 'C', 'Hubs broadcast data to all connected ports; switches direct data only to the destination port.', 2);

-- C5 L1: IP Addresses (lesson 79)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(79, 'Which IP range is private?', '8.8.8.0/24', '192.168.0.0/16', '1.1.1.0/24', '216.58.0.0/16', 'B', '192.168.0.0/16 is a private IP range reserved for local networks.', 1),
(79, 'What does NAT do?', 'Encrypts traffic', 'Translates between private and public IPs', 'Blocks malicious traffic', 'Assigns domain names', 'B', 'NAT translates between private LAN addresses and the public internet IP.', 2);

-- C5 L1: TCP vs UDP (lesson 82)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(82, 'What is the TCP three-way handshake?', 'ACK → SYN → FIN', 'SYN → SYN/ACK → ACK', 'GET → POST → PUT', 'HELLO → OK → BYE', 'B', 'TCP connection starts with SYN → SYN/ACK → ACK three-way handshake.', 1),
(82, 'Which protocol is best for video streaming?', 'TCP', 'UDP', 'ICMP', 'ARP', 'B', 'UDP is preferred for streaming because speed matters more than retransmitting dropped frames.', 2);

-- C5 L2: Subnetting (lesson 84)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(84, 'How many hosts can a /24 subnet have?', '256', '254', '128', '512', 'B', 'A /24 subnet has 256 addresses but .0 (network) and .255 (broadcast) are reserved, leaving 254 hosts.', 1),
(84, 'What is the loopback address?', '192.168.0.1', '10.0.0.1', '127.0.0.1', '0.0.0.0', 'C', '127.0.0.1 is the loopback address (localhost) — traffic never leaves the machine.', 2);

-- C5 L3: Email Spoofing & SPF (lesson 90)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(90, 'What does SPF stand for?', 'Secure Protocol Format', 'Sender Policy Framework', 'Simple Protection Filter', 'Server Path Firewall', 'B', 'SPF (Sender Policy Framework) lists authorized mail server IPs in a DNS TXT record.', 1),
(90, 'Why is DKIM better than SPF alone?', 'DKIM is faster', 'DKIM uses cryptographic signatures per domain', 'DKIM blocks all spam', 'DKIM replaces DNS', 'B', 'DKIM signs emails with a domain-specific private key, verified via DNS public key — more granular than IP-based SPF.', 2);

-- C5 L4: DNS Records (lesson 94)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(94, 'Which DNS record maps a domain to an IPv4 address?', 'AAAA', 'MX', 'A', 'CNAME', 'C', 'An A record maps a domain name to an IPv4 address.', 1),
(94, 'Which record specifies the mail server for a domain?', 'A', 'NS', 'MX', 'PTR', 'C', 'MX (Mail Exchange) records specify which server handles email for a domain.', 2);

-- C5 L5: OSI Model (lesson 97)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(97, 'How many layers does the OSI model have?', '4', '5', '7', '10', 'C', 'The OSI model has 7 layers, from Physical (1) to Application (7).', 1),
(97, 'Which OSI layer handles TCP and UDP?', 'Layer 3 - Network', 'Layer 4 - Transport', 'Layer 5 - Session', 'Layer 7 - Application', 'B', 'Layer 4 (Transport) handles end-to-end connections using TCP and UDP.', 2),
(97, 'What is jokingly called "Layer 8"?', 'The internet', 'The cloud', 'The user', 'The firewall', 'C', 'Layer 8 humorously refers to the user — often the weakest link in security.', 3);

-- C5 L5: DoS Attacks (lesson 100)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(100, 'What does DDoS stand for?', 'Direct Denial of Service', 'Distributed Denial of Service', 'Dynamic Denial of Systems', 'Dual Denial of Security', 'B', 'DDoS = Distributed Denial of Service, using many systems to attack simultaneously.', 1),
(100, 'Which is an application-layer DoS attack?', 'SYN flood', 'Repeatedly calling expensive /login endpoint', 'ARP spoofing', 'MAC flooding', 'B', 'Application-layer DoS targets resource-intensive endpoints like login or search pages.', 2);

-- C6 L1: SQL Injection (lesson 1)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(1, 'What is SQL injection?', 'A technique to optimise SQL queries', 'A method to inject malicious SQL code through user input', 'A way to encrypt database connections', 'A type of database backup', 'B', 'SQL injection exploits vulnerabilities by inserting malicious SQL through user input.', 1),
(1, 'Which input could bypass a vulnerable login?', 'admin', 'password123', 'admin'' OR ''1''=''1'' --', 'SELECT * FROM users', 'C', 'This payload closes the string, adds a true condition, and comments out the rest.', 2),
(1, 'Best defence against SQL injection?', 'Input length validation only', 'Parameterised queries / prepared statements', 'Hiding error messages', 'Using POST instead of GET', 'B', 'Parameterised queries separate SQL code from data.', 3);

-- C6 L1: XSS (lesson 2)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(2, 'Which XSS type is stored in the database?', 'Reflected XSS', 'Stored (Persistent) XSS', 'DOM-based XSS', 'Self XSS', 'B', 'Stored XSS persists in the database and affects all visitors.', 1),
(2, 'Primary impact of XSS?', 'Server crash', 'Database corruption', 'Session hijacking and data theft', 'Network disruption', 'C', 'XSS enables session theft and actions on behalf of victims.', 2),
(2, 'Best defence against XSS?', 'Using HTTPS', 'Output encoding and Content Security Policy', 'Input length limits', 'Using cookies', 'B', 'Output encoding and CSP are primary defenses against XSS.', 3);

-- C6 L1: CSRF (lesson 3)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(3, 'Why do CSRF attacks work?', 'Servers dont validate input', 'Browsers auto-send cookies with requests', 'JavaScript is enabled', 'HTTP is insecure', 'B', 'CSRF exploits automatic cookie inclusion by browsers.', 1),
(3, 'Most effective CSRF prevention?', 'CAPTCHA', 'Anti-CSRF tokens', 'Rate limiting', 'HTTPS', 'B', 'Anti-CSRF tokens are unique per-session values attackers cannot predict.', 2);

-- C6 L1: Broken Auth (lesson 4)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(4, 'What is credential stuffing?', 'Creating strong passwords', 'Using leaked credentials from other breaches', 'Encrypting passwords', 'Two-factor authentication', 'B', 'Credential stuffing uses stolen credentials from other breaches.', 1),
(4, 'Recommended password hashing algorithm?', 'MD5', 'SHA-1', 'bcrypt', 'Base64', 'C', 'bcrypt has built-in salting and adjustable work factor.', 2);

-- C6 L1: IDOR (lesson 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(5, 'How is IDOR exploited?', 'By injecting SQL', 'By modifying resource identifiers', 'By using XSS', 'By brute forcing passwords', 'B', 'IDOR exploits changing IDs to access unauthorized resources.', 1),
(5, 'Best IDOR prevention?', 'Input validation', 'Server-side authorization checks', 'Using HTTPS', 'Disabling JavaScript', 'B', 'Server must verify authorization for each resource access.', 2);

-- C6 L1: Command Injection (lesson 6)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(6, 'Which character chains commands in Linux?', 'Comma (,)', 'Semicolon (;)', 'Colon (:)', 'Period (.)', 'B', 'Semicolon separates and chains commands in shell.', 1),
(6, 'Best command injection prevention?', 'Input length limits', 'Avoid OS commands; use language APIs', 'Error handling', 'Using sudo', 'B', 'Avoid passing user input to shell commands entirely.', 2);

-- C6 L1: Path Traversal (lesson 7)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(7, 'What sequence is used in path traversal?', 'cd..', '../', '~/', 'pwd', 'B', '../ navigates up one directory level.', 1),
(7, 'How to prevent path traversal?', 'Use longer filenames', 'Canonicalize paths and verify allowed directory', 'Encrypt filenames', 'Use POST requests', 'B', 'Canonicalize the path and verify it is within the allowed base directory.', 2);

-- C6 L1: Security Misconfiguration (lesson 8)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(8, 'Header that prevents clickjacking?', 'X-Content-Type-Options', 'X-Frame-Options', 'X-XSS-Protection', 'Content-Type', 'B', 'X-Frame-Options controls whether a page can be loaded in an iframe.', 1),
(8, 'What to disable in production?', 'HTTPS', 'Debug mode and verbose errors', 'Authentication', 'Logging', 'B', 'Debug mode exposes sensitive information in production.', 2);

-- C6 L1: File Inclusion (lesson 9)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(9, 'What is the difference between LFI and RFI?', 'LFI is more dangerous', 'RFI includes files from remote servers', 'They are the same thing', 'LFI requires authentication', 'B', 'RFI includes files from external URLs while LFI reads local server files.', 1),
(9, 'Which PHP setting enables RFI?', 'display_errors = On', 'allow_url_include = On', 'safe_mode = Off', 'register_globals = On', 'B', 'allow_url_include must be On for PHP to include remote URLs.', 2);

-- C6 L1: Session Guessing (lesson 10)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(10, 'Why are sequential session IDs dangerous?', 'They are too long', 'Attackers can predict the next valid token', 'They expire too quickly', 'They use too much memory', 'B', 'Sequential or predictable session IDs allow attackers to guess valid sessions.', 1),
(10, 'How should session tokens be generated?', 'Using MD5 of the timestamp', 'Using truly random values with expiry', 'Using the username as token', 'Using sequential numbers', 'B', 'Session tokens should be cryptographically random with expiration dates.', 2);

-- C6 L1: Clickjacking (lesson 11)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(11, 'What CSS property makes an iframe invisible?', 'display: none', 'opacity: 0 with z-index: 1', 'visibility: hidden', 'color: transparent', 'B', 'opacity: 0 with z-index: 1 makes the iframe invisible but still clickable on top.', 1),
(11, 'How to prevent clickjacking?', 'Use HTTPS', 'Set X-Frame-Options header', 'Disable JavaScript', 'Use strong passwords', 'B', 'X-Frame-Options prevents a site from being loaded in iframes.', 2);

-- C6 L1: File Upload (lesson 13)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(13, 'How can attackers bypass file type restrictions?', 'Using larger files', 'Using double extensions like shell.php.jpg', 'Uploading smaller files', 'Using HTTPS', 'B', 'Double extensions and MIME type manipulation bypass simple file type checks.', 1),
(13, 'Best file upload defense?', 'Check file extension only', 'Whitelist types, scan headers, remove execute permissions', 'Limit file size only', 'Rename to .txt', 'B', 'Multiple layers: whitelist types, verify headers, remove executable permissions from upload directory.', 2);

-- C6 L1: Buffer Overflow Intro (lesson 16)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(16, 'What register is overwritten in a buffer overflow?', 'EAX', 'EBX', 'EIP (Instruction Pointer)', 'ESP', 'C', 'EIP (Extended Instruction Pointer) controls where execution continues — overwriting it hijacks program flow.', 1),
(16, 'What is a NOP sled?', 'A type of exploit database', 'A series of 0x90 bytes before shellcode', 'A network attack tool', 'An encryption method', 'B', 'NOP sleds (0x90 bytes) provide a landing zone that slides execution into shellcode.', 2);

-- C6 L1: Integer Overflow (lesson 17)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(17, 'What happens when a 32-bit unsigned integer exceeds 4,294,967,295?', 'Program crashes', 'It wraps to 0', 'It becomes negative', 'Nothing', 'B', 'Unsigned integer overflow wraps around to 0 (modular arithmetic).', 1),
(17, 'What determines the sign of a signed integer?', 'The last bit', 'The most significant bit (MSB)', 'The middle bit', 'A separate flag', 'B', 'The MSB (most significant bit) represents the sign in signed integers.', 2);

-- C6 L1: Metasploit (lesson 22)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(22, 'What command starts the Metasploit console?', 'metasploit', 'msfconsole', 'msf-start', 'exploit-run', 'B', 'msfconsole launches the Metasploit Framework interactive console.', 1),
(22, 'What does Meterpreter provide?', 'A web browser', 'A post-exploitation shell with advanced features', 'A vulnerability scanner', 'A firewall', 'B', 'Meterpreter is an advanced payload with file access, screenshots, and privilege escalation.', 2);

-- C6 L1: Phishing (lesson 25)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(25, 'What is spear phishing?', 'Mass email to thousands of people', 'Targeted phishing with personal details', 'Phishing via phone calls', 'Phishing on social media only', 'B', 'Spear phishing is targeted — the attacker researches the victim and personalizes the attack.', 1),
(25, 'Which departments are most targeted by phishing?', 'Engineering only', 'Legal, HR, and Accounting', 'Management only', 'IT security', 'B', 'HR, Legal, and Accounting regularly accept external documents, making them prime phishing targets.', 2);

-- C6 L2: PrivEsc Intro (lesson 27)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(27, 'Why is privilege escalation needed after initial exploitation?', 'To delete log files', 'Initial access is usually low-privilege (e.g., www-data)', 'To install antivirus', 'To update the system', 'B', 'Exploits typically give low-privilege access; escalation is needed for full control.', 1),
(27, 'What does chmod u+s do?', 'Makes file hidden', 'Sets the SUID bit', 'Removes write permission', 'Encrypts the file', 'B', 'chmod u+s sets the SUID bit, making the file run with the owners privileges.', 2);

-- C6 L2: SUID & Sudo (lesson 29)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(29, 'How do you find SUID files on Linux?', 'ls -la /', 'find / -perm -4000', 'grep -r suid /', 'cat /etc/suid', 'B', 'find / -perm -4000 locates files with the SUID bit set.', 1),
(29, 'How can sudo find be exploited for privesc?', 'By finding hidden files', 'sudo find /etc -exec sh -i \\; spawns a root shell', 'By searching for passwords', 'It cannot be exploited', 'B', 'The -exec flag in find can execute arbitrary commands — with sudo, those run as root.', 2);

-- C6 L2: Windows PrivEsc (lesson 30)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(30, 'What is the highest privilege level on Windows?', 'Administrator', 'Power User', 'SYSTEM', 'Domain Admin', 'C', 'SYSTEM has unrestricted access and is reserved for OS services — higher than Administrator.', 1),
(30, 'Where might stored credentials be found?', 'In the registry only', 'In unattend.xml and sysprep files', 'In the hosts file', 'In the firewall rules', 'B', 'Credentials are often left in deployment files like unattend.xml, encoded in Base64.', 2);
