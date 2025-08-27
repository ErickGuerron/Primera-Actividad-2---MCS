import { ArrowDown } from "lucide-react";
import TeamImage from "../assets/team-photo.png"; 

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* 👉 LADO IZQUIERDO: Texto */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in">Transformamos</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1"> ideas</span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              en software
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
            Creamos experiencias digitales con tecnologías modernas.
            Especialistas en desarrollo web y móvil, construimos interfaces
            funcionales, rápidas y atractivas.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Ver Proyectos
            </a>
          </div>
        </div>

        {/* 👉 LADO DERECHO: Imagen grupal */}
        <div className="relative flex justify-center">
          <img
            src={TeamImage} // 👉 PNG sin fondo
            alt="Equipo DevStorm"
            className="max-w-md w-full object-contain relative z-10"
          />

          {/* Glow difuminado detrás */}
          <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl z-0"></div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
