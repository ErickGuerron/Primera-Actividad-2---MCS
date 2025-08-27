 import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "Una landing page atractiva desarrollada con React y TailwindCSS.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Dashboard interactivo para análisis de datos con visualizaciones y filtros avanzados.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Plataforma de e-commerce completa con autenticación de usuarios y procesamiento de pagos.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-gradient-to-b from-gray-900/5 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Proyectos <span className="text-primary">Destacados</span>
        </h2>

        <p className="text-center text-withe-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Estos son algunos de los proyectos que hemos desarrollado en DevStorm. 
          Cada proyecto fue cuidadosamente diseñado y ejecutado por nuestro equipo 
          para garantizar calidad, rendimiento y experiencia de usuario.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-52 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-primary/50 to-secondary/50 text-white shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm md:text-base">{project.description}</p>

                <div className="flex justify-between items-center mt-2">
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-primary rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Ver nuestro GitHub <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};
