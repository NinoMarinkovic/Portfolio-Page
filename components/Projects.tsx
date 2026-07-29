"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-b border-border bg-base px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-accent">02 · Work</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-white sm:text-4xl">
            Deployed, not just demoed.
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} size="large" />
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {rest.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} size="small" />
          ))}
        </div>
      </div>
    </section>
  );
}
