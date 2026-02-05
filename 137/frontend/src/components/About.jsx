import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-black overflow-hidden rounded-[3rem]">
              <img 
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800" 
                className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                alt="Studio setup"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-black text-white p-12 hidden md:block rounded-full">
              <h3 className="text-5xl font-black italic uppercase leading-none">137<br/>STU.</h3>
            </div>
          </div>

          <div>
            <h2 className="text-6xl md:text-8xl font-black uppercase italic mb-8 tracking-tighter leading-none text-black">
              CRAFTING <br /> THE <span className="text-neutral-400">VIBE.</span>
            </h2>
            <p className="text-xl text-neutral-800 mb-10 font-bold leading-relaxed italic">
              "137 Studio lahir dari keinginan untuk memberikan ruang kreasi tanpa batas bagi para musisi. Kami menggabungkan gear analog klasik dengan alur kerja digital modern."
            </p>
            <div className="space-y-6">
              {['Acoustically Treated', 'High-End Preamps', 'Comfortable Lounge'].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-black"></div>
                  <span className="font-black uppercase italic text-lg tracking-tight">{item}</span>
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