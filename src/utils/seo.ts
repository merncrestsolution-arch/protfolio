export const SEO = {
  title: 'Mohamed Shakkir — Senior Full-Stack Developer & CEO | MernCrest Solutions',
  description: 'Portfolio of Mohamed Shakkir, Founder of MernCrest Solutions, Sri Lanka. 25+ projects, AWS specialist, MERN stack expert.',
  keywords: 'full-stack developer, MERN stack, AWS, React, Node.js, Sri Lanka, web development',
  author: 'Mohamed Shakkir',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://mohammedshakkir.online',
  image: '/images/hero-avatar.png',
};

export function updateMetaTags() {
  document.title = SEO.title;
  
  const metaTags = [
    { name: 'description', content: SEO.description },
    { name: 'keywords', content: SEO.keywords },
    { name: 'author', content: SEO.author },
    { property: 'og:title', content: SEO.title },
    { property: 'og:description', content: SEO.description },
    { property: 'og:image', content: `${SEO.siteUrl}${SEO.image}` },
    { property: 'og:url', content: SEO.siteUrl },
    { name: 'twitter:card', content: 'summary_large_image' },
  ];

  metaTags.forEach(({ name, property, content }) => {
    const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
    let meta = document.querySelector(selector);
    
    if (!meta) {
      meta = document.createElement('meta');
      if (name) meta.setAttribute('name', name);
      if (property) meta.setAttribute('property', property);
      document.head.appendChild(meta);
    }
    
    meta.setAttribute('content', content);
  });
}
