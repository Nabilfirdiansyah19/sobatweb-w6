import React from 'react';

const Portfolio = () => {
    const projects = [
        { title: "Symphony of Night", category: "Band Recording", img: "https://images.unsplash.com/photo-1514525253344-f85633a253bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { title: "The Creative Edge", category: "Podcast", img: "https://images.unsplash.com/photo-1478737270239-2fccd2cfee90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { title: "Urban Beats Vol. 3", category: "Music Production", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { title: "Voice of Reason", category: "Voice Over", img: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { title: "Echoes of Silence", category: "Mixing & Mastering", img: "/images/mixing.png" },
        { title: "Midnight Jazz", category: "Label Support", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
    ];

    return (
        <section id="portfolio" className="bg-studio-black py-24">
            <div className="section-container">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
                    <div className="space-y-4">
                        <h4 className="text-studio-gold uppercase tracking-widest font-bold text-sm">Portfolio</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-studio-beige">Our Latest <span className="text-studio-red">Works</span></h2>
                    </div>
                    <p className="text-studio-beige/60 max-w-md pb-2">
                        A showcase of recent projects spanning podcasts, bands, and independent music labels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative aspect-[4/5] overflow-hidden bg-studio-gray">
                            <img
                                src={project.img}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-studio-red uppercase tracking-widest text-[10px] font-bold block mb-2">{project.category}</span>
                                <h3 className="text-2xl font-bold text-studio-beige">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-studio-gold uppercase tracking-[0.2em] text-xs font-bold mb-8">Trusted by Professional Musicians & Creators</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
                        <LogoPlaceholder name="MUSIC LABEL" />
                        <LogoPlaceholder name="JAZZ BAND" />
                        <LogoPlaceholder name="PODCAST CO" />
                        <LogoPlaceholder name="AUDIO STUDIOS" />
                        <LogoPlaceholder name="RECORDS" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const LogoPlaceholder = ({ name }) => (
    <span className="text-studio-beige text-xl font-serif font-bold tracking-tighter italic">{name}</span>
);

export default Portfolio;
