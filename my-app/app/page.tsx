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
      className="bg-accent text-surface px-6 py-2.5 rounded-md font-medium hover:bg-accent/90 transition-colors"
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
    "border-2 border-accent text-accent px-6 py-2.5 rounded-md font-medium hover:bg-accent-light/15 transition-colors";

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
    <main>
        {/* Hero Section */}
        <section className="bg-accent text-surface h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Hello, World!</h1>
            <p className="text-lg">I'm Olivia Bisset, a Software Engineer and digital creator</p>
        </section>
        {/* <section className="bg-accent text-surface h-screen">
            <h1>Hello, World!</h1>
        </section>
        <section className="bg-accent text-surface h-screen">
            <h1>Hello, World!</h1>
        </section>
        <section className="bg-accent text-surface h-screen">
            <h1>Hello, World!</h1>
        </section> */}
    </main>
  );
}
