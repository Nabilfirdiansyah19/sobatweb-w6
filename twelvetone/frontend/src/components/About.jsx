import React from 'react';

const About = () => {
    return (
        <section id="about" className="bg-studio-black py-24 overflow-hidden">
            <div className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-square bg-studio-gray overflow-hidden">
                            <img
                                src="/images/vocal.png"
                                alt="Recording Studio"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-studio-red/10 -z-10"></div>
                        <div className="absolute -top-6 -left-6 border border-studio-gold w-32 h-32 -z-10"></div>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-studio-gold uppercase tracking-widest font-bold text-sm">Our Legacy</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-studio-beige leading-tight">
                            A Symphony of <span className="text-studio-red">Excellence</span> and Artistry.
                        </h2>
                        <p className="text-studio-beige/70 leading-relaxed text-lg">
                            Founded at the intersection of jazz sophistication and modern pop energy, TwelveTone
                            has evolved into a premier creative hub for the most discerning artists and content creators.
                        </p>
                        <p className="text-studio-beige/70 leading-relaxed">
                            Our journey began with a simple mission: to provide an environment where technical
                            perfection meets creative freedom. Over the years, we've had the honor of collaborating
                            with world-renowned musicians, chart-topping bands, and visionary labels, helping them
                            shape the sounds that define generations.
                        </p>
                        <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-8">
                            <div>
                                <span className="block text-3xl font-bold text-studio-red mb-1">15+</span>
                                <span className="text-xs uppercase tracking-widest text-studio-gold">Years Experience</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-studio-red mb-1">500+</span>
                                <span className="text-xs uppercase tracking-widest text-studio-gold">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
