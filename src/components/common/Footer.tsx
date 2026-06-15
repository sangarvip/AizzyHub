import Link from "next/link";
import Image from "next/image";
import { Linkedin, Youtube, Instagram } from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
import { Routes } from "@/src/assets/lang/routes";

type SocialIconKey = "twitter" | "linkedin" | "youtube" | "instagram";

interface SocialLink {
  name: string;
  href: string;
  icon: SocialIconKey;
}

interface FooterLink {
  label: string;
  href: string;
}

function FooterSocialIcon({ icon }: { icon: SocialIconKey }) {
  switch (icon) {
    case "twitter":
      return <RiTwitterXFill size={18} />;
    case "linkedin":
      return <Linkedin size={18} strokeWidth={1.8} />;
    case "youtube":
      return <Youtube size={18} strokeWidth={1.8} />;
    case "instagram":
      return <Instagram size={18} strokeWidth={1.8} />;
  }
}

const footerData = {
  brand: {
    logo: "/logo.png",
    name: "AizzyHub",
    description:
      "Free, practical guides on investing, personal finance, and AI finance — for readers across the US, UK, Canada & Australia.",
  },
  quickLinks: [
    { label: "Home", href: Routes.home },
    { label: "Investing", href: "/category/stock-market" },
    { label: "Personal Finance", href: "/category/finance" },
    { label: "AI Finance", href: "/category/ai-finance" },
    { label: "Blog", href: Routes.blog },
    { label: "About", href: Routes.about },
  ],
  legal: [
    { label: "Editorial Policy", href: "/legal/editorial-policy" },
    { label: "Affiliate Disclosure", href: "/legal/affiliate-disclosure" },
    { label: "Privacy Policy", href: Routes.privacyPolicy },
    { label: "Terms & Conditions", href: Routes.termsAndConditions },
    { label: "Disclaimer", href: Routes.disclaimer },
  ],
  socials: [
    { name: "Twitter", href: Routes.socials.x, icon: "twitter" },
    { name: "LinkedIn", href: Routes.socials.linkedin, icon: "linkedin" },
    { name: "YouTube", href: Routes.socials.youtube, icon: "youtube" },
    { name: "Instagram", href: Routes.socials.instagram, icon: "instagram" },
  ] satisfies SocialLink[],
} as const;

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface transition-colors">
      <div className="mx-auto max-w-[1200px] px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-muted">
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <Image
              src={footerData.brand.logo}
              alt={footerData.brand.name}
              width={28}
              height={28}
              className="object-fit rounded-full"
            />
            <span className="font-heading font-semibold text-foreground text-lg">
              {footerData.brand.name}
            </span>
          </div>
          <p className="text-sm text-muted leading-relaxed max-w-sm">
            {footerData.brand.description}
          </p>
        </div>

        <FooterColumn title="Quick Links" links={footerData.quickLinks} />
        <FooterColumn title="Legal" links={footerData.legal} />

        <div>
          <h3 className="font-semibold text-foreground mb-3">Connect</h3>
          <div className="flex items-center space-x-4">
            {footerData.socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-muted hover:text-primary transition-colors"
              >
                <FooterSocialIcon icon={social.icon} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary">{footerData.brand.name}</span>. All rights
        reserved.
      </div>
    </footer>
  );
}

interface FooterColumnProps {
  title: string;
  links: readonly FooterLink[];
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-semibold text-foreground mb-3">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
