'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ProgressIndicatorProps {
  chapters: string[];
}

export default function ProgressIndicator({ chapters }: ProgressIndicatorProps) {
  const [activeChapter, setActiveChapter] = useState(0);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight / 2;
          
          chapters.forEach((chapterId, index) => {
            const element = document.getElementById(chapterId);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveChapter(prev => prev !== index ? index : prev);
              }
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Throttled scroll event
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [chapters]);

  const scrollToChapter = (chapterId: string) => {
    const element = document.getElementById(chapterId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {chapters.map((chapterId, index) => (
          <motion.button
            key={chapterId}
            onClick={() => scrollToChapter(chapterId)}
            className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              index === activeChapter
                ? 'bg-blue-600 border-blue-600 scale-125'
                : 'bg-transparent border-gray-400 hover:border-blue-400'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="sr-only">Go to {chapterId}</span>
          </motion.button>
        ))}
      </div>
      
      {/* Chapter Labels */}
      <div className="absolute left-8 top-0 flex flex-col space-y-4">
        {chapters.map((chapterId, index) => (
          <motion.div
            key={`${chapterId}-label`}
            className={`text-sm font-medium transition-all duration-300 ${
              index === activeChapter
                ? 'text-blue-600 opacity-100'
                : 'text-gray-400 opacity-0 hover:opacity-70'
            }`}
            animate={{
              opacity: index === activeChapter ? 1 : 0,
              x: index === activeChapter ? 0 : -20
            }}
          >
            {chapterId === 'hero' ? 'Introduction' : 
             chapterId === 'chapter-1' ? 'First Spark (2019)' :
             chapterId === 'chapter-2' ? 'Engineering (2020-21)' :
             chapterId === 'chapter-3' ? 'Mobile & Open Source (2022-23)' :
             chapterId === 'chapter-4' ? 'Professional Dev (2023-24)' :
             chapterId === 'chapter-5' ? 'Data Science (2024-25)' :
             chapterId === 'chapter-6' ? 'Future Vision' :
             chapterId}
          </motion.div>
        ))}
      </div>
    </div>
  );
}