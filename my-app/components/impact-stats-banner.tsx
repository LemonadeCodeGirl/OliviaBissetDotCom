import { cardTint } from "./card-tints";

export type ImpactStat =
  | { value: string; label: string }
  | { text: string };

function StatCard({
  stat,
  index,
  duplicate,
}: {
  stat: ImpactStat;
  index: number;
  duplicate?: boolean;
}) {
  return (
    <div
      className={`card card-interactive ${cardTint(index)} flex h-36 w-56 shrink-0 flex-col items-center justify-center rounded-2xl p-5 text-center${duplicate ? " stats-banner-duplicate" : ""}`}
    >
      {"value" in stat ? (
        <>
          <span className="text-3xl font-bold tracking-tight text-accent">
            {stat.value}
          </span>
          <p className="mt-2 text-sm font-medium leading-snug text-foreground/85">
            {stat.label}
          </p>
        </>
      ) : (
        <p className="text-sm font-semibold leading-snug text-foreground/85">
          {stat.text}
        </p>
      )}
    </div>
  );
}

export default function ImpactStatsBanner({ stats }: { stats: ImpactStat[] }) {
  return (
    <section
      aria-label="Impact at a glance"
      className="section-band py-12 md:py-16"
    >
      <div className="stats-banner relative overflow-hidden">
        <div className="stats-banner-track flex w-max gap-4 px-4">
          {stats.map((stat, index) => (
            <StatCard
              key={"label" in stat ? stat.label : stat.text}
              stat={stat}
              index={index}
            />
          ))}
          {stats.map((stat, index) => (
            <StatCard
              key={`dup-${"label" in stat ? stat.label : stat.text}-${index}`}
              stat={stat}
              index={index}
              duplicate
            />
          ))}
        </div>
      </div>
    </section>
  );
}
