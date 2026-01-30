import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            }`}>
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-serif text-primary font-bold tracking-wide">
                    LUMINA
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="text-secondary hover:text-primary transition-colors font-medium">Início</a>
                    <a href="#services" className="text-secondary hover:text-primary transition-colors font-medium">Serviços</a>
                    <a href="#about" className="text-secondary hover:text-primary transition-colors font-medium">Sobre</a>
                    <a href="#contact" className="px-6 py-2 bg-primary text-white rounded-full hover:bg-gold-500 transition-colors font-medium">
                        Agendar
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-secondary">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
                    <a href="#home" className="text-secondary hover:text-primary text-lg" onClick={() => setIsOpen(false)}>Início</a>
                    <a href="#services" className="text-secondary hover:text-primary text-lg" onClick={() => setIsOpen(false)}>Serviços</a>
                    <a href="#about" className="text-secondary hover:text-primary text-lg" onClick={() => setIsOpen(false)}>Sobre</a>
                    <a href="#contact" className="text-primary font-medium text-lg" onClick={() => setIsOpen(false)}>Agendar Consulta</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
