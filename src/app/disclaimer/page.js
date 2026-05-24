import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Disclaimer - Snow Day Calculator",
  description: "Disclaimer stating that the calculator provides estimates only.",
};

export default function Disclaimer() {
  return (
    <div className="wrap">
      <Header />
      <main className="policy-content">
        <h1>Disclaimer</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2>Informational Purposes Only</h2>
        <p>The information and predictions provided by the Snow Day Calculator are for general informational and entertainment purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information or prediction on the site.</p>

        <h2>Not Official School Announcements</h2>
        <p>Our snow day probabilities are mathematical estimates based on meteorological data. <strong>We are not affiliated with any school district or government entity.</strong> You must always check official channels, local news, and your school district's direct communications to verify if your school is closed or delayed.</p>

        <h2>Limitation of Liability</h2>
        <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>

        <h2>External Links Disclaimer</h2>
        <p>The site may contain links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
      </main>
      <Footer />
    </div>
  );
}
