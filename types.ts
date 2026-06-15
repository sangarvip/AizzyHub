export interface Author {
  name: string;
  avatar: string;
  bio: string;
  link: string;
  expertise?: string[];
  social?: {
    twitter?: string;
    linkedin?: string;
  };
  lastUpdated?: string;
}

export interface InternalLink {
  text: string;
  href: string;
}

export interface TableData {
  title: string;
  intro?: string;
  columns: string[];
  rows: string[][];
}

export interface StepItem {
  title: string;
  desc?: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface Affiliate {
  name: string;
  logo: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  tags?: string[];
  metaTitle?: string;
  metaDescription?: string;
  author: Author;
  date: string;
  readTime: string;
  heroImage: string;
  heroImageAlt?: string;

  // ── New format: HTML content + top-level CTA ──────────────────────────────
  contentHtml?: string;
  cta?: { text: string; button: string; link?: string };

  // ── Legacy: structured sections (JSON-based posts) ────────────────────────
  sections?: {
    hook: { title?: string; text?: string; paragraphs?: string[] };
    problem: { title: string; content?: string; paragraphs?: string[] };
    benefit: {
      title: string;
      content?: string;
      intro?: string;
      benefits?: { title: string; desc: string }[];
      conclusion?: string;
    };
    comparison: TableData;
    steps: { title: string; items: StepItem[] };
    faq: { title: string; items: FAQItem[] };
    conclusion: {
      title: string;
      content?: string;
      points?: string[];
      ctaText?: string;
      ctaLink?: string;
    };
    cta: { text: string; button: string; link?: string };
  };

  affiliate?: Affiliate;
  relatedSlugs?: string[];
  internalLinks?: InternalLink[];
}
