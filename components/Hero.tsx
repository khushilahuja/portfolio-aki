"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      <iframe
        className="pointer-events-none absolute inset-0 h-full w-full scale-150 md:scale-125"
        src="https://www.youtube.com/embed/BmialHN3bVw?autoplay=1&mute=1&loop=1&playlist=BmialHN3bVw&controls=0&showinfo=0&modestbranding=1&rel=0"
        title="Hero background video"
        allow="autoplay; encrypted-media; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      <div className="absolute inset-0 bg-black/70" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto w-full max-w-5xl"
      >
        <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-zinc-100">
          Trusted by creators and brands
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          High-Retention Video Editing for YouTubers
        </h1>
        <p className="mt-4 max-w-2xl text-base text-zinc-200 sm:text-lg">
          Helping creators grow with engaging edits
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Hire Me
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-8">
          {stats.map((stat) => (
            <div key={stat.id}>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="mt-0.5 text-xs text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
