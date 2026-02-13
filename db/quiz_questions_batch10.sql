-- Quiz Questions for Course 9 (continued) and Course 10
-- Lessons 189-226

USE securitylab;

-- Course 9, Level 38: File System Forensics (Lessons 189-196)

-- Lesson 189: File System Forensics Intro
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(189, 'What is file system forensics?', 'Organizing files', 'Analyzing file systems to recover and examine evidence', 'Creating file systems', 'Deleting file systems', 'B', 'File system forensics examines storage for evidence.'),
(189, 'What file systems are common on Windows?', 'ext4', 'NTFS and FAT32', 'HFS+', 'APFS', 'B', 'Windows primarily uses NTFS and FAT file systems.'),
(189, 'What is file system metadata?', 'File contents', 'Data about files like timestamps, permissions, size', 'Encrypted data', 'Backup data', 'B', 'Metadata describes file attributes without revealing content.'),
(189, 'What is slack space?', 'Unused disk space', 'Space between file end and cluster end that may contain data', 'Backup space', 'Cache space', 'B', 'Slack space may contain remnants of previous data.'),
(189, 'What is unallocated space?', 'Used disk space', 'Disk space not assigned to any file', 'Encrypted space', 'System space', 'B', 'Unallocated space may contain deleted file data.');

-- Lesson 190: File System Analysis
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(190, 'What is the MFT in NTFS?', 'Main File Table', 'Master File Table - database of all files and metadata', 'Memory File Transfer', 'Management File Tool', 'B', 'The MFT contains records for every file and directory.'),
(190, 'What are MACB times?', 'A type of timestamp', 'Modified, Accessed, Changed, Born timestamps', 'A forensic technique', 'A file format', 'B', 'MACB times track file timeline events.'),
(190, 'What is a file signature?', 'A digital signature', 'Magic bytes identifying file type regardless of extension', 'A files name', 'An encrypted file', 'B', 'File signatures identify true file types by header bytes.'),
(190, 'What is file carving?', 'Sculpting files', 'Recovering files from raw data based on signatures', 'Deleting files', 'Encrypting files', 'B', 'Carving extracts files from unstructured data.'),
(190, 'Why might file extensions be misleading?', 'They are always accurate', 'Extensions can be changed but file content remains', 'Extensions affect content', 'Extensions are encrypted', 'B', 'Changing extensions doesnt change the actual file type.');

-- Lesson 191: Disk Capture
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(191, 'What is a disk image in forensics?', 'A photo of a disk', 'A bit-by-bit copy of all disk contents', 'A compressed backup', 'A disk label', 'B', 'Disk images preserve complete disk contents including deleted data.'),
(191, 'What format is common for forensic images?', 'JPEG', 'E01 (EnCase) or dd (raw)', 'MP3', 'PDF', 'B', 'E01 and raw (dd) are standard forensic image formats.'),
(191, 'What is dd used for?', 'Double delete', 'Creating raw bit-by-bit copies of disks', 'Disk defragmentation', 'Disk diagnostics', 'B', 'dd creates raw copies of storage devices.'),
(191, 'What is FTK Imager?', 'An image viewer', 'A forensic imaging and preview tool', 'A photo editor', 'A backup tool', 'B', 'FTK Imager creates forensic images and previews evidence.'),
(191, 'Why image the entire disk rather than just copying files?', 'Its faster', 'To capture deleted data, slack space, and hidden areas', 'Its easier', 'Files are enough', 'B', 'Full images capture evidence not visible to the file system.');

-- Lesson 192: Deleted File Recovery
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(192, 'What happens when a file is deleted?', 'Data is immediately erased', 'The pointer is removed but data often remains', 'File is encrypted', 'Disk is reformatted', 'B', 'Deletion typically removes references, not actual data.'),
(192, 'What affects deleted file recovery success?', 'Nothing', 'Whether the space has been overwritten with new data', 'File size only', 'File type only', 'B', 'Overwritten data cannot be recovered.'),
(192, 'What is the Recycle Bin?', 'Garbage disposal', 'Windows holding area for deleted files before permanent deletion', 'A backup folder', 'System folder', 'B', 'The Recycle Bin temporarily stores deleted files.'),
(192, 'What tool can recover deleted files?', 'Calculator', 'Recuva, PhotoRec, or Autopsy', 'Notepad', 'Paint', 'B', 'Various forensic tools can recover deleted files.'),
(192, 'What is secure deletion?', 'Normal deletion', 'Overwriting data to prevent recovery', 'Faster deletion', 'Network deletion', 'B', 'Secure deletion overwrites data making recovery difficult.');

-- Lesson 193: Email Forensics
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(193, 'What email artifacts can be examined?', 'Only text', 'Messages, attachments, headers, and metadata', 'Only subjects', 'Only addresses', 'B', 'Email forensics examines all email components.'),
(193, 'What information is in email headers?', 'Just the subject', 'Routing information, timestamps, server IPs', 'Only recipient', 'Only sender', 'B', 'Headers contain detailed routing and timing information.'),
(193, 'What is a PST file?', 'A database file', 'Personal Storage Table - Outlook data file', 'A picture file', 'A text file', 'B', 'PST files store Outlook emails, contacts, and calendar.'),
(193, 'Can deleted emails be recovered?', 'Never', 'Often yes, depending on how they were deleted', 'Only on servers', 'Only in cloud', 'B', 'Deleted emails may exist in backups or unallocated space.'),
(193, 'What is email spoofing evidence?', 'Original email', 'Mismatched header information indicating forgery', 'Encrypted email', 'Compressed email', 'B', 'Header inconsistencies can reveal spoofed emails.');

