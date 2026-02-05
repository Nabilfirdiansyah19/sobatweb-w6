import { motion } from "framer-motion";
import { businessConfig } from "../config/businessConfig";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-white flex flex-col justify-center overflow-hidden pt-32 pb-20">
      {/* Background Decor: Massive Outline Text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[30vw] font-black leading-none uppercase italic tracking-tighter">137</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl">
          {/* Label Kecil */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-[2px] w-12 bg-black"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">
              Professional Audio Laboratory
            </span>
          </motion.div>

          {/* Main Typography Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-[16vw] md:text-[9rem] font-black leading-[0.85] tracking-tighter uppercase italic text-black">
              PURE <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>ACOUSTIC</span> <br />
              ENERGY.
            </h1>
          </motion.div>

          {/* Deskripsi & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-col md:flex-row md:items-end justify-between gap-10"
          >
            <div className="max-w-md">
              <p className="text-xl md:text-2xl font-bold italic leading-tight text-neutral-800">
                "Kami tidak hanya merekam suara, kami menangkap jiwa dari setiap frekuensi yang Anda ciptakan."
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                // Available for Session 2026
              </p>
              <motion.a 
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                href={businessConfig.whatsappLink}
                className="bg-black text-white px-10 py-6 font-black uppercase italic text-sm tracking-widest hover:bg-neutral-800 transition-all flex items-center justify-center gap-6 shadow-2xl"
              >
                Book Your Slot <span>→</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="absolute bottom-10 left-0 w-full px-6 flex justify-between items-center opacity-20 hidden md:flex">
        <span className="text-[10px] font-black uppercase tracking-[0.5em]">Jakarta, ID</span>
        <span className="text-[10px] font-black uppercase tracking-[0.5em]">24/7 Production Support</span>
      </div>
    </section>
  );
};

export default Hero;