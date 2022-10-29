const express =require("express");

const authorRoute = express.Router();
const cors = require('cors');

const {createAuthor, getAllAuthors, updateAuthorDetails, deleteAuthor, getAuthorbyID} = require("../controller/authorController");

authorRoute.use(cors());

//create an author in the system
authorRoute.post('/create', createAuthor);

//View All authors
authorRoute.get('/view', getAllAuthors);

//Update Author Details by ID
authorRoute.put('/update/:id', updateAuthorDetails);

//Delete Author by ID
authorRoute.delete('/delete/:id', deleteAuthor);

//Get author details by ID
authorRoute.get('/viewbyID/:id', getAllAuthors)

module.exports = authorRoute;
