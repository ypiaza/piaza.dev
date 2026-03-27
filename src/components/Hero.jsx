export function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
            <div className="max-w-4xl mx-auto text-center">


                <h1 className="mb-6 tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                    PÁGINAS QUE CONVERTEM
                </h1>

                <p className="max-w-2xl mx-auto mb-8 opacity-70 text-lg sm:text-xl">
                    Criando experiências digitais únicas através de design minimalista e funcional
                </p>

                <div className="flex items-center justify-center gap-5">
                    <button
                        onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-white text-black hover:bg-black hover:text-white border-2 border-black transition-colors cursor-pointer"
                    >
                        VER PROJETOS
                    </button>
                    <button
                        onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-3 bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors cursor-pointer"
                    >
                        PEDIR ORÇAMENTO
                    </button>
                </div>
            </div>
        </section>
    );
}