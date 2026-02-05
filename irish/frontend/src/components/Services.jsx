import { motion } from 'framer-motion';
import { Compass, PenTool, HardHat, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    step: "01",
    title: "Space Planning & Concept",
    desc: "Tahap awal di mana kami menerjemahkan mimpi Anda menjadi denah teknis dan moodboard visual yang kohesif.",
    icon: Compass,
    color: "bg-blue-50"
  },
  {
    step: "02",
    title: "3D Realistic Visualization",
    desc: "Melihat masa depan hunian Anda melalui render foto-realistik berkualitas tinggi sebelum pembangunan dimulai.",
    icon: PenTool,
    color: "bg-amber-50"
  },
  {
    step: "03",
    title: "Project Management",
    desc: "Pengawasan penuh di lapangan untuk memastikan konstruksi berjalan sesuai jadwal, budget, dan standar kualitas.",
    icon: HardHat,
    color: "bg-slate-50"
  },
  {
    step: "04",
    title: "Bespoke Furniture",
    desc: "Produksi furnitur kustom di workshop internal kami untuk memastikan presisi ukuran dan eksklusivitas material.",
    icon: Sparkles,
    color: "bg-stone-50"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#D4AF37] font-black uppercase text-[10px] tracking-[0.5em] block mb-4">Our Expertise</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-[1.1]">
              Layanan <span className="italic text-[#D4AF37]">Komprehensif</span> Kami.
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed border-l-2 border-[#D4AF37]/20 pl-6">
            Dari sketsa awal hingga pemasangan baut terakhir, kami menangani setiap detail dengan presisi artistik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100 rounded-[3rem] overflow-hidden">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "#FDFBF7" }}
              className="bg-white p-12 flex flex-col h-full transition-colors group relative"
            >
              <span className="text-5xl font-serif text-slate-100 group-hover:text-[#D4AF37]/10 transition-colors absolute top-10 right-10 pointer-events-none">
                {s.step}
              </span>
              
              <div className="mb-12 relative">
                <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <s.icon className="text-[#1A1A1A] group-hover:text-[#D4AF37] transition-colors" size={30} strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 pr-10 leading-tight">{s.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-10 flex-grow">
                {s.desc}
              </p>

              <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] group-hover:text-[#D4AF37] transition-all">
                Learn More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Banner Tambahan: CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 p-12 bg-[#1A1A1A] rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[80px] rounded-full" />
          <div className="relative z-10">
            <h4 className="text-2xl md:text-3xl font-serif mb-2">Punya kebutuhan proyek khusus?</h4>
            <p className="text-slate-400 text-sm">Kami melayani pengerjaan parsial maupun paket *turn-key* lengkap.</p>
          </div>
          <a 
            href="#contact" 
            className="relative z-10 px-10 py-5 bg-[#D4AF37] text-[#1A1A1A] font-bold uppercase text-xs tracking-widest rounded-full hover:bg-white transition-all hover:scale-105 active:scale-95"
          >
            Minta Penawaran
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;