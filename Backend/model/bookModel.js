const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    Author: {
        type: authorSchema,
        required: true
    }
})