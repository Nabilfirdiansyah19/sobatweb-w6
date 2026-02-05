import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import ScheduleCalendar from './components/ScheduleCalendar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbots';

function App() {
  return (
    <div className="bg-white text-slate-900 scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <ScheduleCalendar />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;