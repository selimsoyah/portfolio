'use client';

import { motion } from 'framer-motion';
import { Brain, BarChart3, Database, TrendingUp, Target, ExternalLink } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter5() {
  return (
    <Chapter
      id="chapter-5"
      title="Chapter 5"
      subtitle="The Data Science Transition"
      backgroundColor="bg-gradient-to-br from-emerald-50 to-teal-100"
      textColor="text-gray-900"
    >
      <div className="space-y-16">
        {/* Data Science Journey Story */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Brain className="w-10 h-10 text-emerald-600" />
            <h3 className="text-3xl font-bold text-gray-800">Discovering the Power of Data</h3>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-left">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              After mastering full-stack development, I discovered that the most fascinating 
              stories weren&apos;t just told through user interfaces—they were hidden in data. 
              This realization sparked my transition into data science and machine learning.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              The journey led me to build <strong>Nexus-Analytics</strong>, a comprehensive 
              data analytics platform that would become the culmination of my data science learning. 
              This project challenged me to master statistical analysis, machine learning algorithms, 
              and the art of turning raw data into actionable insights.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-800 mb-3">🧠 Data Science Transformation</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-emerald-800">Data Engineering</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-emerald-800">Statistical Analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-emerald-800">Machine Learning</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nexus-Analytics Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-blue-200">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-800">Nexus-Analytics</h4>
                  <p className="text-emerald-600 font-medium text-lg">Advanced Data Analytics Platform</p>
                </div>
              </div>
              <a 
               href="https://github.com/selimsoyah/Nexus-Analytics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-emerald-600 hover:text-emerald-800 transition-colors font-medium"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  A sophisticated analytics platform that transforms raw data into meaningful 
                  insights through advanced statistical analysis, machine learning models, 
                  and interactive visualizations. Built to handle complex datasets and 
                  provide real-time analytics capabilities.
                </p>
                
                <div className="space-y-4">
                  <h5 className="font-semibold text-emerald-800 text-lg">🎯 Core Capabilities</h5>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Real-time data processing and ETL pipelines</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Advanced statistical analysis and hypothesis testing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Machine learning model training and deployment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Interactive dashboards and data visualization</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                  <h5 className="font-semibold text-blue-800 mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    Technology Stack
                  </h5>
                  <div className="grid grid-cols-2 gap-3">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Python</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Pandas</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Scikit-learn</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">TensorFlow</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Flask</span>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                  <h5 className="font-semibold text-blue-800 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Impact Metrics
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Data Processing Speed</span>
                      <span className="text-sm font-medium text-green-600">10x Faster</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Prediction Accuracy</span>
                      <span className="text-sm font-medium text-blue-600">94.2%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Data Visualization</span>
                      <span className="text-sm font-medium text-purple-600">Real-time</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-lg">
              <p className="text-lg italic">
                💡 &ldquo;Nexus-Analytics taught me that data science isn&apos;t just about algorithms—
                it&apos;s about translating complex patterns into stories that drive business decisions 
                and create real-world impact.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills Development Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">Data Science Mastery Journey</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: 'Data Engineering',
                skills: ['Python & Pandas', 'SQL & PostgreSQL', 'ETL Pipelines', 'Data Cleaning'],
                color: 'emerald'
              },
              {
                icon: BarChart3,
                title: 'Analytics & Visualization',
                skills: ['Statistical Analysis', 'Matplotlib & Seaborn', 'Plotly & Dash', 'Business Intelligence'],
                color: 'blue'
              },
              {
                icon: Brain,
                title: 'Machine Learning',
                skills: ['Scikit-learn', 'TensorFlow & PyTorch', 'Deep Learning', 'Model Deployment'],
                color: 'purple'
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-${area.color}-600 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-center text-gray-800">{area.title}</h4>
                <div className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className={`bg-${area.color}-50 px-3 py-2 rounded-lg text-sm text-${area.color}-800 text-center`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + skillIndex * 0.1 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transition Complete */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-8 py-4 rounded-full border border-emerald-200">
            <Target className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-800 font-medium text-lg">Data Science Mastery Achieved</span>
            <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </Chapter>
  );
}