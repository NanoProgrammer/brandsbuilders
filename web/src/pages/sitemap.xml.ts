// src/pages/sitemap.xml.ts
import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = async () => {
  const base = "https://brandsbuilders.agency";

  // 1) Rutas fijas
  const fixedRoutes = [
    "/",
    "/about",
    "/blog",
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

  // 2) Descubrir subpáginas en /services/**/index.astro
  const serviceFiles = Object.keys(
    import.meta.glob("./services/**/index.astro", { eager: true })
    // Alternativa absoluta:
    // import.meta.glob("/src/pages/services/**/index.astro", { eager: true })
  );

  const toPath = (filePath: string) =>
    filePath
      // normaliza separadores por si el build corre en Windows
      .replace(/\\/g, "/")
      .replace(/^\.?\/?src\/pages/, "")
      .replace(/\/index\.astro$/, "");

  const servicePaths = serviceFiles
    .map(toPath)
    .filter((p) => p !== "/services");

  // 3) Blog y portfolio via astro:content (opcional)
  let blogPaths: string[] = [];
  let portfolioPaths: string[] = [];
  try {
    // @ts-ignore: import condicional
    const { getCollection } = await import("astro:content");
    try {
      const blog = await getCollection("blog");
      blogPaths = blog.map((e: { slug: string }) => `/blog/${e.slug}`);
    } catch {}
    try {
      const portfolio = await getCollection("portfolio");
      portfolioPaths = portfolio.map((e: { slug: string }) => `/portfolio/${e.slug}`);
    } catch {}
  } catch {
    // sin astro:content, seguimos con fixed + services
  }

  // 4) Unir y normalizar
  const allPaths = Array.from(new Set([
    ...fixedRoutes,
    ...servicePaths,
    ...blogPaths,
    ...portfolioPaths,
  ])).sort();

  // 5) XML
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

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=UTF-8" },
  });
};
