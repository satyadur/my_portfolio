import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaJava, FaGitAlt, FaGithub, FaDatabase, FaTools } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiPostman, SiPostgresql, SiMongodb, SiIntellijidea, SiVercel, SiExpress } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend", icon: <FaHtml5 /> },
  { name: "JavaScript", level: 90, category: "frontend", icon: <FaJs /> },
  { name: "React", level: 90, category: "frontend", icon: <FaReact /> },
  { name: "TypeScript", level: 85, category: "frontend", icon: <SiTypescript /> },
  { name: "ReactNative", level: 90, category: "frontend", icon: <FaReact /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss /> },
  { name: "Next.js", level: 80, category: "frontend", icon: <SiNextdotjs /> },

  { name: "Node.js", level: 80, category: "backend", icon: <FaNodeJs /> },
  { name: "Java", level: 80, category: "backend", icon: <FaJava /> },
  { name: "Advance Java", level: 65, category: "backend", icon: <FaJava /> },
  { name: "Express", level: 75, category: "backend", icon: <SiExpress /> },
  { name: "MongoDB", level: 70, category: "backend", icon: <SiMongodb /> },
  { name: "PostgreSQL", level: 65, category: "backend", icon: <SiPostgresql /> },

  { name: "Git/GitHub", level: 90, category: "tools", icon: <FaGithub /> },
  { name: "Intellij", level: 70, category: "tools", icon: <SiIntellijidea /> },
  { name: "Postman", level: 85, category: "tools", icon: <SiPostman /> },
  { name: "VS Code", level: 95, category: "tools", icon: <VscVscode /> },
  { name: "Vercel", level: 70, category: "tools", icon: <SiVercel /> },
];


const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full cursor-pointer transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {filteredSkills.map((skill, key) => (
  <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
    <div className="text-left mb-4 flex items-center justify-between">
      <h3 className="font-semibold text-lg">{skill.name}</h3>
      <span className="text-xl text-primary">{skill.icon}</span>
    </div>

    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
      <div
        className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
        style={{ width: skill.level + "%" }}
      />
    </div>

    <div className="text-right mt-1">
      <span className="text-sm text-muted-foreground">{skill.level}%</span>
    </div>
  </div>
))}

        </div>
      </div>
    </section>
  );
};
