const mysql = require("mysql");

// create here mysql connection

const dbConn = mysql.createConnection({
  host: "localhost",
  user: "avfa5526_kareshmaart_fabrice",
  password: "kareshmaart**",
  database: "avfa5526_kareshmaart",
});

dbConn.connect(function(error) {
  if (error) throw error;
  console.log("Database Connected Successfully!!!");
});

module.exports = dbConn;
