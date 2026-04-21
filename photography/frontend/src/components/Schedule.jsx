import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, X, Send } from 'lucide-react';

const Schedule = () => {
  const [currDate, setCurrDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', project: 'Portrait' });

  // Simulasi data status tanggal (Format: YYYY-MM-DD)
  // Kamu bisa menambahkan lebih banyak tanggal di sini
  const scheduleData = {
    '2026-04-20': 'booked',
    '2026-04-22': 'booked',
    '2026-04-25': 'booked',
    '2026-04-28': 'booked',
    '2026-05-02': 'booked',
  };

  const daysInMonth = new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currDate.getFullYear(), currDate.getMonth(), 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const getStatus = (day) => {
    const dateStr = `${currDate.getFullYear()}-${String(currDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return scheduleData[dateStr] || 'available';
  };

  const handleFinalBooking = (e) => {
    e.preventDefault();
    const msg = `Halo, saya ${formData.name}. Saya ingin booking ${formData.project} untuk tanggal ${selectedDate.toDateString()}.`;
    const waUrl = `https://wa.me/628123456789?text=${encodeURIComponent(msg)}`;

    // Kirim ke Make.com Webhook
    fetch('URL_WEBHOOK_MAKE_ANDA', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        date: selectedDate.toISOString(),
        name: formData.name,
        type: formData.project,
        status: "Pending" 
      })
    });

    window.open(waUrl, '_blank');
    setIsModalOpen(false);
  };

  return (
    <section id="schedule" className="py-32 bg-[#1A120B] px-6 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DAC0A3]/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* KIRI: Konten Teks */}
          <div className="lg:w-1/3 space-y-8">
            <div className="space-y-4">
              <span className="text-[#DAC0A3] text-[10px] font-bold uppercase tracking-[0.6em] block">Availability</span>
              <h2 className="text-6xl font-serif text-[#F8F0E5] leading-tight">Secure Your <br /><span className="italic text-[#DAC0A3]">Session.</span></h2>
            </div>
            <p className="text-[#F8F0E5]/40 font-light leading-relaxed">
              Pilih tanggal yang tersedia untuk sesi foto Anda. Kami menyarankan untuk melakukan booking minimal 2 minggu sebelum hari H.
            </p>
            
            <div className="flex flex-col gap-4 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4 text-[#F8F0E5]/60">
                <div className="w-10 h-10 rounded-full border border-[#DAC0A3]/20 flex items-center justify-center text-[#DAC0A3]">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold">Fast Confirmation</span>
              </div>
              <div className="flex items-center gap-4 text-[#F8F0E5]/60">
                <div className="w-10 h-10 rounded-full border border-[#DAC0A3]/20 flex items-center justify-center text-[#DAC0A3]">
                  <CalendarIcon size={18} />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold">G-Cal Integrated</span>
              </div>
            </div>
          </div>

          {/* KANAN: Kalender Interaktif */}
          <div className="lg:w-2/3 w-full bg-white/[0.02] border border-white/5 rounded-[4rem] p-4 md:p-12 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-12 px-4">
              <div>
                <h3 className="text-[#F8F0E5] font-serif text-3xl">{currDate.toLocaleString('default', { month: 'long' })}</h3>
                <p className="text-[#DAC0A3] text-[10px] font-bold tracking-[0.4em] uppercase">{currDate.getFullYear()}</p>
              </div>
              <div className="flex gap-3">
                <button onClick={() => setCurrDate(new Date(currDate.setMonth(currDate.getMonth() - 1)))} className="p-4 bg-white/5 hover:bg-[#DAC0A3] hover:text-[#1A120B] rounded-2xl transition-all text-[#DAC0A3] border border-white/5">
                  <ChevronLeft size={20} />
                </button>
                <button onClick={() => setCurrDate(new Date(currDate.setMonth(currDate.getMonth() + 1)))} className="p-4 bg-white/5 hover:bg-[#DAC0A3] hover:text-[#1A120B] rounded-2xl transition-all text-[#DAC0A3] border border-white/5">
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-3">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <div key={d} className="text-center text-[9px] font-black uppercase text-[#DAC0A3]/30 py-4 tracking-widest">{d}</div>
              ))}
              
              {blanks.map(i => <div key={i} />)}
              
              {days.map(day => {
                const status = getStatus(day);
                const isSelected = selectedDate.getDate() === day && selectedDate.getMonth() === currDate.getMonth();
                
                return (
                  <motion.button
                    key={day}
                    whileHover={status === 'available' ? { y: -5 } : {}}
                    onClick={() => {
                      if(status === 'available') {
                        setSelectedDate(new Date(currDate.getFullYear(), currDate.getMonth(), day));
                        setIsModalOpen(true);
                      }
                    }}
                    className={`
                      relative aspect-[4/5] md:aspect-square flex flex-col items-center justify-center rounded-[1.5rem] md:rounded-[2.5rem] transition-all border
                      ${status === 'booked' ? 'bg-red-500/5 border-red-500/10 opacity-30 cursor-not-allowed' : 'bg-white/5 border-white/10 hover:border-[#DAC0A3]/50'}
                    `}
                  >
                    <span className={`text-lg font-serif ${status === 'booked' ? 'text-red-400 line-through' : 'text-[#F8F0E5]'}`}>{day}</span>
                    <span className={`text-[7px] uppercase font-bold tracking-tighter mt-1 ${status === 'booked' ? 'text-red-400/50' : 'text-[#DAC0A3]'}`}>
                      {status}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL BOOKING */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[1100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#1A120B]/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#3C2A21] w-full max-w-lg rounded-[3rem] p-10 border border-[#DAC0A3]/20 shadow-3xl"
            >
              <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-[#DAC0A3]/40 hover:text-[#DAC0A3]"><X size={24}/></button>
              
              <div className="mb-10 text-center">
                <span className="text-[#DAC0A3] text-[9px] font-bold uppercase tracking-[0.4em] mb-2 block">Confirm Date</span>
                <h3 className="text-3xl font-serif text-[#F8F0E5]">{selectedDate.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</h3>
              </div>

              <form onSubmit={handleFinalBooking} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-[#DAC0A3] font-bold px-4">Nama Lengkap</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Contoh: Muhammad Nabil"
                    className="w-full bg-[#1A120B] border border-white/5 rounded-2xl py-5 px-6 text-[#F8F0E5] placeholder:opacity-20 outline-none focus:border-[#DAC0A3] transition-all"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-widest text-[#DAC0A3] font-bold px-4">Tipe Project</label>
                  <select 
                    className="w-full bg-[#1A120B] border border-white/5 rounded-2xl py-5 px-6 text-[#F8F0E5] outline-none focus:border-[#DAC0A3] transition-all appearance-none"
                    onChange={(e) => setFormData({...formData, project: e.target.value})}
                  >
                    <option value="Portrait">Portrait Session</option>
                    <option value="Wedding">Wedding / Engagement</option>
                    <option value="Commercial">Commercial Product</option>
                    <option value="Event">Event Coverage</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#DAC0A3] text-[#1A120B] py-6 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3 hover:brightness-110 transition-all shadow-xl shadow-[#DAC0A3]/10"
                >
                  Confirm & WhatsApp <Send size={14}/>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Schedule;