-- Quiz Questions Batch 2: Buffer Overflow, Exploits, Social Engineering, Privilege Escalation
-- Adding questions to reach minimum of 5 per lesson

USE securitylab;

-- Lesson 18: Buffer Overflow Exploitation (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(18, 'What is the goal of overwriting the return address?', 'Crash the program', 'Redirect execution to attacker code', 'Free memory', 'Change variable values', 'B', 'Overwriting the return address redirects program flow to shellcode or other attacker-controlled locations.', 1),
(18, 'What is a NOP sled?', 'A debugging technique', 'Series of no-operation instructions before shellcode', 'Network packet', 'Memory allocation method', 'B', 'NOP sleds provide a landing zone of harmless instructions, increasing the chance of hitting shellcode.', 2),
(18, 'What tool helps find buffer overflow offsets?', 'Wireshark', 'pattern_create from Metasploit', 'Nmap', 'Burp Suite', 'B', 'pattern_create generates unique patterns to identify exact offsets when overwriting the return address.', 3),
(18, 'What is EIP in x86 architecture?', 'Extended Input Pointer', 'Instruction Pointer register', 'Error Indicator Protocol', 'Encrypted IP address', 'B', 'EIP (Extended Instruction Pointer) holds the address of the next instruction to execute.', 4),
(18, 'Which function is vulnerable to buffer overflow?', 'fgets() with size limit', 'strcpy() without bounds check', 'strncpy() with size', 'snprintf()', 'B', 'strcpy() copies without checking bounds, allowing overflow. Use strncpy() or strlcpy() instead.', 5);

-- Lesson 19: Buffer Overflow Mitigations (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(19, 'What does ASLR stand for?', 'Advanced Secure Layer Routing', 'Address Space Layout Randomization', 'Automated Security Log Review', 'Application Stack Limit Restriction', 'B', 'ASLR randomizes memory addresses, making it harder to predict where code/data is located.', 1),
(19, 'What is DEP/NX?', 'Data Execution Prevention', 'Dynamic Entry Point', 'Debug Exception Protocol', 'Direct Execute Permission', 'A', 'DEP (Data Execution Prevention) / NX (No-Execute) prevents code execution in data regions.', 2),
(19, 'What are stack canaries?', 'Security personnel', 'Random values placed before return addresses', 'Network monitoring tools', 'Log analysis software', 'B', 'Stack canaries are random values that get checked before function returns; corruption indicates overflow.', 3),
(19, 'Which compiler flag enables stack protection?', '-O2', '-fstack-protector', '-Wall', '-static', 'B', 'The -fstack-protector flag adds stack canary checks to functions with vulnerable buffers.', 4),
(19, 'What technique bypasses ASLR?', 'Using larger shellcode', 'Information disclosure to leak addresses', 'Running as root', 'Disabling firewall', 'B', 'Leaking memory addresses through info disclosure vulnerabilities defeats ASLR randomization.', 5);

-- Lesson 20: Format String Attacks (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(20, 'What causes format string vulnerabilities?', 'Using user input directly as format string', 'Buffer overflow', 'SQL injection', 'XSS', 'A', 'Passing user input directly to printf() family functions allows format specifier attacks.', 1),
(20, 'Which format specifier reads from the stack?', '%s', '%d', '%x', '%f', 'C', '%x reads and displays values from the stack in hexadecimal, revealing memory contents.', 2),
(20, 'Which specifier can write to memory?', '%s', '%n', '%x', '%d', 'B', '%n writes the number of bytes printed so far to an address, enabling arbitrary memory writes.', 3),
(20, 'What is the safe way to print user strings?', 'printf(userInput)', 'printf("%s", userInput)', 'print(userInput)', 'echo userInput', 'B', 'Using printf("%s", userInput) treats input as data, not as a format string.', 4),
(20, 'What can format string attacks achieve?', 'Only crash the program', 'Read memory, write memory, and execute code', 'Only read files', 'Only modify logs', 'B', 'Format strings can read stack/memory (%x), write arbitrary values (%n), and achieve code execution.', 5);

-- Lesson 21: Exploiting Services (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(21, 'What is the default FTP port?', '22', '21', '23', '25', 'B', 'FTP uses port 21 for control connections and port 20 for data transfer.', 1),
(21, 'What is anonymous FTP?', 'Encrypted FTP', 'FTP allowing login without credentials', 'Private FTP server', 'FTP over SSH', 'B', 'Anonymous FTP allows anyone to connect using "anonymous" as username, often with email as password.', 2),
(21, 'Which tool exploits known service vulnerabilities?', 'Nmap', 'Metasploit Framework', 'Wireshark', 'Netcat', 'B', 'Metasploit provides exploit modules for many known service vulnerabilities with payload options.', 3),
(21, 'What should you check before exploiting a service?', 'Time of day', 'Service version for known vulnerabilities', 'Server location', 'Admin email', 'B', 'Version fingerprinting identifies specific vulnerabilities and compatible exploits for the target.', 4),
(21, 'What is banner grabbing?', 'Stealing website banners', 'Identifying service versions from connection responses', 'DDoS attack type', 'Social engineering', 'B', 'Banner grabbing extracts version information from service welcome messages for vulnerability identification.', 5);

-- Lesson 22: Metasploit (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(22, 'What is the Metasploit console command?', 'metasploit', 'msfconsole', 'msf', 'sploit', 'B', 'msfconsole is the primary interface for interacting with the Metasploit Framework.', 3),
(22, 'What is a Metasploit payload?', 'The exploit code', 'Code that runs after successful exploitation', 'Target IP address', 'Vulnerability scanner', 'B', 'Payloads are code delivered and executed on the target after an exploit succeeds.', 4),
(22, 'What is Meterpreter?', 'A text editor', 'Advanced Metasploit payload with extensive features', 'Network scanner', 'Password cracker', 'B', 'Meterpreter is an advanced payload providing shell access, file operations, pivoting, and more.', 5);

-- Lesson 23: Patch Cycles (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(23, 'What is Patch Tuesday?', 'Any Tuesday patches are released', 'Microsofts monthly security update release day', 'Weekly patch schedule', 'Emergency patch day', 'B', 'Patch Tuesday is the second Tuesday of each month when Microsoft releases security updates.', 1),
(23, 'What does EOL/EOS mean for software?', 'Efficient Online Licensing', 'End of Life/End of Support', 'Extended Operating License', 'Enterprise Operating Level', 'B', 'EOL/EOS means the vendor no longer provides security patches, making the software risky to use.', 2),
(23, 'Why is timely patching important?', 'Improves performance', 'Exploits are often released after patches reveal vulnerabilities', 'Reduces storage', 'Saves electricity', 'B', 'Patches reveal vulnerability details; attackers reverse-engineer patches to create exploits.', 3),
(23, 'What is a zero-day window?', 'Time to develop patches', 'Time between vulnerability discovery and patch release', 'System boot time', 'Maintenance window', 'B', 'The zero-day window is the dangerous period when vulnerabilities exist but no patch is available.', 4),
(23, 'What helps when patches cant be applied immediately?', 'Ignoring the issue', 'Compensating controls and mitigations', 'Removing the software', 'Paying ransom', 'B', 'Compensating controls like firewall rules or disabling features reduce risk until patching is possible.', 5);

-- Lesson 24: Social Engineering (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(24, 'What is social engineering?', 'Software engineering', 'Manipulating people to divulge information', 'Network engineering', 'Building social networks', 'B', 'Social engineering exploits human psychology rather than technical vulnerabilities.', 1),
(24, 'What is pretexting?', 'Writing code', 'Creating a fabricated scenario to gain trust', 'Network scanning', 'Email filtering', 'B', 'Pretexting creates a believable story or identity to manipulate targets into cooperation.', 2),
(24, 'What is tailgating in security?', 'Network attack', 'Following authorized person through secure entrance', 'Email spam', 'Password attack', 'B', 'Tailgating/piggybacking bypasses physical access controls by following authorized personnel.', 3),
(24, 'Which principle do social engineers exploit?', 'Least privilege', 'Authority, urgency, and trust', 'Defense in depth', 'Network segmentation', 'B', 'Social engineers leverage authority figures, time pressure, and established trust to manipulate victims.', 4),
(24, 'Best defense against social engineering?', 'Firewalls', 'Security awareness training', 'Antivirus', 'Encryption', 'B', 'Training employees to recognize manipulation tactics is the primary defense against social engineering.', 5);

-- Lesson 25: Phishing (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(25, 'What is spear phishing?', 'Phishing with attachments', 'Targeted phishing for specific individuals/organizations', 'Automated phishing', 'Phone-based phishing', 'B', 'Spear phishing customizes attacks for specific targets using researched personal information.', 3),
(25, 'What is a watering hole attack?', 'DDoS attack', 'Compromising websites frequently visited by targets', 'SQL injection', 'Password spray', 'B', 'Watering hole attacks infect websites the target group commonly visits, waiting for victims.', 4),
(25, 'What indicates a phishing email?', 'Comes from known contact', 'Urgent requests, suspicious links, generic greetings', 'Has company logo', 'Proper grammar', 'B', 'Phishing often uses urgency, generic greetings, and slightly misspelled domains.', 5);

-- Lesson 26: Credential Harvesting (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(26, 'What is credential harvesting?', 'Growing plants', 'Collecting usernames and passwords through deception', 'Password management', 'User registration', 'B', 'Credential harvesting tricks users into entering credentials on fake login pages.', 1),
(26, 'What is CEO fraud?', 'CEO committing fraud', 'Impersonating executives to authorize transfers', 'Auditing CEOs', 'CEO training', 'B', 'CEO fraud/BEC impersonates executives via email to trick employees into wire transfers.', 2),
(26, 'What tool creates phishing pages?', 'Photoshop', 'SET (Social Engineering Toolkit)', 'Wireshark', 'Nmap', 'B', 'SET automates creation of cloned websites and credential harvesting pages.', 3),
(26, 'How do attackers make fake domains convincing?', 'Using IP addresses', 'Typosquatting and homograph attacks', 'Random strings', 'Numeric domains', 'B', 'Typosquatting uses misspellings; homograph attacks use similar-looking Unicode characters.', 4),
(26, 'What is vishing?', 'Video phishing', 'Voice/phone-based phishing', 'Virtual phishing', 'Virus phishing', 'B', 'Vishing uses phone calls to manipulate victims into revealing sensitive information.', 5);

-- Lesson 27: PrivEsc Intro (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(27, 'What is privilege escalation?', 'Getting admin access legally', 'Gaining higher access than initially authorized', 'Resetting passwords', 'Creating new accounts', 'B', 'Privilege escalation exploits vulnerabilities to gain elevated permissions beyond authorized level.', 3),
(27, 'What are the two types of privilege escalation?', 'Fast and slow', 'Vertical and horizontal', 'Internal and external', 'Active and passive', 'B', 'Vertical escalation gains higher privileges; horizontal accesses other users at the same level.', 4),
(27, 'What is the first step in privilege escalation?', 'Exploit immediately', 'Enumerate the system for weaknesses', 'Delete logs', 'Create backdoor', 'B', 'Enumeration discovers misconfigurations, vulnerable services, and escalation paths.', 5);

-- Lesson 28: PrivEsc Services (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(28, 'What makes a service vulnerable to privilege escalation?', 'Running on default port', 'Running with elevated privileges and exploitable flaws', 'Having a web interface', 'Using encryption', 'B', 'Services running as root/SYSTEM with vulnerabilities allow escalation when exploited.', 1),
(28, 'What is kernel exploitation?', 'Optimizing kernel', 'Exploiting OS kernel vulnerabilities for root access', 'Kernel debugging', 'Installing kernel', 'B', 'Kernel exploits target the OS core, immediately granting highest privileges when successful.', 2),
(28, 'What tool enumerates Linux privilege escalation vectors?', 'Nmap', 'LinPEAS', 'Burp Suite', 'Wireshark', 'B', 'LinPEAS (Linux Privilege Escalation Awesome Script) automates enumeration of escalation paths.', 3),
(28, 'What is DirtyCOW?', 'Malware name', 'Famous Linux kernel privilege escalation exploit', 'Network protocol', 'Encryption algorithm', 'B', 'DirtyCOW (CVE-2016-5195) exploited a race condition in Linux kernel for privilege escalation.', 4),
(28, 'Why check running services for privesc?', 'To stop them', 'Vulnerable services may run as root', 'To monitor traffic', 'For performance', 'B', 'Services running as root with known vulnerabilities provide direct paths to elevated privileges.', 5);

-- Lesson 29: PrivEsc SUID (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(29, 'What does SUID permission do?', 'Sets user ID', 'Executes file with owners permissions', 'Encrypts file', 'Compresses file', 'B', 'SUID (Set User ID) runs the executable with the file owners permissions, often root.', 3),
(29, 'How do you find SUID files on Linux?', 'ls -la /', 'find / -perm -4000', 'grep suid', 'cat /etc/suid', 'B', 'find / -perm -4000 searches for files with the SUID bit set (4000 in octal).', 4),
(29, 'What is sudo misconfiguration?', 'Wrong sudo version', 'Overly permissive sudoers entries', 'Sudo not installed', 'Sudo too slow', 'B', 'Allowing users to run certain commands as root without password can enable escalation.', 5);

-- Lesson 30: PrivEsc Windows (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(30, 'What is the highest privilege on Windows?', 'Administrator', 'SYSTEM', 'Root', 'Power User', 'B', 'SYSTEM has even higher privileges than Administrator, with full control over the OS.', 3),
(30, 'What Windows tool enumerates privesc vectors?', 'Task Manager', 'WinPEAS', 'Windows Defender', 'Event Viewer', 'B', 'WinPEAS automates discovery of Windows privilege escalation opportunities.', 4),
(30, 'What is token impersonation?', 'Copying passwords', 'Stealing and using another users access token', 'Creating fake tokens', 'Token encryption', 'B', 'Token impersonation uses captured access tokens to act as another user, often SYSTEM.', 5);

-- Lesson 31: PrivEsc Paths Registry (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(31, 'What is an unquoted service path vulnerability?', 'Missing file path', 'Service path without quotes allowing hijack', 'Broken registry', 'Missing service', 'B', 'Unquoted paths with spaces let attackers place executables in parent directories to hijack execution.', 1),
(31, 'Where are Windows services configured?', 'System32', 'Registry under HKLM\\SYSTEM\\CurrentControlSet\\Services', 'Program Files', 'User folder', 'B', 'Service configurations including paths are stored in the Windows Registry.', 2),
(31, 'What registry key can auto-run programs?', 'HKLM\\SOFTWARE\\AutoRun', 'HKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run', 'HKLM\\RUN', 'HKLM\\STARTUP', 'B', 'The Run and RunOnce registry keys execute programs at user login, useful for persistence.', 3),
(31, 'How do you find unquoted service paths?', 'services.msc', 'wmic service get name,pathname | findstr /i /v "\"', 'regedit search', 'PowerShell Get-Service', 'B', 'WMIC queries service paths; filtering those without quotes reveals vulnerable configurations.', 4),
(31, 'What is DLL hijacking?', 'Stealing DLL files', 'Placing malicious DLL where application searches first', 'DLL encryption', 'DLL compression', 'B', 'DLL hijacking exploits search order to load attacker DLLs instead of legitimate ones.', 5);

-- Lesson 32: PrivEsc Weak Permissions (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(32, 'What is AlwaysInstallElevated?', 'Windows Update setting', 'Policy allowing any MSI to install with SYSTEM privileges', 'Antivirus feature', 'UAC bypass', 'B', 'AlwaysInstallElevated lets users run MSI packages with elevated privileges, enabling privesc.', 1),
(32, 'What tool checks Windows folder permissions?', 'dir', 'icacls or accesschk', 'attrib', 'cacls only', 'B', 'icacls and Sysinternals accesschk reveal detailed file and folder permission information.', 2),
(32, 'What permission on service binaries enables privesc?', 'Read', 'Write or Full Control', 'Execute', 'List', 'B', 'Write access to service executables allows replacing them with malicious versions.', 3),
(32, 'What is stored credentials escalation?', 'Password manager hack', 'Finding saved passwords in files or registry', 'Credential stuffing', 'Brute force', 'B', 'Credentials stored in scripts, config files, or registry can provide escalation paths.', 4),
(32, 'Why check scheduled tasks for privesc?', 'To disable them', 'Tasks may run as SYSTEM with writable scripts', 'For timing attacks', 'To add new tasks', 'B', 'Scheduled tasks running elevated with modifiable scripts or binaries enable privilege escalation.', 5);
