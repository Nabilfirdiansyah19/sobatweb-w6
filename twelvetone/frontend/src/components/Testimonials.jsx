import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "TwelveTone provides an acoustic environment that is truly world-class. The attention to detail and professional support allowed us to focus entirely on our creativity.",
            author: "Julian Vance",
            role: "Lead Singer, The Velvet Notes"
        },
        {
            quote: "As a podcaster, sound quality is non-negotiable. TwelveTone delivered a broadcast-level experience that has significantly elevated our production value.",
            author: "Sarah Chen",
            role: "Host, The Creative Edge Podcast"
        },
        {
            quote: "The team at TwelveTone understands the nuances of modern pop production while maintaining a deep respect for jazz sophistication. A truly unique space.",
            author: "Marcus Thorne",
            role: "Founder, Zenith Records"
        }
    ];

    return (
        <section className="bg-studio-black py-24 border-y border-white/5">
            <div className="section-container">
                <div className="text-center mb-16 space-y-4">
                    <h4 className="text-studio-gold uppercase tracking-widest font-bold text-sm">Testimonials</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-studio-beige">Trusted Voices</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {testimonials.map((t, i) => (
                        <div key={i} className="space-y-6">
                            <div className="text-studio-red text-6xl font-serif">“</div>
                            <p className="text-studio-beige/80 italic leading-relaxed text-lg">
                                {t.quote}
                            </p>
                            <div className="pt-6 border-t border-white/5">
                                <p className="text-studio-beige font-bold uppercase tracking-widest text-sm">{t.author}</p>
                                <p className="text-studio-gold text-[10px] uppercase tracking-[0.2em] mt-1">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
