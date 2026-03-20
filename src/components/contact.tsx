"use client";

import { useRef } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const contacts = [
  {
    href: "mailto:thomashuynhqn@gmail.com",
    icon: <MailIcon size={24} />,
    title: "Email",
    detail: "thomashuynhqn@gmail.com",
  },
  {
    href: "https://www.linkedin.com/in/thomashuynhqn/",
    icon: <LinkedinIcon size={24} />,
    title: "LinkedIn",
    detail: "Thomas Huynh",
    external: true,
  },
  {
    href: "https://github.com/thomashuynhqn",
    icon: <GithubIcon size={24} />,
    title: "GitHub",
    detail: "thomashuynhqn",
    external: true,
  },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  useFadeIn(ref);

  return (
    <section id="contact" className="py-24 section-glow">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <h2 className="font-mono text-sm font-medium text-accent uppercase tracking-widest mb-12 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
          Get In Touch
        </h2>

        <div className="max-w-[600px]">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s build something together.
          </h3>
          <p className="text-muted text-lg leading-relaxed mb-10">
            I&apos;m always open to new opportunities, collaborations, or just a
            good conversation about web development. Drop me a line and
            let&apos;s connect.
          </p>

          <div className="flex flex-col gap-4">
            {contacts.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-5 p-5 glass glass-hover shine-border rounded-2xl text-muted hover:translate-x-1 hover:text-foreground transition-all duration-300"
              >
                <span className="text-accent shrink-0">{c.icon}</span>
                <div>
                  <strong className="block text-foreground text-sm mb-0.5">
                    {c.title}
                  </strong>
                  <span className="text-sm">{c.detail}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
