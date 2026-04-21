import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Send, CalendarDays, Trash2, Check, Clock, Sparkles, ArrowRight } from 'lucide-react';

const Schedule = () => {
  const [currDate, setCurrDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({ 
    name: '', 
    startTime: '10:00', 
    endTime: '14:00' 
  });

  // Data Simulasi Tanggal Terisi
  const bookedDates = [
    `${currDate.getFullYear()}-${String(currDate.getMonth() + 1).padStart(2, '0')}-10`,
    `${currDate.getFullYear()}-${String(currDate.getMonth() + 1).padStart(2, '0')}-15`,
  ];

  const daysInMonth = new Date(currDate.getFullYear(), currDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currDate.getFullYear(), currDate.getMonth(), 1).getDay();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const toggleDate = (day) => {
    const dateStr = `${currDate.getFullYear()}-${String(currDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    if (bookedDates.includes(dateStr)) return;

    if (selectedDates.includes(dateStr)) {
      setSelectedDates(selectedDates.filter(d => d !== dateStr));
    } else {
      setSelectedDates([...selectedDates, dateStr].sort());
    }
  };

  const handleFinalBooking = (e) => {
    e.preventDefault();
    const dateList = selectedDates.map(d => new Date(d).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })).join(", ");
    const msg = `Halo, saya ${formData.name}. Ingin booking jadwal foto untuk tanggal: ${dateList} pkl ${formData.startTime} - ${formData.endTime}`;
    window.open(`https://wa.me/628123456789?text=${encodeURIComponent(msg)}`, '_blank');
    setIsModalOpen(false);
  };

  return (
    <section id="schedule" className="py-20 md:py-32 bg-[#1A120B] px-4 md:px-10 min-h-screen relative overflow-hidden text-[#F8F0E5]">
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 text-[#DAC0A3]">
            <Sparkles size={14} />
            <span className="text-[9px] font-black uppercase tracking-[0.4em]">Reservation</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-serif leading-tight">
            Select Your <br/><span className="italic text-[#DAC0A3]">Best Date.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* CALENDAR CARD */}
          <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] md:rounded-[4rem] p-4 md:p-12 backdrop-blur-3xl shadow-2xl">
            
            {/* Navigation */}
            <div className="flex justify-between items-center mb-8 md:mb-12 px-2 md:px-4">
              <div>
                <h3 className="text-2xl md:text-4xl font-serif">{currDate.toLocaleString('default', { month: 'long' })}</h3>
                <p className="text-[#DAC0A3] text-xs tracking-widest opacity-60">{currDate.getFullYear()}</p>
              </div>
              <div className="flex gap-2 bg-[#1A120B] p-1.5 rounded-2xl border border-white/10">
                <button onClick={() => setCurrDate(new Date(currDate.setMonth(currDate.getMonth() - 1)))} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[#DAC0A3] hover:bg-[#DAC0A3] hover:text-[#1A120B] rounded-xl transition-all"><ChevronLeft size={20}/></button>
                <button onClick={() => setCurrDate(new Date(currDate.setMonth(currDate.getMonth() + 1)))} className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-[#DAC0A3] hover:bg-[#DAC0A3] hover:text-[#1A120B] rounded-xl transition-all"><ChevronRight size={20}/></button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-7 gap-1.5 md:gap-4 text-center">
              {['S','M','T','W','T','F','S'].map(d => <div key={d} className="text-[10px] font-black text-[#DAC0A3]/30 pb-4 md:pb-8 uppercase tracking-widest">{d}</div>)}
              {blanks.map(i => <div key={i} />)}
              {days.map(day => {
                const dateStr = `${currDate.getFullYear()}-${String(currDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const isBooked = bookedDates.includes(dateStr);
                const isSelected = selectedDates.includes(dateStr);

                return (
                  <button
                    key={day}
                    disabled={isBooked}
                    onClick={() => toggleDate(day)}
                    className={`
                      aspect-square rounded-xl md:rounded-[2.5rem] text-sm md:text-xl font-serif transition-all relative flex items-center justify-center border-2
                      ${isBooked ? 'bg-red-500/5 border-red-500/10 text-red-500/20 cursor-not-allowed' : 'bg-white/[0.03] border-white/5 hover:border-[#DAC0A3]/50'}
                      ${isSelected ? 'bg-[#DAC0A3] border-[#DAC0A3] text-[#1A120B] font-bold z-10' : ''}
                    `}
                  >
                    <span className={isBooked ? "line-through opacity-30" : ""}>{day}</span>
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div 
                          initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                          className="absolute -top-1.5 -right-1.5 bg-[#1A120B] text-[#DAC0A3] w-5 h-5 md:w-7 md:h-7 rounded-full flex items-center justify-center shadow-lg border border-[#DAC0A3] z-20"
                        >
                          <Check size={10} strokeWidth={4} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-12 flex justify-center gap-8 opacity-30 text-[9px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white/20" /> Available</div>
              <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-500" /> Full</div>
            </div>
          </div>
        </div>
      </div>

      {/* MINI FLOATING CONFIRM (Kiri Bawah - Mobile & Desktop) */}
      <AnimatePresence>
        {selectedDates.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -50 }}
            className="fixed bottom-6 left-6 z-[1000]"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center gap-4 bg-[#DAC0A3] p-2 pr-6 rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-all"
            >
               <div className="bg-[#1A120B] text-[#DAC0A3] w-12 h-12 rounded-full flex items-center justify-center relative">
                 <CalendarDays size={18} />
                 <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#DAC0A3] font-black">
                   {selectedDates.length}
                 </span>
               </div>
               <div className="text-left">
                 <p className="text-[#1A120B] text-[10px] font-black uppercase tracking-[0.2em] leading-none">Confirm</p>
                 <p className="text-[#1A120B]/60 text-[9px] font-bold">Booking Now</p>
               </div>
               <ArrowRight size={14} className="text-[#1A120B] group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MODAL FORM */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-[#1A120B]/95 backdrop-blur-md" />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              className="relative bg-[#2D2018] w-full max-w-sm rounded-[3rem] p-8 border border-white/10"
            >
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-serif">Booking Detail</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-white/20"><X size={20}/></button>
              </div>

              <form onSubmit={handleFinalBooking} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-[#DAC0A3] font-bold ml-2">Nama Anda</label>
                  <input required type="text" className="w-full bg-[#1A120B] border border-white/5 rounded-2xl py-4 px-6 text-sm focus:border-[#DAC0A3] outline-none" placeholder="Input nama..." onChange={(e) => setFormData({...formData, name: e.target.value})} />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#DAC0A3] font-bold ml-2 flex items-center gap-2"><Clock size={12}/> Mulai</label>
                    <input type="time" value={formData.startTime} className="w-full bg-[#1A120B] border border-white/5 rounded-2xl py-4 px-4 text-sm outline-none" onChange={(e) => setFormData({...formData, startTime: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-[#DAC0A3] font-bold ml-2 flex items-center gap-2"><Clock size={12}/> Selesai</label>
                    <input type="time" value={formData.endTime} className="w-full bg-[#1A120B] border border-white/5 rounded-2xl py-4 px-4 text-sm outline-none" onChange={(e) => setFormData({...formData, endTime: e.target.value})} />
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#DAC0A3] text-[#1A120B] py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] flex items-center justify-center gap-3">
                  WhatsApp <Send size={14}/>
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