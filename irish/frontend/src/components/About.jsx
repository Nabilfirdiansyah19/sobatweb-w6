import { motion } from "framer-motion";
import { Hammer, PencilRuler, Users, Diamond } from "lucide-react";
import { businessConfig } from "../config/businessConfig";

const features = [
  { icon: PencilRuler, title: "Precision Planning", desc: "Perencanaan denah yang memanfaatkan setiap inci ruang secara efisien tanpa mengurangi estetika." },
  { icon: Diamond, title: "Premium Sourcing", desc: "Akses eksklusif ke material mewah mulai dari marmer Italia hingga kayu jati terbaik." },
  { icon: Hammer, title: "Master Craftsmanship", desc: "Dikerjakan oleh tukang ahli dengan pengalaman puluhan tahun dalam detail rumit." },
  { icon: Users, title: "Collaborative Design", desc: "Kami mendengarkan aspirasi Anda dan menyempurnakannya secara teknis." }
];

const About = () => {
  return (
    <section id="about" className="py-32 relative px-6 md:px-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] leading-tight">
              Lebih dari Sekadar <br /> <span className="text-[#D4AF37] italic">Desain Interior.</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg font-light max-w-lg">
              {businessConfig.brandName} telah dipercaya menangani berbagai proyek eksklusif. Kami hadir sebagai solusi one-stop mulai dari konsultasi hingga instalasi akhir.
            </p>
            <div className="flex gap-10">
               <div><p className="text-3xl font-serif text-[#D4AF37]">{businessConfig.experienceYears}</p><p className="text-[10px] font-bold uppercase tracking-widest">Years Experience</p></div>
               <div><p className="text-3xl font-serif text-[#D4AF37]">{businessConfig.projectCount}</p><p className="text-[10px] font-bold uppercase tracking-widest">Successful Projects</p></div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div key={i} className="p-8 bg-white border border-[#D4AF37]/10 rounded-[2.5rem] shadow-sm hover:border-[#D4AF37]/40 transition-all">
                <f.icon className="text-[#D4AF37] mb-6" size={32} strokeWidth={1.5} />
                <h4 className="text-[#1A1A1A] font-bold text-lg mb-2">{f.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;