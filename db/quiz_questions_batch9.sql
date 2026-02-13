-- Quiz Questions for Course 9: Security Concepts
-- Lessons 152-203 (52 lessons)

USE securitylab;

-- Course 9, Level 32: Encryption (Lessons 152-158)

-- Lesson 152: Encryption Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(152, 'What is the main purpose of encryption?', 'To make files smaller', 'To protect data confidentiality by making it unreadable without the key', 'To speed up data transfer', 'To organize files alphabetically', 'B', 'Encryption converts readable data into an unreadable format that can only be decrypted with the correct key.'),
(152, 'What is plaintext?', 'Simple text formatting', 'The original readable data before encryption', 'Encrypted data', 'A text file type', 'B', 'Plaintext is the original, readable data before encryption.'),
(152, 'What is ciphertext?', 'Text about ciphers', 'The encrypted, unreadable output after encryption', 'A type of font', 'Compressed text', 'B', 'Ciphertext is the scrambled output produced by encryption.'),
(152, 'What is an encryption key?', 'A physical key for encryption', 'A secret value used to encrypt and/or decrypt data', 'A software license', 'A password hint', 'B', 'Encryption keys are secret values that control the encryption/decryption process.'),
(152, 'What is cryptography?', 'The study of graves', 'The practice of secure communication techniques', 'A type of currency', 'A programming language', 'B', 'Cryptography is the science of secure communication and data protection.');

-- Lesson 153: What is Encryption
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(153, 'What is a cipher?', 'A secret code', 'An algorithm for performing encryption', 'A type of key', 'A password', 'B', 'A cipher is the algorithm that transforms plaintext into ciphertext.'),
(153, 'What is the difference between encryption and hashing?', 'They are the same', 'Encryption is reversible with a key; hashing is one-way', 'Hashing is faster', 'Encryption is one-way', 'B', 'Encryption can be reversed with the key; hashing cannot be reversed.'),
(153, 'What does decryption do?', 'Destroys data', 'Converts ciphertext back to plaintext using the key', 'Creates new encryption', 'Compresses data', 'B', 'Decryption reverses encryption to recover the original data.'),
(153, 'What is key length?', 'Physical length of a key', 'The number of bits in an encryption key', 'The password length', 'The file size', 'B', 'Key length (measured in bits) affects encryption strength.'),
(153, 'Why is encryption important?', 'To make files larger', 'To protect sensitive data from unauthorized access', 'To slow down computers', 'To create backups', 'B', 'Encryption protects data confidentiality and privacy.');

-- Lesson 154: Encryption vs Encoding
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(154, 'What is the difference between encryption and encoding?', 'They are the same thing', 'Encryption uses keys for security; encoding is for data transformation without security', 'Encoding is more secure', 'Encryption is faster', 'B', 'Encryption requires a secret key for security, while encoding (like Base64) is reversible without a key.'),
(154, 'What is Base64?', 'A military base', 'An encoding scheme that represents binary data as ASCII text', 'An encryption algorithm', 'A secure protocol', 'B', 'Base64 encodes binary data into ASCII characters for transmission.'),
(154, 'Is Base64 secure for sensitive data?', 'Yes, very secure', 'No, it is encoding not encryption', 'Only for passwords', 'Only with a key', 'B', 'Base64 provides no security - anyone can decode it.'),
(154, 'What is URL encoding?', 'Encrypting URLs', 'Converting special characters to percent-encoded format', 'A type of encryption', 'A secure URL protocol', 'B', 'URL encoding converts special characters (like spaces to %20) for URLs.'),
(154, 'When should you use encoding vs encryption?', 'Always use encoding', 'Encoding for format conversion, encryption for security', 'Always use encryption', 'They are interchangeable', 'B', 'Use encoding for data format conversion; encryption when confidentiality is needed.');

-- Lesson 155: Symmetric Encryption
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(155, 'In symmetric encryption, how many keys are used?', 'None', 'One key for both encryption and decryption', 'Two different keys', 'Three keys', 'B', 'Symmetric encryption uses the same key for both encrypting and decrypting data.'),
(155, 'What is AES?', 'A type of virus', 'Advanced Encryption Standard - a symmetric encryption algorithm', 'Automated Email System', 'Anti-Exploit Software', 'B', 'AES (Advanced Encryption Standard) is a widely-used symmetric encryption algorithm.'),
(155, 'What is the main challenge with symmetric encryption?', 'Its too slow', 'Securely sharing the key with the recipient', 'Keys are too long', 'It doesnt work', 'B', 'The key must be shared securely, which is challenging over insecure channels.'),
(155, 'What key sizes does AES support?', '64 bits only', '128, 192, and 256 bits', '512 bits only', '1024 bits only', 'B', 'AES supports key lengths of 128, 192, and 256 bits.'),
(155, 'What is DES?', 'Data Entry System', 'Data Encryption Standard - an older symmetric algorithm', 'Digital Email Service', 'Decryption Enhancement Software', 'B', 'DES is an older symmetric algorithm now considered insecure due to short key length.');

