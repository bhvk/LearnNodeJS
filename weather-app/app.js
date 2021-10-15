const request = require('postman-request');
const geocode = require('./utils/geocode')
const { features } = require('process');

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

geocode('Chandigarh', (error, data) => {
    console.log('Error : ', error)
    console.log('Data  : ', data)
})

geocode('Punjab', (error, data) => {
    console.log('Error : ', error)
    console.log('Data  : ', data)
})

geocode('Pubjab,India', (error, data) => {
    console.log('Error : ', error)
    console.log('Data  : ', data)
})