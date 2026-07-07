import Link from "next/link";
import type { Metadata } from "next";

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

function SectionHeading({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <h2
      id={id}
      className="text-2xl font-bold text-accent border-b-2 border-accent-light/50 pb-2 mb-6"
    >
      {children}
    </h2>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-accent-light/25 text-accent px-3 py-1 rounded-full text-sm border border-accent-muted/40">
      {children}
    </span>
  );
}

export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 space-y-16">
      {/* Hero Section */}
      <section aria-labelledby="about-hero" className="space-y-8">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="shrink-0">
            <div
              className="w-40 h-40 rounded-full bg-accent-light/20 border-4 border-accent-muted/40 flex items-center justify-center"
              aria-label="Profile photo placeholder"
            >
              <span className="text-4xl font-bold text-accent-muted">OB</span>
            </div>
            <p className="text-sm text-accent-muted mt-2 text-center">
              Professional headshot
            </p>
          </div>

          <div className="flex-1 space-y-4">
            <p className="text-sm uppercase tracking-widest text-accent-muted font-medium">
              Software Engineer & Web Developer
            </p>
            <h1
              id="about-hero"
              className="text-3xl md:text-4xl font-bold text-accent leading-tight"
            >
              Turning your ideas into reliable reality
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Building thoughtful digital experiences through code and design.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              I&apos;m a software engineer and web developer who enjoys building
              digital experiences that are both technically sound and easy to
              use. With a background in full-stack software development, UI/UX
              design, and over seven years of WordPress development, I enjoy
              bringing ideas from concept to completion while keeping the user
              at the center of every decision.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {specialties.map((topic) => (
                <Tag key={topic}>{topic}</Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section aria-labelledby="my-story">
        <SectionHeading id="my-story">My Story</SectionHeading>
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
      </section>

      {/* What I Do */}
      <section aria-labelledby="what-i-do">
        <SectionHeading id="what-i-do">What I Do</SectionHeading>
        <div className="grid md:grid-cols-3 gap-6">
          {whatIDo.map((category) => (
            <div
              key={category.title}
              className="card p-5"
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
      </section>

      {/* My Approach */}
      <section aria-labelledby="my-approach">
        <SectionHeading id="my-approach">My Approach</SectionHeading>
        <div className="space-y-4 text-foreground/90 leading-relaxed card p-6 border-l-4 border-l-accent">
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
      </section>

      {/* Skills Snapshot */}
      <section aria-labelledby="skills-snapshot">
        <SectionHeading id="skills-snapshot">Skills Snapshot</SectionHeading>
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
      </section>

      {/* Experience Highlights */}
      <section aria-labelledby="experience-highlights">
        <SectionHeading id="experience-highlights">
          Experience Highlights
        </SectionHeading>
        <p className="text-foreground/90 leading-relaxed mb-6">
          My experience spans software engineering internships, freelance web
          development, UI/UX projects, WordPress consulting, and product
          development — each contributing to a well-rounded perspective on
          building software that works for real people.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {experienceHighlights.map((stat) => (
            <div
              key={stat.label}
              className="text-center card p-4"
            >
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm font-medium text-foreground/80 mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-accent-muted mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Community */}
      <section aria-labelledby="leadership-community">
        <SectionHeading id="leadership-community">
          Leadership & Community
        </SectionHeading>
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
      </section>

      {/* Beyond the Code */}
      <section aria-labelledby="beyond-the-code">
        <SectionHeading id="beyond-the-code">Beyond the Code</SectionHeading>
        <p className="text-foreground/90 leading-relaxed mb-4">
          When I&apos;m not writing code, you&apos;ll find me exploring creative
          outlets and staying curious about the world around me.
        </p>
        <div className="flex flex-wrap gap-2">
          {beyondTheCode.map((item) => (
            <Tag key={item}>{item}</Tag>
          ))}
        </div>
      </section>

      {/* Current Focus */}
      <section aria-labelledby="current-focus">
        <SectionHeading id="current-focus">Current Focus</SectionHeading>
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
      </section>

      {/* Call To Action */}
      <section
        aria-labelledby="cta"
        className="bg-accent rounded-xl p-8 text-surface text-center space-y-6"
      >
        <h2 id="cta" className="text-2xl font-bold">
          Let&apos;s Connect
        </h2>
        <p className="max-w-lg mx-auto opacity-90">
          Interested in working together or just want to say hello? I&apos;d
          love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/projects"
            className="bg-accent-pale text-foreground px-5 py-2 rounded-md font-medium hover:bg-accent-pale/90 transition-colors"
          >
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            className="bg-accent-pale text-foreground px-5 py-2 rounded-md font-medium hover:bg-accent-pale/90 transition-colors"
          >
            Download Resume
          </a>
          <a
            href="mailto:hello@oliviabisset.com"
            className="bg-accent-pale text-foreground px-5 py-2 rounded-md font-medium hover:bg-accent-pale/90 transition-colors"
          >
            Contact Me
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-surface text-surface px-5 py-2 rounded-md font-medium hover:bg-surface/10 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-surface text-surface px-5 py-2 rounded-md font-medium hover:bg-surface/10 transition-colors"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
