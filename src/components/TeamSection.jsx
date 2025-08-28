 import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import MabeImage from "../pages/mabe/mabe.jpg"; 
import SaImage from "../pages/santiago/santiago.png";
import ErickImage from "../pages/erick/erick.jpg";
import XabierImage from "../pages/xabier/xabier.png";
import MateoImage from "../pages/mateo/mateo.jpg";
import AnthonyImage from "../pages/anthony/Anthony.jpg";

export const TeamSection = () => {
  const navigate = useNavigate();

  const teamMembers = [
    { name: "Anthony", role: "Fullstack Developer", image: AnthonyImage, route: "/aboutAnthony" },
    { name: "Erick", role: "Fullstack Developer", image: ErickImage, route: "/aboutErick" },
    { name: "Xabier", role: "UI/UX Designer", image: XabierImage, route: "/aboutXabier" },
    { name: "Santiago", role: "Backend Developer", image: SaImage, route: "/aboutSantiago" },
    { name: "Mabe", role: "Frontend Developer", image: MabeImage, route: "/aboutMabe" },
    { name: "Mateo", role: "Fullstack Developer", image: MateoImage, route: "/aboutMateo" },
  ];

  return (
    <section id="team" className="py-24 px-6 relative bg-gradient-to-b from-secondary/5 via-secondary/20 to-secondary/5">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-12 text-center">
          Equipo de <span className="text-primary">Desarrollo</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              onClick={() => navigate(member.route)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group flex flex-col items-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer border border-white/20 hover:border-primary/50"
            >
              {/* Foto circular */}
              <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-primary shadow-lg group-hover:shadow-xl transition-all duration-500">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay con efecto */}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm transition-all duration-500 rounded-full">
                  <h4 className="text-white text-lg font-bold tracking-wide">{member.role}</h4>
                </div>
              </div>

              {/* Nombre con gradiente */}
              <h3 className="mt-6 text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-center tracking-wide">
                {member.name}
              </h3>
              
              {/* Rol siempre visible debajo */}
              <p className="mt-2 text-sm text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
