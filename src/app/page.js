"use client";
import React, { useEffect } from "react";
import Snowflakes from "../components/Snowflakes";
import Header from "../components/Header";
import Calculator from "../components/Calculator";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import LocationLinks from "../components/LocationLinks";

export default function Home() {
  // Set up intersection observer for scroll fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("on");
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll(".fade");
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Background Falling Snowflakes */}
      <Snowflakes />

      <div className="wrap">
        {/* Navigation Header */}
        <Header />

        {/* Hero Section */}
        <div className="hero" id="calculator">
          <div className="badge">⚡ Real Weather Data &nbsp;·&nbsp; AI-Powered</div>
          <h1>
            <span className="sub">Free Snow Day Calculator</span>
            Will You Have
            <br />A Snow Day?
          </h1>
          <p className="hero-desc">
            Get your exact % chance of a school snow day tomorrow — powered by
            live weather forecasts and AI analysis.
          </p>

          <div className="hero-stats">
            <div className="hstat">
              <span className="hstat-num">99%</span>
              <span className="hstat-lbl">Accuracy at 8&quot;+ Snow</span>
            </div>
            <div className="hstat">
              <span className="hstat-num">All US</span>
              <span className="hstat-lbl">ZIP Codes Supported</span>
            </div>
            <div className="hstat">
              <span className="hstat-num">Live</span>
              <span className="hstat-lbl">Weather Data</span>
            </div>
          </div>

          {/* Interactive Calculator (Form & Results) */}
          <Calculator />
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="content" id="how-it-works">
        <div className="wrap">
          <div className="stag">Simple &amp; Accurate</div>
          <h2 className="stitle">
            How Our Snow Day <span>Calculator Works</span>
          </h2>
          <p className="sdesc">
            We combine real-time weather data with an AI-powered prediction model
            to give you the most accurate snow day forecast available —
            completely free.
          </p>
          <div className="steps">
            <div className="step fade">
              <div className="step-n">01</div>
              <div className="step-t">📍 Enter Your ZIP Code</div>
              <p className="step-d">
                Type any US ZIP code. We instantly pinpoint your location and
                pull the latest live weather forecast data for your exact area.
              </p>
            </div>
            <div className="step fade">
              <div className="step-n">02</div>
              <div className="step-t">🌨 Analyze Weather Data</div>
              <p className="step-d">
                We analyze snowfall totals, overnight lows, wind speeds, ice
                accumulation probability, and storm timing for tomorrow&apos;s
                forecast window.
              </p>
            </div>
            <div className="step fade">
              <div className="step-n">03</div>
              <div className="step-t">🤖 Get Your Prediction</div>
              <p className="step-d">
                Our AI model weighs every factor — including your school type
                and regional snow tolerance — to output a precise percentage
                chance of a snow day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ACCURACY */}
      <section className="content" style={{ paddingTop: 0 }} id="accuracy">
        <div className="wrap">
          <div className="stag">Prediction Accuracy</div>
          <h2 className="stitle">
            How <span>Accurate</span> Is It?
          </h2>
          <p className="sdesc">
            Our snow day predictor accuracy depends on predicted snowfall. The
            more snow is expected, the easier it is to predict a cancellation
            with high confidence.
          </p>
          <div className="acc-grid">
            <div className="acc-card fade">
              <div className="acc-pct" style={{ color: "var(--green)" }}>
                95%+
              </div>
              <div className="acc-range">8&quot;+ Snow</div>
              <p className="acc-desc">
                Near-certain accuracy. School almost always cancels with 8+
                inches of snowfall.
              </p>
            </div>
            <div className="acc-card fade">
              <div className="acc-pct" style={{ color: "#86efac" }}>
                82%
              </div>
              <div className="acc-range">4–8&quot; Snow</div>
              <p className="acc-desc">
                High accuracy. Most districts cancel or delay at this range.
              </p>
            </div>
            <div className="acc-card fade">
              <div className="acc-pct" style={{ color: "var(--yellow)" }}>
                65%
              </div>
              <div className="acc-range">1–4&quot; Snow</div>
              <p className="acc-desc">
                Moderate. Outcome varies by district policy and storm timing.
              </p>
            </div>
            <div className="acc-card fade">
              <div className="acc-pct" style={{ color: "var(--gray)" }}>
                50%
              </div>
              <div className="acc-range">&lt;1&quot; Snow</div>
              <p className="acc-desc">
                Hard to predict — depends heavily on ice, wind, and local
                factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FACTORS */}
      <section className="content" style={{ paddingTop: 0 }} id="factors">
        <div className="wrap">
          <div className="stag">What We Measure</div>
          <h2 className="stitle">
            Key Factors in <span>Snow Day Predictions</span>
          </h2>
          <p className="sdesc">
            Our snow day calculator analyzes every major variable that school
            administrators consider when deciding to cancel school.
          </p>
          <div className="flist">
            <div className="fi fade">
              <div className="fi-icon">❄️</div>
              <div>
                <h4>Snowfall Accumulation</h4>
                <p>
                  The single most important factor. Even 4–6 inches can cancel
                  school in regions without snow-clearing equipment. We forecast
                  total accumulation during the overnight and morning commute
                  window.
                </p>
              </div>
            </div>
            <div className="fi fade">
              <div className="fi-icon">🌡️</div>
              <div>
                <h4>Temperature &amp; Wind Chill</h4>
                <p>
                  Dangerously cold wind chill temperatures can close schools
                  even without snow. We factor in the overnight minimum
                  temperature and morning wind chill to assess student safety
                  risk.
                </p>
              </div>
            </div>
            <div className="fi fade">
              <div className="fi-icon">💨</div>
              <div>
                <h4>Wind Speed &amp; Gusts</h4>
                <p>
                  High winds reduce visibility to near zero and create
                  blizzard-like conditions. We track overnight and morning wind
                  speeds that affect bus safety and road travel conditions.
                </p>
              </div>
            </div>
            <div className="fi fade">
              <div className="fi-icon">🧊</div>
              <div>
                <h4>Ice &amp; Freezing Rain</h4>
                <p>
                  A thin layer of ice is more dangerous than a foot of snow. Icy
                  roads are the top cause of school bus accidents, so we always
                  check for freezing rain and sleet probability.
                </p>
              </div>
            </div>
            <div className="fi fade">
              <div className="fi-icon">🏫</div>
              <div>
                <h4>School Type &amp; Location</h4>
                <p>
                  Rural school districts close for less snow than urban ones
                  (better resources). Private and boarding schools set the
                  highest thresholds for snow day cancellations.
                </p>
              </div>
            </div>
            <div className="fi fade">
              <div className="fi-icon">⏰</div>
              <div>
                <h4>Storm Timing</h4>
                <p>
                  A storm peaking at 3am is far more likely to cause a snow day
                  than one arriving at noon. We analyze the hourly forecast to
                  determine when peak snowfall hits the morning commute window.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationLinks />

      {/* FAQ accordion section */}
      <FAQ />

      <div className="divider"></div>

      {/* Footer credits */}
      <Footer />
    </>
  );
}
