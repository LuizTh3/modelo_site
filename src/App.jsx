import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-sans antialiased text-secondary bg-cream selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />

        {/* About Section Placeholder */}
        <section id="about" className="py-24 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80"
                alt="Clinic Interior"
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="text-primary font-semibold tracking-wider text-sm uppercase mb-2 block">Quem Somos</span>
              <h2 className="text-4xl font-serif text-secondary mb-6">Excelência em <br />Medicina Estética</h2>
              <p className="text-secondary/80 mb-6 leading-relaxed font-light">
                Na Lumina, acreditamos que a beleza é uma forma de arte. Nossa equipe de especialistas certificados combina perícia médica com um olhar artístico para entregar resultados naturais e transformadores.
              </p>
              <p className="text-secondary/80 mb-8 leading-relaxed font-light">
                Utilizamos tecnologia de ponta e produtos premium para garantir sua segurança e satisfação. Cada plano de tratamento é personalizado para atender às suas preocupações e objetivos únicos.
              </p>
              <button className="px-8 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all font-medium">
                Conheça Nossa Equipe
              </button>
            </div>
          </div>
        </section>

        {/* Contact/Booking Section */}
        <section id="contact" className="py-24 bg-secondary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/10 rounded-l-full blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Pronta para Brilhar?</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg font-light">
              Agende sua consulta hoje e dê o primeiro passo em direção à sua jornada estética.
            </p>
            <button className="px-10 py-5 bg-primary text-white text-lg font-semibold rounded-full hover:bg-gold-500 transition-colors shadow-lg hover:shadow-primary/50">
              Agendar Online
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
