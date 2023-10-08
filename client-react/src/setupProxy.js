const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/card',
    createProxyMiddleware({
      target: 'https://maps.googleapis.com', // Your Google Places API endpoint
      changeOrigin: true,
    })
  );
};
