"use client";

import { JSX } from "react";

export default function WhyWeExistSection(): JSX.Element {
  return (
    <section className="w-full bg-background py-10">
      <div className="max-w-5xl mx-auto px-6 grid gap-8 md:grid-cols-2">
        {/* Why We Exist */}
        <div className="rounded-xl border border-border bg-surface p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Why AizzyHub Exists
          </h3>
          <ul className="space-y-3 text-muted text-sm leading-relaxed list-disc list-inside">
            <li>
              <strong>Simplicity:</strong> We distill complex ideas in finance,
              markets, time, and AI into clear, smoothly recognizable content
              material.
            </li>
            <li>
              <strong>Relevance:</strong> Everything we create is tailored to
              the briefly transforming Indian finance and technology landscape.
            </li>
            <li>
              <strong>Innovation:</strong> We explore how generation and AI
              rework money, invest, and make choices.
            </li>
            <li>
              <strong>Empowerment:</strong> Our goal is to equip you with
              practical understanding that builds confidence and smarter
              choices.
            </li>
          </ul>
        </div>

        {/* Who We Serve */}
        <div className="rounded-xl border border-border bg-surface p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Who We Serve
          </h3>
          <ul className="space-y-3 text-muted text-sm leading-relaxed list-disc list-inside">
            <li>
              <strong>Retail Stock Market Investors:</strong> Individuals who
              want to understand, Indian stock market with confidence.
            </li>
            <li>
              <strong>Finance students:</strong> Ambitious kids seeking clarity
              and rational economic management.
            </li>
            <li>
              <strong>Tech &amp; AI enthusiasts:</strong> Curious minds fueled
              by generation and synthetic intelligence, and how these
              innovations shape destiny.
            </li>
            <li>
              <strong>Young Indian Investors:</strong> Our hub targets the
              market formidable teenagers seek clarity, guidance, and sound
              insights for smarter economic choices.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
