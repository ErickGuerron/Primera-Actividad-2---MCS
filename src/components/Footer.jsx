 import { ArrowUp, Code } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} DevStorm. Todos los derechos reservados.
      </p>

      <div className="flex items-center gap-4">
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>

        <span className="text-sm text-muted-foreground flex items-center gap-1">
          Diseñado con <Code className="h-4 w-4 text-primary" /> por nuestro equipo
        </span>
      </div>
    </footer>
  );
};
