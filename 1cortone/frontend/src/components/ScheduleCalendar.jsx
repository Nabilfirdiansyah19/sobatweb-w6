import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const ScheduleCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  // Helper untuk mendapatkan info bulan
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = currentDate.toLocaleString('id-ID', { month: 'long' });

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
    setSelectedDate(1);
  };

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
    setSelectedDate(1);
  };

  // Data Dummy Jam
  const timeSlots = [
    { time: "10:00 - 12:00", status: "Booked", user: "Overdriven Band" },
    { time: "12:00 - 14:00", status: "Available", user: null },
    { time: "14:00 - 16:00", status: "Available", user: null },
    { time: "16:00 - 18:00", status: "Booked", user: "Denny (Solo)" },
    { time: "18:00 - 20:00", status: "Available", user: null },
    { time: "20:00 - 22:00", status: "Maintenance", user: null },
  ];

  return (
    <section id="schedule" className="py-32 bg-neutral-950 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header & Month Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <div className="space-y-2 text-center md:text-left">
              <h2 className="text-6xl font-black uppercase italic tracking-tighter leading-none">
                Studio <br /><span className="text-neutral-300">Agenda.</span>
              </h2>
            </div>

            <div className="flex items-center gap-6 bg-neutral-900 p-4 rounded-[2rem] border border-white/5 shadow-2xl">
              <button onClick={prevMonth} className="p-2 hover:bg-white hover:text-black rounded-full transition-all">
                <ChevronLeft size={24} />
              </button>
              
              <div className="text-center min-w-[150px]">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-500">{year}</p>
                <h3 className="text-xl font-black uppercase italic">{monthName}</h3>
              </div>

              <button onClick={nextMonth} className="p-2 hover:bg-white hover:text-black rounded-full transition-all">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Date Horizontal Scroller */}
          <div className="flex overflow-x-auto gap-3 pb-8 no-scrollbar scroll-smooth">
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDate(d)}
                className={`flex-shrink-0 w-16 h-24 rounded-3xl flex flex-col items-center justify-center transition-all border ${
                  selectedDate === d 
                  ? 'bg-white text-black border-white shadow-[0_0_30px_rgba(255,255,255,0.2)] scale-110 z-10' 
                  : 'bg-neutral-900 text-neutral-500 border-white/5 hover:border-white/20'
                }`}
              >
                <span className="text-[10px] font-black uppercase mb-1">
                  {new Date(year, month, d).toLocaleDateString('id-ID', { weekday: 'short' })}
                </span>
                <span className="text-2xl font-black italic">{d}</span>
              </button>
            ))}
          </div>

          {/* Hourly Slots Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            <AnimatePresence mode='wait'>
              {timeSlots.map((slot, i) => (
                <motion.div
                  key={`${selectedDate}-${monthName}-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className={`p-8 rounded-[2.5rem] border transition-all ${
                    slot.status === "Available" 
                    ? 'bg-white text-black border-transparent' 
                    : 'bg-neutral-900 border-white/5 opacity-40 grayscale'
                  }`}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl ${slot.status === "Available" ? 'bg-black text-white' : 'bg-neutral-800 text-neutral-500'}`}>
                      <Clock size={20} />
                    </div>
                    <span className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${
                      slot.status === "Available" 
                      ? 'border-black text-black' 
                      : 'border-white/10 text-neutral-500'
                    }`}>
                      {slot.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-1">{slot.time}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-neutral-400">
                    {slot.user ? `Session: ${slot.user}` : "Ready for take"}
                  </p>

                  {slot.status === "Available" && (
                    <a 
                      // PERBAIKAN: Menggunakan selectedDate bukan day
                      href={`${businessConfig.whatsappLink}&text=Halo%201Cortone%2C%20saya%20ingin%20booking%20jadwal%20${selectedDate}%20${monthName}%20${year}%20jam%20${slot.time}`}
                      className="mt-8 flex items-center justify-center w-full bg-black text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:invert transition-all"
                    >
                      Book This Slot
                    </a>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Legend */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 py-8 border-t border-white/5">
             <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                <div className="w-3 h-3 bg-white rounded-full"></div> Available
             </div>
             <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                <div className="w-3 h-3 bg-neutral-800 rounded-full"></div> Booked/Maintenance
             </div>
             <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">
                <AlertCircle size={14}/> All times in WIB
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCalendar;