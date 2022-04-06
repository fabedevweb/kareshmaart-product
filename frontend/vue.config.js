module.exports = {
  productionSourceMap: false,
  devServer: {
    proxy: "http://localhost:3000",
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
