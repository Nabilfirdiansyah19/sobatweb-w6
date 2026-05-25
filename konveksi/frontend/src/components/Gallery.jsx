import { Image, Eye, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function Gallery() {
  const items = [
    {
      id: 1,
      title: 'Kaos Komunitas UMN Informatics',
      category: 'Kaos',
      img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80',
      qty: '120 pcs'
    },
    {
      id: 2,
      title: 'Hoodie Premium Over-sized Streetwear',
      category: 'Hoodie',
      img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80',
      qty: '45 pcs'
    },
    {
      id: 3,
      title: 'Polo Shirt Bordir Eksklusif Staff Kantor',
      category: 'Polo & Kemeja',
      img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=600&q=80',
      qty: '85 pcs'
    },
    
    {
      id: 5,
      title: 'Kemeja Kerja Drill Variasi Warna',
      category: 'Polo & Kemeja',
      img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=600&q=80',
      qty: '50 pcs'
    },
    {
      id: 6,
      title: 'Kaos Event Musik Sablon Plastisol',
      category: 'Kaos',
      img: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=600&q=80',
      qty: '300 pcs'
    }
  ]

  return (
    <section id="galeri" className="py-32 bg-white relative overflow-hidden">
      {/* Soft Indigo Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-50 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-display font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <Image size={12} className="text-indigo-600" />
            Galeri Produk
          </div>
          <h2 className="reveal delay-1 font-display font-black text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900">
            Hasil Produksi Kami
          </h2>
          <p className="reveal delay-2 text-gray-500 max-w-md mx-auto text-base">
            Dokumentasi asli hasil pengerjaan pakaian pesanan klien yang telah selesai melewati tahap QC ketat.
          </p>
        </div>

        {/* Gallery Grid - Ukuran konsisten 100% */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {items.map((item) => (
            <div 
              key={item.id} 
              className="reveal flex flex-col h-full bg-gray-50 border border-gray-100 rounded-2xl overflow-hidden hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-400 group"
            >
              {/* Image Container - Dikunci dengan rasio kotak sempurna (aspect-square) */}
              <div className="relative aspect-square w-full overflow-hidden bg-gray-200 flex-shrink-0">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay Hover Effect */}
                <div className="absolute inset-0 bg-indigo-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <Eye size={16} />
                  </div>
                </div>

                {/* Badge Tag */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-gray-100 text-indigo-600 text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1.5 rounded-lg shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Card Info Content */}
              <div className="p-5 flex flex-col flex-1 justify-between bg-white border-t border-gray-50">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="font-display font-bold text-base text-gray-900 leading-tight group-hover:text-indigo-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-gray-400 group-hover:text-indigo-600 transition-colors flex-shrink-0 mt-0.5">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    <span>Selesai</span>
                  </div>
                  <span className="text-gray-700 text-xs font-display font-bold px-2 py-1 bg-gray-50 border border-gray-100 rounded">
                    {item.qty}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Info Section */}
        <div className="reveal mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Ingin melihat katalog kain atau konsultasi sampel?{' '}
            <a href="https://wa.me/62812345678" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-0.5">
              Hubungi CS Kami via WA →
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}