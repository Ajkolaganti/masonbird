import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "David Park",
      role: "CTO at TechVision",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      content: "The team at MasonBird transformed our digital presence completely. Their AI integration solutions have given us a significant competitive advantage.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Emma Wilson",
      role: "Founder of EcoStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      content: "Zero upfront costs and exceptional quality - MasonBird delivered beyond our expectations. Our conversion rate increased by 150% after the redesign.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Michael Chen",
      role: "CEO at HealthTech",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
      content: "Working with MasonBird was a game-changer. Their healthcare dashboard solution streamlined our operations significantly.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at center, rgba(139, 92, 246, 0.1), transparent)`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
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
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Hear from our clients about their transformative experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="relative group"
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              
              <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="absolute -top-4 -right-4">
                  <Quote className="w-8 h-8 text-purple-500 opacity-50" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-purple-500/20"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className={`text-sm bg-clip-text text-transparent bg-gradient-to-r ${testimonial.gradient}`}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {testimonial.content}
                </p>

                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center`}>
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}