import { MessageCircle } from 'lucide-react'

export default function Footer() {
  const links = [
    { title: 'Produk', items: ['Kaos & T-Shirt', 'Hoodie & Sweater', 'Polo & Seragam', 'Jersey', 'Jaket'] },
    { title: 'Layanan', items: ['Custom Order', 'Ready Stock', 'Express Order', 'Konsultasi Desain'] },
    { title: 'Info', items: ['Cara Order', 'FAQ', 'Cek Status Order', 'Hubungi Kami'] },
  ]

  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-12 text-gray-600">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Responsive Grid: grid-cols-2 membuat menu berjejer hemat ruang di HP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mb-16">
          
          {/* Kolom Profil Brand - Mengambil porsi 2 kolom penuh pada mobile agar seimbang */}
          <div className="col-span-2 lg:col-span-1 flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-display font-black text-white text-sm">S</div>
              <span className="font-display font-bold text-sm tracking-widest text-gray-900 uppercase">
                Sobat<span className="text-indigo-600">Konveksi</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5 max-w-xs">
              Konveksi kustom tepercaya untuk kebutuhan komunitas, korporat, dan brand fashion lokal.
            </p>
            <a 
              href="https://wa.me/62812345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 text-xs font-bold text-gray-700 px-4 py-2.5 rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-colors shadow-sm w-full sm:w-auto justify-center sm:justify-start"
            >
              <MessageCircle size={14} className="text-emerald-500 fill-emerald-500/10" />
              Customer Service WA
            </a>
          </div>

          {/* Kolom Menu Tautan Dinamis */}
          {links.map((group, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-gray-900 mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.items.map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-gray-400 hover:text-indigo-600 transition-colors block py-0.5">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Bagian Bawah Footer */}
        <div className="pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} SobatKonveksi. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="hover:text-indigo-600 transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Kebijakan Privasi</a>
          </div>
        </div>

      </div>
    </footer>
  )
}