const express = require('express');
const dotenv = require('dotenv').config();

//initialize app variable with express
const app = express()


const PORT =  5000;



app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`))