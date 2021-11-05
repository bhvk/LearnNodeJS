const mongoose = require('mongoose')
const validator = require('validator')


const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number,
        default: 0
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

module.exports = User 