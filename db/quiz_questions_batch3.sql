-- Quiz Questions Batch 3: Hardware, Data Representation, Logic, File Systems, Cloud
-- Adding questions to reach minimum of 5 per lesson

USE securitylab;

-- Lesson 33: Motherboards (has 3, need 2 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(33, 'What determines motherboard compatibility with CPUs?', 'Brand name', 'Socket type', 'Color', 'Size only', 'B', 'The CPU socket type must match between the motherboard and processor for physical compatibility.', 4),
(33, 'What is the chipset responsible for?', 'Display output', 'Communication between CPU, RAM, and peripherals', 'Sound processing', 'Network connectivity', 'B', 'The chipset manages data flow between the CPU, memory, storage, and expansion slots.', 5);

-- Lesson 34: CPUs & Processing (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(34, 'What does the CPU clock speed measure?', 'Power consumption', 'Cycles per second (processing speed)', 'Memory size', 'Storage capacity', 'B', 'Clock speed in GHz indicates how many processing cycles the CPU performs per second.', 3),
(34, 'What is a CPU core?', 'External processor', 'Independent processing unit within CPU', 'Cache memory', 'Graphics chip', 'B', 'Each core can execute instructions independently, enabling parallel processing.', 4),
(34, 'What is hyper-threading?', 'Overclocking', 'Running multiple threads per core simultaneously', 'Multi-core processing', 'Faster clock speed', 'B', 'Hyper-threading allows one physical core to handle two threads, improving efficiency.', 5);

-- Lesson 35: RAM & Storage (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(35, 'What type of memory is RAM?', 'Permanent storage', 'Volatile (loses data when powered off)', 'Read-only', 'Optical storage', 'B', 'RAM is volatile memory that requires constant power to retain data.', 3),
(35, 'What is the difference between SSD and HDD?', 'SSDs are larger', 'SSDs use flash memory, HDDs use spinning disks', 'HDDs are faster', 'No difference', 'B', 'SSDs have no moving parts and are faster; HDDs use magnetic spinning platters.', 4),
(35, 'What is DDR in RAM specifications?', 'Direct Data Rate', 'Double Data Rate', 'Dual Drive Reader', 'Dynamic Data Recovery', 'B', 'DDR (Double Data Rate) transfers data on both rising and falling clock edges.', 5);

-- Lesson 36: GPUs & Output (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(36, 'What is a GPU primarily designed for?', 'General computing', 'Parallel graphics processing', 'Network operations', 'Storage management', 'B', 'GPUs excel at parallel processing tasks, originally designed for rendering graphics.', 1),
(36, 'What is VRAM?', 'Virtual RAM', 'Video RAM dedicated to graphics', 'Variable RAM', 'Volatile RAM', 'B', 'VRAM is memory on the graphics card specifically for storing image and texture data.', 2),
(36, 'Which connector provides digital video output?', 'VGA', 'HDMI or DisplayPort', 'PS/2', 'Serial', 'B', 'HDMI and DisplayPort carry digital video signals; VGA is analog.', 3),
(36, 'What makes GPUs useful for password cracking?', 'More memory', 'Massive parallel processing capability', 'Faster clock speed', 'Better cooling', 'B', 'GPUs can compute thousands of hash operations simultaneously, accelerating brute force attacks.', 4),
(36, 'What is integrated graphics?', 'External graphics card', 'GPU built into the CPU or motherboard', 'Graphics software', 'Virtual GPU', 'B', 'Integrated graphics shares system resources, eliminating the need for a discrete graphics card.', 5);

-- Lesson 37: PSU & Cooling (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(37, 'What does PSU stand for?', 'Processor Speed Unit', 'Power Supply Unit', 'Primary Storage Unit', 'Peripheral System Unit', 'B', 'The PSU converts AC power from the wall outlet to DC power for computer components.', 1),
(37, 'What rating indicates PSU efficiency?', 'Wattage', '80 Plus certification', 'Voltage', 'Amperage', 'B', '80 Plus ratings (Bronze, Silver, Gold, Platinum) indicate power conversion efficiency levels.', 2),
(37, 'Why is proper cooling important for security?', 'Prevents fires', 'Overheating can cause crashes and data loss', 'Saves electricity', 'Reduces noise', 'B', 'System instability from overheating can cause crashes, potentially corrupting data or security software.', 3),
(37, 'What is thermal throttling?', 'Cooling method', 'CPU reducing speed to prevent overheating', 'Fan speed control', 'Heat pipe technology', 'B', 'Thermal throttling automatically reduces CPU performance when temperatures get too high.', 4),
(37, 'What is TDP?', 'Thermal Design Power', 'Total Data Processing', 'Temperature Detection Protocol', 'Thermal Dissipation Percentage', 'A', 'TDP indicates the maximum heat a component generates, guiding cooling requirements.', 5);

-- Lesson 38: Bits, Bytes & Number Bases (has 3, need 2 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(38, 'How many values can 8 bits represent?', '8', '64', '256', '1024', 'C', 'With 8 bits, you can represent 2^8 = 256 different values (0-255).', 4),
(38, 'What is hexadecimal base?', 'Base 2', 'Base 8', 'Base 10', 'Base 16', 'D', 'Hexadecimal uses 16 symbols (0-9 and A-F) to represent values compactly.', 5);

-- Lesson 39: ASCII Encoding (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(39, 'How many characters does standard ASCII define?', '64', '128', '256', '512', 'B', 'Standard ASCII uses 7 bits to define 128 characters (0-127).', 3),
(39, 'What is the ASCII value of A?', '41', '65', '97', '64', 'B', 'Uppercase A is ASCII 65 (decimal), 41 in hexadecimal.', 4),
(39, 'What encoding supports international characters?', 'ASCII', 'EBCDIC', 'UTF-8/Unicode', 'Binary', 'C', 'UTF-8 and Unicode support characters from all writing systems worldwide.', 5);

-- Lesson 40: Base64 Encoding (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(40, 'What is Base64 used for?', 'Encryption', 'Encoding binary data as ASCII text', 'Compression', 'Hashing', 'B', 'Base64 encodes binary data using 64 printable ASCII characters for text-based transmission.', 3),
(40, 'How much larger is Base64 encoded data?', 'Same size', 'About 33% larger', 'Double the size', 'Half the size', 'B', 'Base64 uses 4 characters to represent 3 bytes, increasing size by approximately 33%.', 4),
(40, 'What character pads Base64 strings?', '*', '#', '=', '+', 'C', 'The equals sign (=) pads Base64 output when input length isnt divisible by 3.', 5);

-- Lesson 41: File Headers (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(41, 'What are magic bytes?', 'Encrypted data', 'File signature bytes identifying file type', 'Random padding', 'Checksum values', 'B', 'Magic bytes are fixed byte sequences at file start that identify the file format.', 3),
(41, 'What is the PNG magic number?', 'FF D8 FF', '89 50 4E 47', '50 4B 03 04', '25 50 44 46', 'B', 'PNG files start with 89 50 4E 47 (hex), which includes "PNG" in ASCII.', 4),
(41, 'Why are file headers important for security?', 'They encrypt files', 'They help detect disguised malicious files', 'They compress data', 'They speed up access', 'B', 'Checking magic bytes reveals true file type regardless of extension, detecting renamed malware.', 5);

-- Lesson 42: Boolean Logic (has 3, need 2 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(42, 'What does NAND gate output when both inputs are 1?', '1', '0', 'Undefined', 'Error', 'B', 'NAND (NOT AND) outputs 0 only when both inputs are 1; otherwise outputs 1.', 4),
(42, 'Which gate is called a "universal gate"?', 'AND', 'OR', 'NAND', 'XOR', 'C', 'NAND and NOR are universal gates; any logic circuit can be built using only NAND gates.', 5);

-- Lesson 43: XOR Encryption (has 1, need 4 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(43, 'What is special about XOR encryption?', 'Its unbreakable', 'Same operation encrypts and decrypts', 'Its the fastest', 'Uses no key', 'B', 'XOR is its own inverse: A XOR K XOR K = A. Same key operation decrypts.', 2),
(43, 'When does XOR output 1?', 'Both inputs are 1', 'Both inputs are 0', 'Inputs are different', 'Inputs are same', 'C', 'XOR outputs 1 when inputs differ (0,1 or 1,0) and 0 when they match.', 3),
(43, 'What is a one-time pad?', 'Single-use password', 'XOR encryption with truly random key as long as message', 'Temporary file', 'Disposable computer', 'B', 'One-time pad uses random key equal to message length, providing perfect secrecy.', 4),
(43, 'Why is single-byte XOR weak?', 'Too slow', 'Only 256 possible keys, easily brute forced', 'Corrupts data', 'Requires internet', 'B', 'With only 256 possible single-byte keys, frequency analysis and brute force break it easily.', 5);

-- Lesson 44: File Systems Overview (has 3, need 2 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(44, 'What file system does Windows primarily use?', 'ext4', 'NTFS', 'APFS', 'ZFS', 'B', 'NTFS (New Technology File System) is the standard Windows file system with security features.', 4),
(44, 'What is journaling in file systems?', 'Logging user activity', 'Recording changes before committing to prevent corruption', 'Creating backups', 'Encrypting data', 'B', 'Journaling logs intended changes first, enabling recovery if operations are interrupted.', 5);

-- Lesson 45: Slack Space (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(45, 'What is slack space?', 'Free disk space', 'Unused space at end of allocated clusters', 'RAM overflow area', 'Swap partition', 'B', 'Slack space is the unused portion of a cluster when a file doesnt fill it completely.', 1),
(45, 'Why is slack space important in forensics?', 'It speeds up analysis', 'Deleted data may remain in slack space', 'It contains encryption keys', 'It stores logs', 'B', 'Previous file contents can persist in slack space, recoverable during forensic analysis.', 2),
(45, 'What is file carving?', 'Deleting files', 'Recovering files based on content signatures', 'Encrypting files', 'Compressing files', 'B', 'File carving extracts files from raw data using magic bytes and structure, ignoring file system.', 3),
(45, 'What tool performs disk forensics?', 'Photoshop', 'Autopsy or FTK', 'Microsoft Word', 'Chrome browser', 'B', 'Autopsy and FTK (Forensic Toolkit) are popular digital forensics analysis tools.', 4),
(45, 'What is RAM slack?', 'Unused RAM', 'Data from RAM used to pad last disk sector', 'Memory leak', 'Virtual memory', 'B', 'RAM slack fills the last sector with whatever was in memory, potentially revealing sensitive data.', 5);

-- Lesson 46: Cloud Models (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(46, 'What is IaaS?', 'Internet as a Service', 'Infrastructure as a Service', 'Identity as a Service', 'Integration as a Service', 'B', 'IaaS provides virtualized computing resources like VMs, storage, and networking.', 3),
(46, 'Which cloud model gives most user control?', 'SaaS', 'PaaS', 'IaaS', 'All equal', 'C', 'IaaS gives users control over OS and up; PaaS controls runtime up; SaaS only data/config.', 4),
(46, 'What is a shared responsibility model?', 'Multiple users sharing resources', 'Division of security duties between cloud provider and customer', 'Shared passwords', 'Team collaboration', 'B', 'Cloud providers secure the infrastructure; customers secure their data, access, and configurations.', 5);
