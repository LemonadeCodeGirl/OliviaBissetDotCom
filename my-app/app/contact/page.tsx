"use client";

import { useEffect } from "react";

export default function ContactPage() {
  useEffect(() => {
    window.location.replace("/#connect");
  }, []);

  return (
    <main className="flex min-h-[50vh] items-center justify-center px-6">
      <p className="text-foreground/70">Taking you to get in touch…</p>
    </main>
  );
}
