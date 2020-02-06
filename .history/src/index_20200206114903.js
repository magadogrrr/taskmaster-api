const express = require('express')
require('./db/mongoose.js')
const User = require('./models/User.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)
    user.save().then(() => {})
})






app.listen(port, () => {
    console.log('Server is listening on port %i', port)
})