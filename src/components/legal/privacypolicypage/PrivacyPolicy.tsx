"use client";

import { JSX } from "react";
import { Info, User, Shield, Lock, Mail } from "lucide-react";

// ✅ Optional: You can define inline fallback data for flexibility
const data = {
  title: "Privacy Policy",
  lastUpdated: "Nov 30, 2025",
  sections: [
    {
      id: 1,
      heading: "Introduction",
      icon: "Info",
      content: [
        "At AizzyHub, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
        "Please read this policy carefully. By using our website, you consent to the terms described in this policy.",
      ],
    },
    {
      id: 2,
      heading: "Information We Collect",
      icon: "User",
      subsections: [
        {
          subheading: "Personal Information You Voluntarily Provide",
          content: [
            "Name, email address, and contact information when you sign up or contact us.",
            "Information provided in forms, surveys, or comments.",
            "Preferences and interests shared through your account or feedback.",
          ],
        },
        {
          subheading: "Information Automatically Collected",
          content: [
            "We may collect data such as your IP address, browser type, device information, pages visited, and referring URLs through cookies or analytics tools to enhance your user experience.",
          ],
        },
      ],
    },
    {
      id: 3,
      heading: "How We Use Your Information",
      icon: "Shield",
      content: [
        "We use collected data to improve our website, provide services, and enhance your experience. Specifically, your data may be used for:",
        "- Personalizing your experience and content recommendations.",
        "- Responding to support or inquiry requests.",
        "- Analyzing website usage and improving features.",
        "- Sending newsletters or updates (only if you opt-in).",
        "- Complying with legal obligations and ensuring security.",
      ],
    },
    {
      id: 4,
      heading: "Data Security",
      icon: "Lock",
      content: [
        "We use industry-standard encryption and security measures to protect your personal information. However, please note that no method of transmission over the Internet is completely secure. While we strive to protect your data, we cannot guarantee absolute security.",
      ],
    },
    {
      id: 5,
      heading: "Your Rights",
      icon: "Info",
      content: [
        "Depending on your jurisdiction, you may have rights regarding your personal information, including access, correction, deletion, and withdrawal of consent. To exercise these rights, please contact us at aizzyhub@gmail.com.",
      ],
    },
    {
      id: 6,
      heading: "Changes to This Policy",
      icon: "Info",
      content: [
        "We may update this Privacy Policy periodically. Changes will be reflected on this page, and the 'Last Updated' date will be revised accordingly. We encourage you to review this page regularly to stay informed.",
      ],
    },
    {
      id: 7,
      heading: "Contact Us",
      icon: "Mail",
      content: [
        "For any questions or concerns regarding this Privacy Policy, please contact us:",
        "AizzyHub Legal Team — aizzyhub@gmail.com",
      ],
      // "image": "/legal/contact-team.png"
    },
  ],
};

// ✅ Icon mapping for dynamic rendering
const icons = { Info, User, Shield, Lock, Mail };

export default function PrivacyPolicy(): JSX.Element {
  return (
    <section className="w-full bg-background py-20 px-6">
      <div className="max-w-3xl mx-auto text-foreground">
        {/* Page Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-10">
          {data.title}
        </h1>

        {/* Sections */}
        {data.sections.map((section, index) => {
          const Icon = icons[section.icon as keyof typeof icons];
          return (
            <div key={section.id} className="mb-10">
              {/* Heading */}
              <div className="flex items-center gap-2 mb-2">
                {Icon && <Icon size={18} className="text-indigo-600" />}
                <h2 className="text-lg font-semibold">{section.heading}</h2>
              </div>

              {/* Subsections or Content */}
              {section.subsections
                ? section.subsections.map((sub, i) => (
                    <div key={i} className="mb-4">
                      <h3 className="text-foreground font-medium mt-3 mb-2 text-sm">
                        {sub.subheading}
                      </h3>
                      {sub.content.map((para, j) => (
                        <p
                          key={j}
                          className="text-muted text-sm leading-relaxed mb-2"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  ))
                : section.content?.map((para, i) => (
                    <p
                      key={i}
                      className="text-muted text-sm leading-relaxed mb-2 whitespace-pre-line"
                    >
                      {para}
                    </p>
                  ))}

              {/* Divider */}
              {index < data.sections.length - 1 && (
                <hr className="mt-6 border-t border-border" />
              )}
            </div>
          );
        })}

        {/* Footer */}
        <p className="text-muted text-sm mt-10 text-center">
          This Privacy Policy was last updated on{" "}
          <span className="text-indigo-600 font-medium">
            {data.lastUpdated}
          </span>
          .
        </p>
      </div>
    </section>
  );
}
