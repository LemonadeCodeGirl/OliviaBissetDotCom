import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ImpactStatsBanner from "../components/impact-stats-banner";
import ContactForm from "../components/contact-form";
import SectionHeader from "../components/section-header";
import { cardTint } from "../components/card-tints";

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

const aboutParagraphs = [
  "Hi, I'm Olivia, a software engineer with a passion for creating digital experiences that solve real problems.",
  "My journey into technology began with a curiosity for how things work and has grown into a career centered around building websites, applications, and digital systems that help people and organizations succeed. From enterprise software used by internal teams to custom websites for growing businesses and award-winning AI projects, I enjoy turning complex ideas into intuitive, user-friendly solutions.",
  "I believe great software is about more than writing code. It's about understanding the people who will use it, identifying the challenges they're facing, and creating technology that feels natural, reliable, and built with purpose.",
  "Throughout my career, I've worked across a wide range of projects, including business websites, educational platforms, AI applications, administrative systems, and digital infrastructure. Each project has strengthened my belief that the best solutions come from combining thoughtful design with solid engineering.",
  "When I'm not building software, I'm passionate about giving back to the technology community. I've organized hackathons, spoken at WordCamp events, mentored students, and advocated for creating more opportunities for the next generation of developers.",
  "Whether you're looking for a modern website, a custom application, or a digital system tailored to your business, my goal is the same: to build something that not only looks great today but continues to create value for years to come.",
];

const experienceHighlights = [
  {
    title: "Enterprise Software Engineering",
    detail: "UKG",
  },
  {
    title: "Product Design & User Experience",
    detail: "Vice Versa",
  },
  {
    title: "Full-Stack Development",
    detail: "Accelerate EDU",
  },
  {
    title: "Computer Science Degree",
    detail: "University of Florida",
  },
  {
    title: "Award-Winning Innovation",
    detail: "Google AI Hackathon — Tyodor",
  },
  {
    title: "Community Leadership",
    detail: "WordCamp Speaker & Organizer",
  },
];

const impactStats = [
  { value: "5+", label: "Years Building Digital Solutions" },
  { value: "20+", label: "Websites & Software Projects" },
  { text: "Enterprise Experience at UKG & Vice Versa" },
  { text: "Award-Winning AI Hackathon Project" },
  { value: "100+", label: "Students Taught Through Community Programs" },
  { text: "Full-Stack Web & Software Development" },
];

const services = [
  {
    title: "Custom Website Development",
    description:
      "Modern, responsive websites designed to convert visitors into customers.",
  },
  {
    title: "Custom Software & Web Applications",
    description:
      "Dashboards, internal tools, client portals, educational platforms, and business software built specifically for your workflow.",
  },
  {
    title: "Technical Consulting",
    description:
      "Need help planning a project, improving an existing system, or solving a technical challenge? I can help guide your next steps.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Discover",
    description:
      "We'll discuss your goals, audience, and project requirements.",
  },
  {
    step: "2",
    title: "Plan",
    description:
      "I'll create a roadmap, recommend the right technology, and define milestones.",
  },
  {
    step: "3",
    title: "Build",
    description:
      "Development begins with regular updates and opportunities for feedback.",
  },
  {
    step: "4",
    title: "Launch",
    description:
      "After testing and refinement, we'll launch your project with confidence.",
  },
];

const faqs = [
  {
    question: "What kinds of projects do you work on?",
    answer:
      "I specialize in custom websites, web applications, internal business tools, educational platforms, client portals, and digital systems. Whether you need a polished marketing site or a custom-built solution, I can help.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Absolutely. If your current website feels outdated, isn't converting visitors, or no longer reflects your business, I can redesign it with a modern look and improved functionality.",
  },
  {
    question: "Do you only build websites?",
    answer:
      "No. While websites are a big part of what I do, I also develop custom dashboards, internal tools, client management systems, AI-powered applications, and other software tailored to your workflow.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I work with modern technologies including Next.js, React, TypeScript, WordPress, Laravel, Python, Java, PostgreSQL, MySQL, Supabase, Tailwind CSS, and more. I choose the technology that best fits your project's needs.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply reach out through the contact form below. We'll discuss your project, goals, timeline, and determine the best approach before development begins.",
  },
];

