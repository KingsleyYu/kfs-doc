var path = require('path');
var express = require('express');
var webpack = require('webpack');



module.exports = function (config, callback) {
  var app = express();
  var webpackConfig = require('./webpack.config.dev')(config);

  var compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));

  app.use('/public', express.static('public'));

  app.get('*', function (req, res) {
    res.sendFile(path.join(process.cwd(), config.outdir, 'index.html'));
  });

  app.listen(9003, function (err) {
    if (err) {
      console.log(err);
      return;
    }

    console.log('Listening at http://localhost:9003');
  });

}
