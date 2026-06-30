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
      className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 text-left"
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent opacity-90" />
        <span className="absolute bottom-3 left-3 rounded-full bg-indigo-500/90 px-3 py-1 text-xs font-medium text-white">
          {project.result}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-2 text-sm text-zinc-300">{project.description}</p>
      </div>
    </motion.button>
  );
}
