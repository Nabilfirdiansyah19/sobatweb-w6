import { ArrowUpRight, CheckCircle2, Sparkles, MoveDown, Shirt } from 'lucide-react'

export default function Hero() {
  const stats = [
    { num: '500+', label: 'Order/Bulan' },
    { num: '50+', label: 'Klien Aktif' },
    { num: '3 Hari', label: 'Pengerjaan' },
    { num: '100%', label: 'Custom' },
  ]

  // Data gambar highlight untuk kolase hero
  const highlights = [
    {
      id: 1,
      tag: 'Kaos',
      img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      tag: 'Hoodie',
      img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      tag: 'Polo',
      img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 4,
      tag: 'Jersey',
      img: 'https://images.unsplash.com/photo-1542512411-9f93f33878b7?auto=format&fit=crop&w=400&q=80',
    }
  ]

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 overflow-hidden bg-white">
      {/* Soft Indigo Glow Background (Tema Terang) */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-50 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-indigo-50/60 blur-[100px] pointer-events-none" />

      {/* Grid Pattern Halus */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'linear-gradient(rgba(79,70,229,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(79,70,229,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        {/* Main Split Content */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* KIRI: Konten Teks Utama */}
          <div className="lg:col-span-7 text-left">
            <div className="reveal inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-display font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <Sparkles size={12} className="fill-indigo-100" />
              Konveksi Premium Terpercaya
            </div>
            
            <h1 className="reveal delay-1 font-display font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tight leading-[1.1] mb-6">
              Wujudkan Pakaian <br />
              <span className="text-indigo-600">Custom Terbaikmu</span>
            </h1>
            
            <p className="reveal delay-2 text-gray-500 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
              Dari merchandise komunitas, seragam kerja, hingga brand clothing lokal. Kami bantu kelola produksi konveksi kamu dari nol dengan transparansi penuh.
            </p>

            <div className="reveal delay-3 flex flex-wrap items-center gap-4">
              <a href="https://wa.me/62812345678" target="_blank" rel="noopener noreferrer"
                className="bg-indigo-600 text-white font-display font-bold text-sm px-8 py-4 rounded-full hover:bg-indigo-700 hover:shadow-[0_10px_30px_rgba(79,70,229,0.25)] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                Mulai Konsultasi Gratis
                <ArrowUpRight size={16} />
              </a>
              <a href="#produk" className="text-gray-500 hover:text-indigo-600 font-display font-bold text-sm px-6 py-4 transition-colors flex items-center gap-2 group">
                Lihat Katalog
                <MoveDown size={14} className="group-hover:translate-y-1 transition-transform text-indigo-600" />
              </a>
            </div>
          </div>

          {/* KANAN: Highlight Portofolio Gambar Kotak Sempurna */}
          <div className="lg:col-span-5 w-full">
            <div className="reveal delay-2 grid grid-cols-2 gap-4 relative p-3 bg-gray-50 border border-gray-200/60 rounded-3xl">
              
              {highlights.map((item) => (
                <div key={item.id} className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200 group border border-gray-100 shadow-sm">
                  <img 
                    src={item.img} 
                    alt={item.tag} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="eager"
                  />
                  {/* Gradasi Gelap Halus di bagian bawah foto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-80" />
                  
                  {/* Floating Micro Badge */}
                  <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md border border-gray-100 text-indigo-600 font-display font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
                    {item.tag}
                  </span>
                </div>
              ))}

              {/* Center Floating Badge (Pemicu Konversi / Trust Factor) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white backdrop-blur-md border border-indigo-100 rounded-2xl p-3 shadow-xl shadow-gray-200/80 flex items-center gap-2.5 whitespace-nowrap pointer-events-none">
                <div className="w-8 h-8 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <p className="text-gray-900 font-display font-black text-xs tracking-wide">QC PASSED</p>
                  <p className="text-gray-400 text-[10px]">100% Garansi Kualitas</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Section (Gaya Minimalis Terang) */}
        <div className="reveal delay-4 grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-12 border-t border-gray-100">
          {stats.map((s, i) => (
            <div key={i} className="bg-gray-50 md:bg-transparent border border-gray-100 md:border-none p-5 md:p-0 rounded-2xl text-center md:text-left shadow-sm md:shadow-none">
              <p className="font-display font-black text-3xl sm:text-4xl text-indigo-600 mb-1">{s.num}</p>
              <p className="text-gray-400 text-xs sm:text-sm tracking-wide uppercase font-semibold">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}