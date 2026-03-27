export function Projects() {
  const projects = [
    {
      title: 'E-commerce Minimalista',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1750056393349-dfaf647f7400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjB1aSUyMHV4JTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzQ2MjY0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Interface clean para loja online'
    },
    {
      title: 'App Mobile',
      category: 'Product Design',
      image: 'https://images.unsplash.com/photo-1773611814475-e80ea69a4f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHx3ZWIlMjBkZXNpZ24lMjB1aSUyMHV4JTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzQ2MjY0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Design responsivo e intuitivo'
    },
    {
      title: 'Branding Digital',
      category: 'Visual Identity',
      image: 'https://images.unsplash.com/photo-1764601842167-ba701eed47f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHx3ZWIlMjBkZXNpZ24lMjB1aSUyMHV4JTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzQ2MjY0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Identidade visual moderna'
    },
    {
      title: 'Portfolio Criativo',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1750056393288-fd4a4a77cae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx3ZWIlMjBkZXNpZ24lMjB1aSUyMHV4JTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzQ2MjY0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Layout inovador e impactante'
    },
    {
      title: 'Dashboard Analytics',
      category: 'UI Design',
      image: 'https://images.unsplash.com/photo-1762716514229-739f6769e282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx3ZWIlMjBkZXNpZ24lMjB1aSUyMHV4JTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzQ2MjY0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Visualização de dados eficiente'
    },
    {
      title: 'Landing Page',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1717994818193-266ff93e3396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHx3ZWIlMjBkZXNpZ24lMjB1aSUyMHV4JTIwbWluaW1hbGlzdHxlbnwxfHx8fDE3NzQ2MjY0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Conversão otimizada'
    }
  ];

  return (
    <section id="projetos" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight">PROJETOS</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden border-2 border-black aspect-[4/3] bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <p className="text-sm mb-2">{project.category}</p>
                    <h3 className="mb-2">{project.title}</h3>
                    <p className="text-sm opacity-80">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3>{project.title}</h3>
                <p className="text-sm opacity-60">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
