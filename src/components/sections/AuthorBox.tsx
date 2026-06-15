import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PenLine, Calendar } from "lucide-react";
import { RiTwitterXFill, RiLinkedinFill } from "react-icons/ri";
import { Author } from "@/types";

export default function AuthorBox({ author, lastUpdated }: { author: Author; lastUpdated?: string }) {
  return (
    <section className="mt-12" aria-label="About the author">
      <div className="flex items-start gap-5 rounded-2xl border border-border bg-surface p-6 transition-colors">
        {/* Avatar */}
        <div className="shrink-0">
          <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/20 shadow-md">
            <Image
              src={author.avatar}
              alt={`${author.name} — Author at AizzyHub`}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-center gap-2 mb-1">
            <PenLine size={14} className="text-primary shrink-0" />
            <span className="text-xs text-muted uppercase tracking-wide font-medium">
              Written by
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
            <h3 className="text-base font-bold text-foreground">{author.name}</h3>
            {/* Social links */}
            <div className="flex items-center gap-2">
              {author.social?.twitter && (
                <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-muted hover:text-foreground transition-colors">
                  <RiTwitterXFill size={15} />
                </a>
              )}
              {author.social?.linkedin && (
                <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-foreground transition-colors">
                  <RiLinkedinFill size={15} />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm text-muted leading-relaxed mb-2">
            {author.bio}
          </p>

          {/* Expertise tags */}
          {author.expertise && author.expertise.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {author.expertise.map((tag) => (
                <span key={tag} className="text-[0.7rem] px-2 py-0.5 rounded-full bg-primary/8 text-primary font-medium border border-primary/15">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-medium hover:underline underline-offset-4"
            >
              More articles from AizzyHub
              <ArrowRight size={14} />
            </Link>
            {lastUpdated && (
              <span className="inline-flex items-center gap-1 text-xs text-muted">
                <Calendar size={12} />
                Last updated: {new Date(lastUpdated).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
