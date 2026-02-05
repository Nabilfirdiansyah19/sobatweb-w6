import { Instagram, Send, MapPin, Mail } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] pt-32 pb-10 px-6 md:px-20 text-white">
      <div className="container mx-auto grid lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-2 space-y-8">
          <h2 className="text-5xl font-serif">{businessConfig.brandName}<span className="text-[#D4AF37]">.</span></h2>
          <p className="max-w-md text-slate-400 font-light leading-relaxed">Mewujudkan hunian impian dengan sentuhan profesional yang abadi.</p>
          <div className="flex gap-4">
            <a href={businessConfig.contact.instagram} className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all"><Instagram size={18} /></a>
            <a href={businessConfig.contact.whatsapp} className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#1A1A1A] transition-all"><Send size={18} /></a>
          </div>
        </div>
        <div className="space-y-8">
          <h4 className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest">Contact</h4>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-3"><MapPin size={16} /> {businessConfig.contact.address}</div>
            <div className="flex items-center gap-3"><Mail size={16} /> {businessConfig.contact.email}</div>
          </div>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 text-center">
        <p className="text-[10px] uppercase tracking-widest text-slate-500">© {new Date().getFullYear()} {businessConfig.brandName} STUDIO. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;