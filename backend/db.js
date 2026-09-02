const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "mysql",
  user: "root",
  password: "root",
  database: "devopsdb",
});

connection.connect((err) => {
  if (err) {
    console.log("Database connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = connection;
