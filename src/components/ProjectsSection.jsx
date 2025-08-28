 import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Seguro from "../assets/Seguro.png";
import Edu from "../assets/Plataforma.jpg";
import Tamagotchi from "../assets/Tamagotchi.png";

const projects = [
  {
    id: 1,
    title: "Plataforma de Seguros (Salud & Vida)",
    description:
      "Sistema integral para la gestión de seguros médicos y de vida: cotizaciones, pólizas, siniestros y paneles de control. Frontend en React con UI responsiva y backend en NestJS con API REST y autenticación JWT. Persistencia en MySQL.",
    image: Seguro,
    tags: ["React", "NestJS", "MySQL", "REST API", "JWT"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Plataforma Educativa (tipo FISEI)",
    description:
      "Aplicación académica con roles de administrador, docente y estudiante. CRUD de cursos, matrículas, calificaciones y entrega de tareas en PDF. Inicio de sesión con Azure AD, backend en PHP sobre XAMPP y base de datos MySQL.",
    image: Edu,
    tags: ["PHP", "MySQL", "XAMPP", "Azure AD", "CRUD"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Tamagotchi Game (Estructuras de Datos)",
    description:
      "Videojuego tipo Tamagotchi desarrollado en Unity. Lógica basada en estructuras de datos (matrices para mapas/estados) y una máquina de estados finitos para comportamientos. Integración de UI, animaciones y guardado de progreso.",
    image: Tamagotchi,
    tags: ["Unity", "C#", "Estructuras de Datos", "Matrices", "FSM"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 relative bg-gradient-to-b from-gray-900/10 to-transparent"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Proyectos <span className="text-primary">Destacados</span>
        </h2>

        <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Estos son algunos de los proyectos que hemos desarrollado en DevStorm.
          Cada proyecto fue cuidadosamente diseñado y ejecutado por nuestro equipo
          para garantizar calidad, rendimiento y una excelente experiencia de usuario.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-gray-800/30 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-56 overflow-hidden rounded-t-xl relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/60 to-secondary/60 text-white shadow-sm transition-all duration-300 hover:from-primary/80 hover:to-secondary/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base">
                  {project.description}
                </p>

                <div className="flex justify-start items-center mt-4 space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                    aria-label={`Ver demo de ${project.title}`}
                    title="Ver demo"
                  >
                    <ExternalLink size={22} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                    aria-label={`Ver código en GitHub de ${project.title}`}
                    title="GitHub"
                  >
                    <Github size={22} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button inline-flex items-center gap-3 px-8 py-3 font-semibold text-white bg-primary rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/machadop1407"
          >
            Ver nuestro GitHub <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
