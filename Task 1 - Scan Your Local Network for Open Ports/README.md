# Cyber Security Internship – Task 1

## Objective
Perform a **basic network reconnaissance** by scanning the local network to discover active devices and open ports using **Nmap**. Optional analysis is done using **Wireshark**.

---

##  Tools Used
- [Nmap](https://nmap.org/download.html)
- [Wireshark](https://www.wireshark.org/) (Optional)
- Command Line / Terminal

---

##  Task Summary

### Steps Performed:
1. Identified local IP range using `ipconfig` / `ifconfig`.
2. Ran TCP SYN scan with:
   ```bash
   nmap -sS 192.168.1.0/24
   
nmap -sS 192.168.1.0/24 -oN scan_results.txt

tcp.flags.syn == 1 && tcp.flags.ack == 0

Analyzed common services on discovered open ports.

Assessed potential security risks.

### Key Concepts
Open Port: A TCP/UDP port that accepts connections and has a service running.

SYN Scan: A stealthy scan that sends a TCP SYN to identify open ports without completing the handshake.

Network Reconnaissance: The process of discovering devices and services on a network.

