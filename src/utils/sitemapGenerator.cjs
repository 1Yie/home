const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { resolve } = require('path');

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: 'https://ichiyo.in' });
  const writeStream = createWriteStream(resolve(__dirname, '../../public/sitemap.xml'));

  const routes = [
    { path: "/" },
    { path: "about" },
    { path: "links" },
  ];

  // 将路由信息写入 sitemap
  routes.forEach((route) => {
    sitemapStream.write({ url: route.path, changefreq: 'daily', priority: route.path === "/" ? 1.0 : 0.7 });
  });

  sitemapStream.end();

  // 将生成的 sitemap 写入文件
  streamToPromise(sitemapStream).then((sitemap) => {
    writeStream.write(sitemap.toString());
    writeStream.end();
    console.log('Sitemap generated successfully!');
  }).catch((err) => {
    console.error('Error generating sitemap:', err);
  });
}

// 运行生成站点地图的函数
generateSitemap();
