import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projetos" className="py-20 md:py-32 px-6 bg-white text-black transition-all">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
            Portifólio
          </h2>
          <div className="w-16 h-1 bg-black mt-6 mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            // Envolvendo a div principal pelo link do projeto
            <a 
              key={index} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group cursor-pointer block"
            >
              <div className="relative overflow-hidden border-2 border-black aspect-[4/3] bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="text-sm mb-2">{project.category}</p>
                    <h3 className="mb-2 font-bold">{project.title}</h3>
                    <p className="text-sm opacity-80">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-bold">{project.title}</h3>
                <p className="text-sm opacity-60">{project.category}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}