/*
// Example of Async Calls
console.log('Starting')

setTimeout(()=>{
   console.log('2 SECOND Timer')
}, 2000)

setTimeout(()=>{
    console.log('0 SECOND Timer')
 }, 0)

 
console.log('Stopping')

http://api.weatherstack.com/current?access_key=8869458679db594bceb778d309b4d83e&query=31.1234,-100.1212
*/
const request = require('postman-request')
const url = 'http://api.weatherstack.com/current?access_key=8869458679db594bceb778d309b4d83e&query=31.1234,-100.1212'

request({url: url}, (error, response)=>{
    // console.log(response)
    const data = JSON.parse(response.body)
    console.log(data.current.observation_time)

})