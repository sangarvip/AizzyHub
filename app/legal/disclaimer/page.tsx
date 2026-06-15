import type { Metadata } from "next";
import LegalDocument from "@/src/components/legal/disclaimerpage/LegalDocument";

export const metadata: Metadata = {
  title: "Disclaimer & Financial Policy | AizzyHub",
  description:
    "This website provides educational content only and does not offer financial advice. Read AizzyHub's full disclaimer.",
  alternates: {
    canonical: "https://www.aizzyhub.com/legal/disclaimer",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Disclaimer & Financial Policy | AizzyHub",
    description:
      "This website provides educational content only and does not offer financial advice. Read AizzyHub's full disclaimer.",
    url: "https://www.aizzyhub.com/legal/disclaimer",
    siteName: "AizzyHub",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer & Financial Policy | AizzyHub",
    description:
      "This website provides educational content only and does not offer financial advice.",
    site: "@aizzyhub",
  },
};

export default function DisclaimerPage() {
  return <LegalDocument />;
}
