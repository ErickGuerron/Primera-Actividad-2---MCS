// Después (si, por ejemplo, usas 'Activity' en lugar de 'Football')
import { Code, User, Joystick, Heart, Music, Activity, Lightbulb } from "lucide-react";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import {Navbar} from "@/components/Navbar";


export const AboutSantiago = () => {
  return (
        <><Navbar /><section id="about" className="relative py-2 px-4 bg-gray-900 text-white min-h-screen">


          {/* Theme Toggle y fondo de estrellas */}
          <ThemeToggle />
          <StarBackground />

          <div className="container mx-auto max-w-6xl pt-28">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                  Sobre <span className="text-primary">Santiago</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                  {/* Columna izquierda: foto y descripción */}
                  <div className="space-y-6">
                      <div className="flex justify-center mb-6">
                          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg card-hover">
                              <img
                                  src="https://via.placeholder.com/192"
                                  alt="Foto de perfil"
                                  className="w-full h-full object-cover" />
                          </div>
                      </div>

                      <h3 className="text-2xl font-semibold text-center md:text-left">
                          Desarrollador Backend En Proceso
                      </h3>

                      <p className="text-gray-300 text-center md:text-left">
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
                                  <p className="text-gray-300">
                                    Tengo diversos tipos de hobbies aunque para mis los mas importantes y los cuales los realizo a diario serian:
                                    escuchar todo tipo de musica ya que me ayuda a realizar cualquier otra actividad con energia y pasion, tambien
                                    esta el de jugar distintos videojuegos que puedan brindarme horas de diversion y por ultimo seria el de ver series
                                    de television o anime.
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
                                  <p className="text-gray-300">
                                    Para el futuro y mediante se desarrolle la carrera quiero enfocarme principalmente en el desarrollo
                                    web aunque tambien me llama la antencion el ambito de la ciberseguridad para lo cual he decidido no
                                    descuidar mis estudios y enfocarme 100% en lo que me apasiona.
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* Contacto y CV */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                          <a href="#contact" className="cosmic-button">Contacto</a>
                          <a
                              href="/ruta/a/tu_cv.pdf"
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
                                  <ul className="list-disc list-inside text-gray-300 pl-4">
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
                                  <p className="text-gray-300">
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
                                  <p className="text-gray-300 mb-4">
                                      Este proyecto de juego demuestra mis habilidades en desarrollo interactivo, lógica de programación y diseño de experiencias divertidas y envolventes.
                                  </p>
                                  {/* <div className="aspect-video w-full rounded-md overflow-hidden bg-gray-800 flex items-center justify-center game-embed">
                                      <iframe
                                          frameBorder="0"
                                          src="https://itch.io/embed-upload/13627977?color=333333"
                                          allowFullScreen
                                          allow="autoplay; fullscreen; gamepad; xr-spatial-tracking"
                                      >
                                          <a href="https://littlepuppet.itch.io/worldwar-3-2099">Play WorldWar 3 2099 on itch.io</a>
                                      </iframe>
                                  </div> */}
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
      </section></>
  );
};
