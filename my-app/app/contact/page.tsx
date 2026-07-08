import PageHero from "../../components/page-hero";
import ContactForm from "../../components/contact-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Olivia Bisset",
  description:
    "Get in touch to discuss a website, application, or digital project.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        id="contact-hero"
        eyebrow="Get in Touch"
        title={
          <>
            Let&apos;s build something{" "}
            <span className="text-accent-muted">great</span>
          </>
        }
        description="Have a project in mind? Tell me about your goals and I'll get back to you."
      />

      <section className="section-band px-6 py-16 md:py-20">
        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
