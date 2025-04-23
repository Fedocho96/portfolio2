"use client"

import { motion } from "framer-motion"
import { ArrowRight, Code, Globe, Smartphone, PenTool, Layers, CheckCircle2, Zap } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Desarrollo Web",
      description:
        "Sitios web personalizados construidos con tecnologías modernas para un rendimiento y experiencia de usuario óptimos.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Desarrollo Móvil",
      description:
        "Aplicaciones móviles nativas y multiplataforma que funcionan perfectamente en todos los dispositivos.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Aplicaciones Web",
      description: "Aplicaciones web escalables y robustas con autenticación segura y gestión de datos.",
    },
  ]

  const workingProcess = [
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Consulta y Requisitos",
      description: "Reunión inicial para entender tus necesidades, objetivos y visión del proyecto.",
      step: 1,
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Propuesta y Planificación",
      description: "Desarrollo de una propuesta detallada con alcance, cronograma y presupuesto.",
      step: 2,
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Diseño y Desarrollo",
      description: "Creación de diseños y desarrollo de funcionalidades según los requisitos establecidos.",
      step: 3,
    },
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Pruebas y Refinamiento",
      description: "Pruebas exhaustivas y ajustes para garantizar un producto final de alta calidad.",
      step: 4,
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lanzamiento y Soporte",
      description: "Implementación del proyecto y soporte continuo para asegurar su éxito a largo plazo.",
      step: 5,
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            className="inline-block text-sm font-semibold text-blue-600 mb-2 px-3 py-1 bg-blue-50 rounded-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            NUESTROS SERVICIOS
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Soluciones Digitales Completas
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Ofrecemos servicios integrales de desarrollo adaptados a tus necesidades específicas
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-70 -mr-10 -mt-10 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg flex items-center justify-center mb-6 shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-6 flex items-center text-blue-600 font-medium">
                  <span>Saber más</span>
                  <ArrowRight size={16} className="ml-2" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Working Process Section */}
        <motion.div
          className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 animate-gradient"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-tl from-indigo-100 to-transparent rounded-full opacity-70"></div>

          <div className="text-center mb-12 relative z-10">
            <span className="inline-block text-sm font-semibold text-indigo-600 mb-2 px-3 py-1 bg-indigo-50 rounded-full">
              METODOLOGÍA
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Nuestro Proceso de Trabajo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Un enfoque estructurado que garantiza resultados excepcionales y una experiencia de colaboración fluida.
            </p>
          </div>

          <div className="relative z-10">
            <div className="grid gap-8 md:grid-cols-5">
              {workingProcess.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-xl shadow-lg border border-indigo-100 h-full relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-100 to-transparent rounded-bl-full opacity-70 -mr-6 -mt-6"></div>

                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg flex items-center justify-center mb-4 shadow-md">
                      {step.icon}
                    </div>

                    <div className="absolute -right-2 top-2 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">
                      {step.step}
                    </div>

                    <h3 className="text-lg font-bold mb-3 text-gray-900 animate-floating-text">{step.title}</h3>

                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>

                  {index < workingProcess.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                      <ArrowRight size={20} className="text-indigo-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