-- Lesson 194: Windows Registry
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(194, 'What is the Windows Registry?', 'A log file', 'A hierarchical database of Windows settings and information', 'A user list', 'A file manager', 'B', 'The registry stores system and application configuration.'),
(194, 'What forensic value does the registry have?', 'None', 'User activity, installed programs, USB history', 'Only settings', 'Only passwords', 'B', 'The registry contains extensive forensic artifacts.'),
(194, 'What is the SAM registry hive?', 'A backup hive', 'Security Account Manager - stores user accounts', 'A system hive', 'A network hive', 'B', 'SAM contains local user account information.'),
(194, 'What can USB device history reveal?', 'Nothing useful', 'Serial numbers and connection times of USB devices', 'Only current devices', 'Only storage devices', 'B', 'USB history shows what devices were connected and when.'),
(194, 'What tool examines registry hives?', 'Notepad', 'Registry Explorer or RegRipper', 'Calculator', 'Paint', 'B', 'Specialized tools parse and analyze registry data.');

-- Lesson 195: Forensic Tools
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(195, 'What is EnCase?', 'A computer case', 'A commercial forensic analysis suite', 'A backup tool', 'An operating system', 'B', 'EnCase is a widely-used commercial forensics tool.'),
(195, 'What is Autopsy?', 'A medical exam', 'An open-source digital forensics platform', 'A disk cleaner', 'An antivirus', 'B', 'Autopsy is the leading open-source forensics tool.'),
(195, 'What does The Sleuth Kit provide?', 'Investigation tips', 'Command-line forensic analysis tools', 'Sleep tracking', 'Security monitoring', 'B', 'TSK provides CLI tools for forensic analysis.'),
(195, 'What is bulk_extractor?', 'A data extractor', 'A tool that extracts features like emails and URLs from disk images', 'A file compressor', 'A disk cleaner', 'B', 'bulk_extractor scans disk images for specific data types.'),
(195, 'What is exiftool used for?', 'Exercise tracking', 'Reading and writing file metadata', 'File encryption', 'File compression', 'B', 'exiftool extracts metadata from many file types.');

-- Lesson 196: Anti-Forensics
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(196, 'What is anti-forensics?', 'Against forensics research', 'Techniques to hinder forensic investigation', 'Forensic prevention', 'A forensic tool', 'B', 'Anti-forensics attempts to prevent or complicate investigations.'),
(196, 'What is data wiping?', 'Cleaning screens', 'Securely overwriting data to prevent recovery', 'Moving data', 'Compressing data', 'B', 'Wiping overwrites data to make recovery impossible.'),
(196, 'What is timestomping?', 'Time travel', 'Modifying file timestamps to mislead investigators', 'Creating timestamps', 'Recording time', 'B', 'Timestomping alters timestamps to hide activity timing.'),
(196, 'How does encryption affect forensics?', 'No effect', 'Encrypted data cannot be read without the key', 'Makes forensics easier', 'Deletes evidence', 'B', 'Encryption blocks access to data without proper keys.'),
(196, 'What is log tampering?', 'A music style', 'Modifying or deleting log entries to hide evidence', 'Creating logs', 'Backing up logs', 'B', 'Log tampering removes or alters evidence of activities.');

-- Course 9, Level 39: Memory Forensics (Lessons 197-203)

-- Lesson 197: Memory Forensics Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(197, 'What is memory forensics?', 'Testing computer memory', 'Analyzing RAM to find running processes, malware, and data', 'Memory optimization', 'Memory backup', 'B', 'Memory forensics examines volatile RAM for evidence.'),
(197, 'Why is RAM forensically valuable?', 'It stores files permanently', 'It contains running processes, decrypted data, and malware', 'It stores boot information', 'It stores BIOS settings', 'B', 'RAM contains live system state and decrypted data.'),
(197, 'What happens to RAM when power is lost?', 'Data is preserved', 'Data is lost - RAM is volatile', 'Data is encrypted', 'Data is compressed', 'B', 'RAM contents are lost when power is removed.'),
(197, 'When should memory be captured?', 'After shutting down', 'While the system is running before shutdown', 'After reboot', 'Only during incidents', 'B', 'Memory must be captured while the system is running.'),
(197, 'What is live forensics?', 'Forensics on TV', 'Examining a system while it is still running', 'Fast forensics', 'Video forensics', 'B', 'Live forensics analyzes running systems.');

-- Lesson 198: Memory Analysis
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(198, 'What can be found in memory dumps?', 'Only system files', 'Running processes, passwords, network connections', 'Only logged data', 'Only applications', 'B', 'Memory contains extensive runtime information.'),
(198, 'What is a process in memory?', 'A factory process', 'A running program with its code and data', 'A deleted file', 'A backup', 'B', 'Processes are running programs with associated memory.'),
(198, 'Can passwords be found in memory?', 'Never', 'Yes, passwords may exist in clear text in RAM', 'Only encrypted', 'Only hashed', 'B', 'Decrypted passwords often exist in memory.'),
(198, 'What are DLLs in memory analysis?', 'Download links', 'Dynamic Link Libraries loaded by processes', 'Deleted files', 'Disk locations', 'B', 'DLLs are shared libraries loaded into process memory.'),
(198, 'What is process injection?', 'Adding processes', 'Malware technique of inserting code into other processes', 'Starting processes', 'Killing processes', 'B', 'Process injection hides malicious code in legitimate processes.');

