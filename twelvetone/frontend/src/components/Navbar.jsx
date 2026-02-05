import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass-morphism py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-studio-red flex items-center justify-center rounded-sm rotate-45 transform hover:rotate-0 transition-transform duration-500">
                        <span className="text-white font-serif font-bold text-xl -rotate-45 hover:rotate-0 transition-transform duration-500">T</span>
                    </div>
                    <span className="font-serif text-2xl font-bold tracking-widest text-studio-beige uppercase">ThirdTone</span>
                </div>

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

                {/* Mobile Menu Button - simplify for now */}
                <div className="md:hidden">
                    <button className="text-studio-beige">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ href, label }) => (
    <a
        href={href}
        className="text-studio-beige/80 hover:text-studio-red font-medium text-sm tracking-widest uppercase transition-colors duration-300 relative group"
    >
        {label}
        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-studio-red transition-all duration-300 group-hover:w-full"></span>
    </a>
);

export default Navbar;
