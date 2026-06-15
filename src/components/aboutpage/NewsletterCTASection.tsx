"use client";

import { useState, JSX } from "react";
import { emailSchema } from "@/src/lib/schemas";

export default function NewsletterCTASection(): JSX.Element {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
          source: "about-newsletter-cta",
          page: "/about-us",
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok && res.status !== 409) {
        setError(data?.message ?? "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-background py-16 text-center">
      <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-lg md:text-xl font-semibold text-indigo-600 mb-3">
          Stay Ahead with AizzyHub Insights
        </h2>
        <p className="text-muted text-sm md:text-base mb-6">
          Subscribe to our newsletter to get the latest articles, market
          ratings, technical insights, AI trends, and one-on-one funding tips
          delivered instantly to your inbox.
        </p>

        <div aria-live="polite">
          {submitted ? (
            <p className="mt-6 text-green-600 font-medium transition-opacity duration-300">
              ✅ You&apos;re subscribed! Check your inbox for updates.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col items-center gap-3"
              aria-label="Newsletter subscription form"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-center gap-3 w-full">
                <div className="w-full sm:w-64">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Your email address"
                    aria-label="Enter your email to subscribe"
                    aria-invalid={!!error}
                    className={`w-full rounded-md border px-4 py-2 text-sm focus:outline-none focus:ring-2 bg-background text-foreground placeholder:text-muted ${
                      error
                        ? "border-red-500 focus:ring-red-500"
                        : "border-border focus:ring-indigo-500"
                    }`}
                  />
                  {error && (
                    <p className="mt-1 text-xs text-red-500 text-left">
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`rounded-md px-5 py-2 text-sm font-semibold text-white transition-all ${
                    loading
                      ? "bg-indigo-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 hover:text-white"
                  }`}
                >
                  {loading ? "Subscribing..." : "Subscribe Now"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
