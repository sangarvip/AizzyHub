import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

function truncateLabel(label: string, maxLen = 40): string {
  if (label.length <= maxLen) return label;
  return label.slice(0, maxLen) + "…";
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const truncated = truncateLabel(item.label);
          const needsTruncation = item.label.length > 40;

          return (
            <React.Fragment key={index}>
              {index === 0 && (
                <li className="flex items-center">
                  <Home size={13} className="mr-1 opacity-60" />
                </li>
              )}
              <li>
                {isLast ? (
                  <span
                    aria-current="page"
                    className="text-foreground font-medium"
                    title={needsTruncation ? item.label : undefined}
                  >
                    {truncated}
                  </span>
                ) : (
                  <Link
                    href={item.href ?? "/"}
                    className="hover:text-primary transition-colors"
                    title={needsTruncation ? item.label : undefined}
                  >
                    {truncated}
                  </Link>
                )}
              </li>
              {!isLast && (
                <li aria-hidden="true" className="select-none opacity-40">
                  <ChevronRight size={13} />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
