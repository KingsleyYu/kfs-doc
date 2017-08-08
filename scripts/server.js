'use strict';

var path = require('path');
var express = require('express');
var webpack = require('webpack');

// module.exports = function (config, port, callback) {
//   var app = express();
//   var webpackConfig = require('./webpack.config.dev')(config);

//   var compiler = webpack(webpackConfig);

//   app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: webpackConfig.output.publicPath,
//     historyApiFallback: true,
//     stats: {
//       colors: true
//     }
//   }));

//   app.use(require('webpack-hot-middleware')(compiler));

//   app.use('/public', express.static('public'));

//   app.get('*', function (req, res) {
//     res.sendFile(path.join(process.cwd(), config.outdir, 'index.html'));
//   });

//   const server = app.listen(port, function (err) {
//     callback&&callback(err);
//   });
// }


const createServer = require('./create-server');

module.exports = function server(config, callback) {
  const env = 'development';

  const port = config.serverPort || 9003;
  const host = config.serverHost || 'localhost'

  const serverInfo = createServer(config, port, env);

  serverInfo.app.listen(port, host, callback);

  return serverInfo.compiler;
};

