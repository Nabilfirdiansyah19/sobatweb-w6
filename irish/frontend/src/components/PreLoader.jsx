import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { businessConfig } from "../config/businessConfig";

const PreLoader = () => {
  const [counter, setCounter] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Kecepatan counter: 0-100 dalam ~2.5 detik
    const interval = setInterval(() => {
      setCounter((prev) => (prev < 100 ? prev + 1 : 100));
    }, 20);
    const timer = setTimeout(() => setVisible(false), 3500);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 1 } }}
          className="fixed inset-0 z-[9999] bg-[#1A1A1A] flex flex-col items-center justify-center text-white"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center w-full"
          >
            {/* Tagline Kecil */}
            <h2 className="text-[9px] md:text-[11px] tracking-[0.8em] text-[#D4AF37] mb-6 uppercase font-bold opacity-60">
              Establishing Aesthetics
            </h2>

            {/* Nama Brand dengan Masking Effect */}
            <div className="overflow-hidden h-20 md:h-28 flex items-center justify-center mb-8">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                className="text-5xl md:text-8xl font-serif italic tracking-tight"
              >
                Irish Interior<span className="text-[#D4AF37]">.</span>
              </motion.h1>
            </div>

            {/* Wrapper Counter: Menggunakan lebar tetap agar angka selalu center */}
            <div className="flex items-center justify-center w-full max-w-[300px] gap-6">
              <div className="h-px flex-1 bg-white/10" />
              
              {/* Box Angka: W-20 memastikan lebar konsisten sehingga tidak geser-geser */}
              <div className="w-24 text-center">
                <span className="text-3xl md:text-4xl font-serif italic text-[#D4AF37]">
                  {counter}%
                </span>
              </div>
              
              <div className="h-px flex-1 bg-white/10" />
            </div>
            
            {/* Progress Bar Tipis di paling bawah layar */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] transition-all duration-200 ease-out" 
                 style={{ width: `${counter}%` }} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PreLoader;