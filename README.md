# Forhad Mia - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and DaisyUI. Showcasing expertise in React Native, Mobile App Development, Web Development, and Backend Development.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS and DaisyUI components
- **Smooth Animations**: Using AOS (Animate On Scroll) library
- **Contact Form**: Integrated with EmailJS for form submissions
- **SEO Optimized**: Comprehensive SEO setup for better search engine ranking
- **PWA Ready**: Progressive Web App capabilities
- **Fast Loading**: Optimized for performance

## 📦 Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS + DaisyUI
- **Routing**: React Router v6
- **Animations**: AOS (Animate On Scroll)
- **Icons**: React Icons
- **Form Handling**: EmailJS
- **Carousel**: Swiper

## 🎯 Expertise

- **React Native Development**: Cross-platform mobile applications for iOS and Android
- **Mobile App Development**: Native and hybrid mobile solutions
- **Web Development**: Modern web applications using React, Node.js
- **Backend Development**: RESTful APIs, database design, server-side logic

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/forhadmia/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
# or
pnpm install
```

3. Create a `.env` file based on `.env.example`:

```bash
cp .env.example .env
```

4. Update the environment variables in `.env` with your actual values.

5. Start the development server:

```bash
npm start
# or
pnpm start
```

## 🏗️ Build for Production

```bash
npm run build
# or
pnpm build
```

The build will be created in the `build` folder.

## 📁 Project Structure

```
my_portfolio/
├── public/
│   ├── index.html          # Main HTML file with SEO meta tags
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # Search engine crawling rules
│   ├── sitemap.xml         # Site structure for search engines
│   ├── _redirects          # Netlify redirects
│   └── .well-known/
│       └── security.txt    # Security policy
├── src/
│   ├── components/         # React components
│   ├── pages/              # Page components
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   │   ├── seo.js          # SEO helper functions
│   │   └── sitemapGenerator.js  # Sitemap generator script
│   ├── Assets/             # Images and static assets
│   ├── App.js              # Main App component
│   └── index.js            # Entry point
├── netlify.toml            # Netlify configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Dependencies and scripts
```

## 🔍 SEO Features

This project includes comprehensive SEO optimization:

### 1. **Meta Tags**

- Title and description optimization
- Open Graph tags for social sharing
- Twitter Card meta tags
- Canonical URLs

### 2. **Sitemap**

- Auto-generated sitemap.xml
- Run `npm run sitemap` to regenerate
- Automatically updated before build

### 3. **Robots.txt**

- Configured for search engine crawlers
- Allows proper indexing
- Includes sitemap reference

### 4. **Structured Data**

- JSON-LD schema markup
- Person schema for portfolio
- SoftwareApplication schema for projects

### 5. **Performance**

- Optimized caching headers
- Content Security Policy
- Preconnect to external resources

### 6. **PWA Features**

- Web app manifest
- Service worker ready
- Installable on mobile devices

## 🔧 SEO Configuration

### Site URL

The site is configured for: `https://forhadmia.netlify.app`

All SEO files have been updated with the correct URL and keywords focusing on:

- React Native Developer
- Mobile App Developer
- Web Development
- Backend Development

### Google Search Console

1. Add your site to [Google Search Console](https://search.google.com/search-console)
2. Verify ownership using the HTML file method
3. Rename `public/googleXXXXXXXXXXXXXXXX.html` to your verification filename
4. Submit your sitemap: `https://forhadmia.netlify.app/sitemap.xml`

### Google Analytics (Optional)

1. Create a Google Analytics property
2. Add tracking ID to `.env` as `REACT_APP_GA_TRACKING_ID`
3. The tracking code will be automatically included

## 📝 Customization

### Update Personal Information

- Edit `public/index.html` for meta tags
- Edit `public/manifest.json` for PWA details
- Edit `src/utils/seo.js` for default SEO values
- Update structured data in `public/index.html`

### Add New Projects

- Update `src/hooks/useProjects.js` with project data
- The sitemap will auto-update on next build

### Change Theme

- Edit `tailwind.config.js` for custom theme
- DaisyUI themes can be changed in `src/index.css`

## 🚀 Deployment

### Netlify (Recommended)

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `build`
4. The `netlify.toml` file handles all configuration

### Vercel

1. Import your repository
2. Framework preset: Create React App
3. Build command: `npm run build`
4. Output directory: `build`

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d build"`
3. Run: `npm run deploy`

## 📊 Performance Optimization

- Image optimization
- Code splitting
- Lazy loading
- Caching strategies
- Minification

## 🔒 Security

- Content Security Policy headers
- XSS protection
- CSRF protection
- HTTPS enforcement
- Security.txt file

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Forhad Mia**

- Website: [https://forhadmia.netlify.app](https://forhadmia.netlify.app)
- Email: [forhadmia416@gmail.com](mailto:forhadmia416@gmail.com)
- GitHub: [@forhadmia](https://github.com/forhadmia)
- LinkedIn: [Forhad Mia](https://linkedin.com/in/forhadmia)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [EmailJS](https://www.emailjs.com/)

---

⭐️ If you like this project, give it a star!
