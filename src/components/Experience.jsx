import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Briefcase } from "lucide-react";
import { SiReact, SiNodedotjs, SiTypescript, SiKotlin, SiPostgresql, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { DiJava } from "react-icons/di";

// Map technologies to icons
const techIcons = {
  React: <SiReact className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />,
  "Node.js": <SiNodedotjs className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />,
  TypeScript: <SiTypescript className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />,
  Kotlin: <SiKotlin className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />,
  Java: <DiJava className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />,
  PostgreSQL: <SiPostgresql className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />,
  MongoDB: <SiMongodb className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />,
  "Next.js": <SiNextdotjs className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5 text-foreground/80 group-hover:text-primary transition-colors" />,
};

// Extract technologies from description
const getTechs = (description) => {
  const techs = [
    "React",
    "Node.js",
    "TypeScript",
    "Kotlin",
    "Java",
    "PostgreSQL",
    "MongoDB",
    "Next.js",
    "Tailwind CSS",
  ];
  return techs.filter((tech) => description.includes(tech));
};

const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Credmarg Technologies",
    date: "Aug 2023 - Dec 2024",
    description:
      "Developed and maintained full-stack web applications using technologies like React, Node.js, TypeScript, Kotlin, Java, PostgreSQL, Next.js, and MongoDB. Collaborated with cross-functional teams to deliver scalable solutions for financial services.",
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Astra Indian Ventures",
    date: "Jan 2025 - Present",
    description:
      "Focused on building responsive, user-friendly interfaces using Next.js, React, and Tailwind CSS. Enhanced UI/UX for client-facing applications, ensuring high performance and accessibility.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
          My <span className="text-primary">Experience</span>
        </h2>

        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.3)">
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.id}
              date={exp.date}
              icon={<Briefcase className="w-6 h-6 text-primary" />}
              iconStyle={{
                background: "#000",
                color: "#60a5fa",
                zIndex: 20,
                boxShadow: "0 0 10px rgba(96, 165, 250, 0.5)",
                padding: "8px",
              }}
              contentStyle={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.15)",
                padding: "1.5rem",
              }}
              contentArrowStyle={{ borderRight: "7px solid rgba(255, 255, 255, 0.3)" }}
              dateClassName="text-foreground/80 text-lg"
              className="group"
            >
              <div className="bg-transparent">
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <h4 className="text-lg font-medium text-primary text-glow">{exp.company}</h4>
                <p className="text-muted-foreground text-sm mt-2 overflow-wrap break-word">{exp.description}</p>
                <div className="flex flex-wrap gap-3 mt-4">
                  {getTechs(exp.description).map((tech) => (
                    <span key={tech} className="text-xs font-medium">
                      {techIcons[tech]}
                    </span>
                  ))}
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;