import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "@/types";

export default function HomeLatestPosts({ posts }: { posts: BlogPost[] }) {
  if (!posts.length) return null;

  // First post = large hero card, rest = smaller grid
  const [hero, ...rest] = posts;

  return (
    <section
      aria-labelledby="latest-heading"
      className="w-full bg-background py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              Latest Articles
            </p>
            <h2
              id="latest-heading"
              className="text-2xl md:text-3xl font-bold text-foreground"
            >
              Fresh Finance &amp; Investing Guides
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline underline-offset-4"
          >
            View all
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Layout: large hero left + 2-col grid right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6">
          {/* Hero card */}
          <Link
            href={`/blog/${hero.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="relative h-56 md:h-72 overflow-hidden">
              <Image
                src={hero.heroImage}
                alt={hero.heroImageAlt || hero.title}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col gap-2 flex-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                {hero.category}
              </span>
              <h3 className="text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                {hero.title}
              </h3>
              <p className="text-sm text-muted line-clamp-2 mt-1">
                {hero.metaDescription || ""}
              </p>
              <div className="flex items-center gap-1.5 text-xs text-muted mt-auto pt-3 border-t border-border">
                <Clock size={12} />
                {hero.readTime}
              </div>
            </div>
          </Link>

          {/* 2×2 smaller grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.slice(0, 4).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={post.heroImage}
                    alt={post.heroImageAlt || post.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex flex-col gap-1.5 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    {post.category}
                  </span>
                  <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-muted mt-auto pt-2">
                    <Clock size={11} />
                    {post.readTime}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile view all */}
        <div className="mt-8 text-center sm:hidden">
          <Link href="/blog" className="btn-outline text-sm px-6 py-2.5">
            View all articles
          </Link>
        </div>
      </div>
    </section>
  );
}
