import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Phone, Bot } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { businessConfig } from '../config/businessConfig';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hey! 137 Studio Assistant di sini. Ada yang bisa dibantu?' }
  ]);
  const scrollRef = useRef(null);

  const options = [
    { q: 'Pricelist Studio?', a: 'Latihan (Rehearsal) 150k/jam. Untuk Recording & Mixing silakan klik tombol WA di bawah ya!' },
    { q: 'Lokasi Studio?', a: 'Kami berlokasi di Jakarta. Detail alamat lengkap akan dikirimkan setelah booking dikonfirmasi.' },
    { q: 'Cara Booking?', a: 'Cek jadwal di section Schedule, lalu klik tombol "Book This Slot" atau WA admin.' }
  ];

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { role: 'user', text: option.q }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: option.a }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed inset-x-4 bottom-24 md:absolute md:inset-auto md:bottom-24 md:right-0 w-[calc(100vw-32px)] md:w-[380px] h-[70vh] md:h-[550px] bg-white shadow-2xl flex flex-col rounded-[2rem] overflow-hidden border border-neutral-200"
          >
            {/* Header: X tetap di Kanan */}
            <div className="bg-black p-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
                  <Bot size={20} />
                </div>
                <div>
                  <h4 className="font-black text-white text-[10px] uppercase tracking-widest">137 Assistant</h4>
                  <span className="text-[9px] text-green-500 font-bold uppercase">Online Now</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white hover:bg-white/10 p-1 rounded-lg transition-all">
                <X size={24} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto bg-neutral-50 space-y-4 no-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-4 text-[13px] font-bold ${
                    msg.role === 'bot' ? 'bg-white text-black rounded-2xl rounded-tl-none border border-neutral-200' : 'bg-black text-white rounded-2xl rounded-tr-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-5 bg-white border-t border-neutral-100 space-y-3">
              <div className="flex flex-col gap-2">
                {options.map((opt, i) => (
                  <button key={i} onClick={() => handleOptionClick(opt)} className="text-[10px] font-black uppercase p-3 bg-neutral-100 hover:bg-black hover:text-white rounded-xl transition-all text-left">
                    {opt.q}
                  </button>
                ))}
              </div>
              <a href={businessConfig.whatsappLink} className="w-full bg-black text-white py-4 rounded-xl font-black uppercase text-[10px] flex items-center justify-center gap-2">
                <Phone size={14} /> WhatsApp Admin
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 md:w-20 md:h-20 bg-black text-white rounded-full flex items-center justify-center shadow-2xl border-4 border-white z-50 transition-transform active:scale-90"
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
      </button>
    </div>
  );
};
export default Chatbot;