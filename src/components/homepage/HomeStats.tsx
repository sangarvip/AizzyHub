import { TrendingUp, Users, BookOpen, Globe } from "lucide-react";

interface HomeStatsProps {
  postCount: number;
  categoryCount: number;
}

export default function HomeStats({ postCount, categoryCount }: HomeStatsProps) {
  const STATS = [
    {
      icon: <BookOpen size={22} className="text-primary" />,
      value: `${postCount}+`,
      label: "Finance Guides Published",
      desc: "Covering investing, AI, fintech, and personal finance",
    },
    {
      icon: <Globe size={22} className="text-primary" />,
      value: "4",
      label: "Countries Covered",
      desc: "US, UK, Canada & Australia — market-specific insights",
    },
    {
      icon: <TrendingUp size={22} className="text-primary" />,
      value: `${categoryCount}`,
      label: "Finance Topics",
      desc: "Stock market, mutual funds, AI, fintech & personal finance",
    },
    {
      icon: <Users size={22} className="text-primary" />,
      value: "100%",
      label: "Free — Always",
      desc: "No paywalls, no subscriptions, no hidden fees",
    },
  ];

  return (
    <section
      aria-labelledby="stats-heading"
      className="w-full bg-background py-14 md:py-18"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            By the Numbers
          </p>
          <h2
            id="stats-heading"
            className="text-2xl md:text-3xl font-bold text-foreground"
          >
            Trusted Finance Guidance, Built for Real People
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center rounded-2xl border border-border bg-surface p-6 gap-3 hover:shadow-md transition-shadow duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                {stat.icon}
              </div>
              <p className="text-3xl md:text-4xl font-extrabold text-foreground tabular-nums leading-none">
                {stat.value}
              </p>
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-muted leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
