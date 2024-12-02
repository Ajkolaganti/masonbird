import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Sparkles } from 'lucide-react';

export default function Hero() {
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Split text into letters for animation
  const AnimatedText = ({ text, className }: { text: string, className: string }) => (
    <div className={`flex overflow-hidden ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: index * 0.05 }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Large Background Logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-5"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Main circle */}
          <div className="relative w-[800px] h-[800px]">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Inner geometric shapes */}
            <motion.div
              className="absolute inset-[10%] bg-black rounded-full flex items-center justify-center"
            >
              {/* M letter stylized */}
              <motion.svg
                viewBox="0 0 24 24"
                className="w-96 h-96"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.path
                  d="M 4 18 L 4 6 L 8 12 L 12 6 L 16 12 L 20 6 L 20 18"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9333EA" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
              </motion.svg>
            </motion.div>

            {/* Orbiting dots */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 rounded-full bg-purple-500/30"
                style={{
                  top: '50%',
                  left: '50%',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                  x: [0, Math.cos(i * (2 * Math.PI / 8)) * 400],
                  y: [0, Math.sin(i * (2 * Math.PI / 8)) * 400],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Existing animated gradient overlay */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-purple-900 via-transparent to-transparent" />
        
        {/* Existing animated lines */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[2px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              style={{
                top: `${10 + i * 10}%`,
                left: '-100%',
                right: '-100%',
              }}
              animate={{
                x: ['0%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 8,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Existing animated dots */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main heading with letter animation */}
          <div className="mb-8">
            <AnimatedText 
              text="TRANSFORM YOUR" 
              className="text-4xl md:text-7xl font-bold text-white mb-2"
            />
            <AnimatedText 
              text="BUSINESS DIGITALLY" 
              className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
            />
          </div>

          {/* Subtitle with fade in */}
          <motion.p
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            Join an elite network of businesses, connect with real customers, and propel your digital presence forward with custom web development.
          </motion.p>

          {/* CTA buttons with hover effect */}
          <motion.div 
            className="flex flex-col md:flex-row gap-6"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#4c1d95" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-purple-700 rounded-full text-lg font-semibold text-white transition-colors duration-300"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-700 rounded-full text-lg font-semibold text-white transition-colors duration-300"
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Stats section with counter animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20"
          >
            {[
              { number: "100+", label: "WEBSITES DELIVERED" },
              { number: "50M+", label: "LINES OF CODE" },
              { number: "100%", label: "CLIENT SATISFACTION" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <motion.h3
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.2, type: "spring" }}
                  className="text-5xl md:text-6xl font-bold text-white mb-2"
                >
                  {stat.number}
                </motion.h3>
                <p className="text-sm text-gray-400 tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}