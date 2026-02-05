import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-studio-black border-t border-white/5 pt-20 pb-10">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-8 h-8 bg-studio-red flex items-center justify-center rounded-sm">
                                <span className="text-white font-serif font-bold text-lg">T</span>
                            </div>
                            <span className="font-serif text-xl font-bold tracking-widest text-studio-beige uppercase">ThirdTone</span>
                        </div>
                        <p className="text-studio-beige/60 leading-relaxed max-w-md mb-8">
                            A premium creative space dedicated to the art of sound. Providing world-class recording,
                            mixing, and production services for professional musicians, podcasters, and labels.
                        </p>
                        <div className="flex space-x-4">
                            <SocialIcon icon="instagram" />
                            <SocialIcon icon="youtube" />
                            <SocialIcon icon="facebook" />
                            <SocialIcon icon="linkedin" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-studio-gold uppercase tracking-widest text-sm font-bold mb-6">Explore</h4>
                        <ul className="space-y-4 text-studio-beige/60">
                            <li><a href="#about" className="hover:text-studio-red transition-colors">Our Story</a></li>
                            <li><a href="#services" className="hover:text-studio-red transition-colors">Services</a></li>
                            <li><a href="#facilities" className="hover:text-studio-red transition-colors">Facilities</a></li>
                            <li><a href="#portfolio" className="hover:text-studio-red transition-colors">Portfolio</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-studio-gold uppercase tracking-widest text-sm font-bold mb-6">Contact</h4>
                        <ul className="space-y-4 text-studio-beige/60">
                            <li className="flex items-start space-x-3">
                                <span className="text-studio-red">A:</span>
                                <span>123 Harmonic Street, Studio District</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-studio-red">T:</span>
                                <span>+1 (234) 567-890</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <span className="text-studio-red">E:</span>
                                <span>hello@twelvetone.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-studio-beige/40 text-xs tracking-widest uppercase">
                    <p>&copy; 2024 TwelveTone Recording Studio. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-studio-beige transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-studio-beige transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const SocialIcon = ({ icon }) => (
    <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-studio-red hover:border-studio-red transition-all duration-300">
        <span className="sr-only">{icon}</span>
        <div className="w-4 h-4 bg-studio-beige/20 rounded-full"></div>
    </a>
);

export default Footer;
