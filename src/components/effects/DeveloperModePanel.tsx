import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDeveloperMode } from '../../contexts/DeveloperModeContext';

interface DeveloperModePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeveloperModePanel: React.FC<DeveloperModePanelProps> = ({ isOpen, onClose }) => {
  const {
    isDeveloperMode,
    toggleDeveloperMode,
    showTerminal,
    toggleTerminal,
    showMatrix,
    toggleMatrix,
    showCodeRain,
    toggleCodeRain,
    showGlitch,
    toggleGlitch
  } = useDeveloperMode();

  const [isMinimized, setIsMinimized] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <motion.div
          className={`terminal-window ${isMinimized ? 'h-12' : 'h-96 w-80'}`}
          drag
          dragMomentum={false}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        >
          <div className="terminal-header">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-2 font-mono text-sm">Dev Mode Control</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-black hover:text-gray-600 transition-colors"
              >
                {isMinimized ? '□' : '−'}
              </button>
              <button
                onClick={onClose}
                className="text-black hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
          
          <AnimatePresence>
            {!isMinimized && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="terminal-content"
              >
                <div className="space-y-4">
                  {/* Main Toggle */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm">Developer Mode</span>
                    <button
                      onClick={toggleDeveloperMode}
                      className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                        isDeveloperMode 
                          ? 'bg-green-500 text-black' 
                          : 'bg-gray-600 text-gray-300'
                      }`}
                    >
                      {isDeveloperMode ? 'ON' : 'OFF'}
                    </button>
                  </div>

                  {/* Effect Controls */}
                  <div className="space-y-3">
                    <h3 className="font-mono text-sm text-green-400">Effects:</h3>
                    
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs">Matrix Rain</span>
                      <button
                        onClick={toggleMatrix}
                        className={`px-2 py-1 rounded text-xs font-mono transition-all ${
                          showMatrix 
                            ? 'bg-green-500 text-black' 
                            : 'bg-gray-600 text-gray-300'
                        }`}
                      >
                        {showMatrix ? 'ON' : 'OFF'}
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs">Code Rain</span>
                      <button
                        onClick={toggleCodeRain}
                        className={`px-2 py-1 rounded text-xs font-mono transition-all ${
                          showCodeRain 
                            ? 'bg-green-500 text-black' 
                            : 'bg-gray-600 text-gray-300'
                        }`}
                      >
                        {showCodeRain ? 'ON' : 'OFF'}
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs">Terminal</span>
                      <button
                        onClick={toggleTerminal}
                        className={`px-2 py-1 rounded text-xs font-mono transition-all ${
                          showTerminal 
                            ? 'bg-green-500 text-black' 
                            : 'bg-gray-600 text-gray-300'
                        }`}
                      >
                        {showTerminal ? 'ON' : 'OFF'}
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs">Glitch Text</span>
                      <button
                        onClick={toggleGlitch}
                        className={`px-2 py-1 rounded text-xs font-mono transition-all ${
                          showGlitch 
                            ? 'bg-green-500 text-black' 
                            : 'bg-gray-600 text-gray-300'
                        }`}
                      >
                        {showGlitch ? 'ON' : 'OFF'}
                      </button>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="pt-4 border-t border-green-500 border-opacity-30">
                    <p className="font-mono text-xs text-green-300">
                      Welcome to Developer Mode!<br/>
                      Toggle effects and enjoy the geeky experience.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DeveloperModePanel;