-- Lesson 199: Memory Captures
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(199, 'What tools capture memory?', 'Screenshot tools', 'FTK Imager, WinPmem, or DumpIt', 'Video capture', 'Audio capture', 'B', 'Specialized tools create RAM dumps.'),
(199, 'What is a memory dump file?', 'A corrupted file', 'A file containing the contents of RAM', 'An error log', 'A crash report only', 'B', 'Memory dumps are files containing RAM contents.'),
(199, 'What is pagefile.sys?', 'A system page', 'Virtual memory file that may contain RAM data', 'A configuration file', 'A log file', 'B', 'The pagefile stores RAM overflow and may contain evidence.'),
(199, 'What is hibernation file (hiberfil.sys)?', 'A sleep log', 'A file containing RAM contents from hibernation', 'A boot file', 'A backup file', 'B', 'Hiberfil stores RAM when the system hibernates.'),
(199, 'Why minimize system activity during capture?', 'To save power', 'To prevent evidence from being overwritten in memory', 'For faster capture', 'Its not necessary', 'B', 'Activity can overwrite valuable memory contents.');

-- Lesson 200: Volatility Framework
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(200, 'What is Volatility?', 'Chemical volatility', 'An open-source memory forensics framework', 'A type of malware', 'A backup tool', 'B', 'Volatility is the leading memory analysis framework.'),
(200, 'What does the pslist plugin show?', 'List of files', 'List of running processes', 'Network connections', 'User accounts', 'B', 'pslist displays processes from the process list.'),
(200, 'What does psscan do differently than pslist?', 'Nothing different', 'Scans for process structures even if hidden', 'Faster scanning', 'Only shows active', 'B', 'psscan can find hidden or terminated processes.'),
(200, 'What plugin shows network connections?', 'netstat', 'netscan or connections', 'netlist', 'networkinfo', 'B', 'netscan/connections show network connection details.'),
(200, 'What is a Volatility profile?', 'A user profile', 'Configuration for specific OS version analysis', 'A memory profile', 'A security setting', 'B', 'Profiles configure Volatility for specific operating systems.');

-- Lesson 201: Network Forensics
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(201, 'What is network forensics?', 'Fixing networks', 'Monitoring and analyzing network traffic for evidence', 'Network design', 'Network security only', 'B', 'Network forensics captures and analyzes network traffic.'),
(201, 'What is packet capture?', 'Capturing Pokemon', 'Recording network traffic for analysis', 'Blocking packets', 'Sending packets', 'B', 'Packet capture records network communications.'),
(201, 'What is a PCAP file?', 'A compressed file', 'Packet Capture file containing network traffic', 'A picture file', 'A program file', 'B', 'PCAP files store captured network traffic.'),
(201, 'What can network captures reveal?', 'Only IP addresses', 'Communication content, protocols, timing, participants', 'Only timestamps', 'Only file names', 'B', 'Captures provide comprehensive communication details.'),
(201, 'Why is network forensics challenging?', 'Its too easy', 'Large data volumes and encryption', 'Lack of tools', 'No standards exist', 'B', 'Volume and encryption complicate network analysis.');

-- Lesson 202: Wireshark & Tcpdump
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(202, 'What is Wireshark?', 'A fish finder', 'A GUI network protocol analyzer', 'A web browser', 'An antivirus', 'B', 'Wireshark is a graphical tool for analyzing network traffic.'),
(202, 'What is tcpdump?', 'A garbage dump', 'A command-line packet analyzer', 'A backup tool', 'A network test', 'B', 'tcpdump captures and displays packets from command line.'),
(202, 'What are Wireshark filters used for?', 'Filtering water', 'Narrowing down displayed packets', 'Blocking traffic', 'Encrypting data', 'B', 'Filters help find specific traffic in large captures.'),
(202, 'What does Follow TCP Stream show?', 'Stream locations', 'Reconstructed conversation between two endpoints', 'TCP settings', 'Stream errors', 'B', 'Follow stream reconstructs the full conversation.'),
(202, 'What is protocol dissection?', 'Cutting protocols', 'Breaking down and displaying protocol details', 'Creating protocols', 'Encrypting protocols', 'B', 'Dissection parses and displays protocol structure.');

-- Lesson 203: PCAP Analysis
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(203, 'What should you look for in suspicious PCAP?', 'Nothing specific', 'Unusual ports, unknown IPs, data exfiltration patterns', 'Only errors', 'Only HTTP', 'B', 'Anomalies and suspicious patterns indicate malicious activity.'),
(203, 'What is a beacon in network analysis?', 'A lighthouse', 'Regular check-in traffic from malware to C2', 'A network signal', 'A DNS query', 'B', 'Beacons are periodic malware communications with command servers.'),
(203, 'What can DNS queries in PCAP reveal?', 'Nothing useful', 'Domains accessed, potential C2, DNS tunneling', 'Only IP addresses', 'Only timestamps', 'B', 'DNS traffic shows what domains were queried.'),
(203, 'How can you extract files from PCAP?', 'You cannot', 'Using Wiresharks Export Objects or NetworkMiner', 'By renaming the file', 'By compressing it', 'B', 'Files transferred over the network can be extracted.'),
(203, 'What is traffic baseline?', 'The bottom of traffic', 'Normal traffic patterns to compare against anomalies', 'Maximum traffic', 'Minimum traffic', 'B', 'Baselines help identify abnormal traffic patterns.');

