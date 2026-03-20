"use client";

import { useRef } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";

const projects = [
  {
    title: "Kapaciti",
    badge: "Platform",
    description:
      "Full-featured web platform built with React, Vite, and Strapi CMS. Features dynamic content management, responsive design, and optimized performance.",
    tech: ["React", "Vite", "Strapi", "TypeScript"],
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    title: "Raydian Cloud",
    badge: "Cloud",
    description:
      "Cloud platform with a modern frontend and headless CMS backend. Built for scalability with clean architecture and seamless content workflows.",
    tech: ["React", "Strapi", "AWS", "TypeScript"],
    gradient: "from-fuchsia-400 to-rose-500",
  },
  {
    title: "Questionnaire Platform",
    badge: "Survey System",
    description:
      "End-to-end survey system with a React client and NestJS API backend. Features dynamic form generation, real-time validation, and data analytics.",
    tech: ["React", "NestJS", "MySQL", "TypeScript"],
    gradient: "from-blue-400 to-cyan-400",
  },
  {
    title: "FTK Main",
    badge: "Application",
    description:
      "Enterprise-grade application built with Laravel and PHP. Robust backend architecture with comprehensive feature set and reliable performance.",
    tech: ["Laravel", "PHP", "MySQL", "REST API"],
    gradient: "from-emerald-400 to-teal-300",
  },
];

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  useFadeIn(ref);

  return (
    <section id="projects" className="py-24 section-glow">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <h2 className="font-mono text-sm font-medium text-accent uppercase tracking-widest mb-12 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
          Selected Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.2)] transition-all duration-500 group"
            >
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} flex items-start justify-end p-5 relative overflow-hidden`}
              >
                {/* Animated gradient shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="relative bg-black/30 backdrop-blur-md text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wide border border-white/10">
                  {project.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2.5">{project.title}</h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-accent-light bg-accent/10 px-3 py-1 rounded-md border border-accent/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
