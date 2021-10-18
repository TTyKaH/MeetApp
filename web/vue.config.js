module.exports = {
  configureWebpack: {
    devServer: {
      disableHostCheck: true,
      port: 5000,
      proxy: {
        "/api": {
          target: "http://localhost:8080",
          secure: false,
          changeOrigin: true,
          logLevel: "debug",
        },
      },
    },
  },
};
