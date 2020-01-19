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
	cb(null, getFile(file.fieldname).newName);
}

const storage = multer.diskStorage({ destination, filename });

function getPath() {
	let newPath = path.join(__dirname, "../uploads/"+makePath());
}

function makePath() {
	let d = new Date();
	let year = d.getFullYear(); //2020
	let month = d.getMonth();		//
	return year.substr(2) + zp(month+1);
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
	return {
		newName: f1 + "-" + f2 + "-" + f3 + ext,
		newExt: ext,
		newFile: f1 + "-" + f2 + "-" + f3
	}
}

