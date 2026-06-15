import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy & Content Standards | AizzyHub",
  description:
    "How AizzyHub researches, writes, and fact-checks every finance guide we publish. Our editorial standards, independence policy, and correction process.",
  alternates: { canonical: "https://www.aizzyhub.com/legal/editorial-policy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Editorial Policy & Content Standards | AizzyHub",
    description:
      "How AizzyHub researches, writes, and fact-checks every finance guide we publish.",
    url: "https://www.aizzyhub.com/legal/editorial-policy",
    siteName: "AizzyHub",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Editorial Policy & Content Standards | AizzyHub",
    description:
      "How AizzyHub researches, writes, and fact-checks every finance guide we publish.",
    site: "@aizzyhub",
  },
};

export default function EditorialPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-2">Editorial Policy</h1>
      <p className="text-sm text-muted mb-10">Last updated: May 2026</p>

      <div className="prose prose-sm max-w-none text-muted space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Our Commitment to Accuracy</h2>
          <p>
            Every article published on AizzyHub is researched, written, and reviewed with accuracy as the top priority. We cite credible sources, cross-reference data, and update content when market conditions or regulations change.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Who Writes Our Content</h2>
          <p>
            Our content is produced by the AizzyHub editorial team — a group of finance writers and researchers with backgrounds in personal finance, investing, and financial technology. All authors are identified on each article with a bio and area of expertise.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Fact-Checking Process</h2>
          <p>
            Before publication, every guide goes through an internal review process that includes:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Verification of statistics and data against primary sources</li>
            <li>Review of financial claims for accuracy and context</li>
            <li>Checking that regulatory information is current and jurisdiction-appropriate</li>
            <li>Editorial review for clarity, tone, and beginner-friendliness</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Updates and Corrections</h2>
          <p>
            Finance changes fast. We review and update our guides regularly to reflect current market conditions, tax rules, and product availability. Each article displays a &ldquo;Last updated&rdquo; date so readers know how recent the information is.
          </p>
          <p className="mt-2">
            If you spot an error or outdated information, please contact us at{" "}
            <a href="mailto:aizzyhub@gmail.com" className="text-primary hover:underline">aizzyhub@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Independence and Objectivity</h2>
          <p>
            AizzyHub editorial content is independent from our commercial relationships. Advertisers and affiliate partners have no influence over what we write, how we rate products, or which recommendations we make. Our editorial team operates separately from our business team.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Not Financial Advice</h2>
          <p>
            Content on AizzyHub is for educational and informational purposes only. It does not constitute personalised financial advice. Always consult a qualified financial adviser before making investment decisions.
          </p>
        </section>
      </div>
    </main>
  );
}
