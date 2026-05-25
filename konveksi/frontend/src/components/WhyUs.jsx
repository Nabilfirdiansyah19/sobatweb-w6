import { Zap, Target, MessageSquare, Package, Truck, ShieldCheck, Star } from 'lucide-react'

export default function WhyUs() {
  const reasons = [
    { icon: <Zap className="text-indigo-600" size={20} />, title: 'Pengerjaan Cepat', desc: '3–7 hari kerja untuk order standar. Urgent? Ada jalur express.' },
    { icon: <Target className="text-indigo-600" size={20} />, title: 'Kualitas Terjamin', desc: 'QC ketat di setiap tahap produksi. Tidak lolos QC, tidak dikirim.' },
    { icon: <MessageSquare className="text-indigo-600" size={20} />, title: 'Revisi Bebas', desc: 'Desain revisi sampai kamu puas sebelum masuk produksi.' },
    { icon: <Package className="text-indigo-600" size={20} />, title: 'Minimum Order Rendah', desc: 'Mulai dari 12 pcs. Cocok untuk komunitas kecil sekalipun.' },
    { icon: <Truck className="text-indigo-600" size={20} />, title: 'Kirim Se-Indonesia', desc: 'Partner ekspedisi terpercaya. Packaging rapi, aman sampai tujuan.' },
    { icon: <ShieldCheck className="text-indigo-600" size={20} />, title: 'Harga Transparan', desc: 'Tidak ada biaya tersembunyi. Harga yang disepakati, itu yang dibayar.' },
  ]

  return (
    <section id="kenapa-kami" className="py-32 relative overflow-hidden bg-white">
      {/* Accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-50 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="reveal inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-display font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
              Kenapa Kami
            </div>
            <h2 className="reveal delay-1 font-display font-black text-4xl lg:text-5xl tracking-tight mb-6 text-gray-900">
              Beda dari<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1.5px rgba(17,24,39,0.2)' }}>Yang Lain</span>
            </h2>
            <p className="reveal delay-2 text-gray-500 text-lg leading-relaxed mb-8">
              Kami bukan sekadar konveksi. Kami partner produksi yang peduli dengan hasil akhir dan pengalaman kamu.
            </p>

            <div className="reveal delay-3 flex items-center gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-5 shadow-sm">
              <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100 flex-shrink-0">
                <Star className="text-indigo-600" fill="currentColor" size={20} />
              </div>
              <div>
                <p className="text-gray-900 font-display font-bold text-sm">4.9/5 Rating</p>
                <p className="text-gray-400 text-xs mt-0.5">Dari 200+ review pelanggan nyata</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div key={i} className={`reveal delay-${(i % 2) + 1} group bg-gray-50 border border-gray-100 rounded-2xl p-5 hover:border-indigo-200 hover:bg-white hover:shadow-lg hover:shadow-gray-100/50 transition-all duration-400`}>
                <div className="p-2.5 bg-white rounded-xl border border-gray-100 shadow-sm inline-block mb-4 group-hover:scale-110 transition-transform">
                  {r.icon}
                </div>
                <h3 className="font-display font-bold text-sm text-gray-900 mb-2">{r.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}