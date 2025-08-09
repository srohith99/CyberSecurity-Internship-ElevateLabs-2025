# Task 4: Setup and Use a Firewall on Windows/Linux

## Objective
The objective of this task was to configure and test basic firewall rules to allow or block traffic using both **UFW** (Linux) and **Windows Defender Firewall** (Windows).  
This included understanding firewall concepts, practical rule creation, testing, and safe rollback.

---

## Tools Used
- **UFW** (Linux) – A simplified interface for iptables, making firewall management more user-friendly.
- **Windows Defender Firewall** (Windows) – Built-in firewall with granular inbound/outbound control.

---

## Steps Performed

### On Linux (UFW)
1. Enabled UFW:
   ```bash
   sudo ufw enable
   ```
2. Listed current rules:
   ```bash
   sudo ufw status numbered
   ```
3. Blocked Telnet (port 23):
   ```bash
   sudo ufw deny 23/tcp
   ```
4. Allowed SSH (port 22):
   ```bash
   sudo ufw allow 22/tcp
   ```
5. Tested rules using connection attempts.
6. Removed test rules:
   ```bash
   sudo ufw delete deny 23/tcp
   ```

### On Windows (Defender Firewall)
1. Opened **Windows Defender Firewall** → **Advanced Settings**.
2. Created an inbound rule to block TCP port 23 (Telnet).
3. Tested using a Telnet client — connection was blocked.
4. Removed the rule after verification.

---

## Extra Research Insights
- **Integration with Security Tools** – Works best with IDS/IPS and endpoint protection.
- **User-friendliness** – UFW simplifies complex iptables commands.
- **Granular Control** – Windows Firewall allows filtering based on port, program, or protocol.
- **Risks of Misconfiguration** – Blocking critical services or leaving insecure ports open.
- **Stateful vs Stateless** – Stateful tracks session states, stateless inspects packets individually.
- **NAT in Firewalls** – Masks internal IPs and enhances privacy.

---

## Key Concepts Covered
- Firewall Rules
- Inbound vs Outbound Traffic
- Port Blocking
- Protocol Security (Telnet vs SSH)
- Traffic Filtering
- Stateful vs Stateless Filtering

---

## Reflection Questions
- What differentiates stateful from stateless firewalls?
- Why is Telnet (port 23) considered insecure?
- How does a firewall differ from antivirus or IDS?
- What are the risks of misconfigured firewall rules?
- How does NAT enhance firewall security?

---

## Learning Outcomes
- Understood how firewalls regulate network traffic.
- Learned GUI and CLI rule application.
- Practiced safe configuration and rollback.
- Gained awareness of security best practices.
- Understood why SSH is preferred over Telnet.

---
