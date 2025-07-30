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
              className="gsap-fade-up"
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
                data-cursor="pointer"
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
                className="border-l-2 border-green-accent/30 pl-8 relative group"
                initial={{ opacity: 0, x: 50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                viewport={{ once: true, margin: "-10%" }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Step number circle with pulse animation */}
                <motion.div 
                  className="absolute -left-6 top-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold text-white shadow-lg"
                  style={{ 
                    backgroundColor: 'hsl(142, 76%, 36%)',
                    boxShadow: "0 0 10px rgba(34, 197, 94, 0.3)"
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.3,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5
                  }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 + 0.8 }}
                    viewport={{ once: true }}
                  >
                    {step.number}
                  </motion.span>
                </motion.div>
                
                {/* Connecting line animation */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="absolute -left-1 top-12 w-0.5 h-16 bg-gradient-to-b from-green-accent to-green-accent/30"
                    initial={{ scaleY: 0, originY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2 + 0.6 
                    }}
                    viewport={{ once: true }}
                  />
                )}
                
                <motion.div 
                  className="bg-card-bg p-8 rounded-2xl hover:bg-opacity-80 transition-all duration-300 shadow-lg hover:shadow-xl border border-transparent hover:border-green-accent/20"
                  initial={{ rotateX: 15 }}
                  whileInView={{ rotateX: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.h3 
                    className="text-3xl font-bold mb-4" 
                    style={{ color: 'hsl(0, 0%, 98%)' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p 
                    className="text-light-gray mb-6 text-lg leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                  >
                    {step.description}
                  </motion.p>
                  <motion.ul 
                    className="text-light-gray space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                    viewport={{ once: true }}
                  >
                    {step.points.map((point, pointIndex) => (
                      <motion.li 
                        key={pointIndex} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.2 + 0.8 + pointIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.span 
                          className="text-green-accent mr-3 mt-1"
                          whileHover={{ scale: 1.2 }}
                        >
                          •
                        </motion.span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
