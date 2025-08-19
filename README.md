# 🕌 Zikr - Islamic Remembrance Website

https://63ashfaque.github.io/zikr/

https://zikr.pages.dev/

A modern, responsive web application for Islamic Dhikr (remembrance of Allah) with audio playback functionality.

## ✨ Features

### 📱 Responsive Design
- **Mobile**: Single column list view for easy scrolling
- **Tablet**: 2-column grid layout
- **Desktop**: 3-column grid layout for optimal screen utilization

### 🎵 Audio Management
- Interactive play/pause controls for each zikr
- Only one audio plays at a time
- Loading states and error handling
- Supports MP3 audio format

### 🎨 Modern UI Design
- Beautiful gradient backgrounds for each card
- Smooth hover animations and transitions
- Arabic typography with Google Fonts (Amiri)
- Clean, modern interface with glassmorphism effects

### ♿ Accessibility
- Keyboard navigation support
- ARIA labels for screen readers
- Focus indicators for better usability
- Semantic HTML structure

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- Audio files for zikr recitations (see [Audio Setup](#-audio-setup))

### Installation
1. Clone or download this repository
2. Add your audio files to the `music/` folder
3. Open `index.html` in a web browser
4. Start your dhikr journey!

## 🎵 Audio Setup

Place the following MP3 files in the `music/` folder:

| File Name | Arabic Text | English Translation |
|-----------|-------------|-------------------|
| `astaghfirullah.mp3` | أَسْتَغْفِرُ اللَّهَ | I seek forgiveness from Allah |
| `allahu-akbar.mp3` | اللَّهُ أَكْبَر | Allah is the Greatest |
| `subhanallah.mp3` | سُبْحَانَ اللَّهِ | Glory be to Allah |
| `alhamdulillah.mp3` | الْحَمْدُ لِلَّهِ | All praise is due to Allah |
| `la-ilaha-illa-allah.mp3` | لَا إِلَٰهَ إِلَّا اللَّهُ | There is no god but Allah |
| `salawat.mp3` | اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ | O Allah, send prayers upon Muhammad |
| `rabbi-ighfir-li.mp3` | رَبِّ اغْفِرْ لِي | My Lord, forgive me |
| `bismillah.mp3` | بِسْمِ اللَّهِ | In the name of Allah |
| `raditu-billahi-rabban.mp3` | رَضِيتُ بِاللَّهِ رَبًّا | I am pleased with Allah as my Lord |

### Audio Recommendations
- **Format**: MP3 (128-192 kbps)
- **Duration**: 30 seconds to 2 minutes
- **Volume**: Normalized for consistency

## 📁 Project Structure

```
zikr/
├── index.html              # Main HTML file
├── styles.css              # CSS styles and responsive design
├── script.js               # JavaScript functionality
├── music/                  # Audio files folder
│   ├── README.md          # Audio setup instructions
│   └── *.mp3              # Zikr audio files
├── images/                 # Images and icons folder
│   └── README.md          # Image usage guidelines
├── .github/
│   └── copilot-instructions.md
└── README.md              # This file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox/Grid, animations, and responsive design
- **JavaScript (ES6+)**: Audio management and interactive functionality
- **Google Fonts**: Amiri (Arabic) and Inter (English) typography

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Internet Explorer (limited support)

## 🎨 Customization

### Adding New Zikr
1. Add the new zikr data to the `zikrData` array in `script.js`
2. Include the audio file in the `music/` folder
3. The card will be automatically generated

### Changing Colors
- Edit the gradient colors in the `zikrData` array
- Modify CSS custom properties for global color changes

### Layout Modifications
- Responsive breakpoints can be adjusted in `styles.css`
- Grid layouts are defined using CSS Grid

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test across different devices
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤲 Islamic Guidelines

This project is created with respect for Islamic values and teachings. Please ensure:
- Accurate Arabic text and translations
- Appropriate use of Islamic content
- Respectful presentation of dhikr

## 🐛 Troubleshooting

### Audio Not Playing
- Check if audio files are in the correct `music/` folder
- Ensure file names match exactly (case-sensitive)
- Verify audio files are in MP3 format
- Check browser console for error messages

### Layout Issues
- Clear browser cache
- Check if CSS file is loading correctly
- Verify viewport meta tag is present

## 📞 Support

If you encounter any issues or have suggestions, please create an issue in the repository.

---

**May Allah accept our dhikr and grant us His mercy. Ameen.**

*Last updated: August 2025*
