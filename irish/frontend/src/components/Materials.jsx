import { motion } from 'framer-motion';
import { Layers, Box, Droplets, Wind } from 'lucide-react';

const materials = [
  {
    title: "Premium Marbles",
    desc: "Kami mengimpor langsung Statuario dan Carrara asli Italia untuk kilau abadi.",
    icon: Layers,
    details: ["High Polish Finish", "Seamless Pattern", "Scratch Resistant"]
  },
  {
    title: "Solid Hardwood",
    desc: "Kayu Jati Perhutani Grade A dan Walnut Amerika dengan proses oven sempurna.",
    icon: Box,
    details: ["Anti-Termite", "Natural Grain", "Lifetime Durability"]
  },
  {
    title: "Smart Hardware",
    desc: "Sistem engsel dan rel laci otomatis dari Blum atau Hafele Jerman.",
    icon: Droplets,
    details: ["Soft Closing", "Heavy Duty", "Luxury Motion"]
  },
  {
    title: "Eco-Friendly Paint",
    desc: "Finishing menggunakan cat berbahan dasar air yang aman bagi pernapasan.",
    icon: Wind,
    details: ["Low VOC", "Odourless", "Anti-Bacterial"]
  }
];

const Materials = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20">
          <span className="text-[#D4AF37] font-bold uppercase text-xs tracking-[0.4em] block mb-4">Quality Matters</span>
          <h2 className="text-5xl font-serif leading-tight">Detail Material yang <br/> <span className="italic text-[#D4AF37]">Kami Gunakan.</span></h2>
          <p className="mt-6 text-slate-500 leading-relaxed">Keindahan desain hanyalah setengah dari cerita. Kami memastikan setiap material dipilih berdasarkan standar durabilitas dan kemewahan tertinggi.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-[#FDFBF7] border border-slate-100 hover:border-[#D4AF37]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#1A1A1A] group-hover:text-[#D4AF37] transition-all">
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">{item.desc}</p>
              
              <ul className="space-y-3">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]/40 group-hover:text-[#D4AF37] transition-colors">
                    <div className="w-1 h-1 bg-[#D4AF37] rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;