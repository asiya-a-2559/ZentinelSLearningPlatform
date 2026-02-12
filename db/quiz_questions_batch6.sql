-- Quiz Questions Batch 6: Networking Lessons (77-100)
-- Adding questions to reach minimum of 5 per lesson

USE securitylab;

-- Lesson 77: Network Types (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(77, 'What is a LAN?', 'Large Area Network', 'Local Area Network', 'Long Access Network', 'Linked Area Network', 'B', 'LAN connects devices in a limited area like a building or campus.', 1),
(77, 'What is a WAN?', 'Wireless Access Network', 'Wide Area Network', 'Web Application Network', 'Work Area Network', 'B', 'WAN spans large geographic areas, connecting multiple LANs (like the Internet).', 2),
(77, 'What is network topology?', 'Network speed', 'Physical or logical arrangement of network', 'Network protocol', 'Network security', 'B', 'Topology describes how devices are connected: star, bus, ring, mesh, etc.', 3),
(77, 'What is a star topology?', 'Network with many connections', 'All devices connect to central hub/switch', 'Circular network', 'Point-to-point', 'B', 'Star topology connects all devices to a central device; failure of center affects all.', 4),
(77, 'What is the advantage of mesh topology?', 'Cheapest', 'Redundant paths increase reliability', 'Simplest to set up', 'Uses least cables', 'B', 'Mesh provides multiple paths between nodes, so one failure doesnt break the network.', 5);

-- Lesson 78: Network Hardware (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(78, 'What does a router do?', 'Connects same network devices', 'Forwards packets between different networks', 'Amplifies signals', 'Stores data', 'B', 'Routers make forwarding decisions based on IP addresses to route traffic between networks.', 3),
(78, 'What is the difference between hub and switch?', 'Same device', 'Switch sends to specific port; hub broadcasts to all', 'Hub is faster', 'Switch is wireless', 'B', 'Switches learn MAC addresses and forward frames only to the destination port.', 4),
(78, 'What is a network interface card (NIC)?', 'Software driver', 'Hardware connecting computer to network', 'Wireless router', 'Network cable', 'B', 'NIC provides the physical interface (Ethernet port or wireless) for network connectivity.', 5);

-- Lesson 79: IP Addresses (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(79, 'What is an IP address?', 'Email address', 'Numerical identifier for devices on a network', 'Website URL', 'MAC address', 'B', 'IP addresses identify devices on networks and enable routing of packets.', 3),
(79, 'What is a private IP address range?', '8.8.8.0/24', '192.168.0.0/16', '1.1.1.0/24', '8.0.0.0/8', 'B', '192.168.x.x, 10.x.x.x, and 172.16-31.x.x are private, non-routable IP ranges.', 4),
(79, 'What does NAT do?', 'Encrypts traffic', 'Translates private IPs to public IP', 'Assigns IP addresses', 'Blocks traffic', 'B', 'NAT allows multiple devices with private IPs to share one public IP for internet access.', 5);

-- Lesson 80: MAC Addresses (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(80, 'What is a MAC address?', 'Email address', 'Physical hardware address of network interface', 'IP address type', 'Website address', 'B', 'MAC (Media Access Control) address is a unique identifier burned into network hardware.', 1),
(80, 'How long is a MAC address?', '32 bits', '48 bits (6 bytes)', '64 bits', '128 bits', 'B', 'MAC addresses are 48 bits, typically shown as 6 pairs of hexadecimal digits.', 2),
(80, 'What is MAC spoofing?', 'Creating fake emails', 'Changing your devices MAC address', 'Stealing MAC addresses', 'MAC encryption', 'B', 'MAC spoofing changes the MAC address to bypass filtering or impersonate devices.', 3),
(80, 'At which OSI layer do MAC addresses operate?', 'Network (Layer 3)', 'Data Link (Layer 2)', 'Physical (Layer 1)', 'Transport (Layer 4)', 'B', 'MAC addresses work at Layer 2 for local network frame delivery.', 4),
(80, 'What is the OUI in a MAC address?', 'Last 3 bytes', 'First 3 bytes identifying manufacturer', 'Middle bytes', 'Checksum', 'B', 'OUI (Organizationally Unique Identifier) is the first half, assigned to manufacturers.', 5);

-- Lesson 81: Packets & Protocols (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(81, 'What is a network packet?', 'Physical package', 'Unit of data transmitted over network', 'Network cable', 'IP address', 'B', 'Packets are formatted units containing header information and payload data.', 1),
(81, 'What does a packet header contain?', 'User data only', 'Source, destination, and control information', 'Encrypted payload', 'File names', 'B', 'Headers contain addressing, sequencing, and protocol information for delivery.', 2),
(81, 'What is encapsulation?', 'Data encryption', 'Wrapping data with protocol headers at each layer', 'Data compression', 'Packet filtering', 'B', 'Each layer adds its header around the data from the layer above.', 3),
(81, 'What is packet sniffing?', 'Smelling packets', 'Capturing and analyzing network traffic', 'Sending packets', 'Blocking packets', 'B', 'Packet sniffing captures network traffic for analysis, used for both legitimate and malicious purposes.', 4),
(81, 'What tool captures packets?', 'Notepad', 'Wireshark or tcpdump', 'Paint', 'Calculator', 'B', 'Wireshark provides GUI packet capture; tcpdump is command-line based.', 5);

-- Lesson 82: TCP vs UDP (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(82, 'What is TCPs three-way handshake?', 'Greeting protocol', 'SYN, SYN-ACK, ACK connection establishment', 'Encryption setup', 'Authentication method', 'B', 'TCP establishes connections with SYN, SYN-ACK, ACK before data transfer.', 3),
(82, 'Why would you choose UDP over TCP?', 'Need guaranteed delivery', 'Need low latency for streaming/gaming', 'Transferring large files', 'Need encryption', 'B', 'UDP sacrifices reliability for speed, better for real-time applications.', 4),
(82, 'What port range is for "well-known" services?', '0-65535', '0-1023', '1024-49151', '49152-65535', 'B', 'Ports 0-1023 are reserved for well-known services like HTTP(80), SSH(22), FTP(21).', 5);

-- Lesson 83: IPv4 vs IPv6 (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(83, 'How many bits is an IPv4 address?', '16 bits', '32 bits', '64 bits', '128 bits', 'B', 'IPv4 uses 32 bits, providing about 4.3 billion unique addresses.', 1),
(83, 'How many bits is an IPv6 address?', '32 bits', '64 bits', '128 bits', '256 bits', 'C', 'IPv6 uses 128 bits, providing a vastly larger address space.', 2),
(83, 'What format are IPv6 addresses written in?', 'Decimal with dots', 'Hexadecimal with colons', 'Binary', 'Octal', 'B', 'IPv6 uses eight groups of four hexadecimal digits separated by colons.', 3),
(83, 'Why was IPv6 created?', 'Faster than IPv4', 'IPv4 address exhaustion', 'Better encryption', 'Simpler format', 'B', 'IPv4s 4.3 billion addresses became insufficient; IPv6 provides practically unlimited addresses.', 4),
(83, 'What does :: mean in IPv6?', 'Error', 'One or more groups of zeros', 'Broadcast address', 'Reserved address', 'B', 'Double colon represents consecutive groups of zeros (can only appear once).', 5);

-- Lesson 84: Subnetting (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(84, 'What is CIDR notation?', 'Circle notation', 'Slash notation showing network prefix length', 'Certificate notation', 'Client notation', 'B', 'CIDR like /24 indicates how many bits are the network portion of the address.', 3),
(84, 'What does a /24 subnet mask equal?', '255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255', 'C', '/24 means 24 bits for network, leaving 8 bits for hosts = 255.255.255.0.', 4),
(84, 'How many usable hosts in a /24 network?', '256', '254', '255', '252', 'B', '/24 has 256 addresses minus network and broadcast = 254 usable hosts.', 5);

-- Lesson 85: TCP & UDP In Depth (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(85, 'What is a TCP sequence number?', 'Port number', 'Tracks byte position in data stream', 'Packet ID', 'Checksum', 'B', 'Sequence numbers track data byte position for ordering and detecting missing data.', 1),
(85, 'What is TCP window size?', 'GUI window', 'Amount of data receiver can accept', 'Packet size limit', 'Connection timeout', 'B', 'Window size enables flow control by advertising buffer space available.', 2),
(85, 'What are TCP flags used for?', 'Country identification', 'Control connection state (SYN, ACK, FIN, RST)', 'Data encryption', 'Error correction', 'B', 'TCP flags like SYN, ACK, FIN, RST control connection establishment and termination.', 3),
(85, 'What does a RST flag indicate?', 'Restart', 'Reset/abort the connection', 'Ready to send', 'Received successfully', 'B', 'RST immediately terminates the connection, often indicating errors or rejection.', 4),
(85, 'What is UDP used for?', 'File transfers', 'DNS queries, streaming, gaming', 'Email', 'Web browsing', 'B', 'UDP suits DNS lookups, video/audio streaming, and games where speed beats reliability.', 5);

-- Lesson 86: Application Protocols (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(86, 'What layer are HTTP, FTP, SMTP?', 'Network Layer', 'Application Layer', 'Transport Layer', 'Data Link Layer', 'B', 'These protocols operate at Layer 7, providing services to users and applications.', 1),
(86, 'What is Wireshark used for?', 'Wire management', 'Network protocol analysis and packet capture', 'Website development', 'Email client', 'B', 'Wireshark captures and analyzes network traffic with detailed protocol dissection.', 2),
(86, 'What does FTP stand for?', 'Fast Transfer Protocol', 'File Transfer Protocol', 'First Transfer Process', 'Full Transport Protocol', 'B', 'FTP enables file transfers between client and server over TCP.', 3),
(86, 'Why is Telnet insecure?', 'Too slow', 'Transmits data including passwords in plaintext', 'Uses wrong port', 'Outdated protocol', 'B', 'Telnet sends everything unencrypted; use SSH instead for secure remote access.', 4),
(86, 'What replaced Telnet for secure access?', 'FTP', 'SSH', 'HTTP', 'SMTP', 'B', 'SSH provides encrypted remote shell access, replacing insecure Telnet.', 5);

-- Lesson 87: Email Basics (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(87, 'What protocol sends email?', 'POP3', 'SMTP', 'IMAP', 'HTTP', 'B', 'SMTP (Simple Mail Transfer Protocol) handles sending and relaying email.', 1),
(87, 'What protocols retrieve email?', 'SMTP', 'POP3 and IMAP', 'HTTP and HTTPS', 'FTP and SFTP', 'B', 'POP3 downloads mail; IMAP syncs mail between server and clients.', 2),
(87, 'What is an MX record?', 'Mail Exchange DNS record', 'Maximum record', 'Mixed record', 'Master exchange', 'A', 'MX records specify which mail servers accept email for a domain.', 3),
(87, 'What port does SMTP use?', '21', '25 (and 587 for submission)', '80', '110', 'B', 'SMTP traditionally uses port 25; port 587 is for authenticated submission.', 4),
(87, 'What is email spoofing?', 'Fast email', 'Forging the sender address in emails', 'Email encryption', 'Email forwarding', 'B', 'Email spoofing fakes the From address to appear as someone else.', 5);

-- Lesson 88: SMTP Protocol (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(88, 'What SMTP command starts a session?', 'START', 'HELO or EHLO', 'BEGIN', 'CONNECT', 'B', 'HELO (or EHLO for extended) initiates the SMTP conversation.', 1),
(88, 'What SMTP command specifies sender?', 'FROM:', 'MAIL FROM:', 'SENDER:', 'ORIGIN:', 'B', 'MAIL FROM: specifies the envelope sender (return path) for the email.', 2),
(88, 'What SMTP command specifies recipient?', 'TO:', 'RCPT TO:', 'SEND TO:', 'DELIVER:', 'B', 'RCPT TO: specifies each recipient of the email message.', 3),
(88, 'What command sends the message body?', 'BODY', 'DATA', 'MESSAGE', 'CONTENT', 'B', 'DATA command signals the start of message content, ending with a lone period.', 4),
(88, 'What is an open relay?', 'Relay race', 'SMTP server forwarding email from anyone', 'Email client', 'Spam filter', 'B', 'Open relays accept mail from any source, often abused by spammers.', 5);

-- Lesson 89: POP3 vs IMAP (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(89, 'What does POP3 do by default?', 'Syncs email', 'Downloads and deletes email from server', 'Sends email', 'Encrypts email', 'B', 'POP3 typically downloads mail to one device and removes it from the server.', 1),
(89, 'What is IMAP better for?', 'Single device', 'Multiple devices accessing same mailbox', 'Sending email', 'Spam filtering', 'B', 'IMAP keeps mail on server, syncing across all devices accessing the account.', 2),
(89, 'What port does POP3 use?', '25', '110 (995 for SSL)', '143', '587', 'B', 'POP3 uses port 110, or 995 for encrypted POP3S.', 3),
(89, 'What port does IMAP use?', '25', '110', '143 (993 for SSL)', '587', 'C', 'IMAP uses port 143, or 993 for encrypted IMAPS.', 4),
(89, 'What is Exchange?', 'Email exchange', 'Microsoft enterprise email/collaboration platform', 'SMTP replacement', 'POP3 version', 'B', 'Microsoft Exchange provides email, calendaring, and collaboration for enterprises.', 5);

-- Lesson 90: Email Spoofing & SPF (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(90, 'What does DKIM add to emails?', 'Encryption', 'Cryptographic signature verifying sender domain', 'Compression', 'Virus scan', 'B', 'DKIM signs emails cryptographically, proving they originated from the claimed domain.', 3),
(90, 'What does DMARC do?', 'Delete mail', 'Policy for handling SPF/DKIM failures', 'Mail archiving', 'Mail routing', 'B', 'DMARC tells receivers what to do when SPF or DKIM checks fail.', 4),
(90, 'What DNS record type holds SPF data?', 'A record', 'TXT record', 'MX record', 'CNAME record', 'B', 'SPF policies are published as TXT records in DNS.', 5);

-- Lesson 91: DNS Fundamentals (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(91, 'What does DNS do?', 'Provides security', 'Translates domain names to IP addresses', 'Sends email', 'Manages files', 'B', 'DNS resolves human-readable domain names to numerical IP addresses.', 1),
(91, 'What is a DNS resolver?', 'DNS server', 'Server that queries DNS on behalf of clients', 'Domain registrar', 'Website host', 'B', 'Resolvers handle the recursive lookup process to find IP addresses for clients.', 2),
(91, 'What is a TLD?', 'Total Load Distribution', 'Top-Level Domain like .com, .org', 'Transfer Level Data', 'Technical Level Domain', 'B', 'TLDs are the rightmost part of domain names (.com, .net, .org, country codes).', 3),
(91, 'What port does DNS use?', '22', '53', '80', '443', 'B', 'DNS uses port 53 for both UDP (queries) and TCP (zone transfers, large responses).', 4),
(91, 'What is DNS caching?', 'DNS payment', 'Storing DNS responses temporarily for faster lookups', 'DNS encryption', 'DNS backup', 'B', 'Caching stores resolved addresses to avoid repeated lookups until TTL expires.', 5);

-- Lesson 92: DNS Lookups (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(92, 'What is a forward DNS lookup?', 'Fast lookup', 'Domain name to IP address resolution', 'IP to domain', 'Next hop lookup', 'B', 'Forward lookup is the normal process of resolving a domain name to its IP.', 1),
(92, 'What is a reverse DNS lookup?', 'Backward lookup', 'IP address to domain name resolution', 'Domain to IP', 'Previous lookup', 'B', 'Reverse DNS finds the domain name associated with an IP address.', 2),
(92, 'What command performs DNS lookups?', 'ping', 'nslookup or dig', 'traceroute', 'netstat', 'B', 'nslookup and dig query DNS servers for record information.', 3),
(92, 'What is PTR record used for?', 'Pointer to alias', 'Reverse DNS (IP to domain)', 'Port record', 'Protocol type', 'B', 'PTR records map IP addresses to hostnames for reverse lookups.', 4),
(92, 'Why is reverse DNS important?', 'Faster browsing', 'Email servers check it to verify senders', 'Required for websites', 'DNS security', 'B', 'Many mail servers reject email from IPs without proper reverse DNS setup.', 5);

-- Lesson 93: DNS Queries (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(93, 'What is a recursive DNS query?', 'Query that repeats', 'Resolver does all work to find answer', 'Quick query', 'Root query', 'B', 'Recursive queries expect the resolver to fully resolve the name or return an error.', 1),
(93, 'What is an iterative DNS query?', 'Repeated query', 'Server returns best answer or referral', 'Initial query', 'Internal query', 'B', 'Iterative queries get the best current answer, possibly a referral to another server.', 2),
(93, 'What are root name servers?', 'Main servers', 'Top of DNS hierarchy, know TLD servers', 'Fastest servers', 'Backup servers', 'B', 'Root servers direct queries to appropriate TLD servers (.com, .org, etc.).', 3),
(93, 'What is TTL in DNS?', 'Total Time Limit', 'Time to Live - how long to cache response', 'Transfer Time Length', 'Type of TLD', 'B', 'TTL specifies how long DNS resolvers should cache the record before re-querying.', 4),
(93, 'What is DNS poisoning?', 'DNS cleanup', 'Inserting false records into DNS cache', 'DNS encryption', 'DNS logging', 'B', 'DNS poisoning tricks resolvers into caching fake records, redirecting users.', 5);

-- Lesson 94: DNS Records (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(94, 'What does a CNAME record do?', 'Creates name', 'Creates alias pointing to another domain', 'Counts names', 'Configures nameserver', 'B', 'CNAME (Canonical Name) creates an alias that points to another domains A record.', 3),
(94, 'What is an NS record?', 'Name server record', 'Network server', 'New service', 'Null server', 'A', 'NS records specify authoritative nameservers for a domain.', 4),
(94, 'What does the SOA record contain?', 'Security info', 'Start of Authority - primary DNS info and serial number', 'Server address', 'Service options', 'B', 'SOA contains zone administrative info including primary nameserver and refresh timings.', 5);

-- Lesson 95: ICMP & Ping (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(95, 'What does ICMP stand for?', 'Internet Control Message Protocol', 'Internal Computer Management Protocol', 'Internet Connection Monitor Protocol', 'Integrated Control Management Process', 'A', 'ICMP provides network diagnostic and error reporting functionality.', 1),
(95, 'What does ping use?', 'TCP', 'ICMP Echo Request/Reply', 'UDP', 'HTTP', 'B', 'Ping sends ICMP Echo Requests and waits for Echo Replies to test connectivity.', 2),
(95, 'What does traceroute show?', 'File trace', 'Path packets take to destination', 'System trace', 'User trace', 'B', 'Traceroute reveals each hop (router) between source and destination.', 3),
(95, 'What is ICMP Type 8?', 'Error message', 'Echo Request (ping)', 'Destination unreachable', 'Time exceeded', 'B', 'Type 8 is Echo Request; Type 0 is Echo Reply - used by ping.', 4),
(95, 'Why might ping be blocked?', 'Its outdated', 'Firewalls block ICMP to prevent reconnaissance', 'Too slow', 'Uses too much bandwidth', 'B', 'Blocking ICMP hides systems from ping sweeps but may break legitimate diagnostics.', 5);

-- Lesson 96: DHCP (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(96, 'What does DHCP provide?', 'Security', 'Automatic IP address configuration', 'DNS services', 'Email', 'B', 'DHCP automatically assigns IP addresses, subnet masks, gateways, and DNS servers.', 1),
(96, 'What is the DHCP process called?', 'Handshake', 'DORA (Discover, Offer, Request, Acknowledge)', 'Bootstrap', 'Lease', 'B', 'DORA: client Discovers, server Offers, client Requests, server Acknowledges.', 2),
(96, 'What is a DHCP lease?', 'Rental agreement', 'Temporary assignment of IP address', 'Permanent IP', 'Network contract', 'B', 'Leases assign IPs for limited time; clients must renew before expiration.', 3),
(96, 'What is DHCP starvation attack?', 'Server crash', 'Exhausting IP pool with fake requests', 'DNS attack', 'ARP attack', 'B', 'Attackers flood DHCP with requests using fake MACs, exhausting available addresses.', 4),
(96, 'What is a rogue DHCP server?', 'Fast DHCP', 'Unauthorized DHCP server providing bad configurations', 'Backup DHCP', 'DHCP client', 'B', 'Rogue DHCP servers can redirect traffic through attacker-controlled gateways.', 5);

-- Lesson 97: OSI Model (has 3, need 2 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(97, 'What layer handles end-to-end connections?', 'Network', 'Transport (Layer 4)', 'Session', 'Application', 'B', 'Transport layer provides reliable (TCP) or unreliable (UDP) end-to-end communication.', 4),
(97, 'What happens at the Physical layer?', 'Routing', 'Actual transmission of bits over media', 'Encryption', 'Application logic', 'B', 'Layer 1 handles physical transmission: cables, signals, voltages, wireless.', 5);

-- Lesson 98: TCP/IP Model (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(98, 'How many layers in TCP/IP model?', '7', '4', '5', '6', 'B', 'TCP/IP has 4 layers: Network Interface, Internet, Transport, Application.', 1),
(98, 'Which TCP/IP layer corresponds to OSI Network layer?', 'Network Interface', 'Internet', 'Transport', 'Application', 'B', 'The Internet layer handles IP addressing and routing like OSI Layer 3.', 2),
(98, 'What information is in IP header?', 'MAC addresses', 'Source IP, destination IP, TTL, protocol', 'Port numbers', 'Sequence numbers', 'B', 'IP headers contain addressing, fragmentation, TTL, and upper-layer protocol info.', 3),
(98, 'What is the IP TTL field?', 'Time to live in seconds', 'Hop limit preventing infinite loops', 'Total transfer length', 'Type of traffic', 'B', 'TTL decrements at each router; packet is dropped when it reaches zero.', 4),
(98, 'What does MTU stand for?', 'Maximum Transfer Unit', 'Maximum Transmission Unit', 'Minimum Transfer Unit', 'Main Transport Unit', 'B', 'MTU is the largest packet size that can be transmitted without fragmentation.', 5);

-- Lesson 99: ARP Protocol (has 0, need 5)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(99, 'What does ARP resolve?', 'Domain names', 'IP addresses to MAC addresses', 'MAC to IP', 'Hostnames', 'B', 'ARP (Address Resolution Protocol) finds the MAC address for a given IP on local network.', 1),
(99, 'What is an ARP request?', 'File request', 'Broadcast asking "who has this IP?"', 'Unicast message', 'Server query', 'B', 'ARP requests are broadcast to all devices asking which one owns the target IP.', 2),
(99, 'What is ARP spoofing/poisoning?', 'Cleaning ARP cache', 'Sending fake ARP replies to redirect traffic', 'ARP encryption', 'ARP caching', 'B', 'Attackers send false ARP responses to associate their MAC with victims IP.', 3),
(99, 'What attack does ARP spoofing enable?', 'SQL injection', 'Man-in-the-middle attack', 'XSS', 'Buffer overflow', 'B', 'ARP spoofing redirects traffic through attacker, enabling interception and modification.', 4),
(99, 'What command shows ARP cache?', 'arp -d', 'arp -a', 'arp -s', 'arp -p', 'B', 'arp -a displays the current ARP cache mapping IPs to MAC addresses.', 5);

-- Lesson 100: DoS Attacks (has 2, need 3 more)
INSERT INTO quiz_questions (lesson_id, question, option_a, option_b, option_c, option_d, correct, explanation, sort_order) VALUES
(100, 'What is a DDoS attack?', 'Direct Denial of Service', 'Distributed Denial of Service from multiple sources', 'Delayed DoS', 'Double DoS', 'B', 'DDoS uses many compromised systems (botnet) to overwhelm targets.', 3),
(100, 'What is a SYN flood?', 'Water attack', 'Sending many SYN packets without completing handshake', 'Synchronization attack', 'System failure', 'B', 'SYN floods exhaust server resources with half-open connections.', 4),
(100, 'What is amplification attack?', 'Volume boost', 'Using servers to multiply attack traffic', 'Sound attack', 'Signal boost', 'B', 'Amplification exploits services that return larger responses than requests (DNS, NTP).', 5);
