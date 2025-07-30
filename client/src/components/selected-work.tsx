import { motion } from "framer-motion";

const projects = [
  {
    title: "Erikk",
    description: "Erikk represents a multi-purpose Webflow Template ideal for creative agencies, design studios, freelancers, and personal portfolios.",
    image: "https://cdn.prod.website-files.com/640ad50de56ca3c455bbf3f1/6413dc1afc983ca3ecb87086_project-01-preview.webp",
    tags: ["Webdesign", "Webflow"],
  },
  {
    title: "Alvy",
    description: "Alvy is a versatile and functional Webflow Template for creative agencies, design studios, freelancers, and personal portfolios.",
    image: "https://cdn.prod.website-files.com/640ad50de56ca3c455bbf3f1/6413dc239765987c6a9bfe34_project-02-preview.webp",
    tags: ["Webdesign", "Webflow"],
  },
  {
    title: "Fylla",
    description: "Fylla is a minimal & modern Agency Webflow Template perfectly suited for creative agencies, design studios, freelancer or your personal portfolio.",
    image: "https://cdn.prod.website-files.com/640ad50de56ca3c455bbf3f1/6413dc2b2d9306022cf905f4_project-03-preview.webp",
    tags: ["Webflow", "Webdesign"],
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="flex justify-between items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold">Selected Work</h2>
          <a href="#" className="text-green-accent hover:underline">
            See All
          </a>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden rounded-2xl mb-6">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-light-gray mb-4">{project.description}</p>
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-card-bg rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a href="#" className="text-green-accent hover:underline">
                Discover
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
