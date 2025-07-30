# Jack Osei - Portfolio Website

A modern, SEO-optimized portfolio website built with Next.js 14, featuring server-side rendering (SSR) and static site generation (SSG) for optimal performance and search engine visibility.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **SEO Optimized** with proper meta tags and structured data
- **Dark/Light Mode** with theme switching
- **Responsive Design** for all devices
- **Performance Optimized** with image optimization and lazy loading
- **Accessibility** compliant with WCAG guidelines

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Theme**: next-themes

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── hero-section.tsx    # Hero section component
│   ├── about-section.tsx   # About section component
│   ├── services-section.tsx # Services section component
│   ├── selected-work.tsx   # Portfolio projects
│   ├── process-section.tsx # Work process
│   ├── gallery-section.tsx # Image gallery
│   ├── testimonials.tsx    # Client testimonials
│   ├── contact-cta.tsx     # Contact form
│   ├── footer.tsx          # Footer component
│   ├── navigation.tsx      # Navigation bar
│   ├── theme-switcher.tsx  # Theme toggle
│   └── gsap-interactions.tsx # Custom interactions
├── hooks/
│   └── use-toast.ts        # Toast notification hook
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **CSS Variables** for consistent theming
- **HSL Color Space** for better color manipulation
- **Responsive Breakpoints** for mobile-first design
- **Component Variants** for flexible UI components
- **Animation System** with Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd jack-osei-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000] in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📱 SEO Features

- **Meta Tags**: Comprehensive meta tags for social sharing
- **Open Graph**: Facebook and Twitter card support
- **Structured Data**: JSON-LD markup for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling instructions
- **Performance**: Optimized Core Web Vitals

## 🎯 Performance Optimizations

- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic route-based code splitting
- **Lazy Loading**: Images and components loaded on demand
- **Bundle Analysis**: Built-in bundle analyzer
- **Caching**: Static generation and ISR for fast loading

## 🌙 Theme System

The website supports:
- **Light Mode**: Clean, professional appearance
- **Dark Mode**: Modern, eye-friendly design
- **System Preference**: Automatic theme detection
- **Persistent**: Theme preference saved in localStorage

## 📧 Contact Information

- **Email**: jackosei@gmail.com
- **LinkedIn**: [Jack Osei](https://www.linkedin.com/in/jackosei/)
- **Location**: Ghana

## 🛠️ Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in `src/components/navigation.tsx`

### Modifying Content

- Update personal information in respective components
- Replace images in the `public/` directory
- Modify color scheme in `src/app/globals.css`

### SEO Updates

- Update metadata in `src/app/layout.tsx`
- Modify Open Graph tags for social sharing
- Update structured data for search engines

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: jackosei@gmail.com
- LinkedIn: [Jack Osei](https://www.linkedin.com/in/jackosei/)

---

Built with ❤️ by Jack Osei 