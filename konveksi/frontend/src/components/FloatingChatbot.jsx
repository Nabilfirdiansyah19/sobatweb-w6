import { useState, useEffect, useRef } from 'react'
import { MessageSquare, X, Send, MessageCircle, HelpCircle } from 'lucide-react'

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Halo! Ada yang bisa kami bantu seputar produksi konveksi hari ini? Silakan pilih pertanyaan di bawah atau hubungi CS kami.' }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const chatEndRef = useRef(null)

  const faqData = [
    {
      q: 'Berapa minimal order (MOQ)?',
      a: 'Minimal order kami mulai dari 12 pcs untuk kaos, hoodie, polo, dan kemeja kerja. Khusus jersey olahraga minimal pengerjaan 11 pcs.'
    },
    {
      q: 'Berapa lama durasi produksi?',
      a: 'Durasi standar berkisar antara 5-7 hari kerja setelah desain disetujui. Kami juga menyediakan layanan kilat/express 3 hari selesai jika mendesak.'
    },
    {
      q: 'Apakah bisa dibantu buat desain?',
      a: 'Bisa banget! Tim desainer internal kami siap membantu membuat mockup pakaian kustom secara gratis setelah Anda membayar uang muka (DP).'
    },
    {
      q: 'Bagaimana sistem pembayarannya?',
      a: 'Sistem pembayaran menggunakan uang muka (DP) sebesar 50% untuk tanda jadi produksi, dan pelunasan sisanya dilakukan setelah barang lolos QC dan siap dikirim.'
    }
  ]

  // Auto scroll ke bawah setiap ada pesan baru
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleFaqClick = (faq) => {
    // 1. Masukkan pertanyaan user ke chat log
    setMessages((prev) => [...prev, { sender: 'user', text: faq.q }])
    setIsTyping(true)

    // 2. Simulasi jeda berpikir (1.2 detik) sebelum menjawab
    setTimeout(() => {
      setIsTyping(false)
      setMessages((prev) => [...prev, { sender: 'bot', text: faq.a, showWa: true }])
    }, 1200)
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans flex flex-col items-end">
      
      {/* Jendela Chat Box */}
      {isOpen && (
        <div className="w-[340px] sm:w-[360px] h-[480px] bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden flex flex-col mb-4 animate-in fade-in slide-in-from-bottom-6 duration-300">
          
          {/* Header Chatbot */}
          <div className="bg-indigo-600 p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <MessageSquare size={18} className="text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-sm tracking-wide">Asisten SobatKonveksi</h3>
                <p className="text-[10px] text-indigo-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online • Balas Instan
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Area Konten Pesan */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50/50 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-2xl p-3.5 text-sm leading-relaxed shadow-sm
                    ${msg.sender === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                    }`}
                >
                  {msg.text}
                </div>

                {/* Tombol Pintasan WA di bawah jawaban Bot */}
                {msg.showWa && (
                  <a
                    href="https://wa.me/62812345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-2 rounded-xl flex items-center gap-1.5 hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle size={14} className="fill-emerald-600/10" />
                    Hubungi CS via WA Sekarang
                  </a>
                )}
              </div>
            ))}

            {/* Bubble Animasi Mengetik (Jeda Mikir) */}
            {isTyping && (
              <div className="flex flex-col items-start">
                <div className="bg-white border border-gray-100 text-gray-400 rounded-2xl rounded-tl-none p-3 shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                </div>
              </div>
            )}
            
            <div ref={chatEndRef} />
          </div>

          {/* Menu Pilihan FAQ Dinamis */}
          <div className="p-3 bg-white border-t border-gray-100 max-h-[160px] overflow-y-auto">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-1 px-1">
              <HelpCircle size={12} />
              Pilih Pertanyaan FAQ:
            </p>
            <div className="flex flex-col gap-1.5">
              {faqData.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleFaqClick(faq)}
                  disabled={isTyping}
                  className="text-left text-xs bg-gray-50 hover:bg-indigo-50 border border-gray-200/60 hover:border-indigo-100 text-gray-700 hover:text-indigo-600 p-2.5 rounded-xl transition-all truncate disabled:opacity-50"
                >
                  {faq.q}
                </button>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Tombol Bulat Utama (Trigger Open/Close) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full flex items-center justify-center shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all transform hover:scale-105 active:scale-95"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

    </div>
  )
}