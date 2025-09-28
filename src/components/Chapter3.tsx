'use client';

import { motion } from 'framer-motion';
import { BarChart3, Brain, TrendingUp, Database } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter3() {
  return (
    <Chapter
      id="chapter-3"
      title="Chapter 3"
      subtitle="Mobile & Open Source Contributions"
      backgroundColor="bg-gradient-to-br from-emerald-50 to-teal-100"
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
            <Brain className="w-8 h-8 text-emerald-600" />
            <h3 className="text-2xl font-semibold">Mobile Development & Open Source</h3>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-700">
            As my skills grew, I ventured into mobile development and discovered 
            the power of open source collaboration. This chapter represents my 
            expansion into different platforms and my first contributions to the developer community.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
            Building <strong>Automate</strong>, my mobile application, taught me the intricacies 
            of mobile user experience and cross-platform development. Meanwhile, contributing 
            to <strong>React-Bootstrap</strong> showed me how global collaboration shapes the tools we all use.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            This period was about understanding that programming isn't just about building 
            applications—it's about contributing to an ecosystem that benefits everyone.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <motion.div
              className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Database className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-semibold text-sm">Mobile Development</div>
                <div className="text-xs text-gray-600">Cross-Platform Apps</div>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <BarChart3 className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="font-semibold text-sm">Open Source</div>
                <div className="text-xs text-gray-600">Community Contributions</div>
              </div>
            </motion.div>
          </div>

          <div className="bg-emerald-100 p-4 rounded-lg mt-6">
            <h4 className="font-semibold text-emerald-800 mb-2">💡 Key Insight</h4>
            <p className="text-emerald-700 text-sm">
              &ldquo;Contributing to React-Bootstrap taught me that great software is built 
              by communities, not just individuals. Every pull request made me a better developer.&rdquo;
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Mobile App Mockup */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-6 max-w-sm mx-auto">
            <div className="bg-black rounded-2xl p-1">
              <div className="bg-white rounded-xl overflow-hidden">
                {/* Phone Status Bar */}
                <div className="bg-gray-900 text-white text-xs px-4 py-2 flex justify-between items-center">
                  <span>9:41</span>
                  <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* App Header */}
                <div className="bg-emerald-600 text-white p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-lg">Automate</h4>
                    <a 
                      href="https://github.com/SalimSalimov/Automate" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-emerald-200 hover:text-white transition-colors text-xs"
                    >
                      GitHub →
                    </a>
                  </div>
                  <p className="text-emerald-100 text-sm mt-1">Task Automation Made Simple</p>
                </div>
                
                {/* App Content */}
                <div className="p-4 h-64 bg-gray-50">
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Database className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-800 text-sm">Daily Backup</h5>
                          <p className="text-xs text-gray-600">Automated file synchronization</p>
                        </div>
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Brain className="w-5 h-5 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-medium text-gray-800 text-sm">Smart Reminders</h5>
                          <p className="text-xs text-gray-600">AI-powered notifications</p>
                        </div>
                        <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute -top-4 -right-4 bg-emerald-600 text-white p-3 rounded-full shadow-lg"
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              delay: 2
            }}
          >
            <BarChart3 className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* React-Bootstrap Contribution Showcase */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-8 shadow-xl max-w-4xl mx-auto border border-blue-200">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-gray-800">React-Bootstrap</h4>
                <p className="text-blue-600 text-sm">Open Source Contribution</p>
              </div>
            </div>
            <a 
              href="https://github.com/react-bootstrap/react-bootstrap" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors font-medium"
            >
              View Repository →
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-blue-100">
              <h5 className="font-semibold text-blue-800 mb-4 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                My Contributions
              </h5>
              <ul className="text-sm text-gray-700 space-y-3">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Improved component accessibility features</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Enhanced TypeScript definitions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Fixed component rendering issues</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Updated documentation examples</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-blue-100">
              <h5 className="font-semibold text-blue-800 mb-4 flex items-center">
                <Brain className="w-5 h-5 mr-2" />
                Impact & Learning
              </h5>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Community Impact</span>
                  <span className="text-sm font-medium text-blue-600">Global Scale</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Code Review Process</span>
                  <span className="text-sm font-medium text-green-600">Mastered</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Open Source Etiquette</span>
                  <span className="text-sm font-medium text-purple-600">Learned</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-lg">
            <p className="text-sm italic">
              🌟 "Contributing to React-Bootstrap taught me that open source is about more than code—
              it's about building tools that empower millions of developers worldwide."
            </p>
          </div>
        </div>
      </motion.div>

      {/* Skills Gained */}
      <motion.div
        className="mt-16 grid md:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        {[
          { icon: Database, title: 'Mobile Development', desc: 'React Native, Flutter, Native APIs' },
          { icon: BarChart3, title: 'Open Source', desc: 'Git, GitHub, Code Review' },
          { icon: Brain, title: 'Community Building', desc: 'Documentation, Collaboration' }
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <skill.icon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h4 className="font-semibold text-gray-800 mb-2">{skill.title}</h4>
            <p className="text-sm text-gray-600">{skill.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-blue-100 px-6 py-3 rounded-full border border-emerald-200">
          <span className="text-emerald-800 font-medium">Mobile & Open Source Mastery</span>
          <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </Chapter>
  );
}