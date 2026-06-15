"use client";

import { useReadingProgress } from "@/src/hooks/useReadingProgress";

export default function ReadingProgress() {
  const progress = useReadingProgress();

  return (
    <div
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Reading progress"
      className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent"
    >
      <div
        className="h-full bg-primary transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
