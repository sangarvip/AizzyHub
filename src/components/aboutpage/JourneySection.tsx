"use client";

import { JSX } from "react";

export default function JourneySection(): JSX.Element {
  return (
    <section className="w-full bg-background py-10">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-xl border border-border bg-surface shadow-sm p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6">
            The AizzyHub Journey:{" "}
            <br className="hidden md:block" />
            From Idea to Insight
          </h2>

          <p className="text-muted leading-relaxed mb-4">
            AizzyHub started as a simple concept: make finance and tech
            understandable to younger Indians. What started with a few creators
            enthusiastic about markets, technology, and AI quickly grew into a
            company to address a major problem — most monetary and tech content
            in India is both mysterious, distorted, or filled with useless
            jargon. We wanted to change that.
          </p>

          <p className="text-muted leading-relaxed mb-8">
            Today, AizzyHub is evolving into a trusted study center where
            complex standards are pared right down to clean, relatable, and
            actionable insights. With a blend of monetary knowledge, technical
            knowledge, and commitment to honest scholarship, every article,
            manual, and review strives to deliver real prices to our readers.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Simplicity",
                desc: "We distill complex ideas in finance, markets, time, and AI into clear, smoothly recognizable content material.",
              },
              {
                label: "Relevance",
                desc: "Everything we create is tailored to the briefly transforming Indian finance and technology landscape.",
              },
              {
                label: "Innovation",
                desc: "We explore how generation and AI are transforming money, investing, and making choices.",
              },
              {
                label: "Empowerment",
                desc: "Our goal is to equip you with practical knowledge that builds confidence and wiser choices.",
              },
            ].map(({ label, desc }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                <p className="text-sm text-muted leading-relaxed">
                  <strong className="text-foreground">{label}:</strong> {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
