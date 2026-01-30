import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-3xl font-serif text-primary mb-6">LUMINA</h2>
                        <p className="text-white/70 leading-relaxed mb-6 font-light">
                            Redefinindo a percepção de beleza através da estética médica avançada e cuidado personalizado.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-serif mb-6 text-cream">Links Rápidos</h3>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-white/70 hover:text-primary transition-colors">Início</a></li>
                            <li><a href="#services" className="text-white/70 hover:text-primary transition-colors">Tratamentos</a></li>
                            <li><a href="#about" className="text-white/70 hover:text-primary transition-colors">Sobre Nós</a></li>
                            <li><a href="#contact" className="text-white/70 hover:text-primary transition-colors">Contato</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-serif mb-6 text-cream">Fale Conosco</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="text-primary mt-1 mr-3 flex-shrink-0" size={18} />
                                <span className="text-white/70">Av. Paulista, 1234<br />São Paulo, SP 01310-100</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="text-primary mr-3 flex-shrink-0" size={18} />
                                <span className="text-white/70">+55 (11) 99999-9999</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="text-primary mr-3 flex-shrink-0" size={18} />
                                <span className="text-white/70">contato@lumina.com.br</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-lg font-serif mb-6 text-cream">Horário de Funcionamento</h3>
                        <ul className="space-y-2 text-white/70">
                            <li className="flex justify-between">
                                <span>Seg - Sex</span>
                                <span>09:00 - 19:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sábado</span>
                                <span>10:00 - 16:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Domingo</span>
                                <span className="text-primary">Fechado</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
                    <p>&copy; {new Date().getFullYear()} Lumina Estética. Todos os direitos reservados.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
