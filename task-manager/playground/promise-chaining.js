require('../src/db/mongoose')
const Task  = require('../src/models/task')
/*
Task.findByIdAndDelete('6193ff67299a5515959d72de').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) =>{
    console.log(e)
})
*/
const deleteTaskAndCount = async (id) => {
    const res = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed : false})
    return count
}

deleteTaskAndCount("6184fc5cdaba1bf28da0f5a1").then( (count) => {
    console.log('# of uncompleted tasks = ', count)
}).catch((e) => {
    console.log((e))
})