-- Lesson 156: Asymmetric Encryption
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(156, 'In asymmetric encryption, what is the public key used for?', 'Only decryption', 'Encrypting data and verifying signatures', 'Nothing', 'Storing passwords', 'B', 'The public key encrypts data (only private key can decrypt) and verifies digital signatures.'),
(156, 'What is the private key used for?', 'Public distribution', 'Decrypting data and creating signatures', 'Encoding data', 'Nothing important', 'B', 'The private key decrypts data encrypted with the public key and creates signatures.'),
(156, 'What is RSA?', 'Random Security Algorithm', 'Rivest-Shamir-Adleman - an asymmetric encryption algorithm', 'Remote Secure Access', 'Rapid Symmetric Algorithm', 'B', 'RSA is a widely-used asymmetric encryption algorithm.'),
(156, 'Why is asymmetric encryption slower than symmetric?', 'It uses longer passwords', 'The mathematical operations are more complex', 'It is not slower', 'It uses more memory', 'B', 'Asymmetric algorithms involve complex mathematical operations.'),
(156, 'What is hybrid encryption?', 'A mix of encoding and encryption', 'Using asymmetric to exchange symmetric keys for bulk encryption', 'Half-encrypted data', 'A broken encryption', 'B', 'Hybrid encryption uses asymmetric to securely exchange symmetric keys.');

-- Lesson 157: HTTPS & TLS
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(157, 'What does TLS stand for?', 'Total Lock Security', 'Transport Layer Security', 'Trusted Login System', 'Transfer Level Standard', 'B', 'TLS (Transport Layer Security) provides encrypted communication.'),
(157, 'What is the TLS handshake?', 'A greeting between servers', 'The process of establishing a secure connection', 'A type of encryption', 'A certificate type', 'B', 'The TLS handshake negotiates encryption parameters and authenticates parties.'),
(157, 'What is a digital certificate?', 'An online diploma', 'A document that binds a public key to an identity', 'A software license', 'An encryption key', 'B', 'Certificates verify that a public key belongs to a specific entity.'),
(157, 'What is a Certificate Authority (CA)?', 'A government agency', 'A trusted entity that issues digital certificates', 'A type of encryption', 'A web server', 'B', 'CAs verify identities and issue trusted certificates.'),
(157, 'What is Perfect Forward Secrecy?', 'Never making mistakes', 'Ensuring past sessions remain secure even if keys are compromised', 'A perfect encryption', 'A backup system', 'B', 'PFS ensures past communications stay protected if current keys are compromised.');

-- Lesson 158: Hashing
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(158, 'What is a hash function?', 'A function that encrypts data', 'A one-way function that produces a fixed-size output from any input', 'A function that compresses files', 'A function that generates random numbers', 'B', 'Hash functions produce a fixed-length output (digest) from any input, and cannot be reversed.'),
(158, 'Can you recover the original data from a hash?', 'Yes, using the hash key', 'No, hashing is a one-way function', 'Yes, using a special algorithm', 'Only with admin access', 'B', 'Hashing is designed to be irreversible - you cannot mathematically recover the input from the hash.'),
(158, 'What is a salt in password hashing?', 'A type of encryption key', 'Random data added before hashing to prevent rainbow table attacks', 'A password requirement', 'A hash algorithm', 'B', 'Salt is random data added to passwords before hashing to make each hash unique.'),
(158, 'Which hashing algorithm is considered cryptographically broken?', 'SHA-256', 'MD5', 'SHA-3', 'Argon2', 'B', 'MD5 has known collision vulnerabilities and should not be used for security purposes.'),
(158, 'What is the main use of hashing for files?', 'To compress them', 'To verify file integrity (detect if file was modified)', 'To encrypt them', 'To delete them securely', 'B', 'File hashes allow verification that a file has not been modified or corrupted.');

-- Course 9, Level 33: Security Law (Lessons 159-163)

-- Lesson 159: Security Law Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(159, 'Why is understanding cyber law important?', 'Its not important', 'To know legal boundaries and avoid criminal liability', 'Only for lawyers', 'For writing better code', 'B', 'Understanding laws helps security professionals operate legally.'),
(159, 'What is the CFAA?', 'Computer Fraud and Abuse Act', 'Cyber Freedom and Access Agreement', 'Common Framework for Authentication', 'Computer File Access Authority', 'A', 'CFAA is the primary US federal law against computer crimes.'),
(159, 'What is unauthorized access?', 'Logging in without a password', 'Accessing systems without permission', 'Using public computers', 'Reading public websites', 'B', 'Unauthorized access means using systems without proper authorization.'),
(159, 'What is the difference between ethical hacking and criminal hacking?', 'No difference', 'Ethical hacking is authorized; criminal hacking is not', 'Criminal hacking is harder', 'Ethical hacking is illegal', 'B', 'Authorization is the key difference between legal and illegal hacking.'),
(159, 'What is a penetration testing agreement?', 'An exercise contract', 'A legal document authorizing security testing', 'A software license', 'A privacy policy', 'B', 'Pen test agreements define scope and provide legal authorization.');

-- Lesson 160: The Law & Cybersecurity
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(160, 'What is GDPR?', 'General Data Protection Regulation', 'Global Data Privacy Rules', 'Government Data Protection Requirements', 'General Digital Privacy Rights', 'A', 'GDPR is the EU regulation for data protection and privacy.'),
(160, 'What rights does GDPR give individuals?', 'None', 'Right to access, correct, and delete their personal data', 'Right to hack back', 'Right to free software', 'B', 'GDPR provides rights including access, rectification, and erasure.'),
(160, 'What is HIPAA?', 'Health Insurance Portability and Accountability Act', 'Hacker Investigation and Prevention Act', 'High-security Internet Protection Act', 'Health Information Privacy Agreement', 'A', 'HIPAA protects health information in the US.'),
(160, 'What is PCI DSS?', 'Personal Computer Internet Defense', 'Payment Card Industry Data Security Standard', 'Private Cloud Infrastructure Defense', 'Protocol Configuration and Implementation', 'B', 'PCI DSS is the security standard for payment card data.'),
(160, 'What is SOC 2?', 'Security Operations Center 2', 'Service Organization Control 2 - a security audit framework', 'System of Controls', 'Secure Operating Configuration', 'B', 'SOC 2 is a framework for evaluating service provider security controls.');

