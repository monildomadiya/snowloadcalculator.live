import React from "react";
import Snowflakes from "../../../../components/Snowflakes";
import Header from "../../../../components/Header";
import Calculator from "../../../../components/Calculator";
import FAQ from "../../../../components/FAQ";
import Footer from "../../../../components/Footer";
import { getStateBySlug, getAllStates } from "../../../../data/locations";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const states = getAllStates();
  const params = [];
  
  for (const state of states) {
    for (const city of state.topCities) {
      params.push({
        state: state.slug,
        city: city.slug,
      });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }) {
  const { state, city } = await params;
  const stateData = getStateBySlug(state);
  
  if (!stateData) return {};
  const cityData = stateData.topCities.find(c => c.slug === city);
  if (!cityData) return {};
  
  return {
    title: `${cityData.name}, ${stateData.name} Snow Day Calculator – Will School Be Canceled?`,
    description: `Check your exact chance of a snow day in ${cityData.name}, ${stateData.name} tomorrow. Free AI-powered predictor using live local weather data.`,
    alternates: {
      canonical: `/state/${stateData.slug}/${cityData.slug}`,
    },
  };
}

export default async function CityPage({ params }) {
  const { state, city } = await params;
  const stateData = getStateBySlug(state);

  if (!stateData) {
    notFound();
  }
  
  const cityData = stateData.topCities.find(c => c.slug === city);
  if (!cityData) {
    notFound();
  }

  return (
    <>
      <Snowflakes />
      <div className="wrap">
        <Header />
        
        {/* Breadcrumbs for internal linking & SEO */}
        <div style={{ paddingTop: '20px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
          <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link> &gt;{' '}
          <Link href={`/state/${stateData.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>{stateData.name}</Link> &gt;{' '}
          <span style={{ color: '#fff' }}>{cityData.name}</span>
        </div>

        <div className="hero" id="calculator">
          <div className="badge">⚡ {cityData.name} Weather Data</div>
          <h1>
            <span className="sub">{cityData.name} Snow Day Calculator</span>
            Will You Have
            <br />A Snow Day in {cityData.name}?
          </h1>
          <p className="hero-desc">
            Get your exact % chance of a school snow day tomorrow in {cityData.name}, {stateData.name} — powered by
            live local weather forecasts and AI analysis.
          </p>
          <Calculator />
        </div>
      </div>
      
      <FAQ />
      <div className="divider"></div>
      <Footer />
    </>
  );
}
