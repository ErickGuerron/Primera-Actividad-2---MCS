"use client";

import { Briefcase, Code, User, Joystick, Heart, Lightbulb, X } from "lucide-react";
import { Navbar } from "../../components/Navbar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "../../components/StarBackground";
import MateoImage from "./mateo.jpg";
import { useState } from "react";

import PianoGame from "./Piano.jsx";
import cvFile from "./cv.pdf";
import { useEffect } from "react";

export const AboutMateo = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Navbar />
      <section id="about" className="py-24 px-4 relative">
        <ThemeToggle />
        <StarBackground />

        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">Mateo</span>
          </h2>

          {/* Foto de Perfil */}
          <div className="flex justify-center mb-6">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src={MateoImage}
                alt="Foto de perfil"
                className="w-full h-full object-cover filter brightness-105 contrast-110 transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-center md:text-left">
            Desarrollador de software
          </h3>

          <p className="text-muted-foreground text-center md:text-left">
            Soy Desarrollador con gran interés por Implementación de software en
            aplicaciones y tecnología. Me considero una persona curiosa,
            responsable y creativa, siempre buscando aprender y aplicar mis
            conocimientos en proyectos que representen un reto.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Columna de Contenido Personal */}
            <div className="space-y-6">
              {/* Hobbies e Intereses */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Hobbies e Intereses
                    </h4>
                    <p className="text-muted-foreground">
                      Aparte del ámbito académico y profesional disfruto de la
                      música, especialmente tocar la guitarra. También me gusta
                      aprender idiomas, practicar deporte y compartir tiempo con
                      mis amigos. Me motiva mejorar continuamente tanto en lo
                      profesional como en lo personal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conocimientos sobre la carrera */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Conocimientos en la Carrera
                    </h4>
                    <p className="text-muted-foreground">
                      Durante mi formación he desarrollado habilidades en
                      programación, estructuras de datos, bases de datos,
                      desarrollo web, metodologías ágiles y diseño de software.
                      También tengo nociones en pruebas de software,
                      mantenimiento y uso de frameworks modernos que permiten
                      construir soluciones prácticas y escalables.
                    </p>
                  </div>
                </div>
              </div>

              {/* Área de Interés en Tecnología */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Área de Interés en Tecnología
                    </h4>
                    <p className="text-muted-foreground">
                      Me apasiona el desarrollo web y móvil, la inteligencia
                      artificial y el análisis de datos y ciberseguridad. También
                      me interesa la creación de videojuegos y explorar nuevas
                      tecnologías que mejoren la experiencia de usuario y
                      optimicen procesos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Botones finales al pie */}
              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <button
                  onClick={() => setOpen(true)}
                  className="cosmic-button"
                >
                  Contacto
                </button>
                <a
                  href={cvFile} download
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Descargar CV
                </a>
              </div>
            </div>

            {/* Columna de Habilidades y Proyectos */}
            <div className="grid grid-cols-1 gap-6">
              {/* Habilidades */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Habilidades Clave</h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4">
                      <li>Frontend: HTML5, CSS3, JavaScript, React, Material UI</li>
                      <li>Backend: Node.js, Express.js, PHP</li>
                      <li>Bases de Datos: MySQL, MongoDB</li>
                      <li>Herramientas: Git, GitHub, AWS (EC2, S3), Figmar</li>
                      <li>
                        Idiomas: Español (Nativo), Inglés (Avanzado C1), Alemán
                        (Básico A1)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cursos */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      Cursos y Preparaciones
                    </h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4">
                      <li>
                        Certificación de Suficiencia en el Idioma Inglés (C1+)
                      </li>
                      <li>Programación desde cero - EGG</li>
                      <li>TOEFL Junior Standard Test</li>
                      <li>Nivel A1 de Alemán</li>
                      <li>
                        Generative AI for Software Developers - IBM/Coursera
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Juego */}
            <div className="md:col-span-2 gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 flex-col md:flex-row">
                <div className="p-3 rounded-full bg-primary/10 self-start">
                  <Joystick className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left w-full">
                  <h4 className="font-semibold text-lg mb-2">
                    Mi Juego Desarrollado - 🎹 Key Master 🎶
                  </h4>
                  <p className="text-muted-foreground mb-4">
                    Revive la nostalgia de clásicos como Guitar Hero en este juego de ritmo. Pon a prueba tu memoria, tus reflejos y disfruta creando música de forma divertida.
                  </p>
                  <PianoGame />
                  
                </div>
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
                href="mailto:mateo@gmail.com"
                className="cosmic-button text-center"
              >
                📧 Correo
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100034999065119"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button text-center"
              >
                🌐 Facebook
              </a>
              <a
                href="https://wa.me/593999049301"
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
