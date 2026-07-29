"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  index,
  size,
}: {
  project: Project;
  index: number;
  size: "large" | "small";
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col justify-between rounded-2xl border border-border bg-panel p-6 transition-colors hover:border-accent/50 sm:p-8"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <h3 className={`font-display font-medium text-white ${size === "large" ? "text-2xl" : "text-xl"}`}>
            {project.name}
          </h3>
          <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted">
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                project.status === "deployed" ? "bg-emerald-400" : "bg-amber-400"
              }`}
            />
            {project.status === "deployed" ? "Live" : "In dev"}
          </span>
        </div>

        <p className="mt-3 text-sm text-muted">{project.pitch}</p>

        {size === "large" && (
          <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
        )}

        {size === "large" && (
          <ul className="mt-5 space-y-2">
            {project.highlights.slice(0, 4).map((h) => (
              <li key={h} className="flex gap-2 text-sm text-muted">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <a
        href={project.repoUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex w-fit items-center gap-1.5 font-mono text-sm text-white transition-colors hover:text-accent"
      >
        View source
        <ArrowUpRight
          size={15}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </motion.article>
  );
}
