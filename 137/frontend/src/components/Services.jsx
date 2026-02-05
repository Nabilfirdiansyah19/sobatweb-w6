import { motion } from 'framer-motion';
import { Music, Mic, Headphones, Disc } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Services = () => {
  const services = [
    { 
      icon: Music, 
      title: "Rehearsal", 
      price: "150k", 
      unit: "/hr",
      desc: "Latihan dengan alat standar internasional." 
    },
    { 
      icon: Mic, 
      title: "Recording", 
      price: "500k", 
      unit: "/shift",
      desc: "Live multi-track recording profesional." 
    },
    { 
      icon: Headphones, 
      title: "Podcast", 
      price: "250k", 
      unit: "/hr",
      desc: "Kualitas jernih untuk konten digital." 
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
            THE <span className="text-neutral-300">RATES.</span>
          </h2>
        </div>

        {/* Grid Responsive: 1 kolom di mobile, 3 di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 md:p-8 rounded-[2rem] border border-neutral-200 flex flex-col justify-between h-full hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex justify-between items-start mb-10">
                  <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center">
                    <s.icon size={24} />
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black italic">{s.price}</span>
                    <span className="text-[10px] font-bold uppercase text-neutral-400">{s.unit}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase italic mb-3 tracking-tight">{s.title}</h3>
                <p className="text-neutral-500 font-bold text-sm leading-relaxed mb-8">{s.desc}</p>
              </div>
              
              <a 
                href={businessConfig.whatsappLink}
                className="w-full py-4 bg-neutral-100 hover:bg-black hover:text-white text-black text-center rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
              >
                Book This Session
              </a>
            </motion.div>
          ))}
        </div>

        {/* Info Tambahan Mobile Friendly */}
        <div className="mt-10 p-6 bg-black rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-black italic uppercase text-sm text-center md:text-left">Dapatkan harga bundle khusus untuk booking di atas 5 jam!</p>
          <a href={businessConfig.whatsappLink} className="text-[10px] font-black uppercase tracking-widest bg-white text-black px-6 py-3 rounded-full">
            Tanya Promo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;