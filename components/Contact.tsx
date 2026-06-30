"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-white/10 bg-zinc-900 p-8 sm:p-10"
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Let&apos;s Work Together</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Need high-retention edits for YouTube, shorts, or paid ads? Reach out and I will get back with a custom workflow.
        </p>

        <div className="mt-8 space-y-4 text-zinc-200">
          <p>
            Email:{" "}
            <a className="text-indigo-300 hover:text-indigo-200" href="mailto:hello@editorportfolio.com">
              hello@editorportfolio.com
            </a>
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/910000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-400"
            >
              Message on WhatsApp
            </a>
            <a
              href="https://calendly.com/your-name/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Book a Call
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
