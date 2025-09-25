import React from 'react';
import Hero from '../components/sections/Hero';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import Competencies from '../components/sections/Competencies';
import ContactPreview from '../components/sections/ContactPreview';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Core Competencies - Technical Focus */}
      <Competencies />
      
      {/* Featured Projects - Main Highlight */}
      <ProjectsPreview />
      
      {/* Quick Contact */}
      <ContactPreview />
    </div>
  );
};

export default Home;
