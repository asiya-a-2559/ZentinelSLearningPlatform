-- Quiz Questions Batch 5: Linux Commands, Web, Networking Part 1
-- Adding questions to reach minimum of 5 per lesson

USE securitylab;

-- Lesson 61: File Viewing (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(61, 'What does cat command do?', 'Manage cats', 'Display file contents', 'Categorize files', 'Catalog directories', 'B', 'cat (concatenate) displays file contents to standard output.', 1),
(61, 'What is less better than cat for?', 'Small files', 'Viewing large files page by page', 'Editing files', 'Deleting files', 'B', 'less allows scrolling through large files without loading everything into memory.', 2),
(61, 'What does head -n 20 show?', 'Last 20 lines', 'First 20 lines of file', 'Lines containing 20', 'Random 20 lines', 'B', 'head -n 20 displays the first 20 lines of a file.', 3),
(61, 'What does tail -f do?', 'Show last lines', 'Follow file updates in real-time', 'Show first lines', 'Filter tail', 'B', 'tail -f follows the file, showing new lines as they are appended - great for logs.', 4),
(61, 'How do you count lines in a file?', 'count file', 'wc -l file', 'lines file', 'nl file', 'B', 'wc -l counts the number of lines in a file.', 5);

-- Lesson 62: Search Commands (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(62, 'What does find / -name "*.conf" do?', 'List all files', 'Search for .conf files starting from root', 'Find configuration', 'Create conf files', 'B', 'find searches the filesystem; -name matches filenames with wildcards.', 3),
(62, 'What does grep -r do?', 'Reverse search', 'Search recursively in directories', 'Regular expression', 'Root search', 'B', 'grep -r searches for patterns in all files within directories recursively.', 4),
(62, 'What does which command show?', 'Current user', 'Full path to an executable', 'Which files exist', 'System information', 'B', 'which shows the full path of the executable that would run for a command.', 5);

-- Lesson 63: File Analysis (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(63, 'What does the file command do?', 'Create files', 'Determine file type from content', 'List files', 'Delete files', 'B', 'file examines file contents (magic bytes) to determine the actual file type.', 1),
(63, 'What does strings command extract?', 'String variables', 'Printable text from binary files', 'Code strings', 'Configuration', 'B', 'strings extracts human-readable text sequences from binaries, useful for analysis.', 2),
(63, 'What is wget used for?', 'Getting weather', 'Downloading files from URLs', 'Getting help', 'Network statistics', 'B', 'wget downloads files from the web via HTTP, HTTPS, or FTP.', 3),
(63, 'What is curl used for?', 'Curling text', 'Transferring data with URLs', 'Cursor control', 'Current directory', 'B', 'curl transfers data to/from servers and supports many protocols.', 4),
(63, 'How do you check file checksum?', 'checksum file', 'md5sum or sha256sum', 'hash file', 'verify file', 'B', 'md5sum, sha1sum, sha256sum calculate file checksums for integrity verification.', 5);

-- Lesson 64: Processes (has 1, need 4 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(64, 'What does ps aux show?', 'Password status', 'All running processes with details', 'System ports', 'Disk usage', 'B', 'ps aux lists all processes for all users with CPU, memory, and command info.', 2),
(64, 'What is PID?', 'Process ID number', 'Password ID', 'Peripheral ID', 'Port ID', 'A', 'PID is a unique number identifying each running process.', 3),
(64, 'How do you terminate a process?', 'stop PID', 'kill PID', 'end PID', 'close PID', 'B', 'kill sends signals to processes; kill PID sends SIGTERM to terminate.', 4),
(64, 'What does top command show?', 'Top files', 'Real-time process monitoring', 'Top directories', 'Top users', 'B', 'top displays dynamic view of running processes sorted by resource usage.', 5);

-- Lesson 65: Pipes & Redirects (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(65, 'What does the pipe | do?', 'Logical OR', 'Send output of one command to another', 'Concatenate files', 'Compare files', 'B', 'Pipe connects stdout of one command to stdin of another for chaining.', 3),
(65, 'What does > do in shell?', 'Greater than compare', 'Redirect output to file (overwrite)', 'Append to file', 'Input redirect', 'B', '> redirects stdout to a file, overwriting existing content.', 4),
(65, 'What does >> do?', 'Double redirect', 'Append output to file', 'Overwrite twice', 'Error redirect', 'B', '>> appends stdout to a file without overwriting existing content.', 5);

-- Lesson 66: Cron & Packages (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(66, 'What is cron used for?', 'Cryptocurrency', 'Scheduling recurring tasks', 'Chrome browser', 'Creating logs', 'B', 'cron schedules commands to run automatically at specified times/intervals.', 1),
(66, 'What does crontab -e do?', 'Export crontab', 'Edit users cron jobs', 'Execute crontab', 'Enable cron', 'B', 'crontab -e opens the users crontab file for editing scheduled tasks.', 2),
(66, 'What cron entry means "every day at midnight"?', '* * * * *', '0 0 * * *', '0 * * * *', '* 0 * * *', 'B', 'Format: minute hour day month weekday. 0 0 * * * = 00:00 every day.', 3),
(66, 'What does apt update do?', 'Update all packages', 'Refresh package list from repositories', 'Update apt itself', 'Update configuration', 'B', 'apt update downloads fresh package lists; apt upgrade installs updates.', 4),
(66, 'How do you install packages on Debian/Ubuntu?', 'yum install', 'apt install package', 'rpm install', 'pkg install', 'B', 'apt install downloads and installs packages from configured repositories.', 5);

-- Lesson 67: SSH (has 1, need 4 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(67, 'What port does SSH use by default?', '21', '22', '23', '25', 'B', 'SSH uses TCP port 22 for secure remote connections.', 2),
(67, 'What is SSH key authentication?', 'Password login', 'Using cryptographic key pair instead of password', 'Two-factor auth', 'Token authentication', 'B', 'SSH keys use public/private key pairs for passwordless, secure authentication.', 3),
(67, 'Where are SSH authorized keys stored?', '/etc/ssh/keys', '~/.ssh/authorized_keys', '/var/ssh/auth', '/home/ssh/keys', 'B', 'Public keys of allowed users are stored in ~/.ssh/authorized_keys.', 4),
(67, 'What does ssh-keygen create?', 'SSL certificate', 'SSH key pair (public and private)', 'Password hash', 'Session token', 'B', 'ssh-keygen generates RSA, ECDSA, or Ed25519 key pairs for authentication.', 5);

-- Lesson 68: Search Engines (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(68, 'What is web crawling?', 'Moving slowly', 'Automated discovery and indexing of web pages', 'Manual browsing', 'Downloading files', 'B', 'Web crawlers automatically follow links to discover and index web content.', 1),
(68, 'What is robots.txt?', 'Robot commands', 'File telling crawlers which pages to avoid', 'Search results', 'Robot login', 'B', 'robots.txt requests (doesnt enforce) that crawlers avoid specified paths.', 2),
(68, 'What is indexing in search engines?', 'Creating index.html', 'Organizing crawled content for quick retrieval', 'Numbering pages', 'Sorting alphabetically', 'B', 'Indexing processes and stores page content to enable fast search results.', 3),
(68, 'What is PageRank?', 'Page position', 'Algorithm measuring page importance by links', 'Page creation date', 'Page size', 'B', 'PageRank evaluates page importance based on quantity and quality of linking pages.', 4),
(68, 'What security info can search engines reveal?', 'Nothing sensitive', 'Exposed files, directories, and configuration', 'Only public content', 'Encrypted data', 'B', 'Search engines may index sensitive files accidentally exposed to the web.', 5);

-- Lesson 69: Google Dorks (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(69, 'What does site:example.com do?', 'Create a site', 'Limit search results to that domain', 'Register domain', 'Check site status', 'B', 'site: operator restricts results to pages from the specified domain.', 3),
(69, 'What does filetype:pdf search for?', 'PDF software', 'Only PDF documents', 'PDF converters', 'PDF metadata', 'B', 'filetype: limits results to specific file extensions.', 4),
(69, 'What is the intitle: operator used for?', 'Search title tags', 'Search page titles for specific words', 'Search domains', 'Search URLs', 'B', 'intitle: finds pages with specified words in their HTML title tag.', 5);

-- Lesson 70: Search Troubleshooting (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(70, 'How do you search for exact phrases?', 'Using +', 'Using double quotes "phrase"', 'Using brackets', 'Using AND', 'B', 'Quotes around text search for that exact phrase in that order.', 1),
(70, 'How do you exclude words from search?', '+word', '-word', '!word', 'NOT word', 'B', 'Minus sign before a word excludes results containing that word.', 2),
(70, 'What is Boolean searching?', 'True/false results', 'Using AND, OR, NOT operators', 'Binary search', 'Mathematical search', 'B', 'Boolean operators combine search terms: AND requires both, OR either, NOT excludes.', 3),
(70, 'How do you find cached versions of pages?', 'cache:url', 'old:url', 'archive:url', 'saved:url', 'A', 'cache: shows Googles stored copy of a page, useful if the original is down.', 4),
(70, 'Why use multiple search engines?', 'Faster results', 'Different engines index different content', 'Better graphics', 'More ads', 'B', 'Different search engines have unique indexes; some specialized engines focus on specific content.', 5);

-- Lesson 71: Web Servers (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(71, 'What is a web server?', 'Website creator', 'Software serving web pages to clients', 'Web browser', 'Search engine', 'B', 'Web servers receive HTTP requests and return HTML, images, and other web content.', 1),
(71, 'What is Apache?', 'Native American tribe', 'Popular open-source web server software', 'Database server', 'Mail server', 'B', 'Apache HTTP Server is one of the most widely used web server software.', 2),
(71, 'What is Nginx?', 'New graphics', 'High-performance web server and reverse proxy', 'Email client', 'FTP server', 'B', 'Nginx (engine-x) is known for performance, often used as reverse proxy and load balancer.', 3),
(71, 'What is a virtual host?', 'Virtual machine', 'Hosting multiple websites on one server', 'Cloud hosting', 'VPN host', 'B', 'Virtual hosts allow one server to serve multiple domains with different configurations.', 4),
(71, 'What does .htaccess control on Apache?', 'Hash tables', 'Directory-level configuration and access control', 'HTML access', 'HTTP acceleration', 'B', '.htaccess provides per-directory configuration for rewrites, authentication, and restrictions.', 5);

-- Lesson 72: HTTP Protocol (has 3, need 2 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(72, 'What is the difference between HTTP and HTTPS?', 'Speed', 'HTTPS encrypts communication with TLS/SSL', 'Port numbers only', 'No difference', 'B', 'HTTPS adds TLS encryption, protecting data in transit from eavesdropping.', 4),
(72, 'What HTTP method is used to submit form data?', 'GET', 'POST', 'PUT', 'HEAD', 'B', 'POST sends data in the request body, used for form submissions and creating resources.', 5);

-- Lesson 73: HTML Basics (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(73, 'What does HTML stand for?', 'Hyperlink Text Markup', 'HyperText Markup Language', 'High Tech Modern Language', 'Hypertext Machine Language', 'B', 'HTML defines the structure and content of web pages using markup tags.', 1),
(73, 'What is the DOM?', 'Document Object Model', 'Data Output Method', 'Display Order Manager', 'Document Orientation Mode', 'A', 'The DOM is a programming interface representing HTML as a tree of objects.', 2),
(73, 'Which tag contains page metadata?', '<body>', '<head>', '<html>', '<meta>', 'B', 'The <head> section contains metadata, title, stylesheets, and scripts.', 3),
(73, 'What makes HTML forms vulnerable?', 'Too many fields', 'User input sent to server without validation', 'Complex styling', 'Long loading time', 'B', 'Forms accept user input which, if not validated, can be exploited for injection attacks.', 4),
(73, 'What is HTML injection?', 'Adding CSS', 'Inserting malicious HTML that browser renders', 'Creating hyperlinks', 'Image embedding', 'B', 'HTML injection inserts attacker-controlled markup that the browser renders, potentially for phishing.', 5);

-- Lesson 74: JavaScript (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(74, 'Where does JavaScript primarily run?', 'Server only', 'Client browser (and optionally server)', 'Database', 'Operating system', 'B', 'JavaScript runs in browsers to make pages interactive; Node.js enables server-side execution.', 1),
(74, 'What is the Same-Origin Policy?', 'Copyright protection', 'Browser security preventing cross-site resource access', 'Server configuration', 'DNS policy', 'B', 'Same-Origin Policy prevents scripts from accessing data from different origins (domain/port/protocol).', 2),
(74, 'What is CORS?', 'Content Origin Resource Sharing', 'Cross-Origin Resource Sharing', 'Client Origin Request Service', 'Certificate Origin Relay System', 'B', 'CORS headers allow controlled cross-origin requests, relaxing Same-Origin Policy.', 3),
(74, 'What can malicious JavaScript do?', 'Nothing harmful', 'Steal cookies, redirect users, modify pages', 'Access system files', 'Install software', 'B', 'Malicious JS can steal session data, perform actions as the user, and modify page content.', 4),
(74, 'What is obfuscated JavaScript?', 'Encrypted JavaScript', 'Code made difficult to read/understand', 'Compressed JavaScript', 'Disabled JavaScript', 'B', 'Obfuscation transforms code to be hard to analyze while remaining functional.', 5);

-- Lesson 75: Server-Side PHP (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(75, 'Where does PHP code execute?', 'Browser', 'Web server', 'Database', 'Client machine', 'B', 'PHP is server-side; code executes on the server and only HTML output reaches the browser.', 1),
(75, 'What PHP function is vulnerable to code injection?', 'echo()', 'eval()', 'print()', 'strlen()', 'B', 'eval() executes strings as PHP code; user input in eval() enables code injection.', 2),
(75, 'What is a common PHP vulnerability?', 'Slow performance', 'File inclusion via user-controlled paths', 'Memory leaks', 'Syntax errors', 'B', 'include() and require() with user input can lead to LFI/RFI vulnerabilities.', 3),
(75, 'Why is register_globals dangerous?', 'Performance issue', 'Allows URL parameters to become variables', 'Memory problem', 'Syntax restriction', 'B', 'register_globals (deprecated) let attackers set variables via URL parameters.', 4),
(75, 'What PHP setting prevents RFI?', 'safe_mode', 'allow_url_include = Off', 'display_errors = Off', 'memory_limit', 'B', 'Disabling allow_url_include prevents PHP from including remote files.', 5);

-- Lesson 76: Cookies & Storage (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(76, 'What is localStorage vs sessionStorage?', 'Same thing', 'localStorage persists; sessionStorage clears on tab close', 'localStorage is smaller', 'sessionStorage is encrypted', 'B', 'localStorage persists across sessions; sessionStorage clears when the tab/window closes.', 3),
(76, 'What is the HttpOnly cookie flag?', 'HTTP-only protocol', 'Prevents JavaScript from accessing the cookie', 'Requires HTTP', 'Only sends over HTTP', 'B', 'HttpOnly cookies cant be read by JavaScript, protecting against XSS cookie theft.', 4),
(76, 'What is the Secure cookie flag?', 'Encrypted cookie', 'Only send cookie over HTTPS', 'Password protected', 'Signed cookie', 'B', 'Secure flag ensures cookies are only transmitted over encrypted HTTPS connections.', 5);
