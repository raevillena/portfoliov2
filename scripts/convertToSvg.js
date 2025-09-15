#!/usr/bin/env node

/**
 * Simple script to help convert PNG avatar to SVG
 * This creates a base64-encoded SVG wrapper for your PNG
 * 
 * Usage: node scripts/convertToSvg.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the PNG file and convert to base64
const pngPath = path.join(__dirname, '../public/avatar.png');
const svgPath = path.join(__dirname, '../public/avatar.svg');

try {
  // Check if PNG exists
  if (!fs.existsSync(pngPath)) {
    console.error('❌ avatar.png not found in public folder');
    process.exit(1);
  }

  // Read PNG file
  const pngBuffer = fs.readFileSync(pngPath);
  const base64PNG = pngBuffer.toString('base64');
  
  // Create SVG wrapper
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="circle">
      <circle cx="200" cy="200" r="200"/>
    </clipPath>
  </defs>
  <image href="data:image/png;base64,${base64PNG}" 
         x="0" y="0" width="400" height="400" 
         clip-path="url(#circle)"/>
</svg>`;

  // Write SVG file
  fs.writeFileSync(svgPath, svgContent);
  
  console.log('✅ Successfully created avatar.svg');
  console.log('📁 Location: public/avatar.svg');
  console.log('💡 You can now update your portfolio to use /avatar.svg instead of /avatar.png');
  
} catch (error) {
  console.error('❌ Error converting PNG to SVG:', error.message);
  process.exit(1);
}
