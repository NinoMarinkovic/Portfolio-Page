"use client";

import { motion } from "framer-motion";
import { stack } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="stack" className="border-b border-border bg-base px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-accent">03 · Stack</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-white sm:text-4xl">
            Tools I reach for.
          </h2>
        </motion.div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((category, i) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-panel p-6"
            >
              <p className="font-mono text-xs uppercase tracking-wide text-accent">
                {category.label}
              </p>
              <ul className="mt-4 space-y-2.5">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-white/90">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
