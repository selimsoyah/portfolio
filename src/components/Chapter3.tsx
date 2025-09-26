'use client';

import { motion } from 'framer-motion';
import { BarChart3, Brain, TrendingUp, Database } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter3() {
  const pythonSnippet = `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Loading my first dataset
df = pd.read_csv('data.csv')

# The moment I realized data tells stories
plt.figure(figsize=(10,6))
sns.scatterplot(data=df, x='feature1', y='target')
plt.title('My First Data Visualization')
plt.show()

# This was the beginning of everything...`;

  return (
    <Chapter
      id="chapter-3"
      title="Chapter 3"
      subtitle="The Data Awakening"
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
            <h3 className="text-2xl font-semibold">Discovering Patterns</h3>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-700">
            The transition from web development to data science wasn&apos;t planned - 
            it was a natural evolution. I discovered that behind every great 
            application lies great data, and I wanted to understand that language.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
            My first pandas DataFrame felt like magic. Suddenly, I could ask 
            questions of data and get answers. Each visualization revealed 
            stories hidden in numbers.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <motion.div
              className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Database className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-semibold text-sm">Python & Pandas</div>
                <div className="text-xs text-gray-600">Data Manipulation</div>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <BarChart3 className="w-5 h-5 text-emerald-600" />
              <div>
                <div className="font-semibold text-sm">Visualization</div>
                <div className="text-xs text-gray-600">Matplotlib & Seaborn</div>
              </div>
            </motion.div>
          </div>

          <div className="bg-emerald-100 p-4 rounded-lg mt-6">
            <h4 className="font-semibold text-emerald-800 mb-2">Key Learning Moment</h4>
            <p className="text-emerald-700 text-sm">
              &ldquo;The day I created my first predictive model and saw it actually work - 
              that&apos;s when I knew I found my calling.&rdquo;
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Data Visualization Mockup */}
          <div className="bg-white rounded-lg shadow-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-gray-800">Sales Prediction Model</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-600">Active</span>
              </div>
            </div>
            
            {/* Simulated Chart */}
            <div className="h-48 relative bg-gray-50 rounded flex items-end justify-center p-4 space-x-2">
              {[65, 78, 82, 95, 88, 92, 96].map((height, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t"
                  style={{ width: '20px' }}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                />
              ))}
            </div>
            
            <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
              <span>Accuracy: 94.2%</span>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-green-600">+12% improvement</span>
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

      {/* Code Preview */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <div className="bg-gray-900 rounded-lg p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 text-sm ml-4">first_analysis.py</span>
          </div>
          
          <motion.pre
            className="text-sm leading-relaxed overflow-x-auto animate-gpu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <code>
              {pythonSnippet.split('\n').map((line, index) => (
                <div
                  key={index}
                  className="block"
                >
                  <span className="text-gray-500 select-none mr-4">{String(index + 1).padStart(2, ' ')}</span>
                  <span className={
                    line.includes('import') ? 'text-purple-400' :
                    line.includes('#') ? 'text-gray-500' :
                    line.includes('=') ? 'text-blue-400' :
                    line.includes('plt.') || line.includes('sns.') ? 'text-yellow-400' :
                    'text-green-400'
                  }>
                    {line}
                  </span>
                </div>
              ))}
            </code>
          </motion.pre>
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
          { icon: Database, title: 'Data Processing', desc: 'Pandas, NumPy, SQL' },
          { icon: BarChart3, title: 'Visualization', desc: 'Matplotlib, Seaborn, Plotly' },
          { icon: Brain, title: 'Machine Learning', desc: 'Scikit-learn, TensorFlow' }
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
        <div className="inline-flex items-center space-x-2 bg-emerald-100 px-6 py-3 rounded-full">
          <span className="text-emerald-800 font-medium">Data Science Journey Begins</span>
          <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </Chapter>
  );
}