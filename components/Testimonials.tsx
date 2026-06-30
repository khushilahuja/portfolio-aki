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
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Client Results</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Feedback from creators and brands who trust me to turn raw footage into growth-focused content.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {testimonials.map((item) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-6"
          >
            <p className="text-zinc-200">
              &ldquo;{item.feedback}&rdquo;
            </p>
            <p className="mt-4 text-sm font-semibold text-indigo-300">{item.name}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
