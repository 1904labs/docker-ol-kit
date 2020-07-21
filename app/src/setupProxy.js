const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  var geoserverHost = process.env.REACT_APP_GEOSERVER
  if (geoserverHost && geoserverHost.length > 0){
    app.use(
      '/geoserver',
      createProxyMiddleware({
        target: geoserverHost,
        changeOrigin: true,
      })
    );
  }
};
