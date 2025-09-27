'use client';

import { motion } from 'framer-motion';
import { Code, Lightbulb, BookOpen } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter1() {
  const codeSnippet = `<!DOCTYPE html>
<html>
<head>
    <title>1001 Facts - Interesting Facts</title>
    <style>
        body { font-family: Arial, sans-serif; }
        .fact { margin: 20px; padding: 15px; 
               border-left: 4px solid #007bff; }
    </style>
</head>
<body>
    <h1>Welcome to 1001 Facts!</h1>
    <div class="fact">
        <h3>Did you know?</h3>
        <p>This was my first real website project...</p>
    </div>
</body>
</html>`;

  return (
    <Chapter
      id="chapter-1"
      title="Chapter 1"
      subtitle="Discovering My Passion for Coding"
      backgroundColor="bg-gradient-to-br from-blue-50 to-indigo-100"
      textColor="text-gray-900"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Lightbulb className="w-8 h-8 text-yellow-500" />
            <h3 className="text-2xl font-semibold">First Exposure to Web Development</h3>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-700">
            In 2019, I took my first steps into the world of programming through personal projects. 
            What started as curiosity about how websites work quickly became a passion 
            that would shape my entire career path.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
            My breakthrough project was <strong>1001 Facts</strong> - a personal website presenting 
            interesting facts. Built with HTML, CSS, and JavaScript, it was simple but magical. 
            Seeing my code come to life in a browser sparked something incredible.
          </p>

          <div className="flex items-center space-x-4 mt-8">
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-gray-600">Personal projects ignite passion</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">first_program.py</span>
            </div>
            
            <motion.pre
              className="text-green-400 font-mono text-sm leading-relaxed animate-gpu"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <code>
                {codeSnippet}
              </code>
            </motion.pre>
          </div>
          
          <motion.div
            className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              delay: 1
            }}
          >
            <Code className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="inline-flex items-center space-x-2 bg-blue-100 px-6 py-3 rounded-full">
          <span className="text-blue-800 font-medium">2019 - The Beginning</span>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </Chapter>
  );
}