-- Lesson 161: Getting Caught
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(161, 'What can happen if you hack without authorization?', 'Nothing serious', 'Criminal charges, fines, and imprisonment', 'Just a warning', 'Only civil penalties', 'B', 'Unauthorized hacking can result in serious criminal penalties.'),
(161, 'What is digital forensics used for?', 'Taking photos', 'Investigating computer crimes and collecting evidence', 'Creating documents', 'Backing up data', 'B', 'Digital forensics collects and analyzes digital evidence for investigations.'),
(161, 'Can using a VPN guarantee anonymity when hacking?', 'Yes, completely', 'No, investigators have multiple ways to trace activity', 'Only for legal hacking', 'VPNs are only for speed', 'B', 'VPNs provide some privacy but do not guarantee complete anonymity.'),
(161, 'What is attribution in cyber crime?', 'Giving credit', 'Identifying who is responsible for an attack', 'A type of attack', 'An authentication method', 'B', 'Attribution is the process of identifying attackers.'),
(161, 'What is a cease and desist letter?', 'A type of malware', 'A legal demand to stop certain activities', 'A court order', 'An arrest warrant', 'B', 'Cease and desist letters demand stopping specific activities.');

-- Lesson 162: Ethics in Security
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(162, 'What is the primary ethical principle in security research?', 'Making money', 'Do no harm and respect privacy', 'Finding all vulnerabilities', 'Publishing everything immediately', 'B', 'Ethical security research prioritizes avoiding harm and respecting privacy.'),
(162, 'What is a code of ethics?', 'Programming guidelines', 'Professional standards and principles for behavior', 'A type of encryption', 'Legal requirements only', 'B', 'Codes of ethics define professional standards and expected behavior.'),
(162, 'What is the ethical dilemma of vulnerability disclosure?', 'There is no dilemma', 'Balancing helping users vs potentially helping attackers', 'Choosing what language to use', 'Deciding on a price', 'B', 'Disclosure involves balancing protection against potential misuse.'),
(162, 'What is hacktivism?', 'Professional hacking', 'Hacking to promote political or social causes', 'Hacking for fun', 'A hacking competition', 'B', 'Hacktivism uses hacking for political or social activism.'),
(162, 'Is hacktivism legal?', 'Always', 'Generally no - unauthorized access is still illegal', 'Only for good causes', 'Only in some countries', 'B', 'Hacktivism typically involves illegal unauthorized access regardless of motive.');

-- Lesson 163: Responsible Disclosure
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(163, 'What is responsible disclosure?', 'Selling vulnerabilities', 'Privately reporting vulnerabilities to vendors before public disclosure', 'Publishing vulnerabilities immediately', 'Never disclosing vulnerabilities', 'B', 'Responsible disclosure gives vendors time to patch before public release.'),
(163, 'What is a bug bounty program?', 'A pest control service', 'A program that pays researchers for finding vulnerabilities', 'A software testing tool', 'An insurance program', 'B', 'Bug bounties reward security researchers for finding and reporting bugs.'),
(163, 'What is full disclosure?', 'Telling everything to everyone', 'Publishing vulnerability details publicly immediately', 'A type of encryption', 'A legal requirement', 'B', 'Full disclosure makes details public immediately, often controversially.'),
(163, 'What is coordinated disclosure?', 'Working together on a project', 'Vendor and researcher agree on disclosure timeline', 'Disclosing to multiple vendors', 'A government program', 'B', 'Coordinated disclosure involves agreed timelines between parties.'),
(163, 'How long is a typical disclosure timeline?', '1 day', '90 days is a common standard', '1 year', 'No standard exists', 'B', '90 days is a widely-accepted standard for vendor response time.');

-- Course 9, Level 34: Security Fundamentals (Lessons 164-169)

-- Lesson 164: Security Fundamentals Intro
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(164, 'What is the CIA triad in security?', 'A spy agency', 'Confidentiality, Integrity, Availability', 'Computer, Internet, Application', 'Central Intelligence Authority', 'B', 'CIA represents the three core security principles: Confidentiality, Integrity, Availability.'),
(164, 'What does confidentiality mean in security?', 'Keeping secrets from bosses', 'Ensuring only authorized users can access data', 'Encrypting everything', 'Hiding the system', 'B', 'Confidentiality means protecting data from unauthorized access.'),
(164, 'What does integrity mean in security?', 'Being honest', 'Ensuring data is accurate and unmodified', 'Having strong morals', 'Physical security', 'B', 'Integrity ensures data remains accurate and untampered.'),
(164, 'What does availability mean in security?', 'Being available to help', 'Ensuring systems and data are accessible when needed', 'Having backup staff', 'Open source software', 'B', 'Availability ensures authorized users can access systems when needed.'),
(164, 'What is a security vulnerability?', 'A weak person', 'A weakness that can be exploited', 'A type of attack', 'A security tool', 'B', 'Vulnerabilities are weaknesses that attackers can exploit.');

