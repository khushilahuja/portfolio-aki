"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-white/10 bg-zinc-900/70 p-8 sm:p-10"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">About Me</h2>
        <p className="mt-4 max-w-3xl text-zinc-300">
          I am a video editor focused on YouTube growth and conversion-driven content. I specialize in long-form YouTube edits,
          short-form reels, and ad creatives that hold attention and push viewers to take action.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {["YouTube Editing", "Short-Form Reels", "Performance Ads", "Retention Strategy"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-indigo-400/40 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