-- Course 10: Network Infiltration (Lessons 204-226)
-- Level 40: Persistence (Lessons 204-210)

-- Lesson 204: Persistence Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(204, 'What is persistence in the context of hacking?', 'Never giving up on a target', 'Techniques to maintain access to a compromised system after reboot', 'Writing persistent code', 'Storing data permanently', 'B', 'Persistence mechanisms ensure attackers maintain access even after the system restarts.'),
(204, 'Which Windows location is commonly used for persistence?', 'C:\\Games', 'Registry Run keys and Startup folder', 'C:\\Windows\\Fonts', 'Desktop background', 'B', 'Registry Run keys and Startup folders are common locations for persistence mechanisms.'),
(204, 'What is a rootkit?', 'A gardening tool', 'Malware that hides its presence and provides continued privileged access', 'A root password', 'A Linux installation CD', 'B', 'Rootkits are malware designed to hide from detection while maintaining elevated system access.'),
(204, 'What is a scheduled task persistence technique?', 'Planning when to hack', 'Creating automated tasks that run malicious code at specified times', 'Scheduling system updates', 'Task management software', 'B', 'Attackers create scheduled tasks to execute malicious code automatically.'),
(204, 'What are YARA rules used for?', 'Grammar checking', 'Pattern matching to identify and classify malware', 'Password generation', 'Network routing', 'B', 'YARA rules define patterns to identify malware and other threats.');

-- Lesson 205: Persistence Mechanisms
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(205, 'What is a Run key in Windows?', 'A physical key', 'A registry key that executes programs at login', 'A keyboard shortcut', 'An encryption key', 'B', 'Run keys automatically execute specified programs at user logon.'),
(205, 'What is a Windows service for persistence?', 'Customer service', 'A program that runs in the background regardless of user login', 'A help desk', 'A subscription', 'B', 'Services run independently of user sessions.'),
(205, 'What is WMI persistence?', 'A warranty', 'Using Windows Management Instrumentation for automatic execution', 'A monitoring tool', 'A backup method', 'B', 'WMI subscriptions can trigger code execution.'),
(205, 'What is DLL search order hijacking?', 'Rearranging DLLs', 'Placing malicious DLLs where applications will load them', 'Searching for DLLs', 'Deleting DLLs', 'B', 'Hijacking exploits how Windows searches for DLLs.'),
(205, 'What is COM hijacking?', 'A communication attack', 'Redirecting COM object lookups to malicious code', 'Hijacking radios', 'A network attack', 'B', 'COM hijacking modifies registry to load malicious objects.');

-- Lesson 206: Startup Items
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(206, 'Where is the Windows Startup folder?', 'C:\\Startup', 'Shell:startup or %APPDATA%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup', 'C:\\Windows\\Startup', 'Desktop', 'B', 'The Startup folder runs programs when users log in.'),
(206, 'What is autorun.inf?', 'An automatic backup', 'A file that specifies what runs when removable media is inserted', 'A system file', 'An antivirus file', 'B', 'autorun.inf historically allowed automatic execution from USB/CD.'),
(206, 'What is the Logon script persistence?', 'A login page', 'Scripts configured to run at user logon via Group Policy', 'A password script', 'A logout script', 'B', 'Logon scripts execute when users authenticate.'),
(206, 'How do you view startup programs in Windows?', 'Control Panel only', 'Task Manager Startup tab or msconfig', 'Only in registry', 'System Properties', 'B', 'Task Manager shows startup programs affecting boot time.'),
(206, 'What is boot persistence?', 'Persistent boots', 'Malware that survives OS reinstallation by modifying boot process', 'Fast booting', 'Boot configuration', 'B', 'Boot-level persistence survives even OS reinstallation.');

-- Lesson 207: Shortcut Hijacking
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(207, 'What is a Windows shortcut (.lnk)?', 'A brief document', 'A file that points to another file or program', 'A compressed file', 'A text file', 'B', 'Shortcuts are pointers to executables with their own properties.'),
(207, 'How can shortcuts be used maliciously?', 'They cannot', 'By modifying the target to run malicious code', 'By changing the icon', 'By renaming them', 'B', 'Modified shortcut targets can run malware.'),
(207, 'What makes shortcut attacks effective?', 'Shortcuts are hidden', 'Users trust familiar shortcuts and dont inspect targets', 'Shortcuts run faster', 'Shortcuts bypass antivirus', 'B', 'Users typically trust shortcuts without verifying targets.'),
(207, 'What information does a shortcut contain?', 'Only the target path', 'Target path, arguments, working directory, icon', 'Only the name', 'Only timestamps', 'B', 'Shortcuts contain multiple configurable properties.'),
(207, 'How can you view shortcut properties?', 'Double-click it', 'Right-click and select Properties', 'Open in Notepad', 'Use Command Prompt', 'B', 'Right-click Properties shows shortcut configuration.');

