/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://blog.ankushsingh.tech",
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 0.9,
  additionalPaths: async (config) => [
    {
      loc: '/',
      priority: 1.0,
      lastmod: new Date().toISOString(),
    },
  ],
};

