/*
1. npm i multer
2. var storage = multer.storage({destinationCb, filenameCb});
3. var upload = multer({storage});
4. app.post("경로", upload.single("파일필드명"), (req, res) => {})
*/
const multer = require('multer');
const path = require('path'); 		// node.js 기본 객체
const fs = require('fs'); 				// node.js 기본 객체

const destination = (req, file, cb) => {
	/*
	let d = new Date();
	let dir = d.getFullYear().substr(2) + ((d.getMonth()+1 < 10) ? "0"+d.getMonth()+1 : d.getMonth());
	*/
	cb(null, getPath());
}

const filename = (req, file, cb) => {
	cb(null, getFile(file.originalname));
}

const fileFilter = (req, file, cb) => {
	let allowExt = ['.jpg', '.jpeg', '.gif', '.png', '.zip', '.txt', '.pdf'];
	let ext = path.extname(file.originalname).toLocaleLowerCase();
	if(allowExt.indexOf(ext) > -1) {
		req.fileUploadChk = true;
		cb(null, true);
	}
	else {
		req.fileUploadChk = false;
		cb(null, false);
	}
}

const storage = multer.diskStorage({ destination, filename });
const upload = multer({storage, fileFilter});

function getPath() {
	let newPath = path.join(__dirname, "../uploads/"+makePath());
	if(!fs.existsSync(newPath)) {
		fs.mkdirSync(newPath);
	}
	return newPath;
}

function makePath() {
	let d = new Date();
	let year = d.getFullYear(); //2020
	let month = d.getMonth();		//01
	return String(year).substr(2) + zp(month+1);
}

function zp(d) {
	return d<10 ? "0"+d : d;
}

function getFile(oriFile) {
	let ext = path.extname(oriFile); //.jpg
	let name = path.basename(oriFile, ext);
	let f1 = makePath();	//2001
	let f2 = Date.now();	//timestamp
	let f3 = Math.floor(Math.random() * 90) + 10;	//10 ~ 99
	return f1 + "-" + f2 + "-" + f3 + ext;
}

module.exports = {upload};
