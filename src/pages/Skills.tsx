import React from 'react';
import { motion } from 'framer-motion';
import { skills, competencies } from '../data/portfolioData';

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.03
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case 'expert':
        return 'from-green-500 to-emerald-600';
      case 'advanced':
        return 'from-blue-500 to-cyan-600';
      case 'intermediate':
        return 'from-yellow-500 to-orange-600';
      case 'beginner':
        return 'from-gray-400 to-gray-600';
      default:
        return 'from-gray-400 to-gray-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return '🎨';
      case 'backend':
        return '⚙️';
      case 'database':
        return '🗄️';
      case 'tools':
        return '🔧';
      case 'other':
        return '🚀';
      default:
        return '💻';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Comprehensive expertise in full-stack development, IoT systems, AI/ML, and research technologies
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Skills Overview
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {skills.length} technologies across {Object.keys(skillsByCategory).length} categories
              </p>
            </motion.div>

            {/* Competencies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {competencies.map((competency, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-4xl mb-4">{competency.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {competency.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {competency.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Detailed Skills by Category */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Detailed Skills
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Proficiency levels and years of experience
              </p>
            </motion.div>

            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="mb-12"
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">{getCategoryIcon(category)}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                    {category} Development
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      variants={skillVariants}
                      whileHover="hover"
                      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.yearsOfExperience}y
                        </span>
                      </div>
                      
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                          <span>Proficiency</span>
                          <span className="capitalize">{skill.proficiency}</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full bg-gradient-to-r ${getProficiencyColor(skill.proficiency)}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(skill.proficiency === 'expert' ? 100 : skill.proficiency === 'advanced' ? 80 : skill.proficiency === 'intermediate' ? 60 : 40)}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <span>Experience</span>
                        <span>{skill.yearsOfExperience} years</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Experience Summary
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {skills.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Technologies</div>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {skills.filter(s => s.proficiency === 'expert').length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Expert Level</div>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {Math.max(...skills.map(s => s.yearsOfExperience))}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Max Experience</div>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {Object.keys(skillsByCategory).length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Categories</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