-- Lesson 208: Rootkits
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(208, 'What level can rootkits operate at?', 'Only user level', 'User level, kernel level, or even firmware level', 'Only kernel level', 'Only network level', 'B', 'Rootkits can exist at various system levels.'),
(208, 'What is a kernel rootkit?', 'A kernel of corn', 'Malware that modifies the operating system kernel', 'A type of popcorn', 'A user program', 'B', 'Kernel rootkits modify core OS components for deep hiding.'),
(208, 'How do rootkits hide processes?', 'They delete them', 'By modifying OS functions that list processes', 'By renaming them', 'They dont hide', 'B', 'Rootkits intercept and modify system information calls.'),
(208, 'What is a bootkit?', 'A boot for kits', 'A rootkit that infects the boot process', 'A startup program', 'An antivirus', 'B', 'Bootkits load before the OS for maximum persistence.'),
(208, 'Why are rootkits difficult to detect?', 'They are visible', 'They hide from the OS and security tools', 'They are encrypted', 'They move constantly', 'B', 'Rootkits modify the systems view of itself.');

-- Lesson 209: Office Persistence
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(209, 'What are Office macros?', 'Large documents', 'Scripts that automate tasks in Office applications', 'Office buildings', 'Print settings', 'B', 'Macros are programmable scripts in Office documents.'),
(209, 'How can macros be used for persistence?', 'By saving documents', 'By creating macros that run when documents open', 'By formatting text', 'Macros cannot persist', 'B', 'Auto-run macros execute when documents are opened.'),
(209, 'What is the Normal.dotm template?', 'A normal template', 'Word template that loads with every new document', 'A backup file', 'A print template', 'B', 'Normal.dotm loads automatically, making it a persistence target.'),
(209, 'What are Office add-ins?', 'Additional offices', 'Extensions that add functionality to Office applications', 'Extra documents', 'Cloud storage', 'B', 'Add-ins extend Office and can be used for persistence.'),
(209, 'What security feature helps prevent malicious macros?', 'Spell check', 'Protected View and macro security settings', 'Grammar check', 'Auto-save', 'B', 'Protected View blocks macros from untrusted sources.');

-- Lesson 210: YARA Rules
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(210, 'What does YARA stand for?', 'Nothing specific', 'Yet Another Ridiculous Acronym (informal)', 'Your Automated Response App', 'Yield And Run Analysis', 'B', 'YARA is typically just called YARA without expansion.'),
(210, 'What are YARA rules used to match?', 'Regular expressions only', 'Patterns in files to identify malware or other content', 'Network traffic only', 'User behavior', 'B', 'YARA rules match patterns to identify specific files.'),
(210, 'What is a YARA string?', 'A yarn string', 'A text or byte pattern to search for', 'A file name', 'A command', 'B', 'Strings define the patterns YARA searches for.'),
(210, 'What is a YARA condition?', 'A weather condition', 'Logic determining when a rule matches', 'A file condition', 'A system requirement', 'B', 'Conditions specify when rules should trigger.'),
(210, 'Where can YARA be used?', 'Only on Windows', 'Malware analysis, forensics, and security monitoring', 'Only for viruses', 'Only in command line', 'B', 'YARA is versatile for various security applications.');

-- Level 41: Lateral Movement (Lessons 211-217)

-- Lesson 211: Lateral Movement Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(211, 'What is lateral movement?', 'Moving sideways while typing', 'Moving from one compromised system to others in the network', 'Physical movement of servers', 'Deleting files', 'B', 'Lateral movement is when attackers move from the initial compromised host to other systems.'),
(211, 'What is Pass-the-Hash?', 'Sharing password hints', 'Using captured NTLM hashes to authenticate without knowing the password', 'A password hashing algorithm', 'Email forwarding', 'B', 'Pass-the-Hash exploits Windows NTLM authentication by using captured hashes directly.'),
(211, 'What is PsExec used for?', 'Executing PowerShell scripts', 'Remote command execution on Windows systems', 'Playing games', 'Email management', 'B', 'PsExec allows execution of commands on remote Windows systems.'),
(211, 'What is a pivot in network attacks?', 'A basketball move', 'Using a compromised system to attack other internal systems', 'Rotating network cables', 'A type of firewall', 'B', 'Pivoting uses a compromised system as a stepping stone to reach other internal targets.'),
(211, 'Why do attackers use lateral movement?', 'To exercise', 'To reach valuable targets that arent directly accessible', 'To slow down detection', 'For fun', 'B', 'Lateral movement helps attackers reach high-value targets.');

-- Lesson 212: Lateral Movement Techniques
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(212, 'What is Pass-the-Ticket?', 'Sharing movie tickets', 'Using stolen Kerberos tickets for authentication', 'A ticketing system', 'A help desk tool', 'B', 'Pass-the-Ticket uses captured Kerberos tickets.'),
(212, 'What is remote desktop protocol (RDP)?', 'A backup protocol', 'A protocol for remotely controlling Windows computers', 'A routing protocol', 'A printing protocol', 'B', 'RDP provides remote graphical access to Windows.'),
(212, 'What is WMI lateral movement?', 'A moving company', 'Using Windows Management Instrumentation for remote execution', 'A backup method', 'A monitoring tool', 'B', 'WMI can execute commands on remote systems.'),
(212, 'What is SMB used for in lateral movement?', 'Snack management', 'File sharing and remote administration', 'Email', 'Web browsing', 'B', 'SMB enables file access and can be used for remote execution.'),
(212, 'What is token impersonation?', 'Fake money', 'Using stolen access tokens to assume another identity', 'Creating tokens', 'Token generation', 'B', 'Token impersonation uses captured tokens for access.');

