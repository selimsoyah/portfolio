'use client';

import { motion } from 'framer-motion';
import { Rocket, Target, Lightbulb, Users, Github, Linkedin, Mail, Globe } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter6() {
  const futureGoals = [
    {
      icon: Target,
      title: "Large-Scale AI Solutions",
      description: "Building impactful AI systems that solve real-world problems at scale, combining my software engineering background with cutting-edge machine learning.",
      timeline: "Next 2-3 years"
    },
    {
      icon: Users,
      title: "Research & Innovation",
      description: "Contributing to academic research in Graph Neural Networks and anomaly detection, pushing the boundaries of what's possible in AI.",
      timeline: "Ongoing"
    },
    {
      icon: Lightbulb,
      title: "Entrepreneurship",
      description: "Launching a tech startup that bridges the gap between complex AI research and practical business applications.",
      timeline: "Long-term vision"
    }
  ];

  const currentSkills = [
    { category: "AI & Machine Learning", skills: ["PyTorch", "TensorFlow", "Hugging Face", "Graph Neural Networks", "Scikit-learn"] },
    { category: "Data Science", skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter", "Statistical Analysis"] },
    { category: "Software Engineering", skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "MongoDB", "Docker"] },
    { category: "Research & Analysis", skills: ["Academic Writing", "Research Methods", "Data Visualization", "Statistical Modeling"] }
  ];

  return (
    <Chapter
      id="chapter-6"
      title="Chapter 6"
      subtitle="Looking Ahead - The Future Vision"
      backgroundColor="bg-gradient-to-br from-violet-50 to-purple-100"
      textColor="text-gray-900"
    >
      <div className="space-y-16">
        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Rocket className="w-10 h-10 text-violet-600" />
            <h3 className="text-3xl font-semibold">The Journey Continues</h3>
          </div>
          
          <p className="text-xl leading-relaxed text-gray-700 mb-8">
            My ambition is to continue bridging software engineering, data science, and AI 
            to build solutions that create meaningful impact. The journey from my first 
            &ldquo;Hello, World!&rdquo; to advanced machine learning has been incredible, 
            but this is just the beginning.
          </p>
          
          <div className="bg-gradient-to-r from-violet-100 to-purple-100 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-violet-800 mb-3">Mission Statement</h4>
            <p className="text-gray-700 italic">
              &ldquo;To leverage the intersection of software engineering and artificial intelligence 
              to create innovative solutions that solve complex real-world problems and drive positive change.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Future Aspirations</h3>
          <div className="space-y-8">
            {futureGoals.map((goal, index) => (
              <motion.div
                key={goal.title}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-100 p-3 rounded-full">
                    <goal.icon className="w-6 h-6 text-violet-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-semibold text-gray-800">{goal.title}</h4>
                      <span className="text-sm text-violet-600 bg-violet-100 px-3 py-1 rounded-full">
                        {goal.timeline}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{goal.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Skill Arsenal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800">Complete Skill Arsenal</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {currentSkills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h4 className="text-lg font-semibold text-violet-600 mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="text-sm bg-violet-50 text-violet-700 px-3 py-1 rounded-full border border-violet-200"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action / Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-violet-600 to-purple-600 text-white p-8 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Let&apos;s Build the Future Together</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you&apos;re interested in collaborating on cutting-edge AI projects, 
            discussing data science innovations, or exploring new opportunities—I&apos;d love to connect!
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { Icon: Github, href: "https://github.com/selimsoyah", label: "GitHub", color: "bg-gray-800 hover:bg-gray-700" },
              { Icon: Linkedin, href: "https://linkedin.com/in/salim-soyah", label: "LinkedIn", color: "bg-blue-600 hover:bg-blue-500" },
              { Icon: Mail, href: "mailto:salim.soyah@example.com", label: "Email", color: "bg-green-600 hover:bg-green-500" },
              { Icon: Globe, href: "#", label: "Portfolio", color: "bg-purple-600 hover:bg-purple-500" }
            ].map(({ Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`flex flex-col items-center space-y-2 ${color} text-white p-4 rounded-lg transition-all duration-300`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-6 h-6" />
                <span className="text-sm font-medium">{label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-violet-100 px-6 py-3 rounded-full">
            <span className="text-violet-800 font-medium">Present & Future - The Story Continues...</span>
            <div className="w-2 h-2 bg-violet-600 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </Chapter>
  );
}