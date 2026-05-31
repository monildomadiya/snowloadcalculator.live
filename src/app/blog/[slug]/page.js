import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Snowflakes from "../../../components/Snowflakes";
import { getArticleBySlug, getAllArticles } from "../../../data/articles";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) return {};
  
  return {
    title: `${article.title} – SnowLoadCalculator Blog`,
    description: article.description,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": article.author
    }
  };

  return (
    <>
      <Snowflakes />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="wrap">
        <Header />
        
        <div style={{ paddingTop: '20px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
          <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>&larr; Back to Blog</Link>
        </div>

        <article className="content" style={{ paddingTop: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ color: 'var(--blue)', fontSize: '1rem', marginBottom: '1rem' }}>{article.date}</div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--fg)', lineHeight: '1.2' }}>
            {article.title}
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', borderLeft: '4px solid var(--blue)', paddingLeft: '1rem' }}>
            {article.description}
          </p>
          
          <div 
            className="article-body"
            style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.9)' }}
            dangerouslySetInnerHTML={{ __html: article.content }} 
          />
        </article>
      </div>

      <div className="divider"></div>
      <Footer />
    </>
  );
}
