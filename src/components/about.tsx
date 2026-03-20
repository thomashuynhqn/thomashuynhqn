"use client";

import { useRef } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  useFadeIn(ref);

  return (
    <section id="about" className="py-24">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <h2 className="font-mono text-sm font-medium text-accent uppercase tracking-widest mb-12 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
          About Me
        </h2>

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-snug mb-6 gradient-text inline-block">
          Building digital experiences that matter.
        </h3>

        <p className="text-muted text-lg leading-relaxed mb-4 max-w-[640px]">
          I&apos;m a project manager with a fullstack developer background. I
          bridge the gap between strategy and execution — leading teams while
          still getting my hands dirty with code. I combine technical depth with
          product thinking to deliver results that matter.
        </p>
        <p className="text-muted text-lg leading-relaxed mb-10 max-w-[640px]">
          My approach centers on clear communication, clean architecture, and
          choosing the right tools for each problem. Having built products
          end-to-end, I bring a developer&apos;s perspective to project
          leadership.
        </p>

        <div className="flex gap-12 pt-8 border-t border-border flex-wrap">
          <Stat value="PM" label="Project Leadership" />
          <Stat value="React" label="Primary Framework" />
          <Stat value="Fullstack" label="End to End" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <span className="block text-lg font-bold mb-1">{value}</span>
      <span className="text-xs text-muted uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}
