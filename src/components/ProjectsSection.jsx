import { ArrowRight, ExternalLink, Github } from "lucide-react";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiPrisma,
  SiRedis,
  SiPostgresql,
  SiShadcnui,
} from "react-icons/si";
import { FaBook, FaFileCode } from "react-icons/fa";

// Map technologies to icons
const techIcons = {
  "Next.js": (
    <SiNextdotjs className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
  ),
  React: (
    <SiReact className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
  ),
  TypeScript: (
    <SiTypescript className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
  ),
  TailwindCSS: (
    <SiTailwindcss className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
  ),
  JavaScript: (
    <SiJavascript className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
  ),
  Prisma: (
    <SiPrisma className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
  ),
  Redis: (
    <SiRedis className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
  ),
  Neon: (
    <SiPostgresql className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
  ), // Fallback for Neon
  Clerk: (
    <FaBook className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
  ), // Fallback for Clerk
  "Shadcn UI": (
    <SiShadcnui  className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
  ), // Fallback for Shadcn UI
  Drizzle: (
    <FaFileCode className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />
  ), // Fallback for Drizzle
};

const projects = [
  {
    id: 1,
    title: "University Library",
    description:
      "A system for borrowing and displaying books with a modern, user-friendly UI.",
    image: "/projects/p1.png",
    tags: ["Next.js", "React", "TypeScript", "Drizzle", "Redis", "TailwindCSS"],
    demoUrl: "https://university-library-dusky.vercel.app/",
    githubUrl: "https://github.com/satyadur/university-library",
  },
  {
    id: 2,
    title: "ZCRUM",
    description:
      "A task management system inspired by Jira, with robust project tracking features.",
    image: "/projects/p2.png",
    tags: [
      "JavaScript",
      "Prisma",
      "Neon",
      "React",
      "Clerk",
      "Shadcn UI",
      "TailWindCSS",
      "Next.js",
    ],
    demoUrl: "https://zcrum-lac.vercel.app/",
    githubUrl: "https://github.com/satyadur/zcrum",
  },
  {
    id: 3,
    title: "Readme Maker",
    description:
      "Generates README file code with a beautiful, interactive landing page.",
    image: "/projects/p3.png",
    tags: ["React", "Next.js", "TailwindCSS"],
    demoUrl: "https://readm-generator-for-github-profile.netlify.app/",
    githubUrl: "https://github.com/satyadur/github-profile-readme-maker",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, crafted with attention to detail,
          performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-3 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium">
                      {techIcons[tag]}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 accent"
            target="_blank"
            href="https://github.com/satyadur"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
