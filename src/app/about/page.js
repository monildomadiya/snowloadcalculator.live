import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "About Us - Snow Day Calculator",
  description: "Learn about the team and technology behind the Snow Day Calculator.",
};

export default function About() {
  return (
    <div className="wrap">
      <Header />
      <main className="policy-content">
        <h1>About Us</h1>
        
        <h2>Our Mission</h2>
        <p>At SnowLoadCalculator, our mission is to bring a little bit of fun and predictability to the winter season. We know the thrill of checking the weather the night before a big storm, hoping for that magical text message or news ticker announcing a school cancellation. We built the Snow Day Calculator to turn that anticipation into an accurate, data-driven probability.</p>

        <h2>How It Works</h2>
        <p>We use state-of-the-art meteorological data provided by the Open-Meteo API. Our proprietary algorithm analyzes several key factors:</p>
        <ul>
          <li>Expected snowfall accumulation</li>
          <li>Overnight low temperatures and wind chill</li>
          <li>Peak wind speed and blizzard conditions</li>
          <li>Duration of the precipitation</li>
          <li>Historical district tendencies based on school type (Rural, Urban, Private, etc.)</li>
        </ul>
        <p>By processing this live data through our AI models, we output a precise percentage chance of a snow day for your specific ZIP code.</p>

        <h2>Who We Are</h2>
        <p>We are a passionate team of web developers and weather enthusiasts who wanted to build the most accurate, reliable, and visually stunning snow day predictor on the internet. We believe in providing free, high-quality tools that are accessible to everyone.</p>

        <h2>Get in Touch</h2>
        <p>We love hearing from our users! If you have suggestions, feedback, or just want to tell us that we correctly predicted your snow day, feel free to drop us a line via our <a href="/contact">Contact Us</a> page.</p>
      </main>
      <Footer />
    </div>
  );
}
