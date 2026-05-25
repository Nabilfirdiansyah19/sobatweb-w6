import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    { name: 'Rizky A.', role: 'Ketua BEM UMN', text: 'Order 200 kaos wisuda, hasilnya luar biasa. Pengerjaan tepat waktu dan kualitas jahitan rapi banget. Pasti order lagi!', rating: 5 },
    { name: 'Sari D.', role: 'Owner UMKM Fashion', text: 'Udah 3x order hoodie custom di sini. Responsif, desain dibantu sampai fix, dan packaging-nya selalu rapi. Recommended!', rating: 5 },
    { name: 'Dimas P.', role: 'Kapten Tim Futsal', text: 'Jersey sublimasi-nya keren banget, warna tetap tajam walaupun sering dicuci. Harga juga sangat kompetitif.', rating: 5 },
    { name: 'Nina K.', role: 'HR Manager', text: 'Pesan seragam kantor 80 orang. Semua ukuran pas, bordir nama dan logo rapih. Tim CS juga sangat helpful.', rating: 5 },
    { name: 'Budi S.', role: 'Penyelenggara Event', text: 'Urgent order 3 hari sebelum event dan bisa! Kualitas tidak mengecewakan sama sekali. Jadi langganan tetap.', rating: 5 },
    { name: 'Lina M.', role: 'Owner Brand Lokal', text: 'Bikin label, hangtag, dan kaos sekaligus. Hasilnya profesional banget, pelanggan saya juga suka kualitasnya.', rating: 5 },
  ]

  return (
    <section className="py-32 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="reveal inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-display font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
            Testimoni
          </div>
          <h2 className="reveal delay-1 font-display font-black text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900">
            Kata Mereka
          </h2>
          <p className="reveal delay-2 text-gray-400">200+ pelanggan sudah mempercayakan produksinya ke kami.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className={`reveal delay-${(i % 3) + 1} bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-gray-200 hover:bg-white hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-400 flex flex-col justify-between`}>
              <div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="text-amber-400" size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                <div className="w-8 h-8 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center font-display font-bold text-indigo-600 text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-gray-900 text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}