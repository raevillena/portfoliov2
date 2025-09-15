#!/usr/bin/env node

/**
 * Optimized avatar cropping and conversion script
 * Creates a better-cropped SVG with improved visual results
 * 
 * Usage: node scripts/optimizeAvatar.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the PNG file and convert to base64
const pngPath = path.join(__dirname, '../public/avatar.png');
const svgPath = path.join(__dirname, '../public/avatar-optimized.svg');

try {
  // Check if PNG exists
  if (!fs.existsSync(pngPath)) {
    console.error('❌ avatar.png not found in public folder');
    process.exit(1);
  }

  // Read PNG file
  const pngBuffer = fs.readFileSync(pngPath);
  const base64PNG = pngBuffer.toString('base64');
  
  // Create optimized SVG with better cropping
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Circular clipping path for perfect circle -->
    <clipPath id="circle">
      <circle cx="200" cy="200" r="200"/>
    </clipPath>
    
    <!-- Gradient overlay for better visual appeal -->
    <linearGradient id="overlay" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:rgba(0,0,0,0.1);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgba(0,0,0,0.3);stop-opacity:1" />
    </linearGradient>
    
    <!-- Shadow filter for depth -->
    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="rgba(0,0,0,0.3)"/>
    </filter>
  </defs>
  
  <!-- Background circle for better contrast -->
  <circle cx="200" cy="200" r="200" fill="#f3f4f6" stroke="#e5e7eb" stroke-width="2"/>
  
  <!-- Main image with optimized positioning -->
  <image href="data:image/png;base64,${base64PNG}" 
         x="0" y="0" width="400" height="400" 
         clip-path="url(#circle)"
         filter="url(#shadow)"
         style="object-fit: cover; object-position: center;"/>
  
  <!-- Subtle overlay for professional look -->
  <circle cx="200" cy="200" r="200" fill="url(#overlay)" clip-path="url(#circle)"/>
</svg>`;

  // Write optimized SVG file
  fs.writeFileSync(svgPath, svgContent);
  
  console.log('✅ Successfully created optimized avatar.svg');
  console.log('📁 Location: public/avatar-optimized.svg');
  console.log('🎨 Improvements:');
  console.log('   • Better circular cropping');
  console.log('   • Subtle shadow for depth');
  console.log('   • Professional gradient overlay');
  console.log('   • Optimized object positioning');
  console.log('💡 You can now update your portfolio to use /avatar-optimized.svg');
  
} catch (error) {
  console.error('❌ Error optimizing avatar:', error.message);
  process.exit(1);
}
