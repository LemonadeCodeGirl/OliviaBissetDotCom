"use client";

import { useState } from "react";

const inputClassName =
  "w-full rounded-xl border border-accent-muted/40 bg-surface/50 px-4 py-3 text-foreground placeholder:text-foreground/40 transition-colors focus:border-accent focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/15";

const labelClassName = "mb-2 block text-sm font-semibold text-foreground";

const serviceOptions = [
  { value: "free-consultation", label: "Free Consultation" },
  { value: "website-redesign", label: "Website Redesign" },
  { value: "new-website", label: "New Website" },
  { value: "custom-software", label: "Custom Software or Web Application" },
  { value: "technical-consulting", label: "Technical Consulting" },
  { value: "other", label: "Other / Not Sure" },
] as const;

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          service: formData.get("service"),
          phone: formData.get("phone"),
          website: formData.get("website"),
          budget: formData.get("budget"),
          message: formData.get("message"),
        }),
      });

      let data: { error?: string } = {};

      try {
        data = (await response.json()) as { error?: string };
      } catch {
        setStatus("error");
        setErrorMessage(
          response.ok
            ? "Something went wrong. Please try again."
            : `Request failed (${response.status}). Please try again.`,
        );
        return;
      }

      if (!response.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card card-tint-cream space-y-6 rounded-2xl p-6 md:p-8"
    >
      {status === "success" && (
        <p
          role="status"
          className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800"
        >
          Thanks for reaching out! Please look out for an email from me in the
          next 24–48 hours.
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-800"
        >
          {errorMessage}
        </p>
      )}

      <div>
        <label htmlFor="name" className={labelClassName}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          disabled={status === "submitting"}
          className={inputClassName}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClassName}>
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          required
          disabled={status === "submitting"}
          className={inputClassName}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClassName}>
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            disabled={status === "submitting"}
            className={inputClassName}
            placeholder="(555) 555-5555"
          />
        </div>

        <div>
          <label htmlFor="website" className={labelClassName}>
            Website
          </label>
          <input
            id="website"
            name="website"
            type="url"
            autoComplete="url"
            disabled={status === "submitting"}
            className={inputClassName}
            placeholder="https://yourwebsite.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="budget" className={labelClassName}>
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          disabled={status === "submitting"}
          className={inputClassName}
          defaultValue=""
        >
          <option value="" disabled>
            Select a budget range
          </option>
          <option value="under-1000">Under $1,000</option>
          <option value="1000-5000">$1,000 – $5,000</option>
          <option value="5000-10000">$5,000 – $10,000</option>
          <option value="10000-25000">$10,000 – $25,000</option>
          <option value="25000-plus">$25,000+</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClassName}>
          Project Description
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          disabled={status === "submitting"}
          className={`${inputClassName} resize-y`}
          placeholder="Tell me about your project, goals, and what you need help with."
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent px-6 py-3 font-medium text-surface shadow-sm transition-colors hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
