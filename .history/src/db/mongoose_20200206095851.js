const mongoose = require('mongoose')
const Validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/taskmaster-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})


const User = mongoose.model('User', {
    username: {
        type: String,
        required: true
    },
    age: {
        type: Number
        validate: {
            validator: function(v) {
                returnv > 0
            },
            message: 'Age must be positive'
        }
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return Validator.isEmail(v)
            },
            message: 'Not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        match: '!(password)',
        
    }


})