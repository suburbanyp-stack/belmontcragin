const fs = require('fs');
const path = require('path');

const filesToCopy = [
  'index.html',
  'style.css',
  'app.js',
  'community_cover_optimized.webp',
  'privacy.html',
  'terms.html'
];

const srcDir = __dirname;
const destDir = path.join(__dirname, 'dist');

function build() {
  console.log('Starting build process for BelmontCragin.com...');
  
  // Create dist directory if it doesn't exist, clear it if it does
  if (fs.existsSync(destDir)) {
    console.log('Cleaning existing dist directory...');
    fs.rmSync(destDir, { recursive: true, force: true });
  }
  
  fs.mkdirSync(destDir);
  console.log('Created dist/ directory.');

  // Copy each production file
  filesToCopy.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);
    
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      const stats = fs.statSync(destPath);
      console.log(`Copied ${file} -> dist/${file} (${(stats.size / 1024).toFixed(2)} KB)`);
    } else {
      console.warn(`Warning: Source file not found: ${file}`);
    }
  });

  console.log('Build completed successfully! Production-ready files are in the dist/ folder.');
}

build();
