import type { Metadata } from "next";
import { allPosts } from "@/src/lib/posts";
import HomeHero from "@/src/components/homepage/HomeHero";
import HomeTrustBar from "@/src/components/homepage/HomeTrustBar";
import HomeCategoryGrid from "@/src/components/homepage/HomeCategoryGrid";
import HomeFeaturedPost from "@/src/components/homepage/HomeFeaturedPost";
import HomeLatestPosts from "@/src/components/homepage/HomeLatestPosts";
import HomeWhyUs from "@/src/components/homepage/HomeWhyUs";
import HomeNewsletter from "@/src/components/homepage/HomeNewsletter";
import HomeStats from "@/src/components/homepage/HomeStats";
import HomeZigZag from "@/src/components/homepage/HomeZigZag";

export const metadata: Metadata = {
  title: "AizzyHub – Smart Finance Guides for 2026",
  description:
    "Free expert guides on investing, personal finance, mutual funds, and AI finance. Trusted by readers in the US, UK, Canada & Australia. Start learning today.",
  keywords: [
    "best investment strategies 2026 USA",
    "finance tips UK beginners",
    "AI in finance Canada",
    "personal finance Australia",
    "how to invest money",
    "stock market for beginners",
    "mutual funds guide",
    "financial planning 2026",
    "fintech innovations",
    "AizzyHub",
  ],
  alternates: {
    canonical: "https://www.aizzyhub.com",
    languages: {
      "en-US": "https://www.aizzyhub.com",
      "en-GB": "https://www.aizzyhub.com",
      "en-CA": "https://www.aizzyhub.com",
      "en-AU": "https://www.aizzyhub.com",
      "x-default": "https://www.aizzyhub.com",
    },
  },
  openGraph: {
    title:
      "AizzyHub – Smart Finance Guides for 2026",
    description:
      "Free expert guides on investing, personal finance, mutual funds, and AI finance. Trusted by readers in the US, UK, Canada & Australia. Start learning today.",
    url: "https://www.aizzyhub.com",
    siteName: "AizzyHub",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.aizzyhub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AizzyHub – Smart Finance Guides for 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AizzyHub – Smart Finance Guides for 2026",
    description:
      "Learn investing, saving, and financial strategies trusted by readers across the US, UK, Canada & Australia.",
    site: "@aizzyhub",
    creator: "@aizzyhub",
    images: ["https://www.aizzyhub.com/og-image.png"],
  },
};

export default function HomePage() {
  const featured = allPosts[0];
  const latestPosts = allPosts.slice(0, 6);

  // Dynamic stats derived from the posts registry
  const postCount = allPosts.length;
  const categoryCount = new Set(allPosts.map((p) => p.category)).size;

  return (
    <>
      <HomeHero />
      <HomeTrustBar />
      <HomeCategoryGrid />
      <HomeFeaturedPost post={featured} />
      <HomeLatestPosts posts={latestPosts} />
      <HomeStats postCount={postCount} categoryCount={categoryCount} />
      <HomeZigZag />
      <HomeWhyUs />
      <HomeNewsletter />
    </>
  );
}
