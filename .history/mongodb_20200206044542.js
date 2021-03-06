const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient

const conn = 'mongodb://127.0.0.1:27017'
const dbName = 'taskmaster'

mongoClient.connect(conn, {
            useNewUrlParser: true
        }, (error, client) => {
            if (error) {
                return console.log('unable to connect to db')
            }

            const db = client.db(dbName)

          

            db.collection('tasks').insertMany(
                [{
                        description: 'create tasks collection',
                        completed: false
                    },
                    {
                        description: 'implement callback',
                        completed: true
                    }, {
                        description: 'test the insert',
                        completed: false
                    }
                ], (error, result) => {
                    if (error) {
                        return console.log('unable to insert')
                    }
                    console.log(result.ops)
                })