-- Quiz Questions for Courses 7-10
-- Course 7: Servers & Services (35 lessons: 101-135)
-- Course 8: Advanced Hardware (16 lessons: 136-151)
-- Course 9: Security Concepts (52 lessons: 152-203)
-- Course 10: Network Infiltration (23 lessons: 204-226)

USE securitylab;

-- Course 7, Level 22: Server Fundamentals (Lessons 101-106)

-- Lesson 101: Introduction to Servers
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(101, 'What is the primary role of a server in a client-server architecture?', 'To display graphics', 'To respond to client requests and provide resources', 'To store games', 'To connect monitors', 'B', 'Servers are designed to receive requests from clients and provide resources, data, or services in response.'),
(101, 'Which of these is NOT a common characteristic of server hardware?', 'Redundant power supplies', 'ECC memory', 'Gaming graphics card', 'Hot-swappable drives', 'C', 'Servers prioritize reliability and uptime over graphics performance, so gaming GPUs are not typical server components.'),
(101, 'What does 24/7 operation mean for servers?', 'They only work during business hours', 'They are designed to run continuously without shutdowns', 'They require daily restarts', 'They work 24 days, 7 hours', 'B', 'Servers are designed to operate continuously, providing services around the clock.'),
(101, 'What is rack-mounted server hardware?', 'Servers attached to a bicycle rack', 'Standardized server form factor that fits in equipment racks', 'Portable server units', 'Servers without cases', 'B', 'Rack-mounted servers follow standard sizes (1U, 2U, etc.) to fit in equipment racks in data centers.'),
(101, 'What does IPMI/iLO/iDRAC provide for servers?', 'Faster internet', 'Out-of-band management for remote administration', 'Better graphics', 'Wireless connectivity', 'B', 'These management interfaces allow administrators to remotely control servers even when the OS is not running.');

-- Lesson 102: Server Hardware
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(102, 'What is ECC memory and why is it used in servers?', 'Extra Cooling Component for temperature', 'Error-Correcting Code memory that detects and fixes memory errors', 'Enhanced Color Calibration for displays', 'External Connection Card for networking', 'B', 'ECC memory can detect and correct common memory errors, improving server reliability.'),
(102, 'What does hot-swappable mean for server components?', 'Components that run very hot', 'Components can be replaced without shutting down the server', 'Components that are fire resistant', 'Components that swap colors', 'B', 'Hot-swappable components can be removed and replaced while the server continues operating.'),
(102, 'What CPU architectures are common in servers?', 'Intel Core i3 and AMD Ryzen 3', 'Intel Xeon and AMD EPYC', 'Apple M1 only', 'Qualcomm Snapdragon', 'B', 'Intel Xeon and AMD EPYC are server-grade processors designed for high reliability and performance.'),
(102, 'What is a 1U server?', 'A server that costs $1', 'A server that is 1 rack unit (1.75 inches) tall', 'A server with 1 USB port', 'A single-user server', 'B', '1U refers to 1 rack unit, a standard height measurement for rack-mounted equipment (1.75 inches or 44.45mm).'),
(102, 'Why do servers often have multiple network interfaces?', 'For redundancy and handling high network traffic', 'To play online games better', 'Because one interface is never enough', 'For aesthetic purposes', 'A', 'Multiple NICs provide redundancy and can handle higher network throughput for busy servers.');

-- Lesson 103: Server Software
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(103, 'What is a server operating system?', 'Any OS can be a server OS', 'An OS optimized for running server applications and handling multiple connections', 'A gaming operating system', 'An OS without a GUI', 'B', 'Server operating systems are optimized for stability, security, and handling many concurrent connections.'),
(103, 'Which is a common server operating system?', 'Windows 11 Home', 'Ubuntu Server', 'Android', 'iOS', 'B', 'Ubuntu Server is a popular Linux-based server operating system.'),
(103, 'What is a daemon in server terminology?', 'A malicious program', 'A background process that runs continuously to handle requests', 'A type of virus', 'A user interface element', 'B', 'Daemons are background processes that run continuously to provide services.'),
(103, 'Why do many servers run Linux?', 'Because it has better games', 'Stability, security, low cost, and flexibility', 'Because Windows is not available', 'For the graphical interface', 'B', 'Linux is popular for servers due to its stability, security, open-source nature, and flexibility.'),
(103, 'What is a headless server?', 'A server without a CPU', 'A server without a monitor, keyboard, or mouse attached', 'A server without storage', 'A broken server', 'B', 'Headless servers operate without attached peripherals and are managed remotely.');

-- Lesson 104: Types of Servers
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(104, 'What does a file server do?', 'Plays music files', 'Stores and manages files accessible over a network', 'Deletes files automatically', 'Converts file formats', 'B', 'File servers provide centralized file storage and sharing across a network.'),
(104, 'What is an application server?', 'A server that only runs one application', 'A server that hosts and runs business applications', 'A mobile app store', 'A server for games only', 'B', 'Application servers host business logic and applications that clients access.'),
(104, 'What does a proxy server do?', 'Acts as an intermediary between clients and other servers', 'Stores passwords', 'Prints documents', 'Creates backups', 'A', 'Proxy servers forward requests between clients and servers, often providing caching and security.'),
(104, 'What is a print server?', 'A server that prints money', 'A server that manages network printers', 'A server that displays graphics', 'A server for 3D printing only', 'B', 'Print servers manage and queue print jobs for network printers.'),
(104, 'What does a virtualization server do?', 'Makes things invisible', 'Hosts multiple virtual machines on single hardware', 'Only runs virtual reality games', 'Converts physical servers to software', 'B', 'Virtualization servers run hypervisors to host multiple virtual machines.');

