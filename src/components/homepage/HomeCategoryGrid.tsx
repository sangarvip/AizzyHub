import Link from "next/link";
import {
  Banknote,
  LineChart,
  BookOpen,
  Cpu,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

const CATEGORIES = [
  {
    label: "Investing",
    slug: "Finance",
    desc: "Best investment strategies for 2026 — stocks, ETFs, and portfolio building",
    icon: <Banknote size={20} className="text-blue-500" />,
    href: "/category/finance",
    bg: "bg-blue-500/8 border-blue-500/20 hover:border-blue-500/40",
  },
  {
    label: "Personal Finance",
    slug: "Personal Finance",
    desc: "Budgeting, saving, debt payoff, and building an emergency fund",
    icon: <LineChart size={20} className="text-emerald-500" />,
    href: "/category/finance",
    bg: "bg-emerald-500/8 border-emerald-500/20 hover:border-emerald-500/40",
  },
  {
    label: "Mutual Funds & ETFs",
    slug: "Mutual Funds",
    desc: "Fund selection, index funds, ETFs, and portfolio diversification",
    icon: <BookOpen size={20} className="text-violet-500" />,
    href: "/category/mutual-funds",
    bg: "bg-violet-500/8 border-violet-500/20 hover:border-violet-500/40",
  },
  {
    label: "Fintech",
    slug: "Tech & Innovation",
    desc: "Digital banking, payments, blockchain, and financial technology",
    icon: <Cpu size={20} className="text-orange-500" />,
    href: "/category/tech-innovation",
    bg: "bg-orange-500/8 border-orange-500/20 hover:border-orange-500/40",
  },
  {
    label: "AI in Finance",
    slug: "AI in Finance",
    desc: "How artificial intelligence is reshaping investing and decisions",
    icon: <BrainCircuit size={20} className="text-pink-500" />,
    href: "/category/ai-finance",
    bg: "bg-pink-500/8 border-pink-500/20 hover:border-pink-500/40",
  },
];

export default function HomeCategoryGrid() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="w-full bg-background py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Explore Topics
            </p>
            <h2
              id="categories-heading"
              className="text-2xl md:text-3xl font-bold text-foreground"
            >
              What Do You Want to Learn Today?
            </h2>
          </div>
          <Link
            href="/category"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline underline-offset-4"
          >
            All topics
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={cat.href}
              className={`group flex items-start gap-4 rounded-2xl border p-5 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${cat.bg}`}
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-background flex items-center justify-center shadow-sm border border-border">
                {cat.icon}
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">
                  {cat.label}
                </p>
                <p className="text-xs text-muted leading-relaxed line-clamp-2">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}

          {/* View all */}
          <Link
            href="/blog"
            className="group flex items-center justify-center gap-2 rounded-2xl border border-dashed border-border p-5 text-sm font-medium text-muted hover:text-primary hover:border-primary transition-all duration-200"
          >
            Browse all articles
            <ArrowRight
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
