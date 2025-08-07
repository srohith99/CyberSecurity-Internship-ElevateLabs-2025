#  Services Analysis – Open Ports & Security Risks

This document analyzes the services running on each IP found during the Nmap scan and outlines potential security risks.

---

##  IP: 192.168.1.1

### Open Ports:
- **53/tcp – DNS**
  - **Use:** Domain Name System (resolves domain names to IP addresses)
  - **Risk:** Can be used in DNS amplification attacks if misconfigured.

- **80/tcp – HTTP**
  - **Use:** Web traffic (insecure)
  - **Risk:** Transmits data in plaintext; vulnerable to interception and man-in-the-middle attacks.

- **443/tcp – HTTPS**
  - **Use:** Secure web traffic
  - **Risk:** Usually secure, but older SSL/TLS versions can be exploited.

---

##  IP: 192.168.1.4

### Open Ports:
- **22/tcp – SSH**
  - **Use:** Remote login
  - **Risk:** Target for brute-force attacks if password authentication is used. Disable root login and use SSH keys.

- **139/tcp – NetBIOS Session Service**
  - **Use:** File sharing in LAN (Windows)
  - **Risk:** Often targeted in lateral movement attacks. Can leak network info.

---

##  IP: 192.168.1.5

### Open Ports:
- **80/tcp – HTTP**
  - *Same as above*

- **443/tcp – HTTPS**
  - *Same as above*

- **3306/tcp – MySQL**
  - **Use:** Database server
  - **Risk:** Exposed DB ports can be attacked directly. Should be limited to internal access only.

- **3389/tcp – RDP**
  - **Use:** Remote Desktop Protocol (Windows)
  - **Risk:** Commonly exploited. Disable if unused. Use firewalls or VPN access only.

---

##  IP: 192.168.1.11

### Open Ports:
- None – All 1000 ports closed.
- ✅ *This is considered a secure configuration.*

---

##  IP: 192.168.1.23

### Open Ports:
- **21/tcp – FTP**
  - **Use:** File Transfer Protocol
  - **Risk:** Plaintext login; very insecure. Use SFTP instead.

- **25/tcp – SMTP**
  - **Use:** Mail server
  - **Risk:** Open SMTP relays can be abused to send spam.

- **110/tcp – POP3**
- **143/tcp – IMAP**
- **587/tcp – Submission**
  - **Use:** Email access and sending
  - **Risk:** Vulnerable to credential theft if not encrypted (use STARTTLS).

---

## Recommendations

- Disable or firewall unused ports.
- Use encrypted protocols (e.g., HTTPS, SFTP).
- Keep services up to date.
- Monitor logs for abnormal access.

---

📘 **Note:** This is a simulated analysis based on sample scan results for internship purposes.
