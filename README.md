# InstaSearch - Beautiful Image Search Application

InstaSearch is a modern, responsive web application that allows users to search and discover high-quality, royalty-free images. Built with HTML, CSS, and JavaScript, it provides a seamless user experience for finding the perfect images for any creative project.

![InstaSearch](https://images.unsplash.com/photo-1579546929518-9e396f3cc809)

## Features

- **Intelligent Search** - Powerful search functionality with smart filtering and relevant results
- **High-Quality Images** - All images sourced from Unsplash, ensuring premium quality
- **Responsive Design** - Fully responsive interface that works on all devices
- **Dark Mode** - Toggle between light and dark themes based on preference
- **Advanced Filtering** - Filter search results by orientation, color, and popularity
- **Attribution** - Proper attribution to photographers for all images
- **User-Friendly Interface** - Intuitive and easy-to-use design

## Technologies Used

- HTML5
- CSS3 (with Tailwind CSS)
- JavaScript (Vanilla JS)
- Unsplash API
- Responsive Design
- Local Storage for User Preferences

## Project Structure

```
InstaSearch/
├── css/
│   └── styles.css         # Custom styles for the application
├── js/
│   ├── main.js            # Core functionality shared across pages
│   └── results.js         # Results page specific functionality
├── index.html             # Homepage with search functionality
├── results.html           # Search results page with filtering options
└── README.md              # Project documentation
```

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/InstaSearch.git
   ```

2. Open `index.html` in your web browser or set up a local server.

3. Start searching for amazing images!

## API Usage

This project uses the Unsplash API to fetch high-quality images. To use your own API key:

1. Create an account at [Unsplash Developers](https://unsplash.com/developers)
2. Create a new application to get your API key
3. Replace the API key in `js/results.js`:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

## Features In Detail

### 1. Search Functionality
- Real-time search suggestions
- Search history tracking
- Popular categories for quick access

### 2. Image Results
- High-resolution image previews
- Photographer attribution
- Download options
- Filter by orientation, color, and popularity

### 3. User Experience
- Dark mode toggle
- Mobile-friendly interface
- Loading animations
- Back to top button
- Ripple effects on buttons

### 4. Performance
- Lazy loading for images
- Debounced search input
- Pagination for better performance
- Code splitting for faster page loads

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Unsplash](https://unsplash.com/) for providing the API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- All the photographers who share their amazing work

---

Created with ❤️ by Kethan vr - April 2025
