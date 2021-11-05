const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value))
                throw new Error('Invalid e-mail')
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        validate(value)
        {
            // let pwd = value.trim().toLowerCase()
            // if(value.length < 6)
            //     throw new Error('Password must be greater than 6 characters')
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    }
})

/*
const me = new User({
    name: 'Ravi Kishan', 
    age: 43,
    email: 'ravi@gmx.com',
    password: 'NavalRavicant'
})

me.save().then( () => {
    console.log(me)
}).catch((er) =>{
    console.log('COULD NOT SAVE User', er)
})
*/

const Task = mongoose.model('Task', {
    desciption: {
        type: String,
        trim: true,
        required: true,

    },
    completed:{
        type: Boolean,
        default: false
    }
})

const mytask = new Task({
    desciption: "Get a house     ",
})

mytask.save().then( () => {
    console.log(mytask)
}).catch((er) => {
    console.log(er)
})