-- Lesson 105: Server Challenges
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(105, 'What is server uptime?', 'The time it takes to start a server', 'The percentage of time a server is operational and available', 'The speed of the server', 'The height of the server rack', 'B', 'Uptime measures how long a server has been running without interruption.'),
(105, 'What is a DDoS attack on a server?', 'A software update', 'Distributed Denial of Service - overwhelming a server with traffic', 'A type of backup', 'A security patch', 'B', 'DDoS attacks flood servers with traffic to make them unavailable.'),
(105, 'What is server load balancing?', 'Physically balancing servers on racks', 'Distributing traffic across multiple servers', 'Measuring server weight', 'Balancing server budgets', 'B', 'Load balancing distributes incoming requests across multiple servers for better performance.'),
(105, 'What is server failover?', 'When a server crashes permanently', 'Automatic switching to a backup server when the primary fails', 'Turning off servers at night', 'Server maintenance', 'B', 'Failover automatically redirects to backup servers to maintain availability.'),
(105, 'Why is cooling important for servers?', 'To prevent overheating and hardware failure', 'To make them quieter', 'Servers dont generate heat', 'For aesthetic purposes', 'A', 'Servers generate significant heat and require proper cooling to prevent damage.');

-- Lesson 106: Server Connectivity
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(106, 'What is bandwidth in server networking?', 'The width of network cables', 'The maximum data transfer rate of a network connection', 'The number of servers', 'The size of the server room', 'B', 'Bandwidth measures the maximum data transfer capacity of a network connection.'),
(106, 'What is server latency?', 'How late a server arrives', 'The delay between a request and response', 'The age of a server', 'Server temperature', 'B', 'Latency is the time delay between sending a request and receiving a response.'),
(106, 'What is a network backbone?', 'The physical structure of a server', 'The main high-capacity network infrastructure', 'A backup network cable', 'The server operating system', 'B', 'The backbone is the high-capacity core network infrastructure connecting major nodes.'),
(106, 'What is a data center?', 'A place that stores data on paper', 'A facility housing servers and network infrastructure', 'A mobile data unit', 'A personal computer room', 'B', 'Data centers are facilities designed to house servers, storage, and network equipment.'),
(106, 'What is colocation hosting?', 'Hosting servers at home', 'Renting space in a data center for your own servers', 'Hosting multiple websites on one server', 'A type of cloud hosting', 'B', 'Colocation means placing your servers in a third-party data center facility.');

-- Course 7, Level 23: Web Servers (Lessons 107-112)

-- Lesson 107: Web Server Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(107, 'What is the primary function of a web server?', 'To create web pages', 'To serve web content to clients via HTTP/HTTPS', 'To browse the internet', 'To store emails', 'B', 'Web servers receive HTTP requests and respond with web content (HTML, CSS, JS, images, etc.).'),
(107, 'Which port does HTTP typically use?', '22', '443', '80', '3306', 'C', 'HTTP uses port 80 by default, while HTTPS uses port 443.'),
(107, 'What is the difference between Apache and Nginx?', 'They are the same software', 'Both are web servers but have different architectures and configurations', 'Apache is for email, Nginx is for web', 'Nginx is older than Apache', 'B', 'Both Apache and Nginx are popular web servers with different approaches to handling requests.'),
(107, 'What does a reverse proxy do?', 'Blocks all incoming requests', 'Sits in front of web servers and forwards client requests', 'Creates backup copies of websites', 'Reverses the direction of internet traffic', 'B', 'A reverse proxy receives client requests and forwards them to backend servers, providing load balancing and security.'),
(107, 'What is a virtual host in web server configuration?', 'A fake server that does not exist', 'Allows one web server to host multiple websites', 'A server running in a virtual machine', 'A temporary server for testing', 'B', 'Virtual hosts allow a single web server to serve multiple domains or websites.');

-- Lesson 108: What Are Web Servers
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(108, 'What does HTTP stand for?', 'High Transfer Text Protocol', 'HyperText Transfer Protocol', 'Home Text Transport Protocol', 'Hyper Transport Text Process', 'B', 'HTTP (HyperText Transfer Protocol) is the foundation of data communication on the web.'),
(108, 'What is the role of HTTPS?', 'To make websites load faster', 'To provide encrypted communication between client and server', 'To host multiple websites', 'To store passwords', 'B', 'HTTPS adds TLS/SSL encryption to HTTP for secure communication.'),
(108, 'Which web server has the largest market share?', 'IIS', 'Nginx', 'Apache', 'Lighttpd', 'C', 'Apache has historically held the largest market share among web servers.'),
(108, 'What is a static website?', 'A website that never changes content', 'A website with pre-built HTML files served directly', 'A website that doesnt move', 'A website without images', 'B', 'Static websites serve pre-built files without server-side processing.'),
(108, 'What is a dynamic website?', 'A website with animations', 'A website that generates content on-the-fly using server-side code', 'A website that moves around', 'A website with videos', 'B', 'Dynamic websites generate content using server-side programming and databases.');

