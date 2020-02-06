const mongoose = require('mongoose')
const Validator = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number

    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        
        trim: true,
        minlength: 6
    }


})

module.exports = User