╔════════════════════════════════════════════════════════════════════════════╗
║                          ECSTASY '26 EVENT WEBSITE                         ║
║                   Stranger Things "Upside Down" Aesthetic                  ║
╚════════════════════════════════════════════════════════════════════════════╝

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 TABLE OF CONTENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Quick Start
2. Project Structure
3. Features
4. Setup & Installation
5. Managing Events
6. Customization Guide
7. Deployment
8. Troubleshooting
9. Tech Stack

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚀 1. QUICK START
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Run these commands to get started:

    npm install
    npm run dev

The website will open at http://localhost:5173

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📁 2. PROJECT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ecstasy/
│
├── public/
│   └── favicon.svg                    # Site icon (E logo)
│
├── src/
│   ├── components/                    # Reusable UI components
│   │   ├── Navbar.jsx                 # Fixed navbar (appears on scroll)
│   │   ├── Countdown.jsx              # Event countdown timer
│   │   ├── EventCard.jsx              # Individual event card
│   │   ├── EventModal.jsx             # Event details popup
│   │   ├── FilterBar.jsx              # Category filter pills
│   │   └── SporeBackground.jsx        # Animated particles
│   │
│   ├── sections/                      # Main page sections
│   │   ├── Landing.jsx                # Hero section with title & countdown
│   │   └── Events.jsx                 # Events grid with filtering
│   │
│   ├── hooks/                         # Custom React hooks
│   │   ├── useEvents.js               # Returns static event data
│   │   └── useScrollPosition.js       # Track scroll for navbar
│   │
│   ├── data/                          # Static data
│   │   └── events.js                  # ⭐ EDIT THIS TO MANAGE EVENTS
│   │
│   ├── utils/                         # Helper functions
│   │   ├── formatDate.js              # Date formatting utilities
│   │   └── getImageUrl.js             # Convert Google Drive links
│   │
│   ├── context/                       # React Context
│   │   └── ModalContext.jsx           # Global modal state
│   │
│   ├── constants/                     # Configuration
│   │   └── categories.js              # Event categories
│   │
│   ├── config/
│   │   └── siteConfig.js              # Global site configuration
│   │
│   ├── styles/
│   │   └── index.css                  # Global styles & animations
│   │
│   ├── App.jsx                        # Main app component
│   └── main.jsx                       # Entry point
│
├── package.json                       # Dependencies
├── vite.config.js                     # Vite configuration
├── tailwind.config.js                 # Tailwind CSS config
├── postcss.config.js                  # PostCSS config
└── README.txt                         # This file

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✨ 3. FEATURES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VISUAL DESIGN
• Dark "Upside Down" aesthetic with deep red gradients
• Glitch effect on main title (RGB split, distortion)
• Animated spore/particle background
• Subtle animated vines
• Film grain texture overlay
• Vignette effect
• Custom scrollbar

LANDING SECTION
• Cinematic title with glitch animation
• Real-time countdown timer (days, hours, minutes, seconds)
• Smooth scroll indicator
• Responsive typography

EVENTS SECTION
• Responsive event card grid
• Hover effects (dim/blur with overlay)
• Category filtering (pills)
• Modal popup for event details
• Smooth animations
• Close on ESC / outside click / close button

NAVBAR
• Appears after scrolling past landing
• Hides when modal is open
• Smooth fade-in/out animations
• Fixed positioning

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⚙️ 4. SETUP & INSTALLATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PREREQUISITES
• Node.js (v18 or higher)
• npm or yarn

INSTALLATION STEPS

1. Install dependencies:
   npm install

2. Start development server:
   npm run dev

3. Build for production:
   npm run build

4. Preview production build:
   npm run preview

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📝 5. MANAGING EVENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

To add, edit, or remove events, edit: src/data/events.js

EXAMPLE EVENT STRUCTURE:
{
  id: '1',                              // Unique identifier
  title: 'Web Development Workshop',    // Event name
  description: 'Learn modern web...',   // Event description
  date: '2026-04-15T14:00:00',          // Date with time (see formats below)
  category: 'technical',                // Category (see categories below)
  registrationLink: 'https://...',      // Registration form URL
  poster: 'https://...'                 // Event poster image URL
}

DATE FORMATS (both supported):
• With time:    '2026-04-15T14:00:00'   → displays "Apr 15, 2026, 02:00 PM"
• Date only:    '2026-04-15'            → displays "Apr 15, 2026"
Choose the format that works best for your event!

AVAILABLE CATEGORIES:
• technical   - Tech workshops, coding sessions
• cultural    - Cultural events, performances
• gaming      - Gaming tournaments, esports
• sports      - Sports events, competitions
• workshops   - General workshops, seminars

ADD A NEW EVENT:
1. Open src/data/events.js
2. Copy an existing event object
3. Edit the values (title, description, date, etc.)
4. Make sure to give it a unique id
5. Save the file

REMOVE AN EVENT:
1. Open src/data/events.js
2. Delete the entire event object (including the comma)
3. Save the file

