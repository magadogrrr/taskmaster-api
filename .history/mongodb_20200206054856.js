const mongodb = require('mongodb')

const ObjectID = mongodb.ObjectID
const MongoClient = mongodb.MongoClient

const conn = 'mongodb://127.0.0.1:27017'
const dbName = 'taskmaster'

MongoClient.connect(conn, {useUnifiedTopology: true,
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('unable to connect to db')
    }

    const db = client.db(dbName)
    const id = new ObjectID()
    console.log(id)
    console.log(id.id)

    console.log(id.id.length)
    console.log(id.toHexString())
    console.log(id.toHexString().length)

    console.log(id.getTimestamp())



})