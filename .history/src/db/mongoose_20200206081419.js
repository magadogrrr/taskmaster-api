const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/taskmaster-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})


const task = new Task({
    description: 'a new task',
    completed: false
})

task.save().then((task) => {
    
}).catch(()=>{})