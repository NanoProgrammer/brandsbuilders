export async function GET() {
  const base = "https://brandsbuilders.agency";

  // Rutas principales según tu estructura de carpetas
  const routes = [
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
    "/thank-you"
  ];

  // 📝 Nota: tus blogs individuales están en `/blog/[slug]` y portfolio en `/portfolio/[slug]`.
  // Si quieres listarlos dinámicamente, deberías leer los slugs desde tu CMS/content.
  // De momento los dejamos solo con el índice.

  const urls = routes.map((path) => `
    <url>
      <loc>${base}${path}</loc>
      <changefreq>monthly</changefreq>
      <priority>${path === "/" ? "1.0" : "0.7"}</priority>
    </url>
  `).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
