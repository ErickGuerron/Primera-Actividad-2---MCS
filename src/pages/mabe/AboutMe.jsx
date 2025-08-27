import { Briefcase, Code, User, Joystick, Heart, Lightbulb } from "lucide-react"; // Importa iconos adicionales
import { Navbar } from "../../components/Navbar";
export const AboutSection = () => {
return (
  <>
    <Navbar />
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mí</span>
        </h2>
       

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna de Contenido Personal */}
          <div className="space-y-6">
            {/* Espacio para la foto */}
            <div className="flex justify-center mb-6">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg card-hover">
                {/* Reemplaza con tu imagen */}
                <img
                  src="https://via.placeholder.com/192" // URL de tu foto personal
                  alt="Foto de perfil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h3 className="text-2xl font-semibold text-center md:text-left">
              Desarrollador Apasionado y Explorador Tecnológico
            </h3>

            <p className="text-muted-foreground text-center md:text-left">
              Soy un entusiasta del desarrollo de software con un profundo interés en crear soluciones innovadoras y eficientes. Mi viaje en la tecnología me ha permitido explorar diversas áreas y consolidar una base sólida de conocimientos.
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
                    Fuera del código, disfruto explorando senderos con mi bicicleta 🚵, sumergiéndome en el universo de los videojuegos 🎮 y aprendiendo constantemente sobre nuevas tecnologías y sus aplicaciones. También me encanta la lectura y los desafíos de lógica.
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
                    Mi formación me ha dotado de una sólida comprensión en estructuras de datos, algoritmos, bases de datos (SQL y NoSQL), desarrollo web (frontend y backend) y principios de ingeniería de software. Siempre busco aplicar las mejores prácticas y metodologías ágiles en mis proyectos.
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
                    Actualmente, mi mayor interés reside en el desarrollo Fullstack con énfasis en React y Node.js, la arquitectura de microservicios, la computación en la nube (AWS/Azure) y la inteligencia artificial, especialmente en el ámbito del Machine Learning aplicado a la optimización de procesos.
                  </p>
                </div>
              </div>
            </div>


            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contact" className="cosmic-button">
                Contacto
              </a>
              <a
                href="/ruta/a/tu_cv.pdf" // Reemplaza con la ruta a tu CV
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
                    <li>Desarrollo Frontend: React, Next.js, HTML, CSS, JavaScript, Tailwind CSS</li>
                    <li>Desarrollo Backend: Node.js, Express, Python, Django/Flask</li>
                    <li>Bases de Datos: PostgreSQL, MongoDB, MySQL</li>
                    <li>Herramientas: Git, Docker, JIRA, Trello</li>
                    <li>Metodologías: Agile, Scrum</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cursos o Preparaciones */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cursos y Preparaciones</h4>
                  <ul className="list-disc list-inside text-muted-foreground pl-4">
                    <li>Certificación en Desarrollo Web Fullstack (Udemy/Platzi/etc.)</li>
                    <li>Curso Avanzado de React.js con Hooks y Context API</li>
                    <li>Introducción a la Nube con AWS/Azure</li>
                    <li>(Agrega aquí cualquier otro curso, diplomado o certificación relevante)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Espacio para incrustar un juego desarrollado */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Joystick className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left w-full">
                  <h4 className="font-semibold text-lg mb-2">Mi Juego Desarrollado</h4>
                  <p className="text-muted-foreground mb-4">
                    ¡Echa un vistazo a uno de mis pequeños proyectos de juego! Es una muestra de mis habilidades en desarrollo interactivo.
                  </p>
                  <div className="aspect-video w-full rounded-md overflow-hidden bg-gray-800 flex items-center justify-center">
                    {/* Reemplaza este iframe con el código para incrustar tu juego.
                        Puede ser de itch.io, GitHub Pages, o cualquier otra plataforma. */}
                    <iframe
                      src="https://itch.io/embed-upload/XXXXXXX?color=333333" // Reemplaza XXXXXXX con el ID de tu juego en itch.io o la URL de tu juego
                      width="100%"
                      height="300" // Ajusta la altura si es necesario
                      frameBorder="0"
                      allowFullScreen
                      loading="lazy"
                      className="rounded-md"
                      title="Mi Juego Interactivo"
                    >
                      <a href="https://example.itch.io/my-game">Jugar Mi Juego</a>
                    </iframe>
                    {/* Si no tienes un iframe, puedes poner un enlace a tu juego aquí: */}
                    {/* <a href="https://tu-juego.com" target="_blank" rel="noopener noreferrer" className="cosmic-button text-sm">
                      Jugar Ahora
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};