module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: "http://109.234.162.107:3000",
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
