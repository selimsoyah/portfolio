'use client';

import { motion } from 'framer-motion';
import { BookOpen, Lightbulb } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter1() {
  return (
    <Chapter
      id="chapter-1"
      title="Chapter 1"
      subtitle="The Accidental Discovery"
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
            <h3 className="text-2xl font-semibold">The F12 Moment</h3>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-700">
            It all started by accident. One day, while casually browsing the internet, I pressed 
            the <kbd className="bg-gray-200 px-2 py-1 rounded text-sm font-mono">F12</kbd> key 
            without knowing what it did. Suddenly, a panel full of strange code appeared in front of me.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
            At first, it looked overwhelming, almost like a secret language. But my curiosity got 
            the better of me. I started searching and discovered that what I was seeing was the 
            backbone of every website: <strong>code</strong>.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            That realization amazed me—everything we use daily, from simple pages to complex 
            applications, is built from thousands of lines of code working together in perfect synergy.
          </p>

          <div className="bg-blue-100 p-4 rounded-lg mt-6">
            <h4 className="font-semibold text-blue-800 mb-2">💡 The Eureka Moment</h4>
            <p className="text-blue-700 text-sm italic">
              &ldquo;As someone who always loved facts and storytelling, I wanted to create 
              something of my own. That&apos;s when the idea for 1001 Facts was born.&rdquo;
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 shadow-lg border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-semibold">1001 Facts - My First Project</span>
              </div>
              <a 
                href="https://github.com/SalimSalimov/1001Facts" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
              >
                View on GitHub →
              </a>
            </div>
            
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              A web application dedicated to sharing fascinating facts from around the world. 
              Built with pure HTML, CSS, and JavaScript - my first step into web development 
              after that fateful F12 discovery.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-medium">HTML</span>
              <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium">CSS</span>
              <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-xs font-medium">JavaScript</span>
              <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-medium">First Project</span>
            </div>
          </div>
          
          <motion.div
            className="absolute -top-4 -right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg"
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
            <Lightbulb className="w-6 h-6" />
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
          <span className="text-blue-800 font-medium">Year 1 of Studies</span>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </Chapter>
  );
}