// scripts/generate-sitemap.js
import { createRoutesManifest } from '@remix-run/dev/dist/config/routes.js';
import { createConfig } from '@remix-run/dev/config.js';
import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://yourdomain.com';

async function main() {
  // Create the Remix config
  const config = await createConfig({
    rootDirectory: process.cwd(),
    mode: 'production',
  });

  // Get the route manifest
  const routeManifest = createRoutesManifest(config.routes);

  // Extract and clean up paths
  const paths = Object.values(routeManifest)
    .map((route) => route.path || '') // root route has `undefined`, default to ''
    .filter((p) => !p.includes(':') && !p.endsWith('.xml') && p !== '*'); // exclude dynamic & sitemap

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((routePath) => {
    return `  <url>
    <loc>${DOMAIN}/${routePath}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  const outputPath = path.join('public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemapXml);
  console.log('✅ Sitemap generated at public/sitemap.xml');
}

main().catch((err) => {
  console.error('❌ Failed to generate sitemap:', err);
  process.exit(1);
});