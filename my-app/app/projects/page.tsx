import Link from "next/link";
import type { Metadata } from "next";

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
    <span className="inline-block bg-[#F4F1DE] text-[#333D29] px-3 py-1 rounded-full text-sm">
      {children}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="bg-white rounded-xl border border-[#919588]/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-[#333D29]">{project.name}</h2>
            <p className="text-sm text-[#919588] font-medium">{project.type}</p>
          </div>
          <span
            className={`shrink-0 inline-flex items-center gap-1.5 text-sm font-medium px-3 py-1 rounded-full ${
              project.award
                ? "bg-amber-50 text-amber-800 border border-amber-200"
                : project.status === "Active"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-[#919588]/10 text-[#333D29] border border-[#919588]/20"
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

        <p className="text-[#333D29]/90 leading-relaxed">{project.summary}</p>

        <div>
          <h3 className="text-sm font-semibold text-[#333D29] mb-2">
            Key Contributions
          </h3>
          <ul className="grid sm:grid-cols-2 gap-1.5">
            {project.contributions.map((item) => (
              <li
                key={item}
                className="text-sm text-[#333D29]/80 flex items-start gap-2"
              >
                <span className="text-[#919588] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[#333D29] mb-2">
            Technologies & Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs bg-[#919588]/10 text-[#333D29]/80 px-2.5 py-1 rounded-md"
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
    <main className="max-w-4xl mx-auto px-6 py-10 space-y-12">
      <section aria-labelledby="projects-hero" className="space-y-4">
        <h1
          id="projects-hero"
          className="text-3xl md:text-4xl font-bold text-[#333D29]"
        >
          Projects
        </h1>
        <p className="text-lg text-[#333D29]/80 leading-relaxed max-w-2xl">
          A collection of client work, product development, and hackathon
          projects spanning web development, software engineering, mobile apps,
          and AI — from business websites to award-winning builds.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-[#919588]">
          <span>
            <strong className="text-[#333D29]">{projects.length}</strong>{" "}
            projects
          </span>
          <span>
            <strong className="text-[#333D29]">{activeCount}</strong> active
          </span>
          <span>
            <strong className="text-[#333D29]">{awardCount}</strong> award-winning
          </span>
        </div>
      </section>

      <section aria-label="Project list" className="space-y-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>

      <section
        aria-labelledby="projects-cta"
        className="bg-[#919588] rounded-xl p-8 text-[#EFECE7] text-center space-y-4"
      >
        <h2 id="projects-cta" className="text-xl font-bold">
          Want to learn more?
        </h2>
        <p className="opacity-90 max-w-md mx-auto">
          Explore my background or get in touch to discuss a project.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/about"
            className="bg-[#F4F1DE] text-[#333D29] px-5 py-2 rounded-md font-medium hover:bg-[#F4F1DE]/90 transition-colors"
          >
            About Me
          </Link>
          <a
            href="mailto:hello@oliviabisset.com"
            className="border border-[#EFECE7] text-[#EFECE7] px-5 py-2 rounded-md font-medium hover:bg-[#EFECE7]/10 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>
    </main>
  );
}
