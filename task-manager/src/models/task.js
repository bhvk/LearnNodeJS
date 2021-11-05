const mongoose = require('mongoose')

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