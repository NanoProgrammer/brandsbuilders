// src/pages/sitemap.xml.ts
// Sitemap estático + dinámico (blog/portfolio via astro:content si existe)

import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
  const base = "https://brandsbuilders.agency";

  // 1) Rutas fijas según tu estructura actual
  const fixedRoutes = [
    "/",                        // home
    "/about",
    "/blog",                    // índice del blog
    "/contact",
    "/faq",
    "/portfolio",
    "/privacy-policy",
    "/services",
    "/services/ads-service",
    "/services/growth-partner",
    "/services/local-seo",
    "/services/web-development",
    "/terms-of-service",
    "/testimonials",
    "/thank-you",
  ];

  // 2) Descubrir subpáginas reales en /services/**/index.astro
  // (útil si agregas nuevos servicios sin tocar este archivo)
  const serviceFiles = Object.keys(
    import.meta.glob("src/pages/services/**/index.astro", { eager: true })
  );

  // Helpers para transformar rutas de archivo a paths públicos
  const toPath = (filePath: string) =>
    filePath
      .replace(/^src\/pages/, "")
      .replace(/\/index\.astro$/, "");

  const servicePaths = serviceFiles
    .map(toPath)
    .filter((p) => p !== "/services"); // evita duplicar el índice

  // 3) Blog y portfolio desde astro:content (si existen)
  //    Si no tienes collections, estos arrays quedarán vacíos y no hay problema.
  let blogPaths: string[] = [];
  let portfolioPaths: string[] = [];
  try {
    // @ts-ignore - import condicional (solo si usas astro:content)
    const { getCollection } = await import("astro:content");

    try {
      const blog = await getCollection("blog");
      blogPaths = blog.map((e: { slug: string }) => `/blog/${e.slug}`);
    } catch (_) {
      blogPaths = [];
    }

    try {
      const portfolio = await getCollection("portfolio");
      portfolioPaths = portfolio.map((e: { slug: string }) => `/portfolio/${e.slug}`);
    } catch (_) {
      portfolioPaths = [];
    }
  } catch (_) {
    // Si no está configurado astro:content, seguimos solo con fixed + services
  }

  // 4) Unir y normalizar (evita duplicados)
  const allPaths = Array.from(new Set([
    ...fixedRoutes,
    ...servicePaths,
    ...blogPaths,
    ...portfolioPaths,
  ])).sort();

  // 5) Generar XML con prioridades simples
  const now = new Date().toISOString();

  const urls = allPaths.map((path) => {
    const loc = `${base}${path}`;
    const isHome = path === "/";
    const isIndex = ["/blog", "/portfolio", "/services"].includes(path) || /^\/services\/?$/.test(path);
    const priority = isHome ? "1.0" : isIndex ? "0.8" : "0.7";
    const changefreq = isIndex ? "weekly" : "monthly";

    return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=UTF-8" } });
};
