import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Ciara is absolutely amazing! My brows have never looked better. She took the time to map them perfectly to my face shape.",
    rating: 5
  },
  {
    name: "Jessica T.",
    text: "I was so nervous about getting lip blushing, but Ciara made me feel so comfortable. The results are stunning and so natural!",
    rating: 5
  },
  {
    name: "Emily R.",
    text: "The best investment I've made for myself. Waking up with perfect brows every day is a game changer. Highly recommend Ember Brows!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium uppercase tracking-widest text-gray-500 mb-4">Client Love</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">What They Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-4 text-yellow-500">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center font-serif font-bold text-stone-600">
                  {testimonial.name[0]}
                </div>
                <span className="font-medium text-gray-900">{testimonial.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
