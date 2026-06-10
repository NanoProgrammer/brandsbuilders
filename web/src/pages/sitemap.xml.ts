import type { APIRoute } from "astro";
export const prerender = true;
export const GET: APIRoute = async () => {
  const base = "https://brandsbuilders.ca";
  const now = new Date().toISOString();
  const routes = ["/","/apply","/blog","/faq","/rebooking-system","/process","/proof","/about","/industry/services-home","/industry/HVAC","/blog/client-acquisition-systems-alberta","/blog/when-growth-does-not-make-sense","/blog/why-ads-fail-local-businesses"];
  const urls = routes.map(p => `<url><loc>${base}${p}</loc><lastmod>${now}</lastmod><priority>${p==="/"?"1.0":"0.7"}</priority></url>`).join("");
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { "Content-Type": "application/xml; charset=UTF-8" } });
};