-- Lesson 109: How Web Servers Work
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(109, 'What is the HTTP request-response cycle?', 'A circular website design', 'Client sends request, server processes and sends response', 'A way to restart servers', 'A backup mechanism', 'B', 'The HTTP cycle involves a client request followed by a server response.'),
(109, 'What does GET request do?', 'Creates new data', 'Retrieves data from the server', 'Deletes data', 'Updates existing data', 'B', 'GET requests retrieve data from a specified resource.'),
(109, 'What does POST request do?', 'Retrieves data', 'Submits data to be processed by the server', 'Deletes resources', 'Lists all files', 'B', 'POST requests submit data to the server for processing.'),
(109, 'What is HTTP status code 200?', 'Error occurred', 'OK - Request succeeded', 'Not found', 'Server error', 'B', 'HTTP 200 indicates the request was successful.'),
(109, 'What is HTTP status code 404?', 'Success', 'Redirect', 'Not Found - Resource doesnt exist', 'Server error', 'C', 'HTTP 404 indicates the requested resource was not found.');

-- Lesson 110: Web Server Analytics
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(110, 'What are web server access logs?', 'Login credentials', 'Records of all requests made to the web server', 'Error messages only', 'Configuration files', 'B', 'Access logs record every request made to the server including IP, time, URL, and status.'),
(110, 'What information is typically in a web server log entry?', 'User passwords', 'IP address, timestamp, URL requested, status code', 'Credit card numbers', 'Personal emails', 'B', 'Log entries typically contain client IP, timestamp, request details, and response status.'),
(110, 'What is a web analytics tool?', 'A website builder', 'Software that analyzes website traffic and user behavior', 'A server monitoring tool only', 'A code editor', 'B', 'Web analytics tools track and report website traffic and user interactions.'),
(110, 'What is a unique visitor in analytics?', 'A visitor who is unusual', 'A distinct user counted once regardless of multiple visits', 'The first visitor ever', 'A visitor from a unique country', 'B', 'Unique visitors are counted once per time period regardless of how many times they visit.'),
(110, 'What is bounce rate?', 'Server restart rate', 'Percentage of visitors who leave after viewing only one page', 'Network error rate', 'Email return rate', 'B', 'Bounce rate measures visitors who leave without interacting further.');

-- Lesson 111: Web Server Errors
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(111, 'What does HTTP 500 error indicate?', 'Page not found', 'Internal Server Error', 'Successful request', 'Redirect', 'B', 'HTTP 500 indicates an internal server error occurred.'),
(111, 'What causes a 503 Service Unavailable error?', 'Wrong password', 'Server is temporarily unable to handle the request', 'File not found', 'Invalid URL', 'B', 'HTTP 503 means the server is temporarily unavailable, often due to maintenance or overload.'),
(111, 'What does HTTP 403 Forbidden mean?', 'Page not found', 'Server understands request but refuses to authorize it', 'Successful login', 'Redirect to new page', 'B', 'HTTP 403 means access is forbidden even with authentication.'),
(111, 'What is HTTP 301?', 'Permanent redirect', 'Not found', 'Server error', 'Unauthorized', 'A', 'HTTP 301 indicates a permanent redirect to a new URL.'),
(111, 'What does HTTP 401 Unauthorized indicate?', 'Page moved', 'Authentication is required or has failed', 'Success', 'Server maintenance', 'B', 'HTTP 401 means valid authentication credentials are required.');

-- Lesson 112: Web Server Configuration
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(112, 'What is the Apache configuration file typically named?', 'apache.txt', 'httpd.conf or apache2.conf', 'config.xml', 'settings.ini', 'B', 'Apache uses httpd.conf or apache2.conf depending on the system.'),
(112, 'What is the Nginx configuration file location?', '/var/log/nginx', '/etc/nginx/nginx.conf', '/home/nginx/config', '/opt/nginx/settings', 'B', 'Nginx configuration is typically in /etc/nginx/nginx.conf.'),
(112, 'What is a DocumentRoot in Apache?', 'The root user account', 'The directory where website files are served from', 'The main configuration file', 'The log directory', 'B', 'DocumentRoot specifies the directory containing the website files.'),
(112, 'What does the Listen directive do?', 'Listens for user input', 'Specifies which port the web server listens on', 'Monitors log files', 'Records audio', 'B', 'The Listen directive tells the web server which port to accept connections on.'),
(112, 'What is mod_rewrite in Apache?', 'A code modification tool', 'A module for URL rewriting and redirection', 'A file editor', 'A security scanner', 'B', 'mod_rewrite enables URL manipulation and redirection rules.');

-- Course 7, Level 24: Database Servers (Lessons 113-116)

-- Lesson 113: Database Server Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(113, 'What is a database server?', 'A server that stores physical files only', 'A server that manages databases and handles queries', 'A server for storing emails', 'A server for playing games', 'B', 'Database servers manage databases, handle client queries, and ensure data integrity and security.'),
(113, 'What is SQL?', 'Structured Query Language for database operations', 'Server Quality Level', 'Standard Queue Logic', 'System Query Loader', 'A', 'SQL (Structured Query Language) is used to create, read, update, and delete data in relational databases.'),
(113, 'Which is NOT a common database management system?', 'MySQL', 'PostgreSQL', 'Microsoft Word', 'MongoDB', 'C', 'Microsoft Word is a word processor, not a database management system.'),
(113, 'What is database indexing?', 'Adding page numbers to a database', 'Creating data structures to speed up query performance', 'Counting all rows in a table', 'Backing up the database', 'B', 'Indexes are data structures that improve query speed by allowing faster data lookup.'),
(113, 'What does ACID stand for in databases?', 'Atomicity, Consistency, Isolation, Durability', 'Always Create Index Data', 'Automatic Computer Information Database', 'Access Control In Databases', 'A', 'ACID properties ensure reliable database transactions.');

