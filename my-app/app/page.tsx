import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Olivia Bisset | Software Engineer & Digital Systems Builder",
  description:
    "Software engineer and digital creator specializing in full-stack development, modern websites, AI-powered applications, and user-centered solutions.",
};

const stats = [
  {
    icon: "🎓",
    text: "Computer Science graduate from the University of Florida",
  },
  {
    icon: "💻",
    text: "Full-stack developer experienced in Java, Python, C++, JavaScript, TypeScript, and modern frameworks",
  },
  {
    icon: "🚀",
    text: "Software Engineering Intern at UKG and Vice Versa",
  },
  {
    icon: "🏆",
    text: "3rd Place Google AI for Social Good Hackathon Winner",
  },
  {
    icon: "🌎",
    text: "WordCamp Speaker & Organizer advocating for youth in technology",
  },
];

const featuredProjects = [
  {
    icon: "🍋",
    name: "LemonadeCode",
    subtitle: "Personal Brand + Digital Systems Studio",
    description:
      "A portfolio and client-focused platform showcasing custom websites, digital systems, automation, and technology solutions for organizations.",
    meta: "Built With: WordPress, Web Development, Client Systems",
  },
  {
    icon: "📚",
    name: "Calculus Without Panic",
    subtitle: "Educational Platform & Online Learning Ecosystem",
    description:
      "A complete learning platform designed for AP Calculus students, combining website development, course organization, YouTube integration, community tools, and student onboarding systems.",
    meta: "Focus: Education Technology, UX Design, Lead Generation",
  },
  {
    icon: "🤖",
    name: "Tyodor AI",
    subtitle: "AI Educational Assistant",
    description:
      "Award-winning AI learning assistant created during ShellHacks 2025. Students teach an AI companion to reinforce concepts and improve learning outcomes.",
    meta: "3rd Place, Google AI for Social Good · Flask, SQLite, HTML/CSS/JavaScript, Gemini APIs",
    award: true,
  },
  {
    icon: "📊",
    name: "Attendance Genius",
    subtitle: "Educational Management Platform",
    description:
      "A school attendance and administrative platform designed to simplify tracking, reporting, and classroom workflows.",
    meta: "Focus: SaaS Development, Education Technology, Workflow Automation",
  },
  {
    icon: "🔍",
    name: "Bonofide",
    subtitle: "Marketplace Verification Platform",
    description:
      "A platform concept designed around safer transactions through inspection records, vendor workflows, and verification systems.",
    meta: "Focus: Product Development, Backend Architecture",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items:
      "C++, Java, Python, JavaScript, TypeScript, SQL, HTML/CSS, C#",
  },
  {
    title: "Development",
    items:
      "React · Angular · Flask · Spring Boot · Expo · Tailwind CSS · REST APIs",
  },
  {
    title: "Platforms",
    items: "WordPress · Docker · Git/GitHub · AWS · PostgreSQL · MySQL · MongoDB",
  },
  {
    title: "Design & Creative",
    items:
      "Figma · Adobe Creative Suite · UI/UX Design · Digital Media Production",
  },
];

const experiences = [
  {
    company: "UKG",
    role: "Software Engineering Intern",
    description:
      "Redesigned an internal web application used by 12+ teams, delivering new features and improving usability through Angular, TypeScript, JavaScript, and Stencil.",
  },
  {
    company: "Vice Versa",
    role: "Software Engineering Intern",
    description:
      "Designed and improved the user experience of cybersecurity auditing software, focusing on interface design and usability improvements.",
  },
  {
    company: "Accelerate EDU",
    role: "Consulting Software Development",
    description:
      "Developed websites, applications, architectures, and technical solutions while collaborating with stakeholders.",
  },
];

const communityHighlights = [
  "Organizer of MustHacks Jr",
  "Taught 100+ middle school students Scratch programming",
  "WordCamp US Speaker",
  "WordCamp Miami & Orlando Organizer",
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
      className="text-2xl font-bold text-[#333D29] border-b-2 border-[#919588]/30 pb-2 mb-6"
    >
      {children}
    </h2>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="bg-[#333D29] text-[#F4F1DE] px-6 py-2.5 rounded-md font-medium hover:bg-[#333D29]/90 transition-colors"
    >
      {children}
    </Link>
  );
}

