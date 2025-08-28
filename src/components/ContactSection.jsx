 import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = (e) => {

    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Mensaje enviado!",
        description: "Gracias por tu mensaje. Nos pondremos en contacto pronto.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
  id="contact"
  className="min-h-screen flex items-center justify-center px-4 relative bg-gradient-to-b from-gray-900/5 to-transparent"
>

      <div className="container mx-auto max-w-6xl">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contáctanos en <span className="text-primary">DevStorm</span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente o quieres colaborar con nuestro equipo?
            Estamos abiertos a nuevas ideas y oportunidades.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 👉 Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-10 text-center">
  <h3 className="text-2xl font-semibold mb-6">Información de Contacto</h3>

  <div className="space-y-8">
    {[
      {
        icon: <Mail className="h-6 w-6 text-white" />,
        title: "Email",
        value: "contact@gmail.com",
        href: "mailto:devstorm@gmail.com",
      },
      {
        icon: <Phone className="h-6 w-6 text-white" />,
        title: "Teléfono",
        value: "+593 986 682 169",
        href: "tel:+593987654321",
      },
      {
        icon: <MapPin className="h-6 w-6 text-white" />,
        title: "Ubicación",
        value: "Ambato, Ecuador",
      },
    ].map((info, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center space-y-3"
      >
        <div className="p-3 rounded-full bg-gradient-to-tr from-primary to-secondary shadow-md">
          {info.icon}
        </div>
        <div>
          <h4 className="font-medium text-white">{info.title}</h4>
          {info.href ? (
            <a
              href={info.href}
              className="text-gray-300 hover:text-primary transition-colors"
            >
              {info.value}
            </a>
          ) : (
            <span className="text-gray-300">{info.value}</span>
          )}
        </div>
      </div>
    ))}
  </div>

  <div className="pt-8">
    <h4 className="font-medium mb-4 text-white">Conéctate con Nosotros</h4>
    <div className="flex space-x-4 justify-center">
      {[Linkedin, Twitter, Instagram, Twitch].map((Icon, idx) => (
        <a
          key={idx}
          href="#"
          target="_blank"
          className="p-3 rounded-full bg-gray-800/40 hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          <Icon className="h-5 w-5 text-white" />
        </a>
      ))}
    </div>
  </div>
</div>


           
          </motion.div>

          {/* 👉 Formulario de contacto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-800/40 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-primary/30 transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Envíanos un Mensaje
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-200"
                >
                  Tu Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 transition-all"
                  placeholder="Pedro Machado..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-200"
                >
                  Tu Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 transition-all"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-200"
                >
                  Tu Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-gray-700 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary placeholder-gray-400 resize-none transition-all"
                  placeholder="Hola, me gustaría hablar sobre..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold text-white bg-primary rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                )}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
