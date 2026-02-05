import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
    const featuredProjects = [
        {
            id: 1,
            title: "The Glass House",
            category: "Residential",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
            span: "md:col-span-2 md:row-span-2",
        },
        {
            id: 2,
            title: "Minimalist Loft",
            category: "Interior",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
            span: "md:col-span-1 md:row-span-1",
        },
        {
            id: 3,
            title: "Concrete Pavilion",
            category: "Architecture",
            image: "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&w=800&q=80",
            span: "md:col-span-1 md:row-span-1",
        },
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0 bg-soft-black"
                >
                    <img
                        src="/hero.png"
                        alt="Hero Architecture"
                        className="w-full h-full object-cover opacity-60"
                    />
                </motion.div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-white text-4xl md:text-7xl font-serif tracking-widest max-w-4xl uppercase leading-tight"
                    >
                        Modern Architecture & Interior Design Studio
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="mt-12"
                    >
                        <div className="w-px h-24 bg-white/30 mx-auto"></div>
                    </motion.div>
                </div>
            </section>

            {/* Storytelling Section */}
            <section className="py-32 bg-soft-white dark:bg-soft-black transition-colors">
                <div className="fluid-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight text-soft-black dark:text-soft-white">
                                Spaces that resonate with your soul.
                            </h2>
                            <p className="text-soft-black/60 dark:text-soft-white/60 font-light leading-relaxed mb-10 text-lg">
                                We believe that every structure has a story. Our design philosophy merges minimalist elegance with modern functionality to create environments that are both artistic and livable.
                            </p>
                            <Link to="/about" className="group flex items-center gap-4 text-sm tracking-widest uppercase font-bold text-soft-black dark:text-soft-white">
                                Discover our story <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            className="aspect-[4/5] overflow-hidden rounded-3xl shadow-soft dark:shadow-soft-dark"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
                                alt="Interior Design"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Projects Grid */}
            <section className="py-32 bg-white-grey dark:bg-soft-black transition-colors">
                <div className="fluid-container">
                    <div className="mb-20 flex justify-between items-end">
                        <div>
                            <p className="text-xs tracking-[0.3em] uppercase mb-4 font-bold opacity-30 text-soft-black dark:text-soft-white">Our Selection</p>
                            <h2 className="text-4xl md:text-6xl font-serif text-soft-black dark:text-soft-white">Featured Projects</h2>
                        </div>
                        <Link to="/portfolio" className="text-sm tracking-widest uppercase font-bold border-b border-soft-black dark:border-soft-white pb-1 mb-2 hover:opacity-50 transition-opacity text-soft-black dark:text-soft-white">View All</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`group relative overflow-hidden rounded-3xl hover-lift ${project.span}`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-soft-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-12 text-white backdrop-blur-sm">
                                    <p className="text-xs tracking-widest uppercase mb-2 font-light opacity-80">{project.category}</p>
                                    <h3 className="text-3xl font-serif">{project.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-white-grey dark:bg-soft-black text-soft-black dark:text-soft-white transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto md:h-[600px]">
                    {[
                        { name: "Architecture", img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=600&q=80" },
                        { name: "Interior Design", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80" },
                        { name: "Custom Furniture", img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=600&q=80" },
                        { name: "3D Visualization", img: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&w=600&q=80" },
                    ].map((service, index) => (
                        <motion.div
                            key={service.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="relative group h-[400px] md:h-full overflow-hidden"
                        >
                            <img
                                src={service.img}
                                alt={service.name}
                                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105"
                            />
                            <div className="relative h-full flex items-center justify-center p-8">
                                <h3 className="text-2xl font-serif tracking-[0.1em] uppercase group-hover:scale-110 transition-transform duration-500">{service.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
