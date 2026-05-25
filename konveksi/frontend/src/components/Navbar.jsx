import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { label: 'Cara Kerja', href: '#cara-kerja' },
    { label: 'Produk', href: '#produk' },
    { label: 'Kenapa Kami', href: '#kenapa-kami' },
    { label: 'Harga', href: '#harga' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100 py-3 shadow-sm' : 'py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-display font-black text-white text-sm">S</div>
          <span className="font-display font-bold text-sm tracking-widest text-gray-900 uppercase">Sobat<span className="text-indigo-600">Konveksi</span></span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-gray-600 hover:text-indigo-600 text-sm font-medium px-4 py-2 rounded-full hover:bg-gray-50 transition-all duration-300">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a href="#harga" className="hidden md:flex items-center gap-2 bg-indigo-600 text-white font-display font-bold text-xs px-5 py-2.5 rounded-full hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/20 transition-all duration-300 hover:-translate-y-0.5">
            Order Sekarang <ArrowRight size={14} />
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-1 text-gray-900">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 bg-white ${open ? 'max-h-96 border-b border-gray-100 shadow-lg' : 'max-h-0'}`}>
        <div className="px-6 pt-4 pb-6 flex flex-col gap-1">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              className="text-gray-800 font-display font-bold text-2xl py-3 border-b border-gray-50 hover:text-indigo-600 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#harga" onClick={() => setOpen(false)}
            className="mt-4 bg-indigo-600 text-white font-display font-bold text-sm px-6 py-3.5 rounded-full text-center flex items-center justify-center gap-2">
            Order Sekarang <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </nav>
  )
}