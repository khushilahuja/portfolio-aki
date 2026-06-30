"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
  onOpen: (project: Project) => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      onClick={() => onOpen(project)}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 text-left backdrop-blur-sm"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />

        {/* play icon — fades in on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-1 ring-white/30">
            <svg className="h-5 w-5 translate-x-0.5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <span className="absolute bottom-3 left-3 rounded-full bg-indigo-500/90 px-3 py-1 text-xs font-medium text-white">
          {project.result}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-base font-semibold text-white">{project.title}</h3>
        <p className="mt-1.5 text-sm text-zinc-400">{project.description}</p>
      </div>
    </motion.button>
  );
}
