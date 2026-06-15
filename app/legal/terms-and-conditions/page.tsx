import type { Metadata } from "next";
import TermsAndConditions from "@/src/components/legal/termsandconditionspage/TermsAndConditions";

export const metadata: Metadata = {
  title: "Terms & Conditions – AizzyHub User Agreement",
  description:
    "Read AizzyHub's Terms & Conditions to understand your rights, responsibilities, and the rules governing use of our website and financial educational content.",
  alternates: {
    canonical: "https://www.aizzyhub.com/legal/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions – AizzyHub User Agreement",
    description:
      "Read AizzyHub's Terms & Conditions to understand your rights, responsibilities, and the rules governing use of our website.",
    url: "https://www.aizzyhub.com/legal/terms-and-conditions",
    siteName: "AizzyHub",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.aizzyhub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AizzyHub Terms & Conditions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions – AizzyHub User Agreement",
    description:
      "Read AizzyHub's Terms & Conditions to understand your rights and responsibilities.",
    site: "@aizzyhub",
    creator: "@aizzyhub",
    images: ["https://www.aizzyhub.com/og-image.png"],
  },
};

export default function TermsPage() {
  return <TermsAndConditions />;
}
