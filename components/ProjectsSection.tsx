"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ProjectCard, { type Project } from "./ProjectCard";

export default function ProjectsSection() {
  const sectionRef = useRef(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "JV Bartender",
      description:
        "Una Landing Page completa con integración de animaciones, slider de imagenes con PopUp y diseño personalizado.",
      longDescription:
        "Una solución de Landing Page con integración de animaciones, slider de imagenes con PopUp y diseño personalizado. Construida con rendimiento y escalabilidad en mente.",
      image: "/jvbartender.webp",
      tags: ["Javascript", "Tailwind CSS", "React", "Node.js", "FramerMotion"],
      category: "web",
      featured: true,
      client: "Servicio de barra y bartender JV",
      year: "2025",
      link: "https://jvbartender.com",
      github: null,
      color: "from-blue-500 to-pink-500",
    },
    {
      id: 2,
      title: "Gimnasia Artistica MR",
      description:
        "Landing Page para una escuela de gimnasia artistica, con un diseño atractivo y funcional.",
      longDescription: "Incluye visualización de datos en tiempo real. .",
      image: "/mrgimnasia.webp",
      tags: ["Javascript", "Tailwind CSS", "React", "Node.js", "FramerMotion"],
      category: "web",
      featured: false,
      client: "MR Gimnasia artistica",
      year: "2025",
      link: "https://mrgimnasia.vercel.app/",
      github: null,
      color: "from-pink-500 to-purple-500",
    },
    {
      id: 3,
      title: "MyV Abogados",
      description: "Landing Page para el estudio juridico de MyV Abogados.",
      longDescription: ".",
      image: "/myvimg.JPG",
      tags: [
        "Javascript",
        "Tailwind CSS",
        "React",
        "Node.js",
        "FramerMotion",
        "HTML",
        "CSS",
      ],
      category: "web",
      featured: false,
      client: "MyV Abogados",
      year: "2025",
      link: "https://https://myv-abogados.vercel.app/",
      github: null,
      color: "from-amber-400 to-amber-800",
    },
  ];

  const featuredProject = projects.find((project) => project.featured);
  const regularProjects = projects.filter(
    (project) => !project.featured || project.id !== featuredProject?.id
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="projects" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.span
            className="inline-block text-sm font-semibold text-blue-600 mb-2 px-3 py-1 bg-blue-50 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            PORTAFOLIO
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Proyectos Destacados
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-8 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Una selección de mis trabajos recientes para clientes de diversas
            industrias
          </motion.p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-xl bg-white shadow-xl border border-gray-100">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[300px] md:h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/80 to-transparent z-10 md:hidden"></div>
                  <Image
                    src={featuredProject.image || "/placeholder.svg"}
                    alt={featuredProject.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center relative">
                  <div
                    className={`h-1 w-24 bg-gradient-to-r ${featuredProject.color} mb-6`}
                  ></div>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2 px-3 py-1 bg-blue-50 rounded-full inline-block">
                    Proyecto Destacado
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {featuredProject.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
                    <div>
                      <span className="block text-gray-800 font-medium">
                        Cliente
                      </span>
                      {featuredProject.client}
                    </div>
                    <div>
                      <span className="block text-gray-800 font-medium">
                        Año
                      </span>
                      {featuredProject.year}
                    </div>
                  </div>

                  <a
                    href={featuredProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md flex items-center gap-2"
                  >
                    Ver Proyecto <ExternalLink size={16} />
                  </a>
                  {featuredProject.github && (
                    <Link
                      href={featuredProject.github}
                      className="px-6 py-3 border border-gray-300 hover:border-indigo-500 text-gray-800 hover:text-indigo-600 rounded-md transition-colors flex items-center gap-2 bg-white shadow-sm"
                    >
                      <Github size={16} /> GitHub
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {regularProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
