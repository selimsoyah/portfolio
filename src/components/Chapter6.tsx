'use client';

import { motion } from 'framer-motion';
import { 
  Mail, Github, Linkedin,
  Code, Database, Brain, Monitor, Award,
  Users, Zap, Target, Rocket
} from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter6() {
  const skillCategories = [
    {
      category: "Programming & Core Data",
      icon: Code,
      skills: [
        { name: "Python", level: 95, color: "bg-yellow-500" },
        { name: "SQL (BigQuery, PostgreSQL)", level: 92, color: "bg-green-500" },
        { name: "Pandas & NumPy", level: 95, color: "bg-blue-600" },
        { name: "Scikit-learn", level: 93, color: "bg-blue-500" },
        { name: "PyTorch & Keras", level: 88, color: "bg-orange-500" },
        { name: "JavaScript/TypeScript", level: 90, color: "bg-yellow-400" }
      ]
    },
    {
      category: "Time-Series & ML Models",
      icon: Brain,
      skills: [
        { name: "Forecasting (ARIMA, Prophet)", level: 90, color: "bg-emerald-500" },
        { name: "Tree-Based Ensembles", level: 92, color: "bg-green-500" },
        { name: "Graph Neural Networks", level: 82, color: "bg-purple-500" },
        { name: "Predictive Maintenance", level: 88, color: "bg-teal-500" },
        { name: "Regression & Classification", level: 93, color: "bg-blue-500" },
        { name: "NLP & spaCy", level: 85, color: "bg-indigo-500" }
      ]
    },
    {
      category: "Data Engineering & GenAI",
      icon: Database,
      skills: [
        { name: "SQLMesh & dbt", level: 88, color: "bg-blue-600" },
        { name: "ETL Pipelines", level: 92, color: "bg-green-600" },
        { name: "Prompt Engineering", level: 90, color: "bg-purple-500" },
        { name: "Multi-Agent AI Workflows", level: 87, color: "bg-violet-500" },
        { name: "FastAPI", level: 90, color: "bg-teal-500" },
        { name: "Docker & Git", level: 88, color: "bg-gray-600" }
      ]
    },
    {
      category: "Cloud, Infrastructure & BI",
      icon: Monitor,
      skills: [
        { name: "Google Cloud Platform", level: 85, color: "bg-blue-500" },
        { name: "AWS (Lambda, DynamoDB)", level: 82, color: "bg-orange-500" },
        { name: "Grafana & Looker", level: 80, color: "bg-red-500" },
        { name: "Next.js & React", level: 92, color: "bg-cyan-500" },
        { name: "Node.js & MongoDB", level: 85, color: "bg-green-600" },
        { name: "Agile/Scrum", level: 88, color: "bg-indigo-500" }
      ]
    }
  ];

  const achievements = [
    {
      icon: Target,
      title: "30% Improvement",
      description: "Operational detection accuracy with VQ-VGAE deep learning",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "15% Reduction",
      description: "Prediction error through ML at Medtech University",
      color: "text-blue-600"
    },
    {
      icon: Rocket,
      title: "Predictive Maintenance",
      description: "IoT platform forecasting hardware failures before downtime",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "4 Certifications",
      description: "IBM, Eindhoven University, and University of London",
      color: "text-orange-600"
    }
  ];

  return (
    <Chapter
      id="chapter-6"
      title="Chapter 6"
      subtitle="Lifelong Learning & Future Vision"
      backgroundColor="bg-gradient-to-br from-violet-50 to-purple-100"
      textColor="text-gray-900"
    >
      <div className="space-y-16">
        
        {/* Lifelong Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Rocket className="w-10 h-10 text-violet-600" />
            <h3 className="text-3xl font-bold text-gray-800">The Journey Never Ends</h3>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg text-left">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              From that accidental F12 press in Tunisia to pursuing a Master&apos;s in Data Analytics 
              in Hildesheim, Germany — my journey has been defined by one constant: the relentless 
              pursuit of learning. Technology evolves rapidly, and staying relevant means embracing 
              continuous growth and adaptation.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Today, I&apos;m a data scientist and ML engineer focused on <strong>predictive maintenance</strong> 
              and Industry 4.0 — merging rigorous academic training with hands-on experience in 
              IoT analytics, time-series forecasting, and autonomous AI systems. My goal is to build 
              intelligent systems that prevent failures before they happen and create meaningful impact 
              in Germany&apos;s industrial landscape.
            </p>

            <div className="bg-violet-50 p-6 rounded-lg border border-violet-200">
              <h4 className="font-semibold text-violet-800 mb-3">Future Focus Areas</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-violet-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-violet-800">Predictive Maintenance</p>
                  <p className="text-xs text-gray-600">IoT & failure forecasting</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-violet-800">Data Engineering</p>
                  <p className="text-xs text-gray-600">SQLMesh, dbt, GCP pipelines</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-violet-800">GenAI & Agents</p>
                  <p className="text-xs text-gray-600">LLM orchestration & automation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Connect */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Mail className="w-8 h-8 text-violet-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">Email</h4>
              <a href="mailto:selimsoyah86@gmail.com" className="text-sm text-violet-600 hover:underline">
                selimsoyah86@gmail.com
              </a>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Github className="w-8 h-8 text-violet-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">GitHub</h4>
              <a href="https://github.com/selimsoyah" className="text-sm text-violet-600 hover:underline">
                   github.com/selimsoyah
                  </a>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Linkedin className="w-8 h-8 text-violet-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-800 mb-2">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/salim-soyah/" className="text-sm text-violet-600 hover:underline">
                linkedin.com/in/salim-soyah/
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Technical Skills Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Technical Expertise</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <category.icon className="w-8 h-8 text-violet-600" />
                  <h4 className="text-xl font-semibold text-gray-800">{category.category}</h4>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, achievementIndex) => (
              <motion.div
                key={achievement.title}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: achievementIndex * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <achievement.icon className={`w-12 h-12 mx-auto mb-4 ${achievement.color}`} />
                <h4 className="text-2xl font-bold text-gray-800 mb-2">{achievement.title}</h4>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Award className="w-8 h-8 text-violet-600" />
              <h4 className="text-2xl font-semibold text-gray-800">Education</h4>
            </div>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-gray-800">MSc in Data Analytics</h5>
                <p className="text-gray-600">Stiftung Universität Hildesheim, Germany</p>
                <p className="text-sm text-gray-500">Apr 2026 – Present</p>
              </div>
              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-800">Engineering Degree in Software Engineering</h5>
                <p className="text-gray-600">Medtech University, Tunisia</p>
                <p className="text-sm text-gray-500">2020 – 2025 · GPA: 3.0</p>
              </div>
              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-800 mb-2">Certifications</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>IBM Data Science Specialist</span>
                    <span className="text-gray-500">Sep 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Machine Learning with Python (IBM)</span>
                    <span className="text-gray-500">Dec 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Understanding Research Methods (Univ. of London)</span>
                    <span className="text-gray-500">Dec 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ethics, Technology & Engineering (Eindhoven)</span>
                    <span className="text-gray-500">Apr 2024</span>
                  </div>
                </div>
              </div>
              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-800 mb-2">Languages</h5>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="px-2 py-1 bg-violet-100 text-violet-800 rounded">Arabic (Native)</span>
                  <span className="px-2 py-1 bg-violet-100 text-violet-800 rounded">French (Native)</span>
                  <span className="px-2 py-1 bg-violet-100 text-violet-800 rounded">English (C1)</span>
                  <span className="px-2 py-1 bg-violet-100 text-violet-800 rounded">German (A2)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Zap className="w-8 h-8 text-violet-600" />
              <h4 className="text-2xl font-semibold text-gray-800">Professional Focus</h4>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Based in <strong>Hildesheim, Germany</strong>, specializing in the intersection of 
                <strong> predictive maintenance</strong>, <strong>time-series ML</strong>, and 
                <strong> data engineering</strong>. Passionate about applying data science to 
                Industry 4.0 challenges and building scalable AI solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-3 bg-violet-50 rounded-lg">
                  <div className="text-2xl font-bold text-violet-600">6+</div>
                  <div className="text-xs text-gray-600">Companies</div>
                </div>
                <div className="text-center p-3 bg-violet-50 rounded-lg">
                  <div className="text-2xl font-bold text-violet-600">10+</div>
                  <div className="text-xs text-gray-600">Projects Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center bg-gradient-to-r from-violet-600 to-purple-600 text-white p-12 rounded-2xl"
        >
          <h3 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            I&apos;m passionate about predictive maintenance, time-series analytics, and AI-driven 
            automation. Whether you need a data scientist, ML engineer, or AI solutions architect — 
            let&apos;s discuss how we can bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.a
              href="mailto:selimsoyah86@gmail.com"
              className="inline-flex items-center space-x-2 bg-white text-violet-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </motion.a>
            
            <motion.a
              href="https://github.com/selimsoyah"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-violet-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              <span>View Projects</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-violet-100 to-purple-100 px-8 py-4 rounded-full border border-violet-200">
            <Rocket className="w-5 h-5 text-violet-600" />
            <span className="text-violet-800 font-medium text-lg">The Future Awaits - Let&apos;s Build It Together</span>
            <div className="w-3 h-3 bg-violet-600 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </Chapter>
  );
}