 import { Code, User, Joystick, Heart, Lightbulb } from "lucide-react";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import ProfilePic from "./Anthony.jpg";
// pon tu foto real aquí
import "./GameEmbed.css";

export const AboutAnthony = () => {
  return (
    <>
      <Navbar />
      <section id="about" className="py-24 px-4 relative">
        <ThemeToggle />
        <StarBackground />

        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Sobre <span className="text-primary">Anthony</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda */}
            <div className="space-y-6">
              {/* Foto */}
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg card-hover">
                  <img
                    src={ProfilePic}
                    alt="Foto de perfil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-center md:text-left">
                Desarrollador Full Stack | Entusiasta de Tecnología
              </h3>

              <p className="text-muted-foreground text-center md:text-left">
                Soy un desarrollador full stack con experiencia en frontend y backend,
                capaz de crear aplicaciones web completas con tecnologías modernas.
                He trabajado en proyectos que van desde sitios web interactivos hasta
                plataformas complejas de gestión de datos, aplicando buenas prácticas
                y metodologías ágiles.
              </p>

              <p className="text-muted-foreground text-center md:text-left">
                Me destaco por mi habilidad para trabajar en equipo, liderar proyectos
                y colaborar con otros desarrolladores y diseñadores para cumplir
                objetivos comunes. También tengo experiencia mentorando a compañeros
                en la implementación de soluciones técnicas, fomentando aprendizaje
                y crecimiento continuo.
              </p>

              {/* Hobbies */}
              <div className="gradient-border p-6 card-hover card-equal">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Hobbies</h4>
                    <p className="text-muted-foreground">
                      Disfruto de los videojuegos, el fútbol y la música.
                      Estas actividades fortalecen mi creatividad, estrategia
                      y trabajo en equipo, inspirándome en mis proyectos
                      tecnológicos y personales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="grid grid-cols-1 gap-6 md:mt-6">
              {/* Habilidades Técnicas */}
              <div className="gradient-border p-6 card-hover right-col-fix">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Habilidades Técnicas</h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4">
                      <li>Frontend: React, Next.js, HTML, CSS, JavaScript</li>
                      <li>Backend: Node.js, NestJS, APIs REST</li>
                      <li>Bases de Datos: PostgreSQL, MySQL</li>
                      <li>Herramientas: Git, Docker, Postman, GitHub, Figma, VS Code</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Habilidades Blandas */}
              <div className="gradient-border p-6 card-hover card-equal">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Habilidades Blandas</h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4">
                      <li>Trabajo en equipo y colaboración</li>
                      <li>Liderazgo en proyectos</li>
                      <li>Comunicación efectiva</li>
                      <li>Resolución de problemas</li>
                      <li>Gestión del tiempo</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Experiencia */}
              <div className="gradient-border p-6 card-hover card-equal">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Experiencia Destacada</h4>
                    <p className="text-muted-foreground">
                      He participado en el desarrollo de múltiples proyectos web y móviles,
                      desde conceptualización y diseño hasta implementación y despliegue.
                      He liderado equipos pequeños, coordinando tareas, revisando código
                      y asegurando la calidad de los entregables. También colaboro con
                      clientes y equipos multidisciplinarios para definir requerimientos
                      y lograr objetivos alineados al negocio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel del juego */}
            <div className="gradient-border p-6 card-hover md:col-span-2 w-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Joystick className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left w-full">
                  <h4 className="font-semibold text-lg mb-2">Mi Juego Desarrollado</h4>
                  <p className="text-muted-foreground mb-4">
                    ¡Echa un vistazo a uno de mis proyectos! Este juego es una muestra
                    de mis habilidades en desarrollo interactivo, programación de lógica
                    y diseño de experiencias.
                  </p>

                  <div className="media-card">
                    <div className="itch-container">
                      <iframe
                        src="https://itch.io/embed-upload/13627977?color=333333"
                        title="WorldWar 3 2099 - itch.io embed"
                        loading="lazy"
                        allow="autoplay; fullscreen; gamepad; xr-spatial-tracking"
                        allowFullScreen
                      >
                        <a href="https://littlepuppet.itch.io/worldwar-3-2099">
                          Jugar WorldWar 3 2099 en itch.io
                        </a>
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones finales */}
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <a href="https://www.facebook.com/Anthonypunina04?locale=es_LA" className="cosmic-button">
                Contacto
              </a>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