-- Lesson 165: Red vs Blue Team
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(165, 'What does a Red Team do?', 'Paints things red', 'Simulates attackers to test defenses', 'Defends networks', 'Manages IT infrastructure', 'B', 'Red teams act as attackers to test organizational security.'),
(165, 'What does a Blue Team do?', 'Paints things blue', 'Defends against attacks and maintains security', 'Attacks systems', 'Develops software', 'B', 'Blue teams focus on defense and incident response.'),
(165, 'What is a Purple Team?', 'A mix of red and blue paint', 'Collaboration between red and blue teams to improve security', 'A third-party team', 'A management team', 'B', 'Purple teams combine offensive and defensive perspectives.'),
(165, 'What is adversary simulation?', 'A video game', 'Mimicking real-world attacker techniques', 'Training enemies', 'A type of malware', 'B', 'Adversary simulation replicates realistic attack scenarios.'),
(165, 'What is threat hunting?', 'Looking for animals', 'Proactively searching for hidden threats in systems', 'Blocking firewalls', 'Writing malware', 'B', 'Threat hunting actively looks for undetected threats.');

-- Lesson 166: Defense in Depth
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(166, 'What is defense in depth?', 'Digging deep trenches', 'Multiple layers of security controls', 'One very strong firewall', 'Deep packet inspection only', 'B', 'Defense in depth uses multiple overlapping security layers.'),
(166, 'Why use multiple security layers?', 'To slow down the system', 'If one fails, others still provide protection', 'Its required by law', 'To use more budget', 'B', 'Layered security ensures protection even if individual controls fail.'),
(166, 'What is the principle of least privilege?', 'Giving everyone admin access', 'Users should only have minimum necessary access', 'Removing all privileges', 'A backup principle', 'B', 'Least privilege limits access to only what is needed for the job.'),
(166, 'What is network segmentation?', 'Cutting network cables', 'Dividing a network into smaller isolated sections', 'Combining networks', 'A routing protocol', 'B', 'Segmentation isolates network sections to limit attack spread.'),
(166, 'What is a DMZ in networking?', 'A war zone', 'A network segment between internal and external networks', 'A type of firewall', 'A DNS zone', 'B', 'DMZ (Demilitarized Zone) hosts public-facing services separately.');

-- Lesson 167: Risk Management
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(167, 'What is risk in security?', 'Taking chances', 'The potential for loss or damage from threats', 'A game of chance', 'Insurance', 'B', 'Risk combines the likelihood and impact of potential threats.'),
(167, 'What is risk assessment?', 'Assessing test scores', 'Identifying and evaluating potential risks', 'Taking risks', 'Insurance claims', 'B', 'Risk assessment identifies threats, vulnerabilities, and potential impacts.'),
(167, 'What are the four ways to handle risk?', 'Ignore, deny, blame, hide', 'Accept, mitigate, transfer, avoid', 'Run, hide, fight, surrender', 'None exist', 'B', 'Risks can be accepted, mitigated, transferred, or avoided.'),
(167, 'What is risk mitigation?', 'Making risks worse', 'Taking actions to reduce the likelihood or impact of risks', 'Ignoring risks', 'Transferring risks', 'B', 'Mitigation reduces risk through controls and safeguards.'),
(167, 'What is risk transfer?', 'Moving files', 'Shifting risk to another party (like insurance)', 'Sending risks away', 'A data transfer', 'B', 'Risk transfer shifts financial impact to another party.');

-- Lesson 168: Critical Security Controls
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(168, 'What are CIS Controls?', 'Computer Internet Settings', 'Center for Internet Security prioritized security actions', 'Critical Infrastructure Systems', 'Central Information Security', 'B', 'CIS Controls are prioritized security best practices.'),
(168, 'What is asset inventory?', 'Counting office supplies', 'Knowing all hardware and software in your environment', 'A type of insurance', 'A shopping list', 'B', 'Asset inventory tracks all systems and software.'),
(168, 'Why is patch management important?', 'To fix clothing', 'To fix known vulnerabilities before attackers exploit them', 'To change colors', 'Its not important', 'B', 'Patching fixes vulnerabilities that attackers could exploit.'),
(168, 'What is access control?', 'Remote controls', 'Managing who can access what resources', 'Physical locks only', 'A type of keyboard', 'B', 'Access control determines who can access systems and data.'),
(168, 'What is audit logging?', 'Financial audits', 'Recording events for security monitoring and investigation', 'A type of music', 'A backup system', 'B', 'Audit logs record activities for security analysis.');

-- Lesson 169: Stages of an Attack
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(169, 'What is the cyber kill chain?', 'A weapon', 'A model describing stages of a cyber attack', 'A blockchain', 'A supply chain', 'B', 'The kill chain describes attack phases from recon to objective.'),
(169, 'What is the first stage of most attacks?', 'Exploitation', 'Reconnaissance - gathering information about the target', 'Installation', 'Data exfiltration', 'B', 'Attackers first gather information about their target.'),
(169, 'What is weaponization in the kill chain?', 'Building weapons', 'Creating malware to exploit discovered vulnerabilities', 'Attacking immediately', 'Defending systems', 'B', 'Weaponization prepares exploit tools based on reconnaissance.'),
(169, 'What is the delivery stage?', 'Package delivery', 'Transmitting the weapon to the target', 'Installing malware', 'Maintaining access', 'B', 'Delivery sends the malicious payload to the target.'),
(169, 'What is command and control (C2)?', 'Military command', 'Communication channel between attacker and compromised system', 'A video game', 'An encryption protocol', 'B', 'C2 maintains attacker control over compromised systems.');