-- Lesson 213: ARP Cache Poisoning
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(213, 'What is ARP cache poisoning?', 'Destroying ARP caches', 'Sending fake ARP responses to redirect network traffic', 'A type of food poisoning', 'Cleaning network caches', 'B', 'ARP poisoning associates the attackers MAC with legitimate IPs to intercept traffic.'),
(213, 'What is ARP?', 'A sound', 'Address Resolution Protocol - maps IP to MAC addresses', 'A routing protocol', 'An authentication protocol', 'B', 'ARP resolves IP addresses to MAC addresses on local networks.'),
(213, 'What can ARP poisoning enable?', 'Faster networks', 'Man-in-the-middle attacks and traffic interception', 'Better security', 'Improved routing', 'B', 'ARP poisoning allows attackers to intercept traffic.'),
(213, 'What tool can perform ARP poisoning?', 'Notepad', 'Ettercap or arpspoof', 'Calculator', 'Paint', 'B', 'Ettercap and arpspoof are common ARP spoofing tools.'),
(213, 'How can ARP poisoning be prevented?', 'It cannot be prevented', 'Static ARP entries, Dynamic ARP Inspection, or network segmentation', 'Using HTTPS only', 'Disabling networking', 'B', 'Various network controls can mitigate ARP attacks.');

-- Lesson 214: Port Scanning
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(214, 'Why scan ports during lateral movement?', 'To check port health', 'To discover services and potential attack vectors on internal systems', 'To fix network issues', 'For documentation', 'B', 'Internal port scans reveal accessible services.'),
(214, 'What is a service enumeration?', 'Counting services', 'Identifying what services are running and their versions', 'Service billing', 'Service pricing', 'B', 'Enumeration identifies service details for targeting.'),
(214, 'What ports indicate Windows file sharing?', '80 and 443', '445 and 139', '22 and 23', '25 and 110', 'B', 'Ports 445 and 139 are used for SMB/Windows file sharing.'),
(214, 'What does port 3389 typically indicate?', 'Web server', 'Remote Desktop Protocol (RDP)', 'Email server', 'Database server', 'B', 'Port 3389 is the default RDP port.'),
(214, 'Why minimize scanning noise?', 'For quieter networks', 'To avoid detection by security monitoring', 'Scanning is loud', 'For better results', 'B', 'Noisy scans trigger security alerts.');

-- Lesson 215: Credential Extraction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(215, 'What is credential dumping?', 'Throwing away passwords', 'Extracting passwords or hashes from compromised systems', 'Creating credentials', 'Credential backup', 'B', 'Credential dumping extracts authentication data.'),
(215, 'What is Mimikatz?', 'A cat name', 'A tool for extracting credentials from Windows memory', 'A programming language', 'An operating system', 'B', 'Mimikatz extracts passwords and hashes from memory.'),
(215, 'What is LSASS?', 'A security service', 'Local Security Authority Subsystem Service - stores credentials', 'A login screen', 'A firewall', 'B', 'LSASS manages security and stores credential information.'),
(215, 'What is a SAM database?', 'A persons database', 'Security Account Manager - stores local account hashes', 'A backup database', 'A network database', 'B', 'The SAM contains local Windows account password hashes.'),
(215, 'Why are domain admin credentials valuable?', 'They are not special', 'They provide access to all domain-joined systems', 'Only for domain controller', 'Only for email', 'B', 'Domain admin credentials give broad network access.');

-- Lesson 216: Man in the Middle
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(216, 'What is a man-in-the-middle (MITM) attack?', 'A physical attack', 'Intercepting communication between two parties', 'A social engineering attack', 'A DoS attack', 'B', 'MITM attacks intercept and potentially modify communications.'),
(216, 'How does MITM relate to lateral movement?', 'It doesnt', 'MITM can capture credentials for accessing other systems', 'Only for external attacks', 'For denial of service', 'B', 'MITM can capture credentials useful for lateral movement.'),
(216, 'What is SSL stripping?', 'Removing SSL certificates', 'Downgrading HTTPS connections to HTTP', 'Installing SSL', 'SSL configuration', 'B', 'SSL stripping forces unencrypted connections.'),
(216, 'What is LLMNR/NBT-NS poisoning?', 'Network protocols', 'Responding to name resolution requests to capture credentials', 'Network configuration', 'A backup protocol', 'B', 'Poisoning these protocols captures authentication attempts.'),
(216, 'What tool is used for LLMNR poisoning?', 'Word processor', 'Responder', 'Calculator', 'Paint', 'B', 'Responder captures credentials via protocol poisoning.');

-- Lesson 217: PsExec & Remote Execution
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(217, 'What is PsExec?', 'A PlayStation tool', 'A Sysinternals tool for remote command execution', 'A file manager', 'An antivirus', 'B', 'PsExec executes commands on remote Windows systems.'),
(217, 'What does PsExec require?', 'Nothing special', 'Administrative credentials on the target system', 'Physical access', 'Internet connection', 'B', 'PsExec needs admin credentials for remote execution.'),
(217, 'What is WinRM?', 'Windows Remove', 'Windows Remote Management for remote administration', 'A Windows removal tool', 'A malware type', 'B', 'WinRM enables remote management of Windows systems.'),
(217, 'What is PowerShell Remoting?', 'Remote PowerShell download', 'Executing PowerShell commands on remote systems', 'PowerShell updates', 'PowerShell backup', 'B', 'PS Remoting runs commands remotely via WinRM.'),
(217, 'What ports does WinRM use?', '80 and 443', '5985 (HTTP) and 5986 (HTTPS)', '22 and 23', '445 and 139', 'B', 'WinRM uses ports 5985 and 5986.');

