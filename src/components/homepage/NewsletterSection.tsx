"use client";

import { useState, FormEvent, JSX } from "react";
import { emailSchema } from "@/src/lib/schemas";
import { Mail, TrendingUp } from "lucide-react";

export default function NewsletterSection(): JSX.Element {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
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
          source: "newsletter-section",
          page: "/",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok && res.status !== 409) {
        setError(data?.message ?? "Something went wrong. Please try again.");
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
    <section className="w-full bg-surface border-y border-border py-20 transition-colors">
      <div className="mx-auto max-w-2xl px-6 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 mb-5">
          <TrendingUp size={22} className="text-primary" />
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Join 5,000+ Smart Investors
        </h2>
        <p className="text-sm md:text-base text-muted max-w-md mx-auto">
          Get weekly insights on Finance, Investing, and AI — straight to your
          inbox. No spam, ever.
        </p>

        {submitted ? (
          <div className="mt-8 inline-flex items-center gap-2 text-success font-semibold">
            <Mail size={18} />
            You&apos;re in! Check your inbox for a welcome note.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3"
          >
            <div className="w-full sm:w-72">
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
              className="btn-primary w-full sm:w-auto shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Subscribing…" : "Subscribe Free"}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-muted-2">
          Free forever. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
