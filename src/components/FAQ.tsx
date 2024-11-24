import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How does the free development offer work?",
      answer: "We develop your website at no upfront cost. You only pay for the ongoing support and maintenance after the 1-month free trial period."
    },
    {
      question: "What's included in the monthly support?",
      answer: "Our monthly support includes 24/7 technical support, security monitoring, regular updates, performance optimization, and content updates."
    },
    {
      question: "How long does it take to build a website?",
      answer: "Typical development time ranges from 2-8 weeks, depending on the project complexity and requirements."
    },
    {
      question: "Can I cancel the support service?",
      answer: "Yes, you can cancel the monthly support service at any time with 30 days notice. There are no long-term contracts."
    },
    {
      question: "Do you provide hosting services?",
      answer: "Yes, hosting is included in our monthly support package, ensuring optimal performance and security."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and pricing
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <span className="font-semibold text-left">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-purple-600" />
                ) : (
                  <Plus className="w-5 h-5 text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 bg-gray-50 rounded-b-lg mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}