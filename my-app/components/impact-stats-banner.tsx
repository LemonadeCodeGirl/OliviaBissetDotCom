export type ImpactStat =
  | { value: string; label: string }
  | { text: string };

function StatCard({
  stat,
  duplicate,
}: {
  stat: ImpactStat;
  duplicate?: boolean;
}) {
  return (
    <div
      className={`card flex h-36 w-56 shrink-0 flex-col items-center justify-center p-4 text-center${duplicate ? " stats-banner-duplicate" : ""}`}
    >
      {"value" in stat ? (
        <>
          <span className="text-3xl font-bold text-accent">{stat.value}</span>
          <p className="mt-2 text-sm font-medium leading-snug text-foreground">
            {stat.label}
          </p>
        </>
      ) : (
        <p className="text-sm font-semibold leading-snug text-foreground">
          {stat.text}
        </p>
      )}
    </div>
  );
}

export default function ImpactStatsBanner({ stats }: { stats: ImpactStat[] }) {
  return (
    <section aria-label="Impact at a glance" className="pb-5 md:pb-28">
      <div className="stats-banner relative overflow-hidden">
        <div className="stats-banner-track flex w-max gap-4 px-4">
          {stats.map((stat) => (
            <StatCard
              key={"label" in stat ? stat.label : stat.text}
              stat={stat}
            />
          ))}
          {stats.map((stat, index) => (
            <StatCard
              key={`dup-${"label" in stat ? stat.label : stat.text}-${index}`}
              stat={stat}
              duplicate
            />
          ))}
        </div>
      </div>
    </section>
  );
}
