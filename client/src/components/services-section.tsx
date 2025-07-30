import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web design",
    description: "Premium, custom web design services that cater to the unique needs of each client. Visually stunning and user-friendly websites that drive results.",
  },
  {
    number: "02",
    title: "Webflow Development",
    description: "Beautiful, functional websites created using the powerful Webflow platform. Highly customizable and easily manageable, even with no prior web development experience.",
  },
  {
    number: "03",
    title: "Content & SEO",
    description: "Comprehensive services that help businesses build a strong online presence. High-quality, engaging content that drives conversions, optimized for search engines.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-light-gray mb-4">Services</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Design, Development, and Content. All-in-one.
          </h2>
          <p className="text-lg text-light-gray max-w-2xl mx-auto">
            Take your online presence to the next level with my expert web design and content creation services.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card-bg p-8 rounded-2xl hover:transform hover:scale-105 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-light-gray mb-4">{service.number}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-light-gray">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
