import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/src/lib/mongodb";
import Subscriber from "@/src/models/Subscriber";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-notify-secret");
  if (!secret || secret !== process.env.NOTIFY_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { title, description, slug } = body as {
    title?: string;
    description?: string;
    slug?: string;
  };

  if (!title || !description || !slug) {
    return NextResponse.json(
      { message: "Missing required fields: title, description, slug" },
      { status: 400 },
    );
  }

  await connectDB();
  const subscribers = await Subscriber.find({}, "email").lean();

  // Email sending is prepared but not yet active — will use Resend when enabled
  console.log(
    `[notify] Would notify ${subscribers.length} subscribers about: ${title}`,
  );

  return NextResponse.json(
    { message: `Queued for ${subscribers.length} subscribers` },
    { status: 200 },
  );
}
