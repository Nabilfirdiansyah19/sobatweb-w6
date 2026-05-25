import { Check, ArrowUpRight, Sparkles } from 'lucide-react'

export default function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      desc: 'Untuk komunitas & order kecil',
      price: 'Rp 45.000',
      unit: '/pcs',
      note: 'Min. 12 pcs',
      features: ['Cotton Combed 30s', 'Sablon 1 warna', 'Desain gratis', 'Pengerjaan 7 hari', 'Free ongkir Jabodetabek'],
      cta: 'Order Sekarang',
      highlight: false,
    },
    {
      name: 'Standard',
      desc: 'Paling populer untuk event & organisasi',
      price: 'Rp 65.000',
      unit: '/pcs',
      note: 'Min. 24 pcs',
      features: ['Cotton Combed 30s Premium', 'Sablon multicolor / DTF', 'Desain + 3x revisi', 'Pengerjaan 5 hari', 'Free ongkir seluruh Indonesia', 'Foto produk gratis'],
      cta: 'Order Sekarang',
      highlight: true,
    },
    {
      name: 'Premium',
      desc: 'Untuk brand dan kebutuhan profesional',
      price: 'Custom',
      unit: '',
      note: 'Sesuai kebutuhan',
      features: ['Pilihan bahan premium', 'Teknik cetak bebas', 'Desain unlimited revisi', 'Pengerjaan express', 'Label & hangtag custom', 'Dedicated project manager'],
      cta: 'Konsultasi Gratis',
      highlight: false,
    },
  ]

  return (
    <section id="harga" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-50 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="reveal inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-display font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
            <Sparkles size={12} className="fill-indigo-100" />
            Investasi Pakaian
          </div>
          <h2 className="reveal delay-1 font-display font-black text-4xl lg:text-5xl tracking-tight mb-4 text-gray-900">
            Skema Harga Transparan
          </h2>
          <p className="reveal delay-2 text-gray-500 max-w-md mx-auto text-base">
            Tanpa biaya tersembunyi. Semua paket sudah termasuk jaminan standardisasi QC produksi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`reveal delay-${i + 1} flex flex-col rounded-3xl p-8 transition-all duration-400 relative
                ${t.highlight
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 lg:-translate-y-4 border border-indigo-600'
                  : 'bg-gray-50 text-gray-900 border border-gray-100 hover:border-indigo-100 hover:bg-white hover:shadow-xl hover:shadow-gray-200/50'
                }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-gray-950 text-[10px] font-display font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                  Paling Populer
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-xl mb-2">{t.name}</h3>
                <p className={`text-sm ${t.highlight ? 'text-indigo-100' : 'text-gray-400'}`}>{t.desc}</p>
              </div>

              {/* Pembungkus Harga Rapat */}
              <div className="mb-8 border-b pb-6 border-current/10">
                <div className="flex items-baseline gap-0.5">
                  <span className="font-display font-black text-4xl tracking-tight">{t.price}</span>
                  {t.unit && (
                    <span className="text-sm font-display font-bold opacity-80 tracking-tight">{t.unit}</span>
                  )}
                </div>
                <p className={`text-xs mt-1 font-semibold ${t.highlight ? 'text-indigo-200' : 'text-gray-400'}`}>{t.note}</p>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {t.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm leading-snug">
                    <div className={`p-0.5 rounded-full mt-0.5 flex-shrink-0 ${t.highlight ? 'bg-indigo-500 text-white' : 'bg-indigo-50 text-indigo-600'}`}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className={t.highlight ? 'text-indigo-50' : 'text-gray-600'}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/62812345678"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full text-center font-display font-bold text-sm py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2
                  ${t.highlight
                    ? 'bg-white text-indigo-600 hover:bg-indigo-50'
                    : 'bg-white text-gray-900 border border-gray-200 hover:border-indigo-600 hover:text-indigo-600 hover:shadow-lg hover:shadow-indigo-600/5'
                  }`}
              >
                {t.cta}
                <ArrowUpRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}