import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/types";

export function selectRelatedPosts(
  currentPost: BlogPost,
  allPosts: BlogPost[],
): BlogPost[] {
  if (allPosts.length < 2) return [];

  const others = allPosts.filter((p) => p.slug !== currentPost.slug);
  const byRecency = (a: BlogPost, b: BlogPost) => b.date.localeCompare(a.date);

  // Prefer posts with matching tags first, then same category, then others
  const matchesTags = (p: BlogPost) =>
    currentPost.tags?.some((t) => p.tags?.includes(t)) ?? false;

  const tagMatches = others.filter(matchesTags).sort(byRecency);
  const categoryMatches = others
    .filter((p) => p.category === currentPost.category && !matchesTags(p))
    .sort(byRecency);
  const rest = others
    .filter((p) => p.category !== currentPost.category && !matchesTags(p))
    .sort(byRecency);

  return [...tagMatches, ...categoryMatches, ...rest].slice(0, 3);
}

interface RelatedPostsProps {
  currentPost: BlogPost;
  allPosts: BlogPost[];
}

export default function RelatedPosts({
  currentPost,
  allPosts,
}: RelatedPostsProps) {
  const related = selectRelatedPosts(currentPost, allPosts);
  if (related.length === 0) return null;

  return (
    <section className="mt-16" aria-label="Related articles">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-foreground">
          You Might Also Like
        </h2>
        <Link
          href="/blog"
          className="hidden sm:inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline underline-offset-4"
        >
          View all articles
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Image */}
            <div className="relative w-full h-44 overflow-hidden">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt || post.title}
                fill
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Body */}
            <div className="flex flex-col gap-2 p-4 flex-1">
              <span className="badge self-start">{post.category}</span>
              <h3 className="text-sm font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-xs text-muted mt-auto pt-2">{post.readTime}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Internal link to homepage */}
      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-sm text-muted hover:text-primary transition-colors underline underline-offset-4"
        >
          Explore all finance & investing guides on AizzyHub →
        </Link>
      </div>
    </section>
  );
}
