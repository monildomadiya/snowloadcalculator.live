import React from "react";
import Snowflakes from "../../../components/Snowflakes";
import Header from "../../../components/Header";
import Calculator from "../../../components/Calculator";
import FAQ from "../../../components/FAQ";
import Footer from "../../../components/Footer";
import { getStateBySlug, getAllStates } from "../../../data/locations";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const states = getAllStates();
  return states.map((state) => ({
    state: state.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { state } = await params;
  const stateData = getStateBySlug(state);
  
  if (!stateData) return {};
  
  return {
    title: `${stateData.name} Snow Day Calculator – Will School Be Canceled?`,
    description: `Check your exact chance of a snow day in ${stateData.name} tomorrow. Free AI-powered predictor using live ${stateData.name} weather data.`,
    alternates: {
      canonical: `/state/${stateData.slug}`,
    },
  };
}

export default async function StatePage({ params }) {
  const { state } = await params;
  const stateData = getStateBySlug(state);

  if (!stateData) {
    notFound();
  }

  return (
    <>
      <Snowflakes />
      <div className="wrap">
        <Header />
        <div className="hero" id="calculator">
          <div className="badge">⚡ {stateData.name} Weather Data</div>
          <h1>
            <span className="sub">{stateData.name} Snow Day Calculator</span>
            Will You Have
            <br />A Snow Day in {stateData.name}?
          </h1>
          <p className="hero-desc">
            Get your exact % chance of a school snow day tomorrow in {stateData.name} — powered by
            live local weather forecasts and AI analysis.
          </p>
          <Calculator />
        </div>
      </div>
      
      {/* Top Cities Section */}
      <section className="content" style={{ paddingTop: '2rem' }}>
        <div className="wrap">
          <h2 className="stitle" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Check Snow Day Chances in Popular {stateData.name} Cities
          </h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {stateData.topCities.map((city) => (
              <Link 
                key={city.slug} 
                href={`/state/${stateData.slug}/${city.slug}`}
                style={{ 
                  padding: '10px 20px', 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '8px',
                  color: 'var(--fg)',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <div className="divider"></div>
      <Footer />
    </>
  );
}
