import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Definisci le rotte del tuo sito
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/gallery', changefreq: 'weekly', priority: 0.8 },
  // Aggiungi altre rotte se necessario
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: 'https://betteronbike.netlify.app' });
  const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));

  sitemapStream.pipe(writeStream);

  routes.forEach(route => sitemapStream.write(route));
  sitemapStream.end();

  await streamToPromise(sitemapStream);

  console.log('Sitemap generata correttamente!');
}

generateSitemap().catch(console.error);
