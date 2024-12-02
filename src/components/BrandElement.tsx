import React from 'react';
import { motion } from 'framer-motion';
import { Bird, Code2 } from 'lucide-react';

export default function BrandElement() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {/* Top left brand element */}
      <motion.div
        className="absolute top-40 -left-20 w-40 h-40 opacity-20"
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Bird className="w-full h-full text-purple-500" />
      </motion.div>

      {/* Bottom right brand element */}
      <motion.div
        className="absolute bottom-40 -right-20 w-40 h-40 opacity-20"
        animate={{
          x: [0, -40, 0],
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code2 className="w-full h-full text-pink-500" />
      </motion.div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.path
          d="M0 100 Q 250 250 500 100 T 1000 100"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          animate={{
            d: [
              "M0 100 Q 250 250 500 100 T 1000 100",
              "M0 150 Q 250 50 500 150 T 1000 150",
              "M0 100 Q 250 250 500 100 T 1000 100",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
} 