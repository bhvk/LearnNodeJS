//Index.js
const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())

app.get("", (req, res)=>{
    res.send('INDEX.js');
})

app.get("/user", (req, res)=>{
    res.send('GETTING USER');
})

app.post('/users', (req, res) => {    
    // console.log(req.body)
    const user = new User(req.body)

    user.save().then( ()=> {
        // console.log("SAVING TO USERS model")
        res.status(201).send(user)
    }).catch( (er)=>{
        // console.log("COULD NOT SAVE TO USERS model" + er)
        res.status(400).send(er)
    })

})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)
    console.log(task)
    
    task.save().then( ()=>{
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log("Server is up on port "+port)
})