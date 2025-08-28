// Después (si, por ejemplo, usas 'Activity' en lugar de 'Football')
"use client";
import { Code, User, Joystick, Heart, Music, Activity, Lightbulb, X } from "lucide-react";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "../../components/Navbar";
import SaImage from "./santiago.png";
import { useState } from "react";


export const AboutSantiago = () => {
  const [open, setOpen] = useState(false);
    return (
        <>
            <Navbar />
            <section id="about" className="py-24 px-4 relative">
              <ThemeToggle />
              <StarBackground /> 

          <div className="container mx-auto max-w-5xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Sobre <span className="text-primary">Santiago</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  {/* Columna izquierda: foto y descripción */}
                  <div className="space-y-6">
                      <div className="flex justify-center mb-6">
                          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg card-hover">
                              <img
                                  src={SaImage}
                                  alt="Foto de perfil"
                                  className="w-full h-full object-cover" />
                          </div>
                      </div>

                      <h3 className="text-2xl font-semibold text-center md:text-left">
                          Desarrollador Backend En Proceso
                      </h3>

                      <p className="text-muted-foreground text-center md:text-left">
                          Soy un desarrollador backend, aunque aun me queda un largo camino por recorrer quiero adquirir todos
                          los conocimientos que pueda ya sea en la universidad o por otros medios y asi seguir con la creacion
                          de mis proyectos o apoyar en la creacion de otros. 
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
                                    Tengo diversos tipos de hobbies aunque para mis los mas importantes y los cuales los realizo a diario serian:
                                    escuchar todo tipo de musica ya que me ayuda a realizar cualquier otra actividad con energia y pasion, tambien
                                    esta el de jugar distintos videojuegos que puedan brindarme horas de diversion y por ultimo seria el de ver 
                                    distintos partidos de futbol de cualquier parte del mundo.
                                  </p>
                              </div>
                          </div>
                      </div>

                      <div className="gradient-border p-6 card-hover">
                          <div className="flex items-start gap-4">
                              <div className="p-3 rounded-full bg-primary/10">
                                  <Activity className="h-6 w-6 text-primary" />
                              </div>
                              <div className="text-left">
                                  <h4 className="font-semibold text-lg">Futuro</h4>
                                  <p className="text-muted-foreground">
                                    Para el futuro y mediante se desarrolle la carrera quiero enfocarme principalmente en el desarrollo
                                    web aunque tambien me llama la antencion el ambito de la ciberseguridad para lo cual he decidido no
                                    descuidar mis estudios y enfocarme 100% en lo que me apasiona.
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
                </div>

                  {/* Columna derecha: habilidades y juego */}
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
                                      <li>Frontend: React, HTML, CSS, JavaScript</li>
                                      <li>Backend: Node.js, Nest.js, Express</li>
                                      <li>Bases de Datos: PostgreSQL, MySQL</li>
                                      <li>Herramientas: GitHub, Git, VS Community, VS Code</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      {/* Experiencia */}
                      <div className="gradient-border p-6 card-hover">
                          <div className="flex items-start gap-4">
                              <div className="p-3 rounded-full bg-primary/10">
                                  <Lightbulb className="h-6 w-6 text-primary" />
                              </div>
                              <div className="text-left">
                                  <h4 className="font-semibold text-lg">Experiencia</h4>
                                  <p className="text-muted-foreground">
                                    Tengo distinta experiencia en proyectos a mediana escala o diferentes tareas pequeñas que incluyan 
                                    desarrollo web ya sea en solitario o en grupos de trabajo.
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* Juegos */}
                      <div className="gradient-border p-6 card-hover">
                          <div className="flex items-start gap-4">
                              <div className="p-3 rounded-full bg-primary/10">
                                  <Joystick className="h-6 w-6 text-primary" />
                              </div>
                              <div className="text-left w-full">
                                  <h4 className="font-semibold text-lg mb-2">Mi Juego Desarrollado</h4>
                                 <p className="text-muted-foreground">
                                    El juego que yo he desarrollado es un clasico pegale al topo solo que incorporo escudos de clubes
                                    como si fueran los topos asi combinando mi carrera conjuntamente con mis hobbies que eran la musica,
                                    los videojuegos y el futbol.
                                  </p>
                                  <div className="w-full max-w-x mx-auto aspect-[9/16] rounded-md overflow-hidden bg-gray-900 shadow-lg">
                                    <iframe
                                        src="/juegoSantiago/whackAClub.html"  
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        allowFullScreen
                                        title="Whack-a-Club"
                                        className="rounded-lg"
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
                href="mailto:smora9480@gmail.com"
                className="cosmic-button text-center"
              >
                📧 Correo
              </a>
              <a
                href="https://www.facebook.com/santio.mora"
                target="_blank"
                rel="noopener noreferrer"
                className="cosmic-button text-center"
              >
                🌐 Facebook
              </a>
              <a
                href="https://wa.me/593983507919"
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
