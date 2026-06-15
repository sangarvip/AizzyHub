"use client";

import { JSX } from "react";

interface Section {
  id: number;
  heading: string;
  content: string[];
}

interface LegalDocumentData {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

/* --------------------------------------------------
   ✅ Disclaimer Data (can move to /data/legal/disclaimer.json)
-------------------------------------------------- */
const data: LegalDocumentData = {
  title: "Disclaimer",
  lastUpdated: "Nov 30, 2025",
  sections: [
    {
      id: 1,
      heading: "General Information Only",
      content: [
        "The information provided on the AizzyHub website (the “Service”) is for general informational and educational purposes only. All information on the Service is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Service.",
        "Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Service or reliance on any information provided. Your use of the Service and your reliance on any information is solely at your own risk.",
      ],
    },
    {
      id: 2,
      heading: "Not Financial Advice",
      content: [
        "The Service does not provide financial advice. The content, including but not limited to articles, blog posts, market analyses, and any content published on AizzyHub, is intended for educational purposes only and should not be considered professional financial advice. It is not a substitute for advice from a qualified financial professional for any questions you may have regarding financial decisions.",
        "AizzyHub is not a SEBI-registered investment advisor. All information is strictly for educational purposes only.",
      ],
    },
    {
      id: 3,
      heading: "Investment Risks",
      content: [
        "Investing in the stock market involves risk, including the potential loss of principal. Past performance is not indicative of future results. You should conduct your own research, consult with certified financial professionals, and make investment decisions based on your individual financial situation and goals.",
        "AizzyHub does not guarantee any investment returns or profits.",
      ],
    },
    {
      id: 4,
      heading: "External Links Disclaimer",
      content: [
        "The Service may contain links to external websites that are not provided or maintained by us in any way. AizzyHub does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.",
      ],
    },
    {
      id: 5,
      heading: "Affiliate Disclosure",
      content: [
        "AizzyHub participates in affiliate marketing programs, which means we may earn commissions from certain purchases made through affiliate links. This helps support our work at no extra cost to you.",
      ],
    },
    {
      id: 6,
      heading: "Limitation of Liability",
      content: [
        "In no event shall AizzyHub, its affiliates, directors, employees, or agents be held liable for any indirect, incidental, consequential, or punitive damages arising from the use or inability to use the Service, even if advised of the possibility of such damages.",
      ],
    },
    {
      id: 7,
      heading: "Consent",
      content: [
        "By using our website, you hereby consent to our disclaimer and agree to its terms.",
      ],
    },
    {
      id: 8,
      heading: "Update",
      content: [
        "Should we update, amend, or make any changes to this document, those changes will be prominently posted here.",
      ],
    },
  ],
};

/* --------------------------------------------------
   ✅ Component
-------------------------------------------------- */
export default function LegalDocument(): JSX.Element {
  return (
    <section className="w-full bg-background py-20 px-6">
      <div className="max-w-3xl mx-auto text-foreground">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          {data.title}
        </h1>

        {/* Sections with divider */}
        {data.sections.map((section, index) => (
          <div key={section.id} className="mb-10">
            <h2
              className="text-lg font-semibold mb-2"
              id={`section-${section.id}`}
            >
              {section.id}. {section.heading}
            </h2>
            {section.content.map((para, i) => (
              <p key={i} className="text-muted text-sm leading-relaxed mb-2">
                {para}
              </p>
            ))}

            {/* Divider between sections */}
            {index < data.sections.length - 1 && (
              <hr className="mt-6 border-t border-border" />
            )}
          </div>
        ))}

        {/* Last updated note */}
        <p className="text-muted text-sm mt-10 text-center">
          This document was last updated on{" "}
          <span className="text-indigo-600 font-medium">
            {data.lastUpdated}
          </span>
          .
        </p>
      </div>
    </section>
  );
}
