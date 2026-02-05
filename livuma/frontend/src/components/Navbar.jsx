import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Portfolio", path: "/portfolio" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const isHomePage = location.pathname === "/";
    const forceNavbar = scrolled || !isHomePage;

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${forceNavbar ? "bg-soft-white/80 dark:bg-soft-black/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
                }`}
        >
            <div className="fluid-container flex justify-between items-center">
                <Link
                    to="/"
                    className={`text-2xl font-serif tracking-widest uppercase transition-colors duration-500 ${forceNavbar ? "text-soft-black dark:text-soft-white" : "text-white mix-blend-difference"
                        }`}
                >
                    LIVUMA
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-12 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm tracking-widest uppercase transition-all duration-500 hover:opacity-50 ${location.pathname === link.path ? "font-bold" : "font-light"
                                } ${forceNavbar ? "text-soft-black dark:text-soft-white" : "text-white mix-blend-difference"}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Desktop Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-all duration-500 ${forceNavbar ? "text-soft-black dark:text-soft-white hover:bg-black/5 dark:hover:bg-white/5" : "text-white mix-blend-difference"}`}
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </div>

                {/* Mobile Controls */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className={`p-2 rounded-full transition-all duration-500 ${forceNavbar ? "text-soft-black dark:text-soft-white hover:bg-black/5 dark:hover:bg-white/5" : "text-white mix-blend-difference"}`}
                    >
                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <button
                        className={`p-2 transition-all duration-500 ${forceNavbar ? "text-soft-black dark:text-soft-white" : "text-white mix-blend-difference"}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-soft-white dark:bg-soft-black p-8 flex flex-col gap-6 md:hidden shadow-xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-lg tracking-widest uppercase font-light border-b border-black/5 dark:border-white/5 pb-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
