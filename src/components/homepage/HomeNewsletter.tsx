"use client";

import { useState, FormEvent } from "react";
import { emailSchema } from "@/src/lib/schemas";
import { Mail, CheckCircle2 } from "lucide-react";

const BENEFITS = [
  "Weekly Hints on Personal Finance",
  "Stock Market & Investing Insights",
  "AI finance disclosure and evaluation",
  "100% solved — unsubscribe anytime"

];

export default function HomeNewsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          source: "homepage-newsletter",
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
    <section
      aria-labelledby="newsletter-heading"
      className="w-full bg-background py-16 md:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="rounded-3xl border border-border bg-surface overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left — copy */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <Mail size={20} className="text-primary" />
              </div>

              <h2
                id="newsletter-heading"
                className="text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight"
              >
                Get weekly financial insights that will actually help you grow your money
              </h2>
              <p className="text-base text-muted mb-6 leading-relaxed">
                Join readers in the U.S., U.K., Canada, and Australia who get actionable personal finance and make investment recommendations — straight to their inbox.
              </p>

              <ul className="space-y-2.5">
                {BENEFITS.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2.5 text-sm text-muted"
                  >
                    <CheckCircle2 size={14} className="text-primary shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — form */}
            <div className="bg-background border-t md:border-t-0 md:border-l border-border p-8 md:p-10 flex flex-col justify-center">
              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={28} className="text-success" />
                  </div>
                  <p className="font-bold text-foreground text-lg mb-1">
                    You&apos;re subscribed!
                  </p>
                  <p className="text-sm text-muted">
                    Welcome to AizzyHub. Check your inbox for your first guide.
                  </p>
                </div>
              ) : (
                <>
                  <p className="font-semibold text-foreground mb-1">
                    Subscribe — it&apos;s free
                  </p>
                  <p className="text-sm text-muted mb-5">
                    No junk mail. No pay wall. Just useful finance content material.
                  </p>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="space-y-3"
                  >
                    <div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (error) setError("");
                        }}
                        placeholder="Enter your email address"
                        aria-label="Email address"
                        aria-invalid={!!error}
                        className={`input ${error ? "error" : ""}`}
                      />
                      {error && (
                        <p className="mt-1.5 text-xs text-error">{error}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "Subscribing…" : "Get Free Weekly Insights"}
                    </button>
                  </form>

                  <p className="mt-3 text-xs text-muted text-center">
                    Trusted by readers in 🇺🇸 🇬🇧 🇨🇦 🇦🇺 — unsubscribe anytime.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
