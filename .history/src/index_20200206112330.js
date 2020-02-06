const express = require('express')
constm
const app = express()
const port = process.env.PORT || 3000

app.listen(port, () = > {
    console.log('Server is listening on port %i', port)
})