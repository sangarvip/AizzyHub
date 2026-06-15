import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import ArticlesListingSection from "@/src/components/blogpage/ArticlesListingSection";

export const metadata: Metadata = {
  title: "Finance & Investing Blog | AizzyHub",
  description:
    "Expert finance and investing guides for beginners — covering stock market, mutual funds, AI in finance, fintech, and personal finance. Free, practical, and updated for 2026.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.aizzyhub.com/blog" },
  openGraph: {
    title: "Finance & Investing Blog | AizzyHub",
    description:
      "Expert finance and investing guides for beginners — covering stock market, mutual funds, AI in finance, fintech, and personal finance.",
    url: "https://www.aizzyhub.com/blog",
    siteName: "AizzyHub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.aizzyhub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AizzyHub Finance & Investing Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Finance & Investing Blog | AizzyHub",
    description:
      "Expert finance and investing guides for beginners — stock market, mutual funds, AI finance, and more.",
    site: "@aizzyhub",
    creator: "@aizzyhub",
    images: ["https://www.aizzyhub.com/og-image.png"],
  },
};

const FAQ_ITEMS = [
  {
    q: "What topics does the AizzyHub blog cover?",
    a: "AizzyHub covers personal finance, stock market investing, mutual funds and ETFs, AI in finance, fintech innovations, and small business finance — all written for beginners and intermediate investors.",
  },
  {
    q: "Are the guides on AizzyHub free?",
    a: "Yes, all guides on AizzyHub are completely free. There are no paywalls, subscriptions, or hidden fees.",
  },
  {
    q: "How often is new content published?",
    a: "We publish new guides regularly, with a focus on keeping existing content updated for current market conditions, regulations, and financial trends.",
  },
  {
    q: "Is the content on AizzyHub financial advice?",
    a: "No. All content on AizzyHub is for educational and informational purposes only. It does not constitute personalised financial advice. Always consult a qualified financial adviser before making investment decisions.",
  },
  {
    q: "Which countries does AizzyHub cover?",
    a: "Our guides are written for readers in the US, UK, Canada, and Australia, with market-specific context where relevant.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-full py-20 text-center text-muted">Loading...</div>
        }
      >
        <ArticlesListingSection />
      </Suspense>

      {/* SEO content section — server-rendered, below the fold */}
      <section className="w-full bg-surface border-t border-border py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-6 space-y-10">

          {/* About the blog */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">
              Your Free Finance & Investing Resource
            </h2>
            <p className="text-base text-muted leading-relaxed">
              The AizzyHub blog is a free resource for anyone who wants to understand money better — whether you&apos;re just starting out or looking to sharpen your investing knowledge. We cover the topics that matter most to everyday investors in 2026: how to start investing, how to build an emergency fund, what AI means for your portfolio, and how fintech is changing the way we manage money.
            </p>
            <p className="text-base text-muted leading-relaxed mt-3">
              Every guide is written in plain English, backed by research, and updated regularly to reflect current market conditions. No jargon, no hype — just practical information you can act on.
            </p>
          </div>

          {/* What we cover */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">
              What We Cover
            </h2>
            <ul className="space-y-3">
              <li>
                <Link href="/category/finance" className="font-semibold text-primary hover:underline">Personal Finance</Link>
                <span className="text-muted"> — budgeting, emergency funds, debt management, and building long-term financial security.</span>
              </li>
              <li>
                <Link href="/category/stock-market" className="font-semibold text-primary hover:underline">Stock Market Investing</Link>
                <span className="text-muted"> — beginner guides to stocks, index funds, ETFs, and building a diversified portfolio.</span>
              </li>
              <li>
                <Link href="/category/mutual-funds" className="font-semibold text-primary hover:underline">Mutual Funds & ETFs</Link>
                <span className="text-muted"> — SIP investing, fund comparisons, and long-term wealth creation strategies.</span>
              </li>
              <li>
                <Link href="/category/ai-finance" className="font-semibold text-primary hover:underline">AI in Finance</Link>
                <span className="text-muted"> — how artificial intelligence is reshaping investing, trading, and personal finance decisions.</span>
              </li>
              <li>
                <Link href="/category/tech-innovation" className="font-semibold text-primary hover:underline">Fintech & Innovation</Link>
                <span className="text-muted"> — open banking, embedded finance, digital currencies, and the technologies changing how money works.</span>
              </li>
            </ul>
          </div>

          {/* Popular guides */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">
              Popular Guides to Start With
            </h2>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/emergency-fund-guide" className="text-primary hover:underline text-sm font-medium">
                  Emergency Fund: How Much Do You Really Need?
                </Link>
              </li>
              <li>
                <Link href="/blog/mutual-funds-2026-smart-strategies" className="text-primary hover:underline text-sm font-medium">
                  Mutual Fund Strategies for 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/ai-vs-human-traders-2026" className="text-primary hover:underline text-sm font-medium">
                  AI vs Human Traders in 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/fintech-innovations-2026" className="text-primary hover:underline text-sm font-medium">
                  Top Fintech Innovations in 2026
                </Link>
              </li>
              <li>
                <Link href="/blog/small-business-finance-2026" className="text-primary hover:underline text-sm font-medium">
                  Smart Small Business Finance Tips for 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-5">
              Frequently Asked Questions
            </h2>
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
