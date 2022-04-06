module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: "http://41.223.76.68:3306",
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "URL",
        ws: true,
        changeOrigin: true,
      },
    },
  },
  outputDir: "../client-build",
};