-- Course 9, Level 35: Security Distributions (Lessons 170-173)

-- Lesson 170: Security Distros Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(170, 'What is a security distribution?', 'A software sales method', 'A Linux distribution with pre-installed security tools', 'A security company', 'An antivirus program', 'B', 'Security distros come with penetration testing and forensics tools pre-installed.'),
(170, 'Why use a security distribution?', 'They are faster', 'Convenient access to many security tools pre-configured', 'They are required by law', 'For gaming', 'B', 'Security distros save time by bundling and configuring tools.'),
(170, 'Can security distros be run from USB?', 'No, never', 'Yes, most can run as live systems from USB', 'Only on special hardware', 'Only when purchased', 'B', 'Most security distros can boot from USB as live systems.'),
(170, 'What is a live boot?', 'A boot that is alive', 'Running an OS from removable media without installation', 'A type of footwear', 'An installation method', 'B', 'Live boot runs the OS directly from USB/DVD without installing.'),
(170, 'Should security distros be used on production systems?', 'Always', 'Generally no - they are for testing in controlled environments', 'Only on weekends', 'Yes, they are more secure', 'B', 'Security distros are designed for testing, not production use.');

-- Lesson 171: Slingshot & SIFT
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(171, 'What is SIFT Workstation?', 'A moving company', 'A forensic analysis distribution from SANS', 'A web server', 'A database system', 'B', 'SIFT (SANS Investigative Forensics Toolkit) is for digital forensics.'),
(171, 'What type of work is SIFT designed for?', 'Web development', 'Digital forensics and incident response', 'Game development', 'Video editing', 'B', 'SIFT contains tools for forensic investigation.'),
(171, 'What forensic tools does SIFT include?', 'Word processors', 'Autopsy, Volatility, and other forensic tools', 'Games', 'Compilers', 'B', 'SIFT includes major forensic analysis tools.'),
(171, 'What is Autopsy?', 'A medical procedure', 'A digital forensics platform for analyzing disk images', 'A backup tool', 'A text editor', 'B', 'Autopsy is a GUI for analyzing disk images and evidence.'),
(171, 'Who maintains SIFT Workstation?', 'Microsoft', 'SANS Institute', 'Apple', 'Google', 'B', 'SANS maintains the SIFT Workstation.');

-- Lesson 172: Kali Linux
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(172, 'What is Kali Linux?', 'A Hindu goddess', 'A Debian-based security distribution for penetration testing', 'A type of server', 'An antivirus program', 'B', 'Kali is the most popular penetration testing distribution.'),
(172, 'How many security tools does Kali include?', 'About 10', 'Hundreds of tools', 'Only 1', 'No tools', 'B', 'Kali includes hundreds of security and penetration testing tools.'),
(172, 'What organization maintains Kali Linux?', 'Microsoft', 'Offensive Security', 'Red Hat', 'Canonical', 'B', 'Offensive Security develops and maintains Kali Linux.'),
(172, 'What was Kali Linux called before?', 'Ubuntu Security', 'BackTrack', 'Fedora Hacking', 'CentOS Pentest', 'B', 'Kali evolved from the BackTrack distribution.'),
(172, 'Should Kali be used as a daily driver OS?', 'Yes, its the best', 'No, its designed for specific security tasks', 'Only for email', 'Only on weekends', 'B', 'Kali is designed for security work, not everyday use.');

-- Lesson 173: Wordlists
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(173, 'What is a wordlist in security?', 'A dictionary', 'A file containing potential passwords or usernames', 'A spelling checker', 'A language translator', 'B', 'Wordlists are used for password cracking and brute force attacks.'),
(173, 'What is rockyou.txt?', 'A music playlist', 'A famous wordlist from a real data breach', 'A type of malware', 'A security tool', 'B', 'rockyou.txt contains millions of passwords from an actual breach.'),
(173, 'Where are wordlists in Kali Linux?', '/var/log', '/usr/share/wordlists', '/home/user/words', '/etc/passwords', 'B', 'Kali stores wordlists in /usr/share/wordlists.'),
(173, 'What is SecLists?', 'A security mailing list', 'A collection of multiple wordlists for security testing', 'A list of security tools', 'An email list', 'B', 'SecLists is a comprehensive collection of wordlists for testing.'),
(173, 'Why create custom wordlists?', 'For fun', 'Target-specific words are more likely to succeed', 'Custom lists are required', 'Generic lists dont work', 'B', 'Custom wordlists tailored to targets are more effective.');

-- Course 9, Level 36: Reconnaissance (Lessons 174-181)

