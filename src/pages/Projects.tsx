import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useDeveloperMode } from '../contexts/DeveloperModeContext';
import GlitchText from '../components/effects/GlitchText';
import ImageModal from '../components/ImageModal';
import { projects } from '../data/portfolioData';

const Projects: React.FC = () => {
  const { isDeveloperMode } = useDeveloperMode();
  const navigate = useNavigate();
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
    projectTitle: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    projectTitle: ''
  });

  const openModal = (images: string[], index: number, projectTitle: string) => {
    setModalState({
      isOpen: true,
      images,
      currentIndex: index,
      projectTitle
    });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const navigateImage = (index: number) => {
    setModalState(prev => ({ ...prev, currentIndex: index }));
  };

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
        duration: 0.6
      }
    }
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className={`min-h-screen py-20 ${
      isDeveloperMode 
        ? 'bg-black cyber-grid' 
        : 'bg-white dark:bg-gray-900'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className={`text-4xl sm:text-5xl font-bold mb-4 ${
              isDeveloperMode 
                ? 'text-green-400 neon-glow' 
                : 'text-gray-900 dark:text-white'
            }`}>
              <GlitchText isActive={isDeveloperMode}>
                🚀 My Projects
              </GlitchText>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive showcase of <span className="font-semibold text-primary-600 dark:text-primary-400">innovative solutions</span> spanning 
              <span className="font-semibold text-secondary-600 dark:text-secondary-400"> full-stack development</span>, 
              <span className="font-semibold text-green-600 dark:text-green-400"> IoT systems</span>, and 
              <span className="font-semibold text-purple-600 dark:text-purple-400"> AI/ML applications</span>
            </p>
            <div className="flex items-center justify-center mt-8 space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Production Ready
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Open Source
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Research Based
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                Industry 4.0
              </span>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover="hover"
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Project Image/Header */}
                <div className="h-48 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
                  {/* Project Images */}
                  {project.images && project.images.length > 0 ? (
                    <div className="absolute inset-0">
                      <img
                        src={project.images[0]}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover"
                        loading="eager"
                        onError={(e) => {
                          // Show fallback content instead of hiding
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20 flex items-center justify-center">
                                <div class="text-center">
                                  <div class="text-4xl mb-2">🗺️</div>
                                  <div class="text-sm text-gray-600 dark:text-gray-400">${project.title}</div>
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                      {/* Overlay for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  ) : (project.id === 'dashboard' || project.id === 'energymon' || project.id === 'vrms-frontend' || 
                    project.id === 'umans-frontend' || project.id === 'adminer-node' || project.id === 'arec-gis') ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/20 dark:to-purple-400/20">
                      {/* Mock Browser Window */}
                      <div className="absolute top-4 left-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        {/* Browser Header */}
                        <div className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-t-lg">
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          </div>
                          <div className="flex-1 mx-3">
                            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded"></div>
                          </div>
                        </div>
                        {/* Browser Content */}
                        <div className="p-4 h-32">
                          <div className="space-y-2">
                            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
                            <div className="flex space-x-2 mt-3">
                              <div className="w-8 h-6 bg-blue-200 dark:bg-blue-800 rounded"></div>
                              <div className="w-8 h-6 bg-green-200 dark:bg-green-800 rounded"></div>
                              <div className="w-8 h-6 bg-purple-200 dark:bg-purple-800 rounded"></div>
                            </div>
                            <div className="mt-3 space-y-1">
                              <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded w-2/3"></div>
                              <div className="h-1 bg-gray-200 dark:bg-gray-600 rounded w-1/3"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    /* Non-Web App Projects - Icons */
                    <div className="flex items-center justify-between h-full p-6">
                      {/* Main Tech Icon */}
                      <div className="text-6xl">
                        {project.id === 'mayhemcreations-shawn-denis' && '🎨'}
                        {project.id === 'umans-backend' && '⚙️'}
                        {project.id === 'zero-fossil-fuel-bioethanol-distiller' && '⚗️'}
                        {project.id === 'remote-monitoring-control-system' && '📡'}
                        {project.id === 'black-garlic-classification' && '🤖'}
                        {project.id === 'mmsu-industry-4-iot-platform' && '🏭'}
                        {project.id === '3-stage-gac-deodorizing-unit' && '🔬'}
                        {project.id === 'multi-protocol-platform-industry-4' && '🔗'}
                        {project.id === 'virtual-research-management-system' && '📚'}
                        {project.id === 'rooftop-solar-panel-detection' && '☀️'}
                        {project.id === 'iot-integrated-mini-pervaporation-distiller' && '⚗️'}
                      </div>
                      
                      {/* Tech Stack Icons */}
                      <div className="flex space-x-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <div key={tech} className="w-10 h-10 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center shadow-sm">
                            {tech === 'React' && <span className="text-blue-500 font-bold text-sm">R</span>}
                            {tech === 'TypeScript' && <span className="text-blue-600 font-bold text-sm">TS</span>}
                            {tech === 'Node.js' && <span className="text-green-500 font-bold text-sm">N</span>}
                            {tech === 'Express' && <span className="text-gray-600 font-bold text-sm">E</span>}
                            {tech === 'Material-UI' && <span className="text-blue-400 font-bold text-sm">M</span>}
                            {tech === 'Vite' && <span className="text-purple-500 font-bold text-sm">V</span>}
                            {tech === 'IoT' && <span className="text-orange-500 font-bold text-sm">I</span>}
                            {tech === 'Python' && <span className="text-yellow-500 font-bold text-sm">P</span>}
                            {tech === 'PostgreSQL' && <span className="text-blue-700 font-bold text-sm">P</span>}
                            {tech === 'Sequelize' && <span className="text-blue-400 font-bold text-sm">S</span>}
                            {tech === 'JWT' && <span className="text-purple-600 font-bold text-sm">J</span>}
                            {tech === 'REST API' && <span className="text-green-600 font-bold text-sm">R</span>}
                            {tech === 'React Query' && <span className="text-pink-500 font-bold text-sm">Q</span>}
                            {tech === 'React Router' && <span className="text-red-500 font-bold text-sm">R</span>}
                            {tech === 'Formik' && <span className="text-indigo-500 font-bold text-sm">F</span>}
                            {tech === 'Leaflet' && <span className="text-green-600 font-bold text-sm">L</span>}
                            {tech === 'Mapbox' && <span className="text-blue-500 font-bold text-sm">M</span>}
                            {tech === 'GIS' && <span className="text-green-700 font-bold text-sm">G</span>}
                            {tech === 'Chart.js' && <span className="text-orange-400 font-bold text-sm">C</span>}
                            {tech === 'Database Management' && <span className="text-gray-600 font-bold text-sm">D</span>}
                            {tech === 'Authentication' && <span className="text-red-600 font-bold text-sm">A</span>}
                            {tech === 'Content Management' && <span className="text-purple-500 font-bold text-sm">C</span>}
                            {tech === 'Collaborative Development' && <span className="text-teal-500 font-bold text-sm">C</span>}
                            {tech === 'Creative Design' && <span className="text-pink-600 font-bold text-sm">C</span>}
                            {tech === 'Spatial Data' && <span className="text-green-500 font-bold text-sm">S</span>}
                            {tech === 'Agricultural Technology' && <span className="text-green-600 font-bold text-sm">A</span>}
                            {tech === 'Responsive Design' && <span className="text-indigo-600 font-bold text-sm">R</span>}
                            {tech === 'Real-time Monitoring' && <span className="text-orange-600 font-bold text-sm">R</span>}
                            {tech === 'Energy Analytics' && <span className="text-yellow-600 font-bold text-sm">E</span>}
                            {tech === 'State Management' && <span className="text-blue-500 font-bold text-sm">S</span>}
                            {tech === 'Axios' && <span className="text-purple-500 font-bold text-sm">A</span>}
                            {tech === 'Custom UI' && <span className="text-gray-500 font-bold text-sm">U</span>}
                            {tech === 'Adminer' && <span className="text-blue-600 font-bold text-sm">A</span>}
                            {tech === 'Renewable Energy' && <span className="text-green-500 font-bold text-sm">R</span>}
                            {tech === 'Bioethanol Production' && <span className="text-yellow-500 font-bold text-sm">B</span>}
                            {tech === 'Sustainable Technology' && <span className="text-green-600 font-bold text-sm">S</span>}
                            {tech === 'Research' && <span className="text-purple-600 font-bold text-sm">R</span>}
                            {tech === 'IOP Publishing' && <span className="text-blue-700 font-bold text-sm">I</span>}
                            {tech === 'Remote Monitoring' && <span className="text-orange-500 font-bold text-sm">R</span>}
                            {tech === 'Control Systems' && <span className="text-gray-600 font-bold text-sm">C</span>}
                            {tech === 'Energy Management' && <span className="text-yellow-600 font-bold text-sm">E</span>}
                            {tech === 'Real-time Data' && <span className="text-red-500 font-bold text-sm">R</span>}
                            {tech === 'Convolutional Neural Networks' && <span className="text-purple-500 font-bold text-sm">C</span>}
                            {tech === 'Computer Vision' && <span className="text-blue-500 font-bold text-sm">C</span>}
                            {tech === 'TensorFlow' && <span className="text-orange-600 font-bold text-sm">T</span>}
                            {tech === 'PyTorch' && <span className="text-red-600 font-bold text-sm">P</span>}
                            {tech === 'Image Classification' && <span className="text-indigo-500 font-bold text-sm">I</span>}
                            {tech === 'Cloud Computing' && <span className="text-blue-400 font-bold text-sm">C</span>}
                            {tech === 'Server Development' && <span className="text-gray-500 font-bold text-sm">S</span>}
                            {tech === 'Industry 4.0' && <span className="text-blue-600 font-bold text-sm">I</span>}
                            {tech === 'Scalable Architecture' && <span className="text-green-500 font-bold text-sm">S</span>}
                            {tech === 'Patent Development' && <span className="text-purple-600 font-bold text-sm">P</span>}
                            {tech === 'GAC Technology' && <span className="text-gray-600 font-bold text-sm">G</span>}
                            {tech === 'Ethanol Treatment' && <span className="text-yellow-500 font-bold text-sm">E</span>}
                            {tech === 'Odor Control' && <span className="text-orange-500 font-bold text-sm">O</span>}
                            {tech === 'Multi-Protocol Integration' && <span className="text-indigo-600 font-bold text-sm">M</span>}
                            {tech === 'Smart Manufacturing' && <span className="text-blue-500 font-bold text-sm">S</span>}
                            {tech === 'Web Development' && <span className="text-green-600 font-bold text-sm">W</span>}
                            {tech === 'Research Management' && <span className="text-purple-500 font-bold text-sm">R</span>}
                            {tech === 'Project Management' && <span className="text-blue-600 font-bold text-sm">P</span>}
                            {tech === 'Database Design' && <span className="text-gray-600 font-bold text-sm">D</span>}
                            {tech === 'User Interface' && <span className="text-pink-500 font-bold text-sm">U</span>}
                            {tech === 'Vision Transformers' && <span className="text-purple-600 font-bold text-sm">V</span>}
                            {tech === 'Satellite Imagery' && <span className="text-blue-500 font-bold text-sm">S</span>}
                            {tech === 'Transfer Learning' && <span className="text-green-500 font-bold text-sm">T</span>}
                            {tech === 'Renewable Energy Planning' && <span className="text-yellow-600 font-bold text-sm">R</span>}
                            {tech === 'Embedded Systems' && <span className="text-gray-500 font-bold text-sm">E</span>}
                            {tech === 'Pervaporation' && <span className="text-indigo-500 font-bold text-sm">P</span>}
                            {tech === 'Advanced Distillation Methods' && <span className="text-orange-600 font-bold text-sm">A</span>}
                          </div>
                        ))}
                      </div>
                  </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Project Title and Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      {/* Private Badge */}
                      {project.isPrivate && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                          </svg>
                          Private
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* Status Badge */}
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      project.status === 'completed' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : project.status === 'in-progress'
                        ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                        {project.status === 'completed' && '✅'}
                        {project.status === 'in-progress' && '🚧'}
                        {project.status === 'planned' && '📋'}
                        {' '}{project.status.replace('-', ' ').toUpperCase()}
                    </span>
                    </div>
                  </div>

                  {/* Project Description - GitHub Style */}
                  <div className="mb-6">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.longDescription}
                  </p>
                  </div>

                  {/* Key Features - GitHub Style */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      ✨ Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: featureIndex * 0.1 
                          }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <span className="text-green-500 mr-3 mt-1">•</span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies - GitHub Style */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                      🛠️ Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: techIndex * 0.05 
                          }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md font-mono hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Images Gallery */}
                  {project.images && project.images.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center">
                        📸 Project Screenshots
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.images.map((image, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: index * 0.1 
                            }}
                            viewport={{ once: true }}
                            className="relative aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => openModal(project.images!, index, project.title)}
                          >
                            <img
                              src={image}
                              alt={`${project.title} screenshot ${index + 1}`}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            {/* Temporarily disabled overlay for debugging */}
                            {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-2">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                                <span className="text-white text-sm font-medium">View Full Size</span>
                              </div>
                            </div> */}
                            <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {index + 1}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Project Links - GitHub Style */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors group"
                      >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                          <span className="group-hover:underline">View Code</span>
                      </a>
                    )}
                    {project.liveUrl && !project.isPrivate && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold rounded-lg hover:from-green-700 hover:to-emerald-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 group"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        <span className="group-hover:underline">Live Demo</span>
                      </a>
                    )}
                    {project.isPrivate && (
                      <button
                        onClick={() => navigate('/contact')}
                        className="flex items-center px-4 py-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-semibold rounded-lg hover:from-amber-700 hover:to-orange-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 group"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="group-hover:underline">Request Demo</span>
                      </button>
                    )}
                    </div>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        images={modalState.images}
        currentIndex={modalState.currentIndex}
        onNavigate={navigateImage}
        projectTitle={modalState.projectTitle}
      />
    </div>
  );
};

export default Projects;
