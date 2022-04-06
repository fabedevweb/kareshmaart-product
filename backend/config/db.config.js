const mysql = require("mysql");

// create here mysql connection

const dbConn = mysql.createConnection({
  host: "109.234.162.107",
  port: 3306,
  user: "avfa5526_kareshmaart_fabrice",
  password: "kareshmaart**",
  database: "avfa5526_kareshmaart",
});

dbConn.connect(function(error) {
  if (error) throw error;
  console.log("Database Connected Successfully!!!");
});

module.exports = dbConn;
