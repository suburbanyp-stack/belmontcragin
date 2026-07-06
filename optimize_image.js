const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'community_cover.png');
const outputPath = path.join(__dirname, 'community_cover_optimized.webp');

async function optimizeImage() {
  try {
    if (!fs.existsSync(inputPath)) {
      console.error(`Input file not found at ${inputPath}`);
      return;
    }
    
    console.log(`Optimizing image: ${inputPath}`);
    
    // Resize to max 1200px width while maintaining aspect ratio, and convert to webp with quality 80
    await sharp(inputPath)
      .resize({ width: 1200 })
      .webp({ quality: 80 })
      .toFile(outputPath);
      
    const rawStats = fs.statSync(inputPath);
    const optimizedStats = fs.statSync(outputPath);
    
    const rawKB = rawStats.size / 1024;
    const optimizedKB = optimizedStats.size / 1024;
    const savings = ((rawKB - optimizedKB) / rawKB) * 100;
    
    console.log(`Image successfully optimized!`);
    console.log(`Original PNG size: ${rawKB.toFixed(2)} KB`);
    console.log(`Optimized WebP size: ${optimizedKB.toFixed(2)} KB`);
    console.log(`File size reduction: ${savings.toFixed(1)}%`);
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();
