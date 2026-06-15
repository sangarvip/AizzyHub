"use client";

import { ArrowRight } from "lucide-react";

interface ConclusionSectionProps {
  title: string;
  content?: string;
  points?: string[];
  ctaText?: string;
  ctaLink?: string;
}

export default function ConclusionSection({
  title,
  content,
  points,
  ctaText,
  ctaLink,
}: ConclusionSectionProps) {
  return (
    <section id="conclusion" className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>

      {content ? (
        <div className="rounded-xl border border-border bg-surface p-5 mb-6">
          <p className="leading-relaxed text-base text-muted">{content}</p>
        </div>
      ) : (
        points && (
          <ul className="rounded-xl border border-border bg-surface p-5 mb-6 space-y-2">
            {points.map((p, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-muted leading-relaxed"
              >
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        )
      )}

      {ctaText && ctaLink && (
        <div className="text-center">
          <a href={ctaLink} className="btn-primary inline-flex">
            {ctaText}
            <ArrowRight size={16} />
          </a>
        </div>
      )}
    </section>
  );
}