-- Lesson 114: Database Logic
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(114, 'What is a primary key in a database?', 'The most important data', 'A unique identifier for each record in a table', 'The first column', 'A password', 'B', 'A primary key uniquely identifies each record in a database table.'),
(114, 'What is a foreign key?', 'A key from another country', 'A field that links to a primary key in another table', 'An encrypted key', 'A backup key', 'B', 'Foreign keys create relationships between tables by referencing primary keys.'),
(114, 'What is database normalization?', 'Making data normal', 'Organizing data to reduce redundancy and improve integrity', 'Sorting data alphabetically', 'Deleting duplicate databases', 'B', 'Normalization structures data to minimize redundancy and dependency issues.'),
(114, 'What is a JOIN in SQL?', 'Connecting two servers', 'Combining rows from multiple tables based on related columns', 'Adding new rows', 'Deleting tables', 'B', 'JOIN operations combine data from multiple tables based on relationships.'),
(114, 'What is a database transaction?', 'A financial operation', 'A unit of work that is either completely done or not done at all', 'A data transfer', 'A backup process', 'B', 'Transactions are atomic units of work ensuring data consistency.');

-- Lesson 115: SQL Server Setup
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(115, 'What is the default port for MySQL?', '80', '443', '3306', '22', 'C', 'MySQL uses port 3306 by default.'),
(115, 'What is the default port for PostgreSQL?', '3306', '5432', '1433', '27017', 'B', 'PostgreSQL uses port 5432 by default.'),
(115, 'What command creates a new database in MySQL?', 'NEW DATABASE', 'CREATE DATABASE dbname', 'MAKE DATABASE', 'BUILD DATABASE', 'B', 'CREATE DATABASE is the SQL command to create a new database.'),
(115, 'What is a database schema?', 'A database password', 'The structure and organization of a database', 'A type of database', 'A backup file', 'B', 'A schema defines the structure, tables, relationships, and constraints of a database.'),
(115, 'What does GRANT command do in SQL?', 'Creates a new database', 'Gives permissions to users', 'Deletes data', 'Backs up the database', 'B', 'GRANT assigns privileges to database users.');

-- Lesson 116: Database Admin Tools
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(116, 'What is phpMyAdmin?', 'A PHP framework', 'A web-based MySQL administration tool', 'A PHP compiler', 'A web server', 'B', 'phpMyAdmin is a popular web interface for managing MySQL databases.'),
(116, 'What is MySQL Workbench?', 'A physical workbench', 'A visual database design and administration tool', 'A MySQL plugin', 'A command-line tool only', 'B', 'MySQL Workbench is a visual tool for database design, development, and administration.'),
(116, 'What does a database backup do?', 'Slows down the database', 'Creates a copy of database data for recovery', 'Deletes old data', 'Encrypts the database', 'B', 'Backups create copies of data that can be restored if needed.'),
(116, 'What is database replication?', 'Copying the database software', 'Maintaining copies of data on multiple servers', 'Deleting duplicate records', 'Compressing the database', 'B', 'Replication maintains synchronized copies of data across multiple servers.'),
(116, 'What is a stored procedure?', 'A procedure for storing data', 'Pre-compiled SQL code stored in the database', 'A backup method', 'A type of index', 'B', 'Stored procedures are saved SQL code that can be executed repeatedly.');

-- Course 7, Level 25: DNS Servers (Lessons 117-122)

-- Lesson 117: DNS Server Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(117, 'What does DNS stand for?', 'Data Network System', 'Domain Name System', 'Digital Naming Service', 'Dynamic Network Security', 'B', 'DNS (Domain Name System) translates domain names to IP addresses.'),
(117, 'What DNS record type maps a domain to an IPv4 address?', 'MX', 'AAAA', 'A', 'CNAME', 'C', 'A records map domain names to IPv4 addresses.'),
(117, 'What is a recursive DNS resolver?', 'A DNS server that only responds with cached data', 'A DNS server that queries other servers on behalf of the client', 'A DNS server that deletes records', 'A server that reverses DNS lookups', 'B', 'Recursive resolvers handle the entire DNS lookup process for clients, querying multiple servers if needed.'),
(117, 'What is DNSSEC?', 'DNS Security Extensions that add cryptographic signatures', 'DNS Encryption Standard', 'Domain Name Security Certificate', 'Dynamic Name System Enhanced Compression', 'A', 'DNSSEC adds digital signatures to DNS records to prevent tampering and spoofing.'),
(117, 'What is DNS over HTTPS (DoH)?', 'A new domain extension', 'DNS queries encrypted over HTTPS for privacy', 'A protocol for hosting websites', 'A database for storing domains', 'B', 'DoH encrypts DNS queries using HTTPS, preventing eavesdropping on DNS traffic.');

