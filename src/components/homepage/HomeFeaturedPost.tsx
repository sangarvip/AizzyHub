import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { BlogPost } from "@/types";

export default function HomeFeaturedPost({ post }: { post: BlogPost }) {
  if (!post) return null;

  const excerpt =
    post.metaDescription ||
    post.sections?.hook?.paragraphs?.[0] ||
    post.sections?.hook?.text ||
    "";

  return (
    <section
      aria-labelledby="featured-heading"
      className="w-full bg-surface py-16 md:py-20 border-y border-border"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        {/* Section label */}
        <div className="flex items-center gap-2 mb-8">
          {/* <span className="w-5 h-0.5 bg-primary rounded-full" /> */}
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Editor&apos;s Pick
          </p>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="group grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center"
        >
          {/* Image */}
          <div className="relative h-64 md:h-[340px] rounded-2xl overflow-hidden shadow-md">
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt || post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-wide bg-primary text-white px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-4 text-xs text-muted mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={12} />
                {post.readTime}
              </span>
            </div>

            <h2
              id="featured-heading"
              className="text-2xl md:text-[1.75rem] font-bold text-foreground leading-tight mb-4 group-hover:text-primary transition-colors"
            >
              {post.title}
            </h2>

            <p className="text-base text-muted leading-relaxed mb-6 line-clamp-3">
              {excerpt}
            </p>

            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
              Read full article
              <ArrowRight size={15} />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
