import React from 'react';

const DarkModeTest: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const hasDarkClass = document.documentElement.classList.contains('dark');
  const bodyStyle = window.getComputedStyle(document.body);
  const bodyBg = bodyStyle.backgroundColor;

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-w-xs">
      <div className="text-sm space-y-2">
        <p className="text-gray-900 dark:text-white font-semibold">Dark Mode Test</p>
        <div className="space-y-1 text-xs">
          <p className="text-gray-600 dark:text-gray-400">DOM Class: <span className={hasDarkClass ? 'text-green-500' : 'text-red-500'}>{hasDarkClass ? 'Yes' : 'No'}</span></p>
          <p className="text-gray-600 dark:text-gray-400">localStorage: {localStorage.getItem('theme') || 'null'}</p>
          <p className="text-gray-600 dark:text-gray-400">Body BG: {bodyBg}</p>
        </div>
        <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded text-xs">
          <p className="text-gray-900 dark:text-white">This should be dark in dark mode</p>
        </div>
        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded text-xs">
          <p className="text-blue-900 dark:text-blue-100">Blue test box</p>
        </div>
      </div>
    </div>
  );
};

export default DarkModeTest;
