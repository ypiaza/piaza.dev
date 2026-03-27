import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    e.preventDefault();
    alert('Mensagem enviada! (Demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = () => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl tracking-tight">CONTATO</h2>
          <div className="w-20 h-1 bg-black mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="mb-6 text-2xl">VAMOS CONVERSAR</h3>
            <p className="mb-8 opacity-70">
              Tem um projeto em mente? Estou sempre aberto a discutir novas ideias
              e oportunidades criativas.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 border-2 border-black flex items-center justify-center mr-4 mt-1">
                  <span className="text-xs">@</span>
                </div>
                <div>
                  <p className="opacity-60 text-sm">EMAIL</p>
                  <p>contato@designer.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 border-2 border-black flex items-center justify-center mr-4 mt-1">
                  <span className="text-xs">+</span>
                </div>
                <div>
                  <p className="opacity-60 text-sm">TELEFONE</p>
                  <p>+55 (11) 98765-4321</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 border-2 border-black flex items-center justify-center mr-4 mt-1">
                  <span className="text-xs">#</span>
                </div>
                <div>
                  <p className="opacity-60 text-sm">REDES SOCIAIS</p>
                  <div className="flex space-x-4 mt-2">
                    <a href="#" className="hover:opacity-60 transition-opacity">Instagram</a>
                    <a href="#" className="hover:opacity-60 transition-opacity">Behance</a>
                    <a href="#" className="hover:opacity-60 transition-opacity">Dribbble</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="NOME"
                  required
                  className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="EMAIL"
                  required
                  className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="MENSAGEM"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-black bg-white focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors"
              >
                ENVIAR MENSAGEM
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
