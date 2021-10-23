const request = require('postman-request');

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
            callback(undefined, 'It is currently '+ body.current.temperature+' degrees Celsius out there with '+ body.current.precip+'\% chances of rain. Condition is '+ body.current.weather_descriptions[0])
            // callback(undefined, {temperature: body.current.temperature,
            //                      rain: body.current.precip,
            //                      condition: body.current.weather_descriptions[0]})
        }
    })
}

module.exports = forecast