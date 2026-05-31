import { Oswald, DM_Sans } from "next/font/google";
import CookieConsent from "../components/CookieConsent";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://snowloadcalculator.live'),
  title: "Snow Day Calculator 2025 – Will You Have a Snow Day Tomorrow?",
  description: "Free AI-powered snow day calculator. Enter your ZIP code for an instant, accurate snow day prediction based on real-time weather data. Find out your exact % chance of a snow day tomorrow.",
  keywords: [
    "snow day calculator",
    "snow day predictor",
    "snow day tomorrow",
    "will i have a snow day",
    "snowday calculator",
    "school snow day chance",
    "snow day probability",
    "snow day calculator zip code"
  ],
  icons: {
    icon: [
      { url: '/favicon.png' },
      new URL('/favicon.png', 'https://snowloadcalculator.live'),
    ],
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Snow Day Calculator – AI-Powered Snow Day Prediction",
    description: "Find out your exact % chance of a snow day. Real weather data + AI. Enter your ZIP code for an instant prediction.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snow Day Calculator – Will You Have a Snow Day?",
    description: "Get your exact % chance of a school snow day tomorrow. Free, AI-powered, instant predictions.",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SnowLoadCalculator - Snow Day Calculator",
    "description": "AI-powered snow day calculator that predicts school closings using real-time weather data.",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  return (
    <html lang="en" className={`${oswald.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
