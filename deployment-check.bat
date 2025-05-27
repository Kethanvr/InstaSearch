@echo off
echo 🚀 InstaSearch Deployment Checklist
echo ==================================

echo 📁 Checking required files...
if exist "public\logo.png" (
  echo ✅ public\logo.png exists
) else (
  echo ❌ public\logo.png missing
)

if exist "public\fav.png" (
  echo ✅ public\fav.png exists
) else (
  echo ❌ public\fav.png missing
)

if exist "public\manifest.json" (
  echo ✅ public\manifest.json exists
) else (
  echo ❌ public\manifest.json missing
)

if exist "vercel.json" (
  echo ✅ vercel.json exists
) else (
  echo ❌ vercel.json missing
)

echo.
echo 🔧 Running build test...
call npm run build >nul 2>&1
if %errorlevel% == 0 (
  echo ✅ Build successful
) else (
  echo ❌ Build failed - check errors with: npm run build
)

echo.
echo 📱 Checking favicon files...
if exist "public\favicon-16x16.png" (
  echo ✅ favicon-16x16.png exists
) else (
  echo ❌ favicon-16x16.png missing
)

if exist "public\favicon-32x32.png" (
  echo ✅ favicon-32x32.png exists
) else (
  echo ❌ favicon-32x32.png missing
)

if exist "public\apple-touch-icon.png" (
  echo ✅ apple-touch-icon.png exists
) else (
  echo ❌ apple-touch-icon.png missing
)

if exist "public\android-chrome-192x192.png" (
  echo ✅ android-chrome-192x192.png exists
) else (
  echo ❌ android-chrome-192x192.png missing
)

if exist "public\android-chrome-512x512.png" (
  echo ✅ android-chrome-512x512.png exists
) else (
  echo ❌ android-chrome-512x512.png missing
)

echo.
echo 🌐 Deployment Tips:
echo - Images are optimized for fast loading
echo - Multiple favicon sizes for better browser support
echo - PWA manifest included for mobile experience
echo - Next.js Image optimization enabled
echo - Vercel-specific optimizations configured
echo.
echo 🎉 Ready for deployment to Vercel!
echo Run: vercel --prod

pause
