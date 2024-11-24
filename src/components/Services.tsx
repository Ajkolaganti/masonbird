import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Smartphone, Gauge, Shield, HeartHandshake } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Web Development",
      description: "Tailored solutions built with cutting-edge technologies"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "E-commerce Solutions",
      description: "Scalable online stores with seamless payment integration"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Beautiful websites that work perfectly on all devices"
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds and optimal user experience"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Maintenance",
      description: "Regular updates and robust security measures"
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Dedicated support team at your service"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your needs, with no upfront costs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}