// src/pages/sitemap.xml.ts
// Descubre rutas estáticas + dinámicas (blog y portfolio)

export async function GET() {
  const base = "https://brandsbuilders.agency";

  // 1) Rutas fijas (según tu estructura)
  const fixedRoutes = [
    "/",                        // home
    "/about",
    "/blog",                    // índice del blog
    "/contact",
    "/faq",
    "/portfolio",
    "/privacy-policy",
    "/services",
    "/services/branding",
    "/services/local-seo",
    "/services/web-design",
    "/terms-of-service",
    "/testimonials",
    "/thank-you",
  ];

  // 2) Rutas dinámicas desde /src/pages/blog/[slug]/index.astro
  //    y /src/pages/portfolio/[slug]/index.astro
  //    (se resuelve en build, no en runtime)
  const blogFiles = Object.keys(
    import.meta.glob("/src/pages/blog/**/index.astro", { eager: true })
  );
  const portfolioFiles = Object.keys(
    import.meta.glob("/src/pages/portfolio/**/index.astro", { eager: true })
  );

  // Helpers para transformar rutas de archivo a paths públicos
  const toPath = (filePath: string) =>
    filePath
      .replace("/src/pages", "")
      .replace("/index.astro", "")
      .replace(/\/\[(.*?)\]/g, ""); // por si hubiera anidados

  const blogPaths = blogFiles
    .map(toPath)
    .filter((p) => p !== "/blog"); // evita duplicar índice

  const portfolioPaths = portfolioFiles
    .map(toPath)
    .filter((p) => p !== "/portfolio");

  // 3) Unir y normalizar (evita duplicados)
  const allPaths = Array.from(new Set([...fixedRoutes, ...blogPaths, ...portfolioPaths]));

  // 4) Generar XML (agrega lastmod y prioridades)
  const now = new Date().toISOString();

  const urls = allPaths
    .map((path) => {
      const loc = `${base}${path}`;
      const isHome = path === "/";
      const isIndex = ["/blog", "/portfolio", "/services"].includes(path);
      const priority = isHome ? "1.0" : isIndex ? "0.8" : "0.7";

      return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${isIndex ? "weekly" : "monthly"}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
}
