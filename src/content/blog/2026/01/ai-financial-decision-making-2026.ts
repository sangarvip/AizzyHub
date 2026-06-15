import type { BlogPost } from "@/types";

const meta: Omit<BlogPost, "contentHtml"> = {
  slug: "ai-financial-decision-making-2026",
  category: "AI in Finance",
  tags: [
    "AI in finance",
    "financial decision making",
    "machine learning investing",
    "robo advisors",
    "AI portfolio management",
    "algorithmic finance",
    "2026",
  ],
  title: "How AI Is Transforming Financial Decision-Making in 2026",
  metaTitle: "How AI Is Transforming Financial Decisions in 2026",
  metaDescription:
    "Discover how AI is reshaping financial decision-making in 2026 — from robo-advisors and risk analysis to fraud detection and personalised investing strategies.",
  author: {
    name: "Team AizzyHub",
    avatar: "/blogpage/authors/author.png",
    bio: "AizzyHub simplifies finance, investing, and technology for modern investors and entrepreneurs worldwide.",
    link: "/about-us",
    expertise: ["AI in Finance", "Investing", "Fintech", "Personal Finance"],
    social: {
      twitter: "https://twitter.com/aizzyhub",
      linkedin: "https://linkedin.com/company/aizzyhub",
    },
  },
  date: "2026-05-27",
  readTime: "11 min read",
  heroImage: "/blogpage/2026/05/ai-finance-2026/ai-financial-decision-making.jpg",
  heroImageAlt:
    "AI neural network overlaid on financial charts representing AI-driven financial decision-making in 2026",
  cta: {
    text: "Get the latest AI finance and investing insights delivered to your inbox — free.",
    button: "Subscribe Free",
  },
  relatedSlugs: [
    "ai-vs-human-traders-2026",
    "fintech-innovations-2026",
    "mutual-funds-2026-smart-strategies",
  ],
  internalLinks: [
    {
      text: "how AI compares to human traders in 2026",
      href: "/blog/ai-vs-human-traders-2026",
    },
    {
      text: "the biggest fintech innovations reshaping digital finance",
      href: "/blog/fintech-innovations-2026",
    },
    {
      text: "AI in Finance guides",
      href: "/category/ai-finance",
    },
  ],
};

export default meta;
