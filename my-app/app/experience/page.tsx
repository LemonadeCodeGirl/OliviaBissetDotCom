import Link from "next/link";
import type { Metadata } from "next";

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
    <span className="inline-block bg-[#F4F1DE] text-[#333D29] px-3 py-1 rounded-full text-sm">
      {children}
    </span>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="bg-white rounded-xl border border-[#919588]/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-[#333D29]">{experience.name}</h2>
          <div className="flex flex-wrap gap-2">
            {experience.category.map((cat) => (
              <Tag key={cat}>{cat}</Tag>
            ))}
          </div>
        </div>

        <p className="text-[#333D29]/90 leading-relaxed">{experience.summary}</p>

        <div className="bg-[#F4F1DE]/30 rounded-lg p-4 border-l-4 border-[#919588]">
          <h3 className="text-sm font-semibold text-[#333D29] mb-1">Impact</h3>
          <p className="text-sm text-[#333D29]/85 leading-relaxed">
            {experience.impact}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 space-y-12">
      <section aria-labelledby="experience-hero" className="space-y-4">
        <h1
          id="experience-hero"
          className="text-3xl md:text-4xl font-bold text-[#333D29]"
        >
          Experience
        </h1>
        <p className="text-lg text-[#333D29]/80 leading-relaxed max-w-2xl">
          Professional roles and engagements across enterprise software, SaaS
          product design, full-stack consulting, digital media production, and
          open-source community leadership.
        </p>
      </section>

      <section aria-label="Experience list" className="space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.name} experience={experience} />
        ))}
      </section>

      <section
        aria-labelledby="experience-cta"
        className="bg-[#919588] rounded-xl p-8 text-[#EFECE7] text-center space-y-4"
      >
        <h2 id="experience-cta" className="text-xl font-bold">
          See the work behind the experience
        </h2>
        <p className="opacity-90 max-w-md mx-auto">
          Explore projects, skills, and more about my background.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/projects"
            className="bg-[#F4F1DE] text-[#333D29] px-5 py-2 rounded-md font-medium hover:bg-[#F4F1DE]/90 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="border border-[#EFECE7] text-[#EFECE7] px-5 py-2 rounded-md font-medium hover:bg-[#EFECE7]/10 transition-colors"
          >
            About Me
          </Link>
        </div>
      </section>
    </main>
  );
}
