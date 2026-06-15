import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/src/lib/schemas";
import { connectDB } from "@/src/lib/mongodb";
import ContactMessage from "@/src/models/ContactMessage";
import { rateLimit, getClientIp } from "@/src/lib/rateLimit";

// 3 contact submissions per IP per hour
const RATE_LIMIT = { limit: 3, windowSec: 60 * 60 };

export async function POST(request: NextRequest) {
  // ── Rate limiting ──────────────────────────────────────────────────────────
  const ip = getClientIp(request);
  const rl = rateLimit(ip, "contact", RATE_LIMIT);

  if (!rl.allowed) {
    return NextResponse.json(
      { message: "Too many requests. Please try again later." },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
          "X-RateLimit-Limit": String(RATE_LIMIT.limit),
          "X-RateLimit-Remaining": "0",
        },
      },
    );
  }

  // ── Parse & validate ───────────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    parsed.error.issues.forEach((err) => {
      const field = String(err.path[0]);
      if (!fieldErrors[field]) fieldErrors[field] = err.message;
    });
    return NextResponse.json(
      { message: "Validation failed", errors: fieldErrors },
      { status: 400 },
    );
  }

  const {
    name,
    email,
    message,
    source = "contact-form",
    page = "/contact",
  } = parsed.data;
  const userAgent = request.headers.get("user-agent") ?? "";

  // ── Persist ────────────────────────────────────────────────────────────────
  try {
    await connectDB();

    await ContactMessage.create({
      name,
      email,
      message,
      source,
      page,
      userAgent,
      ip,
    });

    return NextResponse.json(
      { message: "Message received. We'll get back to you soon!" },
      {
        status: 201,
        headers: {
          "X-RateLimit-Limit": String(RATE_LIMIT.limit),
          "X-RateLimit-Remaining": String(rl.remaining),
        },
      },
    );
  } catch {
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