-- Level 42: Exfiltration (Lessons 218-226)

-- Lesson 218: Exfiltration Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(218, 'What is data exfiltration?', 'Backing up data', 'Unauthorized transfer of data out of an organization', 'Data compression', 'Data validation', 'B', 'Exfiltration is the unauthorized extraction and transfer of data from a compromised system.'),
(218, 'Why is DNS tunneling effective for exfiltration?', 'DNS is faster than HTTP', 'DNS traffic is usually allowed through firewalls', 'DNS encrypts all data', 'DNS compresses data', 'B', 'DNS traffic on port 53 is typically allowed, making it useful for covert data transfer.'),
(218, 'What is HTTPS exfiltration?', 'Stealing SSL certificates', 'Sending stolen data over encrypted HTTPS connections', 'Breaking HTTPS encryption', 'Installing certificates', 'B', 'Attackers use HTTPS to blend exfiltration traffic with normal encrypted web traffic.'),
(218, 'What makes exfiltration detection difficult?', 'Its easy to detect', 'Data can be hidden in normal-looking traffic', 'Security tools always catch it', 'Exfiltration is noisy', 'B', 'Exfiltration techniques disguise malicious traffic.'),
(218, 'What is data staging before exfiltration?', 'A theater stage', 'Collecting and preparing data before transfer', 'Displaying data', 'Deleting data', 'B', 'Staging involves gathering data before exfiltration.');

-- Lesson 219: Exfiltration Techniques
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(219, 'What is covert channel exfiltration?', 'A secret TV channel', 'Using hidden communication paths to transfer data', 'Overt data transfer', 'Normal file copying', 'B', 'Covert channels hide data transfer in unexpected ways.'),
(219, 'What is data compression for exfiltration?', 'Making data look nicer', 'Reducing data size before transfer', 'Expanding data', 'Encrypting data', 'B', 'Compression reduces transfer volume and detection.'),
(219, 'Why encrypt exfiltrated data?', 'Its not necessary', 'To prevent inspection and understanding if intercepted', 'For faster transfer', 'For smaller size', 'B', 'Encryption hides content from security tools.'),
(219, 'What is data chunking?', 'Breaking into large pieces', 'Splitting data into small pieces for gradual transfer', 'Combining data', 'Deleting data pieces', 'B', 'Chunking makes transfers less noticeable.'),
(219, 'What is scheduled exfiltration?', 'Planning data backups', 'Transferring data during low-activity periods', 'Immediate transfer', 'Canceling transfers', 'B', 'Timed exfiltration blends with normal traffic patterns.');

-- Lesson 220: HTTPS Exfiltration
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(220, 'Why use HTTPS for exfiltration?', 'Its faster', 'Traffic is encrypted and looks like normal web browsing', 'Its required', 'Its cheaper', 'B', 'HTTPS blends with legitimate traffic and is encrypted.'),
(220, 'What makes HTTPS exfiltration hard to detect?', 'HTTPS is slow', 'Content is encrypted and appears as normal web traffic', 'Its very noisy', 'It uses special ports', 'B', 'Encrypted traffic on common ports is hard to inspect.'),
(220, 'What is SSL/TLS inspection?', 'Checking certificates only', 'Decrypting and inspecting HTTPS traffic', 'SSL installation', 'Certificate creation', 'B', 'TLS inspection allows security devices to examine encrypted traffic.'),
(220, 'How can attackers evade TLS inspection?', 'They cannot', 'Certificate pinning or using trusted domains', 'By using HTTP', 'By using email', 'B', 'Various techniques can bypass TLS inspection.'),
(220, 'What legitimate services might be abused?', 'None', 'Cloud storage, paste sites, code repositories', 'Only email', 'Only FTP', 'B', 'Legitimate services can be abused for exfiltration.');

-- Lesson 221: SMTP Exfiltration
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(221, 'How can email be used for exfiltration?', 'It cannot', 'Sending stolen data as attachments or in message body', 'Only for spam', 'Only for phishing', 'B', 'Email can carry exfiltrated data to attacker-controlled accounts.'),
(221, 'What makes email exfiltration effective?', 'Email is encrypted', 'Email is expected traffic that often passes through firewalls', 'Email is fast', 'Email is free', 'B', 'Email is normal business traffic that is often allowed.'),
(221, 'How might attachments be disguised?', 'They cannot', 'Renaming, encryption, or embedding in documents', 'Using colors', 'Making them smaller', 'B', 'Attachments can be disguised to avoid detection.'),
(221, 'What is email data leakage prevention?', 'Preventing spam', 'Systems that detect and block sensitive data in email', 'Email backup', 'Email encryption', 'B', 'DLP systems scan email for sensitive content.'),
(221, 'Why use external email services?', 'They are faster', 'To bypass internal email monitoring', 'For better storage', 'For free accounts', 'B', 'External services may bypass corporate security.');

-- Lesson 222: IRC Exfiltration
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(222, 'What is IRC?', 'Internal Revenue Code', 'Internet Relay Chat - a text communication protocol', 'Infrared Communication', 'Internet Resource Center', 'B', 'IRC is a protocol for real-time text communication.'),
(222, 'How is IRC used for exfiltration?', 'It cannot be', 'Data can be encoded in chat messages or file transfers', 'Only for chatting', 'Only for gaming', 'B', 'IRC channels can carry encoded data.'),
(222, 'Why is IRC suspicious in corporate networks?', 'Its too fast', 'IRC is rarely used for business purposes', 'IRC is encrypted', 'IRC is slow', 'B', 'IRC traffic is unusual in most business environments.'),
(222, 'What ports does IRC typically use?', '80 and 443', '6667 or 6697', '25 and 110', '53', 'B', 'IRC typically uses port 6667 (or 6697 for SSL).'),
(222, 'How might IRC exfiltration be detected?', 'It cannot', 'Monitoring for IRC protocol traffic or unusual ports', 'By reading chats', 'IRC is always hidden', 'B', 'Network monitoring can identify IRC traffic.');

