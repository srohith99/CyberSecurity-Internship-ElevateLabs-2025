function detectPhishing() {
  const emailText = document.getElementById('emailInput').value;
  const lines = emailText.split("\n");
  const resultDiv = document.getElementById("result");

  const threats = [];

  lines.forEach((line, index) => {
    const lowerLine = line.toLowerCase();
    const lineNumber = index + 1;

    // URGENT LANGUAGE
    if (lowerLine.includes("verify your account") || lowerLine.includes("action required") || lowerLine.includes("suspend your account")) {
      threats.push({
        line: lineNumber,
        text: line.trim(),
        type: "Urgent Language",
        reason: "Uses fear tactics to pressure immediate action."
      });
    }

    // SUSPICIOUS LINK
    if ((lowerLine.includes("http://") || lowerLine.includes("https://")) &&
        !lowerLine.includes("trusted.com") &&
        !lowerLine.includes("yourcompany.com")) {
      threats.push({
        line: lineNumber,
        text: line.trim(),
        type: "Suspicious Link",
        reason: "Link may lead to fake login pages or malware."
      });
    }

    // GENERIC GREETING
    if (lowerLine.includes("dear customer") || lowerLine.includes("valued user")) {
      threats.push({
        line: lineNumber,
        text: line.trim(),
        type: "Generic Greeting",
        reason: "Lacks personalization, common in mass phishing emails."
      });
    }

    // SPOOFED DOMAIN
    if (lowerLine.includes("amaz0n") || lowerLine.includes("paypa1") || lowerLine.includes("g00gle")) {
      threats.push({
        line: lineNumber,
        text: line.trim(),
        type: "Spoofed Domain",
        reason: "Mimics real domains with lookalike characters."
      });
    }
  });

  if (threats.length === 0) {
    resultDiv.innerHTML = "<p>✅ No phishing threats found.</p>";
  } else {
    let html = `<h3>⚠️ ${threats.length} Threat(s) Detected:</h3><ul>`;
    threats.forEach(t => {
      html += `
        <li>
          <strong>Line ${t.line}:</strong> "${t.text}"<br>
          <strong>Threat:</strong> ${t.type}<br>
          <strong>Why it’s dangerous:</strong> ${t.reason}
        </li><br>
      `;
    });
    html += "</ul>";
    resultDiv.innerHTML = html;
  }
}
