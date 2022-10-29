const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    
    FirstName : {
        type: String,
        required: true,
        //white space is trimmed off the end
        trim: true,
    },
    LastName: {
        type: String,
        required: true,
        //white space is trimmed off the end
        trim: true,
    }
})

module.exports = mongoose.model('Author', authorSchema);