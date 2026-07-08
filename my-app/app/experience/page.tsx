import type { Metadata } from "next";
import PageHero from "../../components/page-hero";
import CtaBand from "../../components/cta-band";
import { cardTint } from "../../components/card-tints";

export const metadata: Metadata = {
  title: "Experience | Olivia Bisset",
  description:
    "Professional experience in enterprise software, SaaS, full-stack development, digital media, and WordPress community leadership.",
};

type Experience = {
  name: string;
  category: string[];
  summary: string;
  impact: string;
  timeframe: string | undefined;
};

const experiences: Experience[] = [
  {
    name: "UKG Internal Web Application Redesign",
    category: ["Enterprise Software", "UI/UX", "Frontend Engineering"],
    summary:
      "Redesigned an internal application used by 12+ teams, improving usability and adoption.",
    impact:
      "Built production features using JavaScript, TypeScript, Angular, and Stencil.",
    timeframe: "2020 - 2021",
  },
  {
    name: "Vice Versa Cybersecurity Platform",
    category: ["SaaS", "UX Design", "Software Engineering"],
    summary:
      "Improved homepage experience and provided usability/design feedback for cybersecurity auditing software.",
    impact:
      "Enhanced user experience through collaborative product design.",
    timeframe: "2021 - 2022",
  },
  {
    name: "Accelerate EDU Development Projects",
    category: ["Consulting", "Full-Stack Development"],
    summary:
      "Built and maintained websites and applications while collaborating with stakeholders.",
    impact:
      "Created systems connecting frontend, backend, and database layers.",
    timeframe: "2022 - 2023",
  },
  {
    name: "Post Status Media Production",
    category: ["Digital Media", "Content Production"],
    summary:
      "Produced graphics and edited weekly podcasts distributed across multiple platforms.",
    impact:
      "10+ graphics/month, recurring video/audio production workflow.",
    timeframe: "2023 - 2024",
  },
  {
    name: "WordPress Community Leadership",
    category: ["Open Source", "Community", "Education"],
    summary:
      "Speaker and organizer for WordCamp events supporting WordPress education and community growth.",
    impact: "WordCamp US Speaker, WordCamp Miami/Orlando Organizer.",
    timeframe: "2024 - 2025",
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-accent-muted/40 bg-accent-pale/60 px-3 py-1 text-sm font-medium text-accent">
      {children}
    </span>
  );
}

function ExperienceCard({
  experience,
  tintIndex,
}: {
  experience: Experience;
  tintIndex: number;
}) {
  return (
    <article
      className={`card card-interactive ${cardTint(tintIndex)} overflow-hidden rounded-2xl`}
    >
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-accent">{experience.name}</h2>
          <div className="flex flex-wrap gap-2">
            {experience.category.map((cat) => (
              <Tag key={cat}>{cat}</Tag>
            ))}
          </div>
        </div>

        <p className="text-foreground/90 leading-relaxed">{experience.summary}</p>

        <div className="card card-tint-blue rounded-xl border-l-4 border-l-accent p-4">
          <h3 className="text-sm font-semibold text-foreground mb-1">Impact</h3>
          <p className="text-sm text-foreground/85 leading-relaxed">
            {experience.impact}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <main>
      <PageHero
        id="experience-hero"
        eyebrow="Career"
        title={
          <>
            Professional{" "}
            <span className="text-accent-muted">Experience</span>
          </>
        }
        description="Professional roles and engagements across enterprise software, SaaS product design, full-stack consulting, digital media production, and open-source community leadership."
      />

      <section
        aria-label="Experience list"
        className="section-band px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.name}
              experience={experience}
              tintIndex={index}
            />
          ))}
        </div>
      </section>

      <CtaBand
        id="experience-cta"
        title="See the work behind the experience"
        description="Explore projects, skills, and more about my background."
        links={[
          { href: "/projects", label: "View Projects" },
          { href: "/about", label: "About Me", variant: "secondary" },
        ]}
      />
    </main>
  );
}
