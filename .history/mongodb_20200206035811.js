const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient

const conn = 'mongodb://127.0.0.1:27017'
const dbName = 'taskmaster'

mongoClient.connect(con)