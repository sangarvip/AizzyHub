"use client";

import { useState } from "react";
import { emailSchema } from "@/src/lib/schemas";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  text: string;
  button: string;
  link?: string;
}

export default function CTASection({ text, button, link }: CTASectionProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const parsed = emailSchema.safeParse({ email });
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "cta-section",
          page: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok && res.status !== 409) {
        setError(data?.message ?? "Something went wrong.");
        return;
      }
      setSubmitted(true);
      setEmail("");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="cta"
      className="relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-surface to-secondary/5 p-8 mt-10 text-center"
    >
      {/* Decorative glow */}
      <div
        aria-hidden
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl pointer-events-none"
      />

      <p className="text-base md:text-lg font-medium text-foreground leading-relaxed max-w-xl mx-auto mb-6">
        {text}
      </p>

      {submitted ? (
        <p className="text-success font-semibold text-sm">
          ✅ You&apos;re in! We&apos;ll keep you updated.
        </p>
      ) : link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex"
        >
          {button}
          <ArrowRight size={16} />
        </a>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto"
        >
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="Enter your email"
              aria-label="Email address"
              aria-invalid={!!error}
              className={`input ${error ? "error" : ""}`}
            />
            {error && (
              <p className="mt-1 text-xs text-error text-left">{error}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Joining…" : button}
          </button>
        </form>
      )}
    </section>
  );
}
