const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const publicDir = path.join(__dirname, 'public');
  const sourceFavicon = path.join(publicDir, 'fav.png');
  
  console.log('Generating favicon files...');
  
  if (!fs.existsSync(sourceFavicon)) {
    console.error('❌ fav.png not found in public directory');
    return;
  }
  
  const faviconSizes = [
    { size: 16, name: 'favicon-16x16.png' },
    { size: 32, name: 'favicon-32x32.png' },
    { size: 96, name: 'favicon-96x96.png' },
    { size: 192, name: 'android-chrome-192x192.png' },
    { size: 512, name: 'android-chrome-512x512.png' },
    { size: 180, name: 'apple-touch-icon.png' },
  ];
  
  try {
    for (const { size, name } of faviconSizes) {
      const outputPath = path.join(publicDir, name);
      
      await sharp(sourceFavicon)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png({ quality: 90 })
        .toFile(outputPath);
      
      console.log(`✅ Generated ${name} (${size}x${size})`);
    }
    
    // Generate ICO file for legacy support
    await sharp(sourceFavicon)
      .resize(32, 32)
      .toFormat('png')
      .toFile(path.join(publicDir, 'favicon.ico.png'));
    
    console.log('✅ Generated favicon.ico.png (convert to .ico manually if needed)');
    
    console.log('\n🎉 Favicon generation complete!');
    console.log('💡 Update your layout.tsx metadata to reference the new favicon files.');
    
  } catch (error) {
    console.error('❌ Error generating favicons:', error.message);
  }
}

// Run favicon generation
generateFavicons().catch(console.error);
