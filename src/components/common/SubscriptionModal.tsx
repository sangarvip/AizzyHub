"use client";

import { useEffect, useRef, useState } from "react";
import { X, Mail, TrendingUp } from "lucide-react";
import { emailSchema } from "@/src/lib/schemas";

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SubscriptionModal({
  isOpen,
  onClose,
}: SubscriptionModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;
    const modal = modalRef.current;
    if (!modal) return;
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleDismiss();
        return;
      }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setError("");
      setLoading(false);
      setSuccess(false);
    }
  }, [isOpen]);

  function handleDismiss() {
    localStorage.setItem("modal_dismissed", "true");
    onClose();
  }

  async function handleSubmit(e: React.FormEvent) {
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
          source: "popup-modal",
          page: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      });
      if (!res.ok && res.status !== 409) {
        const data = await res.json().catch(() => ({}));
        setError(data?.message ?? "Something went wrong. Please try again.");
        return;
      }
      localStorage.setItem("subscribed", "true");
      setSuccess(true);
      setTimeout(() => onClose(), 2000);
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-md rounded-2xl bg-background border border-border shadow-lg p-8 text-center"
      >
        {/* Close */}
        <button
          onClick={handleDismiss}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-surface transition-colors"
        >
          <X size={18} />
        </button>

        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
          <TrendingUp size={26} className="text-primary" />
        </div>

        <h2 id="modal-title" className="text-xl font-bold text-foreground mb-2">
          Invest Smarter, Not Harder
        </h2>
        <p className="text-sm text-muted mb-6 leading-relaxed">
          Join thousands of investors getting weekly insights on finance,
          stocks, and AI-powered investing — for free.
        </p>

        {success ? (
          <div className="flex flex-col items-center gap-2 py-4">
            <Mail size={28} className="text-success" />
            <p className="text-success font-semibold">
              You&apos;re subscribed!
            </p>
            <p className="text-xs text-muted">
              Welcome to the AizzyHub community.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-3">
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
            {error && <p className="text-xs text-error text-left">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Subscribing…" : "Get Free Insights"}
            </button>
          </form>
        )}

        <p className="mt-4 text-xs text-muted-2">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
