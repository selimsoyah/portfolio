'use client';

import { motion } from 'framer-motion';
import { Brain, TrendingUp, Award, Database, BarChart3, Cpu } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter5() {
  const pythonSnippet = `# VQ-VGAE Anomaly Detection System - Capstone Project
import torch
import torch.nn as nn
from torch_geometric.nn import GCNConv, VGAEEncoder
import numpy as np

class VQ_VGAE_Anomaly_Detector:
    def __init__(self, input_dim, hidden_dim, latent_dim):
        self.encoder = VGAEEncoder(input_dim, hidden_dim, latent_dim)
        self.vq_layer = VectorQuantizer(latent_dim, num_embeddings=512)
        
    def detect_anomalies(self, graph_data):
        # Process BPMN workflow graphs
        z = self.encoder(graph_data.x, graph_data.edge_index)
        quantized_z, indices = self.vq_layer(z)
        
        # Calculate reconstruction loss for anomaly scoring
        recon_loss = self.reconstruction_loss(graph_data, quantized_z)
        anomaly_scores = self.compute_anomaly_scores(recon_loss)
        
        return anomaly_scores
    
    def align_execution_logs(self, bpmn_graph, execution_logs):
        # Innovative approach to align logs with graph structure
        aligned_data = self.graph_alignment_algorithm(bpmn_graph, execution_logs)
        return aligned_data

# Achieved 30% improvement in anomaly detection accuracy`;

  const certifications = [
    {
      title: "Data Science Professional Certificate",
      issuer: "IBM",
      date: "September 2024",
      icon: Database,
      skills: ["Python", "Data Analysis", "Machine Learning", "Data Visualization"]
    },
    {
      title: "Machine Learning with Python",
      issuer: "IBM", 
      date: "December 2024",
      icon: Brain,
      skills: ["Scikit-learn", "TensorFlow", "Deep Learning", "Model Evaluation"]
    },
    {
      title: "Ethics, Technology and Engineering",
      issuer: "Eindhoven University & 4TU.Ethics",
      date: "April 2024", 
      icon: Award,
      skills: ["AI Ethics", "Technology Impact", "Responsible AI"]
    },
    {
      title: "Understanding Research Methods",
      issuer: "University of London & SOAS",
      date: "December 2024",
      icon: BarChart3,
      skills: ["Research Design", "Statistical Analysis", "Academic Writing"]
    }
  ];

  return (
    <Chapter
      id="chapter-5"
      title="Chapter 5"
      subtitle="Transitioning into Data Science & Machine Learning"
      backgroundColor="bg-gradient-to-br from-cyan-50 to-blue-100"
      textColor="text-gray-900"
    >
      <div className="space-y-16">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Brain className="w-10 h-10 text-cyan-600" />
            <h3 className="text-3xl font-semibold">The Data Science Evolution</h3>
          </div>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            From 2024-2025, I made a strategic pivot into data science and machine learning. 
            This wasn&apos;t just a career change—it was the natural evolution of my passion 
            for solving complex problems with technology.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
            I gained expertise in Python data science libraries, machine learning frameworks, 
            and cutting-edge technologies like Graph Neural Networks, positioning myself 
            at the intersection of software engineering and AI.
          </p>
        </motion.div>

        {/* Professional Roles */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Professional Experience</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-8 h-8 text-cyan-600" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Machine Learning Engineer</h4>
                  <p className="text-sm text-gray-600">Medtech University</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Conducted predictive analysis on student mental health data, developing models 
                that reduced mental health issues by 15% through early intervention strategies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">Predictive Analytics</span>
                <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">Mental Health Data</span>
                <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">Python</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Cpu className="w-8 h-8 text-cyan-600" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-800">Data Scientist</h4>
                  <p className="text-sm text-gray-600">Proxym IT - Capstone Project</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Developed a graph-based anomaly detection system using VQ-VGAE, modeling BPMN workflows 
                and achieving 30% improvement in anomaly detection accuracy.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">Graph Neural Networks</span>
                <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">VQ-VGAE</span>
                <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded">PyTorch</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Featured Project: Nexus-Analytics</h3>
          <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold text-cyan-800 mb-4">🔍 Modular Data Analytics Platform</h4>
                <p className="text-gray-700 mb-4">
                  Developed a comprehensive platform for dataset ingestion, visualization, and forecasting. 
                  Built with modularity in mind, allowing users to plug in different data sources and 
                  analysis modules seamlessly.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-cyan-600">Multiple</div>
                    <div className="text-xs text-gray-600">Data Sources</div>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-cyan-600">Real-time</div>
                    <div className="text-xs text-gray-600">Analytics</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <div className="text-sm text-gray-600 mb-2">Tech Stack:</div>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Pandas", "Scikit-learn", "Streamlit", "PostgreSQL", "Docker"].map((tech) => (
                    <span key={tech} className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Code Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gray-900 rounded-lg p-6 shadow-2xl max-w-5xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-gray-400 text-sm ml-4">vq_vgae_anomaly_detector.py</span>
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
                  <div key={index} className="block">
                    <span className="text-gray-500 select-none mr-4">{String(index + 1).padStart(2, ' ')}</span>
                    <span className={
                      line.includes('import') || line.includes('from') ? 'text-purple-400' :
                      line.includes('#') ? 'text-gray-500' :
                      line.includes('class') || line.includes('def') ? 'text-blue-400' :
                      line.includes("'") || line.includes('"') ? 'text-green-400' :
                      line.includes('self') ? 'text-yellow-400' :
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

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Certifications & Continuous Learning</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <cert.icon className="w-8 h-8 text-cyan-600 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-1">{cert.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{cert.issuer} • {cert.date}</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <span key={skill} className="text-xs bg-cyan-50 text-cyan-700 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-cyan-100 px-6 py-3 rounded-full">
            <span className="text-cyan-800 font-medium">2024-2025 - Data Science & ML Mastery</span>
            <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </Chapter>
  );
}