-- Lesson 223: DNS Exfiltration
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(223, 'How does DNS tunneling work?', 'By blocking DNS', 'Encoding data in DNS queries and responses', 'By speeding up DNS', 'By encrypting DNS', 'B', 'Data is encoded in DNS request/response fields.'),
(223, 'Why is DNS tunneling effective?', 'DNS is fast', 'DNS traffic is almost always allowed through firewalls', 'DNS is encrypted', 'DNS is compressed', 'B', 'DNS is essential and rarely blocked.'),
(223, 'What tool creates DNS tunnels?', 'Notepad', 'iodine, dnscat2, or DNSExfiltrator', 'Calculator', 'Word', 'B', 'Various tools facilitate DNS tunneling.'),
(223, 'What indicates DNS tunneling?', 'Slow DNS', 'Long subdomain names and unusual query patterns', 'Fast resolution', 'Normal traffic', 'B', 'Tunneling creates abnormal DNS patterns.'),
(223, 'How can DNS exfiltration be mitigated?', 'Block all DNS', 'DNS monitoring, filtering, and limiting to trusted resolvers', 'Ignore DNS', 'Use more DNS servers', 'B', 'Various DNS controls can detect and prevent tunneling.');

-- Lesson 224: ICMP Exfiltration
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(224, 'What is ICMP tunneling?', 'A network diagnostic tool', 'Hiding data in ICMP (ping) packets for covert transfer', 'A VPN protocol', 'Network monitoring', 'B', 'ICMP tunneling embeds data in ping packets, which often pass through firewalls.'),
(224, 'Why might ICMP exfiltration work?', 'ICMP is fastest', 'ICMP is often allowed for network diagnostics', 'ICMP is encrypted', 'ICMP is compressed', 'B', 'ICMP (ping) is commonly permitted for troubleshooting.'),
(224, 'What is the data payload in ping packets?', 'There is none', 'Optional data field that can carry hidden information', 'The IP address', 'The timestamp', 'B', 'ICMP packets have a data field that can be abused.'),
(224, 'What tool performs ICMP tunneling?', 'Calculator', 'icmpsh, icmptunnel, or ptunnel', 'Notepad', 'Paint', 'B', 'Various tools create ICMP tunnels.'),
(224, 'How to detect ICMP exfiltration?', 'Impossible to detect', 'Monitoring ICMP traffic volume and payload sizes', 'Block all pings', 'Ignore ICMP', 'B', 'Unusual ICMP patterns may indicate tunneling.');

-- Lesson 225: Acoustic Exfiltration
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(225, 'What is acoustic exfiltration?', 'Using speakers normally', 'Using sound to transfer data from air-gapped systems', 'Recording conversations', 'Voice recognition', 'B', 'Acoustic methods can bridge air gaps using sound.'),
(225, 'Why use acoustic exfiltration?', 'Its faster', 'To extract data from isolated, air-gapped networks', 'Its more reliable', 'Its easier', 'B', 'Acoustic methods work where network methods cannot.'),
(225, 'What is ultrasonic data transfer?', 'Very loud sounds', 'Data encoded in sounds above human hearing range', 'Normal audio files', 'Voice messages', 'B', 'Ultrasonic frequencies are inaudible but detectable.'),
(225, 'What are limitations of acoustic exfiltration?', 'None', 'Short range, low bandwidth, environmental noise', 'Too fast', 'Too reliable', 'B', 'Acoustic methods have significant practical limitations.'),
(225, 'What equipment is needed?', 'Special hardware only', 'Speakers and microphones present in most computers', 'Satellite dishes', 'Radio towers', 'B', 'Standard computer audio hardware can be sufficient.');

-- Lesson 226: Cloud Exfiltration
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(226, 'How can cloud services be used for exfiltration?', 'They cannot be used', 'Uploading stolen data to legitimate cloud storage services', 'Cloud services block all uploads', 'Only through email', 'B', 'Attackers upload data to cloud services like Dropbox, appearing as legitimate business usage.'),
(226, 'Why are cloud services attractive for exfiltration?', 'They are free', 'Traffic appears legitimate and is often whitelisted', 'They are faster', 'They are required', 'B', 'Cloud services are commonly used for business.'),
(226, 'What cloud services might be abused?', 'None', 'Dropbox, Google Drive, OneDrive, GitHub', 'Only email services', 'Only video services', 'B', 'Various file hosting and code services can be abused.'),
(226, 'What is Shadow IT exfiltration risk?', 'Dark web access', 'Unauthorized cloud services bypassing security controls', 'A type of malware', 'A network attack', 'B', 'Unapproved services may lack security monitoring.'),
(226, 'How can cloud exfiltration be prevented?', 'Block all internet', 'CASB solutions, DLP, and cloud access monitoring', 'Ignore cloud usage', 'Allow all cloud access', 'B', 'Cloud security tools can monitor and control data movement.');
