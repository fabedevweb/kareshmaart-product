module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: "http://kareshmaart.com",
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
