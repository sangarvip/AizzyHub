"use client";

import Link from "next/link";
import { JSX } from "react";

export default function PartnerSection(): JSX.Element {
  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-xl border border-border bg-surface shadow-sm text-center py-10 px-6">
          <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Partner with <span className="text-indigo-600">AizzyHub</span>
          </h2>

          <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
            Are you a financial expert, a tech or AI enthusiast, or a brand
            that wants to connect with an informed and engaged target audience?
            We welcome partnerships, guest posts and partnerships that are
            relevant to our business community. Let&apos;s build influential
            and meaningful content together.
          </p>

          <Link
            href="#"
            className="inline-block border border-indigo-500 text-indigo-600 text-sm font-medium rounded-md px-5 py-2 hover:bg-indigo-50 transition-all"
          >
            Explore Partnerships
          </Link>
        </div>
      </div>
    </section>
  );
}
