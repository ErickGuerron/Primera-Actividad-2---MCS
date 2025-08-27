 import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-gradient-to-b from-gray-900/5 to-transparent">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">DevStorm</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna de presentación */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Somos un equipo multidisciplinario de desarrollo
            </h3>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              En DevStorm, combinamos creatividad y tecnología para transformar ideas en software funcional. 
              Nuestro equipo está compuesto por desarrolladores, diseñadores y especialistas en tecnología que buscan 
              ofrecer soluciones innovadoras y de calidad.
            </p>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Nos apasiona explorar nuevas tecnologías, crear experiencias interactivas y garantizar que cada proyecto 
              cumpla con altos estándares de diseño, usabilidad y rendimiento.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="cosmic-button bg-primary text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Contáctanos
              </a>
              <a
                href="/ruta/a/DevStormCV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-medium"
                download
              >
                Descargar Presentación
              </a>
            </div>
          </div>

          {/* Columna de servicios / habilidades */}
          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Desarrollo Web",
                text: "Creamos sitios web y aplicaciones con frameworks modernos, asegurando rendimiento y escalabilidad.",
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "Diseño UI/UX",
                text: "Diseñamos interfaces intuitivas y experiencias de usuario atractivas para cada proyecto.",
              },
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Gestión de Proyectos",
                text: "Lideramos proyectos de principio a fin usando metodologías ágiles, asegurando cumplimiento y calidad.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl hover:translate-y-1 transition-transform duration-300 flex items-start gap-4 group"
              >
                <div className="p-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 group-hover:from-primary group-hover:to-secondary transition-colors duration-500">
                  {service.icon}
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg md:text-xl mb-1">{service.title}</h4>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
