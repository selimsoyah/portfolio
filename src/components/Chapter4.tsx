'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter4() {
  return (
    <Chapter
      id="chapter-4"
      title="Chapter 4"
      subtitle="Professional Development & Innovation"
      backgroundColor="bg-gradient-to-br from-indigo-50 to-purple-100"
      textColor="text-gray-900"
    >
      <div className="space-y-16">
        {/* Professional Journey Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Entering the Professional World</h3>
          <div className="bg-white p-8 rounded-xl shadow-lg text-left">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              This chapter marks my transition into professional software development. Armed with 
              the foundation from my university projects and open source contributions, I was ready 
              to tackle real-world challenges and build solutions that would impact businesses and users.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              During this period, I developed two significant projects that demonstrated my growth 
              as a developer: <strong>LangBridge</strong>, a comprehensive language learning platform, 
              and <strong>Dar Sellami</strong>, a modern e-commerce solution. These projects pushed 
              me to master full-stack development and understand the complexities of building scalable applications.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-800 mb-3">🎯 Professional Focus Areas</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">FS</span>
                  </div>
                  <p className="text-sm font-medium text-indigo-800">Full-Stack Development</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">UX</span>
                  </div>
                  <p className="text-sm font-medium text-indigo-800">User Experience</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold">BS</span>
                  </div>
                  <p className="text-sm font-medium text-indigo-800">Business Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Professional Projects Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">Professional Projects</h3>
          
          {/* LangBridge Project */}
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-12 shadow-xl border border-blue-200"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">L</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">LangBridge</h4>
                    <p className="text-blue-600 font-medium">Language Learning Platform</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A comprehensive language learning platform designed to bridge communication gaps 
                  through interactive lessons, real-time progress tracking, and community features. 
                  Built with modern web technologies to deliver a seamless learning experience.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">MongoDB</span>
                  <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">Express</span>
                </div>
                
                <a 
                  href="https://github.com/SalimSalimov/LangBridge" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  <span>View on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <h5 className="font-semibold text-blue-800 mb-4">🎯 Key Features</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Interactive lesson modules</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Real-time progress tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Community discussion forums</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Adaptive learning algorithms</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Dar Sellami Project */}
          <motion.div
            className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 shadow-xl border border-purple-200"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
                <h5 className="font-semibold text-purple-800 mb-4">💼 Business Impact</h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Performance</span>
                    <span className="text-sm font-medium text-green-600">99.9% Uptime</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">User Experience</span>
                    <span className="text-sm font-medium text-blue-600">Responsive Design</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Scalability</span>
                    <span className="text-sm font-medium text-purple-600">Cloud Ready</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">Dar Sellami</h4>
                    <p className="text-purple-600 font-medium">E-commerce Platform</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  A modern e-commerce solution built for a real estate business, featuring 
                  property listings, client management, and transaction processing. This project 
                  showcased my ability to build business-critical applications with complex requirements.
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">Next.js</span>
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">TypeScript</span>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">PostgreSQL</span>
                  <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">Stripe API</span>
                </div>
                
                <a 
                  href="https://github.com/SalimSalimov/DarSellami" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors font-medium"
                >
                  <span>View on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Professional Growth Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-2xl shadow-xl text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Professional Milestone Achieved</h3>
          <p className="text-indigo-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Through LangBridge and Dar Sellami, I demonstrated my evolution from a curious beginner 
            to a professional developer capable of building complex, real-world applications that 
            serve actual business needs and user requirements.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">Full-Stack Mastery</h4>
              <p className="text-indigo-100 text-sm">Complete application architecture</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">Business Focus</h4>
              <p className="text-indigo-100 text-sm">Real-world problem solving</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">Professional Quality</h4>
              <p className="text-indigo-100 text-sm">Production-ready applications</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Chapter>
  );
}