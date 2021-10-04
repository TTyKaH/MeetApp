module.exports = {
  devServer: {
    port: 5000,
    proxy: { "^/api": { target: "http://localhost:8080", changeOrigin: true } },
  },
};
