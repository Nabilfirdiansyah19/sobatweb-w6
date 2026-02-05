import { motion } from "framer-motion";
import { ChevronDown, MousePointer2 } from "lucide-react";
import { businessConfig } from "../config/businessConfig";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-svh flex flex-col justify-center items-center px-6 pt-24 pb-10 overflow-hidden">
      <div className="container mx-auto z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-10 bg-white/50 backdrop-blur-md px-5 py-2 rounded-full border border-[#D4AF37]/20 shadow-sm mx-auto w-fit"
        >
          <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-ping" />
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#1A1A1A]">Ready for 2026 Projects</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="text-[15vw] md:text-[11rem] font-serif leading-[0.8] text-[#1A1A1A] mb-12"
        >
          IRISH<span className="text-[#D4AF37] italic">.</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto w-full">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-sm text-slate-500 italic">
            "Mewujudkan kemewahan melalui detail yang presisi dan estetika abadi."
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex justify-center">
             <a href="#gallery" className="w-20 h-20 rounded-full bg-[#1A1A1A] text-white flex flex-col items-center justify-center border border-[#D4AF37]/30 hover:scale-110 transition-transform">
                <MousePointer2 size={20} className="mb-1" />
                <span className="text-[8px] font-bold uppercase">Start</span>
             </a>
          </motion.div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-sm text-slate-500 font-bold uppercase tracking-widest md:text-right">
            — {businessConfig.brandName}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;