-- Lesson 118: DNS Theory vs Practice
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(118, 'What is the DNS hierarchy?', 'A ranking of DNS servers', 'The tree structure from root to TLD to domain', 'A list of all domains', 'DNS server priorities', 'B', 'DNS is organized hierarchically from root servers to TLDs to individual domains.'),
(118, 'What is a TLD?', 'Total Load Distribution', 'Top-Level Domain like .com, .org, .net', 'Temporary Link Device', 'Trusted Login Directory', 'B', 'TLDs are the highest level domains in the DNS hierarchy.'),
(118, 'What are root DNS servers?', 'Servers in tree roots', 'The top-level DNS servers that direct queries to TLD servers', 'Local DNS caches', 'Personal DNS servers', 'B', 'Root servers are the starting point for DNS resolution.'),
(118, 'What is DNS caching?', 'Storing DNS records temporarily to speed up lookups', 'Hiding DNS servers', 'Encrypting DNS data', 'Deleting DNS records', 'A', 'DNS caching stores resolved queries temporarily to avoid repeated lookups.'),
(118, 'What is TTL in DNS?', 'Total Transfer Limit', 'Time To Live - how long a DNS record is cached', 'Top Transfer Layer', 'Trusted Token Login', 'B', 'TTL specifies how long DNS records should be cached.');

-- Lesson 119: Personal DNS Server
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(119, 'What is BIND?', 'A rope knot', 'Berkeley Internet Name Domain - popular DNS server software', 'A type of DNS record', 'A network cable', 'B', 'BIND is the most widely used DNS server software.'),
(119, 'What is dnsmasq?', 'A DNS mask for anonymity', 'A lightweight DNS forwarder and DHCP server', 'A DNS encryption tool', 'A domain registration service', 'B', 'dnsmasq is a lightweight DNS/DHCP server often used in home networks.'),
(119, 'Why run your own DNS server?', 'Its required by law', 'For privacy, custom filtering, and faster local resolution', 'To create new domains', 'To hack other servers', 'B', 'Personal DNS servers offer privacy, ad blocking, and faster local lookups.'),
(119, 'What is Pi-hole?', 'A circular opening', 'A network-level ad blocker using DNS', 'A Raspberry Pi case', 'A security vulnerability', 'B', 'Pi-hole is a DNS-based ad blocker that runs on Raspberry Pi or other hardware.'),
(119, 'What is Unbound?', 'Not restricted', 'A validating, recursive, and caching DNS resolver', 'An unregistered domain', 'A DNS attack', 'B', 'Unbound is a secure DNS resolver with DNSSEC validation.');

-- Lesson 120: DNS Security
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(120, 'What is DNS spoofing?', 'Creating fake domains', 'Providing false DNS responses to redirect traffic', 'Encrypting DNS queries', 'Speeding up DNS', 'B', 'DNS spoofing returns fake DNS responses to direct users to malicious sites.'),
(120, 'What is DNS cache poisoning?', 'Corrupting DNS software', 'Inserting false records into a DNS cache', 'Cleaning the DNS cache', 'Encrypting cached DNS data', 'B', 'Cache poisoning inserts malicious DNS records into a resolver cache.'),
(120, 'What is DNS amplification attack?', 'Making DNS faster', 'Using DNS servers to amplify DDoS attack traffic', 'Increasing DNS capacity', 'A DNS backup method', 'B', 'DNS amplification exploits DNS servers to generate large volumes of attack traffic.'),
(120, 'How does DNSSEC protect DNS?', 'By encrypting all DNS traffic', 'By digitally signing DNS records to verify authenticity', 'By hiding DNS servers', 'By blocking DNS queries', 'B', 'DNSSEC uses digital signatures to verify DNS record integrity.'),
(120, 'What is DNS tunneling?', 'A type of VPN', 'Encoding data in DNS queries to bypass firewalls', 'A DNS backup method', 'A DNS speedup technique', 'B', 'DNS tunneling hides data in DNS traffic to evade security controls.');

-- Lesson 121: DNS over HTTPS/TLS
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(121, 'What is DNS over TLS (DoT)?', 'DNS using the .TLS domain', 'DNS queries encrypted using TLS protocol', 'A new TLD', 'DNS over telephone lines', 'B', 'DoT encrypts DNS queries using TLS on port 853.'),
(121, 'What port does DNS over TLS use?', '53', '443', '853', '80', 'C', 'DNS over TLS uses port 853.'),
(121, 'What port does DNS over HTTPS use?', '53', '443', '853', '8080', 'B', 'DoH uses port 443, the standard HTTPS port.'),
(121, 'What is the main benefit of encrypted DNS?', 'Faster queries', 'Privacy - prevents eavesdropping on DNS queries', 'Shorter domain names', 'Free domains', 'B', 'Encrypted DNS prevents ISPs and others from seeing DNS queries.'),
(121, 'Which browser supports DoH?', 'Internet Explorer 6', 'Firefox, Chrome, Edge', 'Netscape Navigator', 'Lynx', 'B', 'Modern browsers like Firefox, Chrome, and Edge support DNS over HTTPS.');

-- Lesson 122: DNSSEC
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(122, 'What does DNSSEC add to DNS?', 'Encryption of all data', 'Digital signatures to verify record authenticity', 'Faster lookups', 'More domains', 'B', 'DNSSEC adds cryptographic signatures to verify DNS responses.'),
(122, 'What is a DNSKEY record?', 'A password for DNS', 'A public key used to verify DNSSEC signatures', 'A key to unlock domains', 'A DNS configuration key', 'B', 'DNSKEY records contain public keys for verifying DNSSEC signatures.'),
(122, 'What is an RRSIG record?', 'A record signature containing the digital signature', 'A redirect record', 'A resource reservation', 'A root server indicator', 'A', 'RRSIG records contain digital signatures for DNS records.'),
(122, 'What is the DS record in DNSSEC?', 'Domain Security', 'Delegation Signer - links parent and child zones', 'Data Storage', 'DNS Server', 'B', 'DS records establish a chain of trust between DNS zones.'),
(122, 'What does DNSSEC NOT provide?', 'Record authenticity', 'Data integrity', 'Encryption of DNS data', 'Protection against spoofing', 'C', 'DNSSEC provides authenticity and integrity but not encryption.');

