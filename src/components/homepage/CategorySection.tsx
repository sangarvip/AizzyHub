"use client";

import { JSX } from "react";
import Link from "next/link";
import { Banknote, LineChart, BookOpen, Cpu, Cog } from "lucide-react";

interface Category {
  id: number;
  label: string;
  icon: JSX.Element;
  href: string;
}

const categories: Category[] = [
  {
    id: 1,
    label: "Finance",
    icon: <Banknote size={18} />,
    href: "/blog?category=finance",
  },
  {
    id: 2,
    label: "Stock Market",
    icon: <LineChart size={18} />,
    href: "/blog?category=stock-market",
  },
  {
    id: 3,
    label: "Mutual Funds",
    icon: <BookOpen size={18} />,
    href: "/blog?category=mutual-funds",
  },
  {
    id: 4,
    label: "Tech & Innovation",
    icon: <Cpu size={18} />,
    href: "/blog?category=tech-innovation",
  },
  {
    id: 5,
    label: "AI in Finance",
    icon: <Cog size={18} />,
    href: "/blog?category=ai-finance",
  },
];

export default function CategorySection(): JSX.Element {
  return (
    <section className="w-full bg-surface py-16">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
          Explore by Category
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="flex items-center space-x-2 rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground shadow-sm hover:border-indigo-400 hover:text-indigo-500 transition-all"
            >
              {cat.icon}
              <span>{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
