import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1595476103518-3c8ad043fbf7?q=80&w=1974&auto=format&fit=crop"
                alt="Ciara Campbell - Ember Brows Owner"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm uppercase tracking-widest mb-2">Founder & Artist</p>
                <h4 className="text-3xl font-serif font-bold">Ciara Campbell</h4>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-stone-200 rounded-full blur-3xl -z-10 opacity-50" />
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">About The Studio</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              A Safe Space for <br />
              <span className="italic text-stone-600">Authentic Beauty</span>
            </h3>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Ember Brows, we believe that cosmetic tattooing should enhance your natural features, not mask them. 
              Founded by Ciara Campbell, our studio in Ivins, Utah is dedicated to providing expert microblading, 
              lip blushing, and more in a comfortable, safe, and inclusive environment.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Expertly trained and certified artist",
                "Premium, safe, and sterile equipment",
                "Customized mapping for your unique face shape",
                "Inclusive and welcoming atmosphere"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-stone-800" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-black/20"
            >
              Meet Ciara
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
