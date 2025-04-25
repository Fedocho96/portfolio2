"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, MousePointer } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  const phrases = ["Desarrollo Web", "Diseño UI/UX", "E-commerce", "Marketing Digital"]
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        // Current phrase
        const phrase = phrases[currentPhrase]

        if (isDeleting) {
          // Remove characters
          setCurrentText(phrase.substring(0, currentText.length - 1))
        } else {
          // Add characters
          setCurrentText(phrase.substring(0, currentText.length + 1))
        }

        // If completed writing the phrase
        if (!isDeleting && currentText === phrase) {
          // Wait a bit then start deleting
          setTimeout(() => setIsDeleting(true), 1500)
        }
        // If completed deleting the phrase
        else if (isDeleting && currentText === "") {
          setIsDeleting(false)
          // Move to next phrase
          setCurrentPhrase((currentPhrase + 1) % phrases.length)
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentPhrase, currentText, isDeleting, phrases])

  // Floating animation variants
  const floatingAnimation = {
    initial: (custom: any) => ({
      y: 0,
      x: custom.x || 0,
      opacity: 0,
    }),
    animate: (custom: any) => ({
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: custom.delay || 0,
      },
    }),
    float: {
      y: [0, -10, 0, 10, 0],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror" as const,
        ease: "easeInOut",
      },
    },
  }

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20 bg-gradient-to-b from-white via-indigo-50/30 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmOGY4ZjgiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6TTAgMGgzMHYzMEgweiIgZmlsbD0iI2YwZjBmMCIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <motion.span
                className="text-xs text-indigo-600 font-mono  mb-4 bg-indigo-50 px-3 py-1 rounded-full inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                &lt;desarrollo web&gt;
              </motion.span>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
                <div className="overflow-hidden">
                  <motion.div initial={{ y: 100 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
                    Creando Experiencias
                  </motion.div>
                </div>
                <div className="overflow-hidden">
                  <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                    className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                  >
                    Digitales
                  </motion.div>
                </div>
              </h1>

              <motion.div
                className="text-xl md:text-2xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Especializado en <span className="text-indigo-600 font-medium">{currentText}</span>
                <span className="animate-blink">|</span>
              </motion.div>

              <motion.p
                className="text-gray-600 mb-8 max-w-md text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Desarrollamos landing pages y comercios virtuales optimizados. 
                Creamos experiencias web fáciles de usar, rápidas y funcionales para que puedas enfocarte en lo que mejor haces: hacer crecer tu negocio
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
                >
                  Contacto <ArrowRight size={16} />
                </Link>

                <Link
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 border border-gray-300 rounded-md hover:border-indigo-500 hover:text-indigo-600 transition-colors shadow-sm"
                >
                  Ver Trabajos
                </Link>
              </motion.div>

  
            </motion.div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative h-[400px] md:h-[500px]">
              {/* 3D-like floating elements */}
              <motion.div
                className="absolute top-0 right-0 w-64 h-64 bg-white rounded-lg overflow-hidden shadow-xl border border-gray-200"
                custom={{ delay: 0, x: 100 }}
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                whileInView="float"
              >
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Vista previa del proyecto"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/30 to-transparent"></div>
              </motion.div>

              <motion.div
                className="absolute top-1/4 left-0 w-48 h-48 bg-white rounded-lg overflow-hidden shadow-xl border border-gray-200"
                custom={{ delay: 0.2, x: -100 }}
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                whileInView="float"
              >
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Vista previa del proyecto"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/30 to-transparent"></div>
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-1/4 w-56 h-56 bg-white rounded-lg overflow-hidden shadow-xl border border-gray-200"
                custom={{ delay: 0.4, x: 0 }}
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                whileInView="float"
              >
                <Image
                  src="/placeholder.svg?height=350&width=350"
                  alt="Vista previa del proyecto"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-500/30 to-transparent"></div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-blue-500/30 backdrop-blur-sm"
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  y: [0, -15, 0, 15, 0],
                  transition: {
                    scale: { duration: 0.5, delay: 0.6 },
                    y: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  },
                }}
              />

              <motion.div
                className="absolute bottom-1/4 right-0 w-16 h-16 rounded-full border-2 border-indigo-500/20"
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  y: [0, 20, 0, -20, 0],
                  transition: {
                    scale: { duration: 0.5, delay: 0.7 },
                    y: { duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  },
                }}
              />

              <motion.div
                className="absolute top-1/3 left-1/3 w-4 h-4 rounded-full bg-purple-500/30"
                initial={{ scale: 0 }}
                animate={{
                  scale: 1,
                  y: [0, 10, 0, -10, 0],
                  transition: {
                    scale: { duration: 0.5, delay: 0.8 },
                    y: { duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
