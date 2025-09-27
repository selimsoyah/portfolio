'use client';

import { motion } from 'framer-motion';
import { Globe, Palette, Rocket, Code2 } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter4() {
  const projects = [
    {
      title: "LangBridge Translation System",
      description: "French-to-English machine translation system using Transformer-based models with PyTorch & Hugging Face for high-accuracy translation.",
      tech: ["PyTorch", "Hugging Face", "Transformers", "Python"],
      category: "Machine Learning",
      company: "Personal Project"
    },
    {
      title: "Dar Sellami Real Estate Platform",
      description: "Full-stack real estate management platform with integrated analytics, property listings, and user management systems.",
      tech: ["React.js", "Node.js", "MongoDB", "Analytics"],
      category: "Full Stack",
      company: "Professional Project"
    },
    {
      title: "E-commerce & Web Portals",
      description: "Built multiple e-commerce platforms and web portals using modern frameworks, focusing on performance and user experience.",
      tech: ["React.js", "PHP", "MySQL", "Express.js"],
      category: "Web Development",
      company: "Leo Display, Orange (ODC), SATORIPOP"
    }
  ];

  return (
    <Chapter
      id="chapter-4"
      title="Chapter 4"
      subtitle="Entering Professional Web Development"
      backgroundColor="bg-gradient-to-br from-indigo-50 to-purple-100"
      textColor="text-gray-900"
    >
      <div className="space-y-16">
        {/* Professional Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Professional Web Development Journey</h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
            From 2023-2024, I transitioned into professional web development, working with multiple companies 
            and building full-stack solutions. This period marked my evolution from student to professional developer.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { company: "Leo Display", role: "Web Developer", focus: "E-commerce Platforms" },
              { company: "Orange (ODC)", role: "Web Developer", focus: "Web Portals" },
              { company: "SATORIPOP", role: "Web Developer", focus: "Full-Stack Solutions" }
            ].map((experience, index) => (
              <motion.div
                key={experience.company}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-semibold mb-2 text-indigo-600">{experience.company}</h4>
                <p className="text-sm text-gray-600 mb-2">{experience.role}</p>
                <p className="text-sm text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full inline-block">
                  {experience.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Skills Developed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-gray-800">Technical Expertise Gained</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { skill: "React.js", desc: "Frontend Development" },
              { skill: "Node.js/Express", desc: "Backend APIs" },
              { skill: "PHP", desc: "Server-side Logic" },
              { skill: "MongoDB/MySQL", desc: "Database Management" }
            ].map((tech, index) => (
              <motion.div
                key={tech.skill}
                className="bg-white p-4 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="font-semibold text-indigo-600 mb-1">{tech.skill}</h4>
                <p className="text-xs text-gray-600">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Key Projects & Achievements</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500">{project.company}</span>
                  </div>
                  
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            className="mt-12 bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h4 className="text-xl font-semibold text-indigo-800 mb-3">Professional Achievements</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">3+</div>
                <div className="text-gray-600">Companies Worked With</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">Multiple</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">Agile/Scrum</div>
                <div className="text-gray-600">Team Collaboration</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Chapter Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-indigo-100 px-6 py-3 rounded-full">
            <span className="text-indigo-800 font-medium">2023-2024 - Professional Web Development</span>
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </Chapter>
  );
}