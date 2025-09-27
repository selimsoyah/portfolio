'use client';

import { motion } from 'framer-motion';
import { Globe, Palette, Rocket, Code2 } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter2() {
  const pythonSnippet = `# Car Trac Management System - IoT Traffic Solution
import RPi.GPIO as GPIO
from gps import *
import json
import requests

class CarTracSystem:
    def __init__(self):
        self.gps_session = gps(mode=WATCH_ENABLE|WATCH_NEWSTYLE)
        self.traffic_data = []
    
    def collect_traffic_data(self):
        # Collect real-time traffic data using Raspberry Pi
        report = self.gps_session.next()
        if report['class'] == 'TPV':
            traffic_point = {
                'lat': report.lat,
                'lon': report.lon,
                'speed': report.speed,
                'timestamp': report.time
            }
            return traffic_point
    
    def minimize_traffic_jams(self):
        # Algorithm to reduce traffic congestion
        optimized_routes = self.analyze_traffic_patterns()
        return optimized_routes`;

  return (
    <Chapter
      id="chapter-2"
      title="Chapter 2"
      subtitle="Building Foundations in Engineering"
      backgroundColor="bg-gradient-to-br from-purple-50 to-pink-100"
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
            <Globe className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-semibold">University Education & Core Skills</h3>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-700">
            From 2020-2021, I pursued my Engineering Degree in Software Engineering at 
            Medtech University (GPA 3.0). This period was crucial for building my 
            technical foundations across multiple programming languages.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
            I mastered programming fundamentals in Python, Java, C++, JavaScript, PHP, and SQL. 
            But more importantly, I learned software design principles and data structures 
            that would become the backbone of my development career.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
              <Code2 className="w-5 h-5 text-purple-600" />
              <div>
                <div className="font-semibold text-sm">Programming Languages</div>
                <div className="text-xs text-gray-600">Python, Java, C++, JS</div>
              </div>
            </div>
            <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
              <Palette className="w-5 h-5 text-pink-600" />
              <div>
                <div className="font-semibold text-sm">Software Design</div>
                <div className="text-xs text-gray-600">Data Structures & Algorithms</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Browser Window Mockup */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="bg-gray-200 px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1 bg-white rounded mx-4 px-3 py-1">
                <span className="text-gray-500 text-sm">localhost:3000</span>
              </div>
            </div>
            
            {/* Website Preview */}
            <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center relative overflow-hidden">
              <motion.h1
                className="text-4xl font-bold text-white text-center"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Welcome to My World!
              </motion.h1>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full opacity-20"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-8 left-8 w-6 h-6 bg-yellow-300 rounded-full opacity-30"
                animate={{ x: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </div>
          
          <motion.div
            className="absolute -bottom-4 -left-4 bg-purple-600 text-white p-3 rounded-full shadow-lg"
            animate={{ 
              rotate: [0, -10, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              delay: 1.5
            }}
          >
            <Rocket className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>

      {/* Code Editor Preview */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="bg-gray-900 rounded-lg p-6 shadow-2xl max-w-3xl mx-auto">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-400 text-sm ml-4">car_trac_system.py</span>
          </div>
          
          <motion.pre
            className="text-sm leading-relaxed overflow-x-auto animate-gpu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <code>
              {pythonSnippet.split('\n').map((line: string, index: number) => (
                <div
                  key={index}
                  className="block"
                >
                  <span className="text-gray-500 select-none mr-4">{String(index + 1).padStart(2, ' ')}</span>
                  <span className={
                    line.includes('import') || line.includes('from') ? 'text-purple-400' :
                    line.includes('#') ? 'text-gray-500' :
                    line.includes('class') || line.includes('def') ? 'text-blue-400' :
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

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="font-semibold text-purple-800 mb-2">🚗 Car Trac Management System</h4>
            <p className="text-sm text-gray-600">IoT system using Raspberry Pi and Python to minimize traffic jams through real-time data collection and route optimization.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="font-semibold text-purple-800 mb-2">📋 Click EZ</h4>
            <p className="text-sm text-gray-600">Project management web application built with React and SQL, streamlining team collaboration and task tracking.</p>
          </div>
        </div>
        
        <div className="inline-flex items-center space-x-2 bg-purple-100 px-6 py-3 rounded-full">
          <span className="text-purple-800 font-medium">2020-2021 - Engineering Foundation</span>
          <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </Chapter>
  );
}