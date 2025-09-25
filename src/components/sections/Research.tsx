import React from 'react';
import { motion } from 'framer-motion';
import { publications, researchInvolvements } from '../../data/portfolioData';

const Research: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Research & Publications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Contributing to scientific knowledge through innovative research in IoT, renewable energy, and AI/ML applications
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Publications */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Published Research
            </h3>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center text-white font-bold">
                        📄
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {pub.title}
                      </h4>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        <strong>Authors:</strong> {pub.authors}
                      </p>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        <strong>Journal:</strong> {pub.journal}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="text-primary-600 dark:text-primary-400 font-medium">
                          {pub.year}
                        </span>
                        
                        {pub.doi && (
                          <a
                            href={`https://doi.org/${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                          >
                            DOI: {pub.doi}
                          </a>
                        )}
                        
                        {pub.url && (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                          >
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Publication
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Research Involvements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Research Projects & Involvements
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {researchInvolvements.map((research, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  {/* Research Title and Role */}
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {research.title}
                    </h4>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                      {research.role}
                    </span>
                  </div>
                  
                  {/* Period */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Period:</strong> {research.period}
                  </p>
                  
                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {research.description}
                  </p>
                  
                  {/* Technologies */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {research.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
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

          {/* Research Impact */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Research Impact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Published Papers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">6+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Research Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">International Conferences</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Research Experience</div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                My research focuses on developing sustainable technology solutions that address real-world challenges. 
                Through interdisciplinary collaboration and innovative approaches, I contribute to advancing knowledge 
                in IoT systems, renewable energy, and AI/ML applications that benefit society and industry.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Research;
