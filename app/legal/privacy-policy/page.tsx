import type { Metadata } from "next";
import PrivacyPolicy from "@/src/components/legal/privacypolicypage/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy – How AizzyHub Protects Your Data",
  description:
    "Read AizzyHub's Privacy Policy to understand how we collect, use, and protect your data — including cookies, analytics, and data usage.",
  alternates: { canonical: "https://www.aizzyhub.com/legal/privacy-policy" },
  openGraph: {
    title: "Privacy Policy – How AizzyHub Protects Your Data",
    description:
      "Read AizzyHub's Privacy Policy to understand how we collect, use, and protect your data — including cookies, analytics, and data usage.",
    url: "https://www.aizzyhub.com/legal/privacy-policy",
    siteName: "AizzyHub",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – How AizzyHub Protects Your Data",
    description:
      "Read AizzyHub's Privacy Policy to understand how we collect, use, and protect your data.",
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
