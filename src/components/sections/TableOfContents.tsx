"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";

interface TocItem {
  id: string;
  label: string;
}

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -70% 0px" },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-2xl border border-border bg-surface p-5"
    >
      <div className="flex items-center gap-2 mb-4">
        <List size={15} className="text-primary shrink-0" />
        <span className="text-sm font-semibold text-foreground">
          Table of Contents
        </span>
      </div>
      <ul className="space-y-0.5">
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block text-sm px-3 py-1.5 rounded-lg transition-colors leading-snug ${
                activeId === id
                  ? "text-primary font-semibold bg-primary/8"
                  : "text-muted hover:text-foreground hover:bg-surface-2"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
