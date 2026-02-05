import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="bg-studio-black py-24">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div className="space-y-8">
                        <h4 className="text-studio-gold uppercase tracking-widest font-bold text-sm">Booking</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-studio-beige">Ready to <span className="text-studio-red">Collaborate?</span></h2>
                        <p className="text-studio-beige/60 text-lg leading-relaxed">
                            Whether you're a podcaster, a band, or a music label, we're here to help you
                            realize your artistic vision with premium audio production.
                        </p>

                        <div className="space-y-6 pt-8">
                            <ContactItem icon="📍" title="Location" content="123 Harmonic Street, Studio District, NY 10001" />
                            <ContactItem icon="📞" title="Phone" content="+1 (234) 567-890" />
                            <ContactItem icon="✉️" title="Email" content="booking@twelvetone.com" />
                            <ContactItem icon="⏰" title="Hours" content="Mon - Sat: 10:00 AM - 10:00 PM" />
                        </div>

                        <div className="pt-8 flex space-x-4">
                            <a href="https://wa.me/1234567890" className="inline-flex items-center space-x-3 bg-green-600/20 text-green-500 border border-green-600/30 px-6 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
                                <span>WhatsApp Booking</span>
                                <span className="text-xl">💬</span>
                            </a>
                        </div>
                    </div>

                    <div className="bg-studio-gray/30 p-10 border border-white/5">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-studio-beige/40 text-[10px] uppercase tracking-widest font-bold">Full Name</label>
                                    <input type="text" className="w-full bg-studio-black border border-white/10 px-4 py-3 text-studio-beige focus:border-studio-red outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-studio-beige/40 text-[10px] uppercase tracking-widest font-bold">Email Address</label>
                                    <input type="email" className="w-full bg-studio-black border border-white/10 px-4 py-3 text-studio-beige focus:border-studio-red outline-none transition-colors" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-studio-beige/40 text-[10px] uppercase tracking-widest font-bold">Service Interest</label>
                                <select className="w-full bg-studio-black border border-white/10 px-4 py-3 text-studio-beige focus:border-studio-red outline-none transition-colors appearance-none">
                                    <option>Podcast Production</option>
                                    <option>Band Recording</option>
                                    <option>Mixing & Mastering</option>
                                    <option>Music Production</option>
                                    <option>Label Support</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-studio-beige/40 text-[10px] uppercase tracking-widest font-bold">Message</label>
                                <textarea rows="4" className="w-full bg-studio-black border border-white/10 px-4 py-3 text-studio-beige focus:border-studio-red outline-none transition-colors resize-none"></textarea>
                            </div>
                            <button type="submit" className="w-full btn-primary py-4 mt-4">Send Booking Request</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ContactItem = ({ icon, title, content }) => (
    <div className="flex items-start space-x-4">
        <span className="text-2xl mt-1">{icon}</span>
        <div>
            <h4 className="text-studio-gold text-[10px] uppercase tracking-widest font-bold">{title}</h4>
            <p className="text-studio-beige/80">{content}</p>
        </div>
    </div>
);

export default Contact;
