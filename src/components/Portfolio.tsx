import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern online store with seamless checkout",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      category: "E-commerce"
    },
    {
      title: "Healthcare Dashboard",
      description: "Patient management system with analytics",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80",
      category: "Healthcare"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management system",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
      category: "Real Estate"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and see how we've helped businesses grow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-purple-600">{project.category}</span>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <button className="mt-4 inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors">
                  View Project <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}