"use client";

const inputClassName =
  "w-full rounded-lg border border-accent-muted/50 bg-white px-4 py-2.5 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20";

const labelClassName = "mb-1.5 block text-sm font-medium text-foreground";

export default function ContactForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6 p-6 md:p-8">
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
          className={inputClassName}
          placeholder="Your name"
        />
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
          className={`${inputClassName} resize-y`}
          placeholder="Tell me about your project, goals, and what you need help with."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-accent px-6 py-3 font-medium text-accent-pale transition-colors hover:bg-accent-light md:w-auto"
      >
        Send Message
      </button>
    </form>
  );
}
