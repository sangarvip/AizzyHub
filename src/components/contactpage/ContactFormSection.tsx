"use client";

import Image from "next/image";
import { useState, JSX } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { contactSchema } from "@/src/lib/schemas";
import type { ContactFormData } from "@/src/lib/schemas";

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

export default function ContactFormSection(): JSX.Element {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) setServerError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    setServerError("");

    // Client-side validation
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      parsed.error.issues.forEach((err) => {
        const field = String(err.path[0]) as keyof ContactFormData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...parsed.data,
          source: "contact-form",
          page: window.location.pathname,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.status === 429) {
        setServerError(
          "Too many requests. Please wait a moment and try again.",
        );
        return;
      }

      if (!res.ok) {
        // Surface server-side field errors if returned
        if (data?.errors) {
          setErrors(data.errors as FieldErrors);
        } else {
          setServerError(
            data?.message ?? "Something went wrong. Please try again.",
          );
        }
        return;
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch {
      setServerError(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field: keyof typeof form) =>
    `w-full rounded-md border px-4 py-2 text-sm focus:outline-none bg-background text-foreground placeholder:text-muted transition-colors ${
      errors[field as keyof ContactFormData]
        ? "border-error"
        : "border-border focus:border-primary"
    }`;

  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-xl border border-border shadow-sm bg-surface p-6 md:p-10 grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT */}
          <div>
            <Image
              src="/contactpage/contact-form/contact-help.png"
              alt="AizzyHub Support Team"
              width={400}
              height={300}
              className="w-full h-auto mb-6 rounded-md"
              priority
            />
            <h3 className="text-lg font-semibold text-foreground mb-3">
              We&apos;re Here to Help!
            </h3>
            <p className="text-muted text-sm leading-relaxed mb-4">
              Our team is dedicated to providing valuable insights on money,
              investing, and AI. Don&apos;t hesitate to get in touch if you
              would like assistance, have a content idea, or simply need a
              discussion on the latest market trends.
            </p>
            <div className="flex items-center gap-2 text-muted text-sm">
              <Mail size={16} className="text-primary" />
              <a
                href="mailto:aizzyhub@gmail.com"
                className="hover:text-primary transition-colors"
              >
                aizzyhub@gmail.com
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle2 size={28} className="text-success" />
                </div>
                <p className="font-semibold text-foreground text-lg">
                  Message sent!
                </p>
                <p className="text-sm text-muted">
                  We&apos;ll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h4 className="text-foreground font-semibold mb-1">
                    Send us a Message
                  </h4>
                </div>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    aria-invalid={!!errors.name}
                    className={inputClass("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-error">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    aria-invalid={!!errors.email}
                    className={inputClass("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-error">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted mb-1"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type your message here..."
                    rows={4}
                    aria-invalid={!!errors.message}
                    className={inputClass("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-error">{errors.message}</p>
                  )}
                </div>

                {/* Server error */}
                {serverError && (
                  <p className="text-sm text-error bg-error/8 border border-error/20 rounded-md px-3 py-2">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
