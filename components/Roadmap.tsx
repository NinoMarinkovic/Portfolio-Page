"use client";

import { motion } from "framer-motion";
import { roadmap } from "@/lib/data";

const statusColor: Record<string, string> = {
  done: "bg-emerald-400",
  "in-progress": "bg-amber-400",
  planned: "bg-slate-500",
};

export default function Roadmap() {
  return (
    <section id="roadmap" className="border-b border-border bg-base px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-accent">04 · Path</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-white sm:text-4xl">
            git log --graph
          </h2>
        </motion.div>

        <div className="relative border-l border-border pl-8">
          {roadmap.map((entry, i) => (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative pb-10 last:pb-0"
            >
              <span
                className={`absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-base ${statusColor[entry.status]}`}
              />
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-md bg-panel px-2 py-0.5 font-mono text-xs text-accent">
                  {entry.tag}
                </span>
                <span className="font-mono text-xs text-muted">{entry.date}</span>
              </div>
              <h3 className="mt-2 font-display text-lg font-medium text-white">
                {entry.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{entry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
