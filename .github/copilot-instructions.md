<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Zikr Website Project Instructions

This is a responsive Islamic Zikr (remembrance) website project built with HTML, CSS, and JavaScript.

## Project Overview:
- **Purpose**: A web application for Islamic dhikr/zikr with audio playback
- **Technology Stack**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Design**: Modern, responsive UI with gradient backgrounds
- **Audio**: Only one audio can play at a time
- **Responsive**: Mobile (list), Tablet (2xN grid), Desktop (3xN grid)

## Key Features:
1. **Responsive Grid Layout**: 
   - Mobile: Single column list view
   - Tablet: 2-column grid
   - Desktop: 3-column grid

2. **Audio Management**:
   - Play/pause toggle functionality
   - Only one audio plays at a time
   - Error handling for missing audio files
   - Loading states and user feedback

3. **Card Design**:
   - Gradient backgrounds with hover effects
   - Arabic text with English translations
   - Interactive audio controls
   - Accessibility features (keyboard navigation, ARIA labels)

## Code Style Guidelines:
- Use semantic HTML5 elements
- Follow CSS BEM methodology where applicable
- Use modern JavaScript (ES6+ features)
- Maintain accessibility standards (WCAG 2.1)
- Keep CSS organized with clear sections and comments
- Use CSS custom properties for consistent theming

## File Structure:
- `index.html` - Main HTML structure
- `styles.css` - All styling and responsive design
- `script.js` - JavaScript functionality and audio management
- `music/` - Audio files for zikr recitations
- `images/` - Static images and icons

## Islamic Content Guidelines:
- Use appropriate Arabic text with proper diacritics
- Provide accurate English translations
- Maintain respectful presentation of Islamic content
- Follow Islamic etiquette in design and functionality

## Browser Compatibility:
- Support modern browsers (Chrome, Firefox, Safari, Edge)
- Progressive enhancement approach
- Fallbacks for older browsers where necessary

## Performance Considerations:
- Optimize images and audio files
- Use efficient CSS selectors
- Minimize JavaScript execution
- Implement lazy loading where beneficial
