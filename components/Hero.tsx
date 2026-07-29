"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import NetworkCanvas from "@/components/NetworkCanvas";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden border-b border-border">
      <NetworkCanvas />

      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[length:100%_100%,48px_48px,48px_48px]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-24">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-mono text-sm text-accent"
        >
          {profile.location} · {profile.school}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl text-balance font-display text-4xl font-medium leading-[1.1] text-white sm:text-5xl md:text-6xl"
        >
          {profile.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-base text-muted sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 font-mono text-sm text-white transition-transform hover:-translate-y-0.5"
          >
            See the work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 font-mono text-sm text-white transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-muted transition-colors hover:text-white"
        aria-label="Scroll to about section"
      >
        <ArrowDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
}
