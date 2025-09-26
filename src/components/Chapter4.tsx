'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter4() {
  const projects = [
    {
      title: "E-commerce Analytics Dashboard",
      description: "Built a comprehensive dashboard for analyzing customer behavior and sales patterns using Python, PostgreSQL, and Streamlit.",
      tech: ["Python", "PostgreSQL", "Streamlit", "Pandas"],
      category: "Data Science"
    },
    {
      title: "Personal Finance Tracker",
      description: "Developed a full-stack web application to help users track expenses and visualize spending patterns.",
      tech: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "Full Stack"
    },
    {
      title: "Machine Learning Price Predictor",
      description: "Created a machine learning model to predict house prices using regression techniques and feature engineering.",
      tech: ["Python", "Scikit-learn", "Jupyter", "Flask"],
      category: "Machine Learning"
    }
  ];

  return (
    <Chapter
      id="chapter-4"
      title="Chapter 4"
      subtitle="Building & Creating"
      backgroundColor="bg-gradient-to-br from-indigo-50 to-purple-100"
      textColor="text-gray-900"
    >
      <div className="space-y-16">
        {/* Current Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-800">Current Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
              { category: "Data Science", skills: ["Python", "Pandas", "Scikit-learn", "Jupyter"] },
              { category: "Backend", skills: ["Node.js", "PostgreSQL", "MongoDB", "REST APIs"] }
            ].map((area, index) => (
              <motion.div
                key={area.category}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-semibold mb-4 text-indigo-600">{area.category}</h4>
                <div className="space-y-2">
                  {area.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="bg-indigo-50 px-3 py-1 rounded-full text-sm text-indigo-700"
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

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
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
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-white p-8 rounded-2xl shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-6 text-gray-800">Let's Connect</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Whether you want to discuss data science, web development, or just say hello!
          </p>
          
          <div className="flex justify-center space-x-6">
            {[
              { Icon: Github, href: "#", label: "GitHub" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:hello@salimsoyah.com", label: "Email" }
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="flex items-center space-x-2 bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span>{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </Chapter>
  );
}