-- Lesson 174: Reconnaissance Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(174, 'What is reconnaissance in cybersecurity?', 'The attack phase', 'Information gathering about a target before an attack', 'Installing malware', 'Deleting evidence', 'B', 'Reconnaissance is the first phase of an attack where attackers gather information about the target.'),
(174, 'What is OSINT?', 'Operating System Integration', 'Open Source Intelligence - information from public sources', 'Online Security Interface', 'Offensive Security Intrusion', 'B', 'OSINT is intelligence gathered from publicly available sources like websites, social media, and databases.'),
(174, 'What information can WHOIS lookup provide?', 'User passwords', 'Domain registration details including owner contact information', 'Website source code', 'Database contents', 'B', 'WHOIS provides domain registration information including registrant contact details.'),
(174, 'What is Google Dorking?', 'A Google game', 'Using advanced search operators to find sensitive information', 'Creating Google accounts', 'A type of malware', 'B', 'Google Dorking uses advanced search operators to find potentially sensitive exposed information.'),
(174, 'What tool is commonly used for port scanning?', 'Microsoft Word', 'Nmap', 'Adobe Reader', 'Notepad', 'B', 'Nmap is the most widely-used network scanning tool for discovering hosts and services.');

-- Lesson 175: Google Dorking & Robots
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(175, 'What is robots.txt?', 'A file for robot commands', 'A file that tells search engines what not to index', 'A security configuration', 'A malware file', 'B', 'robots.txt instructs search engine crawlers what URLs to avoid.'),
(175, 'Can robots.txt expose sensitive paths?', 'No, never', 'Yes, it often reveals directory structures', 'Only to admins', 'Only on Windows', 'B', 'robots.txt can inadvertently reveal sensitive paths to attackers.'),
(175, 'What does site: operator do in Google?', 'Creates a website', 'Limits search to a specific domain', 'Blocks a site', 'Rates a website', 'B', 'site: restricts search results to a specific domain.'),
(175, 'What does filetype: operator do?', 'Changes file types', 'Searches for specific file types', 'Uploads files', 'Deletes files', 'B', 'filetype: finds specific document types (pdf, xls, etc.).'),
(175, 'What might inurl:admin reveal?', 'Admin email addresses', 'Admin login pages and panels', 'Administrator names', 'Admin phone numbers', 'B', 'inurl:admin can find administrative interfaces.');

-- Lesson 176: Job Posting OSINT
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(176, 'Why are job postings useful for reconnaissance?', 'To find employment', 'They reveal technologies and infrastructure used by the target', 'They are not useful', 'For salary information', 'B', 'Job postings often reveal technology stacks, tools, and infrastructure.'),
(176, 'What technology information might job postings reveal?', 'Employee salaries', 'Programming languages, frameworks, and security tools used', 'Office location only', 'Company profits', 'B', 'Technical job postings reveal the technology environment.'),
(176, 'How can LinkedIn be used for OSINT?', 'For job applications', 'Finding employee names, roles, and technologies they use', 'Sending spam', 'Downloading music', 'B', 'LinkedIn profiles reveal organizational structure and technologies.'),
(176, 'What is social engineering reconnaissance?', 'Building social networks', 'Gathering information about people to manipulate them', 'Engineering social media', 'A type of coding', 'B', 'Social engineering recon gathers info for manipulation attacks.'),
(176, 'What might company org charts reveal?', 'Salary information', 'Potential targets and reporting structures', 'Company profits', 'Product prices', 'B', 'Org charts identify key personnel and relationships.');

-- Lesson 177: CeWL & Custom Wordlists
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(177, 'What is CeWL?', 'A cool feature', 'Custom Word List generator that scrapes websites', 'A type of attack', 'A security tool', 'B', 'CeWL creates custom wordlists by crawling target websites.'),
(177, 'Why create target-specific wordlists?', 'Generic lists work better', 'Target-specific words are more likely to be used as passwords', 'Its faster', 'Its required', 'B', 'People often use company-related words in passwords.'),
(177, 'What content does CeWL extract?', 'Images only', 'Words from website pages to build wordlists', 'User accounts', 'Source code', 'B', 'CeWL extracts words from website content.'),
(177, 'How can social media help create wordlists?', 'It cannot', 'Profile info reveals interests, pets, dates useful for passwords', 'For marketing only', 'To find friends', 'B', 'Social media reveals personal info often used in passwords.'),
(177, 'What is password profiling?', 'Creating user profiles', 'Building wordlists based on target information', 'Profiling criminals', 'A backup method', 'B', 'Password profiling creates targeted wordlists from gathered intelligence.');

-- Lesson 178: Prior Breaches
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(178, 'Why check for prior breaches?', 'Its illegal', 'To find credentials that might be reused', 'For entertainment', 'Its not useful', 'B', 'Breached credentials are often reused across services.'),
(178, 'What is credential stuffing?', 'Filling forms', 'Using breached credentials to access other services', 'A cooking term', 'A type of encryption', 'B', 'Credential stuffing exploits password reuse across services.'),
(178, 'What is Have I Been Pwned?', 'A gaming site', 'A service to check if credentials were in data breaches', 'A hacking tool', 'A social network', 'B', 'HIBP lets users check if their data was in known breaches.'),
(178, 'Why is password reuse dangerous?', 'Its not dangerous', 'One breach compromises all accounts using that password', 'Passwords expire', 'Its harder to remember', 'B', 'Password reuse means one breach affects multiple accounts.'),
(178, 'What is a data breach?', 'A broken database', 'Unauthorized access resulting in data exposure', 'A backup failure', 'A network outage', 'B', 'Breaches expose data through unauthorized access.');

