import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
  const base = "https://brandsbuilders.ca";
  const now = new Date().toISOString();

  const staticRoutes = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/services", priority: "0.9", changefreq: "monthly" },
    { path: "/apply", priority: "0.9", changefreq: "monthly" },
    { path: "/proof", priority: "0.8", changefreq: "monthly" },
    { path: "/about", priority: "0.7", changefreq: "yearly" },
    { path: "/faq", priority: "0.7", changefreq: "monthly" },
    { path: "/process", priority: "0.6", changefreq: "yearly" },
    { path: "/terms-of-service", priority: "0.3", changefreq: "yearly" },
    { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  ];

  const urls = staticRoutes
    .map(({ path, priority, changefreq }) =>
      `<url><loc>${base}${path}</loc><lastmod>${now}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=UTF-8" } }
  );
};
