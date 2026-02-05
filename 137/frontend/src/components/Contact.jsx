import { Instagram, MapPin, Phone } from 'lucide-react';
import { businessConfig } from '../config/businessConfig';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-black text-white p-12 md:p-20 rounded-[4rem]">
            <h2 className="text-6xl font-black uppercase italic mb-12 tracking-tighter">LET'S <br />TALK.</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <MapPin className="text-neutral-500" />
                <p className="font-bold text-lg uppercase italic">{businessConfig.address}</p>
              </div>
              <div className="flex gap-6">
                <Instagram className="text-neutral-500" />
                <a href={businessConfig.instagram} className="font-bold text-lg hover:underline italic">@satu37studio</a>
              </div>
              <div className="flex gap-6">
                <Phone className="text-neutral-500" />
                <a href={businessConfig.whatsappLink} className="font-bold text-lg hover:underline italic">WhatsApp Us</a>
              </div>
            </div>
          </div>
          <div className="rounded-[4rem] overflow-hidden grayscale contrast-125 min-h-[400px] border-8 border-black">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126914.21857644265!2d106.7891544!3d-6.2544256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTUnMTUuOSJTIDEwNsKwNTAnMzYuNCJF!5e0!3m2!1sen!2sid!4v1625000000000!5m2!1sen!2sid"
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;