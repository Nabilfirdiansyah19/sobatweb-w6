import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Sparkles, Plus } from 'lucide-react';

const projects = [
  { id: 1, title: "Emerald Grand Living", category: "Residential", location: "Dharmawangsa", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800" },
  { id: 2, title: "Modern Minimalist Office", category: "Commercial", location: "SCBD Jakarta", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" },
  { id: 3, title: "Classic Royale Kitchen", category: "Residential", location: "Menteng", img: "https://images.unsplash.com/photo-1556912177-c54030639a09?w=800" },
  { id: 4, title: "Velvet Sky Lounge", category: "Commercial", location: "Senopati", img: "https://images.unsplash.com/photo-1560624052-449f5ddf0c3d?w=800" },
  { id: 5, title: "Gold Accented Master", category: "Bedroom", location: "Pondok Indah", img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800" },
  { id: 6, title: "Zen Garden Bathroom", category: "Wellness", location: "Ubud, Bali", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800" },
  { id: 7, title: "Industrial Coffee Roaster", category: "Commercial", location: "Bandung", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800" },
  { id: 8, title: "Marble Entryway Hall", category: "Residential", location: "Surabaya", img: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800" },
];

const categories = ["All", "Residential", "Commercial", "Bedroom", "Wellness"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-20 md:py-32 px-4 md:px-6 bg-[#FDFBF7]">
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4 text-[#D4AF37]">
              <Sparkles size={16} />
              <span className="font-bold tracking-[0.4em] uppercase text-[9px] md:text-[10px]">Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-serif leading-tight">
              Selected <br className="hidden md:block" /><span className="italic text-[#D4AF37]">Architectural Works.</span>
            </h2>
          </div>
          
          {/* Category Filter - MOBILE RESPONSIVE FIX */}
          <div className="w-full md:w-auto overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
            <div className="flex md:flex-wrap gap-3 whitespace-nowrap md:whitespace-normal">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all shrink-0 ${
                    filter === cat 
                    ? "bg-[#1A1A1A] text-white shadow-lg shadow-black/10" 
                    : "bg-white text-slate-400 border border-slate-100 hover:border-[#D4AF37]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Grid - RESPONSIVE COLUMNS */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-white border border-slate-100"
              >
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay - Di Mobile dibuat selalu sedikit terlihat atau muncul saat tap */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-10 opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[#D4AF37] text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-2">{project.category}</span>
                  <h3 className="text-white text-xl md:text-3xl font-serif mb-4 leading-tight">{project.title}</h3>
                  
                  <div className="flex items-center justify-between text-white/70">
                    <span className="flex items-center gap-2 text-[10px] md:text-[11px] font-light italic">
                      <MapPin size={12} className="text-[#D4AF37]" /> {project.location}
                    </span>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/20 flex items-center justify-center bg-[#D4AF37]/20 md:bg-transparent group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-colors">
                      <Plus size={16} className="text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;