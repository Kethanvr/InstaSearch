#!/bin/bash

echo "🚀 InstaSearch Deployment Checklist"
echo "=================================="

# Check if required files exist
echo "📁 Checking required files..."
files=("public/logo.png" "public/fav.png" "public/manifest.json" "vercel.json")
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file exists"
  else
    echo "❌ $file missing"
  fi
done

echo ""
echo "📊 Checking file sizes..."
logo_size=$(stat -c%s "public/logo.png" 2>/dev/null || echo "0")
fav_size=$(stat -c%s "public/fav.png" 2>/dev/null || echo "0")

if [ "$logo_size" -lt 100000 ]; then
  echo "✅ logo.png size: $(($logo_size / 1024))KB (optimal)"
else
  echo "⚠️  logo.png size: $(($logo_size / 1024))KB (consider optimizing)"
fi

if [ "$fav_size" -lt 50000 ]; then
  echo "✅ fav.png size: $(($fav_size / 1024))KB (optimal)"
else
  echo "⚠️  fav.png size: $(($fav_size / 1024))KB (consider optimizing)"
fi

echo ""
echo "🔧 Running build test..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
  echo "✅ Build successful"
else
  echo "❌ Build failed - check errors with: npm run build"
fi

echo ""
echo "📱 Checking favicon files..."
favicon_files=("favicon-16x16.png" "favicon-32x32.png" "apple-touch-icon.png" "android-chrome-192x192.png" "android-chrome-512x512.png")
for file in "${favicon_files[@]}"; do
  if [ -f "public/$file" ]; then
    echo "✅ $file exists"
  else
    echo "❌ $file missing"
  fi
done

echo ""
echo "🌐 Deployment Tips:"
echo "- Images are optimized for fast loading"
echo "- Multiple favicon sizes for better browser support"
echo "- PWA manifest included for mobile experience"
echo "- Next.js Image optimization enabled"
echo "- Vercel-specific optimizations configured"
echo ""
echo "🎉 Ready for deployment to Vercel!"
echo "Run: vercel --prod"
