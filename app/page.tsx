import Link from "next/link";

import HeroSection from "../components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSections";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-800">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-zinc-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            <img src="Rowebslogo2.png" alt="" className="w-max max-w-20 lg:max-w-30 " />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#services"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Sobre Mí
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-blue-600 transition-colors"
            >
              Contacto
            </Link>
          </nav>
          <Link
            href="#contact"
            className="px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md"
          >
            Contrátame
          </Link>
        </div>
      </header>

      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-zinc-200 bg-white">
        <div className="container mx-auto px-4 text-center text-sm text-zinc-600">
          <p>
            © {new Date().getFullYear()} devfolio. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
