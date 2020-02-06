const mongodb = require('mongodb')

const ObjectID = mongodb.ObjectID
const MongoClient = mongodb.MongoClient

const conn = 'mongodb://127.0.0.1:27017'
const dbName = 'taskmaster'

MongoClient.connect(conn, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log('unable to connect to db')
    }

    const db = client.db(dbName)

    db.collection('users').updateOne({
        _id: ObjectId("5e3be1d735fa5f3c107afc94")
    }, {
        $set: {
            name: 'Jesup'
        }
    }).then((result) => {
        console.log(result)
    }).catch(error) => {
        console.log(error)
    })

})