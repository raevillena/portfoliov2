import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDeveloperMode } from '../../contexts/DeveloperModeContext';
import GlitchText from '../effects/GlitchText';
import { personalInfo } from '../../data/portfolioData';

const Hero: React.FC = () => {
  const { isDeveloperMode } = useDeveloperMode();

  // Animation variants for different elements
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
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.2
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDeveloperMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-800 cyber-grid' 
        : 'bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated background shapes */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-secondary-200 dark:bg-secondary-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-8 left-1/2 w-80 h-80 bg-pink-200 dark:bg-pink-800 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <motion.div
                className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-2xl ring-4 ${
                  isDeveloperMode 
                    ? 'ring-green-400 ring-opacity-50' 
                    : 'ring-white dark:ring-gray-800'
                }`}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              >
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - Professional Headshot`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-r from-primary-500 to-secondary-600 flex items-center justify-center text-white text-4xl sm:text-5xl font-bold">
                          ${personalInfo.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      `;
                    }
                  }}
                />
              </motion.div>
              {/* Floating elements around profile */}
              <motion.div
                className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${
                  isDeveloperMode 
                    ? 'bg-cyan-400' 
                    : 'bg-yellow-400'
                }`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              <motion.div
                className={`absolute -bottom-2 -left-2 w-4 h-4 rounded-full ${
                  isDeveloperMode 
                    ? 'bg-green-400' 
                    : 'bg-green-400'
                }`}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${
              isDeveloperMode 
                ? 'text-white neon-glow' 
                : 'text-gray-900 dark:text-white'
            }`}
          >
            <GlitchText isActive={isDeveloperMode}>
              <span className={isDeveloperMode ? 'text-white' : 'gradient-text'}>
                {personalInfo.name}
              </span>
            </GlitchText>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className={`text-xl sm:text-2xl lg:text-3xl mb-6 font-medium ${
              isDeveloperMode 
                ? 'text-cyan-300' 
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            <GlitchText isActive={isDeveloperMode}>
              {personalInfo.title}
            </GlitchText>
          </motion.h2>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            className={`text-lg sm:text-xl mb-8 max-w-4xl mx-auto leading-relaxed ${
              isDeveloperMode 
                ? 'text-gray-200' 
                : 'text-gray-600 dark:text-gray-400'
            }`}
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/projects"
                className={`inline-flex items-center px-8 py-4 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group ${
                  isDeveloperMode 
                    ? 'dev-mode-btn neon-border hover-glow' 
                    : 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
                }`}
              >
                <span>View Projects</span>
                <motion.svg
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                to="/skills"
                className={`inline-flex items-center px-8 py-4 font-semibold rounded-full transition-all duration-300 ${
                  isDeveloperMode 
                    ? 'dev-mode-btn neon-border hover-glow' 
                    : 'border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-600 dark:hover:bg-primary-400 hover:text-white dark:hover:text-white'
                }`}
              >
                <span>View Skills</span>
                <motion.svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className={`flex flex-col items-center ${
              isDeveloperMode 
                ? 'text-gray-300' 
                : 'text-gray-500 dark:text-gray-400'
            }`}>
              <span className="text-sm mb-2">Scroll to explore</span>
              <motion.div
                className={`w-6 h-10 border-2 rounded-full flex justify-center ${
                  isDeveloperMode 
                    ? 'border-gray-300' 
                    : 'border-gray-400 dark:border-gray-500'
                }`}
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              >
                <motion.div
                  className={`w-1 h-3 rounded-full mt-2 ${
                    isDeveloperMode 
                      ? 'bg-gray-300' 
                      : 'bg-gray-400 dark:bg-gray-500'
                  }`}
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
