-- Quiz Questions for Course 8: Advanced Hardware
-- Lessons 136-151 (16 lessons)

USE securitylab;

-- Course 8, Level 28: CPU Architecture (Lessons 136-140)

-- Lesson 136: CPU Architecture Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(136, 'What is the purpose of the CPU registers?', 'Long-term data storage', 'Small, fast storage for immediate CPU operations', 'Displaying graphics', 'Network communication', 'B', 'Registers are small amounts of fast storage directly accessible by the CPU for operations.'),
(136, 'What does the Instruction Pointer (RIP) register do?', 'Points to the current mouse position', 'Holds the address of the next instruction to execute', 'Stores the result of calculations', 'Manages internet connections', 'B', 'The Instruction Pointer contains the memory address of the next instruction to execute.'),
(136, 'What is the x86-64 architecture?', 'A 64-bit extension of the x86 instruction set', 'A type of graphics card', 'A network protocol', 'An operating system', 'A', 'x86-64 (also AMD64) is the 64-bit version of the x86 CPU architecture.'),
(136, 'What is cache memory in a CPU?', 'Memory for storing temporary files', 'Small, fast memory between CPU and RAM for frequently accessed data', 'Memory for storing passwords', 'External storage device', 'B', 'CPU cache is very fast memory that stores frequently accessed data to reduce access time.'),
(136, 'What is L1, L2, L3 cache hierarchy?', 'Network levels', 'Cache levels where L1 is fastest/smallest and L3 is slowest/largest', 'Security levels', 'Compression levels', 'B', 'Cache hierarchy provides different levels of cache with varying speed and size tradeoffs.');

-- Lesson 137: CPU Components
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(137, 'What is the ALU in a CPU?', 'A type of metal', 'Arithmetic Logic Unit - performs calculations', 'Advanced Loading Unit', 'Automatic Login Utility', 'B', 'The ALU performs arithmetic and logical operations.'),
(137, 'What is the Control Unit (CU)?', 'A remote control', 'The component that directs CPU operations', 'A cooling unit', 'A user interface', 'B', 'The Control Unit coordinates and manages CPU activities.'),
(137, 'What is the purpose of the system bus?', 'Public transportation', 'Transfers data between CPU, memory, and peripherals', 'A cooling system', 'Power distribution', 'B', 'The system bus is the pathway for data transfer between components.'),
(137, 'What are CPU cores?', 'The center of the chip', 'Independent processing units within a CPU', 'Cooling cores', 'Memory modules', 'B', 'Cores are independent processors that can execute instructions simultaneously.'),
(137, 'What is hyperthreading?', 'High-speed threading', 'Technology allowing one core to handle multiple threads', 'A type of cooling', 'A network protocol', 'B', 'Hyperthreading lets each core handle multiple threads for better efficiency.');

-- Lesson 138: CPU Memory Registers
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(138, 'What is the RAX register in x86-64?', 'A random access register', 'The 64-bit accumulator register', 'A read-only register', 'A network register', 'B', 'RAX is the 64-bit accumulator, commonly used for arithmetic results.'),
(138, 'What is the RSP register?', 'A random signal processor', 'The stack pointer register', 'A rendering register', 'A security register', 'B', 'RSP (Stack Pointer) points to the top of the stack.'),
(138, 'What is the RBP register used for?', 'Random base processing', 'Base pointer for stack frames', 'Backup processing', 'Boot partition', 'B', 'RBP (Base Pointer) typically references the base of the current stack frame.'),
(138, 'What are general-purpose registers?', 'Registers for any type of data', 'Registers that can be used for various operations', 'Registers for generals only', 'Read-only registers', 'B', 'General-purpose registers can hold various types of data for different operations.'),
(138, 'What is the FLAGS register?', 'A patriotic register', 'A register containing status bits about operations', 'A file register', 'A network status register', 'B', 'FLAGS contains bits indicating results of operations (zero, carry, overflow, etc.).');

-- Lesson 139: Fetch-Decode-Execute Cycle
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(139, 'What is the fetch stage?', 'Getting coffee', 'Retrieving the next instruction from memory', 'Fetching data from disk', 'Getting user input', 'B', 'Fetch retrieves the next instruction from memory using the instruction pointer.'),
(139, 'What happens in the decode stage?', 'Decrypting data', 'The CPU interprets what the instruction means', 'Decoding user passwords', 'Converting binary to text', 'B', 'Decode interprets the instruction to determine what operation to perform.'),
(139, 'What happens in the execute stage?', 'Running a program', 'The CPU performs the operation specified by the instruction', 'Executing a criminal', 'Starting the computer', 'B', 'Execute carries out the actual operation on the data.'),
(139, 'What is pipelining?', 'Installing pipes', 'Overlapping fetch-decode-execute stages for different instructions', 'A type of network cable', 'A cooling system', 'B', 'Pipelining allows multiple instructions to be processed simultaneously at different stages.'),
(139, 'What is clock speed measured in?', 'Miles per hour', 'Hertz (Hz) - cycles per second', 'Bytes per second', 'Watts', 'B', 'Clock speed is measured in Hz, typically GHz for modern CPUs.');

