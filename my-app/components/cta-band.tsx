import Link from "next/link";

type CtaLink = {
  href: string;
  label: string;
  external?: boolean;
  variant?: "primary" | "secondary";
};

type CtaBandProps = {
  title: string;
  description?: string;
  links: CtaLink[];
  id?: string;
};

export default function CtaBand({ title, description, links, id }: CtaBandProps) {
  return (
    <section
      aria-labelledby={id}
      className="hero-band relative overflow-hidden px-6 py-20 md:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-accent-muted/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 top-1/3 h-48 w-48 rounded-full bg-accent-pale/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
        <h2 id={id} className="text-3xl font-bold text-accent-pale md:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="text-lg leading-relaxed text-surface/90">{description}</p>
        )}
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          {links.map((link) => {
            const className =
              link.variant === "secondary"
                ? "border-2 border-accent-muted text-accent-pale px-6 py-2.5 rounded-full font-medium hover:bg-accent-muted/20 transition-colors"
                : "bg-accent-pale text-foreground px-6 py-2.5 rounded-full font-medium hover:bg-surface transition-colors shadow-sm";

            if (link.external) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link key={link.href} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
