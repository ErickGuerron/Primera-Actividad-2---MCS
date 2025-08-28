import { useState } from "react";
import { Briefcase, Code, User, Joystick, Heart, Lightbulb, X } from "lucide-react"; 
import { Navbar } from "../../components/Navbar";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "../../components/StarBackground";
import MabeImage from "./mabe.jpg"; 

export const AboutSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar />
      <section id="about" className="py-24 px-4 relative">
        <ThemeToggle />
        <StarBackground />

        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Sobre <span className="text-primary">Mabe</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Columna de Contenido Personal */}
            <div className="space-y-6">
              {/* Foto de Perfil */}
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <img
                    src={MabeImage}
                    alt="Foto de perfil"
                    className="w-full h-full object-cover filter brightness-105 contrast-110 transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-center md:text-left">
                Desarrolladora enfocada en soluciones innovadoras
              </h3>

              <p className="text-muted-foreground text-center md:text-left">
                Me considero una desarrolladora apasionada por la creación de sistemas que mejoren, faciliten, organicen y protejan la vida de sus usuarios.
              </p>

              {/* Hobbies e Intereses */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Hobbies e Intereses</h4>
                    <p className="text-muted-foreground">
                      Fuera del desarrollo y diseño de software, disfruto de la lectura, la cocina, el tejido, la danza y la música, así como la exploración de nuevas tecnologías y el aprendizaje de idiomas.
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
                    <h4 className="font-semibold text-lg">Conocimientos en la Carrera</h4>
                    <p className="text-muted-foreground">
                      Durante el año y medio que he cursado la carrera de software me he interesado por desarrollo web, algoritmia en Java, Python y TypeScript, interfaces gráficas centradas en el usuario, manejo de bases de datos, mantenimiento y gestión de redes.
                      Siempre aplico buenas prácticas y metodologías ágiles en mis proyectos.
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
                    <h4 className="font-semibold text-lg">Área de Interés en Tecnología</h4>
                    <p className="text-muted-foreground">
                      Espero formar parte de equipos en IoT, ciberseguridad, criminalística digital y desarrollo asistido por LLM e inteligencia artificial.
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
                  href="/cv/cv_Mabe.pdf"
                  download
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
                      <li>Frontend: React, Angular, HTML, CSS, JavaScript</li>
                      <li>Backend: Nest.js, Express, Python, Flask</li>
                      <li>Bases de Datos: PostgreSQL, MySQL</li>
                      <li>Herramientas: Git, Docker</li>
                      <li>Metodologías: Scrum</li>
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
                    <h4 className="font-semibold text-lg">Cursos y Preparaciones</h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4">
                      <li>SQL práctico (Postgrest)</li>
                      <li>Angular desde cero</li>
                      <li>React desde cero</li>
                      <li>Nivel B2 en Inglés</li>
                      <li>Topik 2 en Coreano</li>
                      <li>Preparación en idiomas</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Juego */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Joystick className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left w-full">
                    <h4 className="font-semibold text-lg mb-2">Mi Juego Desarrollado</h4>
                    <p className="text-muted-foreground mb-4">
                      El juego desarrollado es "Yeyo Baila",
                      un juego web interactivo donde los jugadores controlan a Choi Yeonjun, bailarin principal de Tomorrow by Together,
                      dentro de la dinamica del juego el personaje debe bailar y esquivar obstáculos en un entorno dinámico.
                      El objetivo es acumular puntos bailando al ritmo de la música mediante el uso de las teclas de flecha para moverse y saltar.
                      </p>
                    {/* Contenedor de juego estilo pantalla móvil */}
                    <div className="w-full max-w-xs mx-auto aspect-[9/16] rounded-md overflow-hidden bg-gray-900 shadow-lg">
                      <iframe
                        src="/juegoMabe/yeyoBaila.html"  
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                        title="Yeyo Baila con Carriles"
                        className="rounded-md"
                      />
                    </div>
                  </div>
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
                href="mailto:patylo1970maria@gmail.com"
                className="cosmic-button text-center"
              >
                Correo
              </a>
              <a
                href="https://www.instagram.com/the_mar_show/"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button text-center"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/593963511680"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button text-center"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};