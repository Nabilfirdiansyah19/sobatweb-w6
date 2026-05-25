import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import FloatingChatbot from './components/FloatingChatbot'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-dark min-h-screen overflow-x-hidden">
      <FloatingChatbot />
      <Navbar />
      <Hero />
      <HowItWorks />
      <Products />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  )
}