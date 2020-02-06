const express = require('express')
require('./db/mongoose.js')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)
    console.log(req.body
    /* user.save().then((user) => {
        console.log('saving user')
        res.send(user)
    }).catch((error) => {
        console.log(error)
    }) */
})






app.listen(port, () => {
    console.log('Server is listening on port %i', port)
})