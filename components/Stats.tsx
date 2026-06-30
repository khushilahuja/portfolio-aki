"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="relative z-10 mx-auto w-full max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="-mt-10 grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur sm:grid-cols-4 sm:p-8"
      >
        {stats.map((stat) => (
          <div key={stat.id} className="text-center">
            <p className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs text-zinc-400 sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
