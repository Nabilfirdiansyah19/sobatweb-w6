export default function Products() {
  const products = [
    { name: 'Kaos & T-Shirt', desc: 'Cotton combed 20s–30s. Cocok untuk komunitas, event, dan promosi.', tags: ['Custom Print', 'Sablon', 'Bordir'], min: 'Min. 12 pcs' },
    { name: 'Hoodie & Sweater', desc: 'Fleece premium, hangat dan nyaman. Favorit untuk merchandise & almamater.', tags: ['Full Custom', 'Bordir', 'Label'], min: 'Min. 12 pcs' },
    { name: 'Polo & Seragam', desc: 'Pique lacoste pilihan. Profesional untuk seragam kantor dan instansi.', tags: ['Bordir Logo', 'Nama Staff', 'Patch'], min: 'Min. 12 pcs' },
    { name: 'Jersey & Olahraga', desc: 'Dryfit breathable. Cocok untuk tim futsal, basket, atau event olahraga.', tags: ['Sublimasi', 'Full Print', 'Nomor'], min: 'Min. 11 pcs' },
    { name: 'Jaket', desc: 'Berbagai bahan dari parasut hingga fleece. Ideal untuk almamater & komunitas.', tags: ['Custom Lining', 'Bordir', 'Zipper'], min: 'Min. 12 pcs' },
    { name: 'Topi & Accessories', desc: 'Cap, bucket hat, totebag, dan merchandise lainnya. Pelengkap paket event.', tags: ['Custom Patch', 'Bordir', 'Print'], min: 'Min. 24 pcs' },
  ]

  return (
    <section id="produk" className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="reveal inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-display font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
              Produk
            </div>
            <h2 className="reveal delay-1 font-display font-black text-4xl lg:text-5xl tracking-tight text-gray-900">
              Apa yang Kami<br />Produksi
            </h2>
          </div>
          <p className="reveal delay-2 text-gray-500 max-w-xs text-sm leading-relaxed">
            Semua produk 100% custom sesuai request kamu. Tidak ada template — semuanya dibuat khusus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div key={i} className={`reveal delay-${(i % 3) + 1} group bg-white border border-gray-200/60 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-xl hover:shadow-gray-200/30 transition-all duration-400 cursor-default`}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-bold text-lg text-gray-900">{p.name}</h3>
                <span className="text-xs text-indigo-600 font-display font-semibold bg-indigo-50 px-2.5 py-1 rounded-full whitespace-nowrap ml-2 border border-indigo-100">{p.min}</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t, j) => (
                  <span key={j} className="text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-full bg-gray-50 group-hover:border-gray-300 group-hover:bg-white transition-colors">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <p className="text-gray-400 text-sm">Produk lainnya? <a href="#harga" className="text-indigo-600 font-semibold hover:underline">Konsultasi gratis →</a></p>
        </div>
      </div>
    </section>
  )
}