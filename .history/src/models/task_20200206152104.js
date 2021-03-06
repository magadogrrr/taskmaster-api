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
        type: Number,
        trim: true
    },

    taskgroup: {
        type: String,
        default: 'default'
    }
})

module.exports = Task