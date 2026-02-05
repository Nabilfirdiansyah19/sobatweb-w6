import { useState } from 'react';
import { motion } from 'framer-motion';
import { businessConfig } from '../config/businessConfig';

const ScheduleCalendar = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const days = Array.from({ length: 7 }, (_, i) => i + new Date().getDate());

  return (
    <section id="schedule" className="py-32 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase mb-16 tracking-tighter">
          Check Your <span className="text-neutral-600">Slot.</span>
        </h2>
        
        <div className="flex justify-center gap-4 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`min-w-[80px] h-[100px] flex flex-col items-center justify-center rounded-3xl transition-all border-2 ${
                selectedDay === day ? 'bg-white text-black border-white' : 'text-white border-white/10'
              }`}
            >
              <span className="text-[10px] font-black uppercase mb-1">Feb</span>
              <span className="text-3xl font-black">{day}</span>
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {[
            { time: "10:00 - 14:00", status: "Available" },
            { time: "14:00 - 18:00", status: "Booked" },
            { time: "19:00 - 23:00", status: "Available" }
          ].map((slot, i) => (
            <div key={i} className="flex items-center justify-between p-8 bg-neutral-900/50 border border-white/5 rounded-3xl">
              <div className="text-left">
                <p className="text-white font-black text-xl italic">{slot.time}</p>
                <p className={`text-[10px] uppercase font-black tracking-widest ${slot.status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
                  {slot.status}
                </p>
              </div>
              {slot.status === 'Available' && (
                <a 
                  href={`${businessConfig.whatsappLink}&text=Halo%20137%20Studio%2C%20saya%20mau%20booking%20slot%20jam%20${slot.time}`} 
                  className="bg-white text-black px-6 py-3 rounded-xl font-black uppercase text-[10px]"
                >
                  Book
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ScheduleCalendar;