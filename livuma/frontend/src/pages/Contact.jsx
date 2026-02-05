import { motion } from "framer-motion";
import { MessageSquare, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
    return (
        <div className="relative pt-40 pb-32 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white-grey/50 dark:bg-white/5 -z-10 translate-x-20 rounded-l-[100px] transition-colors"></div>

            <div className="fluid-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif mb-12">Get in Touch</h1>
                        <p className="text-xl font-light text-black/60 dark:text-white/60 mb-16 max-w-md leading-relaxed">
                            Have a project in mind? We'd love to hear from you. Let's create something extraordinary together.
                        </p>

                        <div className="space-y-12">
                            <div className="flex items-start gap-8 group">
                                <div className="p-4 bg-soft-black text-soft-white dark:bg-soft-white dark:text-soft-black rounded-full transition-transform group-hover:scale-110">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] tracking-widest uppercase opacity-30 mb-2 font-bold">Email</p>
                                    <p className="text-lg font-serif">hello@livumastudio.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-8 group">
                                <div className="p-4 bg-soft-black text-soft-white dark:bg-soft-white dark:text-soft-black rounded-full transition-transform group-hover:scale-110">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] tracking-widest uppercase opacity-30 mb-2 font-bold">Phone</p>
                                    <p className="text-lg font-serif">+62 812 3456 7890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-8 group">
                                <div className="p-4 bg-soft-black text-soft-white dark:bg-soft-white dark:text-soft-black rounded-full transition-transform group-hover:scale-110">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-[10px] tracking-widest uppercase opacity-30 mb-2 font-bold">Studio</p>
                                    <p className="text-lg font-serif">Jalan Arsitektur No. 123, Jakarta Selatan</p>
                                </div>
                            </div>
                        </div>

                        <motion.a
                            href="https://wa.me/6281234567890"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="inline-flex items-center gap-4 mt-20 px-10 py-5 bg-green-500 text-white rounded-full font-bold tracking-widest uppercase text-xs hover:bg-green-600 transition-colors shadow-xl"
                        >
                            <MessageSquare size={18} /> Chat on WhatsApp
                        </motion.a>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="bg-white-grey/30 dark:bg-soft-black/30 backdrop-blur-xl p-12 shadow-soft dark:shadow-soft-dark rounded-[40px] border border-soft-black/5 dark:border-white/5 transition-all"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="space-y-10">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 pb-4 outline-none focus:border-black dark:focus:border-white transition-colors font-light"
                                />
                            </div>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 pb-4 outline-none focus:border-black dark:focus:border-white transition-colors font-light"
                                />
                            </div>
                            <div className="relative">
                                <select className="w-full bg-transparent border-b border-black/10 dark:border-white/10 pb-4 outline-none focus:border-black dark:focus:border-white transition-colors font-light appearance-none text-black/40 dark:text-white/40">
                                    <option>Interested Service</option>
                                    <option>Architecture Design</option>
                                    <option>Interior Design</option>
                                    <option>Custom Furniture</option>
                                </select>
                            </div>
                            <div className="relative">
                                <textarea
                                    rows="4"
                                    placeholder="Message"
                                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 pb-4 outline-none focus:border-black dark:focus:border-white transition-colors font-light resize-none"
                                ></textarea>
                            </div>
                            <button className="w-full py-6 bg-soft-black text-soft-white dark:bg-soft-white dark:text-soft-black uppercase tracking-[0.3em] text-xs font-bold hover:opacity-80 transition-opacity">
                                Send Message
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
