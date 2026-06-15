"use client";

import { useEffect, useState } from "react";
import NewsletterCard from "./NewsletterCard";
import { BlogPost } from "@/types";
import { List } from "lucide-react";

type SectionValue = { title?: string; [key: string]: unknown };

// Human-readable labels for section keys
const SECTION_LABELS: Record<string, string> = {
  hook: "Introduction",
  problem: "The Problem",
  benefit: "Key Benefits",
  comparison: "Comparison",
  steps: "Step-by-Step Guide",
  faq: "FAQ",
  conclusion: "Conclusion",
  cta: "Get Started",
};

export default function Sidebar({ post }: { post: BlogPost }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const getSectionTitle = (key: string, value: SectionValue): string => {
    if (
      typeof value === "object" &&
      value?.title &&
      typeof value.title === "string"
    ) {
      return value.title;
    }
    return SECTION_LABELS[key] ?? key.charAt(0).toUpperCase() + key.slice(1);
  };

  return (
    <aside
      className="hidden lg:block sticky top-24 space-y-5 max-h-[calc(100vh-6rem)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      aria-label="Article sidebar"
    >
      {/* Table of Contents */}
      <div className="p-5 rounded-2xl border border-border bg-surface shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <List size={15} className="text-primary" />
          <h3 className="font-semibold text-foreground text-sm">
            Table of Contents
          </h3>
        </div>
        <nav aria-label="Table of contents">
          <ul className="text-sm space-y-1">
            {Object.entries(post.sections ?? {}).map(([key, value]) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className={`block py-1 px-2 rounded-md transition-colors text-sm ${
                    activeId === key
                      ? "text-primary font-semibold bg-primary/8"
                      : "text-muted hover:text-foreground hover:bg-surface-2"
                  }`}
                >
                  {getSectionTitle(key, value as SectionValue)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Newsletter */}
      <NewsletterCard />
    </aside>
  );
}
