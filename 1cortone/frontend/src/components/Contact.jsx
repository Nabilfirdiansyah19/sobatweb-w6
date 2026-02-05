import { motion } from 'framer-motion';
import { MapPin, Instagram, Phone, ExternalLink } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative Text Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none flex items-center overflow-hidden">
        <h1 className="text-[25rem] font-black italic whitespace-nowrap text-white">1CORTONE STUDIO 1CORTONE STUDIO</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Info Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-neutral-900 border border-white/10 rounded-[3.5rem] p-12 text-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-6xl font-black uppercase italic mb-8 tracking-tighter">Get In <br /><span className="text-neutral-300">The Loop.</span></h2>
              
              <div className="space-y-8 mt-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black shrink-0"><MapPin size={24}/></div>
                  <div>
                    <h4 className="font-black uppercase text-xs tracking-widest text-neutral-500 mb-1">Studio Location</h4>
                    <p className="font-bold italic text-lg">Jakarta, Indonesia. <br /> (Check maps for details)</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-black shrink-0"><Instagram size={24}/></div>
                  <div>
                    <h4 className="font-black uppercase text-xs tracking-widest text-neutral-500 mb-1">Follow Us</h4>
                    <a href={businessConfig.instagram} className="font-bold italic text-lg hover:underline transition-all flex items-center gap-2">@1cortone_studio <ExternalLink size={14}/></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <a 
                href={businessConfig.whatsappLink} 
                className="w-full bg-white text-black py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-4 hover:scale-105 transition-transform"
              >
                <Phone size={18} /> Send WhatsApp 
              </a>
            </div>
          </motion.div>

          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-[3.5rem] overflow-hidden grayscale contrast-125 border border-white/10"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.24151761891!2d106.75947783906251!3d-6.229746499999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3ef42555555%3A0x6d042f9b2c3c9b7e!2sJakarta!5e0!3m2!1sen!2sid!4v1710000000000!5m2!1sen!2sid"
              className="w-full h-full min-h-[450px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;