//const SitemapPlugin = require("sitemap-webpack-plugin").default;
// You can write the paths as an array of strings or an array of objects
module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: "https://www.kareshmaart.com/api/",
  },
  outputDir: "../client-build",
};
