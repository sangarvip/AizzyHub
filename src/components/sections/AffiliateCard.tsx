import Image from "next/image";
import { Affiliate } from "@/types";

export default function AffiliateCard({ affiliate }: { affiliate: Affiliate }) {
  return (
    <div className="rounded-2xl border border-border bg-surface shadow-sm overflow-hidden">
      {/* Hero Image */}
      <div className="relative w-full h-36">
        <Image
          src={affiliate.logo}
          alt={affiliate.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-foreground text-base mb-1">
          Recommended Tool:
        </h3>
        <h4 className="font-medium text-foreground mb-2">{affiliate.name}</h4>

        <p className="text-sm text-muted mb-4 leading-relaxed">
          {affiliate.description}
        </p>

        {/* CTA */}
        <a
          href={affiliate.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-surface text-foreground py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition"
        >
          {affiliate.ctaText}
        </a>
      </div>
    </div>
  );
}
