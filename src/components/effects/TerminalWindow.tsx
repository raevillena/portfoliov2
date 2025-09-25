import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TerminalWindowProps {
  isActive: boolean;
  onClose: () => void;
  onExitDevMode?: () => void;
}

const TerminalWindow: React.FC<TerminalWindowProps> = ({ isActive, onClose, onExitDevMode }) => {
  const [terminalOutput, setTerminalOutput] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Terminal commands and responses
  const commands: Record<string, string[]> = {
    help: [
      'Available commands:',
      '  help     - Show this help message',
      '  about    - Display information about the developer',
      '  skills   - List technical skills',
      '  projects - Show recent projects',
      '  contact  - Display contact information',
      '  clear    - Clear the terminal',
      '  matrix   - Enable matrix rain effect',
      '  glitch   - Toggle glitch effects',
      '  exit     - Close terminal and exit developer mode'
    ],
    about: [
      'Raymart O. Villena',
      'Full-Stack Developer & Researcher',
      'Specializing in React, Node.js, and AI/ML',
      'Currently pursuing PhD in Computer Science',
      'Passionate about creating innovative solutions'
    ],
    skills: [
      'Frontend: React, TypeScript, Next.js, Tailwind CSS',
      'Backend: Node.js, Express, Python, FastAPI',
      'Database: MongoDB, PostgreSQL, Redis',
      'Cloud: AWS, Azure, Docker, Kubernetes',
      'AI/ML: TensorFlow, PyTorch, Scikit-learn',
      'Tools: Git, VS Code, Linux, Jupyter'
    ],
    projects: [
      'Portfolio Website v2 - React/TypeScript portfolio',
      'AI Research Platform - Machine learning dashboard',
      'E-commerce API - RESTful API with Node.js',
      'Data Visualization Tool - Interactive charts with D3.js',
      'Mobile App - React Native cross-platform app'
    ],
    contact: [
      'Email: raymart.o.villena@gmail.com',
      'GitHub: github.com/raevillena',
      'LinkedIn: linkedin.com/in/raymart-villena',
      'Location: Ilocos Norte, Philippines'
    ],
    matrix: [
      'Matrix rain effect activated!',
      'Welcome to the Matrix...'
    ],
    glitch: [
      'Glitch effects toggled!',
      'System instability detected...'
    ],
    exit: [
      'Exiting developer mode...',
      'Returning to normal interface...',
      'Goodbye! 👋'
    ]
  };

  // Initialize terminal with welcome message
  useEffect(() => {
    if (isActive) {
      setTerminalOutput([
        'Welcome to Developer Mode Terminal',
        'Type "help" for available commands',
        ''
      ]);
    }
  }, [isActive]);

  // Auto-scroll to bottom when new output is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalOutput]);

  // Focus input when terminal opens
  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  const executeCommand = (command: string) => {
    const cmd = command.toLowerCase().trim();
    
    // Add command to output
    setTerminalOutput(prev => [...prev, `$ ${command}`]);
    
    // Add to command history
    if (cmd && cmd !== commandHistory[commandHistory.length - 1]) {
      setCommandHistory(prev => [...prev, command]);
    }
    setHistoryIndex(-1);

    // Handle special commands
    if (cmd === 'clear') {
      setTerminalOutput([]);
      return;
    }

    if (cmd === 'exit') {
      onClose();
      if (onExitDevMode) {
        onExitDevMode();
      }
      return;
    }

    // Get command response
    const response = commands[cmd] || [`Command not found: ${command}. Type "help" for available commands.`];
    
    // Add response to output with typing effect
    setTimeout(() => {
      setTerminalOutput(prev => [...prev, ...response, '']);
    }, 100);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (currentCommand.trim()) {
        executeCommand(currentCommand);
        setCurrentCommand('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentCommand('');
        } else {
          setHistoryIndex(newIndex);
          setCurrentCommand(commandHistory[newIndex]);
        }
      }
    }
  };

  if (!isActive) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
      >
        <motion.div
          className="terminal-window w-full max-w-4xl h-96"
          drag
          dragMomentum={false}
        >
          <div className="terminal-header">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="ml-2 font-mono text-sm">Developer Terminal</span>
            </div>
            <button
              onClick={onClose}
              className="text-black hover:text-gray-600 transition-colors"
            >
              ✕
            </button>
          </div>
          
          <div 
            ref={terminalRef}
            className="terminal-content overflow-y-auto"
            style={{ maxHeight: '300px' }}
          >
            {terminalOutput.map((line, index) => (
              <div key={index} className="font-mono text-sm leading-relaxed">
                {line === '' ? <br /> : (
                  <span className={line.startsWith('$') ? 'text-green-400' : 'text-green-300'}>
                    {line}
                  </span>
                )}
              </div>
            ))}
            
            <div className="flex items-center font-mono text-sm">
              <span className="text-green-400 mr-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent text-green-300 outline-none flex-1"
                placeholder="Enter command..."
                autoComplete="off"
              />
              <span className="terminal-cursor"></span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TerminalWindow;