-- Course 7, Level 26: Log Servers (Lessons 123-128)

-- Lesson 123: Log Server Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(123, 'What is the primary purpose of a log server?', 'To store game statistics', 'To collect, store, and analyze logs from multiple systems', 'To block malicious traffic', 'To send emails', 'B', 'Log servers aggregate logs from various sources for centralized analysis and monitoring.'),
(123, 'What does SIEM stand for?', 'Security Information and Event Management', 'System Integration and Enterprise Monitoring', 'Server Information Exchange Module', 'Secure Internet Email Manager', 'A', 'SIEM systems combine security information management with event management for comprehensive monitoring.'),
(123, 'Which is a popular open-source log management solution?', 'Microsoft Office', 'ELK Stack (Elasticsearch, Logstash, Kibana)', 'Adobe Photoshop', 'VMware vSphere', 'B', 'The ELK Stack is widely used for log aggregation, processing, and visualization.'),
(123, 'Why is log analysis important for security?', 'To make logs look pretty', 'To detect anomalies, investigate incidents, and maintain compliance', 'To slow down the network', 'To store more data', 'B', 'Log analysis helps identify security incidents, track user activity, and meet regulatory requirements.'),
(123, 'What is log rotation?', 'Spinning log files in a circle', 'Automatically archiving or deleting old logs to manage disk space', 'Converting logs to a different format', 'Sharing logs with other servers', 'B', 'Log rotation prevents log files from consuming all disk space by archiving or removing old entries.');

-- Lesson 124: Basic Log Server Setup
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(124, 'What is syslog?', 'A system blogger', 'A standard protocol for sending log messages', 'A log file type', 'A system error', 'B', 'Syslog is a standard protocol for transmitting log messages across networks.'),
(124, 'What port does syslog typically use?', '80', '514', '443', '22', 'B', 'Syslog traditionally uses UDP port 514.'),
(124, 'What is rsyslog?', 'A random syslog', 'An enhanced syslog implementation with additional features', 'A remote syslog only', 'A Windows log service', 'B', 'rsyslog is a powerful syslog implementation with filtering and output options.'),
(124, 'What format do syslog messages follow?', 'XML format', 'Priority, timestamp, hostname, message', 'JSON only', 'Binary format', 'B', 'Syslog messages include priority, timestamp, hostname, and the message.'),
(124, 'What is log forwarding?', 'Sending logs back in time', 'Sending logs from one system to a central log server', 'Deleting old logs', 'Compressing logs', 'B', 'Log forwarding sends logs from various systems to a central collection point.');

-- Lesson 125: SIM vs SEM vs SIEM
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(125, 'What does SIM stand for in security?', 'Security Information Management', 'System Integration Module', 'Secure Internet Monitor', 'Server Information Manager', 'A', 'SIM (Security Information Management) focuses on log collection and storage.'),
(125, 'What does SEM stand for?', 'Security Event Management', 'System Error Monitor', 'Secure Email Manager', 'Server Event Module', 'A', 'SEM (Security Event Management) focuses on real-time event correlation and alerting.'),
(125, 'What is SIEM?', 'A combination of SIM and SEM capabilities', 'A type of firewall', 'A network protocol', 'An encryption standard', 'A', 'SIEM combines log management (SIM) with real-time monitoring (SEM).'),
(125, 'Which is a commercial SIEM solution?', 'Notepad', 'Splunk', 'Microsoft Word', 'Adobe Reader', 'B', 'Splunk is a leading commercial SIEM and log analysis platform.'),
(125, 'What is correlation in SIEM?', 'Matching similar names', 'Linking related events to identify security incidents', 'Sorting logs alphabetically', 'Deleting duplicate logs', 'B', 'Correlation analyzes multiple events to identify patterns indicating threats.');

-- Lesson 126: Log Tools Comparison
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(126, 'What is Elasticsearch?', 'A rubber band search', 'A distributed search and analytics engine', 'An email search tool', 'A file finder', 'B', 'Elasticsearch is a distributed search engine commonly used for log analysis.'),
(126, 'What is Logstash?', 'A hidden log', 'A data processing pipeline for ingesting and transforming logs', 'A log backup tool', 'A log deletion tool', 'B', 'Logstash collects, parses, and transforms log data.'),
(126, 'What is Kibana?', 'A type of fruit', 'A visualization platform for Elasticsearch data', 'A log storage format', 'A syslog replacement', 'B', 'Kibana provides visualization and dashboards for Elasticsearch data.'),
(126, 'What is Graylog?', 'A gray-colored log', 'An open-source log management platform', 'A log compression format', 'A Windows event viewer', 'B', 'Graylog is an open-source centralized log management solution.'),
(126, 'What is Fluentd?', 'A flexible log collector and aggregator', 'A fluid dynamics simulator', 'A log encryption tool', 'A log viewer only', 'A', 'Fluentd is an open-source data collector for unified logging.');

