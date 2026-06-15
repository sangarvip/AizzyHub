"use client";

import { JSX } from "react";

export default function ContactHeader(): JSX.Element {
  return (
    <section className="w-full bg-background py-20 text-center">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Let&apos;s Connect
        </h1>
        <p className="text-muted text-sm md:text-base leading-relaxed">
          Have questions, feedback, or collaboration ideas? Reach out to us.
        </p>
      </div>
    </section>
  );
}
