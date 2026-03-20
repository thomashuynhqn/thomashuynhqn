"use client";

import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const titles = [
  "Project Manager",
  "Fullstack Developer",
  "Problem Solver",
];

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = titles[titleIndex];

    if (!deleting && displayed.length < target.length) {
      const timeout = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        60
      );
      return () => clearTimeout(timeout);
    }

    if (!deleting && displayed.length === target.length) {
      const timeout = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (deleting && displayed.length > 0) {
      const timeout = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        30
      );
      return () => clearTimeout(timeout);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }
  }, [displayed, deleting, titleIndex]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center gap-20 max-w-[1100px] mx-auto px-6 pt-28 pb-20 lg:flex-row flex-col"
    >
      {/* Text */}
      <div className="flex-1 max-w-[540px] lg:text-left text-center">
        <p className="font-mono text-sm text-accent font-medium mb-4 tracking-wider uppercase">
          &mdash; Hi, I&apos;m
        </p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] mb-3 gradient-text">
          Thomas Huynh
        </h1>
        <h2 className="text-xl lg:text-2xl font-medium text-muted mb-6 h-8">
          <span>{displayed}</span>
          <span className="inline-block w-[2px] h-5 bg-accent ml-1 align-middle animate-pulse" />
        </h2>
        <p className="text-muted text-lg leading-relaxed mb-10 max-w-[460px] mx-auto lg:mx-0">
          I lead projects and build modern web experiences — bridging strategy
          with hands-on development. Specializing in TypeScript, React, and
          Node.js ecosystems.
        </p>

        <div className="flex gap-4 mb-12 lg:justify-start justify-center flex-wrap">
          <a
            href="#projects"
            className="group relative px-8 py-3.5 rounded-xl text-sm font-semibold text-white overflow-hidden transition-all hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-pink-500 transition-all" />
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-pink-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
            <span className="relative">View My Work</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl text-sm font-semibold glass glass-hover hover:-translate-y-0.5 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex gap-6 lg:justify-start justify-center">
          <SocialLink href="https://github.com/thomashuynhqn" label="GitHub" icon={<GithubIcon />} />
          <SocialLink href="https://www.linkedin.com/in/thomashuynhqn/" label="LinkedIn" icon={<LinkedinIcon />} />
          <SocialLink href="mailto:thomashuynhqn@gmail.com" label="Email" icon={<MailIcon />} />
        </div>
      </div>

      {/* Code block */}
      <div className="flex-1 max-w-[420px] w-full">
        <div className="glass rounded-2xl overflow-hidden shadow-[0_20px_80px_-20px_rgba(99,102,241,0.15)] hover:shadow-[0_30px_100px_-20px_rgba(99,102,241,0.25)] transition-shadow duration-500">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.06]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-muted">thomas.ts</span>
          </div>
          <pre className="p-6 font-mono text-[0.82rem] leading-[1.9] overflow-x-auto">
            <code>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-yellow-300">developer</span>
              {" = {\n"}
              {"  "}<span className="text-red-400">name</span>{": "}
              <span className="text-green-400">&quot;Thomas Huynh&quot;</span>{",\n"}
              {"  "}<span className="text-red-400">role</span>{": "}
              <span className="text-green-400">&quot;PM &amp; Developer&quot;</span>{",\n"}
              {"  "}<span className="text-red-400">stack</span>{": [\n"}
              {"    "}<span className="text-green-400">&quot;TypeScript&quot;</span>{", "}
              <span className="text-green-400">&quot;React&quot;</span>{",\n"}
              {"    "}<span className="text-green-400">&quot;Next.js&quot;</span>{", "}
              <span className="text-green-400">&quot;Node.js&quot;</span>{",\n"}
              {"    "}<span className="text-green-400">&quot;NestJS&quot;</span>{", "}
              <span className="text-green-400">&quot;Tailwind&quot;</span>{"\n  ],\n"}
              {"  "}<span className="text-red-400">passion</span>{": "}
              <span className="text-green-400">&quot;Clean code &amp; great UX&quot;</span>{",\n"}
              {"  "}<span className="text-red-400">available</span>{": "}
              <span className="text-orange-400">true</span>{"\n};"}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted hover:text-accent hover:-translate-y-1 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.4)] transition-all duration-300"
    >
      {icon}
    </a>
  );
}
