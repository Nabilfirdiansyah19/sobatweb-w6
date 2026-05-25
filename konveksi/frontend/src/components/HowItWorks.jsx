import { MessageSquare, Palette, Settings, Truck } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    { num: '01', title: 'Konsultasi & Brief', desc: 'Ceritakan kebutuhan kamu — jenis produk, jumlah, desain, dan deadline. Kami bantu dari nol.', icon: <MessageSquare className="text-indigo-600" size={24} /> },
    { num: '02', title: 'Desain & Approval', desc: 'Tim kami buat mockup desain. Revisi sampai kamu puas, baru masuk produksi.', icon: <Palette className="text-indigo-600" size={24} /> },
    { num: '03', title: 'Produksi', desc: 'Proses cutting, jahit, dan quality check ketat. Kamu bisa pantau progress kapan saja.', icon: <Settings className="text-indigo-600" size={24} /> },
    { num: '04', title: 'Pengiriman', desc: 'Dikemas rapi dan dikirim ke seluruh Indonesia. Estimasi 3–7 hari kerja.', icon: <Truck className="text-indigo-600" size={24} /> },
  ]

  return (
    <section id="cara-kerja" className="py-32 relative bg-white">
      <div className="absolute inset-0 opacity-[0.2]" style={{
        backgroundImage: 'radial-gradient(circle, rgba(79,70,229,0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-display font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
            Proses
          </div>
          <h2 className="reveal delay-1 font-display font-black text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900">
            Cara Kerja Kami
          </h2>
          <p className="reveal delay-2 text-gray-500 text-lg max-w-lg mx-auto">
            4 langkah simpel dari order sampai produk tiba di tangan kamu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className={`reveal delay-${i + 1} group relative bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-indigo-200 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 cursor-default`}>
              <div className="flex items-start justify-between mb-6">
                <span className="font-display font-black text-4xl text-indigo-600/10 group-hover:text-indigo-600/20 transition-colors duration-300">{s.num}</span>
                <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>
              </div>
              <h3 className="font-display font-bold text-lg text-gray-900 mb-3 leading-tight">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>

              {i < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block z-10">
                  <div className="w-4 h-4 border-t-2 border-r-2 border-gray-200 rotate-45 bg-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}