import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
    { id: 1, title: "Modernist Villa", category: "Residential", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
    { id: 2, title: "Emerald Penthouse", category: "Interior", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" },
    { id: 3, title: "Sleek Kitchen", category: "Kitchen & Pantry", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" },
    { id: 4, title: "Oak Collection", category: "Custom Furniture", image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=800&q=80" },
    { id: 5, title: "Minimalist Studio", category: "Residential", image: "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&w=800&q=80" },
    { id: 6, title: "Marble Haven", category: "Interior", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" },
    { id: 7, title: "Nordic Pantry", category: "Kitchen & Pantry", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80" },
    { id: 8, title: "Crafted Lounge", category: "Custom Furniture", image: "https://images.unsplash.com/photo-1538688598194-58e112f0ec30?auto=format&fit=crop&w=800&q=80" },
];

const categories = ["All", "Residential", "Interior", "Kitchen & Pantry", "Custom Furniture"];

const Portfolio = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="pt-40 pb-32">
            <div className="fluid-container">
                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-serif mb-12">Portfolio</h1>
                    <div className="flex flex-wrap gap-8 text-xs tracking-widest uppercase font-bold">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`transition-all pb-1 border-b-2 ${filter === cat ? "border-soft-black dark:border-soft-white opacity-100" : "border-transparent opacity-30 hover:opacity-100"}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="break-inside-avoid group relative block cursor-pointer"
                            >
                                <Link to={`/portfolio/${project.id}`} className="hover-lift block">
                                    <div className="overflow-hidden rounded-3xl">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="mt-6 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 px-2">
                                        <div>
                                            <h3 className="text-xl font-serif uppercase tracking-wider text-soft-black dark:text-soft-white">{project.title}</h3>
                                            <p className="text-[10px] tracking-widest uppercase opacity-50 mt-1 text-soft-black dark:text-soft-white">{project.category}</p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Portfolio;
