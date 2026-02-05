import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image - Di mobile tampil di ATAS */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative order-1"
          >
            <div className="aspect-[4/5] md:aspect-square bg-neutral-900 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-8 hidden md:block">
              <h3 className="text-3xl font-black italic uppercase leading-none">Est. 2024</h3>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="order-2">
            <h2 className="text-6xl md:text-8xl font-black uppercase italic mb-8 tracking-tighter leading-none">
              THE <span className="text-neutral-300">HUB</span> <br /> OF SOUND.
            </h2>
            <p className="text-lg text-neutral-600 mb-10 font-bold leading-relaxed italic">
              "Kami bukan sekadar studio. Kami adalah laboratorium suara di mana ide mentah diubah menjadi mahakarya audio yang presisi."
            </p>
            <div className="space-y-6">
              {[
                { title: "Standard Akustik", desc: "Treatment ruang profesional untuk kejernihan suara maksimal." },
                { title: "Gears Global", desc: "Lineup Mic & Amp standar industri rekaman dunia." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 border-l-4 border-black pl-6">
                  <div>
                    <h4 className="font-black uppercase text-xl italic">{item.title}</h4>
                    <p className="text-sm text-neutral-500 font-bold uppercase tracking-wide">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;