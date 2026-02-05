import { motion } from "framer-motion";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800",
    "https://images.unsplash.com/photo-1520529624515-0814407481ba?w=800",
    "https://images.unsplash.com/photo-1514320298573-63e2865ba6a2?w=800",
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800"
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-black">
            VISUAL <span className="text-neutral-300">JOURNEY.</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-[1.5rem] bg-neutral-100 border border-neutral-200"
            >
              <img 
                src={img} 
                alt="Studio"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-[10px] font-black uppercase tracking-[0.4em] border border-white px-4 py-2">View Space</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;