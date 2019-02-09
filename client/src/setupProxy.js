const proxy = require('http-proxy-middleware');
// add to package.json  "proxy": "http://localhost:3001/",

module.exports = function(app) {
    app.use(proxy('/api', { target: 'http://localhost:3001/' }));
};