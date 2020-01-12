const express = require('express');
const router = express.Router();
const { pool, sqlErr } = require("../modules/mysql-conn");

/* 
get: Read/Select
post: Create/Insert
put: Update/Update
delete: Delete/Delete
*/

router.get();
router.post();
router.delete();
router.put();

module.exports = router;
