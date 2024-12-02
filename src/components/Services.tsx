import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Gauge, Shield, HeartHandshake } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom Development",
      description: "Cutting-edge web applications built with the latest technologies",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Reach",
      description: "Scalable solutions that perform worldwide",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile First",
      description: "Responsive designs that work seamlessly across all devices",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: "Performance",
      description: "Lightning-fast load times and optimal user experience",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security",
      description: "Enterprise-grade security and data protection",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Support",
      description: "24/7 dedicated support and maintenance",
      gradient: "from-pink-500 to-rose-500"
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
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Transforming ideas into digital reality with cutting-edge solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10"
                style={{
                  background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': service.gradient.split(' ')[1],
                  '--tw-gradient-to': service.gradient.split(' ')[3]
                }}
              />
              <div className="h-full p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className={`mb-6 p-4 rounded-lg bg-gradient-to-r ${service.gradient} w-fit`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
                
                <motion.div
                  className="mt-6 flex items-center gap-2 text-purple-400 cursor-pointer group"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn more</span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}