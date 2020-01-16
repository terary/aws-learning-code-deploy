"use strict";

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _ssr = _interopRequireDefault(require("./routes/ssr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _compression.default)());
app.use(_express.default.static("src/static"));

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());
} else {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'js');
  app.engine('js', require('express-react-views').createEngine());
}

app.use("/firstssr", _ssr.default);
app.get('/', require('./routes2').index);
app.get('/whoami', require('./routes2').whoami);

if (process.env.NODE_ENV === 'test') {
  module.exports.app = app;
} else {
  const port = process.env.PORT || 3030;
  app.listen(port, function listenHandler() {
    console.info(`Running on ${port}...`);
  });
} // const port = process.env.PORT || 3030;
// app.listen(port, function listenHandler() {
//   console.info(`Running on ${port}...`);
// });
// module.exports.app = app;