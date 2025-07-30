import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Concept",
    description: "During the concept phase, I work closely with my clients to understand their needs and goals for their website.",
    points: [
      "Reviewing any existing branding",
      "Target audience and competitors research",
      "Developing a strategy",
    ],
  },
  {
    number: "02",
    title: "Design",
    description: "Once the concept is established, I move on to the design phase. Here, I create a visual representation of the website that reflects the client's brand and messaging.",
    points: [
      "Developing wireframes and mockup",
      "Choosing typography, color palettes, and imagery",
      "Refining the design",
    ],
  },
  {
    number: "03",
    title: "Webflow",
    description: "After the design is finalized, I move on to building the website using Webflow.",
    points: [
      "Translating the design into code using Webflow",
      "Responsive and functions perfectly across all devices",
      "Testing the website thoroughly before launch",
    ],
  },
];

export default function ProcessSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <p className="text-sm text-light-gray mb-4">My Process</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your Dream Website in just few steps
          </h2>
          <p className="text-lg text-light-gray max-w-2xl mx-auto mb-8">
            From consultation to launch, our streamlined process ensures timely delivery and quality work.
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center px-8 py-3 bg-green-accent text-white rounded-full hover:bg-green-accent-hover transition-colors"
          >
            Get in Touch
          </button>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl font-bold text-light-gray mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-light-gray mb-6">{step.description}</p>
              <ul className="text-left text-light-gray space-y-2">
                {step.points.map((point, pointIndex) => (
                  <li key={pointIndex}>• {point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
