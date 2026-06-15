import { Star, BookOpen, ShieldCheck, RefreshCw, Gift, MessageCircle } from "lucide-react";

const ITEMS = [
  {
    icon: <BookOpen size={15} className="text-primary shrink-0" />,
    text: "Beginner-friendly",
  },
  {
    icon: <ShieldCheck size={15} className="text-primary shrink-0" />,
    text: "Research-backed",
  },
  {
    icon: <RefreshCw size={15} className="text-primary shrink-0" />,
    text: "Updated for 2026",
  },
  {
    icon: <Gift size={15} className="text-primary shrink-0" />,
    text: "Free guides",
  },
  {
    icon: <MessageCircle size={15} className="text-primary shrink-0" />,
    text: "No confusing jargon",
  },
  {
    icon: <Star size={15} className="text-primary shrink-0" />,
    text: "Practical, actionable financial advice",
  },
];

export default function HomeTrustBar() {
  return (
    <div className="w-full border-y border-border bg-surface py-3.5">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-10">
          {ITEMS.map((item) => (
            <div
              key={item.text}
              data-testid="trust-signal-item"
              className="flex items-center gap-2 text-xs text-muted"
            >
              {item.icon}
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
