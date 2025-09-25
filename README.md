# Raymart O. Villena - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and TailwindCSS, showcasing professional experience in software engineering, IoT development, and research.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite + TailwindCSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Dark/Light Mode**: Toggle between themes with persistent user preference
- **Smooth Animations**: Framer Motion for engaging user interactions
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Contact Form**: EmailJS integration for direct communication
- **Performance**: Optimized for speed and accessibility

## 📋 Sections

- **Hero**: Professional introduction with call-to-action
- **Profile**: Detailed professional background and expertise
- **Competencies**: Core skills across 7 technology categories
- **Projects**: Showcase of innovative solutions and applications
- **Education**: Academic achievements and ongoing studies
- **Experience**: Professional work history and achievements
- **Certifications**: Professional credentials and memberships
- **Research**: Publications and research involvements
- **Contact**: Multiple ways to get in touch

## 🛠️ Technologies Used

### Frontend
- **React 18** - UI library with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Animation library for smooth transitions
- **React Router** - Client-side routing for single-page application

### Styling & Design
- **Custom CSS** - Additional styles and animations
- **Responsive Design** - Mobile-first approach with breakpoints
- **Dark Mode** - Theme switching with system preference detection
- **Gradient Design** - Modern visual elements and color schemes

### Development Tools
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/raymartvillena/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Layout.tsx      # Main layout with navigation
│   └── sections/       # Page sections
│       ├── Hero.tsx
│       ├── Profile.tsx
│       ├── Competencies.tsx
│       ├── ProjectsPreview.tsx
│       ├── Education.tsx
│       ├── Experience.tsx
│       ├── Certifications.tsx
│       ├── Research.tsx
│       └── ContactPreview.tsx
├── contexts/           # React contexts
│   └── ThemeContext.tsx
├── data/              # Static data and content
│   └── portfolioData.ts
├── pages/             # Page components
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   └── Contact.tsx
├── types/             # TypeScript type definitions
│   └── index.ts
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and TailwindCSS imports
```

## 🎨 Customization

### Updating Content
Edit the data in `src/data/portfolioData.ts` to update:
- Personal information
- Projects and achievements
- Skills and competencies
- Education and experience
- Contact information

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/index.css` for global styles
- Component-specific styles use TailwindCSS classes

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Add the component to the appropriate page
3. Update the navigation if needed

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented with:
- System preference detection
- Manual toggle functionality
- Persistent user preference
- Smooth theme transitions

## ⚡ Performance

- **Vite** for fast development and optimized builds
- **Code splitting** with React Router
- **Optimized images** and assets
- **Minimal bundle size** with tree shaking

## 🔧 Configuration

### EmailJS Setup (Optional)
To enable the contact form:
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the configuration in `src/pages/Contact.tsx`

### SEO Configuration
Update meta tags in `index.html` for:
- Site title and description
- Open Graph tags
- Twitter Card tags
- Canonical URLs

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Raymart O. Villena**
- Software Engineer | IoT & Full-Stack Developer | Researcher
- Email: raymart.o.villena@gmail.com
- LinkedIn: [raymartvillena](https://linkedin.com/in/raymartvillena)
- GitHub: [raymartvillena](https://github.com/raymartvillena)

## 🙏 Acknowledgments

- React team for the amazing framework
- TailwindCSS for the utility-first CSS approach
- Framer Motion for smooth animations
- Vite team for the fast build tool
- All open source contributors

---

Built with ❤️ by Raymart O. Villena