-- Lesson 140: Stack and Heap
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(140, 'What is the stack in memory?', 'A pile of papers', 'LIFO memory region for function calls and local variables', 'A type of data structure only', 'Network storage', 'B', 'The stack is a LIFO (Last In, First Out) memory region for function execution.'),
(140, 'What is the heap in memory?', 'A messy pile', 'Dynamic memory region for runtime allocation', 'A type of database', 'CPU cache', 'B', 'The heap is used for dynamic memory allocation during program execution.'),
(140, 'What is a stack overflow?', 'Too many pancakes', 'When the stack exceeds its allocated memory space', 'A popular website only', 'A network error', 'B', 'Stack overflow occurs when too much data is pushed onto the stack.'),
(140, 'How does the stack grow?', 'Upward in memory', 'Downward in memory (toward lower addresses)', 'It doesnt grow', 'Sideways', 'B', 'The stack typically grows downward toward lower memory addresses.'),
(140, 'What is stored in a stack frame?', 'Picture frames', 'Return address, parameters, and local variables', 'Only return addresses', 'Global variables', 'B', 'Stack frames contain function call information including return address and local data.');

-- Course 8, Level 29: Debugging (Lessons 141-144)

-- Lesson 141: Tracking Execution
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(141, 'What is a debugger?', 'A bug killer spray', 'A tool for examining program execution', 'A code formatter', 'A compiler', 'B', 'Debuggers allow developers to step through and examine program execution.'),
(141, 'What is a breakpoint?', 'A broken point in code', 'A marker where program execution pauses', 'An error in the program', 'A syntax error', 'B', 'Breakpoints pause execution at specific locations for inspection.'),
(141, 'What does single-stepping do?', 'Dancing', 'Executes one instruction at a time', 'Runs the whole program', 'Compiles code', 'B', 'Single-stepping executes one instruction or line, then pauses.'),
(141, 'What is a watchpoint?', 'A point on a watch', 'A breakpoint that triggers when a variable changes', 'A display feature', 'A timing mechanism', 'B', 'Watchpoints pause execution when specified memory/variable values change.'),
(141, 'What is a core dump?', 'Garbage disposal', 'A file containing memory state when a program crashes', 'A type of database', 'A backup file', 'B', 'Core dumps capture program memory state for post-mortem debugging.');

-- Lesson 142: GDB Setup
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(142, 'What is GDB?', 'Graphics Display Board', 'GNU Debugger - a program debugging tool', 'General Data Backup', 'Global Database', 'B', 'GDB (GNU Debugger) is a powerful debugging tool for C, C++, and other programs.'),
(142, 'How do you compile a program with debug symbols?', 'gcc program.c', 'gcc -g program.c', 'gcc -debug program.c', 'gcc -symbols program.c', 'B', 'The -g flag includes debug symbols in the compiled binary.'),
(142, 'How do you start GDB with a program?', 'gdb start program', 'gdb program', 'debug program', 'gdb -run program', 'B', 'Run gdb followed by the program name to start debugging.'),
(142, 'What GDB command starts program execution?', 'start', 'run or r', 'execute', 'begin', 'B', 'The run (or r) command starts program execution in GDB.'),
(142, 'What command quits GDB?', 'exit', 'quit or q', 'close', 'end', 'B', 'The quit (or q) command exits GDB.');

-- Lesson 143: Debugging Techniques
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(143, 'What GDB command sets a breakpoint at a function?', 'stop function', 'break functionname', 'halt at function', 'pause function', 'B', 'The break command sets breakpoints at functions or memory addresses.'),
(143, 'What does the GDB step command do?', 'Deletes a line of code', 'Executes one line, entering function calls', 'Closes the debugger', 'Prints all variables', 'B', 'Step executes one source line and enters function calls (unlike next which steps over).'),
(143, 'How do you examine memory at address 0x1234 in GDB?', 'print 0x1234', 'x/x 0x1234', 'show 0x1234', 'read 0x1234', 'B', 'The x (examine) command displays memory contents at a given address.'),
(143, 'What does info registers show in GDB?', 'CPU temperature', 'Current values of all CPU registers', 'List of all files', 'Network status', 'B', 'The info registers command displays the current state of CPU registers.'),
(143, 'What does the backtrace command show?', 'Previous commands', 'The call stack showing function calls', 'Deleted code', 'Memory usage', 'B', 'Backtrace (or bt) shows the current call stack.');

