-- Quiz Questions Batch 4: OS, Virtualization, Linux Basics, Linux Administration
-- Adding questions to reach minimum of 5 per lesson

USE securitylab;

-- Lesson 47: OS Fundamentals (has 3, need 2 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(47, 'What is the kernel responsible for?', 'User interface', 'Core hardware/software management', 'Web browsing', 'Email handling', 'B', 'The kernel manages memory, processes, hardware communication, and system calls.', 4),
(47, 'What is a process?', 'A program file', 'A running instance of a program', 'A CPU core', 'A memory address', 'B', 'A process is a program in execution with its own memory space and resources.', 5);

-- Lesson 48: Boot Process (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(48, 'What runs first when a computer starts?', 'Operating System', 'BIOS/UEFI firmware', 'Bootloader', 'Kernel', 'B', 'BIOS or UEFI firmware initializes hardware and starts the boot process.', 1),
(48, 'What is the bootloader responsible for?', 'Hardware initialization', 'Loading the operating system kernel', 'Managing files', 'Network setup', 'B', 'The bootloader (like GRUB) loads the kernel into memory and transfers control to it.', 2),
(48, 'What is UEFI?', 'A file system', 'Modern replacement for BIOS', 'An encryption method', 'A network protocol', 'B', 'UEFI (Unified Extensible Firmware Interface) is the modern successor to BIOS with more features.', 3),
(48, 'What is Secure Boot?', 'Password protection', 'UEFI feature verifying signed bootloaders', 'Encrypted boot drive', 'Boot speed optimization', 'B', 'Secure Boot verifies digital signatures to prevent unauthorized bootloaders from running.', 4),
(48, 'What is the MBR?', 'Memory Boot Record', 'Master Boot Record', 'Main BIOS Routine', 'Managed Boot Resource', 'B', 'MBR is the first sector of a disk containing bootloader code and partition table.', 5);

-- Lesson 49: VMs & Hypervisors (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(49, 'What is a Type 1 hypervisor?', 'Runs on top of OS', 'Runs directly on hardware (bare metal)', 'Runs in browser', 'Runs on mobile', 'B', 'Type 1 hypervisors run directly on hardware (e.g., VMware ESXi, Hyper-V Server).', 3),
(49, 'What is a snapshot in virtualization?', 'Screenshot of VM', 'Point-in-time state capture for rollback', 'Network capture', 'Performance metric', 'B', 'Snapshots save VM state, memory, and disk, enabling restoration to that point.', 4),
(49, 'What is VM escape?', 'Closing a VM window', 'Breaking out of VM to attack host or other VMs', 'VM migration', 'VM snapshot', 'B', 'VM escape exploits hypervisor vulnerabilities to access the host system from within a VM.', 5);

-- Lesson 50: Virtualization Uses (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(50, 'Why use VMs for malware analysis?', 'VMs are faster', 'Isolated environment protects host system', 'VMs have better graphics', 'Malware requires VMs', 'B', 'VMs provide isolated sandboxes where malware can be safely analyzed without risking host infection.', 1),
(50, 'What is a sandboxed environment?', 'Beach simulation', 'Isolated space restricting program access', 'Development IDE', 'Cloud storage', 'B', 'Sandboxing isolates programs from the main system, limiting damage from malicious code.', 2),
(50, 'What is VM sprawl?', 'VM performance issue', 'Uncontrolled proliferation of VMs', 'VM display setting', 'Network congestion', 'B', 'VM sprawl occurs when too many VMs are created without proper management, wasting resources.', 3),
(50, 'What is containerization?', 'VM alternative sharing host OS kernel', 'Physical server isolation', 'Data encryption', 'Network segmentation', 'A', 'Containers share the host kernel but have isolated filesystems and processes, unlike full VMs.', 4),
(50, 'What is Docker?', 'Type 1 hypervisor', 'Container platform', 'VM manager', 'Network tool', 'B', 'Docker is a popular containerization platform for packaging and deploying applications.', 5);

-- Lesson 51: Linux Distros (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(51, 'What is a Linux distribution?', 'Linux installer only', 'Complete OS with Linux kernel plus software packages', 'Linux source code', 'Linux manual', 'B', 'A distro bundles the Linux kernel with package manager, utilities, and desktop environment.', 1),
(51, 'Which distro is designed for penetration testing?', 'Ubuntu', 'Kali Linux', 'Red Hat', 'CentOS', 'B', 'Kali Linux comes preloaded with security tools for penetration testing and forensics.', 2),
(51, 'What package manager does Debian/Ubuntu use?', 'yum', 'apt', 'pacman', 'rpm', 'B', 'Debian-based systems use apt (Advanced Package Tool) for package management.', 3),
(51, 'What is a desktop environment?', 'Terminal only', 'GUI providing windows, icons, and menus', 'Server software', 'Network service', 'B', 'Desktop environments like GNOME, KDE, XFCE provide graphical user interfaces.', 4),
(51, 'What is the difference between LTS and rolling release?', 'Speed difference', 'LTS has long support period; rolling has continuous updates', 'Storage difference', 'No difference', 'B', 'LTS (Long Term Support) provides stability; rolling releases continuously update packages.', 5);

-- Lesson 52: Linux Terminal (has 1, need 4 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(52, 'What is a shell?', 'Graphical interface', 'Command interpreter between user and kernel', 'File browser', 'Text editor', 'B', 'The shell interprets commands and communicates with the kernel to execute them.', 2),
(52, 'What is Bash?', 'A file type', 'Bourne Again Shell, common Linux shell', 'Network protocol', 'Package manager', 'B', 'Bash is the default shell on most Linux distributions.', 3),
(52, 'What does pwd command do?', 'Change password', 'Print working directory', 'Power down', 'Previous directory', 'B', 'pwd shows the current directory path you are in.', 4),
(52, 'What is the root directory symbol?', '~', '/', '.', '..', 'B', 'Forward slash (/) represents the root of the Linux filesystem hierarchy.', 5);

-- Lesson 53: Superuser & Sudo (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(53, 'What is the root user?', 'First user created', 'Administrator with unlimited privileges', 'Guest account', 'System service account', 'B', 'Root (UID 0) has complete control over the system, bypassing all permission checks.', 3),
(53, 'What file configures sudo permissions?', '/etc/passwd', '/etc/sudoers', '/etc/shadow', '/etc/group', 'B', 'The /etc/sudoers file defines which users can run which commands with sudo.', 4),
(53, 'What is the security risk of always using root?', 'Slower performance', 'Mistakes and malware have unlimited access', 'Uses more memory', 'No risk', 'B', 'Running as root means any mistake or malicious code has full system access.', 5);

-- Lesson 54: Linux Folders (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(54, 'Where are user home directories stored?', '/root', '/home', '/usr', '/var', 'B', 'Regular user home directories are under /home (e.g., /home/username).', 1),
(54, 'What does /etc contain?', 'Temporary files', 'System configuration files', 'User data', 'Log files', 'B', '/etc holds system-wide configuration files in text format.', 2),
(54, 'Where are log files typically stored?', '/tmp', '/etc', '/var/log', '/home', 'C', '/var/log contains system and application log files for monitoring and troubleshooting.', 3),
(54, 'What is /tmp used for?', 'Permanent storage', 'Temporary files cleared on reboot', 'Configuration', 'User homes', 'B', '/tmp stores temporary files and is typically cleared on system restart.', 4),
(54, 'Where are system binaries stored?', '/home/bin', '/bin and /usr/bin', '/etc/bin', '/var/bin', 'B', 'Essential binaries are in /bin; additional user binaries in /usr/bin.', 5);

-- Lesson 55: File Permissions (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(55, 'What does chmod 755 mean?', 'Owner: rwx, Group: r-x, Others: r-x', 'Owner: rw-, Group: r--, Others: r--', 'All: rwx', 'All: r-x', 'A', '755 = Owner has read/write/execute, group and others have read/execute.', 3),
(55, 'What command changes file ownership?', 'chmod', 'chown', 'chgrp', 'usermod', 'B', 'chown changes the owner (and optionally group) of files and directories.', 4),
(55, 'What is the sticky bit?', 'Makes files hidden', 'Prevents users from deleting others files in shared directories', 'Enables execution', 'Encrypts files', 'B', 'The sticky bit on directories (like /tmp) prevents users from deleting others files.', 5);

-- Lesson 56: Environment Variables (has 1, need 4 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(56, 'What is the PATH variable?', 'Current directory', 'List of directories searched for executables', 'File path', 'Network route', 'B', 'PATH contains directories the shell searches when you type a command without full path.', 2),
(56, 'How do you view all environment variables?', 'echo $ALL', 'env or printenv', 'cat /etc/env', 'ls -env', 'B', 'The env or printenv commands display all current environment variables.', 3),
(56, 'What is the HOME variable?', 'System root', 'Current users home directory path', 'Hostname', 'Working directory', 'B', 'HOME contains the path to the current users home directory.', 4),
(56, 'Where are user environment variables often set?', '/etc/passwd', '~/.bashrc or ~/.profile', '/var/env', '/usr/env', 'B', 'User-specific variables are typically set in ~/.bashrc, ~/.profile, or ~/.bash_profile.', 5);

-- Lesson 57: Tab Completion (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(57, 'What does pressing Tab do in the terminal?', 'Creates new tab', 'Auto-completes commands and paths', 'Indents text', 'Shows help', 'B', 'Tab completion auto-fills commands, filenames, and paths, saving typing.', 1),
(57, 'What does double-Tab show?', 'Error message', 'All possible completions', 'Help text', 'History', 'B', 'Pressing Tab twice shows all possible completions when multiple matches exist.', 2),
(57, 'How do you access command history?', 'Tab key', 'Up/Down arrow keys', 'Ctrl+H', 'Escape key', 'B', 'Arrow keys navigate through previously entered commands in the shell history.', 3),
(57, 'What command shows full command history?', 'log', 'history', 'past', 'commands', 'B', 'The history command displays previously executed commands with numbers.', 4),
(57, 'How do you search command history?', 'grep history', 'Ctrl+R for reverse search', 'history -s', 'find history', 'B', 'Ctrl+R enables interactive reverse search through command history.', 5);

-- Lesson 58: Interrupts & Jobs (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(58, 'What does Ctrl+C do?', 'Copy text', 'Interrupt/terminate current process', 'Clear screen', 'Close terminal', 'B', 'Ctrl+C sends SIGINT signal to interrupt and terminate the foreground process.', 1),
(58, 'What does Ctrl+Z do?', 'Undo', 'Suspend process to background', 'Exit shell', 'Zoom in', 'B', 'Ctrl+Z suspends the current process and returns to the shell prompt.', 2),
(58, 'How do you resume a suspended job in foreground?', 'resume', 'fg', 'continue', 'start', 'B', 'The fg command brings a suspended background job to the foreground.', 3),
(58, 'How do you run a command in the background?', 'bg command', 'command &', 'command -bg', 'nohup command', 'B', 'Appending & to a command runs it in the background immediately.', 4),
(58, 'What command lists background jobs?', 'ps', 'jobs', 'bg', 'list', 'B', 'The jobs command shows processes started from the current shell in the background.', 5);

-- Lesson 59: Man Pages (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(59, 'What does man command do?', 'Creates manual', 'Displays manual pages for commands', 'Manages files', 'Monitors system', 'B', 'man shows the documentation/manual for commands, functions, and configuration files.', 1),
(59, 'How do you exit man pages?', 'Ctrl+C', 'Press q', 'Press Escape', 'Type exit', 'B', 'Pressing q quits the man page viewer and returns to the prompt.', 2),
(59, 'What are man page sections?', 'Page numbers', 'Categories like commands(1), system calls(2), etc.', 'Chapters', 'Versions', 'B', 'Man pages are organized into sections: 1=commands, 2=syscalls, 5=config files, etc.', 3),
(59, 'How do you search within man pages?', 'Ctrl+F', '/searchterm', 'grep', 'find', 'B', 'Type / followed by search term to search forward within man pages.', 4),
(59, 'What shows a brief command description?', 'man -short', 'whatis command', 'info command', 'help command', 'B', 'whatis provides one-line descriptions from man page NAME sections.', 5);

-- Lesson 60: File Operations (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(60, 'What does cp -r do?', 'Copy read-only', 'Copy directories recursively', 'Copy and rename', 'Copy permissions', 'B', 'The -r flag enables recursive copying of directories and their contents.', 3),
(60, 'What is the difference between rm and rm -rf?', 'No difference', 'rm -rf forces recursive deletion without prompts', 'rm -rf is safer', 'rm only removes directories', 'B', 'rm -rf forces deletion of directories recursively without confirmation - very dangerous!', 4),
(60, 'How do you create nested directories?', 'mkdir -p path/to/dir', 'mkdir path/to/dir', 'mkdirs path/to/dir', 'mkdir --all', 'A', 'mkdir -p creates parent directories as needed if they dont exist.', 5);
