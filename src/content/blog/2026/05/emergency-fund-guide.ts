import type { BlogPost } from "@/types";

const meta: Omit<BlogPost, "contentHtml"> = {
  slug: "emergency-fund-guide",
  category: "Finance",
  tags: [
    "emergency fund",
    "personal finance",
    "savings",
    "financial planning",
    "budgeting",
    "financial security",
    "2026",
  ],
  title: "Emergency Fund: How Much Do You Really Need?",
  metaTitle: "Emergency Fund: How Much Do You Really Need?",
  metaDescription:
    "Not sure how much to save in your emergency fund? This guide breaks down exactly how much you need, where to keep it, and how to build it fast — even on a tight budget.",
  author: {
    name: "Team AizzyHub",
    avatar: "/blogpage/authors/author.png",
    bio: "AizzyHub simplifies finance, investing, and technology for modern investors and entrepreneurs worldwide.",
    link: "/about-us",
    expertise: ["Personal Finance", "Budgeting", "Savings", "Financial Planning"],
    social: {
      twitter: "https://twitter.com/aizzyhub",
      linkedin: "https://linkedin.com/company/aizzyhub",
    },
  },
  date: "2026-05-31",
  readTime: "9 min read",
  heroImage: "/blogpage/2026/05/emergency-fund/emergency-fund-guide.jpg",
  heroImageAlt:
    "A glass jar filled with coins and a label reading emergency fund, representing personal savings and financial security",
  cta: {
    text: "Get practical personal finance tips delivered to your inbox — free.",
    button: "Subscribe Free",
  },
  relatedSlugs: [
    "small-business-finance-2026",
    "mutual-funds-2026-smart-strategies",
    "fintech-innovations-2026",
  ],
  internalLinks: [
    {
      text: "how to manage your small business finances smarter in 2026",
      href: "/blog/small-business-finance-2026",
    },
    {
      text: "mutual funds strategies for 2026",
      href: "/blog/mutual-funds-2026-smart-strategies",
    },
    {
      text: "personal finance guides",
      href: "/category/finance",
    },
  ],
};

export default meta;
