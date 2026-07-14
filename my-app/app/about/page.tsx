import type { Metadata } from "next";
import PageHero from "../../components/page-hero";
import SectionHeader from "../../components/section-header";
import CtaBand from "../../components/cta-band";
import { cardTint } from "../../components/card-tints";

export const metadata: Metadata = {
  title: "About | Olivia Bisset",
  description:
    "Software engineer and web developer building thoughtful digital experiences through code and design.",
};

const skillCategories = [
  {
    title: "Languages",
    items: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "PHP",
      "C++",
      "SQL",
      "HTML/CSS",
    ],
  },
  {
    title: "Frameworks",
    items: ["React", "Angular", "Laravel", "Flask", "FastAPI", "Express"],
  },
  {
    title: "CMS",
    items: ["WordPress", "Gutenberg", "ACF", "Stackable"],
  },
  {
    title: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Supabase"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "VS Code", "Figma", "Adobe Creative Suite"],
  },
];

const whatIDo = [
  {
    title: "Software Engineering",
    items: [
      "Full-stack development",
      "API development",
      "Backend systems",
      "Database design",
      "Problem solving",
    ],
  },
  {
    title: "Web Development",
    items: [
      "WordPress development",
      "Custom websites",
      "Responsive development",
      "Performance optimization",
      "Accessibility",
    ],
  },
  {
    title: "UI/UX Design",
    items: [
      "User research",
      "Wireframing",
      "Prototyping",
      "Design systems",
      "User-centered design",
    ],
  },
];

const experienceHighlights = [
  {
    label: "Years of experience",
    value: "7+",
    detail: "WordPress & web development",
  },
  {
    label: "Focus areas",
    value: "Full-stack",
    detail: "Engineering, design & consulting",
  },
  {
    label: "Project types",
    value: "End-to-end",
    detail: "Internships, freelance & personal apps",
  },
  {
    label: "Clients served",
    value: "Many",
    detail: "Websites, products & consulting",
  },
];

const communityRoles = [
  "WordCamp Organizer",
  "WordCamp Speaker",
  "Hackathon Organizer",
  "Student Mentor",
  "Volunteer Experience",
];

const beyondTheCode = [
  "Crafting",
  "Notion power user",
  "Conferences",
  "Photography",
  "Architecture & design inspiration",
  "Favorite productivity tools",
];

const currentFocus = [
  "Learning new technologies",
  "Building personal projects",
  "Improving backend development",
  "Exploring AI applications",
  "Growing as a software engineer",
];

const specialties = [
  "Software Engineering",
  "Full-Stack Development",
  "WordPress Development",
  "UI/UX Design",
  "Community Leadership",
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-accent-muted/40 bg-accent-pale/60 px-3 py-1 text-sm font-medium text-accent">
      {children}
    </span>
  );
}

