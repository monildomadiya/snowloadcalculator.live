import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms of Service - Snow Day Calculator",
  description: "Terms and conditions for using the Snow Day Calculator website.",
};

export default function TermsOfService() {
  return (
    <div className="wrap">
      <Header />
      <main className="policy-content">
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using the Snow Day Calculator, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this service.</p>

        <h2>2. Description of Service</h2>
        <p>Snow Day Calculator provides weather-based predictions regarding the probability of school cancellations due to snow or extreme weather. These predictions are generated using algorithms and third-party weather data APIs.</p>

        <h2>3. Accuracy of Information</h2>
        <p>The predictions provided by the Snow Day Calculator are for entertainment and informational purposes only. We do not guarantee the accuracy, completeness, or usefulness of any prediction. You should always consult your local school district for official announcements.</p>

        <h2>4. User Conduct</h2>
        <p>You agree to use the service only for lawful purposes. You are prohibited from violating or attempting to violate the security of the site, including accessing data not intended for you or logging onto a server you are not authorized to access.</p>

        <h2>5. Intellectual Property</h2>
        <p>All content included on this site, such as text, graphics, logos, and software, is the property of Snow Day Calculator or its content suppliers and protected by intellectual property laws.</p>

        <h2>6. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms of Service at any time. We do so by posting and drawing attention to the updated terms on the site. Your decision to continue to visit and make use of the site after such changes have been made constitutes your formal acceptance of the new Terms of Service.</p>
      </main>
      <Footer />
    </div>
  );
}
