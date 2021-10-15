// setTimeout(() => {
//     console.log('Two seconds up!')
// }, 2000)

const { callbackify } = require("util")

// const names = ['Andres','messi','ron']
// const shortNames = names.filter((name)=>{
//     return name.length <= 5
// });


// const geocode = (addr, callback) => {
//     setTimeout(() => {
//         const data = {
//             longitude: 3,
//             latitude: 7
//         }
//         // return data  --> INVALID as part of async func
//         callback(data)  //solves same purpose as return
//     },2000)
// }

// //goal is to give data to caller of geocode

// // const data = geocode('Chandigarh')
// // console.log(data)

// geocode('Chandigarh', (dataVar)=>{
//     console.log(dataVar)
// })



//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a, b, callback)=>{
    setTimeout(()=>{
        callback(a+b)
    }, 2000)
    // callback(a+b)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})