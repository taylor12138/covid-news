const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://124.221.135.88:5208/",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    })
  );
};
