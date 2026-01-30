import React from 'react';
import { Sparkles, Syringe, Palette, Activity } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gold-100 group">
        <div className="w-14 h-14 bg-rose-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
            <Icon className="text-primary" size={28} />
        </div>
        <h3 className="text-xl font-serif font-semibold text-secondary mb-3">{title}</h3>
        <p className="text-secondary/70 leading-relaxed font-light">{description}</p>
        <a href="#" className="inline-block mt-6 text-primary font-medium hover:text-gold-600 border-b border-transparent hover:border-gold-600 transition-all text-sm uppercase tracking-wide">
            Saiba Mais
        </a>
    </div>
);

const Services = () => {
    const services = [
        {
            icon: Sparkles,
            title: "Harmonização Facial",
            description: "Equilibre seus traços e realce sua beleza natural com nossas técnicas exclusivas de harmonização."
        },
        {
            icon: Syringe,
            title: "Botox e Preenchimentos",
            description: "Reduza linhas finas e restaure o volume com injetáveis aprovados, administrados por especialistas."
        },
        {
            icon: Palette,
            title: "Rejuvenescimento da Pele",
            description: "Tratamentos a laser avançados e peelings para restaurar o brilho e a textura jovem da sua pele."
        },
        {
            icon: Activity,
            title: "Contorno Corporal",
            description: "Soluções não cirúrgicas para esculpir e definir a silhueta do seu corpo com diversas tecnologias."
        }
    ];

    return (
        <section id="services" className="py-24 bg-rose-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-serif text-secondary mb-4">Tratamentos Selecionados</h2>
                    <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
                    <p className="text-secondary/80 text-lg font-light">
                        Oferecemos uma gama completa de procedimentos estéticos não cirúrgicos projetados para ajudar você a se sentir e parecer o seu melhor absoluto.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
