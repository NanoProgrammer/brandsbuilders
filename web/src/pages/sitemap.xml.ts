// src/pages/sitemap.xml.ts
import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
  const base = "https://brandsbuilders.agency";
  const now = new Date().toISOString();

  /* ============================
     1) RUTAS FIJAS (REALES)
  ============================ */
  const fixedRoutes = [
    "/",
    "/apply",
    "/blog",
    "/faq",
    "/Free-Acquisition-Diagnostic",
    "/industry/services-home",
    "/process",
    "/proof",
    
  ];

  /* ============================
     2) AUTO-DISCOVERY POR FOLDER
  ============================ */
  const pageFiles = [
    ...Object.keys(import.meta.glob("./industry/**/index.astro", { eager: true })),
  ];

  const toPath = (file: string) =>
    file
      .replace(/\\/g, "/")
      .replace(/^\.?\/?src\/pages/, "")
      .replace(/\/index\.astro$/, "");

  const discoveredPaths = pageFiles.map(toPath);

  /* ============================
     3) BLOG SLUGS (ACTUAL)
     (mock — mantenlo sincronizado)
  ============================ */
  const blogSlugs = [
    "client-acquisition-systems-alberta",
  ];

  const blogPaths = blogSlugs.map((s) => `/blog/${s}`);

  /* ============================
     4) UNIFICAR
  ============================ */
  const allPaths = Array.from(
    new Set([
      ...fixedRoutes,
      ...discoveredPaths,
      ...blogPaths,
    ])
  ).sort();

  /* ============================
     5) PRIORIDAD & FREQ
  ============================ */
  const priority = (path: string) => {
    if (path === "/") return "1.0";
    if (["/apply", "/Free-Acquisition-Diagnostic"].includes(path)) return "0.9";
    if (["/services-home", "/blog"].includes(path)) return "0.8";
    if (path.startsWith("/industry/")) return "0.75";
    if (path.startsWith("/blog/")) return "0.7";
    return "0.6";
  };

  const changefreq = (path: string) => {
    if (path === "/") return "weekly";
    if (path.startsWith("/blog")) return "weekly";
    return "monthly";
  };

  /* ============================
     6) XML
  ============================ */
  const urls = allPaths
    .map(
      (path) => `
  <url>
    <loc>${base}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq(path)}</changefreq>
    <priority>${priority(path)}</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=UTF-8" },
  });
};
