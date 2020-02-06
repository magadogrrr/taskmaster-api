const mongoose = require('mongoose')
const Validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/taskmaster-api', {
    useNewUrlParser: true,
    useCreateIndex: true
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
        trim: true,
        minlength: 6
    }


})

const user = new User({
    username: 'testuser',
    age: 12,
    email: 'tpayseno@gmail.com',
    password: 'xxxxxxx'
})

user.save().then().catch(()=>{})