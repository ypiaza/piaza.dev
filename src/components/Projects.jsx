import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projetos" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight">MEU PORTIFÓLIO</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
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