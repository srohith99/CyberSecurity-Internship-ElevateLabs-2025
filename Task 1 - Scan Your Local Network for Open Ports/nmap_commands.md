# 🧪 Nmap Commands Used

This file documents the various Nmap commands used during the Cyber Security Internship Task 1.

---

## 1. Basic SYN Scan of the Local Network
Scans the entire subnet (e.g., 192.168.1.0/24) for live hosts and open TCP ports using a stealthy SYN scan.

nmap -sS 192.168.1.0/24

## 2. Save Scan Results to a Text File
Use -oN to save readable output to a file named scan_results.txt.

nmap -sS 192.168.1.0/24 -oN scan_results.txt

## 3. Save Results in XML and Convert to HTML
Generate machine-readable XML format and convert it to a pretty HTML report.

nmap -sS 192.168.1.0/24 -oX scan.xml
xsltproc scan.xml -o scan.html

## 4. Scan a Specific Host with Version Detection
Scan one IP and identify service versions (useful for vulnerability assessment).

nmap -sV 192.168.1.5

## 5. Ping Scan to Find Live Hosts Only
Does not scan ports — only discovers active devices.

nmap -sn 192.168.1.0/24

## 6. Aggressive Scan (Optional - Not Recommended on Unknown Networks)
Includes OS detection, version detection, script scanning, and traceroute.


nmap -A 192.168.1.5
Notes:
-sS: TCP SYN scan (stealthy and fast)

-sn: Ping scan (no ports)

-oN: Save as normal text

-oX: Save as XML

-sV: Detect service versions

-A: Aggressive scan (be cautious — can trigger alerts)
