import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8">Book Your Appointment</h3>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Ready to wake up with makeup? Contact us to schedule your consultation or appointment. 
              We look forward to enhancing your natural beauty.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-stone-900">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold mb-1">Visit Us</h4>
                  <p className="text-gray-600">349 E 100 S, Ivins, UT 84738</p>
                  <a href="https://maps.google.com/?q=349+E+100+S,+Ivins,+UT+84738" target="_blank" rel="noopener noreferrer" className="text-sm text-stone-500 underline mt-1 block hover:text-black">Get Directions</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-stone-900">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold mb-1">Call or Text</h4>
                  <p className="text-gray-600">Mon-Fri from 9am to 6pm</p>
                  <a href="tel:8017037505" className="text-lg font-medium text-stone-900 hover:underline mt-1 block">(801) 703-7505</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center shrink-0 text-stone-900">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-600">For general inquiries</p>
                  <a href="mailto:hello@emberbrows.com" className="text-stone-900 hover:underline mt-1 block">hello@emberbrows.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 bg-stone-50 p-8 md:p-12 rounded-3xl relative overflow-hidden"
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center bg-stone-50 p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="text-2xl font-serif font-bold mb-2">Message Sent!</h4>
                <p className="text-gray-600 mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-all bg-white"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-all bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-all bg-white"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-gray-700">Interested Service</label>
                  <select 
                    id="service" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="microblading">Microblading</option>
                    <option value="lip-blushing">Lip Blushing</option>
                    <option value="lash-enhancement">Lash Enhancement</option>
                    <option value="freckles">Freckles</option>
                    <option value="tooth-gems">Tooth Gems</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-stone-500 focus:ring-1 focus:ring-stone-500 outline-none transition-all bg-white resize-none"
                    placeholder="Tell us about what you're looking for..."
                  ></textarea>
                </div>

                <Button type="submit" className="w-full h-12 text-base bg-stone-900 hover:bg-black rounded-full transition-all hover:scale-[1.02]">
                  Send Message <Send size={18} className="ml-2" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
