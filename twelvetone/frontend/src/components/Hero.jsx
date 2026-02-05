import React from 'react';

const Hero = () => {
    return (
        // Menambahkan pt-24 pada mobile agar tidak tertabrak navbar
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center pt-24 md:pt-0">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-studio-black/40 via-studio-black/60 to-studio-black z-10"></div>

            {/* Cinematic Background */}
            <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center animate-fade-in scale-110"></div>

            <div className="section-container relative z-20 w-full">
                <div className="max-w-3xl animate-slide-up">
                    <h4 className="text-studio-beige uppercase tracking-[0.3em] font-bold text-sm mb-6 flex items-center">
                        <span className="w-12 h-[1px] bg-studio-gold mr-4"></span>
                        Where Sound Meets Soul
                    </h4>
                    {/* Ukuran font H1 diperkecil sedikit di mobile (text-4xl) agar lebih proporsional */}
                    <h1 className="text-4xl md:text-8xl font-bold mb-8 leading-[1.1] text-studio-beige">
                        Premium Creative Space for <span className="text-studio-red italic">Audiovisual Arts.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-studio-beige/70 mb-12 max-w-2xl font-light leading-relaxed">
                        Elevating podcasts, bands, and labels through high-end acoustic engineering,
                        world-class equipment, and artistic collaboration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <a href="#contact" className="btn-primary text-center">Book a Session</a>
                        <a href="#portfolio" className="btn-secondary text-center">Explore Our Work</a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator - Sembunyikan di mobile sangat kecil agar tidak berantakan */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden sm:block">
                <div className="w-[1px] h-20 bg-gradient-to-b from-studio-red to-transparent"></div>
            </div>
        </section>
    );
};

export default Hero;