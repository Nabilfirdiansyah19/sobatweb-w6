import { ArrowUpRight, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal relative bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden text-center shadow-sm">
          {/* Decorative Subtle Blur Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-50 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <p className="font-display font-bold text-indigo-600 text-xs tracking-widest uppercase mb-4">Siap Produksi?</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900 tracking-tight mb-6 leading-tight">
              Wujudkan Desain Pakaian <br className="hidden sm:inline" />Kamu Hari Ini
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
              Konsultasi gratis, estimasi harga transparan, dan seluruh proses pengerjaan bisa dipantau langsung.
            </p>
            
            {/* Flex Container: Kolom di mobile, sebaris di desktop */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <a 
                href="https://wa.me/62812345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white font-display font-bold text-sm px-8 py-4 rounded-xl hover:bg-indigo-700 shadow-md hover:shadow-indigo-600/10 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                Hubungi via WhatsApp
              </a>
              <a 
                href="#harga" 
                className="bg-white border border-gray-200 text-gray-700 font-display font-bold text-sm px-8 py-4 rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all flex items-center justify-center gap-2"
              >
                Lihat Skema Harga
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}