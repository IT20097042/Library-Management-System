const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyparser = require("body-parser");

//initialize app variable with express
const app = express();

const connectDB = require("./config/db");
const PORT = 5000;

//routes
var authorRoute = require("./routes/authorRoute");
var bookRoute = require("./routes/bookRoute");

app.use(cors());
app.use(bodyparser.json());

// encoding the bodyparser to the url, then making extends as false
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);

app.use("/authors", authorRoute);
app.use("/books", bookRoute);

connectDB();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