-- Lesson 144: Debugging Challenge
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(144, 'What is a segmentation fault?', 'A divided error', 'An error accessing memory the program is not allowed to access', 'A disk error', 'A network error', 'B', 'Segfaults occur when a program accesses memory outside its allowed regions.'),
(144, 'What is a null pointer dereference?', 'A pointer with no value', 'Attempting to access memory through a null pointer', 'A valid operation', 'A pointer declaration', 'B', 'Dereferencing null pointers causes crashes as null is not a valid memory address.'),
(144, 'What is a buffer overflow?', 'A full buffer', 'Writing data beyond allocated buffer boundaries', 'A network congestion', 'A memory upgrade', 'B', 'Buffer overflows write data past buffer limits, potentially overwriting other data.'),
(144, 'What is a memory leak?', 'RAM physically leaking', 'Allocated memory that is never freed', 'Slow memory', 'Memory that gets wet', 'B', 'Memory leaks occur when allocated memory is not properly freed.'),
(144, 'What tool helps detect memory issues?', 'A magnifying glass', 'Valgrind', 'A calculator', 'A text editor', 'B', 'Valgrind is a tool for detecting memory leaks and other memory errors.');

-- Course 8, Level 30: Advanced Storage (Lessons 145-147)

-- Lesson 145: Advanced Storage Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(145, 'What is NVMe?', 'A new video format', 'Non-Volatile Memory Express - high-speed storage protocol', 'Network Virtual Memory Extension', 'Normal Volume Management', 'B', 'NVMe is a high-performance storage protocol designed for SSDs.'),
(145, 'What is the difference between SSD and HDD?', 'Same thing different name', 'SSD uses flash memory with no moving parts; HDD uses spinning disks', 'HDD is faster', 'SSD is magnetic', 'B', 'SSDs use flash memory for faster access; HDDs use spinning magnetic platters.'),
(145, 'What is SAN?', 'A name', 'Storage Area Network - dedicated high-speed network for storage', 'Server Access Node', 'System Administration Network', 'B', 'SANs provide block-level storage access over dedicated networks.'),
(145, 'What is NAS?', 'A space agency', 'Network Attached Storage - file-level storage over network', 'New Access System', 'Node Allocation Service', 'B', 'NAS devices provide file-level storage access over standard networks.'),
(145, 'What is the main advantage of SSD over HDD?', 'Larger capacity', 'Faster read/write speeds and no moving parts', 'Cheaper price', 'Better for backups', 'B', 'SSDs offer faster speeds and better durability due to no mechanical parts.');

-- Lesson 146: RAID Explained
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(146, 'What does RAID stand for?', 'Random Access Internal Drive', 'Redundant Array of Independent Disks', 'Remote Access Information Database', 'Rapid Application Integration Device', 'B', 'RAID (Redundant Array of Independent Disks) combines multiple disks for performance and/or redundancy.'),
(146, 'Which RAID level provides striping only (no redundancy)?', 'RAID 1', 'RAID 5', 'RAID 0', 'RAID 6', 'C', 'RAID 0 stripes data across disks for performance but offers no redundancy.'),
(146, 'Which RAID level mirrors data across two disks?', 'RAID 0', 'RAID 1', 'RAID 5', 'RAID 0+1', 'B', 'RAID 1 creates an exact copy (mirror) of data on two or more disks.'),
(146, 'How many disks can fail in RAID 5 without data loss?', '0', '1', '2', '3', 'B', 'RAID 5 can survive one disk failure using distributed parity.'),
(146, 'What is RAID 10?', 'RAID 1 with 10 disks', 'A combination of mirroring (RAID 1) and striping (RAID 0)', 'RAID version 10', 'The fastest RAID level', 'B', 'RAID 10 (or 1+0) stripes data across mirrored pairs, providing both speed and redundancy.');

-- Lesson 147: Cloud Storage Mechanisms
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(147, 'What is object storage?', 'Storage for physical objects', 'Storage that manages data as objects with metadata', 'Storage for small items', 'A type of database', 'B', 'Object storage stores data as objects with unique IDs and metadata.'),
(147, 'What is Amazon S3?', 'A type of car', 'Simple Storage Service - cloud object storage', 'Server Software System', 'Storage Security Standard', 'B', 'S3 is Amazon Web Services popular object storage service.'),
(147, 'What is block storage in cloud?', 'Storage that is blocked', 'Raw storage volumes attached to cloud instances', 'Storage for blockchain', 'Blocked network storage', 'B', 'Block storage provides raw storage volumes like virtual hard drives.'),
(147, 'What is a storage bucket?', 'A physical bucket', 'A container for objects in object storage', 'A backup device', 'A storage limitation', 'B', 'Buckets are containers that organize objects in services like S3.'),
(147, 'What is data replication in cloud storage?', 'Copying data manually', 'Automatic copying of data across multiple locations', 'Deleting duplicate data', 'Compressing data', 'B', 'Cloud replication automatically copies data across regions for redundancy.');

