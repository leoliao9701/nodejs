const mysql2 = require("mysql2/promise");

(async () => {
  const connection = await mysql2.createConnection({
    host: "localhost", //或是127.0.0.1
    port: 3306, 
    user: "admin",
    password: "",
    database: "stock_mfee31",
  });

  // simple query
  let result = await connection.query("SELECT * FROM `stocks`");
  let data = result[0];
  // console.log(result);
  console.log(data);

  connection.end();
})();