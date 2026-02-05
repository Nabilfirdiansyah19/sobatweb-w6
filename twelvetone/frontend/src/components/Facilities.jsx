import React from 'react';

const Facilities = () => {
    const facilities = [
        { name: "Live Room", desc: "Acoustically treated space for full bands.", img: "/images/facilities.png" },
        { name: "Control Room", desc: "Equipped with high-end analog and digital gear.", img: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
        { name: "Vocal Booth", desc: "Perfect isolation for crystal clear vocals.", img: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
    ];

    return (
        <section id="facilities" className="bg-studio-gray py-24">
            <div className="section-container">
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <h4 className="text-studio-gold uppercase tracking-widest font-bold text-sm">Our Facilities</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-studio-beige">The Creative Sanctuary</h2>
                    <p className="text-studio-beige/60">Where state-of-the-art technology meets acoustic perfection.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
                    {facilities.map((fac, index) => (
                        <div key={index} className="relative group overflow-hidden bg-studio-black aspect-video">
                            <img src={fac.img} alt={fac.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-studio-black to-transparent">
                                <h3 className="text-xl font-bold text-studio-beige mb-1">{fac.name}</h3>
                                <p className="text-studio-beige/40 text-xs uppercase tracking-widest">{fac.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-studio-black/30 border border-white/5 p-12">
                    <h3 className="text-studio-gold uppercase tracking-[0.2em] text-xs font-bold mb-10 text-center">Premium Gear List</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <GearCategory title="Monitors" items={["ATC SCM25A", "Yamaha NS-10M", "Genelec 8351B"]} />
                        <GearCategory title="Microphones" items={["Neumann U87 Ai", "AKG C414 XLII", "Shure SM7B", "Coles 4038"]} />
                        <GearCategory title="Outboard" items={["Neve 1073DPD", "Universal Audio 1176", "SSL G-Comp", "API 550A"]} />
                        <GearCategory title="Instruments" items={["Steinway Model B", "Fender Rhodes Mark I", "Hammond B3", "Vintage Guitars"]} />
                    </div>
                </div>
            </div>
        </section>
    );
};

const GearCategory = ({ title, items }) => (
    <div>
        <h4 className="text-studio-beige font-bold mb-4 border-b border-studio-red/30 pb-2">{title}</h4>
        <ul className="space-y-2">
            {items.map((item, i) => (
                <li key={i} className="text-studio-beige/60 text-sm flex items-center">
                    <span className="w-1 h-1 bg-studio-red mr-3"></span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default Facilities;
