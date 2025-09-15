#!/usr/bin/env node

/**
 * Advanced avatar cropping with customizable positioning
 * Allows you to fine-tune the crop area for best results
 * 
 * Usage: node scripts/advancedAvatarCrop.js [options]
 * Options:
 *   --scale 1.2    Scale factor (1.0 = original, 1.2 = 20% larger)
 *   --offset-x 0   Horizontal offset (-50 to 50)
 *   --offset-y -10 Vertical offset (-50 to 50)
 *   --brightness 1.1 Brightness multiplier (0.5 to 2.0)
 *   --contrast 1.1  Contrast multiplier (0.5 to 2.0)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
  scale: 1.2,
  offsetX: 0,
  offsetY: -10,
  brightness: 1.1,
  contrast: 1.1
};

// Parse arguments
for (let i = 0; i < args.length; i += 2) {
  const key = args[i].replace('--', '');
  const value = parseFloat(args[i + 1]);
  
  if (key === 'scale') options.scale = value;
  else if (key === 'offset-x') options.offsetX = value;
  else if (key === 'offset-y') options.offsetY = value;
  else if (key === 'brightness') options.brightness = value;
  else if (key === 'contrast') options.contrast = value;
}

// Read the PNG file and convert to base64
const pngPath = path.join(__dirname, '../public/avatar.png');
const svgPath = path.join(__dirname, '../public/avatar-cropped.svg');

try {
  // Check if PNG exists
  if (!fs.existsSync(pngPath)) {
    console.error('❌ avatar.png not found in public folder');
    process.exit(1);
  }

  // Read PNG file
  const pngBuffer = fs.readFileSync(pngPath);
  const base64PNG = pngBuffer.toString('base64');
  
  // Calculate positioning based on scale and offset
  const scaledSize = 400 * options.scale;
  const offsetX = (400 - scaledSize) / 2 + options.offsetX;
  const offsetY = (400 - scaledSize) / 2 + options.offsetY;
  
  // Create advanced SVG with customizable cropping
  const svgContent = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Circular clipping path -->
    <clipPath id="circle">
      <circle cx="200" cy="200" r="200"/>
    </clipPath>
    
    <!-- Enhanced filters for better image quality -->
    <filter id="enhance" x="-50%" y="-50%" width="200%" height="200%">
      <feComponentTransfer>
        <feFuncR type="linear" slope="${options.contrast}" intercept="${(1 - options.contrast) * 0.5}"/>
        <feFuncG type="linear" slope="${options.contrast}" intercept="${(1 - options.contrast) * 0.5}"/>
        <feFuncB type="linear" slope="${options.contrast}" intercept="${(1 - options.contrast) * 0.5}"/>
      </feComponentTransfer>
      <feComponentTransfer>
        <feFuncA type="linear" slope="${options.brightness}" intercept="0"/>
      </feComponentTransfer>
      <feDropShadow dx="0" dy="6" stdDeviation="12" flood-color="rgba(0,0,0,0.25)"/>
    </filter>
    
    <!-- Professional gradient overlay -->
    <radialGradient id="overlay" cx="50%" cy="30%" r="70%">
      <stop offset="0%" style="stop-color:rgba(255,255,255,0.1);stop-opacity:1" />
      <stop offset="50%" style="stop-color:rgba(0,0,0,0.05);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgba(0,0,0,0.2);stop-opacity:1" />
    </radialGradient>
  </defs>
  
  <!-- Background with subtle border -->
  <circle cx="200" cy="200" r="200" fill="#f8fafc" stroke="#e2e8f0" stroke-width="1"/>
  
  <!-- Main image with advanced positioning and filters -->
  <image href="data:image/png;base64,${base64PNG}" 
         x="${offsetX}" y="${offsetY}" width="${scaledSize}" height="${scaledSize}" 
         clip-path="url(#circle)"
         filter="url(#enhance)"
         style="object-fit: cover; object-position: center;"/>
  
  <!-- Professional overlay -->
  <circle cx="200" cy="200" r="200" fill="url(#overlay)" clip-path="url(#circle)"/>
  
  <!-- Subtle inner border for definition -->
  <circle cx="200" cy="200" r="195" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2" clip-path="url(#circle)"/>
</svg>`;

  // Write advanced SVG file
  fs.writeFileSync(svgPath, svgContent);
  
  console.log('✅ Successfully created advanced cropped avatar.svg');
  console.log('📁 Location: public/avatar-cropped.svg');
  console.log('🎨 Current settings:');
  console.log(`   • Scale: ${options.scale}x (${options.scale > 1 ? 'zoomed in' : options.scale < 1 ? 'zoomed out' : 'original size'})`);
  console.log(`   • Offset X: ${options.offsetX}px (${options.offsetX > 0 ? 'right' : options.offsetX < 0 ? 'left' : 'centered'})`);
  console.log(`   • Offset Y: ${options.offsetY}px (${options.offsetY > 0 ? 'down' : options.offsetY < 0 ? 'up' : 'centered'})`);
  console.log(`   • Brightness: ${options.brightness}x`);
  console.log(`   • Contrast: ${options.contrast}x`);
  console.log('');
  console.log('💡 To adjust cropping, run:');
  console.log('   node advancedAvatarCrop.js --scale 1.3 --offset-y -15');
  console.log('   node advancedAvatarCrop.js --scale 0.9 --offset-x 10');
  
} catch (error) {
  console.error('❌ Error creating advanced cropped avatar:', error.message);
  process.exit(1);
}
