 import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/LogoBlanco.png";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", id: "hero" },
  { name: "Equipo", id: "team" },
  { name: "Proyectos", id: "projects" },
  { name: "Contáctanos", id: "contact" },
];

export const Navbar = ({ theme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  // Fondo y texto dinámicos según tema y scroll
  const getBgClass = () => {
    if (isScrolled) return theme === "light" ? "bg-white/90 shadow-md backdrop-blur-md" : "bg-black/70 shadow-md backdrop-blur-md";
    return "py-5"; // sin scroll
  };

  const getTextClass = () => (theme === "light" ? "text-gray-900" : "text-white");

  return (
    <nav className={cn("fixed w-full z-50 transition-all duration-300", getBgClass())}>
      <div className="container flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="DevStorm Logo" className="h-16 w-auto" />
          <span className="text-xl font-bold text-primary">DevStorm</span>
        </Link>

        {/* Desktop Nav + ThemeToggle */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, key) => (
            <button
              key={key}
              onClick={() => handleNavClick(item.id)}
              className={cn(getTextClass(), "hover:text-primary transition-colors duration-300")}
            >
              {item.name}
            </button>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn("md:hidden p-2 z-50", getTextClass())}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed top-0 left-0 w-full h-full backdrop-blur-md z-40 flex flex-col items-center justify-center transition-transform duration-500 md:hidden",
            isMenuOpen ? "translate-x-0" : "-translate-x-full",
            theme === "light" ? "bg-white/90" : "bg-black/90"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl font-semibold items-center">
            {navItems.map((item, key) => (
              <button
                key={key}
                onClick={() => handleNavClick(item.id)}
                className={cn(getTextClass(), "hover:text-primary transition-colors duration-300")}
              >
                {item.name}
              </button>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
