"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data";

export function Process() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">How We&apos;ll Work Together</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          A simple, transparent process from first message to final export.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="rounded-2xl border border-white/10 bg-zinc-900 p-6"
          >
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-semibold text-indigo-300">
              {String(step.id).padStart(2, "0")}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
