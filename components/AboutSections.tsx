"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Framer Motion",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "REST API",
    "AWS",
    "Vercel",
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            className="inline-block text-sm font-semibold text-blue-600 mb-2 px-3 py-1 bg-blue-50 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            CONÓCEME
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sobre Mí
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Desarrollador web apasionado con enfoque en crear experiencias
            digitales excepcionales
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden border-8 border-white shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100 p-2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Perfil"
                className="object-cover"
                fill
              />
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Hola, soy Alex
            </h3>
            <p className="text-gray-600 mb-6 text-lg animate-floating-text">
              Con más de 5 años de experiencia en desarrollo web, me especializo
              en crear sitios web y aplicaciones modernas, responsivas y de alto
              rendimiento. Mi enfoque combina experiencia técnica con un buen
              ojo para el diseño para ofrecer soluciones que no solo funcionan
              perfectamente, sino que también lucen impresionantes.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Trabajo estrechamente con los clientes para entender sus
              necesidades y desafíos únicos, asegurando que cada proyecto que
              entrego supere las expectativas y ayude a alcanzar los objetivos
              de negocio.
            </p>
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-800">
                Habilidades y Tecnologías
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="px-3 py-1 bg-white text-gray-800 text-sm rounded-full border border-gray-200 shadow-sm hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
            >
              Contactar <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
