import { HiArrowRight, HiChatBubbleLeftRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % (projects.length - 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20 lg:pt-28 lg:pb-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 bg-black text-white text-xs tracking-wide mb-6 rounded-full">
              WEB DESIGNER
            </div>
            <h1 className="text-5xl lg:text-6xl mb-6 leading-[1.1]">
              Crio sites que transformam visitantes em clientes
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Especializado em web design para negócios locais e empresas que precisam de presença digital profissional e resultados reais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-black text-white hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 group"
              >
                Solicitar Orçamento
                <HiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://wa.me/5579998671726"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <HiChatBubbleLeftRight className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="hidden lg:block overflow-hidden rounded-lg h-full">
              <div
                className="flex transition-transform duration-700 h-full"
                style={{
                  transform: `translateX(-${current * 50}%)`,
                  width: `${projects.length * 50}%`
                }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-1/2 h-full px-2">
                    <div className="bg-gray-100 rounded-lg overflow-hidden h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}