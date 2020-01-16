import express from "express";
import compression from "compression";
import ssr from "./routes/ssr";
const app = express();


app.use(compression());
app.use(express.static("src/static"));


if(process.env.NODE_ENV !== 'production' &&  process.env.NODE_ENV !== 'test') {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());
}else {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'js');
  app.engine('js', require('express-react-views').createEngine());

}


app.use("/firstssr", ssr);

app.get('/', require('./routes2').index);
app.get('/whoami', require('./routes2').whoami);



if(process.env.NODE_ENV === 'test'){
  module.exports.app = app;
}else {
  const port = process.env.PORT || 3030;
  app.listen(port, function listenHandler() {
    console.info(`Running on ${port}...`);
  });
}

// const port = process.env.PORT || 3030;
// app.listen(port, function listenHandler() {
//   console.info(`Running on ${port}...`);
// });
// module.exports.app = app;

