import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Snowflakes from "../../components/Snowflakes";
import Link from "next/link";
import { getAllArticles } from "../../data/articles";

export const metadata = {
  title: "Snow Day Blog – News & Information on School Closings",
  description: "Read our latest articles on how snow days are decided, historical winter storms, and the science behind our snow day calculator.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogIndex() {
  const articles = getAllArticles();

  return (
    <>
      <Snowflakes />
      <div className="wrap">
        <Header />
        
        <div className="hero" style={{ paddingBottom: '3rem' }}>
          <div className="badge">❄️ Winter Weather Hub</div>
          <h1>
            <span className="sub">SnowLoadCalculator Blog</span>
            Winter Weather &amp;
            <br />School Closings
          </h1>
          <p className="hero-desc">
            Insights, guides, and stories about how weather affects school districts across the country.
          </p>
        </div>
      </div>
      
      <section className="content" style={{ paddingTop: '2rem' }}>
        <div className="wrap">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {articles.map((article) => (
              <article key={article.slug} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '2rem',
                borderRadius: '12px'
              }}>
                <div style={{ color: 'var(--blue)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{article.date}</div>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--fg)' }}>
                  <Link href={`/blog/${article.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {article.title}
                  </Link>
                </h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                  {article.description}
                </p>
                <Link href={`/blog/${article.slug}`} style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  background: 'var(--blue)',
                  color: '#fff',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '600'
                }}>
                  Read More &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>
      <Footer />
    </>
  );
}
