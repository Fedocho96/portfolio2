"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  featured: boolean;
  client: string;
  year: string;
  link: string;
  github: string | null;
  color: string;
};

type ProjectCardProps = {
  project: Project;
  variants: any;
};

export default function ProjectCard({ project, variants }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg h-[400px] border border-gray-100 hover:shadow-xl transition-all duration-300"
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 z-10">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
      </div>

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
        <div
          className={`h-1 w-16 bg-gradient-to-r ${
            project.color
          } mb-4 transition-all duration-300 ${isHovered ? "w-24" : "w-16"}`}
        ></div>
        <h3 className="text-2xl font-bold mb-2 text-white animate-floating-text">
          {project.title}
        </h3>
        <p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 items-center opacity-0 -translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <Link
            href={project.link}
            className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
            aria-label={`Ver proyecto ${project.title}`}
          >
            <Eye size={18} />
          </Link>
          {project.github && (
            <Link
              href={project.github}
              className="p-2 bg-white text-gray-800 rounded-full hover:text-indigo-600 transition-colors shadow-sm"
              aria-label={`Ver repositorio GitHub de ${project.title}`}
            >
              <Github size={18} />
            </Link>
          )}
          <span className="text-xs text-gray-300">{project.year}</span>
        </div>
      </div>
    </motion.div>
  );
}
