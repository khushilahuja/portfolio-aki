"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, type Project } from "@/lib/data";

function toYouTubeEmbedUrl(videoUrl: string): string {
  const withAutoplay = (embedUrl: string) =>
    `${embedUrl}${embedUrl.includes("?") ? "&" : "?"}autoplay=1&rel=0&modestbranding=1`;

  // Keep this helper lightweight: it supports youtu.be, watch?v=, shorts, and already-embedded URLs.
  try {
    // youtube embed: already in iframe-safe form
    if (videoUrl.includes("youtube.com/embed/")) return withAutoplay(videoUrl);

    // Short link: https://youtu.be/VIDEO_ID?si=...
    if (videoUrl.includes("youtu.be/")) {
      const id = new URL(videoUrl).pathname.replace("/", "").trim();
      return withAutoplay(`https://www.youtube.com/embed/${id}`);
    }

    // Watch link: https://www.youtube.com/watch?v=VIDEO_ID&...
    if (videoUrl.includes("youtube.com/watch")) {
      const url = new URL(videoUrl);
      const id = url.searchParams.get("v");
      return id ? withAutoplay(`https://www.youtube.com/embed/${id}`) : videoUrl;
    }

    // Shorts: https://www.youtube.com/shorts/VIDEO_ID
    if (videoUrl.includes("youtube.com/shorts/")) {
      const id = new URL(videoUrl).pathname.replace("/shorts/", "").trim();
      return withAutoplay(`https://www.youtube.com/embed/${id}`);
    }
  } catch {
    // If parsing fails (e.g., non-YouTube URLs), fall back to raw value.
  }

  return videoUrl;
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
        <p className="mt-3 max-w-2xl text-zinc-300">
          Click any project to preview the full edit and see how performance-focused storytelling drives views and retention.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={(item) => setActiveProject(item)}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="w-full max-w-3xl rounded-2xl border border-white/10 bg-zinc-950 p-4 sm:p-6"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">{activeProject.title}</h3>
                <button
                  className="rounded-full border border-white/20 px-3 py-1 text-sm text-zinc-200 hover:bg-white/10"
                  onClick={() => setActiveProject(null)}
                >
                  Close
                </button>
              </div>

              {/* The iframe is only rendered after click to keep initial load fast. */}
              <div className="aspect-video overflow-hidden rounded-xl border border-white/10">
                <iframe
                  src={toYouTubeEmbedUrl(activeProject.videoUrl)}
                  title={activeProject.title}
                  className="h-full w-full"
                  loading="lazy"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                />
              </div>

              <p className="mt-4 text-sm text-zinc-300">{activeProject.description}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
