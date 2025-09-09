import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../../data/portfolioData';

const Education: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Academic foundation in Computer Engineering with a focus on practical applications and research
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-600"></div>

            {/* Education Items */}
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative flex items-start"
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white dark:bg-gray-800 rounded-full border-4 border-primary-500 shadow-lg">
                    <div className="text-2xl">
                      {edu.status === 'ongoing' ? '🎓' : '✅'}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-8 flex-1">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      {/* Degree and Status */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                            edu.status === 'ongoing'
                              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                              : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          }`}>
                            {edu.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                          </span>
                        </div>
                      </div>

                      {/* Institution */}
                      <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                        {edu.institution}
                      </h4>

                      {/* Period */}
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {edu.period}
                      </p>

                      {/* GPA if available */}
                      {edu.gpa && (
                        <div className="flex items-center mb-4">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {edu.gpa}
                          </span>
                        </div>
                      )}

                      {/* Relevant Coursework if available */}
                      {edu.relevantCoursework && (
                        <div className="mt-4">
                          <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                            Relevant Coursework:
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {edu.relevantCoursework.map((course, courseIndex) => (
                              <span
                                key={courseIndex}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Academic Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Magna Cum Laude</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Bachelor's Degree</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Master's Program</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Currently Pursuing</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">📚</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Focus</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">IoT & AI Applications</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