const featuredProjects = [
  {
    name: "Attendance Genius",
    subtitle: "Attendance & Administrative Management Platform",
    description:
      "A comprehensive platform designed to simplify student attendance, reporting, and administrative workflows. Built to help schools improve operational efficiency through intuitive dashboards, streamlined check-ins, and scalable management tools.",
    meta: "Built With: Laravel, PHP, MySQL, JavaScript",
  },
  {
    name: "Distingue Society",
    subtitle: "Luxury Household Staffing Platform",
    description:
      "A premium website crafted for a luxury household staffing agency, featuring elegant branding, conversion-focused service pages, and a refined user experience that connects families with exceptional household professionals.",
    meta: "Built With: WordPress, PHP, UI/UX Design, Content Strategy",
  },
  {
    name: "Bonofide",
    subtitle: "Verified Marketplace & Inspection Platform",
    description:
      "A marketplace platform centered on trust and transparency, allowing buyers and sellers to verify inspection records, manage vendor relationships, and make informed decisions through secure, scalable workflows.",
    meta: "Built With: Python, PostgreSQL, System Architecture, API Design",
  },
  {
    name: "Tyodor AI",
    subtitle: "Award-Winning AI Learning Assistant",
    description:
      "An AI-powered educational platform that encourages students to reinforce their understanding by teaching concepts to an AI companion. Developed during ShellHacks 2025, the project combines conversational AI with lesson management and learning analytics.",
    meta: "Built With: Python, Flask, Gemini AI, SQLite",
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
  // {
  //   company: "Accelerate EDU",
  //   role: "Consulting Software Development",
  //   description:
  //     "Developed websites, applications, architectures, and technical solutions while collaborating with stakeholders.",
  // },
  {
    company: "LemonadeCode",
    role: "Founder & Developer",
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
      className="bg-accent-pale text-foreground px-6 py-2.5 rounded-full font-medium hover:bg-surface transition-colors shadow-sm"
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
    "border-2 border-accent-muted text-accent-pale px-6 py-2.5 rounded-full font-medium hover:bg-accent-muted/20 transition-colors";
  
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

function ProjectCard({
  project,
  tintIndex,
}: {
  project: {
    name: string;
    subtitle: string;
    description: string;
    meta: string;
    award?: boolean;
  };
  tintIndex: number;
}) {
  return (
    <div
      className={`card card-interactive ${cardTint(tintIndex)} flex h-full flex-col rounded-2xl p-6`}
    >
      {project.award && (
        <span className="mb-3 w-fit rounded-full bg-accent-pale px-3 py-1 text-xs font-semibold text-accent">
          Award Winner
        </span>
      )}
      <h3 className="text-lg font-bold tracking-tight text-foreground">
        {project.name}
      </h3>
      <p className="mb-3 text-sm font-semibold text-accent">{project.subtitle}</p>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-foreground/80">
        {project.description}
      </p>
      <p className="text-xs font-medium text-neutral-mid">{project.meta}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>
        {/* Hero Section */}
        <section
          aria-labelledby="hero-heading"
          className="hero-band relative -mt-14 flex min-h-screen flex-col items-center justify-center overflow-hidden pt-14"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent-muted/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 bottom-1/4 h-80 w-80 rounded-full bg-accent-pale/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-surface to-transparent"
          />

          <div className="relative z-10 mx-auto max-w-4xl space-y-6 px-6 py-16 text-center md:py-24">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-muted">
              Software Engineer · Digital Systems Builder · Digital Creator
            </p>
            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-tight text-accent-pale md:text-6xl"
            >
              Hello, I&apos;m{" "}
              <span className="text-accent-muted">Olivia Bisset</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-surface/90 md:text-xl">
              I help small businesses and startups get a presence online —
              building modern websites and digital systems that feel as good as
              they work.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <PrimaryButton href="/projects">View Projects</PrimaryButton>
              <SecondaryButton href="/contact">Contact Me</SecondaryButton>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="mission-heading"
          className="section-band px-6 py-20 md:py-28"
        >
          <div className="mx-auto grid max-w-3xl items-center gap-12 md:grid-cols-2 md:gap-16">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                My Mission
              </p>
              <h2
                id="mission-heading"
                className="text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl"
              >
                Technology that works{" "}
                <span className="text-accent">for you</span>, not against you.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-foreground/80">
                My mission is to create websites, systems, and digital solutions
                that help organizations attract customers and streamline
                operations.
              </p>
              <p className="max-w-xl text-lg font-medium leading-relaxed text-foreground">
                The goal is simple: spend less time managing your business and
                more time growing it.
              </p>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/images/OliviaImage1.png"
                  alt="Olivia Bisset smiling at a conference"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div
                aria-hidden
                className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl border-2 border-accent-muted/40"
              />
            </div>
          </div>
        </section>

        <section
          aria-labelledby="experience-highlights-heading"
          className="section-plain px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              id="experience-highlights-heading"
              eyebrow="Background"
              title={
                <>
                  Experience{" "}
                  <span className="text-accent">Highlights</span>
                </>
              }
              description="Over the past several years, I've had the opportunity to work with established companies, startups, educational organizations, and nonprofits to design, develop, and improve digital experiences."
              centered
            />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {experienceHighlights.map((highlight, index) => (
                <li
                  key={highlight.title}
                  className={`card card-interactive ${cardTint(index)} rounded-2xl p-6`}
                >
                  <h3 className="font-bold tracking-tight text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-accent">
                    {highlight.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ImpactStatsBanner stats={impactStats} />

        <section
          aria-labelledby="services-heading"
          className="section-band px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              id="services-heading"
              eyebrow="Services"
              title={
                <>
                  More than just{" "}
                  <span className="text-accent">code</span>
                </>
              }
              description={
                <>
                  <p>
                    I don&apos;t simply build websites. I work to understand your
                    goals, identify opportunities, and create solutions that are
                    intuitive, scalable, and easy to maintain.
                  </p>
                  <p className="mt-4 font-medium text-foreground">
                    Every project is built with attention to performance,
                    accessibility, and long-term growth.
                  </p>
                </>
              }
              centered
            />
            <ul className="grid gap-6 md:grid-cols-3">
              {services.map((service, index) => (
                <li
                  key={service.title}
                  className={`card card-interactive ${cardTint(index + 1)} rounded-2xl p-6 text-left`}
                >
                  <h3 className="mb-3 text-lg font-bold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-plain px-6 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              eyebrow="Portfolio"
              title={
                <>
                  Featured{" "}
                  <span className="text-accent">Projects</span>
                </>
              }
              description="A selection of websites, platforms, and applications built for clients, organizations, and hackathon teams."
              centered
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.name}
                  project={project}
                  tintIndex={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="process-heading"
          className="section-band px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              id="process-heading"
              eyebrow="Process"
              title={
                <>
                  How we work{" "}
                  <span className="text-accent">together</span>
                </>
              }
              centered
            />
            <ol className="grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((step, index) => (
                <li
                  key={step.title}
                  className={`card card-interactive ${cardTint(index + 2)} rounded-2xl p-6`}
                >
                  <span className="mb-3 block text-3xl font-bold tracking-tight text-accent">
                    {step.step}
                  </span>
                  <h3 className="mb-2 text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/80">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="faq-heading"
          className="section-plain px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              id="faq-heading"
              eyebrow="FAQ"
              title={
                <>
                  Frequently asked{" "}
                  <span className="text-accent">questions</span>
                </>
              }
              centered
            />
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className={`card group ${index % 2 === 0 ? "card-tint-cream" : "card-tint-blue"} rounded-2xl p-6 open:border-accent-muted/60`}
                >
                  <summary className="cursor-pointer list-none text-lg font-bold text-foreground [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {faq.question}
                      <span
                        aria-hidden
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-pale text-accent transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/80">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="about-heading"
          className="section-band px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              id="about-heading"
              eyebrow="About"
              title={
                <>
                  Building with{" "}
                  <span className="text-accent">purpose</span>
                </>
              }
              centered
            />
            <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
              <p className="text-xl font-medium text-foreground">
                {aboutParagraphs[0]}
              </p>
              {aboutParagraphs.slice(1).map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="contact-heading"
          className="section-plain px-6 py-20 md:py-28"
        >
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              id="contact-heading"
              eyebrow="Get in Touch"
              title={
                <>
                  Let&apos;s build something{" "}
                  <span className="text-accent">great</span>
                </>
              }
              description="Have a project in mind? Fill out the form below and I'll get back to you."
              centered
            />
            <ContactForm />
          </div>
        </section>
    </main>
  );
}
