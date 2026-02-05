import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbots';
import PreLoader from './components/PreLoader';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Materials from './components/Materials';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sinkronisasi dengan durasi PreLoader (sekitar 2.8 - 3 detik)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-[#FDFBF7] min-h-screen font-sans selection:bg-[#D4AF37] selection:text-white">
      {/* 1. PreLoader: Muncul pertama kali saat web dibuka */}
      <PreLoader />

      {/* 2. Komponen Utama: Dibungkus div agar muncul smooth setelah loading */}
      <main className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <Hero />
        <About />
        <Materials />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </main>

      {/* 3. Floating Widget: Chatbot */}
      <Chatbot isLoading={loading} />
      
      {/* 4. Dekorasi Background Global (Opsional untuk kesan mewah) */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-40">
        <div className="absolute top-[10%] left-[-5%] w-[40vw] h-[40vw] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30vw] h-[30vw] bg-[#D4AF37]/5 blur-[100px] rounded-full" />
      </div>
    </div>
  );
}

export default App;