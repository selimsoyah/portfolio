'use client';

import { motion } from 'framer-motion';
import { Brain, BarChart3, Database, TrendingUp, Target, ExternalLink, MapPin, Cog } from 'lucide-react';
import Chapter from './Chapter';

export default function Chapter5() {
  return (
    <Chapter
      id="chapter-5"
      title="Chapter 5"
      subtitle="Germany — Predictive Maintenance & Industry 4.0"
      backgroundColor="bg-gradient-to-br from-emerald-50 to-teal-100"
      textColor="text-gray-900"
    >
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center space-x-3 mb-8">
            <MapPin className="w-10 h-10 text-emerald-600" />
            <h3 className="text-3xl font-bold text-gray-800">A New Chapter in Germany</h3>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-left">
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              After years of building software, diving into machine learning, and delivering AI solutions 
              across Tunisia, I reached a turning point. I had strong foundations in data science and ML — 
              but I wanted to go deeper, to study where the field is most advanced, and to apply my skills 
              where they matter most. That decision led me to <strong>Germany</strong>.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              I enrolled in the <strong>Master of Science in Data Analytics</strong> at 
              Stiftung Universität Hildesheim — a deliberate move to combine rigorous academic training 
              with Germany&apos;s world-leading Industry 4.0 ecosystem. Germany isn&apos;t just a place to study; 
              it&apos;s where predictive maintenance, smart manufacturing, and IoT-driven analytics are 
              reshaping entire industries.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              I asked myself: how can I merge my knowledge in <strong>data science and machine learning</strong> 
              with something truly popular and advanced here? The answer was clear — 
              <strong> predictive maintenance</strong>. In a country built on precision engineering and 
              industrial excellence, forecasting equipment failures before they happen isn&apos;t just 
              a buzzword; it&apos;s the frontier where data science meets real-world impact.
            </p>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-800 mb-3">Why Predictive Maintenance?</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Cog className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-emerald-800">Industry 4.0</p>
                  <p className="text-xs text-gray-600">Germany&apos;s manufacturing backbone</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-emerald-800">ML + Time-Series</p>
                  <p className="text-xs text-gray-600">My core strengths applied</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-emerald-800">Real Impact</p>
                  <p className="text-xs text-gray-600">Prevent downtime, save costs</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* IoT Predictive Maintenance — Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-emerald-900 rounded-2xl p-8 shadow-xl border border-emerald-700 text-white">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Cog className="w-8 h-8 text-white" />
                </div>
                <div>
                  <span className="text-emerald-300 text-sm font-medium uppercase tracking-wider">Featured Project</span>
                  <h4 className="text-3xl font-bold">IoT Predictive Maintenance Platform</h4>
                  <p className="text-emerald-400 font-medium text-lg">Data Scientist / Data Engineer</p>
                </div>
              </div>
              <a
                href="https://github.com/selimsoyah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-emerald-300 hover:text-white transition-colors font-medium"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-emerald-100 mb-6 leading-relaxed text-lg">
                  The culmination of my Germany-focused direction — a platform that ingests IoT sensor 
                  streams from industrial equipment, transforms them through incremental pipelines, and 
                  applies tree-based ensemble models to forecast hardware failures before they cause downtime.
                </p>

                <div className="space-y-4">
                  <h5 className="font-semibold text-emerald-300 text-lg">What I Built</h5>
                  <ul className="space-y-3 text-emerald-100">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Incremental data transformation pipelines with SQLMesh and GCP BigQuery</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Aggregation of large streams of sensory device records</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Predictive time-series models using tree-based ensembles for failure forecasting</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Architecture decision records tracing data quality impacts on yield simulations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-600/30">
                  <h5 className="font-semibold text-emerald-300 mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    Technology Stack
                  </h5>
                  <div className="grid grid-cols-2 gap-3">
                    <span className="px-3 py-1 bg-emerald-800/50 text-emerald-200 rounded-full text-sm font-medium">SQLMesh</span>
                    <span className="px-3 py-1 bg-emerald-800/50 text-emerald-200 rounded-full text-sm font-medium">GCP BigQuery</span>
                    <span className="px-3 py-1 bg-emerald-800/50 text-emerald-200 rounded-full text-sm font-medium">Python</span>
                    <span className="px-3 py-1 bg-emerald-800/50 text-emerald-200 rounded-full text-sm font-medium">Scikit-learn</span>
                    <span className="px-3 py-1 bg-emerald-800/50 text-emerald-200 rounded-full text-sm font-medium">IoT Sensors</span>
                    <span className="px-3 py-1 bg-emerald-800/50 text-emerald-200 rounded-full text-sm font-medium">Time-Series ML</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-emerald-600/30">
                  <h5 className="font-semibold text-emerald-300 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Impact
                  </h5>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-emerald-200">Failure Prediction</span>
                      <span className="text-sm font-medium text-emerald-300">Before Downtime</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-emerald-200">Data Pipeline</span>
                      <span className="text-sm font-medium text-teal-300">Incremental & Scalable</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-emerald-200">Architecture</span>
                      <span className="text-sm font-medium text-blue-300">ADR-Documented</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-emerald-800/40 p-6 rounded-lg border border-emerald-600/30">
              <p className="text-lg italic text-emerald-100">
                This project is where my journey converges — combining the data science skills I honed in Tunisia 
                with Germany&apos;s Industry 4.0 vision. Predictive maintenance isn&apos;t just a project for me; 
                it&apos;s the direction I&apos;m building my career around.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid EMS Load Forecasting */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl border border-blue-200">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-800">Automated Grid EMS Load Forecasting</h4>
                  <p className="text-blue-600 font-medium text-lg">Data Science & ML Pipeline Developer</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Developed automated pipeline behaviors utilizing Python, pandas, and scikit-learn to ingest, 
                  transform, and backtest distributed load time-series structures. Evaluated forecast errors 
                  (MAPE/RMSE) across regression and tree-based ensemble setups.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">Python</span>
                  <span className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">Time-Series</span>
                  <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium">Grafana</span>
                  <span className="px-3 py-1 bg-orange-200 text-orange-800 rounded-full text-sm font-medium">Looker</span>
                  <span className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded-full text-sm font-medium">GenAI CI</span>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
                <h5 className="font-semibold text-blue-800 mb-4">Pipeline Capabilities</h5>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Automated load time-series ingestion & backtesting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>MAPE/RMSE evaluation across model setups</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Real-time operations dashboards via Looker & Grafana</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span>Agentic CI pipeline with GenAI documentation automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Nexus-Analytics Project Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-teal-50 to-cyan-100 rounded-2xl p-8 shadow-xl border border-teal-200">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-gray-800">Nexus-Analytics</h4>
                  <p className="text-teal-600 font-medium text-lg">Lead Full-Stack & Data Engineer</p>
                </div>
              </div>
              <a
                href="https://github.com/selimsoyah/Nexus-Analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-800 transition-colors font-medium"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  A scalable data analytics platform with FastAPI REST API backend, PostgreSQL/SQLAlchemy, 
                  and JWT authentication. Integrated ML-powered forecasting models (ARIMA, Prophet) for 
                  real-time revenue forecasts and Customer Lifetime Value predictions.
                </p>

                <div className="space-y-4">
                  <h5 className="font-semibold text-teal-800 text-lg">Core Capabilities</h5>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Robust ETL pipelines for multi-platform data ingestion</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>ARIMA & Prophet forecasting for revenue & CLV predictions</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>React/Next.js frontend with Recharts visualizations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Advanced customer segmentation (K-means, RFM analysis)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100">
                  <h5 className="font-semibold text-teal-800 mb-4 flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    Technology Stack
                  </h5>
                  <div className="grid grid-cols-2 gap-3">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">FastAPI</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">ARIMA/Prophet</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Next.js</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">TypeScript</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">Recharts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">Current Focus Areas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cog,
                title: 'Predictive Maintenance',
                skills: ['IoT Sensor Analytics', 'Failure Forecasting', 'SQLMesh Pipelines', 'Tree Ensembles'],
                color: 'emerald'
              },
              {
                icon: BarChart3,
                title: 'Time-Series & Forecasting',
                skills: ['ARIMA & Prophet', 'Load Forecasting', 'MAPE/RMSE Evaluation', 'Grafana Dashboards'],
                color: 'blue'
              },
              {
                icon: Brain,
                title: 'GenAI & Data Engineering',
                skills: ['Multi-Agent AI', 'Prompt Engineering', 'dbt & ETL', 'GCP & AWS'],
                color: 'purple'
              }
            ].map((area, index) => (
              <motion.div
                key={area.title}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 bg-${area.color}-600 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-center text-gray-800">{area.title}</h4>
                <div className="space-y-2">
                  {area.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`bg-${area.color}-50 px-3 py-2 rounded-lg text-sm text-${area.color}-800 text-center`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 px-8 py-4 rounded-full border border-emerald-200">
            <MapPin className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-800 font-medium text-lg">Building the Future from Hildesheim, Germany</span>
            <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </Chapter>
  );
}
