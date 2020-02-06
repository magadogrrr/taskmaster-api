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
        type: Nu,
        required: true,
        trim: true
    },
    visibility: {
        type: String,
        match: 'public|private|managed',
        default: 'public'
    }
})

module.exports = Task