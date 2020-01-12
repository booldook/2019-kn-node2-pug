const express = require('express');
const router = express.Router();
const { pool, sqlErr } = require('../modules/mysql-conn');

/*
/pug/update/4 <- 요청처리시
----router.js----
const pugRouter = reqire("./router/pug");
router.use("/pug", pugRouter);
*/

router.get(["/", "/:page"], async (req, res) => {
	let page = req.params.page ? req.params.page : "list";
	let vals = {};
	switch(page) {
		case "list":
			vals.title = "게시글 리스트 입니다.";
			let sql = "SELECT * FROM board ORDER BY id DESC";
			const connect = await pool.getConnection();
			const result = await connect.query(sql);
			connect.release();
			vals.lists = result[0];
			res.render("list.pug", vals);
			break;
		case "write":
			vals.title = "게시글 작성 입니다.";
			res.render("write.pug", vals);
			break;
		default:
			res.redirect("/pug");
			break;
	}
});

router.get("/view/:id", async (req, res) => {
	let vals = {
		title: "게시글 상세 보기",
	}
	let id = req.params.id;
	let sql = "SELECT * FROM board WHERE id="+id;
	const connect = await pool.getConnection();
	const result = await connect.query(sql);
	connect.release();
	vals.data = result[0][0];
	res.render("view.pug", vals);
});

router.get("/delete/:id", async (req, res) => {
	let id = req.params.id;
	let sql = "DELETE FROM board WHERE id="+id;
	const connect = await pool.getConnection();
	const result = await connect.query(sql);
	connect.release();
	if(result[0].affectedRows == 1) {
		res.redirect("/pug");
	}
	else {
		res.send("삭제에 실패하였습니다.");
	}
});

router.get("/update/:id", async (req, res) => {
	const vals = {
		title: "게시글 수정",
	}
	const id = req.params.id;
	const sql = "SELECT * FROM board WHERE id="+id;
	const connect = await pool.getConnection();
	const result = await connect.query(sql);
	connect.release();
	vals.data = result[0][0];
	res.render("update.pug", vals);
});

router.post("/update", async (req, res) => {
	const sqlVals = [];
	sqlVals.push(req.body.title);
	sqlVals.push(req.body.content);
	sqlVals.push(req.body.id);
	const sql = "UPDATE board SET title=?, content=? WHERE id=?";
	const connect = await pool.getConnection();
	const result = await connect.query(sql, sqlVals);
	connect.release();
	if(result[0].changedRows == 1) {
		res.redirect("/pug");
	}
	else {
		res.send("수정에 실패하였습니다.");
	}
});

router.post("/create", async (req, res) => {
	let sql = "INSERT INTO board SET title=?, writer=?, wdate=?, content=?";
	let val = [req.body.title, req.body.writer, new Date(), req.body.content];
	const connect = await pool.getConnection();
	const result = await connect.query(sql, val);
	connect.release();
	res.redirect("/pug");
});

module.exports = router;