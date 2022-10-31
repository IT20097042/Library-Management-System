const express =require("express");

const bookRoute = express.Router();
const cors = require('cors');


const{insertBook, getAllBooks, updateBookDetails , deleteBook, getBookbyID} = require("../controller/bookController");

bookRoute.use(cors());

//insert an book in the system
bookRoute.post('/insert', insertBook);

//View All books
bookRoute.get('/view', getAllBooks);

//Update Book Details by ID
bookRoute.put('/update/:id', updateBookDetails);

//Delete Book by ID
bookRoute.delete('/delete/:id', deleteBook);

//Get Book details by ID
bookRoute.get('/viewbyID/:id', getBookbyID)

module.exports = bookRoute;