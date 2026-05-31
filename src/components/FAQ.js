"use client";
import React, { useState } from "react";

export default function FAQ() {
  const faqData = [
    {
      q: "How accurate is the snow day calculator?",
      a: "Our predictor is highly accurate for locations expecting 6+ inches of snow (over 90% accuracy). For marginal amounts (1–4 inches), accuracy depends on local district policy. The calculator pulls live weather data, so checking in the evening or early morning gives the most current prediction.",
    },
    {
      q: "What ZIP codes does the snow day predictor support?",
      a: "The snow day calculator works for all 5-digit US ZIP codes. We use the Open-Meteo weather forecast API, which provides hyper-local weather data for every location in the United States. Just enter any valid ZIP code to get your prediction.",
    },
    {
      q: "How much snow does it take to cancel school?",
      a: "It varies significantly by region. In Southern states, 1–2 inches can close schools because they lack snow-removal equipment. In the Northeast or Midwest, districts typically need 6–12 inches for a full cancellation. Urban schools generally need more snow than rural ones to close. Our calculator weighs regional thresholds in every prediction.",
    },
    {
      q: "When is the best time to check for a snow day prediction?",
      a: "Check at 8–11pm the night before for an early read, then again at 5–7am on the day of for the most precise prediction. School superintendents typically make their decision by 5–6am, so the early-morning forecast reflects the final conditions they're looking at.",
    },
    {
      q: "Does the calculator predict 2-hour delays?",
      a: "Yes. A \"medium\" probability range (roughly 25–55%) often correlates with a 2-hour delay rather than a full cancellation. This is common when storms are expected to taper off by mid-morning, giving road crews time to clear routes before the school day begins.",
    },
    {
      q: "Why did the calculator show a high chance but school wasn't cancelled?",
      a: "Weather forecasting isn't perfect — storm tracks can shift, accumulations can come in lower than predicted, or overnight road crews may clear conditions faster than expected. Some districts are also more conservative about closures than others. Our model is highly accurate but can't account for every district-specific factor.",
    },
    {
      q: "Is this snow day calculator free to use?",
      a: "Completely free. SnowLoadCalculator pulls live weather data from free, open APIs and provides AI-generated predictions at no cost. There is no sign-up required, no app to download, and no subscription. Just enter your ZIP code and get your answer.",
    },
    {
      q: "Can I use this for Canada or other countries?",
      a: "Currently, SnowLoadCalculator supports US ZIP codes only. Canadian postal code support is on the roadmap. The weather data provider (Open-Meteo) covers worldwide locations, so international support is planned in a future update.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <section className="content" style={{ paddingTop: 0 }} id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="wrap">
        <div className="stag">Frequently Asked Questions</div>
        <h2 className="stitle">
          Snow Day Calculator <span>FAQ</span>
        </h2>
        <div className="faq-list">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div className="faq-item" key={idx}>
                <button
                  className="faq-q"
                  onClick={() => toggleFaq(idx)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="faq-arrow">{isOpen ? "×" : "+"}</span>
                </button>
                <div
                  className="faq-a"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