-- Course 8, Level 31: Containers (Lessons 148-151)

-- Lesson 148: Container Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(148, 'What is containerization?', 'Putting things in containers', 'Packaging applications with dependencies in isolated environments', 'A shipping method', 'A compression technique', 'B', 'Containerization packages applications and dependencies into isolated, portable units.'),
(148, 'What makes containers lightweight?', 'They weigh less', 'They share the host OS kernel', 'They use compression', 'They have no data', 'B', 'Containers share the host kernel, making them lighter than full VMs.'),
(148, 'What is container isolation?', 'Containers are lonely', 'Containers run in separate namespaces from each other', 'Containers are encrypted', 'Containers are on different servers', 'B', 'Containers use namespaces and cgroups for process and resource isolation.'),
(148, 'What problem do containers solve?', 'Hardware failures', 'Works on my machine - consistent environments across systems', 'Network security', 'Data storage', 'B', 'Containers ensure applications run consistently across different environments.'),
(148, 'What is a container registry?', 'A container registration form', 'A repository for storing and distributing container images', 'A list of running containers', 'A container log', 'B', 'Registries like Docker Hub store container images for distribution.');

-- Lesson 149: Containers vs Virtualization
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(149, 'How do containers differ from virtual machines?', 'Containers are identical to VMs', 'Containers share the host OS kernel; VMs have their own OS', 'VMs are faster than containers', 'Containers require more resources', 'B', 'Containers are more lightweight because they share the host kernel, unlike VMs which include a full OS.'),
(149, 'What is a hypervisor?', 'A super visor', 'Software that creates and manages virtual machines', 'A container runtime', 'A network manager', 'B', 'Hypervisors like VMware or KVM create and manage VMs.'),
(149, 'Which starts faster: containers or VMs?', 'VMs are faster', 'Containers start faster (seconds vs minutes)', 'They are the same', 'Neither starts fast', 'B', 'Containers start in seconds while VMs may take minutes to boot.'),
(149, 'When would you choose VMs over containers?', 'Always', 'When you need different operating systems or stronger isolation', 'Never', 'For web applications', 'B', 'VMs are better when you need different OSes or maximum isolation.'),
(149, 'What is the resource overhead comparison?', 'VMs use less resources', 'Containers use significantly less resources than VMs', 'They use the same', 'Containers use more', 'B', 'Containers have minimal overhead compared to VMs full OS requirements.');

-- Lesson 150: Docker Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(150, 'What is Docker?', 'A type of virtual machine', 'A platform for developing and running containers', 'A programming language', 'An operating system', 'B', 'Docker is a platform that uses containerization to package applications with their dependencies.'),
(150, 'What is a Docker image?', 'A picture of a container', 'A read-only template used to create containers', 'A type of virtual disk', 'A backup of the host system', 'B', 'Docker images are templates containing the application, libraries, and configuration to create containers.'),
(150, 'What is a Dockerfile?', 'A log file for Docker', 'A text file with instructions to build a Docker image', 'A container configuration', 'A Docker backup file', 'B', 'A Dockerfile contains the instructions (FROM, RUN, COPY, etc.) to build a Docker image.'),
(150, 'What command runs a Docker container?', 'docker start', 'docker run', 'docker execute', 'docker begin', 'B', 'docker run creates and starts a container from an image.'),
(150, 'What is Docker Hub?', 'A USB hub for Docker', 'A public registry for Docker images', 'A Docker management tool', 'A Docker network', 'B', 'Docker Hub is the default public registry for sharing Docker images.');

-- Lesson 151: Docker CLI Basics
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(151, 'What does docker ps show?', 'Docker processes', 'Running containers', 'Docker images', 'Docker networks', 'B', 'docker ps lists currently running containers.'),
(151, 'What does docker images show?', 'Pictures in Docker', 'List of locally stored Docker images', 'Running containers', 'Docker configuration', 'B', 'docker images lists all images stored locally.'),
(151, 'How do you stop a running container?', 'docker kill', 'docker stop container_id', 'docker end', 'docker terminate', 'B', 'docker stop gracefully stops a running container.'),
(151, 'What does docker pull do?', 'Pulls a rope', 'Downloads an image from a registry', 'Removes a container', 'Pushes an image', 'B', 'docker pull downloads images from registries like Docker Hub.'),
(151, 'How do you remove a Docker image?', 'docker delete', 'docker rmi image_name', 'docker remove', 'docker destroy', 'B', 'docker rmi (remove image) deletes Docker images.');
