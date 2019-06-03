//CRUD

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Não foi possível conectar o banco de dados!')
    }
    //console.log('Banco de dados conectado!')
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Elvis',
    //     age: 37
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Não foi possível inserir o usuário')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Debora',
    //         age: 43
    //     },
    //     {
    //         name: 'Arthur',
    //         age: 6
    //     }
    // ], (error, result) =>{
    //     if (error) {
    //         return console('Não foi possível inserir')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Supermercado',
            completed: true
        },{
            description: 'Lição de casa',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Não foi possível inseror os registros')
        }

        console.log(result.ops)
    })
})