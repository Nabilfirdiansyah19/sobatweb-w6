import { motion } from "framer-motion";
import { businessConfig } from "../config/businessConfig";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden pt-24 md:pt-0">
      {/* Background Decor - Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '50px 50px' }} 
      />

      {/* Layer 1: Huge Outline Text (Deep Background) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-[0.05] select-none pointer-events-none">
        <h2 className="text-[25vw] font-black leading-none uppercase italic text-transparent" 
            style={{ WebkitTextStroke: "1px black" }}>
          RECORDING
        </h2>
        <h2 className="text-[25vw] font-black leading-none uppercase italic text-transparent"
            style={{ WebkitTextStroke: "1px black" }}>
          STUDIO
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto relative">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start"
          >
            {/* Tagline Small */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-yellow-400"></div>
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] text-neutral-400">Premium Audio Lab</span>
            </div>

            {/* Core Headline */}
            <h1 className="text-[15vw] md:text-[12rem] font-black leading-[0.85] tracking-tighter uppercase italic text-black text-center md:text-left relative">
              <span className="relative z-10">CREATE</span> <br />
              <span className="relative inline-block mt-2">
                  <span className="relative z-10">LOUDER.</span>
              </span>
            </h1>

            {/* Content Bottom */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-end w-full">
              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-black uppercase italic leading-tight max-w-sm text-center md:text-left">
                  Elevasi <span className="text-neutral-400">Suara Anda</span> Ke Level Internasional.
                </p>
                <div className="flex justify-center md:justify-start">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={businessConfig.whatsappLink} 
                    className="bg-black text-white px-10 py-5 font-black uppercase italic text-lg hover:bg-yellow-400 hover:text-black transition-all shadow-2xl inline-block"
                  >
                    Start Project —
                  </motion.a>
                </div>
              </div>

              {/* Decorative Specs */}
              <div className="hidden md:grid grid-cols-2 gap-8 border-t-2 border-black pt-8">
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-neutral-400 mb-2">Facility</h4>
                  <p className="font-black text-sm uppercase">Pro Tools | SSL</p>
                </div>
                <div>
                  <h4 className="font-black text-[10px] uppercase tracking-widest text-neutral-400 mb-2">Location</h4>
                  <p className="font-black text-sm uppercase">Jakarta Selatan</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee Footer */}
      <div className="absolute bottom-0 w-full bg-black py-4 overflow-hidden border-t-4 border-yellow-400">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap text-white font-black uppercase italic text-[10px] tracking-[0.5em]"
        >
          {[1,2,3,4,5].map(i => (
            <span key={i}>Recording • Mixing • Mastering • Live Session • 1Cortone Studio</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;