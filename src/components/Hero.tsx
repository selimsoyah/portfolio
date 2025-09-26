'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const name = "Salim Soyah";
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('chapter-1');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.div 
            className="flex justify-center mb-4 flex-wrap"
            variants={letterVariants}
          >
            <span className="text-4xl sm:text-6xl md:text-8xl font-bold animate-gpu">
              {name}
            </span>
          </motion.div>
          
          <motion.h2
            variants={letterVariants}
            className="text-2xl md:text-4xl font-light mb-6 text-gray-300"
          >
            From First Code to Data Science
          </motion.h2>
          
          <motion.p
            variants={letterVariants}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Welcome to my journey. A story of curiosity, learning, and the endless pursuit of turning data into insights.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <button
            onClick={scrollToNextSection}
            className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm uppercase tracking-widest">Scroll to begin</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}