"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-text">
        We use cookies to personalize content and ads, to provide social media features, and to analyze our traffic. We also share information about your use of our site with our advertising and analytics partners.{" "}
        <Link href="/privacy-policy" style={{ color: "var(--ice)", textDecoration: "underline" }}>
          Read our Privacy Policy
        </Link>.
      </div>
      <button className="cookie-btn" onClick={handleAccept}>
        Accept
      </button>
    </div>
  );
}
