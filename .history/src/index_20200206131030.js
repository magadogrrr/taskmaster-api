const express = require('express')
require('./db/mongoose.js')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then((user) => {
        console.log('saving user')
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.send(users)
    }).catch((error) => {})
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id
    User.findById(_id).then((user) => {
        if (!user) {
            res.status(404).send()
        }
        res.send(user)
    }).catch((error) => {
        res.status(2)
    })
})


app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    task.save().then((task) => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})



app.listen(port, () => {
    console.log('Server is listening on port %i', port)
})