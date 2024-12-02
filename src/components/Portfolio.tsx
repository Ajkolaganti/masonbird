import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const projects = [
    {
      title: "GV Financial Group",
      description: "Professional financial services website with comprehensive service listings and contact integration",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
      category: "Finance",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: "https://gv-financial-group.vercel.app/",
      features: ["Service Listings", "Contact Form", "Professional Design"]
    },
    {
      title: "Baby Diary",
      description: "Digital baby milestone tracking and memory keeping application",
      image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80",
      category: "Healthcare",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://babydiary.vercel.app/",
      features: ["User Authentication", "Data Storage", "Photo Upload"]
    },
    {
      title: "ImageAI",
      description: "AI-powered image processing and text extraction platform",
      image: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&q=80",
      category: "AI",
      tech: ["React", "AI/ML", "OCR"],
      link: "https://image-ai-tau.vercel.app/",
      features: ["Text Extraction", "Excel Conversion", "Image Search"]
    },
    {
      title: "Job Seekers",
      description: "Modern job search and application tracking platform",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80",
      category: "Employment",
      tech: ["React", "API Integration", "Redux"],
      link: "https://job-seeekers.netlify.app/",
      features: ["Job Search", "Application Tracking", "Resume Upload"]
    }
  ];

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-black to-purple-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [null, -20, null],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Our Work
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our latest projects showcasing our expertise across different industries
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${activeCategory === category 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                  : 'bg-white/10 text-gray-400 hover:bg-white/20'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm"
              >
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 p-6 w-full">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-3 py-1 text-sm bg-white/10 rounded-full text-gray-300">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-full text-white hover:bg-purple-700 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Site
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}