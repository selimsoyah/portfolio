'use client';

import { motion } from 'framer-motion';
import { BarChart3, Brain, TrendingUp, Database } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter3() {
  const reactNativeSnippet = `// Automate - Connecting Mechanics and Car Owners
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { connectToDatabase, findNearbyMechanics } from './services/database';

const AutomateApp = () => {
  const [mechanics, setMechanics] = useState([]);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    // Connect car owners with nearby mechanics
    const loadMechanics = async () => {
      const nearbyMechanics = await findNearbyMechanics(userLocation);
      setMechanics(nearbyMechanics);
    };
    
    if (userLocation) {
      loadMechanics();
    }
  }, [userLocation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find Mechanics Near You</Text>
      <FlatList
        data={mechanics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MechanicCard mechanic={item} />
        )}
      />
    </View>
  );
};`;

  return (
    <Chapter
      id="chapter-3"
      title="Chapter 3"
      subtitle="Expanding Skills into Mobile & Open Source"
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
            During 2022-2023, I expanded my horizons into mobile development and 
            open-source contributions. This period taught me the importance of 
            building solutions that reach users anywhere, anytime.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
            I developed <strong>Automate</strong>, a mobile app connecting mechanics and car owners 
            using React Native and SQL. Simultaneously, I contributed to <strong>React-Bootstrap</strong>, 
            enhancing the open-source UI library with TypeScript improvements.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <motion.div
              className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Database className="w-5 h-5 text-blue-600" />
              <div>
                <div className="font-semibold text-sm">React Native</div>
                <div className="text-xs text-gray-600">Mobile Development</div>
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
                <div className="text-xs text-gray-600">TypeScript & UI Libraries</div>
              </div>
            </motion.div>
          </div>

          <div className="bg-emerald-100 p-4 rounded-lg mt-6">
            <h4 className="font-semibold text-emerald-800 mb-2">Key Learning Moment</h4>
            <p className="text-emerald-700 text-sm">
              &ldquo;Contributing to React-Bootstrap taught me the importance of code quality 
              and collaboration in large-scale projects.&rdquo;
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
                        <span className="text-gray-400 text-sm ml-4">AutomateApp.tsx</span>
          </div>
          
          <motion.pre
            className="text-sm leading-relaxed overflow-x-auto animate-gpu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <code>
              {reactNativeSnippet.split('\n').map((line: string, index: number) => (
                <div
                  key={index}
                  className="block"
                >
                  <span className="text-gray-500 select-none mr-4">{String(index + 1).padStart(2, ' ')}</span>
                  <span className={
                    line.includes('import') || line.includes('from') ? 'text-purple-400' :
                    line.includes('//') ? 'text-gray-500' :
                    line.includes('const') || line.includes('useState') || line.includes('useEffect') ? 'text-blue-400' :
                    line.includes("'") || line.includes('"') ? 'text-green-400' :
                    'text-gray-300'
                  }>
                    {line}
                  </span>
                </div>
              ))}
            </code>
          </motion.pre>
        </div>
      </motion.div>

      {/* Project Highlights */}
      <motion.div
        className="mt-16 grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <Database className="w-12 h-12 text-emerald-600 mb-4" />
          <h4 className="font-semibold text-gray-800 mb-2">📱 Automate Mobile App</h4>
          <p className="text-sm text-gray-600 mb-3">
            React Native application connecting mechanics and car owners with real-time location services and SQL database integration.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">React Native</span>
            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">SQL</span>
            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Mobile Development</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <BarChart3 className="w-12 h-12 text-emerald-600 mb-4" />
          <h4 className="font-semibold text-gray-800 mb-2">🔧 React-Bootstrap Contributions</h4>
          <p className="text-sm text-gray-600 mb-3">
            Open-source contributions to the popular UI library, implementing code enhancements and bug fixes using TypeScript.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">TypeScript</span>
            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">Open Source</span>
            <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded">UI Libraries</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <div className="inline-flex items-center space-x-2 bg-emerald-100 px-6 py-3 rounded-full">
          <span className="text-emerald-800 font-medium">2022-2023 - Mobile & Open Source Exploration</span>
          <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </Chapter>
  );
}