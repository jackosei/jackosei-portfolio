import { motion } from "framer-motion";

const testimonials = [
  {
    clientLogo: "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b9815d7e4aa31e2_client-logo-03.svg",
    title: "Exceptional web design that exceeded our expectations",
    content: "Our website redesign surpassed our expectations. Aiko's attention to detail and creativity resulted in a visually stunning and user-friendly site that immediately boosted our online presence.",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    authorName: "John Smith",
    authorCompany: "ABC Company",
  },
  {
    clientLogo: "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b98155090aa31e1_client-logo-02.svg",
    title: "Aiko delivered a website that showcases our business",
    content: "Aiko's web design resulted in a website that showcases our business in a professional and user-friendly manner. We couldn't be happier with the outcome.",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b1c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    authorName: "Karen Lee",
    authorCompany: "Redwood Technologies",
  },
  {
    clientLogo: "https://cdn.prod.website-files.com/640ad50de56ca34470bbf3c7/640d37ef1b9815a95eaa31e3_client-logo-07.svg",
    title: "Aiko's web design brought our brand to life",
    content: "Aiko's expertise in web design breathed life into our brand. She captured our vision with precision, and delivered a website that stands out among our competitors.",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&h=150",
    authorName: "David Kim",
    authorCompany: "Design Inc.",
  },
];

export default function Testimonials() {
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
            What my clients say
          </h2>
          <p className="text-lg text-light-gray max-w-2xl mx-auto">
            See what our clients have to say about their experience working with me and my team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card-bg p-8 rounded-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={testimonial.clientLogo}
                alt="Client logo"
                className="h-8 mb-6 opacity-70"
              />
              <h3 className="text-xl font-bold mb-4">{testimonial.title}</h3>
              <p className="text-light-gray mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.authorImage}
                  alt={`${testimonial.authorName} testimonial`}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.authorName}</div>
                  <div className="text-light-gray text-sm">
                    {testimonial.authorCompany}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
