const express = require('express')
require('./db/mongoose.js')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post()






app.listen(port, () = > {
    console.log('Server is listening on port %i', port)
})