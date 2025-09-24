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





// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
//   });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   let sql = "INSERT INTO customers (name, address) VALUES ('APPLE COMPUTERS', 'UNITED STATES')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
//   });

  con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});