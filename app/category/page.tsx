import CategoriesSection from "@/src/components/categorypage/CategoriesSection";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Finance Categories – Investing, Fintech & AI | AizzyHub",
  description:
    "Browse all AizzyHub finance categories — personal finance, stock market investing, mutual funds, AI in finance, and fintech. Find guides matched to your financial goals.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.aizzyhub.com/category" },
  openGraph: {
    title: "Finance Categories – Investing, Fintech & AI | AizzyHub",
    description:
      "Browse all AizzyHub finance categories — personal finance, stock market, mutual funds, AI finance, and fintech.",
    url: "https://www.aizzyhub.com/category",
    siteName: "AizzyHub",
    type: "website",
    images: [
      {
        url: "https://www.aizzyhub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AizzyHub Finance Categories",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance Categories – Investing, Fintech & AI | AizzyHub",
    description:
      "Browse all AizzyHub finance categories — personal finance, stock market, mutual funds, AI finance, and fintech.",
    site: "@aizzyhub",
  },
};

const CATEGORY_DESCRIPTIONS = [
  {
    slug: "finance",
    name: "Personal Finance",
    desc: "Personal finance is the foundation of every financial goal. Our guides cover budgeting, building an emergency fund, managing debt, saving strategies, and long-term financial planning — written for readers in the US, UK, Canada, and Australia. Whether you're just starting out or looking to optimise your finances, this is where to begin.",
    posts: [
      { title: "Emergency Fund: How Much Do You Really Need?", href: "/blog/emergency-fund-guide" },
      { title: "Smart Small Business Finance Tips for 2026", href: "/blog/small-business-finance-2026" },
    ],
  },
  {
    slug: "stock-market",
    name: "Stock Market Investing",
    desc: "Stock market investing doesn't have to be complicated. Our beginner-friendly guides explain how stocks work, how to evaluate companies, how to build a diversified portfolio, and how AI is changing the way traders make decisions. We cover both fundamental and technical approaches, with practical examples relevant to global markets.",
    posts: [
      { title: "AI vs Human Traders in 2026", href: "/blog/ai-vs-human-traders-2026" },
    ],
  },
  {
    slug: "mutual-funds",
    name: "Mutual Funds & ETFs",
    desc: "Mutual funds and ETFs are among the most accessible investment vehicles for beginners. Our guides explain how SIP investing works, how to compare funds, how to build a diversified portfolio with low fees, and what the smartest strategies look like in 2026. We cover index funds, actively managed funds, and ETF investing across global markets.",
    posts: [
      { title: "Mutual Fund Strategies for 2026", href: "/blog/mutual-funds-2026-smart-strategies" },
    ],
  },
  {
    slug: "ai-finance",
    name: "AI in Finance",
    desc: "Artificial intelligence is reshaping every corner of finance — from robo-advisors and algorithmic trading to fraud detection and personalised financial advice. Our AI in Finance guides explain what's actually happening, what it means for your investments, and how to use AI-powered tools to make smarter financial decisions.",
    posts: [
      { title: "How AI Is Transforming Financial Decisions in 2026", href: "/blog/ai-financial-decision-making-2026" },
      { title: "AI vs Human Traders in 2026", href: "/blog/ai-vs-human-traders-2026" },
    ],
  },
  {
    slug: "tech-innovation",
    name: "Fintech & Innovation",
    desc: "Fintech is changing how money moves, how credit works, and how people access financial services. Our Fintech & Innovation guides cover open banking, embedded finance, digital currencies, DeFi, Buy Now Pay Later, and the technologies that are making financial services more accessible, cheaper, and smarter for everyone.",
    posts: [
      { title: "Top Fintech Innovations in 2026", href: "/blog/fintech-innovations-2026" },
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "What finance categories does AizzyHub cover?",
    a: "AizzyHub covers five main categories: Personal Finance, Stock Market Investing, Mutual Funds & ETFs, AI in Finance, and Fintech & Innovation. Each category contains practical, beginner-friendly guides updated for 2026.",
  },
  {
    q: "Which category should I start with as a beginner?",
    a: "If you're new to finance, start with Personal Finance — specifically our guide on building an emergency fund. Once you have a financial foundation, move to Mutual Funds & ETFs for your first investing steps.",
  },
  {
    q: "Are the guides relevant to my country?",
    a: "Yes. Our guides are written with readers in the US, UK, Canada, and Australia in mind. Where regulations, tax rules, or market conditions differ by country, we note the relevant context.",
  },
  {
    q: "How do I find guides on a specific topic?",
    a: "Click any category below to browse all guides in that topic area. You can also use the search function on the blog page to find articles by keyword.",
  },
];

export default function CategoriesPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <Breadcrumb
          items={[{ label: "Home", href: "/" }, { label: "Categories" }]}
        />

        {/* H1 + intro */}
        <div className="py-10 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Finance & Investing Categories
          </h1>
          <p className="text-base text-muted leading-relaxed">
            Browse all AizzyHub finance topics — from personal finance fundamentals and stock market investing to AI-powered finance tools and the latest fintech innovations. Every guide is free, beginner-friendly, and updated for 2026.
          </p>
        </div>

        <CategoriesSection />
      </div>

      {/* SEO content section */}
      <section className="w-full bg-surface border-t border-border py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-6 space-y-12">

          {/* Category descriptions */}
          {CATEGORY_DESCRIPTIONS.map((cat) => (
            <div key={cat.slug}>
              <h2 className="text-xl font-bold text-foreground mb-2">
                <Link href={`/category/${cat.slug}`} className="hover:text-primary transition-colors">
                  {cat.name}
                </Link>
              </h2>
              <p className="text-base text-muted leading-relaxed mb-3">{cat.desc}</p>
              {cat.posts.length > 0 && (
                <ul className="space-y-1">
                  {cat.posts.map((post) => (
                    <li key={post.href}>
                      <Link href={post.href} className="text-sm text-primary hover:underline font-medium">
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <dl className="space-y-5">
              {FAQ_ITEMS.map((item) => (
                <div key={item.q}>
                  <dt className="font-semibold text-foreground text-sm mb-1">{item.q}</dt>
                  <dd className="text-sm text-muted leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </section>
    </>
  );
}
