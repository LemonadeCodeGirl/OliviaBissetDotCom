import { createSupabaseAdmin } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  website?: unknown;
  budget?: unknown;
  message?: unknown;
};

function optionalString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = optionalString(body.name);
  const message = optionalString(body.message);

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (!message) {
    return NextResponse.json(
      { error: "Project description is required" },
      { status: 400 },
    );
  }

  if (name.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Input is too long" }, { status: 400 });
  }

  const supabase = createSupabaseAdmin();
  const { error } = await supabase.from("Contact").insert({
    name,
    phone: optionalString(body.phone),
    website: optionalString(body.website),
    budget: optionalString(body.budget),
    message,
  });

  if (error) {
    console.error("Contact form insert failed:", error);
    return NextResponse.json(
      { error: "Failed to save your message. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
