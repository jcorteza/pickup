const proxy = require("http-proxy-middleware");
//replaces  "proxy": "http://localhost:3001/", in package.json

module.exports = app => {
  app.use(proxy("/api/*", { target: "http://localhost:3001/" }));
  app.use(proxy("/dispatch/*", { target: "http://localhost:3001/" }));
};