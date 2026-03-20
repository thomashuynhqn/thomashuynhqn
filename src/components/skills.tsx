"use client";

import { useRef } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";

const skills = [
  {
    title: "Front-End",
    items: [
      "TypeScript / JavaScript",
      "React & Next.js",
      "Tailwind CSS",
      "Vite & Webpack",
      "Responsive Design",
    ],
  },
  {
    title: "Back-End",
    items: [
      "Node.js & Express",
      "NestJS",
      "REST & GraphQL APIs",
      "MySQL & PostgreSQL",
      "Strapi CMS",
    ],
  },
  {
    title: "Tools & DevOps",
    items: ["Git & GitHub", "Docker", "AWS (S3, EC2)", "CI/CD Pipelines", "Linux / CLI"],
  },
  {
    title: "Design & UX",
    items: [
      "Figma",
      "UI/UX Principles",
      "Design Systems",
      "Accessibility",
      "Animation & Motion",
    ],
  },
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  useFadeIn(ref);

  return (
    <section id="skills" className="py-24 section-glow">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <h2 className="font-mono text-sm font-medium text-accent uppercase tracking-widest mb-12 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
          Skills & Tech
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="glass glass-hover shine-border rounded-2xl p-8 hover:-translate-y-1.5 transition-all duration-300"
            >
              <h3 className="text-lg font-bold mb-4">{skill.title}</h3>
              <ul>
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted py-1.5 border-b border-white/[0.04] last:border-b-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
