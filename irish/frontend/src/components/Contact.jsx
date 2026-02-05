import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, MessageCircle, Send } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-20 bg-[#FDFBF7]">
      <div className="container mx-auto grid lg:grid-cols-2 gap-20">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
          <span className="text-[#D4AF37] font-bold uppercase text-xs tracking-widest block mb-4">Contact Us</span>
          <h2 className="text-5xl font-serif mb-10">Mari Konsultasikan <br/> Ruang Impian Anda.</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"><MapPin size={18} className="text-[#D4AF37]"/></div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Office Studio</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{businessConfig.contact.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0"><Mail size={18} className="text-[#D4AF37]"/></div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider mb-1">Email Inquiry</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{businessConfig.contact.email}</p>
              </div>
            </div>

            {/* Tombol WhatsApp Spesial */}
            <a 
              href={businessConfig.contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-6 bg-green-500/5 border border-green-500/20 rounded-[2rem] hover:bg-green-500/10 transition-all group max-w-sm"
            >
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                <MessageCircle size={24} fill="currentColor" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-green-600">Fast Response</p>
                <h4 className="font-bold text-lg text-green-700">Chat via WhatsApp</h4>
              </div>
            </a>
          </div>
        </motion.div>

        <form className="bg-white p-12 rounded-[3.5rem] shadow-xl shadow-black/5 space-y-8 border border-slate-50">
          <div className="grid grid-cols-2 gap-6">
            <input type="text" placeholder="First Name" className="w-full border-b border-slate-100 py-4 outline-none focus:border-[#D4AF37] transition-colors" />
            <input type="text" placeholder="Last Name" className="w-full border-b border-slate-100 py-4 outline-none focus:border-[#D4AF37] transition-colors" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full border-b border-slate-100 py-4 outline-none focus:border-[#D4AF37] transition-colors" />
          <textarea placeholder="Ceritakan detail proyek Anda (Lokasi, Tipe Ruang, dll)" rows="4" className="w-full border-b border-slate-100 py-4 outline-none focus:border-[#D4AF37] resize-none"></textarea>
          <button className="w-full bg-[#1A1A1A] text-white py-6 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-[#D4AF37] transition-all flex items-center justify-center gap-3">
            Send Inquiry <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;