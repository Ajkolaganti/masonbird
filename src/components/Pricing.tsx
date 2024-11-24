import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start with zero upfront costs and only pay for the ongoing support you need
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-white border-2 border-gray-200 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Development</h3>
            <div className="mb-8">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-600"> upfront</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "Custom website development",
                "Responsive design",
                "SEO optimization",
                "Performance optimization",
                "1-month free trial"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-6 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
              Start Project
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-4">Monthly Support</h3>
            <div className="mb-8">
              <span className="text-4xl font-bold">$199</span>
              <span> /month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                "24/7 technical support",
                "Security monitoring",
                "Regular updates",
                "Performance monitoring",
                "Content updates",
                "Monthly reports"
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-6 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors">
              Choose Plan
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}