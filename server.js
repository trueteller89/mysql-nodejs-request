var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'usr',
  password : 'pwd',
  database : 'db'
});
 
connection.connect();
 
connection.query('SELECT * from users where ID > 20', function (error, results, fields) {
  if (error) throw error;
  console.log('Users: ', results);
});
 
connection.end();