# SecurePass - Advanced Password Generator

![SecurePass](https://img.shields.io/badge/React-19.0-blue?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.0-purple?style=flat-square&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-06b6d4?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A production-ready, modern password generator web application built with React 19, Vite, and Tailwind CSS. Features real-time password strength analysis, customizable options, password history, dark/light theme toggle, and full accessibility support.

## 🎯 Overview

SecurePass is a professional SaaS-quality password generator that helps users create strong, secure passwords with advanced customization options. The application provides real-time strength analysis, entropy calculation, password history with localStorage persistence, and a beautiful glassmorphic UI with smooth animations.

### Key Features

✨ **Real-time Strength Analysis** - Analyze password strength with entropy calculation and detailed feedback

🎨 **Beautiful UI** - Modern glassmorphic design with smooth Framer Motion animations

🌓 **Theme Support** - Dark and light mode with system preference detection and localStorage persistence

📋 **Password History** - Store last 10 generated passwords with timestamps and quick copy

🛡️ **Customizable Options** - 8 different configuration options for password generation

⌨️ **Full Accessibility** - WCAG compliant with keyboard navigation, ARIA labels, and screen reader support

📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

🔒 **Client-Side Only** - All operations happen locally, no data sent to servers

⚡ **Fast Performance** - Optimized rendering with React hooks and memoization

## 📦 Tech Stack

- **React 19** - Latest React version with hooks and concurrent features
- **Vite** - Next-generation frontend build tool
- **JavaScript** - Pure JavaScript, no TypeScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready animation library
- **React Icons** - Popular icon library
- **Lucide Icons** - Beautiful, consistent icons
- **React Hot Toast** - Elegant toast notifications
- **ESLint** - Code quality and style consistency

## 📂 Project Structure

```
password-generator/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx                 # Top navigation bar
│   │   ├── Footer.jsx                 # Footer with developer info
│   │   ├── PasswordGenerator.jsx       # Main container component
│   │   ├── PasswordDisplay.jsx         # Password display with controls
│   │   ├── PasswordOptions.jsx         # Character set options
│   │   ├── PasswordLengthSlider.jsx    # Length slider control
│   │   ├── StrengthMeter.jsx          # Password strength indicator
│   │   ├── HistoryPanel.jsx           # Password history display
│   │   ├── ThemeToggle.jsx            # Dark/Light mode toggle
│   │   └── CopyButton.jsx             # Reusable copy button
│   ├── hooks/
│   │   ├── usePasswordGenerator.js     # Password generation logic
│   │   ├── useClipboard.js            # Clipboard operations
│   │   └── useTheme.js                # Theme management
│   ├── utils/
│   │   ├── generatePassword.js        # Password generation algorithm
│   │   └── calculateStrength.js       # Strength analysis
│   ├── constants/
│   │   └── characterSets.js           # Character sets and constants
│   ├── styles/
│   │   └── index.css                  # Global styles and Tailwind
│   ├── App.jsx                        # Main app component
│   └── main.jsx                       # Entry point
├── index.html                         # HTML template with SEO tags
├── vite.config.js                     # Vite configuration
├── tailwind.config.js                 # Tailwind CSS configuration
├── postcss.config.js                  # PostCSS configuration
├── .eslintrc.js                       # ESLint configuration
├── .gitignore                         # Git ignore rules
├── package.json                       # Dependencies and scripts
└── README.md                          # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)
- Git (optional)

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   git clone <repository-url>
   cd password-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will open in your browser at `http://localhost:3000`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build
npm run preview

# Check code quality
npm run lint
```

## 🎨 Features in Detail

### Password Generation

- **Customizable Length**: 4-64 characters
- **Character Sets**:
  - Uppercase letters (A-Z)
  - Lowercase letters (a-z)
  - Numbers (0-9)
  - Symbols (!@#$%^&*)
  - Spaces
- **Advanced Options**:
  - Exclude similar characters (0 O o I l 1)
  - Exclude ambiguous symbols ({} [] () \ ' " ` ~ , ; : . < > ?)
  - Easy to read mode (ensures at least one char from each set)

