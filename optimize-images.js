const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const publicDir = path.join(__dirname, 'public');
  const images = ['logo.png', 'fav.png'];
  
  console.log('Starting image optimization...');
  
  for (const imageName of images) {
    const inputPath = path.join(publicDir, imageName);
    const backupPath = path.join(publicDir, `${imageName}.backup`);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`❌ ${imageName} not found`);
      continue;
    }
    
    try {
      // Create backup
      fs.copyFileSync(inputPath, backupPath);
      console.log(`📁 Created backup: ${imageName}.backup`);
      
      // Get original file stats
      const originalStats = fs.statSync(inputPath);
      const originalSize = originalStats.size;
      
      // Optimize the image
      if (imageName === 'logo.png') {
        // Logo optimization - resize to reasonable dimensions and compress
        await sharp(inputPath)
          .resize(512, 512, { 
            fit: 'inside',
            withoutEnlargement: true 
          })
          .png({ 
            quality: 90,
            compressionLevel: 9,
            palette: true
          })
          .toFile(inputPath + '.tmp');
      } else if (imageName === 'fav.png') {
        // Favicon optimization - much smaller size needed
        await sharp(inputPath)
          .resize(256, 256, { 
            fit: 'inside',
            withoutEnlargement: true 
          })
          .png({ 
            quality: 90,
            compressionLevel: 9,
            palette: true
          })
          .toFile(inputPath + '.tmp');
      }
      
      // Replace original with optimized version
      fs.renameSync(inputPath + '.tmp', inputPath);
      
      // Get new file stats
      const newStats = fs.statSync(inputPath);
      const newSize = newStats.size;
      const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      
      console.log(`✅ ${imageName}: ${(originalSize/1024/1024).toFixed(2)}MB → ${(newSize/1024/1024).toFixed(2)}MB (${reduction}% reduction)`);
      
    } catch (error) {
      console.error(`❌ Error optimizing ${imageName}:`, error.message);
      // Restore backup if optimization failed
      if (fs.existsSync(backupPath)) {
        fs.copyFileSync(backupPath, inputPath);
        fs.unlinkSync(backupPath);
      }
    }
  }
  
  console.log('\n🎉 Image optimization complete!');
  console.log('💡 You can delete the .backup files if everything looks good.');
}

// Run optimization
optimizeImages().catch(console.error);
