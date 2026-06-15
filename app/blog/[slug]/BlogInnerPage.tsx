"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/types";
import { injectHeadingIds, extractToc } from "@/src/lib/extractToc";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import AuthorBox from "@/src/components/sections/AuthorBox";
import InlineCTA from "@/src/components/sections/InlineCTA";
import BlogContent from "@/src/components/blog/BlogContent";
import TableOfContents from "@/src/components/blog/TableOfContents";
import ReadingProgress from "@/src/components/blog/ReadingProgress";
import {
  Calendar,
  Clock,
  Share2,
  ChevronRight,
  Facebook,
  Linkedin,
} from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
import { slugifyCategory } from "@/src/lib/seo";

export default function BlogInnerPage({
  post,
  related = [],
}: {
  post: BlogPost;
  related?: BlogPost[];
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const categorySlug = slugifyCategory(post.category);
  const processedHtml = injectHeadingIds(post.contentHtml ?? "");
  const tocItems = extractToc(processedHtml);

  const canonicalUrl = `https://www.aizzyhub.com/blog/${post.slug}`;
  const getPageUrl = () =>
    typeof window !== "undefined" ? window.location.href : canonicalUrl;

  const enc = encodeURIComponent(canonicalUrl);
  const encTitle = encodeURIComponent(post.title);

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: post.category, href: `/category/${categorySlug}` },
    { label: post.title },
  ];

  const heroAlt =
    post.heroImageAlt || `${post.title} — ${post.category} on AizzyHub`;

  return (
    <>
      <ReadingProgress />

      <div className="bg-background min-h-screen">
        {/* ── Hero ── */}
        <div className="relative w-full h-[420px] md:h-[500px] overflow-hidden">
          <Image
            src={post.heroImage}
            alt={heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

          <div className="absolute inset-0 flex flex-col justify-end max-w-4xl mx-auto px-4 md:px-6 pb-10">
            <Link
              href={`/category/${categorySlug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-white/90 bg-primary/70 backdrop-blur-sm px-3 py-1 rounded-full mb-4 self-start hover:bg-primary transition-colors"
            >
              {post.category}
            </Link>

            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-4 max-w-3xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/30 shrink-0">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-white/90 font-medium">
                  {post.author.name}
                </span>
              </div>
              <span aria-hidden className="opacity-30">
                •
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar size={13} className="opacity-60" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
              </div>
              <span aria-hidden className="opacity-30">
                •
              </span>
              <div className="flex items-center gap-1.5">
                <Clock size={13} className="opacity-60" />
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <a
                  href={`https://twitter.com/intent/tweet?url=${enc}&text=${encTitle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on X"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(getPageUrl())}&text=${encTitle}`, "_blank", "noopener,noreferrer");
                  }}
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-white/70 hover:bg-sky-500 hover:text-white hover:scale-110 transition-all duration-200"
                >
                  <RiTwitterXFill size={13} />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on Facebook"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getPageUrl())}`, "_blank", "noopener,noreferrer");
                  }}
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-white/70 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-200"
                >
                  <Facebook size={13} />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Share on LinkedIn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(getPageUrl())}`, "_blank", "noopener,noreferrer");
                  }}
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-white/70 hover:bg-blue-500 hover:text-white hover:scale-110 transition-all duration-200"
                >
                  <Linkedin size={13} />
                </a>
                <button
                  onClick={() =>
                    navigator.share?.({ title: post.title, url: getPageUrl() })
                  }
                  aria-label="Share"
                  className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-white/70 hover:bg-white/30 hover:text-white hover:scale-110 transition-all duration-200"
                >
                  <Share2 size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-10">
          <div className="mb-8">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Mobile TOC */}
          <TableOfContents items={tocItems} variant="mobile" />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">
            {/* ── Article ── */}
            <main>
              <article>
                <BlogContent html={processedHtml} />

                <div className="mt-10">
                  {post.cta && (
                    <InlineCTA
                      text={post.cta.text}
                      button={post.cta.button}
                      link={post.cta.link}
                    />
                  )}
                </div>

                <div className="mt-10">
                  <AuthorBox author={post.author} lastUpdated={post.date} />
                </div>
              </article>
            </main>

            {/* ── Sticky Sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto space-y-6 pr-1 no-scrollbar">
                <TableOfContents items={tocItems} variant="desktop" />
              </div>
            </aside>
          </div>

          {/* ── Related Posts ── */}
          {related.length > 0 && (
            <section className="mt-16 pt-10 border-t border-border">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-foreground">
                  You Might Also Like
                </h2>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline underline-offset-4"
                >
                  All articles <ChevronRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group flex flex-col rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={rp.heroImage}
                        alt={rp.heroImageAlt || rp.title}
                        fill
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 flex flex-col gap-2 flex-1">
                      <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                        {rp.category}
                      </span>
                      <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {rp.title}
                      </h3>
                      <p className="text-xs text-muted mt-auto pt-2">
                        {rp.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
              <p className="mt-8 text-center text-sm text-muted">
                Explore all{" "}
                <Link
                  href="/"
                  className="text-primary hover:underline underline-offset-4"
                >
                  finance &amp; investing guides on AizzyHub
                </Link>{" "}
                →
              </p>
            </section>
          )}
        </div>
      </div>
    </>
  );
}
