/*
const mysql = require('mysql');
const conn = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '000000',
	port: 3307,
	database: 'node',
	connectionLimit: 10,
});

module.exports = {
	mysql,
	conn
}
*/

const mysql = require('mysql2/promise');
const pool = mysql.createPool({
	host: 'localhost',
	user: 'root',
	password: '000000',
	port: 3307,
	database: 'node',
	connectionLimit: 10,
});
const sqlErr = (err) => {
	console.error(err);
}
module.exports = {
	pool, sqlErr
}