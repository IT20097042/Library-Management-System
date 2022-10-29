const asyncHandler = require('express-async-handler');
const Author = require('../model/authorModel');

const createAuthor = asyncHandler ( async (req, res) => {
    const{FirstName,LastName} = req.body

    //Check whether vehicle is already registered
    const authorExist = await Author.findOne({FirstName})

    

    if(authorExist){
        res.status(400).json({
            success: false,
            message :`${FirstName} already exist `})
    }
    else{
        const authorNew = await Author.create({
            FirstName,
            LastName
            }
        )
        if(authorNew){
            res.status(201).json({
                success: true,
                message :`Author Successfully Registered!! `,
                authorNew
            })
        }else{
            res.status(400);
            throw new Error('Invalid  data')
        }
    }
    }

)

//Get all authors from the database.
const getAllAuthors = asyncHandler( async (req, res) => {
    const authorsData = await Author.find()

   if(authorsData){
       res.status(200).json({
               authorsData,
               success: true,
       }
       )
   }
    else{
        res.status(200).json({
            success: false,
            message : "No registered authors"

        })
   }
}

)

//Update author data
const updateAuthorDetails = asyncHandler( async (req, res) => {
    const Author_ID = req.params.id
    const authorExist = await Author.findById(req.params.id)

    if(authorExist){
        const authorUpdated = await Author.findByIdAndUpdate(Author_ID, req.body, {
            new : true,
        })
        res.status(200).json({
            success : true,
            message : " Author Details Updated  successfully",
            vehicleUpdated
        })

    }else{
        res.status(400) ;
        throw new Error('Author is not found ')
    }
})

//Delete Vehicle data
const deleteAuthor = asyncHandler( async (req, res) => {
    const Author_ID = req.params.id
    const authorExist = await Author.findById(req.params.id)
    if(authorExist){
        const authorDeleted = await Author.findByIdAndDelete(Author_ID)
        res.status(200).json({
            success : true,
            message : " Author Deleted successfully"
    })

    }else{
        res.status(400) ;
        throw new Error('Author is not found ')
    }
} )

//Get Author detials by ID
const getAuthorbyID = asyncHandler( async (req, res) => {
    const Author_ID = req.params.id
    const authorExist = await Author.findById(req.params.id)
    if(authorExist){
        res.status(200).json({
            success : true,
            authorExist
    })

    }else{
        res.status(400) ;
        throw new Error('Author is not found ')
    }
}

)

module.exports = { createAuthor, getAllAuthors, updateAuthorDetails, deleteAuthor, getAuthorbyID}