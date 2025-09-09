import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../../data/portfolioData';

const Certifications: React.FC = () => {
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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
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
              Certifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications demonstrating expertise and commitment to continuous learning
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden"
              >
                {/* Hover Effect Overlay - positioned behind content */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10"></div>
                
                {/* Certification Icon */}
                <div className="flex items-center mb-4 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-lg flex items-center justify-center text-white text-2xl font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                    🏆
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                {/* Certification Details */}
                <div className="space-y-3 relative z-10">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      Issued: {cert.date}
                    </span>
                  </div>

                  {cert.credentialId && (
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        ID: {cert.credentialId}
                      </span>
                    </div>
                  )}

                  {cert.credentialUrl && (
                    <div className="pt-2">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        View Credential
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Professional Development */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Professional Development
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎓</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Academic Excellence</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Magna Cum Laude Graduate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔬</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Leadership</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">4+ Years Research Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Continuous Learning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Ongoing Master's Program</p>
              </div>
            </div>

            {/* Professional Memberships */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                Professional Memberships
              </h4>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold mr-3">
                    ICpEP
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">Institute of Computer Engineers of the Philippines</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Lifetime Member (R1-2019-001)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
