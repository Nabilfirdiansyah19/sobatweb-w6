import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ChevronRight, User } from "lucide-react";

const FAQ_DATA = [
    {
        question: "What services do you offer?",
        answer: "We offer comprehensive Architecture Design, Interior Design, Custom Furniture solutions, and high-end 3D Visualizations."
    },
    {
        question: "How do we start a project?",
        answer: "The process begins with an initial consultation to understand your vision and requirements. You can reach out via our Contact page or WhatsApp."
    },
    {
        question: "Do you handle construction?",
        answer: "While we specialize in design, we provide rigorous construction supervision to ensure our vision is executed flawlessly by your contractor."
    },
    {
        question: "Internal vs External design?",
        answer: "We take a holistic approach, often designing both the exterior structure and interior spaces to ensure a seamless, unified aesthetic."
    }
];

const TypingIndicator = () => (
    <div className="flex gap-1 p-4 bg-white-grey/50 dark:bg-white/5 rounded-2xl w-fit">
        {[0, 1, 2].map((i) => (
            <motion.div
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
                className="w-1.5 h-1.5 bg-soft-black/20 dark:bg-soft-white/20 rounded-full"
            />
        ))}
    </div>
);

const ChatBubble = ({ message }) => {
    const isBot = message.type === "bot";
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex ${isBot ? "justify-start" : "justify-end"} mb-4`}
        >
            <div className={`max-w-[80%] p-4 rounded-3xl text-sm font-light leading-relaxed ${isBot
                    ? "bg-white-grey/50 dark:bg-stone-800/50 text-soft-black dark:text-soft-white rounded-tl-none"
                    : "bg-soft-black text-soft-white dark:bg-soft-white dark:text-soft-black rounded-tr-none shadow-soft"
                }`}>
                {message.text}
            </div>
        </motion.div>
    );
};

const FAQChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: Date.now(), type: "bot", text: "Welcome to LIVUMA Studio. How can I assist you today?" }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleQuestion = (faq) => {
        // Add User Message
        const userMsg = { id: Date.now(), type: "user", text: faq.question };
        setMessages(prev => [...prev, userMsg]);

        // Show Typing
        setIsTyping(true);

        // Simulate Bot Delay
        setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, { id: Date.now() + 1, type: "bot", text: faq.answer }]);
        }, 1500);
    };

    const toggleChat = () => setIsOpen(!isOpen);

    return (
        <div className="fixed bottom-10 right-10 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-6 w-[380px] max-w-[calc(100vw-40px)] h-[600px] flex flex-col bg-soft-white/90 dark:bg-soft-black/90 backdrop-blur-2xl border border-soft-black/5 dark:border-white/10 rounded-[40px] shadow-soft dark:shadow-soft-dark overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-8 bg-soft-black dark:bg-soft-white text-soft-white dark:text-soft-black flex justify-between items-center shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-soft-white/10 dark:bg-soft-black/10 rounded-full flex items-center justify-center">
                                    <User size={20} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-serif">LIVUMA Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                        <p className="text-[10px] tracking-widest uppercase opacity-60">Online Now</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={toggleChat} className="hover:rotate-90 transition-transform p-2">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Chat Messages */}
                        <div
                            ref={scrollRef}
                            className="flex-grow p-8 overflow-y-auto custom-scrollbar space-y-2"
                        >
                            {messages.map(msg => (
                                <ChatBubble key={msg.id} message={msg} />
                            ))}
                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <TypingIndicator />
                                </motion.div>
                            )}
                        </div>

                        {/* FAQ Suggestions / Input Area */}
                        <div className="p-6 border-t border-soft-black/5 dark:border-white/5 bg-white-grey/20 dark:bg-white/5">
                            <p className="text-[10px] tracking-widest uppercase opacity-40 mb-4 font-bold px-2">Common Questions</p>
                            <div className="flex flex-col gap-2">
                                {FAQ_DATA.map((faq, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleQuestion(faq)}
                                        disabled={isTyping}
                                        className="text-left py-3 px-5 rounded-2xl bg-white/50 dark:bg-white/5 hover:bg-soft-black hover:text-white dark:hover:bg-soft-white dark:hover:text-soft-black transition-all text-xs font-light flex justify-between items-center group border border-soft-black/5 dark:border-white/5 disabled:opacity-30 disabled:cursor-not-allowed"
                                    >
                                        {faq.question}
                                        <ChevronRight size={12} className="opacity-30 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleChat}
                className="w-16 h-16 bg-soft-black dark:bg-soft-white text-soft-white dark:text-soft-black rounded-full flex items-center justify-center shadow-soft dark:shadow-soft-dark hover:shadow-xl transition-shadow relative overflow-hidden group"
            >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </div>
    );
};

export default FAQChatbot;
