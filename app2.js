const express = require('express');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const host = '127.0.0.1';

app.listen(port, () => {
	console.log(`http://${host}:${port}`);
});

app.set('view engine', 'pug');
app.set('views', './views');
app.use('/', express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.locals.pretty = true;

// form에서 PUT, DELETE를 보낼때 사용됨.(ajax 에서는 불필요하다)
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    let method = req.body._method
    delete req.body._method
    return method
  }
}));


/* Router */
const pugRouter = require("./router/pug");
const apiRouter = require("./router/api");
app.use("/pug", pugRouter);
app.use("/api", apiRouter);
