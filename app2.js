const express = require('express');
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

/* Router */
const pugRouter = require("./router/pug");
app.use("/pug", pugRouter);


app.get("/sqltest", async (req, res) => {
	let sql = "INSERT INTO board SET title=?, writer=?, wdate=?, content=?";
	let sqlVals = ["제목입니다2.", "관리자2", "2020-01-05 15:55:00"];
	const connect = await pool.getConnection();
	const result = await connect.query(sql, sqlVals);
	connect.release();
	res.json(result);
});