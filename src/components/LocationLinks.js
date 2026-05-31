"use client";
import React from "react";
import Link from "next/link";
import { getAllStates } from "../data/locations";

export default function LocationLinks() {
  const states = getAllStates();

  return (
    <section className="content" style={{ paddingTop: 0 }} id="locations">
      <div className="wrap">
        <div className="stag">Local Forecasts</div>
        <h2 className="stitle">
          Find Your <span>Local</span> Snow Day Calculator
        </h2>
        <p className="sdesc">
          We provide hyper-local snow day predictions for school districts across the country. 
          Select your state below to find your specific forecast.
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
          gap: '15px',
          marginTop: '2rem'
        }}>
          {states.map((state) => (
            <Link 
              key={state.slug} 
              href={`/state/${state.slug}`}
              style={{
                display: 'block',
                padding: '12px 15px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '8px',
                color: 'var(--fg)',
                textDecoration: 'none',
                transition: 'all 0.2s',
                textAlign: 'center',
                fontWeight: '500'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {state.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
