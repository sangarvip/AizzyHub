"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  title: string;
  items: FAQ[];
}

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current && contentRef.current) {
      wrapperRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className="border border-border rounded-xl overflow-hidden transition-colors">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
        className="w-full flex justify-between items-center px-5 py-4 text-left bg-surface hover:bg-surface-2 transition-colors"
      >
        <span className="font-medium text-foreground pr-4 text-sm md:text-base leading-snug">
          {faq.q}
        </span>
        <ChevronDown
          className={`shrink-0 w-4 h-4 text-muted transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        ref={wrapperRef}
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        style={{
          maxHeight: 0,
          overflow: "hidden",
          transition: "max-height 300ms ease",
        }}
      >
        <div
          ref={contentRef}
          className="px-5 py-4 bg-background border-t border-border"
        >
          <p className="text-sm md:text-base text-muted leading-relaxed">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({ title, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mb-10">
      <h2 className="text-2xl font-bold text-foreground mb-6">{title}</h2>
      <div className="space-y-3">
        {items.map((faq, i) => (
          <FAQItem
            key={i}
            index={i}
            faq={faq}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
          />
        ))}
      </div>
    </section>
  );
}
