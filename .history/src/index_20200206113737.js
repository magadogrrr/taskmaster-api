const express = require('express')
require('./db/mongoose.js')
const User = required('./db/model/User.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    console.log(req.body)
    res.send('testing')
})






app.listen(port, () = > {
    console.log('Server is listening on port %i', port)
})