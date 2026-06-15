import { generateCategoryMetadata, CATEGORY_SLUG_MAP } from "@/src/lib/seo";
import { allPosts } from "@/src/lib/posts";
import CategoryPostsSection from "@/src/components/categorypage/CategoryPostsSection";
import Breadcrumb from "@/src/components/common/Breadcrumb";
import { notFound } from "next/navigation";

// Reverse map: slug → display name
const SLUG_TO_CATEGORY: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_SLUG_MAP).map(([k, v]) => [v, k]),
);

export async function generateStaticParams() {
  return Object.values(CATEGORY_SLUG_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = SLUG_TO_CATEGORY[slug];
  if (!category) return {};
  return generateCategoryMetadata(category);
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = SLUG_TO_CATEGORY[slug];
  if (!category) notFound();

  const posts = allPosts.filter((p) => p.category === category);

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/category" },
          { label: category },
        ]}
      />
      <CategoryPostsSection category={category} posts={posts} />
    </div>
  );
}
