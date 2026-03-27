export function About() {
  const skills = [
    'UI/UX Design',
    'Web Design',
    'Branding',
    'Typography',
    'Figma',
    'Adobe Suite',
    'Prototyping',
    'User Research'
  ];

  return (
    <section id="sobre" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight">SOBRE</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </div>

        <div className="mb-16">
          <p className="text-lg sm:text-xl mb-6 leading-relaxed">
            Designer apaixonado por criar experiências digitais que combinam estética minimalista
            com funcionalidade excepcional. Com mais de 5 anos de experiência, transformo ideias
            em soluções visuais impactantes.
          </p>
          <p className="text-lg sm:text-xl opacity-80 leading-relaxed">
            Meu trabalho é guiado pela simplicidade, atenção aos detalhes e foco na experiência
            do usuário. Acredito que o bom design não é apenas bonito, mas resolve problemas reais.
          </p>
        </div>

        <div>
          <h3 className="mb-8 text-2xl">COMPETÊNCIAS</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border border-white p-4 text-center hover:bg-white hover:text-black transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
