//const SitemapPlugin = require("sitemap-webpack-plugin").default;
// You can write the paths as an array of strings or an array of objects
/*
const paths = [
  {
    path: "/",
    lastmod: "2021-11-22",
    priority: 1.0,
    changefreq: "yearly",
  },
  {
    path: "/Tableaux",
    lastmod: "2021-11-22",
    priority: 1.0,
    changefreq: "yearly",
  },
  {
    path: "/blog",
    lastmod: "2021-11-22",
    priority: 1.0,
    changefreq: "yearly",
  },
  {
    path: "/moi",
    lastmod: "2021-11-22",
    priority: 1.0,
    changefreq: "yearly",
  },
  {
    path: "/contact",
    lastmod: "2021-11-22",
    priority: 1.0,
    changefreq: "yearly",
  },
];
*/
module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: "https://kareshmaart.com/api/",
  },
  /*
  devServer: {
    proxy: {
      "^/api": {
        target: "URL",
        ws: true,
        changeOrigin: true,
      },
    },
  },
  */
  /*
  configureWebpack: {
    plugins: [new SitemapPlugin({ base: "https://kareshmaart.com", paths })],
  },
*/
  outputDir: "../client-build",
};
