import { Instagram, Send, MapPin, Phone, Music, ArrowUp } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black">
                <Music size={20} />
              </div>
              <span className="font-black text-2xl tracking-tighter italic uppercase">
                1CORTONE
              </span>
            </div>
            <p className="text-neutral-500 font-medium text-sm leading-relaxed max-w-xs">
              Membawa standar baru dalam produksi musik dan ruang latihan. 
              Kualitas tanpa kompromi untuk setiap musisi.
            </p>
          </div>

          {/* Services Quick Links */}
          <div className="space-y-6">
            <h4 className="font-black uppercase text-xs tracking-[0.2em] text-white">Services</h4>
            <ul className="space-y-3 font-bold text-sm text-neutral-500 uppercase italic">
              <li><a href="#services" className="hover:text-white transition-colors">Music Rehearsal</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Live Recording</a></li>
              <li><a href="#schedule" className="hover:text-white transition-colors">Studio Schedule</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Equipments</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6">
            <h4 className="font-black uppercase text-xs tracking-[0.2em] text-white">Contact Us</h4>
            <div className="space-y-4">
              <a 
                href={businessConfig.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-3 text-neutral-500 hover:text-white transition-colors group"
              >
                <Instagram size={18} />
                <span className="text-sm font-bold italic">@1cortone_studio</span>
              </a>
              <a 
                href={businessConfig.whatsappLink}
                className="flex items-center gap-3 text-neutral-500 hover:text-white transition-colors group"
              >
                <Phone size={18} />
                <span className="text-sm font-bold italic">+62 881 0119 09454</span>
              </a>
            </div>
          </div>

          {/* Newsletter / Action */}
          <div className="space-y-6">
            <h4 className="font-black uppercase text-xs tracking-[0.2em] text-white">Join The Session</h4>
            <div className="relative group">
              <input 
                type="text" 
                placeholder="Your Email" 
                className="w-full bg-neutral-900 border border-white/10 rounded-2xl px-6 py-4 outline-none font-bold text-sm focus:border-white/30 transition-all" 
              />
              <button className="absolute right-2 top-2 bottom-2 bg-white text-black px-4 rounded-xl hover:scale-105 transition-all">
                <Send size={16}/>
              </button>
            </div>
            <p className="text-[10px] text-neutral-600 font-black uppercase tracking-widest leading-relaxed">
              Dapatkan info promo & slot kosong terbaru langsung di emailmu.
            </p>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.5em]">
              © 2024 1CORTONE STUDIO. ALL RIGHTS RESERVED.
            </p>
            <p className="text-[9px] text-neutral-800 font-bold uppercase tracking-widest">
              Engineered for High-Fidelity Performance.
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-neutral-500 hover:text-white transition-all"
          >
            Back to Top 
            <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;