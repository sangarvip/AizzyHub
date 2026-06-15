import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "AizzyHub's affiliate disclosure — how we earn revenue and how it affects our content.",
  alternates: { canonical: "https://www.aizzyhub.com/legal/affiliate-disclosure" },
  robots: { index: true, follow: true },
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-2">Affiliate Disclosure</h1>
      <p className="text-sm text-muted mb-10">Last updated: May 2026</p>

      <div className="prose prose-sm max-w-none text-muted space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">What Is an Affiliate Link?</h2>
          <p>
            Some links on AizzyHub are affiliate links. This means if you click a link and make a purchase or sign up for a service, we may earn a small commission at no extra cost to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">How We Use Affiliate Revenue</h2>
          <p>
            Affiliate commissions help us keep AizzyHub free for all readers. Revenue supports our editorial team, research, and the cost of running the site. We never charge readers for access to our guides.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Our Editorial Independence</h2>
          <p>
            Affiliate relationships do not influence our editorial content. We only recommend products and services we believe are genuinely useful to our readers. Our reviews and comparisons are based on independent research, not on commission rates.
          </p>
          <p className="mt-2">
            If a product has a higher commission but is not the best option for our readers, we will not recommend it as the top choice.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">Identifying Affiliate Content</h2>
          <p>
            Where affiliate links appear in our content, we aim to make this clear with appropriate labelling. If you have any questions about whether a specific link is an affiliate link, contact us at{" "}
            <a href="mailto:aizzyhub@gmail.com" className="text-primary hover:underline">aizzyhub@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground mb-3">FTC Compliance</h2>
          <p>
            This disclosure is made in accordance with the Federal Trade Commission (FTC) guidelines on endorsements and testimonials, as well as equivalent regulations in the UK, Canada, and Australia.
          </p>
        </section>
      </div>
    </main>
  );
}
