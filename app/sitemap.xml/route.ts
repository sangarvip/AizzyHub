import { allPosts } from "@/src/lib/posts";

const BASE_URL = "https://www.aizzyhub.com";

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq: string;
  priority: number;
}

export async function GET() {
  const entries: SitemapEntry[] = [
    { loc: `${BASE_URL}/`, changefreq: "weekly", priority: 1.0 },
    { loc: `${BASE_URL}/blog`, changefreq: "weekly", priority: 0.9 },
    { loc: `${BASE_URL}/category`, changefreq: "weekly", priority: 0.8 },
    { loc: `${BASE_URL}/category/finance`, changefreq: "weekly", priority: 0.8 },
    { loc: `${BASE_URL}/category/stock-market`, changefreq: "weekly", priority: 0.8 },
    { loc: `${BASE_URL}/category/mutual-funds`, changefreq: "weekly", priority: 0.8 },
    { loc: `${BASE_URL}/category/tech-innovation`, changefreq: "weekly", priority: 0.8 },
    { loc: `${BASE_URL}/category/ai-finance`, changefreq: "weekly", priority: 0.8 },
    { loc: `${BASE_URL}/about-us`, changefreq: "monthly", priority: 0.7 },
    { loc: `${BASE_URL}/contact`, changefreq: "monthly", priority: 0.7 },
    { loc: `${BASE_URL}/legal/disclaimer`, changefreq: "monthly", priority: 0.5 },
    { loc: `${BASE_URL}/legal/privacy-policy`, changefreq: "monthly", priority: 0.5 },
    { loc: `${BASE_URL}/legal/terms-and-conditions`, changefreq: "monthly", priority: 0.5 },
    { loc: `${BASE_URL}/legal/editorial-policy`, changefreq: "monthly", priority: 0.6 },
    { loc: `${BASE_URL}/legal/affiliate-disclosure`, changefreq: "monthly", priority: 0.5 },
    { loc: `${BASE_URL}/legal/fact-checking-policy`, changefreq: "monthly", priority: 0.5 },
    ...allPosts.map((post) => ({
      loc: `${BASE_URL}/blog/${post.slug}`,
      lastmod: post.date,
      changefreq: "weekly",
      priority: 0.9,
    })),
  ];

  const toXml = (e: SitemapEntry) => {
    const lastmod = e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : "";
    return `  <url>
    <loc>${e.loc}</loc>${lastmod}
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`;
  };

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(toXml).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
