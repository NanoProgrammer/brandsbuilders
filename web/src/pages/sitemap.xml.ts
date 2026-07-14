import type { APIRoute } from "astro";
import { getAllCombinations } from "../data/servicePages.ts";

export const prerender = true;

export const GET: APIRoute = async () => {
  const base = "https://brandsbuilders.ca";
  const now = new Date().toISOString();

  const staticRoutes = [
    { path: "/", priority: "1.0" },
    { path: "/services", priority: "0.9" },
    { path: "/apply", priority: "0.9" },
    { path: "/apply/web-design", priority: "0.8" },
    { path: "/apply/reactivation", priority: "0.8" },
    { path: "/apply/membership", priority: "0.8" },
    { path: "/proof", priority: "0.8" },
    { path: "/about", priority: "0.7" },
    { path: "/faq", priority: "0.7" },
    { path: "/process", priority: "0.6" },
    { path: "/blog", priority: "0.6" },
    { path: "/blog/client-acquisition-systems-alberta", priority: "0.5" },
    { path: "/blog/when-growth-does-not-make-sense", priority: "0.5" },
    { path: "/blog/why-ads-fail-local-businesses", priority: "0.5" },
    { path: "/terms-of-service", priority: "0.3" },
    { path: "/privacy-policy", priority: "0.3" },
  ];

  const combos = getAllCombinations();

  const serviceRoutes = [
    { prefix: "/missed-calls", t1: "0.9", t2: "0.7" },
    { prefix: "/web-design",   t1: "0.9", t2: "0.7" },
    { prefix: "/reactivation", t1: "0.8", t2: "0.6" },
    { prefix: "/membership",   t1: "0.8", t2: "0.6" },
  ].flatMap(({ prefix, t1, t2 }) =>
    combos.map(({ city, industry }) => ({
      path: `${prefix}/${city.slug}/${industry.slug}`,
      priority: city.tier === 1 ? t1 : t2,
    }))
  );

  const allRoutes = [...staticRoutes, ...serviceRoutes];

  const urls = allRoutes
    .map(({ path, priority }) =>
      `<url><loc>${base}${path}</loc><lastmod>${now}</lastmod><priority>${priority}</priority></url>`
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
    { headers: { "Content-Type": "application/xml; charset=UTF-8" } }
  );
};
