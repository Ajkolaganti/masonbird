import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Shield } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Development",
      description: "Custom website development with no upfront costs",
      price: "0",
      period: "upfront",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      features: [
        "Custom website development",
        "Responsive design",
        "SEO optimization",
        "Performance optimization",
        "1-month free trial",
        "24/7 support"
      ]
    },
    {
      name: "Enterprise",
      description: "Full-scale digital transformation solution",
      price: "Custom",
      period: "project",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      featured: true,
      features: [
        "Everything in Development",
        "AI/ML integration",
        "Custom API development",
        "Database architecture",
        "Cloud infrastructure",
        "Advanced analytics"
      ]
    },
    {
      name: "Maintenance",
      description: "Ongoing support and maintenance",
      price: "499",
      period: "month",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      features: [
        "24/7 monitoring",
        "Security updates",
        "Performance optimization",
        "Content updates",
        "Technical support",
        "Monthly reports"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start with zero upfront costs and scale as you grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative group ${plan.featured ? 'md:-mt-8' : ''}`}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              
              <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                {plan.featured && (
                  <div className="absolute top-0 right-0">
                    <div className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-bl-lg">
                      Popular
                    </div>
                  </div>
                )}

                <div className={`w-12 h-12 mb-8 rounded-lg bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                  {plan.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold text-white">
                      {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                    </span>
                    <span className="text-gray-400 ml-2">/{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold 
                    ${plan.featured 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                    } transition-colors`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}