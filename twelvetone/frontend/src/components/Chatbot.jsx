import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Welcome to TwelveTone. How can I assist your creative journey today?", isBot: true }
    ]);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const faqs = [
        { q: "Rates?", a: "Podcasts start at $75/hr, full band at $500/day." },
        { q: "Instruments?", a: "Steinway grand, Fender Rhodes, and pro kits available." },
        { q: "Booking?", a: "Click 'Book a Session' or WhatsApp us for a tour." },
        { q: "Remote?", a: "Yes, we offer global remote mixing and mastering." }
    ];

    const handleFaqClick = (faq) => {
        if (isTyping) return;
        setMessages(prev => [...prev, { text: faq.q, isBot: false }]);
        setTimeout(() => {
            setIsTyping(true);
            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, { text: faq.a, isBot: true }]);
            }, 1000);
        }, 300);
    };

    return (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[60]">
            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-[85vw] sm:w-80 md:w-96 bg-studio-black border border-white/10 shadow-2xl rounded-sm overflow-hidden flex flex-col animate-slide-up">
                    <div className="bg-studio-red p-3 md:p-4 flex justify-between items-center text-white">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-serif font-bold tracking-widest text-xs md:text-sm uppercase">TwelveTone AI</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="p-1">✕</button>
                    </div>

                    <div ref={scrollRef} className="h-72 md:h-96 overflow-y-auto p-4 md:p-6 space-y-4 bg-studio-gray/20 scroll-smooth">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}>
                                <div className={`max-w-[85%] p-3 text-xs md:text-sm ${msg.isBot
                                        ? 'bg-white/5 text-studio-beige border border-white/5'
                                        : 'bg-studio-red text-white'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/5 p-3 flex space-x-1">
                                    <div className="w-1 h-1 bg-studio-beige/40 rounded-full animate-bounce"></div>
                                    <div className="w-1 h-1 bg-studio-beige/40 rounded-full animate-bounce [animation-delay:150ms]"></div>
                                    <div className="w-1 h-1 bg-studio-beige/40 rounded-full animate-bounce [animation-delay:300ms]"></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-4 border-t border-white/10 bg-studio-black">
                        <p className="text-[9px] text-studio-gold uppercase tracking-widest font-bold mb-2">FAQ</p>
                        <div className="flex flex-wrap gap-1.5">
                            {faqs.map((faq, i) => (
                                <button
                                    key={i}
                                    disabled={isTyping}
                                    onClick={() => handleFaqClick(faq)}
                                    className="text-[9px] bg-white/5 border border-white/10 px-2 py-1.5 text-studio-beige/60 hover:border-studio-red"
                                >
                                    {faq.q}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Button - Ukuran lebih kecil di mobile */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-12 h-12 md:w-16 md:h-16 bg-studio-red text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
            >
                {isOpen ? <span className="text-xl">✕</span> : (
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default Chatbot;