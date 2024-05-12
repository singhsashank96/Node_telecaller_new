require('dotenv').config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const routes = require("./src/route");


const app = express();
// app.use('/uploads', express.static('uploads'))
const PORT =  3003;


app.use(cors());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// connecting with database
const mysql = require('mysql');

const pool = mysql.createPool({
  host: '217.21.87.205',
  user: 'u553948927_telecaller',
  password: 'Izequal2@tech',
  database: 'u553948927_telecaller'
});

// Check database connection on application startup
pool.getConnection((error, connection) => {
  if (error) {
    console.error('Error connecting to database:', error);
    return;
  }

  console.log('Connected to database.');

  // Release the connection
  connection.release();
});

// Handle connection errors
pool.on('error', (error) => {
  console.error('MySQL connection error:', error);
});


app.get("/", (req, res) => res.send(`Server listing on port ${PORT}`));
app.use("/api", routes);
app.all("*", (req, res) => res.status(404).json({ error: "404 Not Found" }));




const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

