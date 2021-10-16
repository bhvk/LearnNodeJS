const request = require('postman-request');


/*
const url = 'http://api.weatherstack.com/current?access_key=8869458679db594bceb778d309b4d83e&query=31.1234,-100.1212&units=f'
request({url: url, json: true}, (error, response)=>{
    // console.log(response)
    // const data = JSON.parse(response.body)
    // console.log(data.current.observation_time)
    if(error){
        console.log('Unable to connect to weather service')
    }else if(response.body.error){
        console.log(response.body.error.info)
    }else{
        // const longi = response.body.features[0].center[0]
        // const lati  = response.body.features[0].center[1]
        // console.log(longi +', '+ lati)
        console.log('It is currently '+response.body.current.temperature+' degrees Fahrenheit out there and there are '+
                     response.body.current.precip+'\% chances of rain. Condition is : '+response.body.current.weather_descriptions[0])
    }
})
*/

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude,longitude, callback) => {
    // console.log('Longitude = ',longitude)
    // console.log('Latitude = ',latitude)
    const forecasturl = 'http://api.weatherstack.com/current?access_key=8869458679db594bceb778d309b4d83e&query=' + latitude + ','+ longitude + '&units=m'
    request({url: forecasturl, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback('Unable to find that location', undefined)
        }else{
            // callback(undefined, 'It is currently '+ body.current.temperature+' degrees Fahrenheit out there and there are '+
            //          response.body.current.precip+'\% chances of rain. Condition is : '+response.body.current.weather_descriptions[0])
            callback(undefined, {temperature: body.current.temperature,
                                 rain: body.current.precip,
                                 condition: body.current.weather_descriptions[0]})
        }
    })
}

module.exports = forecast