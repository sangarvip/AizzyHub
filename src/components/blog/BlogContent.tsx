"use client";

import { useEffect, useRef } from "react";

interface Props {
  html: string;
}

export default function BlogContent({ html }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // ── Wrap bare tables in overflow div ──────────────────────────────────
    container.querySelectorAll<HTMLTableElement>("table").forEach((table) => {
      if (table.parentElement?.classList.contains("blog-prose-table-wrap"))
        return;
      const wrap = document.createElement("div");
      wrap.className = "blog-prose-table-wrap";
      table.parentNode?.insertBefore(wrap, table);
      wrap.appendChild(table);
    });

    // ── Inject copy-link anchor buttons on h2/h3 ─────────────────────────
    container.querySelectorAll<HTMLElement>("h2, h3").forEach((heading) => {
      if (heading.querySelector(".anchor-copy-btn")) return;
      const id = heading.getAttribute("id");
      if (!id) return;

      const btn = document.createElement("button");
      btn.className =
        "anchor-copy-btn inline-flex items-center justify-center ml-2 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity text-muted hover:text-primary align-middle";
      btn.setAttribute("aria-label", `Copy link to "${heading.textContent}"`);
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;

      btn.addEventListener("click", () => {
        const url = `${window.location.origin}${window.location.pathname}#${id}`;
        navigator.clipboard.writeText(url).then(() => {
          btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
          setTimeout(() => {
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`;
          }, 1500);
        });
      });

      heading.classList.add("group");
      heading.appendChild(btn);
    });
  }, [html]);

  return (
    <div
      ref={ref}
      className="blog-prose"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