-- Lesson 127: Security vs Privacy
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(127, 'What is the tension between logging and privacy?', 'There is no tension', 'Comprehensive logging can capture personal data', 'Logging improves privacy', 'Privacy requires more logging', 'B', 'Logging may capture personal information, creating privacy concerns.'),
(127, 'What is data minimization in logging?', 'Using smaller log files', 'Only collecting necessary data to reduce privacy risks', 'Compressing log data', 'Deleting all logs', 'B', 'Data minimization means collecting only the data needed for the purpose.'),
(127, 'What is log anonymization?', 'Hiding log files', 'Removing or masking personal identifiers from logs', 'Making logs anonymous authors', 'Encrypting log files', 'B', 'Anonymization removes identifying information from log data.'),
(127, 'What regulation affects logging practices?', 'None exist', 'GDPR and other privacy regulations', 'Only internal policies', 'Log regulations dont exist', 'B', 'GDPR and similar regulations impact how personal data in logs must be handled.'),
(127, 'What is log retention policy?', 'How long to keep log files', 'How to retain log formatting', 'A backup schedule', 'A log compression setting', 'A', 'Retention policies define how long logs are stored before deletion.');

-- Lesson 128: Log Server Best Practices
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(128, 'Why should log servers use secure transport?', 'For faster transmission', 'To prevent eavesdropping and tampering of log data', 'Its not necessary', 'To compress logs', 'B', 'Secure transport (TLS) protects log integrity and confidentiality.'),
(128, 'What is log integrity verification?', 'Checking logs are complete sentences', 'Ensuring logs havent been modified or deleted', 'Verifying log file sizes', 'Counting log entries', 'B', 'Integrity verification confirms logs are authentic and unmodified.'),
(128, 'Why implement access controls on log servers?', 'To make logs harder to read', 'To prevent unauthorized access and tampering', 'Logs dont need protection', 'To save disk space', 'B', 'Access controls protect sensitive log data from unauthorized users.'),
(128, 'What is log monitoring alerting?', 'Sending logs by email', 'Automated notifications when suspicious patterns are detected', 'Manual log review', 'Log file naming', 'B', 'Alerting notifies security teams of potential issues found in logs.'),
(128, 'Why have off-site log backups?', 'For extra storage', 'To preserve evidence even if primary systems are compromised', 'Its not recommended', 'To save money', 'B', 'Off-site backups ensure logs survive if attackers compromise the primary log server.');

-- Course 7, Level 27: Email Servers (Lessons 129-135)

-- Lesson 129: Email Server Introduction
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(129, 'What protocol is used to SEND email from a client to a server?', 'POP3', 'IMAP', 'SMTP', 'HTTP', 'C', 'SMTP (Simple Mail Transfer Protocol) is used for sending emails.'),
(129, 'What is the difference between POP3 and IMAP?', 'They are identical protocols', 'POP3 downloads and typically deletes emails from server; IMAP syncs and keeps emails on server', 'POP3 is for sending, IMAP is for receiving', 'IMAP is older than POP3', 'B', 'POP3 downloads emails locally, while IMAP keeps them synchronized on the server.'),
(129, 'What DNS record type specifies the mail server for a domain?', 'A', 'MX', 'CNAME', 'TXT', 'B', 'MX (Mail Exchange) records specify which server handles email for a domain.'),
(129, 'What is SPF in email security?', 'Secure Protocol Format', 'Sender Policy Framework - prevents email spoofing', 'Simple Post Format', 'Server Protection Firewall', 'B', 'SPF specifies which servers are authorized to send email for a domain.'),
(129, 'What does DKIM do?', 'Deletes Kept Incoming Mail', 'Adds a digital signature to verify email authenticity', 'Duplicates Key Information Messages', 'Decrypts Known Internet Mail', 'B', 'DKIM (DomainKeys Identified Mail) adds cryptographic signatures to email headers.');

-- Lesson 130: SMTP, IMAP & POP3
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(130, 'What port does SMTP typically use?', '110', '143', '25 or 587', '993', 'C', 'SMTP uses port 25 (server-to-server) or 587 (client submission).'),
(130, 'What port does POP3 use?', '25', '110', '143', '587', 'B', 'POP3 uses port 110 (or 995 for secure POP3).'),
(130, 'What port does IMAP use?', '25', '110', '143', '587', 'C', 'IMAP uses port 143 (or 993 for secure IMAP).'),
(130, 'What is the advantage of IMAP over POP3?', 'IMAP is faster', 'IMAP synchronizes emails across multiple devices', 'IMAP uses less storage', 'IMAP is more secure by default', 'B', 'IMAP keeps emails on the server, allowing access from multiple devices.'),
(130, 'What is SMTPS?', 'Simple Mail Transfer Protocol Secure', 'SMTP with TLS/SSL encryption', 'A different email protocol', 'SMTP for servers only', 'B', 'SMTPS is SMTP secured with TLS/SSL encryption.');

-- Lesson 131: Email Send Process
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(131, 'What happens first when you send an email?', 'Email is delivered', 'Your email client connects to the SMTP server', 'DNS lookup occurs', 'Recipient opens the email', 'B', 'The sending process starts when your client connects to your SMTP server.'),
(131, 'What does the SMTP server do after receiving your email?', 'Deletes it', 'Looks up the recipients mail server via DNS MX records', 'Sends it immediately without lookup', 'Returns an error', 'B', 'The SMTP server queries DNS for the recipients MX record.'),
(131, 'What is an email relay?', 'A race between emails', 'An SMTP server that forwards email to another server', 'An email backup', 'An email attachment', 'B', 'Email relays forward messages between SMTP servers.'),
(131, 'What is an open relay?', 'A relay that is always on', 'An SMTP server that forwards email from any sender', 'A secure relay configuration', 'A relay for large files', 'B', 'Open relays accept mail from anyone - often exploited by spammers.'),
(131, 'What is email queuing?', 'Lining up to check email', 'Storing emails temporarily before delivery attempts', 'Organizing emails by date', 'Deleting old emails', 'B', 'Email servers queue messages when immediate delivery is not possible.');

