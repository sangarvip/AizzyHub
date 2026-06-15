import { CheckCircle2, Globe, BookOpen, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";

const FEATURES = [
  {
    icon: <BookOpen size={20} className="text-primary" />,
    title: "Data-Driven Insights",
    desc: "Each manual is backed via real data and research - no guesswork, no fluff. Just statistics to help you make smarter money choices.",
  },
  {
    icon: <Zap size={20} className="text-primary" />,
    title: "Beginner-Friendly Explanations",
    desc: "Complex financial science broken down into simple English. Perfect for first time buyers inside the US, UK, Canada and Australia.",
  },
  {
    icon: <Globe size={20} className="text-primary" />,
    title: "Updated for Global Markets",
    desc: "Our courses include making investment principles relevant to US, UK, Canadian and Australian markets - steadily advancing for 2026.",
  },
  {
    icon: <ShieldCheck size={20} className="text-primary" />,
    title: "No Fluff, Only Practical Strategies",
    desc: "We reduce the noise. Each article offers actionable strategies that you can follow without delay — no filler, no hype.",
  },
];

const TOPICS = [
  "How to start investing with a hundred dollars",
  "Best Index Budget for Beginners",
  "Emergency fund: how much do you need?",
  "AI equipment for non-public finance",
  "Stock market fundamentals explained",
  "How to Build a Diverse Portfolio",
];

export default function HomeWhyUs() {
  return (
    <section
      aria-labelledby="why-heading"
      className="w-full bg-surface border-y border-border py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — value props */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Why AizzyHub?
            </p>
            <h2
              id="why-heading"
              className="text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight"
            >
              Why Readers Trust <span className="gradient-text">AizzyHub</span>
            </h2>
            <p className="text-base text-muted leading-relaxed mb-8">
              Whether you&apos;re just starting out or looking to sharpen your financial knowledge, AizzyHub provides clear, actionable publications you trust via readers across the US, UK, Canada, and Australia.

            </p>

            <div className="space-y-5">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">
                      {f.title}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — popular topics + CTA */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
              Popular Topics
            </p>
            <ul className="space-y-3 mb-8">
              {TOPICS.map((topic) => (
                <li key={topic} className="flex items-center gap-3">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span className="text-sm text-foreground">{topic}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="font-semibold text-foreground mb-2">
                Ready to take control of your finances?
              </p>
              <p className="text-sm text-muted mb-4">
                Start with our most popular versions — completely free.
              </p>
              <Link
                href="/blog"
                className="btn-primary text-sm px-6 py-2.5 gap-2"
              >
                Start Reading Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