function SecondaryButton({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className =
    "border-2 border-[#333D29] text-[#333D29] px-6 py-2.5 rounded-md font-medium hover:bg-[#F4F1DE] transition-colors";

  if (external) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Home() {
  return (
    <main className="space-y-20 pb-16">
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="bg-[#F4F1DE]/40 border-b border-[#919588]/20"
      >
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 space-y-6 text-center">
          <p className="text-sm uppercase tracking-widest text-[#919588] font-medium">
            Software Engineer · Digital Systems Builder · Creative Technologist
          </p>
          <h1
            id="hero-heading"
            className="text-3xl md:text-5xl font-bold text-[#333D29] leading-tight max-w-3xl mx-auto"
          >
            Building digital experiences that combine technology, design, and
            purpose.
          </h1>
          <div className="max-w-2xl mx-auto space-y-4 text-[#333D29]/85 leading-relaxed">
            <p>
              I&apos;m Olivia Bisset, a Software Engineer and digital creator
              specializing in full-stack development, modern websites,
              AI-powered applications, and user-centered solutions.
            </p>
            <p>
              From production software used by teams at companies like UKG to
              custom websites and platforms for growing organizations, I build
              technology that helps people work smarter and connect better.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <PrimaryButton href="/projects">View My Work</PrimaryButton>
            <SecondaryButton href="mailto:hello@oliviabisset.com" external>
              Let&apos;s Build Something
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section aria-labelledby="stats-heading" className="max-w-4xl mx-auto px-6">
        <SectionHeading id="stats-heading">
          Engineering + Creativity, Combined
        </SectionHeading>
        <ul className="grid sm:grid-cols-2 gap-4">
          {stats.map((stat) => (
            <li
              key={stat.text}
              className="flex items-start gap-3 bg-white rounded-lg p-4 border border-[#919588]/20"
            >
              <span className="text-xl shrink-0" aria-hidden="true">
                {stat.icon}
              </span>
              <span className="text-[#333D29]/90 text-sm leading-relaxed">
                {stat.text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* About Preview */}
      <section
        aria-labelledby="about-preview-heading"
        className="max-w-4xl mx-auto px-6"
      >
        <SectionHeading id="about-preview-heading">
          A developer who bridges technology and creativity
        </SectionHeading>
        <div className="space-y-4 text-[#333D29]/90 leading-relaxed">
          <p>
            I&apos;ve always been interested in the space where technology meets
            people.
          </p>
          <p>
            My background combines software engineering, web development, design,
            education, and community building. I&apos;ve worked on enterprise
            applications, educational platforms, AI assistants, mobile
            applications, and websites for organizations and businesses.
          </p>
          <p>
            Beyond writing code, I focus on understanding the problem behind the
            technology. Great software is not just about functionality; it is
            about creating experiences that make someone&apos;s life easier.
          </p>
        </div>
        <div className="mt-6">
          <SecondaryButton href="/about">Learn More About Me</SecondaryButton>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        aria-labelledby="featured-projects-heading"
        className="max-w-4xl mx-auto px-6"
      >
        <SectionHeading id="featured-projects-heading">
          Featured Work
        </SectionHeading>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className={`rounded-xl p-5 border space-y-3 ${
                project.award
                  ? "bg-amber-50/50 border-amber-200/60"
                  : "bg-white border-[#919588]/20"
              }`}
            >
              <div className="flex items-start gap-2">
                <span className="text-2xl" aria-hidden="true">
                  {project.icon}
                </span>
                <div>
                  <h3 className="font-bold text-[#333D29]">{project.name}</h3>
                  <p className="text-sm text-[#919588] font-medium">
                    {project.subtitle}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#333D29]/85 leading-relaxed">
                {project.description}
              </p>
              <p className="text-xs text-[#919588]">{project.meta}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <PrimaryButton href="/projects">View All Projects</PrimaryButton>
        </div>
      </section>

      {/* Skills */}
      <section
        aria-labelledby="skills-heading"
        className="max-w-4xl mx-auto px-6"
      >
        <SectionHeading id="skills-heading">
          Technologies I Work With
        </SectionHeading>
        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-[#F4F1DE]/30 rounded-lg p-5 border border-[#919588]/15"
            >
              <h3 className="font-semibold text-[#333D29] mb-2">
                {group.title}
              </h3>
              <p className="text-sm text-[#333D29]/85 leading-relaxed">
                {group.items}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section
        aria-labelledby="experience-heading"
        className="max-w-4xl mx-auto px-6"
      >
        <SectionHeading id="experience-heading">
          Experience Building Real-World Software
        </SectionHeading>
        <div className="space-y-6">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className="border-l-4 border-[#919588] pl-5 space-y-1"
            >
              <h3 className="font-bold text-[#333D29]">
                {exp.company}{" "}
                <span className="font-normal text-[#919588]">— {exp.role}</span>
              </h3>
              <p className="text-[#333D29]/85 leading-relaxed text-sm">
                {exp.description}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-6">
          <SecondaryButton href="/experience">View Full Experience</SecondaryButton>
        </div>
      </section>

      {/* Community */}
      <section
        aria-labelledby="community-heading"
        className="max-w-4xl mx-auto px-6"
      >
        <SectionHeading id="community-heading">
          Building Technology Beyond Code
        </SectionHeading>
        <p className="text-[#333D29]/90 leading-relaxed mb-6">
          I believe technology grows stronger when more people have the
          opportunity to participate.
        </p>
        <p className="text-[#333D29]/90 leading-relaxed mb-6">
          I have organized hackathons, taught programming to middle school
          students, spoken at WordCamp events, and supported open-source quality
          initiatives.
        </p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {communityHighlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-[#333D29]/85 bg-white rounded-lg p-3 border border-[#919588]/20"
            >
              <span className="text-[#919588]">→</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section
        aria-labelledby="final-cta-heading"
        className="max-w-4xl mx-auto px-6"
      >
        <div className="bg-[#919588] rounded-xl p-10 md:p-12 text-[#EFECE7] text-center space-y-6">
          <h2 id="final-cta-heading" className="text-2xl md:text-3xl font-bold">
            Have an idea? Let&apos;s turn it into something real.
          </h2>
          <p className="max-w-lg mx-auto opacity-90 leading-relaxed">
            Whether you need a website, application, digital system, or technical
            partner, I help bring ideas from concept to completion.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="mailto:hello@oliviabisset.com"
              className="bg-[#F4F1DE] text-[#333D29] px-6 py-2.5 rounded-md font-medium hover:bg-[#F4F1DE]/90 transition-colors"
            >
              Start a Project
            </Link>
            <a
              href="mailto:hello@oliviabisset.com"
              className="border border-[#EFECE7] text-[#EFECE7] px-6 py-2.5 rounded-md font-medium hover:bg-[#EFECE7]/10 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