-- Lesson 179: WHOIS Lookup
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(179, 'What information does WHOIS provide?', 'Website content', 'Domain registration and contact information', 'User passwords', 'Server configurations', 'B', 'WHOIS shows domain owner, registrar, and contact details.'),
(179, 'What is domain privacy protection?', 'A firewall', 'A service that hides registrant information in WHOIS', 'A type of encryption', 'A backup service', 'B', 'Privacy protection replaces owner info with proxy details.'),
(179, 'What is a registrar?', 'A school official', 'A company authorized to register domain names', 'A type of server', 'A DNS record', 'B', 'Registrars manage domain name registration.'),
(179, 'What are nameservers in WHOIS?', 'Server names', 'DNS servers that resolve the domain', 'Email servers', 'Web servers', 'B', 'Nameservers handle DNS resolution for the domain.'),
(179, 'Why is historical WHOIS data useful?', 'Its not useful', 'It may reveal previous owners or configurations', 'For legal purposes only', 'For billing', 'B', 'Historical WHOIS can reveal past ownership and infrastructure.');

-- Lesson 180: DNS Reconnaissance
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(180, 'What is DNS enumeration?', 'Counting DNS servers', 'Discovering DNS records and subdomains', 'Deleting DNS records', 'Creating DNS servers', 'B', 'DNS enumeration finds records and subdomains of a target.'),
(180, 'What tool performs DNS lookups?', 'Microsoft Word', 'dig, nslookup, or host', 'Calculator', 'Notepad', 'B', 'dig, nslookup, and host are DNS query tools.'),
(180, 'What is subdomain enumeration?', 'Counting subdomains', 'Finding all subdomains of a domain', 'Creating subdomains', 'Deleting subdomains', 'B', 'Subdomain enumeration discovers subdomains that may have vulnerabilities.'),
(180, 'What is a DNS zone transfer?', 'Moving DNS servers', 'Copying all DNS records from a server', 'A network transfer', 'Changing DNS providers', 'B', 'Zone transfers replicate DNS zones between servers.'),
(180, 'Why are misconfigured zone transfers dangerous?', 'They are not dangerous', 'They expose all DNS records to attackers', 'They slow down DNS', 'They cost money', 'B', 'Open zone transfers reveal complete DNS infrastructure.');

-- Lesson 181: Nmap Scanning
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(181, 'What is Nmap?', 'A mapping application', 'Network Mapper - a port scanning and discovery tool', 'A GPS tool', 'An image editor', 'B', 'Nmap discovers hosts and services on networks.'),
(181, 'What is a port scan?', 'Scanning shipping ports', 'Probing a host to find open network ports', 'A virus scan', 'A disk scan', 'B', 'Port scans identify open ports and running services.'),
(181, 'What does nmap -sS do?', 'Super scan', 'SYN scan (stealthy half-open scan)', 'Slow scan', 'System scan', 'B', 'SYN scan sends SYN packets without completing connections.'),
(181, 'What does nmap -sV detect?', 'Vulnerabilities', 'Service versions running on open ports', 'Viruses', 'Virtual machines', 'B', '-sV probes services to determine versions.'),
(181, 'What is OS fingerprinting in Nmap?', 'Collecting fingerprints', 'Detecting the operating system of a target', 'A security feature', 'A scanning mode', 'B', 'OS fingerprinting identifies target operating systems.');

-- Course 9, Level 37: Forensics Basics (Lessons 182-188)

-- Lesson 182: Forensics Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(182, 'What is digital forensics?', 'Recovering deleted games', 'The process of collecting, preserving, and analyzing digital evidence', 'Creating digital art', 'Building websites', 'B', 'Digital forensics involves investigating digital devices to collect evidence for legal proceedings.'),
(182, 'Why is maintaining chain of custody important?', 'To track file downloads', 'To ensure evidence is admissible in court by documenting handling', 'To organize evidence alphabetically', 'To compress evidence files', 'B', 'Chain of custody documents who handled evidence and when, ensuring its integrity for legal proceedings.'),
(182, 'What is a forensic image?', 'A photograph of a computer', 'A bit-by-bit copy of digital media', 'An image file found as evidence', 'A drawing of evidence', 'B', 'A forensic image is an exact bit-by-bit copy of digital media that preserves all data.'),
(182, 'What tool is commonly used for memory forensics?', 'Photoshop', 'Volatility Framework', 'Microsoft Excel', 'iTunes', 'B', 'Volatility is the leading open-source memory forensics framework for analyzing RAM dumps.'),
(182, 'What is steganography?', 'Writing about dinosaurs', 'Hiding information within other files (like images)', 'A type of encryption', 'Forensic photography', 'B', 'Steganography hides secret data within innocent-looking files like images or audio.');

-- Lesson 183: Evidence & Chain of Custody
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(183, 'What is chain of custody?', 'A chain of command', 'Documentation of evidence handling from collection to court', 'A custody battle', 'A blockchain', 'B', 'Chain of custody tracks evidence handling to prove integrity.'),
(183, 'Why should original evidence not be analyzed directly?', 'Its too slow', 'To preserve the original and prevent modification', 'Its too expensive', 'Its not allowed', 'B', 'Working copies protect original evidence from alteration.'),
(183, 'What is a write blocker?', 'A writing disability', 'A device that prevents writing to storage media', 'A blocked website', 'An encryption tool', 'B', 'Write blockers allow reading but prevent modifying evidence.'),
(183, 'What makes evidence legally admissible?', 'Being interesting', 'Proper collection, documentation, and handling procedures', 'Being digital', 'Being recent', 'B', 'Proper procedures ensure evidence is accepted in court.'),
(183, 'What should be documented when collecting evidence?', 'Only the file names', 'Date, time, who collected it, method, location', 'Only the location', 'Nothing special', 'B', 'Complete documentation supports evidence integrity.');

