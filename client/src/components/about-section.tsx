import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
            alt="Aiko Karlsson professional workspace"
            className="w-full rounded-2xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-light-gray mb-4">About</p>
          <div className="text-2xl font-semibold mb-6">Aiko Karlsson</div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            A website that leaves a lasting impression!
          </h2>
          <p className="text-lg text-light-gray mb-8">
            Your website is your digital storefront, and it should create an unforgettable impression. 
            Let me design and develop a website that reflects your brand's personality and creates a 
            lasting impression on your audience. With my expertise in web design and development, I can 
            help you build a website that stands out and leaves a lasting impact.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-green-accent text-white rounded-full hover:bg-green-accent-hover transition-colors"
          >
            About Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
