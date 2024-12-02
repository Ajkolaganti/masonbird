import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Rocket, Sparkles, CheckCircle2, Clock, Shield, Cpu, Zap, Award } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const newsItems = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Zero Upfront Cost",
      description: "Start your project with no initial investment",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "1-Month Free Trial",
      description: "Test our services risk-free for 30 days",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock dedicated technical assistance",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence integration",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "100% Satisfaction",
      description: "Guaranteed results or your money back",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Expert Development",
      description: "Industry-leading web development team",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % newsItems.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#1a1a1a]" />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)`,
          backgroundSize: '96px 96px'
        }} />
      </div>

      <div className="absolute inset-0 opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute -inset-[100%] opacity-30"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${50 + i * 30}% ${50 + i * 20}%, 
                  rgba(255, 255, 255, 0.03),
                  rgba(255, 255, 255, 0.02),
                  transparent 60%)`
              }}
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: ['-20px', '20px'],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              y: {
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
              opacity: {
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              },
            }}
          >
            <div className={`
              text-xs font-mono backdrop-blur-sm rounded px-2 py-1
              ${i % 4 === 0 ? 'text-white/20 border border-white/10' : 
                i % 4 === 1 ? 'text-white/20 border border-white/10' : 
                i % 4 === 2 ? 'text-white/20 border border-white/10' :
                'text-white/20 border border-white/10'}
            `}>
              {i % 5 === 0 && '<React />'}
              {i % 5 === 1 && '{ state }'}
              {i % 5 === 2 && '// Code'}
              {i % 5 === 3 && 'function()'}
              {i % 5 === 4 && '[Array]'}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"
            style={{
              top: `${(i + 1) * 20}%`,
            }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 0.1, 0],
            }}
            transition={{
              x: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
              opacity: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.5, 1],
              },
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-16 relative max-w-4xl mx-auto">
            <div className="h-24 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="h-full flex items-center justify-center px-6"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${newsItems[currentSlide].gradient}`}>
                      {newsItems[currentSlide].icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white">
                        {newsItems[currentSlide].title}
                      </h3>
                      <p className="text-gray-300">
                        {newsItems[currentSlide].description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {newsItems.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index 
                      ? 'bg-purple-500 w-6' 
                      : 'bg-white/20'
                  }`}
                  animate={{ width: currentSlide === index ? 24 : 8 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>

          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
            transition={{ duration: 10, repeat: Infinity }}
          >
            Future of Web
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Creating next-generation digital experiences with cutting-edge technology and zero upfront costs.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <span className="relative z-10">Start Free Trial</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-white/50 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              View Portfolio
            </motion.button>
          </div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg", name: "React" },
              { icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg", name: "TypeScript" },
              { icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg", name: "Tailwind" },
              { icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", name: "Node.js" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2"
                whileHover={{ y: -5 }}
              >
                <img src={tech.icon} alt={tech.name} className="h-12 w-12" />
                <p className="text-sm text-gray-400">{tech.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}