"use client";

import { useEffect, useRef, useState } from "react";
import { List } from "lucide-react";
import { useActiveHeading } from "@/src/hooks/useActiveHeading";
import type { TocItem } from "@/src/lib/extractToc";

interface Props {
  items: TocItem[];
  variant?: "desktop" | "mobile" | "both";
}

function TocList({
  items,
  activeId,
  onItemClick,
}: {
  items: TocItem[];
  activeId: string;
  onItemClick: (id: string) => void;
}) {
  const listRef = useRef<HTMLOListElement>(null);

  // Auto-scroll the active item into view inside the TOC container
  useEffect(() => {
    if (!activeId || !listRef.current) return;
    const activeBtn = listRef.current.querySelector<HTMLElement>(
      `[data-id="${activeId}"]`
    );
    if (!activeBtn) return;
    activeBtn.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [activeId]);

  return (
    <nav aria-label="Table of contents">
      <ol ref={listRef} className="space-y-0.5">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              style={{ paddingLeft: item.level === 3 ? "0.875rem" : "0" }}
            >
              <button
                data-id={item.id}
                onClick={() => onItemClick(item.id)}
                className={`w-full text-left leading-snug py-1 px-2 rounded transition-colors duration-150 flex items-start gap-1 ${isActive
                    ? "text-primary font-semibold bg-primary/10"
                    : "text-muted hover:text-foreground hover:bg-surface-2"
                  } ${item.level === 3 ? "text-[0.78rem]" : "text-[0.82rem]"}`}
              >
                <span>{item.text}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default function TableOfContents({ items, variant = "both" }: Props) {
  const ids = items.map((i) => i.id);
  const activeId = useActiveHeading(ids);
  const [mobileOpen, setMobileOpen] = useState(false);

  if (!items.length) return null;

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <>
      {(variant === "desktop" || variant === "both") && (
        <div className={variant === "both" ? "hidden lg:block" : "block"}>
          <div className="rounded-xl border border-border bg-surface p-4">
            <div className="flex items-center gap-2 mb-3">
              <List size={15} className="text-primary shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted">
                On this page
              </span>
            </div>
            <TocList
              items={items}
              activeId={activeId}
              onItemClick={handleClick}
            />
          </div>
        </div>
      )}
    </>
  );
}
