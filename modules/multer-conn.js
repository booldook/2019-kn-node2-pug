const multer = require('multer');
const path = require('path'); 	// node.js 기본 객체
const fs = require('fs') 				// node.js 기본 객체

const destination = (req, file, cb) => {
	cb(null, '/tmp/my-uploads');
}

const filename = (req, file, cb) => {
	cb(null, file.fieldname + '-' + Date.now());
}

const storage = multer.diskStorage({ destination, filename });

function getPath() {
	let newPath = path.join(__dirname, "../uploads");
}
console.log(path.join(__dirname, "../uploads"));