-- Lesson 184: Steganography
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(184, 'What is the goal of steganography?', 'To encrypt data', 'To hide the existence of a message', 'To compress files', 'To corrupt data', 'B', 'Steganography conceals that a secret message even exists.'),
(184, 'How can data be hidden in images?', 'In the filename only', 'By modifying pixel values slightly', 'Images cannot hide data', 'In the file extension', 'B', 'Small pixel modifications can encode hidden data.'),
(184, 'What is LSB steganography?', 'Large Scale Binary', 'Least Significant Bit - hiding data in lowest bits', 'Latest Stego Binary', 'Low Security Block', 'B', 'LSB modifies the least noticeable bits to hide data.'),
(184, 'What tool detects steganography?', 'Antivirus', 'Steganalysis tools like StegDetect', 'Firewall', 'Text editor', 'B', 'Steganalysis tools attempt to detect hidden content.'),
(184, 'Can steganography be combined with encryption?', 'No', 'Yes, for additional security', 'Only in videos', 'Only in audio', 'B', 'Encrypting before hiding adds another security layer.');

-- Lesson 185: Event Logs
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(185, 'Where are Windows event logs stored?', 'C:\\Users', 'C:\\Windows\\System32\\winevt\\Logs', 'C:\\Program Files', 'C:\\Temp', 'B', 'Windows stores event logs in the winevt\\Logs directory.'),
(185, 'What is the Security event log?', 'Antivirus logs', 'Records of security-related events like logins', 'Firewall logs', 'Application logs', 'B', 'The Security log records authentication and access events.'),
(185, 'What event ID indicates a successful login in Windows?', '4624', '4625', '4688', '1000', 'A', 'Event ID 4624 indicates successful account logon.'),
(185, 'What event ID indicates a failed login?', '4624', '4625', '4688', '1001', 'B', 'Event ID 4625 indicates failed logon attempts.'),
(185, 'What tool views Windows event logs?', 'Notepad', 'Event Viewer', 'Task Manager', 'Control Panel', 'B', 'Event Viewer displays and manages Windows event logs.');

-- Lesson 186: File Integrity & Hashes
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(186, 'How do hashes verify file integrity?', 'They encrypt files', 'Matching hashes indicate file has not changed', 'They compress files', 'They backup files', 'B', 'Identical hashes confirm a file is unchanged.'),
(186, 'What hash algorithm is recommended for forensics?', 'MD5 only', 'SHA-256 or stronger', 'CRC32', 'No algorithm', 'B', 'SHA-256 provides better security than older algorithms.'),
(186, 'When should you hash evidence?', 'After analysis', 'Before and after handling to verify integrity', 'Never', 'Only if requested', 'B', 'Hashing before and after proves evidence wasnt modified.'),
(186, 'What is a hash collision?', 'Two hashes fighting', 'Two different files producing the same hash', 'A hash error', 'A network collision', 'B', 'Collisions (rare) mean different inputs yield same hash.'),
(186, 'What tool calculates file hashes?', 'Calculator', 'md5sum, sha256sum, or certutil', 'Text editor', 'Paint', 'B', 'Various tools calculate cryptographic hashes of files.');

-- Lesson 187: Incident Response
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(187, 'What is incident response?', 'Responding to emails', 'Organized approach to handling security breaches', 'A type of backup', 'Technical support', 'B', 'IR is the process of detecting, containing, and recovering from incidents.'),
(187, 'What are the phases of incident response?', 'Start, middle, end', 'Preparation, detection, containment, eradication, recovery, lessons learned', 'Only detection and recovery', 'Just containment', 'B', 'IR follows structured phases from preparation to post-incident review.'),
(187, 'What is containment in IR?', 'Putting things in containers', 'Limiting the scope and impact of an incident', 'Containing evidence', 'A type of storage', 'B', 'Containment prevents further damage during an incident.'),
(187, 'What is eradication in IR?', 'Deleting all files', 'Removing the threat from the environment', 'A type of malware', 'System shutdown', 'B', 'Eradication eliminates the root cause of the incident.'),
(187, 'Why document lessons learned?', 'For entertainment', 'To improve future incident response', 'Its not necessary', 'For legal compliance only', 'B', 'Post-incident review improves future response capabilities.');

-- Lesson 188: Security Teams
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(188, 'What is a SOC?', 'A type of clothing', 'Security Operations Center - monitors security 24/7', 'System Operating Console', 'Secure Online Connection', 'B', 'SOCs provide continuous security monitoring.'),
(188, 'What is a CSIRT?', 'Computer System Integration', 'Computer Security Incident Response Team', 'Central Security Intelligence', 'Cyber Security Information', 'B', 'CSIRTs handle security incident response.'),
(188, 'What does a security analyst do?', 'Writes security policies only', 'Monitors systems, investigates alerts, and responds to incidents', 'Only installs antivirus', 'Manages IT budget', 'B', 'Analysts monitor, investigate, and respond to security events.'),
(188, 'What is a threat intelligence team?', 'A spy agency', 'A team that researches and shares threat information', 'A hacking team', 'An IT support team', 'B', 'Threat intel teams gather and analyze threat data.'),
(188, 'What is security orchestration?', 'Playing music', 'Automating and coordinating security tools and processes', 'Organizing security meetings', 'A type of encryption', 'B', 'SOAR automates security workflows and responses.');
