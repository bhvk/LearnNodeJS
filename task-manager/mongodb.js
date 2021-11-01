// CRUD ops : Create, Read, Update, Delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const {MongoClient, ObjectId} = require('mongodb')

// const id = new ObjectId();
// console.log(id)
// console.log(id.getTimestamp())

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log('Cannot connect to database')
    }
    console.log('Connected to database')
    const db = client.db(databaseName)

/*CREATE*/
/*
    db.collection('users').insertOne({
        name: 'akshay',
        age: 22
    }, (error, result) => {
        if(error){
            return console.log(error)
        }
        console.log(result)
    })
    console.log(client)

    db.collection('users').insertMany([
        {
            name: 'Suraj',
            age: 52
        }, 
        {
            name: 'Goli',
            age: 32
        }
    ], (error, result) => {
        if(error){
            return console.log(error)
        }
        console.log(result)
    })
*/
/*
db.collection('tasks').insertMany([
    {
        // _id : id,  //you can provide your own id as formed above via new ObjectId()
        description: 'Clean the house',
        completed: true
    }, 
    {
        description: 'Do Laundary',
        completed: false
    },
    {
        description: 'Buy Milk',
        completed: false
    }
], (error, result) => {
    if(error){
        return console.log('Error with tasks collection')
    }
    console.log(result)
})
*/

    // const ans = db.collections('users').find('age' > 27)
    const users = db.collection("users")

    // query to find users aged more than 50
    const query = { age: { $gt: 50 } };
/*READ*/    
    users.findOne(query, (error, ans)=>{
        if(error){
            return console.log("Query ERRORWS!")      
        }
        else if(ans.length === 0){
            return console.log("NO RESULTS FOR THE INPUT QUERY")
        }
        console.log(ans)
    })
    // users.find(query).toArray((error, ans) => {
    //     if(error){
    //         return console.log("find errored!")
    //     }
    //     console.log(ans)
    // })
})