const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

/*
const me = new User({
    name: 'Bhavuk', 
    age: 27
})

me.save().then( () => {
    console.log(me)
}).catch((er) =>{
    console.log('COULD NOT SAVE User', er)
})
*/

const Task = mongoose.model('Task', {
    desciption: {
        type: String
    },
    completed:{
        type: Boolean
    }
})

const mytask = new Task({
    desciption: "Get a plant",
    completed: false
})

mytask.save().then( () => {
    console.log(task)
}).catch((er) => {
    console.log(er)
})