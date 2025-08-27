 import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/LogoBlanco.png"; // 👈 importa tu logo

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "Equipo", href: "#team" },
  { name: "Proyectos", href: "#projects" },
  { name: "Contáctanos", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled ? "py-3 bg-black/70 backdrop-blur-md shadow-md" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* LOGO */}
        <a href="#hero" className="flex items-center space-x-2">
          <img
            src={Logo}
            alt="DevStorm Logo"
            className="h-16 w-auto"
          />
          <span className="text-xl font-bold text-primary">DevStorm</span>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* MOBILE MENU */}
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-transform duration-500 md:hidden",
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl font-semibold">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-white hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
