"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Calculator() {
  const [zip, setZip] = useState("");
  const [schoolType, setSchoolType] = useState("suburban");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState(null);

  const [animatedScore, setAnimatedScore] = useState(0);
  const [gaugeOffset, setGaugeOffset] = useState(301.6);
  const resultsRef = useRef(null);

  // IntersectionObserver to fade in dynamically loaded factors grid elements
  useEffect(() => {
    if (results) {
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

      const fadeElements = document.querySelectorAll("#results .fade");
      fadeElements.forEach((el) => observer.observe(el));

      return () => {
        fadeElements.forEach((el) => observer.unobserve(el));
      };
    }
  }, [results]);

  // Count-up animation for probability percentage and gauge stroke-dashoffset transition
  useEffect(() => {
    if (!results) {
      setAnimatedScore(0);
      setGaugeOffset(301.6);
      return;
    }

    // SVG Circle offset transition
    const circ = 301.6;
    const targetOffset = circ * (1 - results.score / 100);
    const timerOffset = setTimeout(() => {
      setGaugeOffset(targetOffset);
    }, 50);

    // Number count-up
    setAnimatedScore(0);
    let start = 0;
    const end = results.score;
    if (end === 0) return () => clearTimeout(timerOffset);

    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timerNumber = setInterval(() => {
      start += 1;
      setAnimatedScore(start);
      if (start >= end) {
        clearInterval(timerNumber);
      }
    }, Math.max(stepTime, 16));

    return () => {
      clearTimeout(timerOffset);
      clearInterval(timerNumber);
    };
  }, [results]);

  // Scroll to results when they load
  useEffect(() => {
    if (results && resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [results]);

  const calcSnowDay = (w, stype) => {
    const snowIn = w.snowfall / 2.54; // cm → inches
    const tempF = (w.tempMin * 9) / 5 + 32; // °C → °F
    const windMph = w.wind * 0.621371; // km/h → mph
    const depthIn = w.depth * 39.37; // m → inches

    // Base score from snowfall
    let s = 0;
    if (snowIn >= 18) s = 97;
    else if (snowIn >= 12) s = 90;
    else if (snowIn >= 8) s = 78;
    else if (snowIn >= 5) s = 62;
    else if (snowIn >= 3) s = 44;
    else if (snowIn >= 1.5) s = 28;
    else if (snowIn >= 0.5) s = 13;
    else s = 3;

    // Temperature bonus
    if (tempF < 0) s = Math.min(99, s + 14);
    else if (tempF < 15) s = Math.min(99, s + 8);
    else if (tempF < 25) s = Math.min(99, s + 4);
    else if (tempF > 34) s = Math.max(0, s - 12);

    // Wind bonus
    if (windMph > 45) s = Math.min(99, s + 14);
    else if (windMph > 30) s = Math.min(99, s + 8);
    else if (windMph > 18) s = Math.min(99, s + 4);

    // Existing snow on ground bonus
    if (depthIn > 15) s = Math.min(99, s + 6);
    else if (depthIn > 6) s = Math.min(99, s + 3);

    // Precipitation duration bonus
    if (w.precipHrs > 10) s = Math.min(99, s + 6);
    else if (w.precipHrs > 6) s = Math.min(99, s + 3);

    // School type modifier
    const mods = {
      rural: 10,
      suburban: 0,
      urban: -9,
      private: -16,
      boarding: -26,
    };
    s = Math.max(2, Math.min(99, s + (mods[stype] || 0)));

    // Verdict
    let verdict, color, barColor;
    if (s >= 80) {
      verdict = "🚨 Very High Chance!";
      color = "#4ade80";
      barColor = "#4ade80";
    } else if (s >= 60) {
      verdict = "✅ Looks Likely!";
      color = "#86efac";
      barColor = "#86efac";
    } else if (s >= 40) {
      verdict = "🤔 Maybe... Check Back";
      color = "#fde68a";
      barColor = "#fde68a";
    } else if (s >= 20) {
      verdict = "❄ Probably Not";
      color = "#94a3b8";
      barColor = "#94a3b8";
    } else {
      verdict = "📚 School Is On";
      color = "#f87171";
      barColor = "#f87171";
    }

    return {
      score: s,
      verdict,
      color,
      barColor,
      snowIn,
      tempF,
      windMph,
      depthIn,
    };
  };

  const handlePredict = async (e) => {
    if (e) e.preventDefault();
    setError("");

    if (!/^\d{5}$/.test(zip.trim())) {
      setError("⚠ Please enter a valid 5-digit US ZIP code.");
      return;
    }

    setLoading(true);
    setResults(null);

    try {
      // Step 1: ZIP → lat/lon via Zippopotam
      const geoR = await fetch(`https://api.zippopotam.us/us/${zip.trim()}`);
      if (!geoR.ok) {
        throw new Error("ZIP code not found. Please check and try again.");
      }
      const geo = await geoR.json();
      const lat = parseFloat(geo.places[0].latitude);
      const lon = parseFloat(geo.places[0].longitude);
      const city = `${geo.places[0]["place name"]}, ${geo.places[0]["state abbreviation"]}`;

      // Step 2: Open-Meteo weather
      const wxUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=snowfall_sum,temperature_2m_min,temperature_2m_max,windspeed_10m_max,precipitation_sum,precipitation_hours&current=snow_depth,temperature_2m&timezone=auto&forecast_days=3`;
      const wxR = await fetch(wxUrl);
      if (!wxR.ok) {
        throw new Error("Failed to fetch weather forecast data.");
      }
      const wx = await wxR.json();

      const w = {
        snowfall: wx.daily.snowfall_sum[1] || 0,
        tempMin: wx.daily.temperature_2m_min[1],
        tempMax: wx.daily.temperature_2m_max[1],
        wind: wx.daily.windspeed_10m_max[1] || 0,
        precip: wx.daily.precipitation_sum[1] || 0,
        precipHrs: Math.round(wx.daily.precipitation_hours[1] || 0),
        depth: wx.current.snow_depth || 0,
      };

      // Step 3: Calculate
      const res = calcSnowDay(w, schoolType);

      // Step 4: Prepare tomorrow date label
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dateLabel = tomorrow.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      });

      // Prepare raw results state
      const finalResults = {
        city: city,
        date: dateLabel,
        score: res.score,
        verdict: res.verdict,
        color: res.color,
        barColor: res.barColor,
        snowIn: res.snowIn,
        tempF: res.tempF,
        windMph: res.windMph,
        precipHrs: w.precipHrs,
        depthIn: res.depthIn,
        aiText: "Generating analysis...",
      };

      setResults(finalResults);
      setLoading(false);

      // Step 5: Async AI Narrative fetch from server action/endpoint
      try {
        const aiResponse = await fetch("/api/ai-forecast", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            score: res.score,
            snowIn: res.snowIn,
            tempF: res.tempF,
            windMph: res.windMph,
            precipHrs: w.precipHrs,
            city: city,
            schoolType: schoolType,
          }),
        });
        const aiData = await aiResponse.json();
        if (aiData.text) {
          setResults((prev) => (prev ? { ...prev, aiText: aiData.text } : null));
        } else {
          throw new Error("No AI text returned");
        }
      } catch (err) {
        console.error("AI fetch failed:", err);
      }
    } catch (err) {
      setError("⚠ " + (err.message || "Something went wrong. Please try again."));
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResults(null);
    setZip("");
    setError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    const numericValue = e.target.value.replace(/\D/g, "");
    setZip(numericValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handlePredict();
    }
  };

  const getPillClass = (v, hi, md) => {
    return v >= hi ? "pill-hi" : v >= md ? "pill-md" : "pill-lo";
  };

  return (
    <>
      {/* CALC FORM */}
      <div className="calc-card">
        <div className="form-row">
          <div className="fg">
            <label htmlFor="zip">📍 ZIP Code (US)</label>
            <input
              type="text"
              id="zip"
              placeholder="e.g. 10001"
              maxLength={5}
              inputMode="numeric"
              autoComplete="postal-code"
              value={zip}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className="fg">
            <label htmlFor="stype">🏫 School Type</label>
            <select
              id="stype"
              value={schoolType}
              onChange={(e) => setSchoolType(e.target.value)}
            >
              <option value="suburban">Public – Suburban</option>
              <option value="rural">Public – Rural</option>
              <option value="urban">Public – Urban</option>
              <option value="private">Private / Prep</option>
              <option value="boarding">Boarding School</option>
            </select>
          </div>
        </div>
        <button
          className="predict-btn"
          id="predict-btn"
          onClick={handlePredict}
          disabled={loading}
        >
          <span className="inner">❄&nbsp;&nbsp;Predict My Snow Day</span>
        </button>

        {error && (
          <div className="error-box" id="err" style={{ display: "block" }}>
            {error}
          </div>
        )}

        {loading && (
          <div className="loading" id="loading" style={{ display: "block" }}>
            <div className="spinner"></div>
            <p>Fetching live weather data for your area…</p>
          </div>
        )}
      </div>

      {/* RESULTS DISPLAY */}
      {results && (
        <div id="results" ref={resultsRef} style={{ display: "block" }}>
          <div className="result-card">
            <div className="result-top">
              <div className="city-lbl" id="city-lbl">
                📍 {results.city}
              </div>
              <div className="date-lbl" id="date-lbl">
                {results.date}
              </div>
            </div>

            {/* Gauge */}
            <div className="gauge-wrap">
              <div className="gauge-box">
                <svg
                  className="gauge-svg"
                  viewBox="0 0 120 120"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle className="bg" cx="60" cy="60" r="48" />
                  <circle
                    className="fill"
                    id="gfill"
                    cx="60"
                    cy="60"
                    r="48"
                    stroke={results.color}
                    strokeDasharray="301.6"
                    strokeDashoffset={gaugeOffset}
                  />
                </svg>
                <div className="gauge-inner">
                  <div
                    className="gauge-pct"
                    id="gpct"
                    style={{ color: results.color }}
                  >
                    {Math.round(animatedScore)}%
                  </div>
                  <div className="gauge-sub">Snow Day Chance</div>
                  <div
                    className="gauge-verdict"
                    id="gverdict"
                    style={{ color: results.color }}
                  >
                    {results.verdict}
                  </div>
                </div>
              </div>
              <div className="chance-bar-wrap">
                <div className="chance-labels">
                  <span>0% – No Chance</span>
                  <span>100% – Certain</span>
                </div>
                <div className="chance-track">
                  <div
                    className="chance-fill"
                    id="cbar"
                    style={{
                      width: `${results.score}%`,
                      background: results.barColor,
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Factors */}
            <div className="factors-grid, fade" id="fgrid">
              <div className="fc">
                <div className="fc-icon">❄️</div>
                <div className="fc-val">{results.snowIn.toFixed(1)}&quot;</div>
                <div className="fc-lbl">Expected Snowfall</div>
                <div className={`fc-pill ${getPillClass(results.snowIn, 6, 2)}`}>
                  {results.snowIn >= 6
                    ? "High Impact"
                    : results.snowIn >= 2
                    ? "Moderate"
                    : "Low Impact"}
                </div>
              </div>
              <div className="fc">
                <div className="fc-icon">🌡️</div>
                <div className="fc-val">{Math.round(results.tempF)}°F</div>
                <div className="fc-lbl">Overnight Low</div>
                <div
                  className={`fc-pill ${getPillClass(
                    100 - results.tempF,
                    85,
                    72
                  )}`}
                >
                  {results.tempF < 15
                    ? "Dangerously Cold"
                    : results.tempF < 28
                    ? "Very Cold"
                    : "Manageable"}
                </div>
              </div>
              <div className="fc">
                <div className="fc-icon">💨</div>
                <div className="fc-val">{Math.round(results.windMph)} mph</div>
                <div className="fc-lbl">Peak Wind Speed</div>
                <div
                  className={`fc-pill ${getPillClass(results.windMph, 35, 18)}`}
                >
                  {results.windMph > 35
                    ? "Blizzard Risk"
                    : results.windMph > 18
                    ? "Windy"
                    : "Light Winds"}
                </div>
              </div>
              <div className="fc">
                <div className="fc-icon">🌨️</div>
                <div className="fc-val">{results.precipHrs}h</div>
                <div className="fc-lbl">Hours of Precip</div>
                <div
                  className={`fc-pill ${getPillClass(results.precipHrs, 9, 4)}`}
                >
                  {results.precipHrs > 9
                    ? "All-Day Storm"
                    : results.precipHrs > 4
                    ? "Long Duration"
                    : "Short-Lived"}
                </div>
              </div>
            </div>

            {/* AI Analysis */}
            <div className="ai-box">
              <h3>🤖 AI Forecast Analysis</h3>
              <p className="ai-text" id="ai-text">
                {results.aiText}
              </p>
            </div>

            <button className="reset-btn" onClick={handleReset}>
              ← Check Another ZIP Code
            </button>
          </div>
        </div>
      )}
    </>
  );
}
