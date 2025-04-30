# InstaSearch

InstaSearch is a modern, responsive web application that allows users to search and discover high-quality, free images from Unsplash.

![InstaSearch Screenshot](https://images.unsplash.com/photo-1682687220363-35e4621ed990?q=80&w=600&auto=format&fit=crop)

## Features

- **Powerful Image Search**: Find the perfect images with our intuitive search functionality.
- **Beautiful UI**: Modern, responsive design with dark mode support.
- **Masonry Grid Layout**: Displays images in an aesthetically pleasing grid.
- **Filter Options**: Filter images by orientation, color, size, and license.
- **Easy Download**: Download images with a single click.
- **Mobile Friendly**: Fully responsive design works on all devices.
- **Dark Mode**: Toggle between light and dark themes.

## Pages

- **Home Page**: Main landing page with search functionality and featured image collections.
- **Results Page**: Displays search results with filtering options and infinite scrolling.

## Technologies Used

- **HTML5**: Semantic markup for structure.
- **CSS3/Tailwind CSS**: For styling and responsive design.
- **JavaScript**: For interactive elements and API integration.
- **Unsplash API**: For fetching high-quality, free-to-use images.

## Project Structure

```
InstaSearch/
├── index.html           # Main landing page
├── results.html         # Search results page
├── css/
│   └── styles.css       # Main stylesheet
├── js/
│   ├── main.js          # Core functionality
│   └── results.js       # Results page functionality
└── README.md            # Project documentation
```

## Setup and Usage

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/InstaSearch.git
   ```

2. Open `index.html` in your web browser.

3. Start searching for beautiful images!

## API Integration

InstaSearch uses the Unsplash API to fetch images. To use your own API key:

1. Sign up for a developer account at [Unsplash Developers](https://unsplash.com/developers)
2. Create a new application to get your API key
3. Replace the API key in `js/results.js`:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```

## Features to Add

- User accounts and saved favorites
- Image collections and curation
- Advanced search filters
- Social sharing
- Download in different resolutions

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images provided by [Unsplash](https://unsplash.com)
- Icons from [Heroicons](https://heroicons.com/)
- Font from Google Fonts
