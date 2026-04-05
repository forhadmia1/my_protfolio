/**
 * Sitemap Generator for Portfolio Website
 * Run this script to generate an updated sitemap.xml
 * Usage: node src/utils/sitemapGenerator.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://forhadmia.netlify.app';

// Define your routes here
const routes = [
  {
    path: '/',
    changefreq: 'monthly',
    priority: 1.0,
  },
  {
    path: '/#about',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/#skills',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/#services',
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    path: '/#projects',
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    path: '/#contact',
    changefreq: 'monthly',
    priority: 0.7,
  },
  {
    path: '/blogs',
    changefreq: 'weekly',
    priority: 0.8,
  },
];

// Get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const date = new Date();
  return date.toISOString().split('T')[0];
};

// Generate sitemap XML
const generateSitemap = () => {
  const currentDate = getCurrentDate();

  const urlset = routes
    .map(
      (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;

  return sitemap;
};

// Write sitemap to public folder
const writeSitemap = () => {
  const sitemap = generateSitemap();
  const outputPath = path.join(__dirname, '../../public/sitemap.xml');

  fs.writeFile(outputPath, sitemap, (err) => {
    if (err) {
      console.error('Error writing sitemap:', err);
      return;
    }
    console.log('✅ Sitemap generated successfully!');
    console.log(`📍 Location: ${outputPath}`);
  });
};

// Run the generator
writeSitemap();
