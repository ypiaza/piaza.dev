import { projects } from '../data/projects'

export function Projects() {

  const openProject = (link) => {
    window.open(link, '_blank');
  };

  return (
    <section id="projetos" className="py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 opacity-0 animate-fade-up">
          <h2 className="text-4xl lg:text-5xl mb-4">Projetos Selecionados</h2>
          <p className="text-xl text-gray-600">
            Cada projeto é desenvolvido com foco em resultados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => openProject(project.link)}
              className="group cursor-pointer opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden mb-6 relative aspect-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-2xl mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openProject(project.link);
                  }}
                  className="cursor-pointer px-4 py-2 border border-black text-sm hover:bg-black hover:text-white transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  Ver Projeto
                </button>
              </div>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex gap-2">
                {project.tags.map((link, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-100 text-xs rounded-full">
                    {link}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}