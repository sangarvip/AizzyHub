"use client";

import Link from "next/link";
import { JSX } from "react";
import { Scale, LineChart, TrendingUp, Brain, Wallet, Cpu } from "lucide-react";

interface Category {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  href: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: "Investing",
    description:
      "Best funding vehicles for 2026 — stocks, ETFs and portfolio construction for US, UK, CA & AU investors.",
    icon: <Scale size={36} strokeWidth={1.6} />,
    href: "/category/finance",
  },
  {
    id: 2,
    title: "Personal Finance",
    description:
      "Budgeting, saving, debt payment, and emergency fund guides were relied upon by readers worldwide.",
    icon: <Wallet size={36} strokeWidth={1.6} />,
    href: "/category/finance",
  },
  {
    id: 3,
    title: "Financial Technology",
    description:
      "Digital banking, invoicing, blockchain and economic innovations shaping 2026.",
    icon: <Cpu size={36} strokeWidth={1.6} />,
    href: "/category/tech-innovation",
  },
  {
    id: 4,
    title: "AI in Finance",
    description:
      "How artificial intelligence is transforming investment, buying and selling, and economic decision making.",
    icon: <Brain size={36} strokeWidth={1.6} />,
    href: "/category/ai-finance",
  },
  {
    id: 5,
    title: "Business Finance",
    description:
      "Intelligent Financial Systems for Small Business — Cash Flow, Accountability, and Returns in 2026.",
    icon: <LineChart size={36} strokeWidth={1.6} />,
    href: "/category/finance",
  },
  {
    id: 6,
    title: "Mutual Funds and ETFs",
    description:
      "Fund selection, index financing, ETFs, and portfolio diversification for long-term wealth.",
    icon: <TrendingUp size={36} strokeWidth={1.6} />,
    href: "/category/mutual-funds",
  },
];

export default function CategoriesSection(): JSX.Element {
  return (
    <section className="w-full bg-background py-20">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
          Explore Financial Topics That Matter
        </h1>
        <p className="text-base text-muted max-w-2xl mx-auto mb-12">
          Browse expert-written guides on investing, saving, fintech, and
          AI-driven finance strategies.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group flex flex-col items-center rounded-2xl border border-border bg-background p-8 shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
            >
              <div className="text-primary mb-4 transition-transform group-hover:scale-110">
                {category.icon}
              </div>
              <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {category.title}
              </h2>
              <p className="text-sm text-muted">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
