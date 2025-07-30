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
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Sticky Header */}
          <div className="lg:sticky lg:top-24 lg:h-fit">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-light-gray mb-4">My Process</p>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'hsl(0, 0%, 98%)' }}>
                Your Dream Website in just few steps
              </h2>
              <p className="text-lg text-light-gray max-w-lg mb-8">
                From consultation to launch, our streamlined process ensures timely delivery and quality work.
              </p>
              <button
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-3 bg-green-accent text-white rounded-full hover:bg-green-accent-hover transition-colors"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>

          {/* Right Column - Scrollable Steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-green-accent/30 pl-8 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Step number circle */}
                <div 
                  className="absolute -left-6 top-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white"
                  style={{ backgroundColor: 'hsl(142, 76%, 36%)' }}
                >
                  {step.number}
                </div>
                
                <div className="bg-card-bg p-8 rounded-2xl">
                  <h3 className="text-3xl font-bold mb-4" style={{ color: 'hsl(0, 0%, 98%)' }}>
                    {step.title}
                  </h3>
                  <p className="text-light-gray mb-6 text-lg leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="text-light-gray space-y-3">
                    {step.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="text-green-accent mr-3 mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
