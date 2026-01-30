import React from 'react';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?auto=format&fit=crop&q=80"
                    alt="Aesthetic Clinic Background"
                    className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-cream/80 to-transparent/20"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 z-10 relative mt-20">
                <div className="max-w-2xl animate-in slide-in-from-left duration-1000">
                    <span className="inline-block py-1 px-3 border border-primary text-primary rounded-full text-sm font-semibold tracking-wider mb-6 uppercase">
                        Estética Premium
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif text-secondary leading-tight mb-6">
                        Revele Sua <br />
                        <span className="text-primary italic">Beleza Natural</span>
                    </h1>
                    <p className="text-lg md:text-xl text-secondary/80 mb-8 max-w-lg leading-relaxed">
                        Experimente tratamentos dermatológicos de classe mundial, personalizados para realçar sua beleza única em um ambiente sereno e luxuoso.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="px-8 py-4 bg-primary text-white rounded-full text-center font-semibold text-lg hover:bg-gold-500 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Agendar Consulta
                        </a>
                        <a href="#services" className="px-8 py-4 bg-white text-secondary border border-secondary/20 rounded-full text-center font-semibold text-lg hover:bg-secondary hover:text-white transition-all">
                            Ver Tratamentos
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-secondary/30 rounded-full flex justify-center pt-2">
                    <div className="w-1 h-3 bg-primary rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
