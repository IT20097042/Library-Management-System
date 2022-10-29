const asyncHandler = require('express-async-handler');
const Book= require('../model/bookModel');
const Author = require('../model/authorModel');

const insertBook = asyncHandler ( async (req, res) => {
    const{Name, ISBN, BookAuthor} = req.body
    // const author = await Author.findOne({Author})
    //Check whether book is already registered
    const bookExist = await Book.findOne({Name})

    

    if(bookExist){
        res.status(400).json({
            success: false,
            message :`${Name} already exist `})
    }
    else{
        const bookNew = await Book.create({
            Name,
            ISBN,
            BookAuthor
            }
        )
        if(bookNew){
            res.status(201).json({
                success: true,
                message :`Book Successfully Registered!! `,
                bookNew
            })
        }else{
            res.status(400);
            throw new Error('Invalid  data')
        }
    }
    }

)

//Get all books from the database.
const getAllBooks = asyncHandler( async (req, res) => {
    const bookData = await Book.find();
    

   if(bookData){
       res.status(200).json({
               bookData,
               success: true,
       }
       )
   }
    else{
        res.status(200).json({
            success: false,
            message : "No registered books"

        })
   }
}

)

//Update book data
const updateBookDetails = asyncHandler( async (req, res) => {
    const Book_ID = req.params.id
    const bookExist = await Book.findById(req.params.id)

    if(bookExist){
        const bookUpdated = await Book.findByIdAndUpdate(Book_ID, req.body, {
            new : true,
        })
        res.status(200).json({
            success : true,
            message : " Book Details Updated  successfully",
            bookUpdated
        })

    }else{
        res.status(400) ;
        throw new Error('Book is not found ')
    }
})

//Delete book data
const deleteBook = asyncHandler( async (req, res) => {
    const Book_ID = req.params.id
    const bookExist = await Book.findById(req.params.id)
    if(bookExist){
        const bookDeleted = await Book.findByIdAndDelete(Book_ID)
        res.status(200).json({
            success : true,
            message : " Book Deleted successfully"
    })

    }else{
        res.status(400) ;
        throw new Error('Book is not found ')
    }
} )

//Get Book detials by ID
const getBookbyID = asyncHandler( async (req, res) => {
    const Book_ID = req.params.id
    const bookExist = await Book.findById(req.params.id)
    const authorExist = await Author.findById(bookExist.BookAuthor)

    const AuthorName = authorExist.FirstName+" "+ authorExist.LastName
    const bookData ={
        Name : bookExist.Name,
        ISBN : bookExist.ISBN,
        Author : AuthorName
    }
    if(bookExist){
        res.status(200).json({
            success : true,
            bookData
    })

    }else{
        res.status(400) ;
        throw new Error('Book is not found ')
    }
}

)


module.exports ={insertBook, getAllBooks, updateBookDetails, deleteBook, getBookbyID}