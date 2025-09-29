'use client';

import { motion } from 'framer-motion';
import { Globe, Palette, Rocket, Code2 } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter2() {
  return (
    <Chapter
      id="chapter-2"
      title="Chapter 2"
      subtitle="Building the Foundation"
      backgroundColor="bg-gradient-to-br from-purple-50 to-pink-100"
      textColor="text-gray-900"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.25, 0, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 animate-gpu"
        >
          <div className="flex items-center space-x-3 mb-6">
            <Globe className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-semibold">University & First Real Projects</h3>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-700">
            Entering university marked the beginning of my formal journey into computer science. 
            It was here that I transformed my curiosity into structured learning, diving deep 
            into programming fundamentals and software development principles.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
            During this time, I built two significant projects that would shape my understanding 
            of full-stack development: <strong>Car Trac</strong>, a comprehensive car management 
            system, and <strong>Click EZ</strong>, an innovative advertising platform.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            These projects taught me the importance of user experience, database design, 
            and building scalable web applications that solve real-world problems.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
              <Code2 className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-semibold text-sm">Full-Stack Dev</div>
                <div className="text-xs text-gray-600">Frontend & Backend</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
              <Palette className="w-5 h-5 text-pink-600" />
              <div>
                <div className="font-semibold text-sm">Database Design</div>
                <div className="text-xs text-gray-600">Data Architecture</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.25, 0, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative animate-gpu"
        >
          {/* Car Trac Project Showcase */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg shadow-xl overflow-hidden border border-blue-200">
            <div className="bg-blue-600 px-6 py-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span className="font-semibold">Car Trac</span>
                </div>
                <a 
                  href="https://github.com/SalimSalimov/CarTrac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors text-sm"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Car Management System</h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                A comprehensive web application for managing car dealerships, featuring 
                inventory management, customer records, and sales tracking. Built during 
                my university years to understand full-stack development.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-xs font-medium">PHP</span>
                <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-xs font-medium">MySQL</span>
                <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-medium">HTML/CSS</span>
                <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-xs font-medium">JavaScript</span>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-500 mb-2">Key Features:</div>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Vehicle inventory management</li>
                  <li>• Customer database system</li>
                  <li>• Sales tracking & reporting</li>
                  <li>• Admin dashboard interface</li>
                </ul>
              </div>
            </div>
          </div>
          
          <motion.div
            className="absolute -bottom-4 -right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg animate-gpu"
            animate={{ 
              rotate: [0, -5, 5, 0],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              delay: 1.5,
              ease: "easeInOut"
            }}
          >
            <Rocket className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Click EZ Project Showcase */}
      <motion.div
        className="mt-16 animate-gpu"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg p-8 shadow-xl max-w-4xl mx-auto border border-purple-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <Palette className="w-6 h-6 text-purple-600" />
              <h4 className="text-2xl font-semibold text-gray-800">Click EZ</h4>
            </div>
            <a 
              href="https://github.com/SalimSalimov/ClickEZ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 transition-colors font-medium"
            >
              View on GitHub →
            </a>
          </div>
          
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            An innovative advertising platform that simplifies the process of creating 
            and managing digital advertisements. Click EZ was my exploration into 
            user-centered design and business applications.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 border border-purple-100">
              <h5 className="font-semibold text-purple-800 mb-3">🎯 Core Features</h5>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Intuitive ad creation interface</li>
                <li>• Campaign management system</li>
                <li>• Performance analytics dashboard</li>
                <li>• User-friendly design tools</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-purple-100">
              <h5 className="font-semibold text-purple-800 mb-3">💻 Technology Stack</h5>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">React</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Node.js</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs">Express</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">MongoDB</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg">
            <p className="text-sm italic">
              💡 &ldquo;Click EZ taught me the importance of user experience design and how 
              technology can simplify complex business processes.&rdquo;
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 text-center animate-gpu"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.25, 0, 1] }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full border border-purple-200">
          <span className="text-purple-800 font-medium">University Foundation Complete</span>
          <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </Chapter>
  );
}