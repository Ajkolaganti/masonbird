import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedLogo() {
  return (
    <motion.div 
      className="relative w-12 h-12"
      whileHover={{ scale: 1.1 }}
    >
      {/* Main circle */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Inner geometric shapes */}
      <motion.div
        className="absolute inset-2 bg-black rounded-full flex items-center justify-center"
      >
        {/* M letter stylized */}
        <motion.svg
          viewBox="0 0 24 24"
          className="w-6 h-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.path
            d="M 4 18 L 4 6 L 8 12 L 12 6 L 16 12 L 20 6 L 20 18"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
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
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-purple-500"
          style={{
            top: '50%',
            left: '50%',
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
            x: [0, Math.cos(i * (2 * Math.PI / 3)) * 20],
            y: [0, Math.sin(i * (2 * Math.PI / 3)) * 20],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear"
          }}
        />
      ))}

      {/* Glowing effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
} 