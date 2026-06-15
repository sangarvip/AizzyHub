import type { Metadata } from "next";
import AboutHeader from "@/src/components/aboutpage/AboutHeader";
import MissionSection from "@/src/components/aboutpage/MissionSection";
import JourneySection from "@/src/components/aboutpage/JourneySection";
import WhyWeExistSection from "@/src/components/aboutpage/WhyWeExistSection";
import AboutImageSection from "@/src/components/aboutpage/AboutImageSection";
import NewsletterCTASection from "@/src/components/aboutpage/NewsletterCTASection";

export const metadata: Metadata = {
  title: "About AizzyHub – Our Mission & Financial Expertise",
  description:
    "Learn about AizzyHub's mission to simplify finance and help global readers make smarter money decisions.",
  alternates: { canonical: "https://www.aizzyhub.com/about-us" },
  openGraph: {
    title: "About AizzyHub – Our Mission & Financial Expertise",
    description:
      "Learn about AizzyHub's mission to simplify finance and help global readers make smarter money decisions.",
    url: "https://www.aizzyhub.com/about-us",
    siteName: "AizzyHub",
    images: [
      {
        url: "https://www.aizzyhub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "About AizzyHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About AizzyHub – Our Mission & Financial Expertise",
    description:
      "AizzyHub helps global readers make smarter money decisions with simple, practical finance guides.",
    images: ["https://www.aizzyhub.com/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <AboutHeader />
      <MissionSection />
      <JourneySection />
      <WhyWeExistSection />
      <AboutImageSection />
      <NewsletterCTASection />
    </>
  );
}
