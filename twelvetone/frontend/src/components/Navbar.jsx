import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        const nextState = !isMenuOpen;
        setIsMenuOpen(nextState);
        document.body.style.overflow = nextState ? 'hidden' : 'unset';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled || isMenuOpen ? 'glass-morphism py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[101]">
                {/* Branding - Only show when menu is closed, or keep it consistent */}
                <div className={`flex items-center space-x-2 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto' : 'opacity-100'}`}>
                    <div className="w-10 h-10 bg-studio-red flex items-center justify-center rounded-sm rotate-45 transform hover:rotate-0 transition-transform duration-500">
                        <span className="text-white font-serif font-bold text-xl -rotate-45 hover:rotate-0 transition-transform duration-500">T</span>
                    </div>
                    <span className="font-serif text-2xl font-bold tracking-widest text-studio-beige uppercase">ThirdTone</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    <NavLink href="#home" label="Home" />
                    <NavLink href="#about" label="Studio" />
                    <NavLink href="#services" label="Services" />
                    <NavLink href="#portfolio" label="Work" />
                    <NavLink href="#contact" label="Booking" />
                </div>

                <div className="hidden md:block">
                    <a href="#contact" className="btn-primary text-sm tracking-wider uppercase">
                        Book a Session
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden relative z-[102]">
                    <button
                        onClick={toggleMenu}
                        className="text-studio-beige focus:outline-none p-2"
                        aria-label="Toggle Menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                            <span className={`w-6 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-studio-black w-full h-screen z-[90] md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100 visible pointer-events-auto' : 'translate-x-full opacity-0 invisible pointer-events-none'}`}>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
                    <div className="absolute -top-24 -right-24 w-96 h-96 border border-studio-gold rounded-full"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-[150%] h-[1px] bg-studio-gold -rotate-12"></div>
                </div>

                <div className="flex flex-col h-full bg-studio-black/95 p-12 overflow-y-auto pt-32">
                    <div className="flex flex-col space-y-2 mb-10">
                        <span className="text-studio-gold uppercase tracking-[0.3em] font-bold text-[10px] flex items-center">
                            <span className="w-8 h-[1px] bg-studio-gold mr-3"></span>
                            Menu
                        </span>

                        <div className="flex flex-col space-y-4">
                            <NavLink href="#home" label="Home" onClick={closeMenu} mobile delay="100ms" />
                            <NavLink href="#about" label="Studio" onClick={closeMenu} mobile delay="200ms" />
                            <NavLink href="#services" label="Services" onClick={closeMenu} mobile delay="300ms" />
                            <NavLink href="#portfolio" label="Work" onClick={closeMenu} mobile delay="400ms" />
                            <NavLink href="#contact" label="Booking" onClick={closeMenu} mobile delay="500ms" />
                        </div>
                    </div>

                    {/* Menu Footer */}
                    <div className="mt-auto py-10 border-t border-white/5 flex flex-col space-y-8">
                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="btn-primary w-full tracking-wider uppercase py-4"
                        >
                            Book a Session
                        </a>

                        <div className="grid grid-cols-1 gap-2">
                            <span className="text-studio-gold uppercase tracking-widest font-bold text-[10px]">Reach Us</span>
                            <p className="text-studio-beige/60 text-sm">hello@thirdtone.studio</p>
                            <p className="text-studio-beige/60 text-sm font-medium">+62 812 3456 7890</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, label, onClick, mobile, delay }) => (
    <a
        href={href}
        onClick={onClick}
        className={`${mobile ? 'text-4xl font-bold opacity-0 animate-slide-up' : 'text-sm font-medium'} text-studio-beige/80 hover:text-studio-red tracking-widest uppercase transition-colors duration-300 relative group w-fit`}
        style={mobile ? { animationDelay: delay, animationFillMode: 'forwards' } : {}}
    >
        {label}
        <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-studio-red transition-all duration-300 group-hover:w-full ${mobile ? 'h-[3px] -bottom-2' : ''}`}></span>
    </a>
);

export default Navbar;
