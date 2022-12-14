const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Author = require('../model/authorModel');


const bookSchema = new Schema({
    Name : {
        type: String,
        required: true,
        //white space is trimmed off the end
        trim: true,
    },
    ISBN: {
        type: String,
        required: true,
        //white space is trimmed off the end
        trim: true,
    },
    BookAuthor: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Author',
        required: true,
       
    }
})

module.exports = mongoose.model('Book', bookSchema);