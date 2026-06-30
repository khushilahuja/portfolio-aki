"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">Social proof</p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">What clients say</h2>
      </motion.div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {testimonials.map((item, index) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="flex flex-col justify-between rounded-2xl border border-white/8 bg-zinc-900/50 p-7 backdrop-blur-sm"
          >
            <div>
              <span className="-mt-1 block font-serif text-5xl leading-none text-indigo-500/50">&ldquo;</span>
              <p className="mt-2 text-base leading-relaxed text-zinc-200">{item.feedback}</p>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-bold text-indigo-300">
                {item.name.charAt(0).toUpperCase()}
              </div>
              <p className="text-sm font-semibold text-indigo-300">{item.name}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
