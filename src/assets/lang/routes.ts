/* =========================================
   📍 Routes.ts
   Centralized and type-safe route definitions
========================================= */

export const Routes = {
  home: "/",
  blog: "/blog",
  categories: "/category",
  about: "/about-us",
  contact: "/contact",

  // Legal Pages
  disclaimer: "/legal/disclaimer",
  privacyPolicy: "/legal/privacy-policy",
  termsAndConditions: "/legal/terms-and-conditions",

  // Social Links
  socials: {
    x: "https://x.com/aizzyhub",
    linkedin: "https://linkedin.com/in/aizzyhub",
    youtube: "https://youtube.com/@aizzyhub",
    instagram: "https://instagram.com/aizzyhub",
  },
} as const;

export type RouteKey = keyof typeof Routes;
