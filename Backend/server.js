const express = require('express');
const dotenv = require('dotenv').config();

//initialize app variable with express
const app = express()
const connectDB = require('./config/db')


const PORT =  5000;


connectDB();

app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`))