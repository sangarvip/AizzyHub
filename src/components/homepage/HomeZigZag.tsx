import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ITEMS = [
  {
    tag: "Investing Basics",
    title: "Start Investing With Confidence",
    desc: "You don't need a finance degree or a large sum of money to start investing. Our beginner guides walk you through the fundamentals — from understanding risk and return to building your first portfolio — in plain, jargon-free language.",
    cta: { label: "Explore Investing Guides", href: "/category/finance" },
    highlight: "No experience needed. Just curiosity.",
    reverse: false,
  },
  {
    tag: "AI in Finance",
    title: "How AI Is Changing the Way We Invest",
    desc: "Artificial intelligence is reshaping every corner of finance — from robo-advisors that manage your portfolio automatically to fraud detection that works in milliseconds. We break down what's real, what's hype, and what it means for your money.",
    cta: { label: "Read AI Finance Guides", href: "/category/ai-finance" },
    highlight: "Stay ahead of the curve.",
    reverse: true,
  },
  {
    tag: "Personal Finance",
    title: "Take Control of Your Financial Life",
    desc: "Budgeting, emergency funds, debt management, saving for big goals — personal finance is the foundation everything else is built on. Our guides give you practical frameworks that work whether you're just starting out or looking to level up.",
    cta: { label: "Browse Personal Finance", href: "/category/finance" },
    highlight: "Practical advice, not generic tips.",
    reverse: false,
  },
  {
    tag: "Fintech & Innovation",
    title: "The Future of Finance Is Already Here",
    desc: "Open banking, embedded finance, digital currencies, and DeFi are no longer future concepts — they're live products changing how money works right now. We cover the innovations that matter and explain what they mean for everyday investors.",
    cta: { label: "Explore Fintech Guides", href: "/category/tech-innovation" },
    highlight: "Understand the shift before it shifts you.",
    reverse: true,
  },
];

export default function HomeZigZag() {
  return (
    <section
      aria-labelledby="zigzag-heading"
      className="w-full bg-surface border-y border-border py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            What We Cover
          </p>
          <h2
            id="zigzag-heading"
            className="text-2xl md:text-3xl font-bold text-foreground"
          >
            Everything You Need to Make Smarter Money Decisions
          </h2>
        </div>

        {/* Zig-zag rows */}
        <div className="flex flex-col gap-16">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-8 md:gap-12`}
            >
              {/* Visual block */}
              <div className="w-full md:w-2/5 shrink-0">
                <div className="rounded-2xl border border-border bg-background p-8 flex flex-col items-center justify-center text-center gap-4 min-h-[180px]">
                  <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                  <p className="text-sm font-medium text-muted italic">
                    &ldquo;{item.highlight}&rdquo;
                  </p>
                </div>
              </div>

              {/* Text block */}
              <div className="w-full md:w-3/5">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-base text-muted leading-relaxed mb-5">
                  {item.desc}
                </p>
                <Link
                  href={item.cta.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
                >
                  {item.cta.label}
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
