'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Chapter from './Chapter';

const experiences = [
  {
    title: 'Full Stack Developer & AI Specialist',
    company: 'M-Labs (Freelance AI Agency)',
    period: 'Feb 2026 – Apr 2026',
    location: 'Remote',
    color: 'border-indigo-600',
    accent: 'text-indigo-600',
    description:
      'Designed and integrated autonomous, multi-agent AI system behaviors and LLM orchestrations to automate complex engineering and administrative workflows. Built responsive Next.js components to expose internal software tool metrics and real-time process monitoring logs.',
  },
  {
    title: 'AI Solutions Engineer',
    company: 'Freelance AI Automation (HVAC & Dental)',
    period: 'Sep 2025 – Jan 2026',
    location: 'Remote',
    color: 'border-purple-600',
    accent: 'text-purple-600',
    description:
      'Developed real-time streaming data transformation architectures to ingest, clean, and classify incoming business event requests. Maintained secure serverless storage logic using AWS Lambda and DynamoDB, optimizing transaction synchronization against external software APIs.',
  },
  {
    title: 'Data Scientist / Researcher (Capstone Thesis)',
    company: 'Proxym IT',
    period: 'Jan 2025 – Jul 2025',
    location: 'Tunisia',
    color: 'border-emerald-600',
    accent: 'text-emerald-600',
    description:
      'Implemented custom deep learning architectures (VQ-VGAE) and statistical validation frameworks to troubleshoot system bottlenecks, improving operational detection accuracy by 30%. Engineered clean data transformation queries and mapped structured time and execution logs onto relational target frames.',
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Medtech University',
    period: 'Oct 2024 – Dec 2024',
    location: 'Tunisia',
    color: 'border-teal-600',
    accent: 'text-teal-600',
    description:
      'Conducted statistical analysis and predictive modeling on target population datasets, engineering custom data cleansing pipelines with Python, pandas, and scikit-learn. Validated model outcomes using strict quantitative metrics, leading to a verified 15% error reduction.',
  },
  {
    title: 'Web Developer',
    company: 'SATORIPOP',
    period: 'Jul 2024 – Sep 2024',
    location: 'Tunisia',
    color: 'border-blue-600',
    accent: 'text-blue-600',
    description:
      'Maintained modular e-commerce data structures, writing and benchmarking relational SQL database optimization scripts inside MySQL. Delivered operational tasks inside an agile Scrum workflow, participating closely in sprint cycles and technical team synchronization.',
  },
  {
    title: 'Web Developer',
    company: 'Orange (ODC)',
    period: 'Jan 2024 – May 2024',
    location: 'Tunisia',
    color: 'border-orange-600',
    accent: 'text-orange-600',
    description:
      'Designed full-stack platform views and training portal databases, structuring reliable storage backends utilizing MongoDB and Node.js. Documented system logic and API behaviors while participating in sprint reviews, planning, and retrospective sessions.',
  },
];

export default function Chapter4() {
  return (
    <Chapter
      id="chapter-4"
      title="Chapter 4"
      subtitle="Professional Development & Innovation"
      backgroundColor="bg-gradient-to-br from-indigo-50 to-purple-100"
      textColor="text-gray-900"
    >
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-8 text-gray-800">From Tunisia to Industry-Ready Engineer</h3>
          <div className="bg-white p-8 rounded-xl shadow-lg text-left">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              After building my foundation in software engineering at Medtech University, I stepped into 
              the professional world across six companies — from web development at <strong>Orange</strong> and 
              <strong> SATORIPOP</strong> to machine learning research at <strong>Proxym IT</strong> and 
              autonomous AI systems at <strong>M-Labs</strong>.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Each role pushed me further: from full-stack platforms and e-commerce SQL optimization, 
              through deep learning capstone research with <strong>30% accuracy gains</strong>, to building 
              multi-agent AI orchestrations and serverless data pipelines on <strong>AWS</strong>. 
              This progression shaped the engineer I am today — and ultimately led me to a pivotal decision.
            </p>

            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-800 mb-3">Professional Experience Highlights</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">6</span>
                  </div>
                  <p className="text-sm font-medium text-indigo-800">Companies</p>
                  <p className="text-xs text-gray-600">Professional Roles</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">30%</span>
                  </div>
                  <p className="text-sm font-medium text-indigo-800">Accuracy Gain</p>
                  <p className="text-xs text-gray-600">VQ-VGAE Deep Learning</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-xs">AI</span>
                  </div>
                  <p className="text-sm font-medium text-indigo-800">Multi-Agent Systems</p>
                  <p className="text-xs text-gray-600">LLM Orchestration</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">Professional Experience</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                className={`bg-white p-6 rounded-xl shadow-lg border-l-4 ${exp.color}`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{exp.title}</h4>
                    <p className={`${exp.accent} font-medium`}>{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500 block">{exp.period}</span>
                    <span className="text-xs text-gray-400">{exp.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">Key Projects</h3>

          <motion.div
            className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 mb-12 shadow-xl border border-blue-200"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">L</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">LangBridge</h4>
                    <p className="text-blue-600 font-medium">Machine Translation System</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Structured deep sequence-to-sequence translation models using PyTorch and Hugging Face, 
                  tracking training behavior using mathematical optimization metrics. A research-driven 
                  approach to bridging language barriers through neural machine translation.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">PyTorch</span>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">Hugging Face</span>
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">Seq2Seq</span>
                  <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">NLP</span>
                </div>

                <a
                  href="https://github.com/selimsoyah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
                >
                  <span>View on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <h5 className="font-semibold text-blue-800 mb-4">Key Features</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Deep sequence-to-sequence architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>PyTorch model training & optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Hugging Face transformer integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Quantitative training metrics tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-2xl p-8 shadow-xl border border-purple-200"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100">
                <h5 className="font-semibold text-purple-800 mb-4">Technical Highlights</h5>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">NLP Framework</span>
                    <span className="text-sm font-medium text-green-600">FastAPI + spaCy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Matching Engine</span>
                    <span className="text-sm font-medium text-blue-600">Semantic Similarity</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">GenAI Integration</span>
                    <span className="text-sm font-medium text-purple-600">Prompt Engineering</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">S</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">Semantic Content Matcher</h4>
                    <p className="text-purple-600 font-medium">NLP Analysis & Profile Similarity</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  Built a FastAPI NLP analysis framework utilizing spaCy, generating semantic data matches 
                  and automated validation testing against crawled text corpuses. Configured prompt engineering 
                  parameters and generative assistance logic to accelerate backend text token processing.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">FastAPI</span>
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">spaCy</span>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">NLP</span>
                  <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">GenAI</span>
                </div>

                <a
                  href="https://github.com/selimsoyah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-800 transition-colors font-medium"
                >
                  <span>View on GitHub</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 p-8 rounded-2xl shadow-xl text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Ready for the Next Chapter</h3>
          <p className="text-indigo-100 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
            From web development in Tunisia to AI automation and deep learning research, every role 
            sharpened my skills and clarified my direction. With a solid professional foundation in place, 
            I made a deliberate choice — to pursue a Master&apos;s in Data Analytics in Germany and 
            align my career with the industries shaping Europe&apos;s future.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">Full-Stack to AI</h4>
              <p className="text-indigo-100 text-sm">Web dev → ML research → multi-agent AI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">Production Impact</h4>
              <p className="text-indigo-100 text-sm">30% accuracy gains, 15% error reduction</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-semibold text-lg mb-2">Next Stop: Germany</h4>
              <p className="text-indigo-100 text-sm">MSc Data Analytics at Universität Hildesheim</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Chapter>
  );
}
