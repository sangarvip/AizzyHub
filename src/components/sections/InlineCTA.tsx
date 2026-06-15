"use client";

import { useState } from "react";
import { emailSchema } from "@/src/lib/schemas";
import { Mail, ArrowRight } from "lucide-react";

interface InlineCTAProps {
  text: string;
  button: string;
  link?: string;
}

export default function InlineCTA({ text, button, link }: InlineCTAProps) {
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
          source: "inline-cta",
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
    <div className="my-10 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-surface to-secondary/5 p-6 md:p-8">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
          <Mail size={17} className="text-primary" />
        </div>
        <p className="text-base font-medium self-center text-foreground leading-snug">
          {text}
        </p>
      </div>

      {submitted ? (
        <p className="text-sm text-success font-semibold flex items-center gap-2">
          ✅ You&apos;re subscribed — welcome to AizzyHub!
        </p>
      ) : link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex text-sm"
        >
          {button}
          <ArrowRight size={15} />
        </a>
      ) : (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col sm:flex-row gap-3"
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
              className={`input text-sm ${error ? "error" : ""}`}
            />
            {error && <p className="mt-1 text-xs text-error">{error}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary shrink-0 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Joining…" : button}
          </button>
        </form>
      )}
      <p className="mt-3 text-xs text-muted">
        Free forever. No spam. Unsubscribe anytime.
      </p>
    </div>
  );
}
