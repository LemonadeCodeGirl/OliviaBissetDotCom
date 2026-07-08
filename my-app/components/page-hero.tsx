type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  id?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  id,
}: PageHeroProps) {
  return (
    <section
      aria-labelledby={id}
      className="hero-band relative -mt-14 overflow-hidden px-6 pb-16 pt-28 md:pb-20 md:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-accent-muted/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-accent-pale/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-4xl space-y-5 text-center">
        {eyebrow && (
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-muted">
            {eyebrow}
          </p>
        )}
        <h1
          id={id}
          className="text-4xl font-bold leading-tight text-accent-pale md:text-5xl"
        >
          {title}
        </h1>
        {description && (
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-surface/90 md:text-xl">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
