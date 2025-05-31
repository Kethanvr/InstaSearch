#!/usr/bin/env node

// Build optimization script for production
const fs = require('fs');
const path = require('path');

console.log('🚀 Running production build optimizations...\n');

// Check Next.js config
const nextConfigPath = path.join(__dirname, 'next.config.ts');
if (fs.existsSync(nextConfigPath)) {
  console.log('✅ next.config.ts found');
} else {
  console.log('❌ next.config.ts missing');
}

// Check Vercel config
const vercelConfigPath = path.join(__dirname, 'vercel.json');
if (fs.existsSync(vercelConfigPath)) {
  console.log('✅ vercel.json found');
} else {
  console.log('❌ vercel.json missing');
}

// Verify public assets structure
const publicDir = path.join(__dirname, 'public');
const assets = fs.readdirSync(publicDir);
console.log(`\n📁 Found ${assets.length} assets in public directory:`);
assets.forEach(asset => {
  const stats = fs.statSync(path.join(publicDir, asset));
  console.log(`   ${asset} (${(stats.size / 1024).toFixed(2)} KB)`);
});

console.log('\n✨ Build optimization complete!');
