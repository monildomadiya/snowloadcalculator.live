export default function sitemap() {
  const baseUrl = "https://snowloadcalculator.live";

  // Define static routes
  const routes = [
    "",
    "/privacy-policy",
    "/terms-of-service",
    "/disclaimer",
    "/about",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
