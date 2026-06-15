import Image from "next/image";
import { BlogPost } from "@/types";
import { Facebook, Linkedin, Share2 } from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
import { Clock, Calendar, User } from "lucide-react";

export default function PostHeader({ post }: { post: BlogPost }) {
  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : `https://www.aizzyhub.com/blog/${post.slug}`;
  const encodedUrl = encodeURIComponent(pageUrl);
  const encodedTitle = encodeURIComponent(post.title);

  const heroAlt =
    post.heroImageAlt || `${post.title} — ${post.category} guide on AizzyHub`;

  return (
    <header className="relative w-full mb-10 rounded-2xl overflow-hidden shadow-lg">
      {/* Hero Image */}
      <div className="relative h-[420px] md:h-[480px] w-full">
        <Image
          src={post.heroImage}
          alt={heroAlt}
          fill
          className="object-cover brightness-[0.55]"
          priority
          sizes="(max-width: 768px) 100vw, 1200px"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-10 pb-8 text-white">
          {/* Category */}
          <span className="badge bg-primary/80 text-white border-0 mb-3 self-start">
            {post.category}
          </span>

          {/* Title H1 */}
          <h1 className="text-2xl md:text-4xl font-bold max-w-3xl leading-tight drop-shadow-md mb-4">
            {post.title}
          </h1>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/75">
            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-white/30">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <User size={13} className="opacity-60" />
              <span>{post.author.name}</span>
            </div>

            <span aria-hidden className="opacity-40">
              •
            </span>

            {/* Date */}
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

            <span aria-hidden className="opacity-40">
              •
            </span>

            {/* Read time */}
            <div className="flex items-center gap-1.5">
              <Clock size={13} className="opacity-60" />
              <span>{post.readTime}</span>
            </div>

            {/* Social share */}
            <div className="flex items-center gap-3 ml-auto">
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X (Twitter)"
                className="hover:text-sky-400 transition-colors"
              >
                <RiTwitterXFill className="w-4 h-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="hover:text-blue-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={() =>
                  navigator.share?.({ title: post.title, url: pageUrl })
                }
                aria-label="Share this article"
                className="hover:text-white/90 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
