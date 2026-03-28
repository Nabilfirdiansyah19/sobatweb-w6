import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Share, PlusSquare, Download, X, 
  MoreVertical, Smartphone, Chrome, 
  ChevronRight, Apple 
} from 'lucide-react';

const PWAHandler = () => {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [activeTab, setActiveTab] = useState('chrome'); // 'chrome' atau 'safari'

  useEffect(() => {
    const isApp = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (isApp) return;

    // Deteksi awal untuk menentukan tab mana yang aktif duluan
    const isIphone = /iPhone|iPad|iPod/.test(navigator.userAgent);
    setActiveTab(isIphone ? 'safari' : 'chrome');

    const handlePrompt = (e) => {
      e.preventDefault();
      setInstallPrompt(e);
      setTimeout(() => setIsVisible(true), 3000);
    };
    window.addEventListener('beforeinstallprompt', handlePrompt);
    const timer = setTimeout(() => { if (!isVisible) setIsVisible(true); }, 6000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handlePrompt);
      clearTimeout(timer);
    };
  }, [isVisible]);

  const handleInstallLogic = async () => {
    if (installPrompt) {
      installPrompt.prompt();
      const { outcome } = await installPrompt.userChoice;
      if (outcome === 'accepted') setIsVisible(false);
    } else {
      setShowTutorial(true);
    }
  };

  return (
    <>
     {/* BANNER UTAMA */}
<AnimatePresence>
  {isVisible && !showTutorial && (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 md:w-[400px] z-[9998]"
    >
      <div className="relative bg-[#1A120B]/95 backdrop-blur-2xl border border-[#DAC0A3]/20 p-6 rounded-[2.5rem] shadow-2xl flex items-center gap-5">
        
        {/* Tombol X (Close) di Pojok Kanan Atas Banner */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-5 text-[#DAC0A3]/30 hover:text-[#DAC0A3] transition-colors p-1"
        >
          <X size={16} />
        </button>

        {/* Icon Aplikasi */}
        <div className="w-14 h-14 bg-[#DAC0A3] rounded-2xl flex-shrink-0 overflow-hidden shadow-inner">
          <img src="/satu.png" alt="App Icon" className="w-full h-full object-cover" />
        </div>

        {/* Konten Teks */}
        <div className="flex-1 pr-4">
          <h4 className="text-[#DAC0A3] font-serif text-sm tracking-wide">PhotoPorto App</h4>
          <p className="text-[#DAC0A3]/50 text-[10px] leading-tight">Install for a seamless experience.</p>
        </div>

        {/* Tombol Aksi */}
        <button 
          onClick={handleInstallLogic}
          className="bg-[#DAC0A3] text-[#1A120B] px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform"
        >
          Get
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      {/* MODAL TUTORIAL POPUP */}
      <AnimatePresence>
        {showTutorial && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowTutorial(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-[#1A120B] border border-[#DAC0A3]/30 w-full max-w-md rounded-[3rem] overflow-hidden shadow-2xl"
            >
              {/* Header Popup */}
              <div className="p-6 border-b border-[#DAC0A3]/10 flex justify-between items-center bg-[#DAC0A3]/5">
                <h3 className="text-[#DAC0A3] font-serif text-lg">Installation Guide</h3>
                <button onClick={() => setShowTutorial(false)} className="text-[#DAC0A3]/40"><X size={20}/></button>
              </div>

              {/* Tab Selector */}
              <div className="flex p-2 gap-2 bg-[#DAC0A3]/5 m-6 rounded-2xl border border-[#DAC0A3]/10">
                <button 
                  onClick={() => setActiveTab('chrome')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'chrome' ? 'bg-[#DAC0A3] text-[#1A120B]' : 'text-[#DAC0A3]/40 hover:text-[#DAC0A3]'}`}
                >
                  <Chrome size={14} /> Android / Chrome
                </button>
                <button 
                  onClick={() => setActiveTab('safari')}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === 'safari' ? 'bg-[#DAC0A3] text-[#1A120B]' : 'text-[#DAC0A3]/40 hover:text-[#DAC0A3]'}`}
                >
                  <Apple size={14} /> iOS / Safari
                </button>
              </div>

              {/* Content Berdasarkan Tab */}
              <div className="px-8 pb-8 space-y-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    className="space-y-6"
                  >
                    {activeTab === 'chrome' ? (
                      <>
                        <Step number="1" icon={<MoreVertical size={16}/>} text="Klik ikon titik tiga di pojok kanan atas browser Chrome Anda." />
                        <Step number="2" icon={<Smartphone size={16}/>} text="Pilih menu 'Instal Aplikasi' atau 'Tambahkan ke Layar Utama'." />
                      </>
                    ) : (
                      <>
                        <Step number="1" icon={<Share size={16}/>} text="Klik tombol 'Share' (ikon kotak dengan panah atas) di navigasi bawah Safari." />
                        <Step number="2" icon={<PlusSquare size={16}/>} text="Gulir ke bawah dan pilih menu 'Add to Home Screen' (Tambahkan ke Layar Utama)." />
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                <button 
                  onClick={() => setShowTutorial(false)}
                  className="w-full py-4 bg-[#DAC0A3] text-[#1A120B] rounded-2xl font-black uppercase text-[11px] tracking-[0.2em] shadow-xl active:scale-95 transition-all mt-4"
                >
                  Done
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

// Komponen Kecil untuk Step agar kode rapi
const Step = ({ number, icon, text }) => (
  <div className="flex items-start gap-5 group">
    <div className="w-10 h-10 rounded-2xl bg-[#DAC0A3]/10 border border-[#DAC0A3]/20 flex-shrink-0 flex items-center justify-center text-[#DAC0A3] text-sm font-bold shadow-inner">
      {number}
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1 text-[#DAC0A3] text-[10px] font-bold uppercase tracking-tighter opacity-60">
        Action: {icon}
      </div>
      <p className="text-[#DAC0A3]/80 text-xs leading-relaxed font-medium">
        {text}
      </p>
    </div>
  </div>
);

export default PWAHandler;