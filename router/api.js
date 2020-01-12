const express = require('express');
const router = express.Router();
const { pool, sqlErr } = require("../modules/mysql-conn");

/* 
get: Read/Select
post: Create/Insert
put: Update/Update
delete: Delete/Delete
*/

router.get(["/get", "/get/:id"], async (req, res) => {
	let sql = '';
	if(req.params.id) sql = "SELECT * FROM board WHERE id="+req.params.id;
	else sql = "SELECT * FROM board ORDER BY id DESC";
	const connect = await pool.getConnection();
	const result = await connect.query(sql);
	connect.release();
	res.json(result[0]);
});
//router.post();
//router.delete();
//router.put();

module.exports = router;
