const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/taskmaster-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

mongoose.model('task', {
    description: {
        type: String
    },
    completed: Boolean
}
})