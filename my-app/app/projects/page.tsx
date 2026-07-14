import type { Metadata } from "next";
import PageHero from "../../components/page-hero";
import CtaBand from "../../components/cta-band";
import { cardTint } from "../../components/card-tints";

export const metadata: Metadata = {
  title: "Projects | Olivia Bisset",
  description:
    "Portfolio of web development, software engineering, and product projects — from client websites to award-winning hackathon builds.",
};

type Project = {
  name: string;
  category: string[];
  type: string;
  summary: string;
  contributions: string[];
  technologies: string[];
  status: string;
  award?: boolean;
};

const projects: Project[] = [
  {
    name: "LemonadeCode / Olivia Bisset Portfolio Platform",
    category: ["Web Development", "Personal Brand", "Business Systems"],
    type: "Personal Brand / Client Acquisition Platform",
    summary:
      "A personal portfolio and business ecosystem designed to showcase software engineering, web development, digital systems, and client services. Built as a central hub for portfolio projects, resume, lead generation, and client onboarding.",
    contributions: [
      "Brand strategy",
      "Website architecture",
      "WordPress development",
      "Service positioning",
      "Client intake workflows",
      "Portfolio design",
    ],
    technologies: [
      "WordPress",
      "Gutenberg",
      "Stackable",
      "PHP",
      "HTML/CSS",
      "JavaScript",
      "UX Design",
    ],
    status: "Active",
  },
  {
    name: "Calculus Without Panic",
    category: [
      "Educational Technology",
      "Web Design",
      "Business Website",
    ],
    type: "Client Project",
    summary:
      "Educational platform created for an AP Calculus tutoring business. Designed to support student learning, course enrollment, community engagement, and lead generation.",
    contributions: [
      "Website architecture",
      "Landing pages",
      "Course structure",
      "Student onboarding flow",
      "Integrations",
    ],
    technologies: [
      "WordPress",
      "LMS concepts",
      "YouTube integrations",
      "Community Platforms",
      "UX Design",
    ],
    status: "Active",
  },
  {
    name: "FL Baby Concierge",
    category: ["Luxury Web Design", "Branding", "Client Experience"],
    type: "Client Project",
    summary:
      "Premium household staffing website focused on nanny placement and newborn care services. Developed a luxury brand experience through strategic content architecture and conversion-focused design.",
    contributions: [
      "Brand positioning",
      "Page structure",
      "Service presentation",
      "Luxury copywriting",
      "Conversion layouts",
    ],
    technologies: [
      "WordPress",
      "UX/UI Design",
      "Content Strategy",
      "Branding",
    ],
    status: "Active",
  },
  {
    name: "Attendance Genius Laravel Platform",
    category: [
      "SaaS",
      "Education Technology",
      "Full-Stack Development",
    ],
    type: "Product Development",
    summary:
      "A school attendance and administrative management platform designed to simplify attendance tracking, reporting, and school operations.",
    contributions: [
      "System architecture",
      "Dashboard planning",
      "Workflow design",
      "Reporting systems",
      "Scalable platform development",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "SQL",
      "Database Design",
      "SaaS Architecture",
    ],
    status: "Active",
  },
  {
    name: "AG Mobile App",
    category: ["Mobile Development", "SaaS", "Business Operations"],
    type: "Product Development",
    summary:
      "Mobile-first inspection coordination application designed to connect inspectors, vendors, and customers through streamlined workflows.",
    contributions: [
      "Mobile architecture planning",
      "Database design",
      "Workflow systems",
      "Backend planning",
    ],
    technologies: ["Flutter", "Django", "Supabase", "Mobile Development"],
    status: "Active",
  },
  {
    name: "Bonofide",
    category: [
      "Marketplace",
      "Verification Systems",
      "Startup Development",
    ],
    type: "Product Concept",
    summary:
      "A marketplace platform focused on improving trust and transparency through inspection verification and safer transactions between buyers and sellers.",
    contributions: [
      "Product strategy",
      "Platform architecture",
      "Vendor/customer workflows",
      "Verification systems",
    ],
    technologies: [
      "Backend Architecture",
      "Database Design",
      "Marketplace Systems",
    ],
    status: "Active",
  },
  {
    name: "Tyodor AI Educational Assistant",
    category: ["Artificial Intelligence", "Education", "Hackathon"],
    type: "Award-Winning Hackathon Project",
    summary:
      "An AI-powered learning assistant created during ShellHacks 2025. Students teach an AI companion to reinforce concepts and improve learning outcomes.",
    contributions: [
      "AI interaction design",
      "Analytics dashboard",
      "Chatbot system",
      "Educational workflows",
    ],
    technologies: [
      "Flask",
      "Python",
      "SQLite",
      "HTML/CSS",
      "JavaScript",
      "Gemini API",
    ],
    status: "3rd Place — Google AI for Social Good",
    award: true,
  },
  {
    name: "Easy Find",
    category: ["Full-Stack Development", "Database Systems"],
    type: "Academic Portfolio Project",
    summary:
      "A database-driven service marketplace application supporting bookings, service availability, and content management.",
    contributions: [
      "Backend development",
      "Database integration",
      "Validation systems",
      "Debugging",
    ],
    technologies: ["Flask", "Oracle Database", "SQL", "Python"],
    status: "Completed",
  },
  {
    name: "ATS (Attendance Tracking System)",
    category: ["Education Technology", "Hackathon"],
    type: "Award-Winning Hackathon Project",
    summary:
      "A classroom management system allowing teachers to quickly take attendance while giving students tools for managing bathroom passes and classroom workflows.",
    contributions: [
      "System design",
      "Education workflow automation",
      "Rapid prototyping",
    ],
    technologies: ["Web Development", "Databases", "User Experience"],
    status: "Best Futuristic Hack — TechTogether Miami",
    award: true,
  },
  {
    name: "PlutoHelps",
    category: [
      "Humanitarian Technology",
      "Robotics",
      "Accessibility",
    ],
    type: "Hackathon Project",
    summary:
      "A humanitarian robotics project designed to provide assistance for visually and physically impaired students through technology-driven solutions.",
    contributions: [
      "Collaborative engineering",
      "Accessibility-focused design",
      "Humanitarian technology concepts",
    ],
    technologies: ["Robotics", "Software Development", "Product Design"],
    status: "Best Overall Humanitarian — PlutoHacks",
    award: true,
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-accent-muted/40 bg-accent-pale/60 px-3 py-1 text-sm font-medium text-accent">
      {children}
    </span>
  );
}

