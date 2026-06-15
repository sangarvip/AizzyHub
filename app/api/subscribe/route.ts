import { NextRequest, NextResponse } from "next/server";
import { emailSchema } from "@/src/lib/schemas";
import { connectDB } from "@/src/lib/mongodb";
import Subscriber from "@/src/models/Subscriber";
import { rateLimit, getClientIp } from "@/src/lib/rateLimit";

// 5 subscribe attempts per IP per hour
const RATE_LIMIT = { limit: 5, windowSec: 60 * 60 };

export async function POST(request: NextRequest) {
  // ── Rate limiting ──────────────────────────────────────────────────────────
  const ip = getClientIp(request);
  const rl = rateLimit(ip, "subscribe", RATE_LIMIT);

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

  const parsed = emailSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0].message },
      { status: 400 },
    );
  }

  const { email, source = "newsletter", page = "/" } = parsed.data;
  const userAgent = request.headers.get("user-agent") ?? "";

  // ── Persist ────────────────────────────────────────────────────────────────
  try {
    await connectDB();

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return NextResponse.json(
        { message: "You're already subscribed!" },
        { status: 409 },
      );
    }

    await Subscriber.create({ email, source, page, userAgent, ip });

    return NextResponse.json(
      { message: "Subscribed successfully" },
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
