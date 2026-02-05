import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Instagram } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Services', 'Schedule', 'Contact'];

  return (
    <nav className="fixed w-full z-50 flex justify-center px-4 py-6 pointer-events-none">
      <motion.div
        animate={{ maxWidth: scrolled ? '900px' : '1200px', width: '100%' }}
        className={`pointer-events-auto flex justify-between items-center rounded-full px-8 py-4 transition-all duration-500 border shadow-2xl ${
          scrolled ? 'bg-black/90 border-white/20' : 'bg-white/10 border-white/10'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className={`font-black tracking-tighter text-xl italic uppercase ${scrolled ? 'text-white' : 'text-black'}`}>
            {businessConfig.name}
          </span>
        </div>
        
        <div className={`hidden md:flex gap-8 items-center font-bold text-[10px] uppercase tracking-[0.2em] ${scrolled ? 'text-white/70' : 'text-black/70'}`}>
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className=" transition-all">{item}</a>
          ))}
          <a href={businessConfig.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /></a>
        </div>

        <button className={`${scrolled ? 'text-white' : 'text-black'} md:hidden`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-28 left-6 right-6 bg-black text-white rounded-[2rem] p-8 flex flex-col gap-6 md:hidden border border-white/10 pointer-events-auto shadow-2xl"
          >
            {links.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-2xl font-black italic uppercase tracking-tighter">
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;