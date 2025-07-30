import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden" style={{ backgroundColor: 'hsl(0, 0%, 10.2%)' }}>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          className="animate-slide-up"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6" style={{ color: 'hsl(0, 0%, 98%)' }}>
            Web Design<br />
            <span style={{ color: 'hsla(0, 0%, 98%, 0.8)' }}>& Webflow</span>
          </h1>
          <p className="text-lg mb-8 max-w-lg" style={{ color: 'hsl(0, 0%, 70%)' }}>
            Premium Web Design, Webflow, and SEO services to help your business stand out.
          </p>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center px-8 py-3 bg-transparent border rounded-full transition-all duration-300 group"
            style={{ 
              borderColor: 'hsla(0, 0%, 98%, 0.2)', 
              color: 'hsl(0, 0%, 98%)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'hsl(0, 0%, 98%)';
              e.currentTarget.style.color = 'hsl(0, 0%, 10.2%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'hsl(0, 0%, 98%)';
            }}
          >
            <span className="mr-2">MY SERVICES</span>
            <ChevronDown className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" />
          </button>
        </motion.div>
        <motion.div
          className="animate-fade-in"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000"
            alt="Professional web designer portrait"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
      
      {/* Background overlay to darken the image and create depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40"></div>
    </section>
  );
}
