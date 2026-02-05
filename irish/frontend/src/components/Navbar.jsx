import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-100 transition-all duration-700 ${
      scrolled 
        ? 'bg-white/70 backdrop-blur-xl py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)]' 
        : 'bg-transparent py-10'
    }`}>
      <div className="container mx-auto px-6 md:px-20 flex justify-between items-center">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <h1 className="text-xl md:text-2xl font-serif font-bold tracking-tighter text-[#1A1A1A]">
            IRISH<span className="text-[#D4AF37]">.</span>INTERIOR
          </h1>
          <span className="text-[7px] uppercase tracking-[0.6em] text-[#D4AF37] font-black -mt-1">Design Studio</span>
        </motion.div>
        
        <div className="hidden md:flex gap-12 items-center">
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.4em] font-bold text-[#1A1A1A]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="relative group overflow-hidden">
                <span className="inline-block transition-transform duration-500 group-hover:-translate-y-full">{link.name}</span>
                <span className="absolute left-0 top-full inline-block text-[#D4AF37] transition-transform duration-500 group-hover:-translate-y-full">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        <button className="md:hidden text-[#1A1A1A]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl font-serif text-[#1A1A1A]">{link.name}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;