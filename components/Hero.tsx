"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      <iframe
        className="pointer-events-none absolute inset-0 h-full w-full scale-150 md:scale-125"
        src="https://www.youtube.com/embed/BmialHN3bVw?autoplay=1&mute=1&loop=1&playlist=BmialHN3bVw&controls=0&showinfo=0&modestbranding=1&rel=0&cc_load_policy=0"
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
        {/* profile avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.08, rotate: 3 }}
          className="group relative mb-6 inline-block cursor-default"
        >
          {/* spinning ring */}
          <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-500 via-violet-500 to-transparent opacity-70 blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
          <span className="absolute -inset-[3px] animate-spin rounded-full border border-dashed border-indigo-400/40 [animation-duration:8s]" />
          <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-indigo-500/60 ring-offset-2 ring-offset-black/50">
            <Image
              src="/images/aki.png"
              alt="Profile"
              fill
              className="object-cover transition duration-300 group-hover:brightness-110"
              priority
            />
          </div>
        </motion.div>

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
