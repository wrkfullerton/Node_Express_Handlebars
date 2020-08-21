// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "l6slz5o3eduzatkw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "zd8r0td4y9w7ftbs",
  password: "gz69st69ufa260i1",
  database: "x66ijdt1fgvvj992"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
