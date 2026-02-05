import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Phone, Music, Send, Bot } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { businessConfig } from '../config/businessConfig';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Yo! Selamat datang di 1Cortone Studio. Ada yang bisa kami bantu seputar jadwal atau gear?' }
  ]);
  const scrollRef = useRef(null);

  // --- LIST PERTANYAAN OTOMATIS ---
  const options = [
    { 
      q: 'Berapa harga sewa?', 
      a: 'Latihan mulai 150K/jam, Recording Live mulai 500K. Detail lengkap ada di menu Services ya!' 
    },
    { 
      q: 'Gear-nya apa aja?', 
      a: 'Kami pakai standar industri: Neumann, Shure, Marshall, & Tama. Cek Gallery untuk foto aslinya!' 
    },
    { 
      q: 'Cara booking?', 
      a: 'Pilih slot kosong di Kalender Agenda di atas, lalu konfirmasi via WhatsApp ke admin kami.' 
    }
  ];

  // Auto scroll ke pesan terbaru
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleOptionClick = (option) => {
    // Tambah pesan user
    setMessages(prev => [...prev, { role: 'user', text: option.q }]);
    
    // Fake typing effect untuk jawaban bot
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: option.a }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed inset-x-0 bottom-0 md:absolute md:inset-auto md:bottom-24 md:right-0 w-full h-[85vh] md:w-[400px] md:h-[580px] bg-white shadow-2xl flex flex-col md:rounded-[2.5rem] overflow-hidden border border-neutral-200"
          >
            {/* HEADER: X di Kiri (flex-row-reverse) */}
            <div className="bg-black p-6 flex items-center justify-between flex-row-reverse shrink-0">
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-neutral-400 hover:text-white transition-colors p-1"
              >
                <X size={28} />
              </button>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-black text-white text-[10px] uppercase tracking-[0.2em] leading-none">1Cortone Assistant</h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[9px] text-green-500 font-bold uppercase tracking-widest">Active Now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CHAT AREA */}
            <div 
              ref={scrollRef} 
              className="flex-1 p-6 overflow-y-auto bg-neutral-50 space-y-4 no-scrollbar"
            >
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-4 text-[13px] font-bold leading-relaxed shadow-sm ${
                    msg.role === 'bot' 
                    ? 'bg-white text-black rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border border-neutral-200' 
                    : 'bg-black text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* QUICK OPTIONS & FOOTER */}
            <div className="p-6 bg-white border-t border-neutral-100 shrink-0 space-y-4">
              {/* List Pertanyaan (Horizontal Scroll on Mobile) */}
              <div className="flex flex-wrap md:grid md:grid-cols-1 gap-2">
                {options.map((opt, i) => (
                  <button 
                    key={i}
                    onClick={() => handleOptionClick(opt)}
                    className="text-[10px] font-black uppercase tracking-tight px-4 py-3 bg-neutral-100 hover:bg-black hover:text-white text-neutral-600 rounded-xl border border-neutral-200 transition-all text-left"
                  >
                    {opt.q}
                  </button>
                ))}
              </div>

              {/* WA Direct Button */}
              <a 
                href={businessConfig.whatsappLink} 
                className="w-full bg-yellow-400 hover:bg-black hover:text-white text-black py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95"
              >
                <Phone size={14} /> Chat Direct to Admin
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LAUNCHER BUTTON */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl border-4 border-white transition-all z-50 ${
          isOpen ? 'bg-white text-black' : 'bg-black text-white'
        }`}
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;