import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white-grey dark:bg-soft-black text-soft-black dark:text-white py-24 pb-12 transition-colors">
            <div className="fluid-container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-4xl font-serif tracking-widest mb-8">LIVUMA</h2>
                        <p className="text-soft-black/50 dark:text-white/50 max-w-sm font-light leading-relaxed">
                            Modern Architecture & Interior Design Studio. Creating spaces that tell your story through minimalist and premium design.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm tracking-[0.2em] uppercase mb-8 font-bold">Studio</h4>
                        <ul className="flex flex-col gap-4 text-soft-black/50 dark:text-white/50 font-light">
                            <li><Link to="/portfolio" className="hover:text-white transition-colors">Projects</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Get in touch</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm tracking-[0.2em] uppercase mb-8 font-bold">Follow Us</h4>
                        <ul className="flex flex-col gap-4 text-soft-black/50 dark:text-white/50 font-light">
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-soft-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs tracking-widest uppercase font-light text-soft-black/30 dark:text-white/30">
                    <p>© 2024 LIVUMA STUDIO. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
