import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Contact Us - Snow Day Calculator",
  description: "Get in touch with the Snow Day Calculator team.",
};

export default function Contact() {
  return (
    <div className="wrap">
      <Header />
      <main className="policy-content">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you!</p>
        
        <h2>General Inquiries & Feedback</h2>
        <p>If you have questions about how our prediction algorithm works, feedback on the website, or just want to let us know that we correctly predicted your snow day, please email us at:</p>
        <p><strong>Email:</strong> contact@snowloadcalculator.live</p>

        <h2>Business & Advertising</h2>
        <p>For partnership opportunities, press inquiries, or advertising on SnowLoadCalculator, please reach out to our business team.</p>
        <p><strong>Email:</strong> business@snowloadcalculator.live</p>

        <h2>Support</h2>
        <p>If you are experiencing a technical issue with the calculator (e.g., your ZIP code isn't working or the page isn't loading), please include your browser version and the ZIP code you are trying to check in your email so we can assist you quickly.</p>
        
        <p style={{ marginTop: "40px", fontSize: "0.9rem", color: "var(--muted)" }}>
          Please note: We aim to respond to all inquiries within 48 hours. Due to high volume during major winter storms, our response times may be slightly delayed.
        </p>
      </main>
      <Footer />
    </div>
  );
}
