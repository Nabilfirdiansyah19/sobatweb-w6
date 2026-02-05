import { motion } from "framer-motion";

const Gallery = () => {
  const gears = [
    { title: "Neumann U87", cat: "Microphone", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=800" },
    { title: "Tama Starclassic", cat: "Drums", img: "https://images.unsplash.com/photo-1543443258-92b04ad5ecf5?w=800" },
    { title: "Marshall JCM800", cat: "Amplifier", img: "https://images.unsplash.com/photo-1556442295-982497d3493e?w=800" },
    { title: "Live Room A", cat: "Interior", img: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800" },
    { title: "Mixing Console", cat: "Analog Gear", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800" },
    { title: "Acoustic Corner", cat: "Treatments", img: "https://images.unsplash.com/photo-1559732782-b75c02a77587?w=800" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter">
            STUDIO <span className="text-neutral-300">GEARS.</span>
          </h2>
        </div>

        {/* Grid: Berwarna, tanpa grayscale */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gears.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden bg-neutral-100 rounded-[2rem] border border-neutral-100 shadow-sm"
            >
              <img 
                src={item.img} 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-10 flex flex-col justify-end">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-yellow-400 mb-1">{item.cat}</span>
                <h3 className="text-2xl font-black italic uppercase tracking-tighter text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;