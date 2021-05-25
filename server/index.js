const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mysql = require("mysql");
const PORT = 3001;

dotenv.config();
 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: process.env.PASSWORD,
    database: 'passwordmanager',
})

app.listen(PORT, ()=> {
    console.log(`Server is running: http://localhost:${PORT}/`)
})