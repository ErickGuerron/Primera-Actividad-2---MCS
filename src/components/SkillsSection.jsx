import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs, // NestJS
  SiMysql,
  SiPython,
  SiGithub,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { FaJava, FaMicrosoft, FaCode } from "react-icons/fa";

const skills = [
  // Frontend
  { name: "HTML", level: 95, category: "frontend", icon: <SiHtml5 size={24} /> },
  { name: "CSS", level: 95, category: "frontend", icon: <SiCss3 size={24} /> },
  { name: "JavaScript", level: 90, category: "frontend", icon: <SiJavascript size={24} /> },
  { name: "React", level: 90, category: "frontend", icon: <SiReact size={24} /> },
  { name: "TypeScript", level: 85, category: "frontend", icon: <SiTypescript size={24} /> },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: <SiTailwindcss size={24} /> },

  // Backend
  { name: "NestJS", level: 85, category: "backend", icon: <SiNodedotjs size={24} /> },
  { name: "MySQL", level: 80, category: "backend", icon: <SiMysql size={24} /> },
  { name: "Java", level: 80, category: "backend", icon: <FaJava size={24} /> },
  { name: "Python", level: 75, category: "backend", icon: <SiPython size={24} /> },
  { name: "C#", level: 70, category: "backend", icon: <FaMicrosoft size={24} /> },
  { name: "MATLAB", level: 65, category: "backend", icon: <FaCode size={24} /> },

  // Tools
  { name: "Git/GitHub", level: 95, category: "tools", icon: <SiGithub size={24} /> },
  { name: "Docker", level: 75, category: "tools", icon: <SiDocker size={24} /> },
  { name: "Figma", level: 85, category: "tools", icon: <SiFigma size={24} /> },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Habilidades del <span className="text-primary">Equipo</span>
        </h2>

        {/* Botones de filtro */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 capitalize shadow-md",
                activeCategory === category
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-gray-700/70 text-gray-300 hover:bg-primary/70 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid de habilidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 flex flex-col items-start gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="text-primary">{skill.icon}</div>
                <h3 className="font-semibold text-lg md:text-xl">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700/30 h-3 rounded-full overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-primary to-secondary animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right w-full">
                <span className="text-sm md:text-base text-gray-300">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