-- Lesson 132: Spam Filters
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(132, 'What is a spam filter?', 'A filter for canned meat', 'Software that identifies and blocks unwanted emails', 'A type of email folder', 'An email encryption tool', 'B', 'Spam filters analyze emails to identify and block unwanted messages.'),
(132, 'What is a Bayesian spam filter?', 'A filter from Bavaria', 'A filter that uses statistical analysis to identify spam', 'A filter for specific senders', 'A hardware filter', 'B', 'Bayesian filters use probability based on word patterns to detect spam.'),
(132, 'What is an email blacklist?', 'A list of favorite emails', 'A list of known spam sources that are blocked', 'An encrypted email list', 'A list of email features', 'B', 'Blacklists contain IP addresses or domains known for sending spam.'),
(132, 'What is email greylisting?', 'Making emails gray', 'Temporarily rejecting emails to verify legitimate senders', 'A type of spam', 'Encrypting emails', 'B', 'Greylisting temporarily rejects mail; legitimate servers retry, spammers often dont.'),
(132, 'What is SpamAssassin?', 'A spy in email', 'An open-source spam filtering system', 'A commercial email service', 'An email virus', 'B', 'SpamAssassin is a popular open-source spam filter.');

-- Lesson 133: Email Response Codes
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(133, 'What does SMTP code 250 mean?', 'Error occurred', 'Requested action okay, completed', 'Try again later', 'Unknown recipient', 'B', 'SMTP 250 indicates successful completion of the requested action.'),
(133, 'What does SMTP code 550 mean?', 'Success', 'Requested action not taken - mailbox unavailable', 'Try again', 'Authentication required', 'B', 'SMTP 550 indicates the mailbox is unavailable (user not found, etc.).'),
(133, 'What does SMTP code 421 mean?', 'Success', 'Service not available, try again later', 'Permanent failure', 'Authentication success', 'B', 'SMTP 421 is a temporary error - the server is not available.'),
(133, 'What does SMTP code 535 mean?', 'Message accepted', 'Authentication failed', 'Mailbox full', 'Success', 'B', 'SMTP 535 indicates authentication credentials failed.'),
(133, 'What are 5xx SMTP codes?', 'Success codes', 'Permanent failure codes', 'Temporary error codes', 'Information codes', 'B', '5xx codes indicate permanent failures that wont succeed with retry.');

-- Lesson 134: MIME
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(134, 'What does MIME stand for?', 'Mail Internet Message Extension', 'Multipurpose Internet Mail Extensions', 'Multiple Internet Mail Encoding', 'Message Internet Mail Encryption', 'B', 'MIME (Multipurpose Internet Mail Extensions) extends email format.'),
(134, 'What does MIME allow in emails?', 'Only plain text', 'Attachments, HTML, and non-ASCII characters', 'Faster delivery', 'Encryption only', 'B', 'MIME enables attachments, HTML content, and international characters in email.'),
(134, 'What is a MIME type?', 'A typing speed', 'An identifier for the format of content', 'An email address type', 'A server configuration', 'B', 'MIME types identify content formats like text/html, image/jpeg, etc.'),
(134, 'What is multipart MIME?', 'An email with multiple recipients', 'An email containing multiple content types', 'Multiple email servers', 'Encrypted email parts', 'B', 'Multipart MIME allows emails to contain multiple content sections.'),
(134, 'What is Base64 encoding in email?', 'A security measure', 'A way to encode binary data as ASCII text', 'An encryption algorithm', 'A compression method', 'B', 'Base64 encodes binary attachments as ASCII text for email transmission.');

-- Lesson 135: Email Server Setup
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation) VALUES
(135, 'What is Postfix?', 'A letter ending', 'A popular open-source mail transfer agent', 'A mail client', 'An email attachment', 'B', 'Postfix is a widely-used open-source SMTP server.'),
(135, 'What is Dovecot?', 'A bird house', 'An IMAP and POP3 server', 'An SMTP server', 'An email client', 'B', 'Dovecot is a popular IMAP/POP3 server for email retrieval.'),
(135, 'What DNS records are needed for email?', 'Only A records', 'MX, SPF, DKIM, and DMARC records', 'Only CNAME records', 'No DNS records needed', 'B', 'Email requires MX records and should have SPF, DKIM, and DMARC for security.'),
(135, 'What is DMARC?', 'Domain Message Authentication', 'Domain-based Message Authentication, Reporting, and Conformance', 'Digital Mail Archive', 'Domain Mail Access Record', 'B', 'DMARC ties SPF and DKIM together with a policy for handling failures.'),
(135, 'Why is a reverse DNS (PTR) record important for email?', 'Its not important', 'Many mail servers check PTR records to verify sender legitimacy', 'It speeds up email delivery', 'It encrypts emails', 'B', 'Reverse DNS helps verify that the sending IP belongs to the claimed domain.');
