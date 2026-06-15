"use client";

import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

/* ----------------------------------------------
   1️⃣ Types
---------------------------------------------- */
interface Article {
  id: number;
  category: string;
  title: string;
  description: string;
  readTime: string;
  imageSrc: string;
  href: string;
}

/* ----------------------------------------------
   2️⃣ Data (Sample Articles)
---------------------------------------------- */
const latestArticles: Article[] = [
  {
    id: 1,
    category: "Finance",
    title: "How Small Businesses Can Manage Their Finances Smarter in 2026",
    description:
      "A practical 2026 guide helping small businesses modernize finance with automation, AI, and smarter tools.",
    readTime: "5 min Read",
    imageSrc: "/homepage/feature-post/small-business-finance-2026.jpg",
    href: "/blog/small-business-finance-2026",
  },
  {
    id: 2,
    category: "Stock Market",
    title: "AI vs Human Traders: Who Performs Better in 2026?",
    description:
      "A deep dive into how AI and human traders compare in 2026—speed, accuracy, decision-making, and who truly performs better.",
    readTime: "6 min Read",
    imageSrc: "/homepage/feature-post/ai-vs-human-traders-2026.jpg",
    href: "/blog/ai-vs-human-traders-2026",
  },
  {
    id: 3,
    category: "Mutual Funds",
    title:
      "Mutual Funds in 2026: Smart Investment Strategies for New-Age Investors",
    description:
      "A practical 2026 guide to smarter mutual fund investing using AI insights, SIP strategies, and data-driven tools.",
    readTime: "6 min Read",
    imageSrc: "/homepage/feature-post/mutual-funds-2026.jpg",
    href: "/blog/mutual-funds-2026-smart-strategies",
  },
  {
    id: 4,
    category: "Tech & Innovation",
    title:
      "Fintech Innovations to Watch in 2026: The Future of Digital Finance",
    description:
      "Explore the breakthrough fintech technologies transforming payments, lending, compliance, and investing in 2026.",
    readTime: "7 min Read",
    imageSrc: "/homepage/feature-post/fintech-innovations-2026.jpg",
    href: "/blog/fintech-innovations-2026",
  },
  {
    id: 5,
    category: "AI in Finance",
    title: "How AI Is Transforming Financial Decision-Making in 2026",
    description:
      "Discover how AI is reshaping financial decisions in 2026 — from forecasting and risk analysis to smarter, faster, and more personalized outcomes.",
    readTime: "8 min Read",
    imageSrc: "/homepage/feature-post/ai-financial-decision-making-2026.jpg",
    href: "/blog/ai-financial-decision-making-2026",
  },
  {
    id: 6,
    category: "Finance",
    title: "Emergency Fund: How Much Do You Really Need?",
    description:
      "Learn how much emergency fund you actually need, how to calculate it, and why it’s your most important financial safety net.",
    readTime: "7 min Read",
    imageSrc: "/homepage/feature-post/emergency-fund-guide.jpg",
    href: "/blog/emergency-fund-guide",
  },
  {
    id: 7,
    category: "Stock Market",
    title: "Stock Market Basics: A Beginner’s Guide",
    description:
      "A simple beginner-friendly guide to understand how the stock market works, how to start investing, and avoid common mistakes.",
    readTime: "8 min Read",
    imageSrc: "/homepage/feature-post/stock-market-basics-guide.jpg",
    href: "/blog/stock-market-basics-guide",
  },
  // {
  //   id: 2,
  //   category: "Trading",
  //   title: "Day Trading vs. Swing Trading: Which is Right for You?",
  //   description:
  //     "Understand the differences between day trading and swing trading to find the strategy that aligns with your risk appetite.",
  //   readTime: "8 min Read",
  //   imageSrc: "/homepage/latest-article/article-trading.jpg",
  //   href: "#",
  // },
  // {
  //   id: 3,
  //   category: "AI in Finance",
  //   title: "Blockchain Beyond Crypto: Its Role in Modern Finance",
  //   description:
  //     "Delve into the applications of blockchain technology in traditional finance — from secure transactions to asset management.",
  //   readTime: "10 min Read",
  //   imageSrc: "/homepage/latest-article/article-ai.jpg",
  //   href: "#",
  // },
  // {
  //   id: 4,
  //   category: "Stock Market",
  //   title: "Long-Term Investing Strategies for Consistent Growth",
  //   description:
  //     "Learn how patience and strategic long-term planning can lead to significant wealth accumulation in the stock market.",
  //   readTime: "11 min Read",
  //   imageSrc: "/homepage/latest-article/article-investing.jpg",
  //   href: "#",
  // },
  // {
  //   id: 5,
  //   category: "Mutual Funds",
  //   title: "Choosing the Right Mutual Fund: A Beginner’s Guide",
  //   description:
  //     "Navigate the vast world of mutual funds with this practical guide to selecting the best options for your financial goals.",
  //   readTime: "9 min Read",
  //   imageSrc: "/homepage/latest-article/article-mutualfund.jpg",
  //   href: "#",
  // },
  // {
  //   id: 6,
  //   category: "Finance",
  //   title: "The Impact of Global Events on Your Investment Portfolio",
  //   description:
  //     "Understand how macroeconomic factors and global events can influence market trends and your financial strategies.",
  //   readTime: "7 min Read",
  //   imageSrc: "/homepage/latest-article/article-global.jpg",
  //   href: "#",
  // },
];

/* ----------------------------------------------
   3️⃣ Component
---------------------------------------------- */
export default function LatestArticlesSection(): JSX.Element {
  return (
    <section className="w-full bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-12">
          Latest Articles
        </h2>

        {/* 📚 Grid Layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {latestArticles.map((article) => (
            <Link
              key={article.id}
              href={article.href}
              className="group block overflow-hidden rounded-xl border border-border bg-background shadow-sm hover:shadow-md transition-all"
            >
              {/* 🖼️ Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* 🧠 Content */}
              <div className="p-6 text-left">
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-3">
                  {article.category}
                </span>

                <h3 className="text-lg font-semibold text-foreground group-hover:text-indigo-600 transition-colors">
                  {article.title}
                </h3>

                <p className="mt-2 text-sm text-muted line-clamp-3">
                  {article.description}
                </p>

                <p className="mt-4 text-xs text-muted">{article.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
