import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
          alt="Beautiful woman with perfect brows"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 font-medium">
            Premium Cosmetic Tattooing
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-tight">
            Wake Up <br /> With Makeup
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-white/90 font-light">
            Enhancing your natural beauty with expert microblading, lip blushing, and more in Ivins, Utah.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#services"
              className="px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2 group"
            >
              View Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-white text-white font-medium rounded-full hover:bg-white/10 transition-all hover:scale-105"
            >
              Book Appointment
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
