import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectDetail = () => {
    return (
        <div className="pt-32 pb-32">
            <div className="fluid-container">
                <Link to="/portfolio" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-bold mb-12 opacity-50 hover:opacity-100 transition-opacity">
                    <ArrowLeft size={14} /> Back to Portfolio
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-1"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif mb-8">The Glass House</h1>
                        <div className="space-y-8 text-sm tracking-widest uppercase">
                            <div>
                                <p className="opacity-30 mb-2">Category</p>
                                <p className="font-bold">Residential Architecture</p>
                            </div>
                            <div>
                                <p className="opacity-30 mb-2">Location</p>
                                <p className="font-bold">Uluwatu, Bali</p>
                            </div>
                            <div>
                                <p className="opacity-30 mb-2">Year</p>
                                <p className="font-bold">2023</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <p className="text-xl font-light leading-relaxed mb-12 text-soft-black/70 dark:text-soft-white/70">
                            The Glass House is a study in transparency and integration with nature. Situated on a cliffside overlooking the Indian Ocean, the structure uses floor-to-ceiling glass to dissolve the boundary between interior and exterior.
                        </p>
                        <div className="space-y-12">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                                alt="Detail 1"
                                className="w-full rounded-[40px] grayscale hover:grayscale-0 transition-all duration-1000 shadow-soft dark:shadow-soft-dark"
                            />
                            <div className="grid grid-cols-2 gap-8">
                                <img
                                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80"
                                    alt="Detail 2"
                                    className="w-full rounded-[30px] grayscale hover:grayscale-0 transition-all duration-1000 shadow-soft dark:shadow-soft-dark"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
                                    alt="Detail 3"
                                    className="w-full rounded-[30px] grayscale hover:grayscale-0 transition-all duration-1000 shadow-soft dark:shadow-soft-dark"
                                />
                            </div>
                            <p className="text-lg font-light leading-relaxed text-soft-black/60 dark:text-soft-white/60">
                                The concept revolves around the use of raw concrete, sustainable timber, and high-performance glass. Every element was designed to minimize environmental impact while maximizing the visual experience of the surrounding landscape. The interior features custom-built furniture that echoes the architectural lines of the house.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
