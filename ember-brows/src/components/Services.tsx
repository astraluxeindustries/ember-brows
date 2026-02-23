import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Microblading",
    description: "Semi-permanent eyebrow tattooing technique that creates natural-looking hair strokes for fuller, defined brows.",
    price: "Starting at $450",
    image: "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Lip Blushing",
    description: "Enhance your natural lip color and shape with a soft, misty wash of color that heals to a beautiful tint.",
    price: "Starting at $400",
    image: "https://images.unsplash.com/photo-1588510026338-d363b272d50a?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Lash Enhancement",
    description: "A subtle eyeliner tattoo placed within the lash line to make your lashes appear thicker and darker.",
    price: "Starting at $300",
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Freckles",
    description: "Sun-kissed, natural-looking faux freckles tattooed across the nose and cheeks for a youthful glow.",
    price: "Starting at $150",
    image: "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=2095&auto=format&fit=crop"
  },
  {
    title: "Tooth Gems",
    description: "Add a sparkle to your smile with high-quality Swarovski crystals or gold charms bonded to your tooth.",
    price: "Starting at $60",
    image: "https://images.unsplash.com/photo-1629213568892-232675661126?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Premium Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-gray-50 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8 relative bg-white border border-gray-100 -mt-4 mx-4 rounded-xl shadow-sm group-hover:-translate-y-2 transition-transform duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-2xl font-serif font-semibold text-gray-900">{service.title}</h4>
                  <ArrowUpRight className="text-gray-400 group-hover:text-black transition-colors" size={20} />
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <span className="text-sm font-medium text-gray-900">{service.price}</span>
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider group-hover:text-black transition-colors">Book Now</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
