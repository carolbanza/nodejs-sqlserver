let mysql = require('mysql');

// let con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: ""
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb_node_2025ins", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

//let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb_node_2025"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  let sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
  });