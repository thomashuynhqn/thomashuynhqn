"use client";

import { useRef } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

const certificates: Certificate[] = [
  // Add your certificates here. Examples:
  // {
  //   title: "AWS Certified Cloud Practitioner",
  //   issuer: "Amazon Web Services",
  //   date: "2025",
  //   credentialUrl: "https://...",
  // },
  // {
  //   title: "Professional Scrum Master I (PSM I)",
  //   issuer: "Scrum.org",
  //   date: "2024",
  //   credentialUrl: "https://...",
  // },
  {
    title: "Your Certificate Title",
    issuer: "Issuing Organization",
    date: "2025",
  },
];

export function Certificates() {
  const ref = useRef<HTMLDivElement>(null);
  useFadeIn(ref);

  return (
    <section id="certificates" className="py-24 section-glow">
      <div className="max-w-[1100px] mx-auto px-6" ref={ref}>
        <h2 className="font-mono text-sm font-medium text-accent uppercase tracking-widest mb-12 relative inline-block after:absolute after:-bottom-2 after:left-0 after:w-10 after:h-0.5 after:bg-accent">
          Certificates
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="glass glass-hover shine-border rounded-2xl p-6 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Badge icon */}
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-accent"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>

              <h3 className="text-base font-bold mb-1">{cert.title}</h3>
              <p className="text-sm text-muted mb-1">{cert.issuer}</p>
              <p className="text-xs text-muted/70 mb-4">{cert.date}</p>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent-light transition-colors"
                >
                  View Credential
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
