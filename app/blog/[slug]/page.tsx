import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import {
  generatePostMetadata,
  buildBlogPostingSchema,
  buildBreadcrumbSchema,
  buildFAQSchema,
  slugifyCategory,
} from "@/src/lib/seo";
import JsonLd from "@/src/components/common/JsonLd";
import BlogInnerPage from "@/app/blog/[slug]/BlogInnerPage";
import { allPosts, getPostBySlug, getRelatedPosts } from "@/src/lib/posts";

// Map slug → path to its .content.html file
const HTML_MAP: Record<string, string> = {
  "small-business-finance-2026":
    "src/content/blog/2026/05/small-business-finance-2026.content.html",
  "ai-vs-human-traders-2026":
    "src/content/blog/2025/12/ai-vs-human-traders-2026.content.html",
  "mutual-funds-2026-smart-strategies":
    "src/content/blog/2026/05/mutual-funds-2026-smart-strategies.content.html",
  "fintech-innovations-2026":
    "src/content/blog/2026/05/fintech-innovations-2026.content.html",
  "ai-financial-decision-making-2026":
    "src/content/blog/2026/01/ai-financial-decision-making-2026.content.html",
  "emergency-fund-guide":
    "src/content/blog/2026/05/emergency-fund-guide.content.html",
  "trading-mistakes-beginners":
    "src/content/blog/2026/06/trading-mistakes-beginners.content.html",
  "best-mutual-funds-long-term":
    "src/content/blog/2026/06/best-mutual-funds-long-term.content.html",
};

function readHtml(slug: string): string {
  const rel = HTML_MAP[slug];
  if (!rel) return "";
  try {
    return fs.readFileSync(path.join(process.cwd(), rel), "utf-8");
  } catch {
    return "";
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return generatePostMetadata(post);
}

export async function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Attach HTML content — runs only on the server
  const contentHtml = readHtml(slug);
  const fullPost = { ...post, contentHtml };

  const related = getRelatedPosts(post, 3);
  const categorySlug = slugifyCategory(post.category);

  const schemas: Record<string, unknown>[] = [
    buildBlogPostingSchema(post),
    buildBreadcrumbSchema([
      { name: "Home", url: "https://www.aizzyhub.com" },
      {
        name: post.category,
        url: `https://www.aizzyhub.com/category/${categorySlug}`,
      },
      { name: post.title },
    ]),
  ];

  if (post.sections?.faq?.items?.length) {
    schemas.push(buildFAQSchema(post.sections.faq.items));
  }

  return (
    <>
      <JsonLd schema={schemas} />
      <BlogInnerPage post={fullPost} related={related} />
    </>
  );
}
