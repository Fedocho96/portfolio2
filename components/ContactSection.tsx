"use client";

import { motion } from "framer-motion";
import { Mail, User, } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white ">
      <div className=" container mx-auto px-4 ">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            className="inline-block text-sm font-semibold text-blue-600 mb-2 px-3 py-1 bg-blue-50 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            CONTACTO
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Trabajemos Juntos
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            ¿Tienes un proyecto en mente? Ponte en contacto.
          </motion.p>
        </div>

        <div className=" gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Información de Contacto
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <a
                    href="mailto:rowebs.dev@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    rowebs.dev@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <User size={18} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Redes Sociales</p>
                  <div className="flex gap-3 mt-1">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.linkedin.com/in/federico-rosales96/"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/Fedocho96/"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 shadow-md">
              <h4 className="font-semibold mb-2 text-gray-900">
                Cronograma del Proyecto
              </h4>
              <p className="text-gray-700 text-sm mb-4 ">
                La mayoría de los proyectos pueden completarse en 1-2 semanas,
                dependiendo de la complejidad y el alcance. Proporcionaré un
                cronograma detallado durante nuestra consulta inicial.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-md mx-auto p-6 mt-4 bg-white rounded-2xl shadow-lg text-center space-y-4"
            >
              <p className="text-lg font-semibold text-gray-800">
                También podés contactarnos por WhatsApp
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/542245431701?text=Hola%2C%20me%20gustaria%20saber%20mas%20sobre%20el%20servicio."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full transition-all"
              >
                Abrir WhatsApp
              </motion.a>
            </motion.div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}
