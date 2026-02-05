import { businessConfig } from '../config/businessConfig';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-2">{businessConfig.name}</h2>
          <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-[0.3em]">Elevating Sound Standard Since 2024</p>
        </div>
        <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-neutral-400">
          <a href="#about" className="hover:text-white transition-all">About</a>
          <a href="#services" className="hover:text-white transition-all">Services</a>
          <a href="#schedule" className="hover:text-white transition-all">Schedule</a>
        </div>
        <p className="text-neutral-600 text-[9px] font-bold uppercase">
          © {new Date().getFullYear()} 137 Studio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;