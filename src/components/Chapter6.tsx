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
      category: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 95, color: "bg-yellow-500" },
        { name: "JavaScript", level: 90, color: "bg-yellow-400" },
        { name: "Java", level: 80, color: "bg-red-500" },
        { name: "C++", level: 75, color: "bg-blue-500" },
        { name: "PHP", level: 85, color: "bg-purple-500" },
        { name: "SQL", level: 90, color: "bg-green-500" }
      ]
    },
    {
      category: "Machine Learning & AI",
      icon: Brain,
      skills: [
        { name: "PyTorch", level: 90, color: "bg-orange-500" },
        { name: "TensorFlow", level: 85, color: "bg-orange-400" },
        { name: "Scikit-learn", level: 95, color: "bg-blue-500" },
        { name: "Hugging Face", level: 88, color: "bg-yellow-500" },
        { name: "Graph Neural Networks", level: 80, color: "bg-purple-500" },
        { name: "NLP", level: 85, color: "bg-green-500" }
      ]
    },
    {
      category: "Data Science",
      icon: Database,
      skills: [
        { name: "Pandas", level: 95, color: "bg-blue-600" },
        { name: "NumPy", level: 90, color: "bg-blue-500" },
        { name: "Matplotlib", level: 85, color: "bg-green-500" },
        { name: "Seaborn", level: 85, color: "bg-teal-500" },
        { name: "Power BI", level: 75, color: "bg-yellow-500" },
        { name: "Jupyter", level: 90, color: "bg-orange-500" }
      ]
    },
    {
      category: "Web Development",
      icon: Monitor,
      skills: [
        { name: "React.js", level: 95, color: "bg-cyan-500" },
        { name: "Node.js", level: 90, color: "bg-green-600" },
        { name: "Express.js", level: 85, color: "bg-gray-600" },
        { name: "MongoDB", level: 85, color: "bg-green-500" },
        { name: "React Native", level: 80, color: "bg-cyan-400" },
        { name: "Magento 2", level: 75, color: "bg-orange-500" }
      ]
    }
  ];

  const achievements = [
    {
      icon: Target,
      title: "30% Improvement",
      description: "Anomaly detection accuracy using VQ-VGAE model",
      color: "text-green-600"
    },
    {
      icon: Users,
      title: "15% Reduction",
      description: "Student mental health issues through ML insights",
      color: "text-blue-600"
    },
    {
      icon: Rocket,
      title: "8+ Projects",
      description: "From IoT systems to enterprise platforms",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "4 Certifications",
      description: "From IBM, Eindhoven University, and University of London",
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
              From that accidental F12 press to mastering data science, my journey has been 
              defined by one constant: the relentless pursuit of learning. Technology evolves 
              rapidly, and staying relevant means embracing continuous growth and adaptation.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Today, I&apos;m not just a developer or data scientist—I&apos;m a lifelong learner who 
              bridges the gap between traditional software engineering and cutting-edge AI. 
              My goal is to build intelligent systems that solve real-world problems and 
              create meaningful impact.
            </p>

            <div className="bg-violet-50 p-6 rounded-lg border border-violet-200">
              <h4 className="font-semibold text-violet-800 mb-3">🚀 Future Focus Areas</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-violet-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-violet-800">AI & Machine Learning</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-violet-800">Data Engineering</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-violet-800">Product Innovation</p>
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
  173:                 github.com/selimsoyah
  174                </a>
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
                <h5 className="font-semibold text-gray-800">Engineering Degree in Software Engineering</h5>
                <p className="text-gray-600">Medtech University</p>
                <p className="text-sm text-gray-500">GPA: 3.0</p>
              </div>
              <div className="border-t pt-4">
                <h5 className="font-semibold text-gray-800 mb-2">Recent Certifications</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Data Science (IBM)</span>
                    <span className="text-gray-500">Sep 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Machine Learning with Python (IBM)</span>
                    <span className="text-gray-500">Dec 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Research Methods (University of London)</span>
                    <span className="text-gray-500">Dec 2024</span>
                  </div>
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
                Specializing in the intersection of <strong>software engineering</strong>, 
                <strong> data science</strong>, and <strong>machine learning</strong>. 
                Passionate about building scalable AI solutions that solve real-world problems.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-3 bg-violet-50 rounded-lg">
                  <div className="text-2xl font-bold text-violet-600">6+</div>
                  <div className="text-xs text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-3 bg-violet-50 rounded-lg">
                  <div className="text-2xl font-bold text-violet-600">5+</div>
                  <div className="text-xs text-gray-600">Companies</div>
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
            I&apos;m passionate about leveraging AI and data science to create impactful solutions. 
            Whether you&apos;re looking for a data scientist, ML engineer, or full-stack developer, 
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
              href="#"
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