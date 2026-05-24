import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="logo">
          ❄ Snow<em>Load</em>Calculator
        </div>
        <p>
          The most accurate, AI-powered snow day calculator — real weather data,
          instant predictions, always free.
          <br />
          <small>
            Weather data provided by{" "}
            <a
              href="https://open-meteo.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--ice)" }}
            >
              Open-Meteo
            </a>
            . Predictions are probability estimates and should not replace
            official school announcements.
          </small>
        </p>
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", fontSize: "0.85rem" }}>
          <a href="/privacy-policy" style={{ color: "var(--muted)" }}>Privacy Policy</a>
          <a href="/terms-of-service" style={{ color: "var(--muted)" }}>Terms of Service</a>
          <a href="/disclaimer" style={{ color: "var(--muted)" }}>Disclaimer</a>
          <a href="/about" style={{ color: "var(--muted)" }}>About Us</a>
          <a href="/contact" style={{ color: "var(--muted)" }}>Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
