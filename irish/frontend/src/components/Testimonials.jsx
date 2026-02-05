import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Alexandra Wijaya",
    role: "Owner of Emerald Residence",
    content: "Mengerjakan interior rumah dengan Irish adalah keputusan terbaik. Mereka menangkap visi kami tentang 'Luxury Comfort' dengan sangat sempurna.",
    img: "https://i.pravatar.cc/150?u=a",
    stars: 5
  },
  {
    name: "Budi Santoso",
    role: "CEO Tech-Corp Office",
    content: "Efisiensi ruang kantor kami meningkat drastis tanpa kehilangan kesan elegan. Tim yang sangat profesional dan detail-oriented.",
    img: "https://i.pravatar.cc/150?u=b",
    stars: 5
  },
  {
    name: "Clarissa Putri",
    role: "Private Villa Owner",
    content: "Material yang dipilihkan sangat premium. Setiap tamu yang berkunjung selalu bertanya siapa desainer interior di balik keindahan ini.",
    img: "https://i.pravatar.cc/150?u=c",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-[#1A1A1A] text-white px-6 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full -mr-64 -mt-64" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.5em] mb-4 block">Client Stories</span>
          <h2 className="text-5xl font-serif italic">What They Say About <br /> Irish Interior.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <Quote className="text-[#D4AF37] mb-8 opacity-50" size={40} />
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} size={14} fill="#D4AF37" className="text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-lg font-serif italic leading-relaxed text-slate-300 mb-10">
                  "{t.content}"
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-white/10 pt-8">
                <div className="w-14 h-14 rounded-full overflow-hidden border border-[#D4AF37]/50">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-widest uppercase">{t.name}</h4>
                  <p className="text-[10px] text-[#D4AF37] font-bold tracking-widest mt-1 uppercase">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;