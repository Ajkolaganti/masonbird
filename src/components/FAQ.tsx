import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the zero upfront cost model work?",
      answer: "We believe in our ability to deliver value. You only start paying once your project is live and generating value for your business. We offer a 1-month free trial period to ensure complete satisfaction.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern web technologies including React, Node.js, TypeScript, and various AI/ML frameworks. Our tech stack is constantly evolving to include the latest innovations in web development.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity, but most projects are completed within 4-12 weeks. We follow an agile methodology with weekly updates and continuous deployment.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer comprehensive maintenance plans that include 24/7 monitoring, regular updates, security patches, and technical support to ensure your application runs smoothly.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      question: "Can you help with existing projects?",
      answer: "Absolutely! We can take over existing projects, perform code audits, implement new features, or help with optimization and modernization of your current application.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-purple-950 to-black relative overflow-hidden">
      {/* Animated circuit board background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="circuit-pattern"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 10h30v30h-30z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle cx="10" cy="10" r="2" fill="currentColor" />
            <circle cx="40" cy="40" r="2" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our services and process
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${faq.gradient} rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />

              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-purple-400" />
                    ) : (
                      <Plus className="w-5 h-5 text-purple-400" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}