function ProjectCard({
  project,
  tintIndex,
}: {
  project: Project;
  tintIndex: number;
}) {
  return (
    <article
      className={`card card-interactive ${cardTint(tintIndex)} overflow-hidden rounded-2xl`}
    >
      <div className="p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-accent">{project.name}</h2>
            <p className="text-sm text-accent-muted font-medium">{project.type}</p>
          </div>
          <span
            className={`shrink-0 inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full ${
              project.award
                ? "bg-amber-50 text-amber-800 border border-amber-200"
                : project.status === "Active"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-accent-light/10 text-foreground border border-accent-muted/20"
            }`}
          >
            {project.award && <span aria-hidden="true">🏆</span>}
            {project.status}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.category.map((cat) => (
            <Tag key={cat}>{cat}</Tag>
          ))}
        </div>

        <p className="text-foreground/90 leading-relaxed">{project.summary}</p>

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2">
            Key Contributions
          </h3>
          <ul className="grid sm:grid-cols-2 gap-1.5">
            {project.contributions.map((item) => (
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

        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2">
            Technologies & Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-accent-light/10 text-foreground/80 px-2.5 py-1 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const activeCount = projects.filter((p) => p.status === "Active").length;
  const awardCount = projects.filter((p) => p.award).length;

  return (
    <main>
      <PageHero
        id="projects-hero"
        eyebrow="Portfolio"
        title={
          <>
            Selected{" "}
            <span className="text-accent-muted">Projects</span>
          </>
        }
        description="A collection of client work, product development, and hackathon projects spanning web development, software engineering, mobile apps, and AI."
      >
        <div className="flex flex-wrap justify-center gap-6 pt-2 text-sm text-accent-muted">
          <span>
            <strong className="text-accent-pale">{projects.length}</strong>{" "}
            projects
          </span>
          <span>
            <strong className="text-accent-pale">{activeCount}</strong> active
          </span>
          <span>
            <strong className="text-accent-pale">{awardCount}</strong>{" "}
            award-winning
          </span>
        </div>
      </PageHero>

      <section
        aria-label="Project list"
        className="section-band px-6 py-16 md:py-20"
      >
        <div className="mx-auto max-w-4xl space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} tintIndex={index} />
          ))}
        </div>
      </section>

      <CtaBand
        id="projects-cta"
        title="Want to learn more?"
        description="Explore my background or get in touch to discuss a project."
        links={[
          { href: "/about", label: "About Me" },
          { href: "/connect", label: "Contact Me", variant: "secondary" },
        ]}
      />
    </main>
  );
}
