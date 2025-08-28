 import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import TeamImage from "../assets/team-photo.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center "
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* 👉 LADO IZQUIERDO: Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in block">Transformamos</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 block">
              ideas
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2 block">
              en software
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            Creamos experiencias digitales con tecnologías modernas.
            Especialistas en desarrollo web y móvil, construimos interfaces
            funcionales, rápidas y atractivas.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              Ver Proyectos
            </a>
          </div>
        </motion.div>

        {/* 👉 LADO DERECHO: Imagen grupal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <img
            src={TeamImage}
            alt="Equipo DevStorm"
            className="max-w-md w-full object-contain relative z-10 drop-shadow-2xl"
          />

          {/* Glow difuminado detrás */}
          <div className="absolute -inset-10 rounded-full bg-primary/20 blur-3xl z-0"></div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.div>
    </section>
  );
};
