import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Ottieni il path corrente
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0, lastmod: new Date().toISOString() },
  { url: '/about', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
  { url: '/gallery', changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() },
  // Aggiungi altre rotte se necessario
];

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: 'https://betteronbike.netlify.app' });
  const writeStream = createWriteStream(resolve(__dirname, 'public', 'sitemap.xml'));

  try {
    // Scrivi tutte le rotte nello stream della sitemap
    routes.forEach(route => sitemapStream.write(route));

    sitemapStream.end();

    // Attendi la promessa per completare lo stream e scrivere il file
    const data = await streamToPromise(sitemapStream);
    writeStream.write(data.toString());
    writeStream.end();

    console.log('Sitemap generata correttamente!');
  } catch (error) {
    console.error('Errore durante la generazione della sitemap:', error);
  }
}

generateSitemap().catch(console.error);
