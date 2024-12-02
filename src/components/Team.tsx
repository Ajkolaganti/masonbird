import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
      bio: "Visionary leader with 15+ years in tech innovation",
      gradient: "from-blue-500 to-cyan-500",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Lead Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
      bio: "Award-winning UI/UX designer specializing in future-forward interfaces",
      gradient: "from-purple-500 to-pink-500",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Rodriguez",
      role: "Tech Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      bio: "Full-stack expert with a passion for cutting-edge tech",
      gradient: "from-orange-500 to-red-500",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Emily Zhang",
      role: "AI Specialist",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      bio: "ML researcher turned entrepreneur, pushing AI boundaries",
      gradient: "from-green-500 to-emerald-500",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#"
      }
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
      y: 0
    }
  };

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-black to-purple-950 relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full"
            style={{ top: `${i * 25}%` }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Innovators, creators, and problem solvers working at the intersection of design and technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="relative group"
            >
              {/* Gradient background effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className={`text-sm bg-clip-text text-transparent bg-gradient-to-r ${member.gradient} font-medium mb-3`}>
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">{member.bio}</p>

                  <div className="flex gap-4">
                    {Object.entries(member.social).map(([platform, link]) => (
                      <motion.a
                        key={platform}
                        href={link}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                        {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                        {platform === 'github' && <Github className="w-5 h-5" />}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}