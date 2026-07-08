type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  centered?: boolean;
  id?: string;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  id,
}: SectionHeaderProps) {
  return (
    <header
      className={
        centered
          ? "mx-auto mb-12 max-w-3xl text-center"
          : "mb-12 max-w-3xl"
      }
    >
      {eyebrow && (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground md:text-4xl"
      >
        {title}
      </h2>
      {description && (
        <div
          className={`mt-4 text-lg leading-relaxed text-foreground/80${centered ? " mx-auto" : ""}`}
        >
          {description}
        </div>
      )}
    </header>
  );
}
