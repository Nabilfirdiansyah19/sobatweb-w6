import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Kita beri threshold sedikit lebih besar agar transisinya pas
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Schedule', 'Contact'];

  return (
    <nav className="fixed w-full z-[100] flex justify-center px-4 py-4 md:py-6 pointer-events-none">
      <motion.div
        initial={false}
        animate={{ 
          maxWidth: scrolled ? '1000px' : '1200px',
          backgroundColor: scrolled ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 0.8)',
          borderColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
        }}
        style={{ backdropFilter: 'blur(10px)' }}
        className={`pointer-events-auto w-full flex justify-between items-center rounded-full px-6 md:px-8 py-3 md:py-4 transition-all duration-500 border shadow-lg`}
      >
        {/* Brand Name */}
        <span className={`font-black tracking-tighter text-xl italic uppercase transition-colors duration-500 ${
          scrolled ? 'text-white' : 'text-black'
        }`}>
          {businessConfig.name}
        </span>
        
        {/* Desktop Links */}
        <div className={`hidden md:flex gap-8 items-center font-black text-[10px] uppercase tracking-[0.2em] transition-colors duration-500 ${
          scrolled ? 'text-white/70' : 'text-black/60'
        }`}>
          {links.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className={`hover:text-black ${scrolled ? 'hover:text-white' : 'hover:text-black'} transition-all`}
            >
              {item}
            </a>
          ))}
          <a href={businessConfig.instagram} target="_blank" rel="noreferrer">
            <Instagram size={18} className={scrolled ? 'text-white' : 'text-black'} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors duration-500 ${scrolled ? 'text-white' : 'text-black'}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.div>

      {/* Fullscreen Mobile Menu (Selalu Hitam agar Kontras) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-[101] flex flex-col items-center justify-center gap-8 pointer-events-auto"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white p-2">
              <X size={40} />
            </button>
            {links.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                className="text-4xl font-black italic uppercase tracking-tighter text-white hover:text-neutral-500 transition-all"
              >
                {item}
              </a>
            ))}
            <div className="mt-10 flex gap-6 text-white">
               <Instagram size={30} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;