EDIT AN EVENT:
1. Open src/data/events.js
2. Find the event by its title or id
3. Modify the values you want to change
4. Save the file

POSTER IMAGES:
📸 See IMAGE_GUIDE.txt for complete instructions!

Quick options:
• LOCAL (recommended): Place images in public/posters/ folder
  Then use: poster: '/posters/your-image.jpg'
  
• IMGUR: Upload to https://imgur.com, copy direct link
  Use: poster: 'https://i.imgur.com/abc123.jpg'
  
• GOOGLE DRIVE: Share link (must be public)
  Use: poster: 'https://drive.google.com/file/d/FILE_ID/view'
  (Note: Can be unreliable, Imgur or local images recommended)

For detailed step-by-step instructions, see IMAGE_GUIDE.txt!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 6. CUSTOMIZATION GUIDE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CHANGE SITE TITLE
• Edit: index.html (line 8: <title>)
• Edit: src/config/siteConfig.js (eventName and eventYear)

CHANGE COUNTDOWN TARGET DATE
• Edit: src/config/siteConfig.js
• Find: countdownTargetDate: '2026-04-09T00:00:00'
• Change to your event date
• Format: 'YYYY-MM-DDTHH:MM:SS' (e.g., '2026-06-20T18:30:00')
• Save the file and refresh your browser (Ctrl+Shift+R for hard refresh)

MODIFY COLORS
• Edit: tailwind.config.js
• Change colors in the 'upside' color palette
• Or add new custom colors

ADD/REMOVE CATEGORIES
• Edit: src/constants/categories.js
• Add/remove category objects from CATEGORIES array
• Each category needs: id, label, color

CHANGE FONTS
• Edit: index.html (Google Fonts links)
• Edit: tailwind.config.js (fontFamily section)
• Update CSS classes using font-display, font-body, font-mono

ADJUST ANIMATIONS
• Edit: tailwind.config.js (animations & keyframes)
• Edit: src/styles/index.css (CSS animations)

PARTICLE DENSITY
• Edit: src/components/SporeBackground.jsx
• Line 43: particleCount calculation
• Increase/decrease the divisor (15000) for more/fewer particles

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🚢 7. DEPLOYMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

VERCEL (Recommended)
  1. Push code to GitHub
  2. Go to https://vercel.com
  3. Import your repository
  4. Deploy (no environment variables needed!)

NETLIFY
  1. Push code to GitHub
  2. Go to https://netlify.com
  3. New site from Git
  4. Build command: npm run build
  5. Publish directory: dist
  6. Deploy

GITHUB PAGES
  1. Install gh-pages: npm install --save-dev gh-pages
  2. Add to package.json scripts:
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
  3. Run: npm run deploy

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔧 8. TROUBLESHOOTING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ISSUE: Events not showing
SOLUTION: 
  • Check src/data/events.js has valid event objects
  • Verify date format: 'YYYY-MM-DDTHH:MM:SS'
  • Check browser console for errors

ISSUE: Images not displaying
SOLUTION:
  • Verify image URLs are correct and accessible
  • For Google Drive links, ensure they're set to "Anyone with link can view"
  • Check browser console for CORS or loading errors

ISSUE: Navbar not appearing
SOLUTION:
  • Scroll past the landing section
  • Check useScrollPosition.js threshold (0.8 multiplier)
  • Verify Navbar component is imported in App.jsx

ISSUE: Modal not closing
SOLUTION:
  • Click outside modal area
  • Press ESC key
  • Click X button in top-right
  • Check ModalContext is properly wrapped

ISSUE: Glitch effect not working
SOLUTION:
  • Ensure data-text attribute matches title text
  • Check src/styles/index.css for glitch animation CSS
  • Verify browser supports CSS animations

ISSUE: Build fails
SOLUTION:
  • Delete node_modules and package-lock.json
  • Run: npm install
  • Check for version conflicts
  • Ensure Node.js v18+

ISSUE: Hot reload not working
SOLUTION:
  • Stop the dev server (Ctrl+C)
  • Clear Vite cache: rm -rf node_modules/.vite
  • Restart: npm run dev

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🛠️ 9. TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CORE
• React 18.3.1          - UI framework
• Vite 5.1.4            - Build tool & dev server
• Tailwind CSS 3.4.1    - Utility-first CSS

LIBRARIES
• Framer Motion 11.0.8  - Animations

FONTS
• Playfair Display      - Display font (titles)
• Crimson Text          - Body font
• Space Mono            - Monospace font (technical text)

DEVELOPMENT
• PostCSS               - CSS processing
• Autoprefixer          - CSS vendor prefixes

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📞 SUPPORT & FEEDBACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

For issues, questions, or feature requests:
• Check the Troubleshooting section above
• Review the code comments in each file
• Edit src/data/events.js to manage event content

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Built with ❤️ for ECSTASY '26
Production-ready • Modern Stack • Static Site (No Backend Required)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
