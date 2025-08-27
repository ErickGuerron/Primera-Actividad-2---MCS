 import { useNavigate } from "react-router-dom";
 import MabeImage from "../pages/mabe/mabe.jpg"; 

export const TeamSection = () => {
  const navigate = useNavigate();

  const teamMembers = [
    { name: "Anthony", role: "Fullstack Developer", image: "https://via.placeholder.com/200", route: "/aboutAnthony" },
    { name: "Erick", role: "Fullstack Developer", image: "https://via.placeholder.com/200", route: "/aboutErick" },
    { name: "Ana", role: "UI/UX Designer", image: "https://via.placeholder.com/200", route: "/aboutMabe" },
    { name: "Luis", role: "Backend Developer", image: "https://via.placeholder.com/200", route: "/aboutErick" },
    { name: "Mabe", role: "Frontend Developer", image: MabeImage, route: "/aboutMabe" },
    { name: "Carlos", role: "DevOps Engineer", image: "https://via.placeholder.com/200", route: "/aboutErick" },
  ];

  return (
    <section id="team" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Conoce a Nuestro <span className="text-primary">Equipo</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onClick={() => navigate(member.route)}
              className="relative group flex flex-col items-center bg-card rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay con rol */}
                <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
                  <h4 className="text-white text-lg font-semibold">{member.role}</h4>
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-center">{member.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
