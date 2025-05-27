# InstaSearch - Modern Image Search App

A beautiful, modern Next.js application for searching and downloading high-quality images from Unsplash. Built with TypeScript, Tailwind CSS, and shadcn/ui components.

## ✨ Features

- **Advanced Search**: Search through millions of high-quality images with powerful filtering
- **Smart Filters**: Filter by orientation, color, popularity, and more
- **High-Quality Downloads**: Download images in various resolutions
- **Modern UI**: Beautiful design with dark/light theme support
- **Mobile Responsive**: Optimized for all screen sizes
- **Fast Performance**: Built with Next.js 15 and Turbopack for blazing speed
- **Smooth Animations**: Powered by Framer Motion

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.2 with TypeScript
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Animations**: Framer Motion
- **API**: Unsplash API for image data
- **State Management**: TanStack Query for data fetching
- **Icons**: Lucide React
- **Fonts**: Inter, Outfit, and Playfair Display

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd instasearch/new
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

The app uses the Unsplash API for image data. The API key is already configured, but you can replace it with your own by updating the `UNSPLASH_ACCESS_KEY` in `src/app/search/page.tsx`.

## 📁 Project Structure

```
src/
├── app/
│   ├── search/
│   │   └── page.tsx          # Search results page
│   ├── globals.css           # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── features-section.tsx # Features showcase
│   ├── footer.tsx          # Footer component
│   ├── hero.tsx            # Hero section
│   ├── navbar.tsx          # Navigation bar
│   ├── query-provider.tsx  # TanStack Query provider
│   ├── search-section.tsx  # Search interface
│   ├── theme-provider.tsx  # Theme provider
│   └── theme-toggle.tsx    # Dark/light mode toggle
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Design Features

- **Purple Theme**: Modern purple color scheme with gradients
- **Typography**: Three carefully selected Google Fonts
- **Animations**: Smooth transitions and micro-interactions
- **Responsive**: Mobile-first responsive design
- **Accessibility**: Screen reader friendly and keyboard navigable

## 🚀 Deployment

The app can be deployed to any platform that supports Next.js:

- **Vercel**: Deploy with one click
- **Netlify**: Static export support
- **Railway**: Full-stack deployment
- **Self-hosted**: Docker support available

## 📝 License

This project is licensed under the MIT License. Images are provided by Unsplash under their license terms.

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) for providing beautiful, free images
- [shadcn/ui](https://ui.shadcn.com) for excellent UI components
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling
- [Framer Motion](https://framer.com/motion) for smooth animations
