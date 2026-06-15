"use client";

import { useState, JSX } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { allPosts } from "@/src/lib/posts";

const CATEGORIES = [
  "All",
  "Finance",
  "Stock Market",
  "Mutual Funds",
  "Tech & Innovation",
  "AI in Finance",
];

const CATEGORY_PARAM_MAP: Record<string, string> = {
  finance: "Finance",
  "stock-market": "Stock Market",
  "mutual-funds": "Mutual Funds",
  "tech-innovation": "Tech & Innovation",
  "ai-finance": "AI in Finance",
};

const POSTS_PER_PAGE = 6;

export default function ArticlesListingSection(): JSX.Element {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const paramValue = searchParams.get("category") ?? "";
  const selectedCategory = CATEGORY_PARAM_MAP[paramValue] ?? "All";
  const pageParam = parseInt(searchParams.get("page") ?? "1", 10);
  const currentPage = isNaN(pageParam) || pageParam < 1 ? 1 : pageParam;

  const setCategory = (cat: string) => {
    const entry = Object.entries(CATEGORY_PARAM_MAP).find(([, v]) => v === cat);
    router.push(
      cat === "All" || !entry ? "/blog" : `/blog?category=${entry[0]}`,
    );
  };

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(page));
    router.push(`/blog?${params.toString()}`);
  };

  const filtered = allPosts.filter((p) => {
    const matchCat =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Latest Financial Insights &amp; Strategies
          </h1>
          <p className="text-base text-muted max-w-2xl">
            Stay ahead with actionable finance insights trusted by readers
            worldwide.
          </p>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-2.5 mb-8 bg-surface focus-within:border-primary transition-all">
          <Search size={17} className="text-muted shrink-0" />
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm bg-transparent text-foreground placeholder:text-muted"
            aria-label="Search articles"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-white border-primary"
                  : "border-border text-muted hover:border-primary hover:text-primary bg-transparent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {paginated.length === 0 ? (
          <div className="text-center py-20 text-muted">
            No articles found. Try a different search or category.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.heroImageAlt || post.title}
                    fill
                    loading="lazy"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {post.category}
                  </span>
                  <h3 className="text-base font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2 mt-1">
                    {post.metaDescription || ""}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                    <span className="text-xs text-muted">{post.readTime}</span>
                    <span className="text-xs text-muted">
                      {new Date(post.date).toLocaleDateString("en-IN", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center mt-10 gap-2">
            <button
              onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg border border-border text-sm text-muted hover:bg-surface disabled:opacity-40 transition-colors"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === i + 1
                    ? "bg-primary text-white"
                    : "border border-border text-muted hover:bg-surface"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() =>
                handlePageChange(Math.min(currentPage + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg border border-border text-sm text-muted hover:bg-surface disabled:opacity-40 transition-colors"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
