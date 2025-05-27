#!/usr/bin/env node

// Script to verify static assets exist and are accessible
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const requiredAssets = ['logo.png', 'fav.png'];

console.log('🔍 Checking static assets...\n');

requiredAssets.forEach(asset => {
  const assetPath = path.join(publicDir, asset);
  
  if (fs.existsSync(assetPath)) {
    const stats = fs.statSync(assetPath);
    console.log(`✅ ${asset}: Found (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.log(`❌ ${asset}: Missing!`);
  }
});

console.log('\n📁 All files in public directory:');
const allFiles = fs.readdirSync(publicDir);
allFiles.forEach(file => {
  const filePath = path.join(publicDir, file);
  const stats = fs.statSync(filePath);
  console.log(`   ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
});

console.log('\n🌐 URLs to test in production:');
requiredAssets.forEach(asset => {
  console.log(`   https://your-domain.vercel.app/${asset}`);
});
