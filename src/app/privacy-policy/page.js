import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy - Snow Day Calculator",
  description: "Privacy policy detailing data collection, cookies, and AdSense requirements for Snow Day Calculator.",
};

export default function PrivacyPolicy() {
  return (
    <div className="wrap">
      <Header />
      <main className="policy-content">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Introduction</h2>
        <p>Welcome to the Snow Day Calculator ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.</p>
        
        <h2>2. Information We Collect</h2>
        <p>When you use the Snow Day Calculator, you may provide your ZIP Code to determine local weather forecasts. This data is temporarily processed to fetch weather information from third-party APIs (like Zippopotam and Open-Meteo). We do not store your ZIP Code permanently or tie it to your personal identity.</p>

        <h2>3. Third-Party Services & Cookies</h2>
        <p>We use third-party services that may use cookies, web beacons, and other tracking technologies. Specifically:</p>
        <ul>
          <li><strong>Google AdSense:</strong> We use Google AdSense to display advertisements. Google uses cookies to serve ads based on a user's prior visits to our website or other websites. Users may opt out of personalized advertising by visiting Google Ads Settings.</li>
          <li><strong>Analytics:</strong> We may use analytics tools to monitor and analyze the use of our service.</li>
        </ul>

        <h2>4. Your Data Protection Rights</h2>
        <p>Depending on your location (e.g., GDPR, CCPA), you may have the right to access, update, or delete the information we have on you. If you wish to exercise any of these rights, please contact us.</p>

        <h2>5. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

        <h2>6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please visit our <a href="/contact">Contact Us</a> page.</p>
      </main>
      <Footer />
    </div>
  );
}
