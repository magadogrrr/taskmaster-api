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
        required: true,
        validate(value) {
            if (!Validator.isEmail(value)) {
                throw new Error('invalid format')
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('cannot be password')
            }
        },
        trim: true,
        minlength: 6
    }


})

module.exports = User