### Password Strength Analysis

Real-time strength calculation considering:
- **Password Length** - Longer passwords are stronger
- **Character Diversity** - Mix of uppercase, lowercase, numbers, symbols
- **Entropy Calculation** - Mathematical measure of password randomness
- **Pattern Detection** - Identifies sequential chars, repeats, etc.
- **Feedback** - Actionable suggestions for improvement

Strength Levels:
- 🔴 **Weak** (0-40%) - Not recommended
- 🟡 **Medium** (40-60%) - Acceptable
- 🟢 **Strong** (60-80%) - Good
- 🔵 **Very Strong** (80-100%) - Excellent

### Password History

- Stores last 10 generated passwords
- Shows generation timestamp
- Quick copy from history
- Delete individual entries
- Clear all history
- Persists using browser localStorage

### Theme Support

- **Dark Mode** - OLED-optimized design
- **Light Mode** - Clean, bright interface
- System preference detection
- Smooth transitions
- Persistent preference

### Accessibility

✅ Keyboard Navigation - Full keyboard support
✅ ARIA Labels - Screen reader friendly
✅ Focus Indicators - Clear focus states
✅ Color Contrast - WCAG AA compliant
✅ Semantic HTML - Proper heading hierarchy
✅ Error Messages - Clear feedback

## 🎨 Design System

### Colors

| Element | Color | Hex |
|---------|-------|-----|
| Primary | Blue | #3B82F6 |
| Secondary | Purple | #8B5CF6 |
| Success | Green | #22C55E |
| Warning | Yellow | #FACC15 |
| Danger | Red | #EF4444 |
| Background | Dark Slate | #0F172A |
| Card | Slate | #1E293B |

### Typography

- **Headings**: Poppins (700 weight)
- **Body**: Inter (400-700 weights)

### Components

- **Glass Cards** - Glassmorphic design with backdrop blur
- **Gradient Buttons** - Smooth gradient transitions
- **Rounded Corners** - 16px border radius
- **Soft Shadows** - Layered depth effect

## 📱 Responsive Breakpoints

| Device | Width | Breakpoint |
|--------|-------|-----------|
| Mobile | <640px | sm |
| Tablet | 640-1024px | md |
| Desktop | 1024-1536px | lg |
| Ultra-wide | >1536px | xl |

## 🔄 Component Architecture

### Custom Hooks

**`usePasswordGenerator()`**
- Manages password state and generation
- Handles history with localStorage
- Updates options

**`useClipboard()`**
- Copy text to clipboard
- Toast notifications
- Visual feedback

**`useTheme()`**
- Toggle dark/light mode
- System preference detection
- Persistent theme storage

### Reusable Components

- **CopyButton** - Animated copy with feedback
- **PasswordLengthSlider** - Visual slider control
- **StrengthMeter** - Animated strength indicator
- **HistoryPanel** - Scrollable history list

## 🚀 Performance Optimizations

- Lazy component loading
- Memoized callbacks with useCallback
- Optimized re-renders with React.memo (where applicable)
- Efficient CSS with Tailwind
- Minimized bundle size with tree-shaking
- Optimized images and assets

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Vite setup
4. Deploy with single click

### Deploy on Other Platforms

The `npm run build` command generates optimized files in the `dist/` folder, ready for deployment on any static hosting service (Netlify, GitHub Pages, Firebase, etc.).

## 📝 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🛡️ Security

- No server-side storage
- Client-side only operations
- No data transmission
- No tracking or analytics
- Open-source code

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Sujal Gupta**

- Email: sujal0705gupta@gmail.com
- GitHub: [github.com/sujal7005](https://github.com/sujal7005)

Built for [Digital Heroes](https://digitalheroesco.com) community.

## 🙏 Acknowledgments

- React team for the amazing framework
- Vercel for Vite
- Tailwind Labs for CSS framework
- Framer Motion for animations
- Icon libraries (React Icons, Lucide)

---

**Made with ❤️ for secure password generation**
