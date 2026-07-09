import { createSupabaseAdmin } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  service?: unknown;
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

function formatMessageWithService(service: string, message: string): string {
  return `Service: ${service}\n\n${message}`;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = optionalString(body.name);
  const service = optionalString(body.service);
  const message = optionalString(body.message);

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }

  if (!service) {
    return NextResponse.json({ error: "Please select a service" }, { status: 400 });
  }

  if (!message) {
    return NextResponse.json(
      { error: "Project description is required" },
      { status: 400 },
    );
  }

  const storedMessage = formatMessageWithService(service, message);

  if (name.length > 200 || storedMessage.length > 5000) {
    return NextResponse.json({ error: "Input is too long" }, { status: 400 });
  }

  let supabase;

  try {
    supabase = createSupabaseAdmin();
  } catch (error) {
    console.error("Supabase configuration error:", error);
    return NextResponse.json(
      { error: "Server configuration error. Please try again later." },
      { status: 500 },
    );
  }

  const { error } = await supabase.from("Contact").insert({
    name,
    phone: optionalString(body.phone),
    website: optionalString(body.website),
    budget: optionalString(body.budget),
    message: storedMessage,
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
