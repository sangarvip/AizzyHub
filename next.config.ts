import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ── Compression ──────────────────────────────────────────────────────────
  compress: true,

  // ── Image optimisation ───────────────────────────────────────────────────
  images: {
    // Serve WebP/AVIF automatically — Next.js negotiates via Accept header
    formats: ["image/avif", "image/webp"],
    // Allow flag images from flagcdn.com
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
      },
    ],
    // Reasonable device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Aggressive cache — 30 days
    minimumCacheTTL: 2592000,
  },

  // ── Security + performance headers ──────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Prevent clickjacking
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Force HTTPS for 1 year, include subdomains
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          // Referrer policy — send origin on same-site, no referrer cross-site
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Permissions policy — disable unused browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Long-lived cache for static assets
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache public images for 30 days
      {
        source: "/(.*)\\.(jpg|jpeg|png|webp|avif|svg|ico|gif)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },

  // ── www → non-www redirect (already present, kept here) ─────────────────
  async redirects() {
    return [
      // non-www → www
      {
        source: "/:path*",
        has: [{ type: "host", value: "aizzyhub.com" }],
        destination: "https://www.aizzyhub.com/:path*",
        permanent: true,
      },
      // /categories → /category (301)
      {
        source: "/categories",
        destination: "/category",
        permanent: true,
      },
      {
        source: "/categories/:slug",
        destination: "/category/:slug",
        permanent: true,
      },
    ];
  },

  // ── Experimental: optimise package imports ───────────────────────────────
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons"],
  },
};

export default nextConfig;
