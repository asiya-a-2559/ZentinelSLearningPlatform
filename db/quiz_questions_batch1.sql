-- Quiz Questions Batch 1: SQL Injection, XSS, CSRF, Auth, IDOR, Command Injection, Path Traversal, Security Misconfig
-- Adding questions to reach minimum of 5 per lesson

USE securitylab;

-- Lesson 1: SQL Injection (has 3, need 2 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(1, 'Which SQL statement is most dangerous when combined with user input?', 'SELECT with WHERE clause', 'INSERT with VALUES', 'DELETE without WHERE', 'UPDATE with SET', 'C', 'DELETE without WHERE can remove all records. Combined with injection, attackers could wipe entire tables.', 4),
(1, 'What does the -- sequence do in SQL injection?', 'Starts a new query', 'Comments out the rest of the line', 'Escapes special characters', 'Terminates the connection', 'B', 'Double dash (--) is a SQL comment that ignores everything after it, often used to bypass password checks.', 5);

-- Lesson 2: XSS (has 3, need 2 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(2, 'Which XSS type persists in the database?', 'Reflected XSS', 'DOM-based XSS', 'Stored XSS', 'Self XSS', 'C', 'Stored XSS saves the malicious script in the database, affecting all users who view the infected content.', 4),
(2, 'What HTTP header helps prevent XSS attacks?', 'X-Frame-Options', 'Content-Security-Policy', 'Cache-Control', 'Accept-Encoding', 'B', 'Content-Security-Policy (CSP) restricts which scripts can execute, blocking inline scripts and unauthorized sources.', 5);

-- Lesson 3: CSRF (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(3, 'What is the primary purpose of a CSRF token?', 'Encrypt user passwords', 'Verify request origin', 'Speed up form submission', 'Store session data', 'B', 'CSRF tokens verify that requests originate from your own site, not from a malicious third-party page.', 3),
(3, 'Which HTTP method is most vulnerable to CSRF?', 'GET for state changes', 'POST with CSRF token', 'PUT with authentication', 'DELETE with confirmation', 'A', 'GET requests for state changes are easily exploitable via image tags or links without user interaction.', 4),
(3, 'What attribute helps protect cookies from CSRF?', 'HttpOnly', 'Secure', 'SameSite', 'Path', 'C', 'SameSite cookie attribute prevents the browser from sending cookies with cross-site requests.', 5);

-- Lesson 4: Broken Authentication (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(4, 'What is credential stuffing?', 'Creating fake credentials', 'Using leaked credentials on multiple sites', 'Encrypting passwords', 'Resetting forgotten passwords', 'B', 'Credential stuffing uses breached username/password pairs to attempt login on other sites where users reused credentials.', 3),
(4, 'Which password storage method is most secure?', 'MD5 hashing', 'SHA1 hashing', 'bcrypt with salt', 'Base64 encoding', 'C', 'bcrypt is designed for password hashing with built-in salting and configurable work factor to resist brute force.', 4),
(4, 'What helps prevent brute force attacks?', 'Longer session tokens', 'Account lockout after failed attempts', 'HTTPS encryption', 'Password complexity rules', 'B', 'Account lockout or rate limiting prevents attackers from trying unlimited password combinations.', 5);

-- Lesson 5: IDOR (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(5, 'What makes an object reference "insecure"?', 'Using integers as IDs', 'Exposing IDs in URLs', 'Lacking authorization checks', 'Using auto-increment', 'C', 'IDOR occurs when the application doesnt verify the user has permission to access the referenced object.', 3),
(5, 'Which is the best fix for IDOR vulnerabilities?', 'Use random UUIDs instead of integers', 'Hide IDs from URLs', 'Implement proper access control checks', 'Encrypt all object IDs', 'C', 'While UUIDs help, proper authorization checks on every request are essential to prevent IDOR.', 4),
(5, 'What type of testing best finds IDOR bugs?', 'Unit testing', 'Load testing', 'Authorization testing with different users', 'Performance testing', 'C', 'Testing the same endpoints with different user accounts reveals missing authorization checks.', 5);

-- Lesson 6: Command Injection (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(6, 'Which character is commonly used to chain commands?', '&', '@', '#', '$', 'A', 'The ampersand (&) and semicolon (;) are used to chain commands in shells, allowing injection of additional commands.', 3),
(6, 'What is the safest way to execute system commands?', 'Sanitize user input', 'Use parameterized commands/APIs', 'Blacklist dangerous characters', 'Run as limited user', 'B', 'Using APIs that dont invoke a shell (like execve with arguments) prevents command injection entirely.', 4),
(6, 'Which payload tests for blind command injection?', 'cat /etc/passwd', 'ping -c 10 attacker.com', 'echo "test"', 'id; whoami', 'B', 'Blind injection uses time delays (sleep) or out-of-band channels (DNS/HTTP callbacks) when output isnt visible.', 5);

-- Lesson 7: Path Traversal (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(7, 'What sequence is used in path traversal attacks?', '../', '//', '\\\\', '**', 'A', 'The ../ sequence moves up one directory, allowing attackers to escape the intended directory.', 3),
(7, 'Which file is commonly targeted on Linux systems?', 'C:\\Windows\\System32\\config\\SAM', '/etc/passwd', '/var/www/index.html', '/home/user/.bashrc', 'B', 'The /etc/passwd file is readable by all users and confirms path traversal works on Linux systems.', 4),
(7, 'What is the best defense against path traversal?', 'URL encoding input', 'Using a whitelist of allowed files', 'Removing ../ from input', 'Running as root', 'B', 'Whitelisting allowed files or using indirect references prevents traversal regardless of encoding tricks.', 5);

-- Lesson 8: Security Misconfiguration (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(8, 'Which is a common security misconfiguration?', 'Using HTTPS', 'Default credentials left unchanged', 'Input validation', 'Parameterized queries', 'B', 'Default credentials are well-known and easily exploited; they must be changed before deployment.', 3),
(8, 'What should be disabled in production?', 'HTTPS', 'Logging', 'Debug mode and verbose errors', 'Authentication', 'C', 'Debug mode exposes sensitive information like stack traces, file paths, and configuration details.', 4),
(8, 'Which header prevents clickjacking?', 'Content-Type', 'X-Frame-Options', 'Cache-Control', 'Accept', 'B', 'X-Frame-Options: DENY or SAMEORIGIN prevents the page from being embedded in frames on other sites.', 5);

-- Lesson 9: File Inclusion (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(9, 'What is the difference between LFI and RFI?', 'LFI is faster than RFI', 'LFI includes local files, RFI includes remote URLs', 'RFI is more common', 'LFI requires authentication', 'B', 'Local File Inclusion accesses files on the server, while Remote File Inclusion fetches files from external URLs.', 3),
(9, 'Which PHP wrapper can reveal source code?', 'file://', 'php://filter', 'data://', 'expect://', 'B', 'php://filter with base64 encoding can read PHP source code instead of executing it.', 4),
(9, 'What configuration prevents RFI in PHP?', 'display_errors = Off', 'allow_url_include = Off', 'max_execution_time = 30', 'memory_limit = 128M', 'B', 'Setting allow_url_include to Off prevents PHP from including files from remote URLs.', 5);

-- Lesson 10: Session Guessing (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(10, 'What makes a session ID vulnerable to guessing?', 'Being stored in cookies', 'Using predictable patterns', 'Being transmitted over HTTPS', 'Having an expiration time', 'B', 'Predictable patterns like sequential numbers or timestamps allow attackers to guess valid session IDs.', 3),
(10, 'How long should a secure session ID be?', '8 characters', '16 characters', '128 bits minimum', '256 bytes', 'C', 'OWASP recommends at least 128 bits (16 bytes) of entropy for session identifiers.', 4),
(10, 'What is session fixation?', 'Guessing session IDs', 'Forcing a known session ID on a user', 'Stealing cookies via XSS', 'Brute forcing login', 'B', 'Session fixation tricks users into using an attacker-controlled session ID before authentication.', 5);

-- Lesson 11: Clickjacking (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(11, 'How does clickjacking work?', 'Injecting malicious scripts', 'Overlaying invisible frames on legitimate content', 'Stealing cookies', 'SQL injection', 'B', 'Clickjacking uses transparent iframes positioned over decoy content to capture unintended clicks.', 3),
(11, 'Which defense completely prevents clickjacking?', 'Input validation', 'X-Frame-Options: DENY', 'HTTPS', 'Strong passwords', 'B', 'X-Frame-Options: DENY prevents the page from being loaded in any frame, eliminating clickjacking.', 4),
(11, 'What is "likejacking"?', 'Stealing likes from social media', 'Clickjacking attack on social media like buttons', 'Fake like generator', 'Like button injection', 'B', 'Likejacking is clickjacking targeting social media actions, tricking users into liking pages.', 5);

-- Lesson 12: Directory Traversal (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(12, 'What is directory traversal also known as?', 'SQL injection', 'Path traversal', 'Command injection', 'XSS', 'B', 'Directory traversal and path traversal are interchangeable terms for the same vulnerability class.', 1),
(12, 'Which encoding might bypass basic traversal filters?', 'Base64', 'URL encoding (..%2F)', 'HTML entities', 'ROT13', 'B', 'URL encoding ../ as ..%2F or %2e%2e%2f can bypass simple string filters.', 2),
(12, 'What is double encoding?', 'Encoding twice with different methods', 'URL encoding the percent sign itself', 'Using two dots instead of one', 'Encoding forward and back slash', 'B', 'Double encoding encodes the % as %25, so ../ becomes ..%252F, bypassing filters that decode once.', 3),
(12, 'Which OS uses backslashes in paths?', 'Linux', 'macOS', 'Windows', 'FreeBSD', 'C', 'Windows uses backslashes (\\) as path separators, requiring different traversal payloads.', 4),
(12, 'What should applications use instead of user-supplied filenames?', 'Sanitized filenames', 'Indirect file references (IDs)', 'Encrypted filenames', 'Hashed filenames', 'B', 'Using indirect references maps user input to allowed files without exposing actual paths.', 5);

-- Lesson 13: File Upload (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(13, 'Which file type is most dangerous to allow uploading?', '.txt', '.jpg', '.php', '.pdf', 'C', 'Executable files like .php can run malicious code on the server if uploaded to a web-accessible directory.', 3),
(13, 'How can attackers bypass extension checks?', 'Change the file content', 'Use double extensions like .php.jpg', 'Rename after upload', 'Compress the file', 'B', 'Double extensions or null bytes (file.php%00.jpg) can bypass naive extension validation.', 4),
(13, 'What is the most secure upload validation?', 'Check file extension only', 'Verify MIME type header', 'Check magic bytes and use whitelist', 'Scan filename for keywords', 'C', 'Checking magic bytes (file signatures) combined with extension whitelisting provides robust validation.', 5);

-- Lesson 14: Vulnerability Scanners (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(14, 'What does a vulnerability scanner do?', 'Exploits vulnerabilities automatically', 'Identifies potential security weaknesses', 'Patches vulnerabilities', 'Blocks attack traffic', 'B', 'Vulnerability scanners detect and report potential weaknesses but dont automatically exploit or fix them.', 1),
(14, 'Which tool is a popular open-source vulnerability scanner?', 'Metasploit', 'OpenVAS', 'Burp Suite', 'Wireshark', 'B', 'OpenVAS (Open Vulnerability Assessment Scanner) is a comprehensive open-source vulnerability scanner.', 2),
(14, 'What is a false positive in scanning?', 'A real vulnerability found', 'A vulnerability that was missed', 'A reported issue that isnt actually vulnerable', 'A scanner crash', 'C', 'False positives are alerts for vulnerabilities that dont actually exist, requiring manual verification.', 3),
(14, 'What type of scan is least intrusive?', 'Authenticated scan', 'Exploitation scan', 'Passive scan', 'Aggressive scan', 'C', 'Passive scans only observe traffic without sending probes, causing no disruption to systems.', 4),
(14, 'Why are authenticated scans more accurate?', 'They run faster', 'They can check internal configurations', 'They use better algorithms', 'They cost more', 'B', 'Authenticated scans access system internals, finding vulnerabilities invisible to external scanning.', 5);

-- Lesson 15: Finding Exploits (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(15, 'What is Exploit-DB?', 'A database management system', 'A collection of public exploits and PoCs', 'An exploitation framework', 'A vulnerability scanner', 'B', 'Exploit-DB is a public archive of exploits and proof-of-concept code for known vulnerabilities.', 1),
(15, 'What does CVE stand for?', 'Common Vulnerability Enumeration', 'Common Vulnerabilities and Exposures', 'Critical Vulnerability Entry', 'Cyber Vulnerability Exchange', 'B', 'CVE (Common Vulnerabilities and Exposures) is a standardized identifier for known vulnerabilities.', 2),
(15, 'What is a zero-day exploit?', 'An exploit that takes zero days to develop', 'An exploit for an unpatched/unknown vulnerability', 'An outdated exploit', 'A failed exploit attempt', 'B', 'Zero-day exploits target vulnerabilities unknown to the vendor, with zero days of patch availability.', 3),
(15, 'Which command searches Exploit-DB from terminal?', 'search exploit', 'searchsploit', 'exploit-search', 'find-exploit', 'B', 'searchsploit is a command-line tool that searches the local Exploit-DB archive.', 4),
(15, 'What should you verify before using a public exploit?', 'It has many downloads', 'The code is safe and does what it claims', 'Its the newest version', 'It has good reviews', 'B', 'Public exploits may contain backdoors or malicious code; always review before execution.', 5);

-- Lesson 16: Buffer Overflow Intro (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(16, 'What is a buffer overflow?', 'Running out of memory', 'Writing data beyond allocated buffer boundaries', 'Network packet overflow', 'Too many open files', 'B', 'Buffer overflow occurs when data exceeds the allocated buffer size, overwriting adjacent memory.', 3),
(16, 'Which memory region is targeted in stack-based overflows?', 'Heap', 'Stack', 'BSS', 'Text segment', 'B', 'Stack-based overflows target the call stack, overwriting return addresses to redirect execution.', 4),
(16, 'What is shellcode?', 'A shell script', 'Machine code payload that spawns a shell', 'Command injection payload', 'Encrypted malware', 'B', 'Shellcode is position-independent machine code injected via overflow to execute arbitrary commands.', 5);

-- Lesson 17: Integer Overflow (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(17, 'What happens when an integer overflows?', 'Program crashes', 'Value wraps around to minimum/maximum', 'Value becomes zero', 'Exception is thrown', 'B', 'Integer overflow wraps the value around due to fixed bit representation (e.g., MAX_INT + 1 = MIN_INT).', 3),
(17, 'Which can cause integer overflow?', 'Adding two large positive numbers', 'Dividing by zero', 'String concatenation', 'Array indexing', 'A', 'Adding large numbers can exceed the maximum representable value, causing overflow.', 4),
(17, 'Why are integer overflows dangerous in security?', 'They slow down programs', 'They can bypass size checks and cause buffer overflows', 'They corrupt databases', 'They crash servers', 'B', 'Integer overflow in size calculations can allocate tiny buffers, leading to buffer overflows.', 5);