export default function About() {
  return (
    <main>
      <PageHero
        id="about-hero"
        eyebrow="About Me"
        title={
          <>
            Turning ideas into{" "}
            <span className="text-accent-muted">reliable reality</span>
          </>
        }
        description="Building thoughtful digital experiences through code and design."
      />

      <section
        aria-labelledby="about-intro"
        className="section-band px-6 py-16 md:py-20"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-10 md:flex-row">
          <div className="shrink-0">
            <div
              className="flex h-40 w-40 items-center justify-center rounded-2xl border-2 border-accent-muted/40 bg-accent-pale/40 shadow-lg"
              aria-label="Profile photo placeholder"
            >
              <span className="text-4xl font-bold text-accent-muted">OB</span>
            </div>
          </div>

          <div className="flex-1 space-y-5">
            <p className="text-lg leading-relaxed text-foreground/85">
              I&apos;m a software engineer and web developer who enjoys building
              digital experiences that are both technically sound and easy to
              use. With a background in full-stack software development, UI/UX
              design, and over seven years of WordPress development, I enjoy
              bringing ideas from concept to completion while keeping the user
              at the center of every decision.
            </p>
            <div className="flex flex-wrap gap-2">
              {specialties.map((topic) => (
                <Tag key={topic}>{topic}</Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="my-story"
        className="section-plain px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <SectionHeader id="my-story" title="My Story" />
        <div className="space-y-4 text-foreground/90 leading-relaxed">
          <p>
            My journey into technology started with web development, where I
            discovered the satisfaction of turning ideas into something people
            could interact with. What began as designing and building websites
            gradually expanded into a passion for software engineering, where I
            found the challenge of solving complex problems just as rewarding
            as creating polished user experiences.
          </p>
          <p>
            As I continued learning, I explored everything from backend
            development and databases to mobile applications and artificial
            intelligence. Along the way, I gained experience through software
            engineering internships, freelance projects, hackathons, and
            personal applications, each one teaching me a new way to approach
            problems and collaborate with others.
          </p>
          <p>
            Outside of development, I&apos;ve always believed that technology is
            strongest when it&apos;s shared. I&apos;ve had the opportunity to
            organize WordCamp events, speak at conferences, mentor students,
            and introduce young learners to programming. Those experiences have
            reinforced the importance of building not just great software, but
            also stronger communities.
          </p>
          <p>
            Today, I&apos;m focused on continuing to grow as a software engineer
            while creating products that combine thoughtful design, reliable
            engineering, and meaningful user experiences. Whether I&apos;m
            developing a full-stack application, designing a website, or
            contributing to a community initiative, I enjoy building solutions
            that make technology feel approachable and useful.
          </p>
        </div>
        </div>
      </section>

      <section
        aria-labelledby="what-i-do"
        className="section-band px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <SectionHeader id="what-i-do" title="What I Do" />
          <div className="grid gap-6 md:grid-cols-3">
            {whatIDo.map((category, index) => (
              <div
                key={category.title}
                className={`card card-interactive ${cardTint(index)} rounded-2xl p-6`}
              >
              <h3 className="font-bold text-foreground mb-3">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground/80 flex items-start gap-2"
                  >
                    <span className="text-accent-muted mt-0.5">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="my-approach"
        className="section-plain px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <SectionHeader id="my-approach" title="My Approach" />
          <div className="card card-tint-accent space-y-4 rounded-2xl border-l-4 border-l-accent p-6 leading-relaxed text-foreground/90">
          <p>
            Every project starts with understanding the problem before writing a
            single line of code. I believe the best solutions come from asking
            thoughtful questions, identifying the needs of the people using the
            product, and building with a clear purpose.
          </p>
          <p>
            I enjoy working across the entire development process, from planning
            and user experience to implementation and refinement. My background in
            both engineering and design helps me balance technical decisions with
            usability, creating applications that are maintainable, responsive,
            and intuitive.
          </p>
          <p>
            I&apos;m also a strong believer in continuous learning. Technology
            evolves quickly, and I enjoy exploring new frameworks, tools, and
            ideas that challenge me to grow. Whether I&apos;m contributing to a
            professional project, experimenting with a new technology, or
            collaborating with others, my goal is always the same: build
            something reliable, thoughtful, and worth using.
          </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="skills-snapshot"
        className="section-band px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <SectionHeader id="skills-snapshot" title="Skills Snapshot" />
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold text-foreground mb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section
        aria-labelledby="experience-highlights"
        className="section-plain px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            id="experience-highlights"
            title={
              <>
                Experience{" "}
                <span className="text-accent">Highlights</span>
              </>
            }
            description="My experience spans software engineering internships, freelance web development, UI/UX projects, WordPress consulting, and product development — each contributing to a well-rounded perspective on building software that works for real people."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {experienceHighlights.map((stat, index) => (
              <div
                key={stat.label}
                className={`card ${cardTint(index + 1)} rounded-2xl p-5 text-center`}
              >
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-foreground/80">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-accent-muted">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="leadership-community"
        className="section-band px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <SectionHeader id="leadership-community" title="Leadership & Community" />
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {communityRoles.map((role) => (
              <Tag key={role}>{role}</Tag>
            ))}
          </div>
          <p className="text-foreground/90 leading-relaxed">
            Community involvement has been one of the most rewarding parts of my
            journey. Organizing WordCamp events, speaking at conferences,
            mentoring students, and volunteering my time have all reinforced a
            belief I hold deeply: technology is at its best when knowledge is
            shared openly. These experiences keep me grounded, connected, and
            constantly learning from the people around me.
          </p>
        </div>
        </div>
      </section>

      <section
        aria-labelledby="beyond-the-code"
        className="section-plain px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <SectionHeader id="beyond-the-code" title="Beyond the Code" />
        <p className="text-foreground/90 leading-relaxed mb-4">
          When I&apos;m not writing code, you&apos;ll find me exploring creative
          outlets and staying curious about the world around me.
        </p>
        <div className="flex flex-wrap gap-2">
          {beyondTheCode.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
        </div>
      </section>

      <section
        aria-labelledby="current-focus"
        className="section-band px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl">
          <SectionHeader id="current-focus" title="Current Focus" />
        <ul className="space-y-2">
          {currentFocus.map((item) => (
            <li
              key={item}
              className="text-foreground/90 flex items-start gap-2"
            >
              <span className="text-accent-muted">→</span>
              {item}
            </li>
          ))}
        </ul>
        </div>
      </section>

      <CtaBand
        id="cta"
        title="Let's Connect"
        description="Interested in working together or just want to say hello? I'd love to hear from you."
        links={[
          { href: "/projects", label: "View Projects" },
          { href: "/connect", label: "Contact Me" },
          {
            href: "https://linkedin.com",
            label: "LinkedIn",
            external: true,
            variant: "secondary",
          },
        ]}
      />
    </main>
  );
}
