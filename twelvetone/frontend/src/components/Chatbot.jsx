import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Welcome to TwelveTone. How can I assist your creative journey today?", isBot: true }
    ]);
    const scrollRef = useRef(null);

    // Auto-scroll to bottom when messages or typing state changes
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const faqs = [
        { q: "What are your session rates?", a: "Rates vary depending on the service and engineer. Podcasts start at $75/hr, while full band tracking starts at $500/day. Contact us for a custom quote." },
        { q: "Do you provide instruments?", a: "Yes, our facilities include a Steinway grand piano, vintage Fender Rhodes, and a selection of professional kits and guitars." },
        { q: "How do I book a tour?", a: "We'd love to show you around. Click the 'Book a Session' button or message us via WhatsApp to schedule a studio tour." },
        { q: "Do you offer remote mixing?", a: "Absolutely. We work with artists globally through secure cloud-based collaboration tools for mixing and mastering." }
    ];

    const handleFaqClick = (faq) => {
        if (isTyping) return;

        // Add user message
        setMessages(prev => [...prev, { text: faq.q, isBot: false }]);

        // Short delay before showing typing
        setTimeout(() => {
            setIsTyping(true);

            // Staggered bot response
            setTimeout(() => {
                setIsTyping(false);
                setMessages(prev => [...prev, { text: faq.a, isBot: true }]);
            }, 1500);
        }, 300);
    };

    return (
        <div className="fixed bottom-8 right-8 z-[60]">
            {/* Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-studio-black border border-white/10 shadow-2xl rounded-sm overflow-hidden flex flex-col animate-slide-up">
                    <div className="bg-studio-red p-4 flex justify-between items-center text-white">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="font-serif font-bold tracking-widest text-sm uppercase">TwelveTone AI</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">✕</button>
                    </div>

                    <div ref={scrollRef} className="h-96 overflow-y-auto p-6 space-y-4 bg-studio-gray/20 scroll-smooth">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}>
                                <div className={`max-w-[80%] p-3 text-sm transform transition-all duration-300 ${msg.isBot
                                        ? 'bg-white/5 text-studio-beige border border-white/5'
                                        : 'bg-studio-red text-white'
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start animate-fade-in">
                                <div className="bg-white/5 border border-white/5 p-3 rounded-sm flex space-x-1 items-center">
                                    <div className="w-1.5 h-1.5 bg-studio-beige/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-studio-beige/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                    <div className="w-1.5 h-1.5 bg-studio-beige/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="p-4 border-t border-white/10 bg-studio-black">
                        <p className="text-[10px] text-studio-gold uppercase tracking-widest font-bold mb-3">Frequently Asked Questions</p>
                        <div className="flex flex-wrap gap-2">
                            {faqs.map((faq, i) => (
                                <button
                                    key={i}
                                    disabled={isTyping}
                                    onClick={() => handleFaqClick(faq)}
                                    className={`text-[10px] bg-white/5 border border-white/10 px-3 py-2 text-studio-beige/60 transition-all ${isTyping ? 'opacity-50 cursor-not-allowed' : 'hover:border-studio-red hover:text-studio-red'
                                        }`}
                                >
                                    {faq.q}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Trigger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 bg-studio-red text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
            >
                {isOpen ? (
                    <span className="text-2xl font-light">✕</span>
                ) : (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default Chatbot;
