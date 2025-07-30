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
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="animate-slide-up"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            Web Design<br />
            <span className="text-white/80">& Webflow</span>
          </h1>
          <p className="text-lg text-light-gray mb-8 max-w-lg">
            Premium Web Design, Webflow, and SEO services to help your business stand out.
          </p>
          <button
            onClick={scrollToServices}
            className="inline-flex items-center px-8 py-3 bg-transparent border border-white/20 rounded-full hover:bg-white hover:text-dark transition-all duration-300 group"
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
    </section>
  );
}
