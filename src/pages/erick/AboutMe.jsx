import { Code, User, Joystick, Heart, Lightbulb } from "lucide-react"; // Importa iconos adicionales
import { ThemeToggle } from "../../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import "./GameEmbed.css";
export const AboutErick = () => {
    return (
        <>
            <Navbar />
            <section id="about" className="py-24 px-4 relative">
            {/* Theme Toggle */}
            <ThemeToggle />
            {/* Background Effects */}
            <StarBackground />
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary"> Mí</span>
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Columna de Contenido Personal */}
                    <div className="space-y-6">
                        {/* Espacio para la foto */}
                        <div className="flex justify-center mb-6">
                            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-lg card-hover">
                                {/* Reemplaza con tu imagen */}
                                <img
                                    src="https://via.placeholder.com/192" // URL de tu foto personal
                                    alt="Foto de perfil"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold text-center md:text-left">
                            Desarrollador Dedicado y Explorador Tecnológico
                        </h3>

                        <p className="text-muted-foreground text-center md:text-left">
                           Soy un desarrollador dedicado con un enfoque en la creación de soluciones prácticas e innovadoras. 
                           Mi curiosidad tecnológica me impulsa a explorar constantemente nuevas herramientas y tendencias, 
                           consolidando así una base sólida que combina experiencia y aprendizaje continuo. Mi objetivo es transformar 
                           ideas en proyectos funcionales que generen valor real y marquen la diferencia.
                        </p>

                        {/* Hobbies e Intereses */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Heart className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Hobbies e Intereses</h4>
                                    <p className="text-muted-foreground">
                                        En mi tiempo libre me gusta desconectar con buenas historias a través del anime y las 
                                        series de streaming, encontrar nuevos retos en el mundo de los videojuegos 🎮 y mantener 
                                        viva mi curiosidad explorando tecnologías emergentes. Estas pasiones no solo me divierten, 
                                        también inspiran mi forma de crear y aprender cada día.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Conocimientos sobre la carrera */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Lightbulb className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Conocimientos en la Carrera</h4>
                                    <p className="text-muted-foreground">
                                        A lo largo de mi formación universitaria he fortalecido mis bases en áreas como bases de datos,
                                        programación orientada a objetos, lógica de programación y estructuras de datos. 
                                        Estas asignaturas, junto con materias como modelamiento e ingeniería de software, me han permitido 
                                        aplicar herramientas tanto de frontend como de backend, consolidando una visión integral del desarrollo 
                                        de software y preparándome para afrontar nuevos retos tecnológicos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Área de Interés en Tecnología */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Área de Interés en Tecnología</h4>
                                    <p className="text-muted-foreground">
                                       Al culminar mi formación profesional, me interesa crecer en roles que me permitan aplicar y expandir mis conocimientos. 
                                       Entre los puestos que más me atraen se encuentran el de desarrollador web fullstack, desarrollador backend, ingeniero en 
                                       inteligencia artificial y desarrollador de videojuegos, áreas en las que puedo combinar mi dedicación, creatividad y pasión 
                                       por la tecnología para aportar soluciones innovadoras.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <a href="#contact" className="cosmic-button">
                                Contacto
                            </a>
                            <a
                                href="/ruta/a/tu_cv.pdf" // Reemplaza con la ruta a tu CV
                                download
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Descargar CV
                            </a>
                        </div>
                    </div>

                    {/* Columna de Habilidades y Proyectos */}
                    <div className="grid grid-cols-1 gap-6">
                        {/* Habilidades */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Habilidades Clave</h4>
                                    <ul className="list-disc list-inside text-muted-foreground pl-4">
                                        <li>Desarrollo Frontend: Angular, Laravel, HTML, CSS, JavaScript, Tailwind CSS</li>
                                        <li>Desarrollo Backend: Nest.js, Laravel</li>
                                        <li>Bases de Datos: PostgreSQL, MongoDB, MySQL</li>
                                        <li>Herramientas: Git, Docker, Postman, GitHub</li>
                                        <li>Metodologías: Agile, Scrum</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Cursos o Preparaciones */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Cursos y Preparaciones</h4>
                                    <ul className="list-disc list-inside text-muted-foreground pl-4">
                                        <li>Certificación en  Azure AI Fundamentals (Microsoft)</li>
                                        <li>Curso de Angular: De cero a Experto</li>
                                        <li>Curso de PWA - Aplicaciones Web Progresivas</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Espacio para incrustar un juego desarrollado */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Joystick className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left w-full">
                                    <h4 className="font-semibold text-lg mb-2">Mi Juego Desarrollado</h4>
                                    <p className="text-muted-foreground mb-4">
                                        ¡Echa un vistazo a uno de mis pequeños proyectos de juego! Es una muestra de mis habilidades en desarrollo interactivo.
                                    </p>
                                    <div className="aspect-video w-full rounded-md overflow-hidden bg-gray-800 flex items-center justify-center game-embed">
                                        {/* Reemplaza este iframe con el código para incrustar tu juego.
                        Puede ser de itch.io, GitHub Pages, o cualquier otra plataforma. */}
                                        <iframe frameBorder="0" src="https://itch.io/embed-upload/13627977?color=333333" allowfullscreen allow="autoplay; fullscreen; gamepad; xr-spatial-tracking"><a href="https://littlepuppet.itch.io/worldwar-3-2099">Play WorldWar 3 2099 on itch.io</a></iframe>
                                        {/* Si no tienes un iframe, puedes poner un enlace a tu juego aquí: */}
                                        {/* <a href="https://tu-juego.com" target="_blank" rel="noopener noreferrer" className="cosmic-button text-sm">
                      Jugar Ahora
                    </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};