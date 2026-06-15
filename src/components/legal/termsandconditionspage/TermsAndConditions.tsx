"use client";

import { JSX } from "react";
import {
  FileText,
  UserCheck,
  Lock,
  Scale,
  Shield,
  Globe,
  Info,
} from "lucide-react";

// ===============================
//  TERMS DATA (JSON Style)
// ===============================
const termsData = {
  title: "Terms & Conditions",
  lastUpdated: "Nov 30, 2025",
  intro: `Welcome to AizzyHub. By accessing or using our website, you agree to comply with and be bound by these Terms & Conditions. Please read them carefully before proceeding.`,
  sections: [
    {
      id: 1,
      heading: "Acceptance of Terms",
      icon: "FileText",
      content: [
        "By using AizzyHub, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should not use our website.",
        "AizzyHub reserves the right to update or modify these terms at any time without prior notice.",
      ],
    },
    {
      id: 2,
      heading: "User Obligations",
      icon: "UserCheck",
      content: [
        "As a user of AizzyHub, you agree to:",
        "- Provide accurate, current, and complete information.",
        "- Use the website only for lawful purposes.",
        "- Refrain from posting or sharing any harmful, defamatory, or infringing content on the platform.",
        "- Respect intellectual property and privacy rights.",
      ],
    },
    {
      id: 3,
      heading: "Intellectual Property",
      icon: "Scale",
      subsections: [
        {
          subheading: "3.1. Content Ownership",
          content: [
            "All intellectual property, including text, graphics, logos, images, and software, are the property of AizzyHub unless otherwise stated. You may not reproduce, distribute, or modify any material without prior written permission.",
          ],
        },
        {
          subheading: "3.2. Limited License",
          content: [
            "AizzyHub grants you a limited, non-transferable, and revocable license to access and use the content for personal and non-commercial purposes only.",
          ],
        },
      ],
    },
    {
      id: 4,
      heading: "Disclaimers",
      icon: "Shield",
      subsections: [
        {
          subheading: "4.1. Accuracy of Information",
          content: [
            "All information provided on AizzyHub is for educational and informational purposes only. While we strive for accuracy, we make no warranties or guarantees regarding the completeness, reliability, or accuracy of the information.",
          ],
        },
        {
          subheading: "4.2. Financial Disclaimer",
          content: [
            "AizzyHub does not provide financial advice. All information is provided ‘as is’ and should not be interpreted as a substitute for professional financial consultation.",
          ],
        },
      ],
    },
    {
      id: 5,
      heading: "Limitation of Liability",
      icon: "Lock",
      content: [
        "In no event shall AizzyHub, its affiliates, or its contributors be liable for any damages, losses, or expenses arising out of or related to the use of the website or its content. This includes direct, indirect, incidental, and consequential damages.",
      ],
    },
    {
      id: 6,
      heading: "Governing Law",
      icon: "Globe",
      content: [
        "These Terms & Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts located in Gujarat, India.",
      ],
    },
    {
      id: 7,
      heading: "Changes to Terms",
      icon: "Info",
      content: [
        "AizzyHub reserves the right to modify or update these Terms & Conditions at any time. Continued use of the website after such changes implies acceptance of the revised terms.",
      ],
    },
    {
      id: 8,
      heading: "Contact Information",
      icon: "Mail",
      content: [
        "If you have any questions regarding these Terms & Conditions, please contact us at:",
        "📧 aizzyhub@gmail.com",
        "📍 Ahmedabad, Gujarat, India",
      ],
    },
  ],
};

// ===============================
//  ICON MAP
// ===============================
const icons = {
  FileText,
  UserCheck,
  Lock,
  Scale,
  Shield,
  Globe,
  Info,
};

// ===============================
//  COMPONENT
// ===============================
export default function TermsAndConditions(): JSX.Element {
  return (
    <section className="w-full bg-background py-20 px-6">
      <div className="max-w-3xl mx-auto text-foreground">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-8">
          {termsData.title}
        </h1>

        {/* Intro */}
        <p className="text-muted text-sm leading-relaxed mb-8 text-center">
          {termsData.intro}
        </p>

        {/* Sections */}
        {termsData.sections.map((section, index) => {
          const Icon = icons[section.icon as keyof typeof icons];
          return (
            <div key={section.id} className="mb-10">
              {/* Section Header */}
              <div className="flex items-center gap-2 mb-2">
                {Icon && <Icon size={18} className="text-indigo-600" />}
                <h2 className="text-lg font-semibold text-foreground">
                  {section.id}. {section.heading}
                </h2>
              </div>

              {/* Subsections */}
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
                : section.content.map((para, i) => (
                    <p
                      key={i}
                      className="text-muted text-sm leading-relaxed mb-2 whitespace-pre-line"
                    >
                      {para}
                    </p>
                  ))}

              {/* Divider */}
              {index < termsData.sections.length - 1 && (
                <hr className="mt-6 border-t border-border" />
              )}
            </div>
          );
        })}

        {/* Last Updated */}
        <p className="text-muted text-sm mt-10 text-center">
          This document was last updated on{" "}
          <span className="text-indigo-600 font-medium">
            {termsData.lastUpdated}
          </span>
          .
        </p>
      </div>
    </section>
  );
}
