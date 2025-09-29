'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode, useMemo } from 'react';

interface ChapterProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  delay?: number;
}

export default function Chapter({
  id,
  title,
  subtitle,
  children,
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  delay = 0
}: ChapterProps) {
  const { ref, inView } = useInView({
    threshold: 0.1, // Lower threshold for earlier trigger
    triggerOnce: true,
    rootMargin: '100px 0px' // Start animation even earlier
  });

  // Memoize animation variants for better performance
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
        staggerChildren: 0.05,
        ease: "easeOut" as const
      }
    }
  }), [delay]);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4,
        ease: "easeOut" as const
      }
    }
  }), []);

  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center ${backgroundColor} ${textColor} relative overflow-hidden`}
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto px-6 py-20 animate-gpu"
      >
        <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg sm:text-xl md:text-2xl opacity-80">
              {subtitle}
            </p>
          )}
        </motion.div>
        
        <motion.div variants={itemVariants}>
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
}