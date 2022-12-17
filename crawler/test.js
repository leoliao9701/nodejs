const mysql2 = require("mysql2/promise");
require('dotenv').config();


(async () => {
  const connection = await mysql2.createConnection({
    host:process.env.DB_HOST ,//"localhost", //或是127.0.0.1
    port: process.env.DB_PORT, 
    user: process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
  });

  // simple query
  let result = await connection.query("SELECT * FROM `stocks`");
  let data = result[0];
  // console.log(result);
  console.log(data);

  connection.end();
})();