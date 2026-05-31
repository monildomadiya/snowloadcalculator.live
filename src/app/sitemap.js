import { getAllStates } from "../data/locations";
import { getAllArticles } from "../data/articles";

export default function sitemap() {
  const baseUrl = "https://snowloadcalculator.live";

  // Define static routes
  const staticRoutes = [
    "",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer",
    "/about",
    "/contact",
    "/blog",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  // State and City routes
  const states = getAllStates();
  const locationRoutes = [];
  
  states.forEach(state => {
    locationRoutes.push({
      url: `${baseUrl}/state/${state.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    });
    
    state.topCities.forEach(city => {
      locationRoutes.push({
        url: `${baseUrl}/state/${state.slug}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    });
  });

  // Blog routes
  const articles = getAllArticles();
  const blogRoutes = articles.map(article => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...locationRoutes, ...blogRoutes];
}
