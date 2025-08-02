# מפת אטרקציות עכו העתיקה
## Interactive Acre POI Map

An elegant, interactive map showcasing the historical attractions of Acre Old City in Israel. Built with Google Maps API and featuring a modern Hebrew design inspired by contemporary Israeli web aesthetics.

![Akko POI Map](https://via.placeholder.com/800x400/1a1a1a/ffffff?text=Akko+POI+Map)

## ✨ Features

- **📍 Interactive Map**: 10+ historical points of interest in Akko's Old City
- **🖼️ Rich Media**: High-quality images and detailed descriptions for each POI
- **🎨 Modern Design**: Clean, minimalist Hebrew typography and styling
- **📱 Responsive**: Works perfectly on desktop and mobile devices
- **🗺️ Custom Styling**: Elegant map colors that match the overall design
- **🎯 Custom Markers**: Beautiful pin icons for enhanced visual appeal

## 🏛️ Featured Attractions

- **עיר עתיקה של עכו** - The Historic Old City
- **אולמות האבירים** - The Knights' Halls (Hospitaller Fortress)
- **מנהרת הטמפלרים** - The Templars' Tunnel
- **החאן הטורקי** - The Turkish Khan (Khan al-Umdan)
- **מסגד אל-ג'זאר** - Al-Jazzar Mosque
- **הנמל העתיק** - The Ancient Port
- **הגן הבהאי** - The Baháʼí Gardens
- And more historical sites...

## 🚀 Quick Start

### Prerequisites
- Google Maps API key (with Maps JavaScript API enabled)
- Local web server (Python, Node.js, or any HTTP server)

### Installation

1. **Clone or download** this repository
2. **Get a Google Maps API key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Enable Maps JavaScript API
   - Create an API key
   - Restrict it to your domain

3. **Update the API key** in `index.html`:
   ```html
   <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&language=he"></script>
   ```

4. **Start a local server**:
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx http-server
   ```

5. **Open** `http://localhost:8000` in your browser

## 📁 Project Structure

```
itemsOnMaps/
├── index.html          # Main HTML file
├── styles.css          # Modern Hebrew styling
├── script.js           # Google Maps integration & POI logic
├── data/
│   └── pois.json      # POI data with coordinates & descriptions
├── images/
│   ├── pins.png       # Custom map markers
│   ├── turn0image0.jpeg # POI images
│   ├── turn0image1.jpeg
│   └── ...
└── README.md          # This file
```

## 🎨 Customization

### Adding New POIs
Edit `data/pois.json`:
```json
{
  "name": "שם המקום",
  "lat": 32.9234,
  "lon": 35.0708,
  "text": "תיאור המקום בשתי-שלוש משפטים.",
  "image": "image_name",
  "address": "כתובת המקום"
}
```

### Replacing Images
- Add images to the `images/` folder
- Name them to match the `image` field in `pois.json`
- Supported formats: JPG, PNG, WebP

### Styling Changes
- Modify `styles.css` for visual changes
- Update map colors in `script.js` under the `styles` array
- Change marker design by replacing `images/pins.png`

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Restrict your Google Maps API key to your domain

### Vercel/Netlify
1. Connect your repository
2. Deploy automatically
3. Update API key restrictions

### Traditional Hosting
1. Upload all files via FTP
2. Ensure proper file permissions
3. Update API key restrictions

## 🛡️ Security

**Important**: Restrict your Google Maps API key to prevent unauthorized usage:
- Add HTTP referrer restrictions
- Limit to Maps JavaScript API only
- Set up billing alerts

## 🔧 Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Maps**: Google Maps JavaScript API
- **Styling**: Custom CSS with Hebrew fonts (Assistant, Heebo)
- **UI Framework**: Bootstrap 5 (for modals)
- **Icons**: Font Awesome 6

## 📄 Data Sources

Historical information and coordinates for Akko's attractions are based on:
- UNESCO World Heritage Site documentation
- Israel National Parks Authority
- Local historical societies

## 🤝 Contributing

Feel free to:
- Add more POIs to the map
- Improve the Hebrew translations
- Enhance the visual design
- Report bugs or suggest features

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by modern Israeli web aesthetics
- Historical data from Akko tourism authorities
- Hebrew typography using Google Fonts
- Google Maps Platform for mapping services

---

**Built with ❤️ for preserving and sharing Akko's rich history**

*For questions or support, please open an issue in this repository.*