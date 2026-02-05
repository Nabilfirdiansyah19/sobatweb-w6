import React from 'react';

const Services = () => {
    const services = [
        {
            title: 'Podcast Production',
            description: 'End-to-end production for professional podcasters looking for broadcast quality sound.',
            icon: '🎙️'
        },
        {
            title: 'Band Recording',
            description: 'Multi-room recording facilities designed to capture the energy and nuance of live performance.',
            icon: '🎸'
        },
        {
            title: 'Mixing & Mastering',
            description: 'Precision audio engineering to bring clarity, depth, and punch to your final tracks.',
            icon: '🎚️'
        },
        {
            title: 'Music Production',
            description: 'Collaborative production services to help you develop your sound from concept to completion.',
            icon: '🎹'
        },
        {
            title: 'Voice Over & Post',
            description: 'Crystal clear voice recording and sound design for commercials, film, and digital media.',
            icon: '🔊'
        },
        {
            title: 'Label Support',
            description: 'Comprehensive audio solutions and workflow management for established music labels.',
            icon: '📀'
        }
    ];

    return (
        <section id="services" className="bg-studio-gray py-24">
            <div className="section-container">
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <h4 className="text-studio-gold uppercase tracking-widest font-bold text-sm">Specialized Services</h4>
                    <h2 className="text-4xl md:text-5xl font-bold text-studio-beige">Tailored Audio Solutions</h2>
                    <div className="w-20 h-1 bg-studio-red mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="card-premium group">
                            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-500">{service.icon}</div>
                            <h3 className="text-xl font-bold text-studio-beige mb-4 group-hover:text-studio-red transition-colors">{service.title}</h3>
                            <p className="text-studio-beige/60 leading-relaxed text-sm">
                                {service.description}
                            </p>
                            <div className="mt-8 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <a href="#contact" className="text-studio-gold text-xs uppercase tracking-widest font-bold hover:text-studio-red">Learn More &rarr;</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
