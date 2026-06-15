import type { Metadata } from "next";
import ContactHeader from "@/src/components/contactpage/ContactHeader";
import ContactFormSection from "@/src/components/contactpage/ContactFormSection";
import PartnerSection from "@/src/components/contactpage/PartnerSection";
import SocialConnectSection from "@/src/components/contactpage/SocialConnectSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact AizzyHub | Get in Touch",
  description:
    "Have a question, feedback, or collaboration idea? Reach out to the AizzyHub team. We typically respond within 24–48 hours.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.aizzyhub.com/contact" },
  openGraph: {
    title: "Contact AizzyHub | Get in Touch",
    description:
      "Have a question, feedback, or collaboration idea? Reach out to the AizzyHub team.",
    url: "https://www.aizzyhub.com/contact",
    siteName: "AizzyHub",
    type: "website",
    images: [
      {
        url: "https://www.aizzyhub.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact AizzyHub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact AizzyHub | Get in Touch",
    description:
      "Have a question, feedback, or collaboration idea? Reach out to the AizzyHub team.",
    site: "@aizzyhub",
    images: ["https://www.aizzyhub.com/og-image.png"],
  },
};

const FAQ_ITEMS = [
  {
    q: "How quickly does AizzyHub respond to messages?",
    a: "We aim to respond to all enquiries within 24–48 business hours. For urgent matters, email us directly at aizzyhub@gmail.com.",
  },
  {
    q: "Can I contribute a guest article to AizzyHub?",
    a: "We welcome contributions from finance professionals, researchers, and experienced investors. Use the contact form to introduce yourself and share your topic idea. We review all pitches and respond within 5 business days.",
  },
  {
    q: "How do I report an error in an article?",
    a: "If you spot an inaccuracy or outdated information, please use the contact form or email aizzyhub@gmail.com with the article URL and the specific issue. We take corrections seriously and update content promptly.",
  },
  {
    q: "Does AizzyHub offer advertising or sponsorship opportunities?",
    a: "Yes. We work with finance brands, fintech companies, and investment platforms on sponsored content and advertising partnerships. All sponsored content is clearly labelled. Use the contact form to enquire.",
  },
  {
    q: "Is AizzyHub available for media or press enquiries?",
    a: "Yes. For media enquiries, interview requests, or press mentions, please contact us via the form below or email aizzyhub@gmail.com with 'Media Enquiry' in the subject line.",
  },
];

export default function ContactPage() {
  return (
    <>
      <ContactHeader />
      <ContactFormSection />
      <PartnerSection />
      <SocialConnectSection />

      {/* SEO content section */}
      <section className="w-full bg-surface border-t border-border py-14">
        <div className="mx-auto max-w-3xl px-4 md:px-6 space-y-10">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">About AizzyHub</h2>
            <p className="text-base text-muted leading-relaxed">
              AizzyHub is a free personal finance and investing education platform trusted by readers across the US, UK, Canada, and Australia. We publish practical, research-backed guides on stock market investing, mutual funds, AI in finance, fintech innovations, and personal finance — all written in plain English for beginners and intermediate investors.
            </p>
            <p className="text-base text-muted leading-relaxed mt-3">
              Our editorial team is committed to accuracy, independence, and transparency. We do not provide personalised financial advice — all content is for educational purposes only. You can read more about how we work in our{" "}
              <Link href="/legal/editorial-policy" className="text-primary hover:underline">editorial policy</Link>.
            </p>
          </div>

          {/* Ways to reach us */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Ways to Reach Us</h2>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <span className="font-semibold text-foreground">General enquiries:</span>{" "}
                <a href="mailto:aizzyhub@gmail.com" className="text-primary hover:underline">aizzyhub@gmail.com</a>
              </li>
              <li>
                <span className="font-semibold text-foreground">Editorial corrections:</span>{" "}
                Use the contact form above or email with the article URL and the issue.
              </li>
              <li>
                <span className="font-semibold text-foreground">Partnerships & advertising:</span>{" "}
                Use the contact form and select &ldquo;Partnership&rdquo; as the subject.
              </li>
              <li>
                <span className="font-semibold text-foreground">Response time:</span>{" "}
                We typically respond within 24–48 business hours.
              </li>
            </ul>
          </div>

          {/* Trust signals */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-3">Why Readers Trust AizzyHub</h2>
            <ul className="space-y-2 text-sm text-muted list-disc list-inside">
              <li>All content is researched and fact-checked before publication</li>
              <li>Editorial content is independent from commercial relationships</li>
              <li>Authors are identified with bios and areas of expertise</li>
              <li>Articles are updated regularly to reflect current market conditions</li>
              <li>No paywalls — all guides are free to read</li>
            </ul>
            <p className="text-sm text-muted mt-3">
              Explore our <Link href="/blog" className="text-primary hover:underline">finance blog</Link> or browse by{" "}
              <Link href="/category/finance" className="text-primary hover:underline">topic category</Link>.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-xl font-bold text-foreground mb-5">Frequently Asked Questions</h2>
            <dl className="space-y-5">
              {FAQ_ITEMS.map((item) => (
                <div key={item.q}>
                  <dt className="font-semibold text-foreground text-sm mb-1">{item.q}</dt>
                  <dd className="text-sm text-muted leading-relaxed">{item.a}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </section>
    </>
  );
}
