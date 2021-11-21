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

//USERS
app.post('/users', async (req, res) => {    
    // console.log(req.body)
    const user = new User(req.body)
    try{
        await user.save()
        res.status(201).send(user)
    }catch(e){
        res.status(400).send(e)
    }
/*    
    user.save().then( ()=> {
        // console.log("SAVING TO USERS model")
        res.status(201).send(user)
    }).catch( (er)=>{
        // console.log("COULD NOT SAVE TO USERS model" + er)
        res.status(400).send(er)
    })
*/
})

app.get("/users", async (req, res)=>{
    try{
        const users = await User.find({})
        res.status(200).send(users)
    }catch(e){
        res.status(500).send()
    }
/*
    User.find({}).then((users) => {
        res.status(200).send(users)
    }).catch((e) => {
        res.status(500).send()
    })
*/
})

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    }catch(e){
        res.status(500).send()   
    }
    /*
    const id = req.params.id
    // User.findOne({_id: id}).then((user) => {
    User.findById(id).then((user) => {
        
        if(!user){
            return res.status(404).send()
        }
        
        res.send(user)

    }).catch((e) => {
        res.status(500).send()
    })
    */
})

//TASKS
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(400).send(e)
    }
    /*
    task.save().then( ()=>{
        res.status(201).send(task)
    }).catch((e) => {
        res.status(400).send(e)
    })
    */
})

app.get('/tasks', async (req, res) => {
    try{
        const tasks = await Task.find({})
        if(!tasks)
            return res.status(404).send()
        res.send(tasks)
    }catch(e){
        res.status(500).send()
    }
    /* 
    Task.find({}).then((tasks) => {
        if(!tasks)
            return res.status(404).send()
        res.send(tasks)
    }).catch((e) => {
        res.status(500).send()
    })
    */
})

app.get('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    // this regex checks if string is valid hexdecimal representation
    if(!id.match(/[0-9a-fA-F]{24}$/)){
        return res.sendStatus(400);
    }
    try{
        const task = await Task.findById(id)
        if(!task)
            return res.sendStatus(404)
        res.send(task)
    }catch(e){
        res.sendStatus(500)
    }
    /*
    // this regex checks if string is valid hexdecimal representation
    if(!id.match(/[0-9a-fA-F]{24}$/)){
        return res.sendStatus(400);
    }

    Task.findById(id).then( (task) => {
        if(!task)
            return res.sendStatus(404)
        res.send(task)
    }).catch( (e) => {
        return res.sendStatus(500);
    })
    */
})

app.listen(port, () => {
    console.log("Server is up on port "+port)
})