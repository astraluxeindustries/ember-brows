import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h4 className="text-2xl font-serif font-bold mb-6">Ember Brows</h4>
            <p className="text-stone-400 leading-relaxed mb-6">
              Premium cosmetic tattooing studio dedicated to enhancing your natural beauty in a safe and welcoming environment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-stone-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 shrink-0" size={18} />
                <span>349 E 100 S,<br />Ivins, UT 84738</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0" size={18} />
                <a href="tel:8017037505" className="hover:text-white transition-colors">(801) 703-7505</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0" size={18} />
                <a href="mailto:hello@emberbrows.com" className="hover:text-white transition-colors">hello@emberbrows.com</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-stone-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book Now</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Hours</h4>
            <ul className="space-y-3 text-stone-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ember Brows. All rights reserved.</p>
          <p>Designed with care.</p>
        </div>
      </div>
    </footer>
  );
}
