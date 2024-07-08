const fs = require('fs');
const xmlbuilder = require('xmlbuilder');

const urls = [
      { loc: 'https://parametrique.com/', lastmod: '2024-05-07T10:59:07+00:00' },
      { loc: 'https://parametrique.com/about-us/', lastmod: '2024-05-07T10:59:07+00:00' },
      { loc: 'https://parametrique.com/ftth/', lastmod: '2024-05-07T10:59:07+00:00' },
      { loc: 'https://parametrique.com/intercom/', lastmod: '2024-05-07T10:59:07+00:00' },
      { loc: 'https://parametrique.com/smartprepaidmeter/', lastmod: '2024-05-07T10:59:07+00:00' },
      { loc: 'https://parametrique.com/smarthomeautomation/', lastmod: '2024-05-07T10:59:07+00:00' },
      { loc: 'https://parametrique.com/videodoorphone/', lastmod: '2024-05-07T10:59:07+00:00' },
      { loc: 'https://parametrique.com/cctv/', lastmod: '2024-05-07T10:59:07+00:00' },
      { loc: 'https://parametrique.com/security/boombarrier/', lastmod: '2024-05-07T10:59:07+00:00' },
      { loc: 'https://parametrique.com/security/accesscontrol/', lastmod: '2024-05-07T10:59:07+00:00' },
      { loc: 'https://parametrique.com/security/parking/', lastmod: '2024-05-07T10:59:07+00:00' },
      { loc: 'https://parametrique.com/security/firealarm/', lastmod: '2024-05-07T10:59:07+00:00' },
      { loc: 'https://parametrique.com/contact-us/', lastmod: '2024-05-07T10:59:07+00:00' },
];

const root = xmlbuilder.create('urlset', { encoding: 'UTF-8' })
      .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9')
      .att('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance')
      .att('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd');

urls.forEach(url => {
      const urlElement = root.ele('url');
      urlElement.ele('loc', url.loc);
      urlElement.ele('lastmod', url.lastmod);
});

const sitemapXML = root.end({ pretty: true });

fs.writeFileSync('public/sitemap.xml', sitemapXML);
console.log('Sitemap generated successfully!');
