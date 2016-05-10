
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'y83zus9s2udaktgd',
  password : 'aroqcqs0at2kmvms ',
  database : 'wsaejtjmzj2e7xj6'
});
 
connection.connect(function(err){
	if (err){
		console.log('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
});
 

module.exports = connection;
