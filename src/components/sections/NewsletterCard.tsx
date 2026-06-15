"use client";

import { useState } from "react";
import { emailSchema } from "@/src/lib/schemas";
import { Mail } from "lucide-react";

export default function NewsletterCard() {
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
          source: "sidebar-newsletter-card",
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
    <div className="p-5 rounded-2xl border border-border bg-surface shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Mail size={16} className="text-primary" />
        <h3 className="font-semibold text-foreground text-sm">
          Stay Ahead in FinTech
        </h3>
      </div>
      <p className="text-xs text-muted mb-4 leading-relaxed">
        Get exclusive insights and expert analyses delivered to your inbox.
      </p>

      {submitted ? (
        <p className="text-xs text-success font-medium py-2">
          ✅ You&apos;re subscribed!
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-2">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="Your email address"
            aria-label="Email address"
            aria-invalid={!!error}
            className={`input text-sm py-2 ${error ? "error" : ""}`}
          />
          {error && <p className="text-xs text-error">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full text-sm py-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Subscribing…" : "Subscribe Free"}
          </button>
        </form>
      )}
    </div>
  );
}
