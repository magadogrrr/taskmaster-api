const express = require('express')
const mongoose = require('')
const app = express()
const port = process.env.PORT || 3000

app.listen(port, () = > {
    console.log('Server is listening on port %i', port)
})