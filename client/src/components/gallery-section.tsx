import { motion } from "framer-motion";

const galleryImages = [
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/64128a1cae08c33c9c0df699_website-fyrre.webp",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/6412899d55d4750b8c07a087_website-fylla.webp",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/64128a1cd11f015f46bb424a_website-arkitect.webp",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/64128a1be41c115b4515dd4b_website-olvi.webp",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/6412899d6c8ace5c4b032bf2_website-erikk.webp",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/64128a1bdef53dc35b4e691f_website-ylva.webp",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/64128a1b19545d84b1d5c0c8_website-solveig.webp",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/64128a1be41c1113b115dd4c_website-skold.webp",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/6412899d96c6123be480827b_website-alvy.webp",
  "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/6412899d6c8aceb969032bf3_website-leevi.webp",
];

export default function GallerySection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Award-Winning Websites
          </h2>
          <p className="text-lg text-light-gray max-w-2xl mx-auto">
            I create award-winning websites that elevate your brand and attract more customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <img
                src={image}
                alt="Award-winning website design"
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
