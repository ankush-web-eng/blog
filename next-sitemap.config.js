/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || "https://blog.ankushsingh.tech",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: "daily",
    priority: 0.7,
    robotsTxtOptions: {
      additionalSitemaps: [
        "https://blog.ankushsingh.tech/sitemap.xml",
      ],
    },
  };
  