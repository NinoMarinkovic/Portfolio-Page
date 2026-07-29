"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="bg-base px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm text-accent">05 · Contact</p>
          <h2 className="mt-3 max-w-xl text-balance font-display text-3xl font-medium text-white sm:text-4xl">
            Open to internship and working-student roles in backend and cloud engineering.
          </h2>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm text-white transition-transform hover:-translate-y-0.5"
            >
              Send an email
              <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-sm text-white transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-sm text-white transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
