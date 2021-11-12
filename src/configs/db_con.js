import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();
var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

export default connection;
