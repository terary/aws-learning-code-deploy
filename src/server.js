import express from "express";
import compression from "compression";
import ssr from "./routes/ssr";
const app = express();


app.use(compression());
app.use(express.static("src/static"));


app.set('views', __dirname + '/views');
// app.set('views',  './views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


app.use("/firstssr", ssr);

app.get('/', require('./routes2').index);




const port = process.env.PORT || 3030;
app.listen(port, function listenHandler() {
  console.info(`Running on ${port}...`);
});


