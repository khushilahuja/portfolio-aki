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
        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400">How it works</p>
        <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">From brief to final cut</h2>
      </motion.div>

      <div className="relative mt-12">
        {/* connecting line — desktop only */}
        <div className="pointer-events-none absolute left-[calc(12.5%-1px)] right-[calc(12.5%-1px)] top-5 hidden h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent lg:block" />

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-indigo-500/40 bg-indigo-500/15 text-sm font-bold text-indigo-300">
                {String(step.id).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
