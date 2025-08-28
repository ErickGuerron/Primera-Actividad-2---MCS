"use client";

import { useState } from "react";
import { User, Heart, Lightbulb, X } from "lucide-react";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../../components/Navbar";
import XaImage from "./xabier.png"; 
import { ProjectRK4 } from "./ProjectRK4"; // Calculadora RK4

export const AboutXabier = () => {
  const [open, setOpen] = useState(false); // Estado del modal

  return (
    <>
      <Navbar />
      <section id="about" className="py-24 px-4 relative">
        <ThemeToggle /> 
        <StarBackground />

         <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Sobre <span className="text-primary">Xabier</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda: foto y descripción */}
            <div className="space-y-6">
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg card-hover">
                  <img
                    src={XaImage}
                    alt="Foto de Xabier"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-center md:text-left">
                UI/UX Designer en formación
              </h3>

              <p className="text-muted-foreground text-center md:text-left">
                Soy un diseñador enfocado en la experiencia del usuario y la
                creación de interfaces atractivas e intuitivas. Mi objetivo es
                combinar creatividad y funcionalidad para lograr productos que
                no solo se vean bien, sino que también sean fáciles de usar.
              </p>

              {/* Intereses personales */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Mis Hobbies</h4>
                    <p className="text-muted-foreground">
                      Me apasiona el diseño gráfico, explorar nuevas tendencias
                      en UI/UX, ilustración digital y también disfruto de la
                      música y los videojuegos como fuentes de inspiración.
                    </p>
                  </div>
                </div>
              </div>

              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Futuro</h4>
                    <p className="text-muted-foreground">
                      Quiero enfocarme en el diseño de experiencias digitales,
                      aplicando metodologías centradas en el usuario y explorando
                      tecnologías emergentes como el diseño para AR/VR y la
                      accesibilidad digital.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contacto y CV con modal */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                <button
                  onClick={() => setOpen(true)}
                  className="cosmic-button"
                >
                  Contacto
                </button>
                <a
                  href="/cv/cv_xabier.pdf"
                  download
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Descargar CV
                </a>
              </div>

              {/* Redes Profesionales */}
              <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Columna derecha: habilidades, stack y proyectos */}
            <div className="grid grid-cols-1 gap-6">
              {/* Habilidades */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Habilidades Clave</h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4">
                      <li>Diseño UI/UX en Figma</li>
                      <li>Prototipado interactivo</li>
                      <li>Diseño responsivo y accesibilidad</li>
                      <li>Ilustración digital y branding</li>
                      <li>HTML, CSS y conocimientos básicos de React</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Stack Tecnológico */}
              <div className="gradient-border p-6 card-hover">
                <h4 className="font-semibold text-lg mb-4">Stack Tecnológico</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Figma</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">React</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Tailwind CSS</span> 
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Photoshop</span> 
                </div>
              </div>

              {/* Proyecto Personal - Calculadora RK4 */}
              <ProjectRK4 />

              {/* Otros Proyectos Destacados */}
              <div className="gradient-border p-6 card-hover">
                <h4 className="font-semibold text-lg mb-4">Proyectos Destacados</h4>
                <ul className="list-disc list-inside text-muted-foreground pl-4">
                  <li>Dashboard interactivo de gestión de seguros (React + Tailwind)</li>
                  <li>Prototipo de app móvil para seguimiento de hábitos (Figma)</li>
                  <li>Ilustraciones digitales y branding personal (Behance)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de contacto */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="gradient-border bg-card p-6 rounded-2xl shadow-xl relative max-w-md w-full card-hover">
            {/* Botón cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-primary"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Contenido modal */}
            <h2 className="text-2xl font-bold mb-4 text-center">Contacto</h2>
            <p className="text-muted-foreground text-center mb-6">
              Aquí tienes mis formas de contactarme:
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:xabier@gmail.com"
                className="cosmic-button text-center"
              >
                📧 Correo
              </a>
              <a
                href="https://www.facebook.com/xabier.profile"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button text-center"
              >
                🌐 Facebook
              </a>
              <a
                href="https://wa.me/593999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button text-center"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
