"use client";

import { JSX } from "react";
import { CheckCircle2 } from "lucide-react";

const MISSION_POINTS = [
  "Data-driven insights supported through real-life research",
  "Beginner-friendly — no jargon",
  "Updated for global markets: US, UK, CA & AU",
  "No fluff, only practical strategies you can act on",
];

export default function MissionSection(): JSX.Element {
  return (
    <section className="w-full bg-background py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Why AizzyHub Started */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">
            Why AizzyHub Started
          </h2>
          <p className="text-muted leading-relaxed mb-4">
            Finance content online is either too complex, too misleading, or
            written for a narrow audience. Most guides assume you already know
            the jargon — or they bury the useful stuff under layers of fluff.
          </p>
          <p className="text-muted leading-relaxed">
            AizzyHub was built to fix that. We started with a simple idea:
            finance should be accessible to everyone, regardless of background
            or experience level. Real guides. Practical strategies. No
            gatekeeping.
          </p>
        </div>

        {/* Our Mission */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">
            Our Mission
          </h2>
          <p className="text-muted leading-relaxed">
            Helping people make smarter money choices with education and
            confidence — whether they&apos;re just getting started or looking
            to sharpen their approach for 2026 and beyond.
          </p>
        </div>

        {/* What We Stand For */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">
            What We Stand For
          </h2>
          <ul className="space-y-3">
            {MISSION_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="text-primary shrink-0 mt-0.5"
                />
                <span className="text-muted">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Who We Serve */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-5">
            Who We Serve
          </h2>
          <p className="text-muted leading-relaxed">
            We serve readers across the US, UK, Canada &amp; Australia who want
            practical, no-BS financial guidance. Whether you&apos;re building
            your first emergency fund, exploring AI-driven investing, or
            managing a small business — AizzyHub has a guide for you.
          </p>
        </div>
      </div>
    </section>
  );
}
