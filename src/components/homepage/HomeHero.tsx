import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  BookOpen,
  BrainCircuit,
  Banknote,
  Cpu,
} from "lucide-react";

const STATS = [
  { value: "10+", label: "Free guides published" },
  { value: "5", label: "Finance topics covered" },
  { value: "100%", label: "Free — no paywall ever" },
];

const TOPIC_PILLS = [
  { icon: <TrendingUp size={12} />, label: "Stock Market Investing" },
  { icon: <BookOpen size={12} />, label: "Mutual Funds & ETFs" },
  { icon: <BrainCircuit size={12} />, label: "AI in Finance" },
  { icon: <Banknote size={12} />, label: "Personal Finance" },
  { icon: <Cpu size={12} />, label: "Fintech & Innovation" },
];

export default function HomeHero() {
  return (
    <section
      aria-label="Hero"
      className="relative w-full overflow-hidden bg-background pt-16 pb-20 md:pt-24 md:pb-28"
    >
      {/* Ambient background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 md:px-6 text-center">
        {/* Geo-targeted trust signal */}
        <div className="inline-flex items-center gap-3 rounded-full border border-primary/25 bg-primary/8 px-5 py-2 text-xs font-semibold text-primary mb-7">
          <div className="flex items-center gap-1.5">
            <Image src="https://flagcdn.com/w20/us.png" width={20} height={14} alt="United States" className="rounded-sm shadow-sm" />
            <Image src="https://flagcdn.com/w20/gb.png" width={20} height={14} alt="United Kingdom" className="rounded-sm shadow-sm" />
            <Image src="https://flagcdn.com/w20/ca.png" width={20} height={14} alt="Canada" className="rounded-sm shadow-sm" />
            <Image src="https://flagcdn.com/w20/au.png" width={20} height={14} alt="Australia" className="rounded-sm shadow-sm" />
          </div>
          <span className="w-px h-3.5 bg-primary/30 rounded-full" aria-hidden />
          Trusted by readers across the US, UK, Canada &amp; Australia
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl md:text-[3.75rem] font-extrabold text-foreground leading-[1.08] tracking-tight mb-6">
          Simple Finance &amp; AI Investing Guides for Beginners
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-10">
          Learn investing, personal finance, mutual funds, ETFs, and AI finance
          with clear, practical guides.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/blog"
            className="btn-primary text-base px-8 py-3 gap-2 shadow-md"
          >
            Start Learning
            <ArrowRight size={17} />
          </Link>
          <Link href="/blog" className="btn-outline text-base px-8 py-3">
            Read Latest Guides
          </Link>
        </div>

        {/* Social proof stats */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 mb-12">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl md:text-3xl font-extrabold text-foreground tabular-nums">
                {s.value}
              </p>
              <p className="text-xs text-muted mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Topic pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {TOPIC_PILLS.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted"
            >
              {pill.icon}
              {pill.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
