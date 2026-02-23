import { motion } from "motion/react";

const images = [
  "https://images.unsplash.com/photo-1588510026338-d363b272d50a?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=2095&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1629213568892-232675661126?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">Real Results</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium tracking-widest uppercase text-sm border border-white px-4 py-2 rounded-full">View</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/emberbrows"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-500 hover:text-black transition-colors border-b border-gray-300 hover:border-black pb-1"
          >
            View more on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
