"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

export default function CategoryPostsSection({
  category,
  posts,
}: {
  category: string;
  posts: BlogPost[];
}) {
  return (
    <section className="w-full bg-background py-16">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            {category}
          </h1>
          <p className="text-base text-muted max-w-2xl">
            Expert-written guides on {category.toLowerCase()} — practical,
            actionable, and updated for 2026.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 text-muted">
            No articles in this category yet. Check back soon.
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
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
                  <h2 className="text-base font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted line-clamp-2 mt-1">
                    {post.metaDescription || ""}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-medium group-hover:gap-1.5 transition-all">
                      Read
                      <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
