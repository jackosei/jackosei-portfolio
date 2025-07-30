import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-light-gray mb-4">Let's talk</p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Let's make your Website shine.
          </h2>
          <a
            href="#"
            className="inline-flex items-center px-12 py-4 bg-green-accent text-white text-lg rounded-full hover:bg-green-accent-hover transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
