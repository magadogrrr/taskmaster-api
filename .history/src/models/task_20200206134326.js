const mongoose = require('mongoose')
const Validator = require('validator')


const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: ObjectId,
        required: true,
        trim: true
    },
visibility:{
type: String,
match:'public|private|'
}
})

module.exports = Task