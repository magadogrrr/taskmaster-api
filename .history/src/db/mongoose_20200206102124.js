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
        type: Number,
        validate(value) {
            return value > 0
        }
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (Validator.isEmail(value)) {
                throw new Error('')
            }
        }
    },
    password: {
        type: String,
        required: true,
        validate(value) {
            if (value.toLowerCase() === 'password') {
                throw new Error('cannot be password')
            }
        }
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

user.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})