"use client";

import { JSX } from "react";

export default function AboutHeader(): JSX.Element {
  return (
    <section className="w-full bg-background py-16 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Making Finance{" "}
          <span className="text-primary">Simple, Practical &amp; Global</span>
        </h1>
        <p className="text-base text-muted leading-relaxed max-w-2xl mx-auto">
          We serve readers across the US, UK, Canada &amp; Australia who want
          practical, no-BS financial guidance — without the jargon or
          complexity.
        </p>
      </div>
    </section>
  );
}
