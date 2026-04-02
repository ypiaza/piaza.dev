import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Correção: Adicionado o parâmetro 'e'
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  // Correção: Adicionado o parâmetro 'e'
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-20 md:py-32 px-6 bg-white text-black transition-all">
      <div className="max-w-5xl mx-auto">

        {/* Cabeçalho Minimalista */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
            Vamos Conversar?
          </h2>
          <div className="w-16 h-1 bg-black mt-6 mx-auto md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Coluna de Texto e Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-widest mb-6">Contatos Diretos</h3>
              <p className="text-gray-500 leading-relaxed max-w-md">
                Tem um projeto em mente ou quer escalar seu negócio digital?
                Estou disponível para novas parcerias e consultoria técnica.
              </p>
            </div>

            {/* Itens de Contato - Responsivos (Empilham no Mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">

              <div className="flex items-center group">
                <div className="w-12 h-12 border border-black/10 flex items-center justify-center mr-5 group-hover:bg-black group-hover:text-white transition-all">
                  <span className="text-sm font-bold">@</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Email</p>
                  <p className="font-medium text-sm md:text-base">yuripiaza.dev@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="w-12 h-12 border border-black/10 flex items-center justify-center mr-5 group-hover:bg-black group-hover:text-white transition-all">
                  <span className="text-sm font-bold">#</span>
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Instagram</p>
                  <a href="https://www.instagram.com/piaza.dev/" className="font-medium text-sm md:text-base hover:underline underline-offset-4">@piaza.dev</a>
                </div>
              </div>
            <div className="flex items-center group">
            <div className="w-12 h-12 border border-black/10 flex items-center justify-center mr-5 group-hover:bg-[#25D366] group-hover:text-white group-hover:border-[#25D366] transition-all">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">WhatsApp</p>
              <a
                href="https://wa.me/5579998671726?text=Olá%20Yuri,%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20falar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sm md:text-base hover:text-[#25D366] transition-colors"
              >
                +55 (79) 9 9867-1726
              </a>
            </div>
          </div>
            </div>
          </div>
          

          {/* Coluna do Formulário - Estilo Input Minimalista */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="NOME"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b-2 border-black/10 py-3 focus:border-black outline-none transition-colors text-sm font-bold uppercase tracking-widest placeholder:text-gray-300"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b-2 border-black/10 py-3 focus:border-black outline-none transition-colors text-sm font-bold uppercase tracking-widest placeholder:text-gray-300"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                name="message"
                placeholder="SUA MENSAGEM"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b-2 border-black/10 py-3 focus:border-black outline-none transition-colors text-sm font-bold uppercase tracking-widest placeholder:text-gray-300 resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto px-12 py-5 bg-black text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-gray-800 transition-all active:scale-95"
            >
              Enviar Mensagem
            </button>
          </form>

        </div>
      </div>

    </section>
  );
}