import { Code, User, Joystick, Heart, Lightbulb } from "lucide-react";
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { Navbar } from "@/components/Navbar";
import ImagenErick from "./erick.jpg";
import "./GameEmbed.css";

export const AboutErick = () => {
  return (
    <>
      <Navbar />
      <section id="about" className="py-24 px-4 relative">
        <ThemeToggle />
        <StarBackground />

        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Sobre <span className="text-primary"> Erick</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda */}
            <div className="space-y-6">
              {/* Foto */}
              <div className="flex justify-center mb-6">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg card-hover">
                  <img src={ImagenErick} alt="Foto de perfil" className="w-full h-full object-cover" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-center md:text-left">
                Desarrollador Dedicado y Explorador Tecnológico
              </h3>

              <p className="text-muted-foreground text-center md:text-left">
                Soy un desarrollador dedicado con un enfoque en la creación de soluciones prácticas e innovadoras.
                Mi curiosidad tecnológica me impulsa a explorar constantemente nuevas herramientas y tendencias,
                consolidando así una base sólida que combina experiencia y aprendizaje continuo. Mi objetivo es transformar
                ideas en proyectos funcionales que generen valor real y marquen la diferencia.
              </p>

              {/* Hobbies e Intereses */}
              <div className="gradient-border p-6 card-hover card-equal">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Hobbies e Intereses</h4>
                    <p className="text-muted-foreground">
                      En mi tiempo libre me gusta desconectar con buenas historias a través del anime y las
                      series de streaming, encontrar nuevos retos en el mundo de los videojuegos 🎮 y mantener
                      viva mi curiosidad explorando tecnologías emergentes. Estas pasiones no solo me divierten,
                      también inspiran mi forma de crear y aprender cada día.
                    </p>
                  </div>
                </div>
              </div>

              {/* Conocimientos sobre la carrera */}
              <div className="gradient-border p-6 card-hover card-equal">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Conocimientos en la Carrera</h4>
                    <p className="text-muted-foreground">
                      A lo largo de mi formación universitaria he fortalecido mis bases en áreas como bases de datos,
                      programación orientada a objetos, lógica de programación y estructuras de datos.
                      Estas asignaturas, junto con materias como modelamiento e ingeniería de software, me han permitido
                      aplicar herramientas tanto de frontend como de backend, consolidando una visión integral del desarrollo
                      de software y preparándome para afrontar nuevos retos tecnológicos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna derecha */}
            <div className="grid grid-cols-1 gap-6 md:mt-6">
              {/* Habilidades Clave */}
              <div className="gradient-border p-6 card-hover right-col-fix">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Habilidades Clave</h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4">
                      <li>Desarrollo Frontend: Angular, Laravel, HTML, CSS, JavaScript, Tailwind CSS</li>
                      <li>Desarrollo Backend: Nest.js, Laravel</li>
                      <li>Bases de Datos: PostgreSQL, MongoDB, MySQL</li>
                      <li>Herramientas: Git, Docker, Postman, GitHub</li>
                      <li>Metodologías: Agile, Scrum</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Cursos y Preparaciones */}
              <div className="gradient-border p-6 card-hover card-equal">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">Cursos y Preparaciones</h4>
                    <ul className="list-disc list-inside text-muted-foreground pl-4">
                      <li>Certificación en  Azure AI Fundamentals (Microsoft)</li>
                      <li>Curso de Angular: De cero a Experto</li>
                      <li>Curso de PWA - Aplicaciones Web Progresivas</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Área de Interés en Tecnología */}
              <div className="gradient-border p-6 card-hover card-equal">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left w-full">
                    <h4 className="font-semibold text-lg">Área de Interés en Tecnología</h4>
                    <p className="text-muted-foreground">
                      Al culminar mi formación profesional, me interesa crecer en roles que me permitan aplicar y expandir mis conocimientos.
                      Entre los puestos que más me atraen se encuentran el de desarrollador web fullstack, desarrollador backend, ingeniero en
                      inteligencia artificial y desarrollador de videojuegos, áreas en las que puedo combinar mi dedicación, creatividad y pasión
                      por la tecnología para aportar soluciones innovadoras.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel del juego: ocupa ambas columnas */}
            <div className="gradient-border p-6 card-hover md:col-span-2 w-full">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Joystick className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left w-full">
                  <h4 className="font-semibold text-lg mb-2">Mi Juego Desarrollado</h4>
                  <p className="text-muted-foreground mb-4">
                    ¡Echa un vistazo a uno de mis pequeños proyectos de juego! Es una muestra de mis habilidades en desarrollo interactivo.
                  </p>

                  <div className="media-card">
                    <div className="itch-container">
                      <iframe
                        src="https://itch.io/embed-upload/12440637?color=333333"
                        title="WorldWar 3 2099 - itch.io embed"
                        loading="lazy"
                        allow="autoplay; fullscreen; gamepad; xr-spatial-tracking"
                        allowFullScreen
                      >
                        <a href="https://littlepuppet.itch.io/worldwar-3-2099">
                          Play Little Puppet on itch.io
                        </a>
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones finales al pie */}
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-6 justify-center">
              <a href="https://www.facebook.com/erick.guerron.1" className="cosmic-button">
                Contacto
              </a>
              <a
                href="/ruta/a/tu_cv.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
