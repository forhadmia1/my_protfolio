/**
 * SEO Utility Functions for Portfolio Website
 */

// Default SEO configuration
export const defaultSEO = {
  title: 'Forhad Mia - React Native & Mobile App Developer | Portfolio',
  description:
    'Forhad Mia is an expert React Native Developer and Mobile App Developer specializing in cross-platform mobile apps, web development, and backend development. View my portfolio and get in touch for your next project.',
  keywords:
    'Forhad Mia, React Native Developer, Mobile App Developer, React Native, Mobile Development, App Developer, Web Developer, Full Stack Developer, Backend Developer, JavaScript Developer, React Developer, Node.js Developer, Cross-platform Apps, Portfolio',
  url: 'https://forhadmia.netlify.app',
  image: '/og-image.png',
  twitterCard: 'summary_large_image',
};

/**
 * Update document meta tags dynamically
 * @param {Object} seoData - SEO data object
 */
export const updateMetaTags = (seoData = {}) => {
  const {
    title = defaultSEO.title,
    description = defaultSEO.description,
    keywords = defaultSEO.keywords,
    url = defaultSEO.url,
    image = defaultSEO.image,
  } = seoData;

  // Update title
  document.title = title;

  // Update or create meta tags
  const updateMeta = (name, content, property = false) => {
    const attribute = property ? 'property' : 'name';
    let meta = document.querySelector(`meta[${attribute}="${name}"]`);

    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(attribute, name);
      document.head.appendChild(meta);
    }

    meta.setAttribute('content', content);
  };

  // Standard meta tags
  updateMeta('title', title);
  updateMeta('description', description);
  updateMeta('keywords', keywords);
  updateMeta('robots', 'index, follow');

  // Open Graph tags
  updateMeta('og:type', 'website', true);
  updateMeta('og:url', url, true);
  updateMeta('og:title', title, true);
  updateMeta('og:description', description, true);
  updateMeta('og:image', image, true);

  // Twitter tags
  updateMeta('twitter:card', 'summary_large_image', true);
  updateMeta('twitter:url', url, true);
  updateMeta('twitter:title', title, true);
  updateMeta('twitter:description', description, true);
  updateMeta('twitter:image', image, true);

  // Update canonical link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
};

/**
 * Generate structured data for a project
 * @param {Object} project - Project data
 * @returns {Object} - JSON-LD structured data
 */
export const generateProjectSchema = (project) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: project.name,
    description: project.description,
    applicationCategory: 'MobileApplication',
    operatingSystem: 'Any',
    author: {
      '@type': 'Person',
      name: 'Forhad Mia',
      url: 'https://forhadmia.netlify.app',
    },
    screenshot: project.image,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };
};

/**
 * Add structured data to page
 * @param {Object} schema - JSON-LD schema object
 */
export const addStructuredData = (schema) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
};

/**
 * Remove structured data from page
 */
export const removeStructuredData = () => {
  const scripts = document.querySelectorAll(
    'script[type="application/ld+json"]',
  );
  scripts.forEach((script) => script.remove());
};
