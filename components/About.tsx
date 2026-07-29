"use client";

import { motion } from "framer-motion";

const facts = [
  { label: "Focus", value: "Software Engineering, Software Development" },
  { label: "Studying", value: "Industrial Engineering & Business Informatics" },
  { label: "Based in", value: "Reutte, Tyrol, Austria" },
  { label: "Targeting", value: "Summer 2026 internship → DACH role by 2027" },
];

export default function About() {
  return (
    <section id="about" className="border-b border-border bg-base px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-sm text-accent">01 · About</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-white sm:text-4xl">
              Ships things, then hardens them.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted">
              I don&apos;t stop at a working local build. My projects go through the same steps
              a production system needs: a real database, CI, environment-based config, and a
              deployment that has to keep running without me watching it. WM Predictor 2026 is
              the clearest example — Flask app, Aiven-managed MySQL, Docker, deployed on Render,
              with GitHub Actions running on every push.
            </p>
            <p className="text-lg leading-relaxed text-muted">
             Outside of technology, I enjoy playing football, spending time with friends and family, reading, and staying active through sports. These activities help me maintain balance, develop discipline, and continuously improve—qualities I also bring into software development.
             I&apos;m currently completing IT internships at Plansee Group and IBF Solutions while continuing to build full-stack applications and expand my knowledge of backend development and cloud technologies.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-xs uppercase tracking-wide text-muted">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-white">{f.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
