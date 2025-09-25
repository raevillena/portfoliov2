import React from 'react';
import { motion } from 'framer-motion';

const Profile: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.02
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

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Professional Profile
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-600 mx-auto rounded-full"></div>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 sm:p-12 shadow-xl"
          >
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              >
                I am a passionate <strong className="text-primary-600 dark:text-primary-400">Software Engineer</strong> and 
                <strong className="text-primary-600 dark:text-primary-400"> IoT & Full-Stack Developer</strong> with extensive 
                experience in building innovative solutions that bridge the gap between cutting-edge technology and real-world applications.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              >
                My expertise spans across <strong className="text-primary-600 dark:text-primary-400">full-stack development</strong> 
                using modern technologies like React, Node.js, and TypeScript, to <strong className="text-primary-600 dark:text-primary-400">IoT systems</strong> 
                with ESP32 microcontrollers and MQTT protocols. I specialize in creating robust, scalable applications that integrate 
                seamlessly with cloud infrastructure and provide real-time monitoring capabilities.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              >
                As a <strong className="text-primary-600 dark:text-primary-400">researcher</strong> at Mariano Marcos State University, 
                I lead projects in renewable energy systems, AI/ML applications, and smart manufacturing solutions. My work focuses on 
                developing sustainable technologies that contribute to environmental conservation and industrial efficiency.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              >
                I have a strong foundation in <strong className="text-primary-600 dark:text-primary-400">DevOps practices</strong>, 
                including Docker containerization, Kubernetes orchestration, and CI/CD pipelines. My experience with cloud platforms 
                and infrastructure management enables me to deploy and maintain production-ready applications with high availability and security.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                With a <strong className="text-primary-600 dark:text-primary-400">Master's degree in Computer Engineering </strong> 
                and a <strong className="text-primary-600 dark:text-primary-400">Bachelor's degree</strong> completed with 
                Magna Cum Laude honors, I combine academic excellence with practical experience to deliver innovative solutions that 
                make a meaningful impact in the technology landscape.
              </motion.p>
            </div>

            {/* Key Highlights */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Magna Cum Laude</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Academic Excellence</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Research Leader</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">4+ Years Experience</p>
              </div>
              <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Innovation Focus</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">IoT & AI Solutions</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
