import { motion } from "framer-motion";

const About = () => {
    const steps = [
        { title: "Consultation", desc: "Understanding your vision, lifestyle, and needs.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80" },
        { title: "Design", desc: "Conceptualizing spatial layouts and aesthetic directions.", img: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&w=400&q=80" },
        { title: "3D Visualization", desc: "High-fidelity renders to preview your future space.", img: "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&w=400&q=80" },
        { title: "Production", desc: "Sourcing materials and crafting custom elements.", img: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=400&q=80" },
        { title: "Installation", desc: "Bringing the design to life in your space.", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80" },
    ];

    return (
        <div className="pt-40">
            <section className="fluid-container mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif mb-12">The Studio</h1>
                        <p className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                            Founded in 2018, LIVUMA is a multidisciplinary design studio specializing in modern architecture and interior design.
                        </p>
                        <p className="text-black/60 dark:text-white/60 font-light leading-relaxed mb-8">
                            We focus on the intersection of form, function, and emotion. Our team of architects and designers collaborate to create cohesive environments that reflect the identity of those who inhabit them. We believe in the power of minimalism to provide clarity and peace in a chaotic world.
                        </p>
                    </motion.div>
                    <div className="space-y-12">
                        <motion.img
                            initial={{ opacity: 0, scale: 1.1 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5 }}
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                            alt="Studio Life"
                            className="w-full rounded-sm grayscale"
                        />
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-soft-black text-white py-32">
                <div className="fluid-container">
                    <h2 className="text-3xl md:text-5xl font-serif mb-20 text-center tracking-widest uppercase">Our Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group flex flex-col items-center text-center"
                            >
                                <div className="w-full aspect-square overflow-hidden mb-6 rounded-full border border-white/10 p-2">
                                    <img
                                        src={step.img}
                                        alt={step.title}
                                        className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                                <h4 className="text-xs tracking-[0.3em] uppercase mb-4 font-bold opacity-30">Step 0{index + 1}</h4>
                                <h3 className="text-xl font-serif mb-4 uppercase">{step.title}</h3>
                                <p className="text-sm font-light text-white/50 leading-relaxed px-4">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
