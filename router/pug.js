const express = require('express');
const router = express.Router();

/*
/pug/update/4 <- 요청처리시
----app.js----
const pugRouter = reqire("./router/pug");
app.use("/pug", pugRouter);
*/
router.get("/sample", (req, res) => {
	res.send("/router/sample");
});

module.exports = router;