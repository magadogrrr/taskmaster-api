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

            /*  db.collection('users').insertMany([{
            name: 'junebug',
            age: 30
        },
        {
            name: 'kaya',
            age: 27
        },
        {
            name: 'ember',
            age: 49
        }
    ], (error, result) => {
        if (error) {
            return console.log('couldn\'t save the items to the users collection')
        }
        console.log(result.ops)
    })
}) */

            db.collection('tasks').insertMany([{
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
                if(error)
            })