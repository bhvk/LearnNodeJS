const request = require('postman-request');
const { features } = require('process');
// const url = 'http://api.weatherstack.com/current?access_key=8869458679db594bceb778d309b4d83e&query=31.1234,-100.1212&units=f'

// request({url: url, json: true}, (error, response)=>{
//     // console.log(response)
//     // const data = JSON.parse(response.body)
//     // console.log(data.current.observation_time)
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.error){
//         console.log(response.body.error.info)
//     }else{
//         // const longi = response.body.features[0].center[0]
//         // const lati  = response.body.features[0].center[1]
//         // console.log(longi +', '+ lati)
//         console.log('It is currently '+response.body.current.temperature+' degrees Fahrenheit out there and there are '+
//                      response.body.current.precip+'\% chances of rain. Condition is : '+response.body.current.weather_descriptions[0])
//     }
// })


// const place = 'Shimla'
const geoCodeURL  = 'https://api.mapbox.com/geocoding/v5/mapbox.places/cupertino.json?access_token=pk.eyJ1Ijoia2VuamltYXBib3giLCJhIjoiY2t1cGl6OGdxMThvbDJ2cDFwNngyanNmZyJ9.HjXFdRkpXvWuHR3eFGP59g&limit=1'

request({url: geoCodeURL, json: true}, (error, response)=>{
    if(error){
        console.log('Unable to connect to weather service')
    }else if(response.body.message || response.body.features.length === 0){
        if(response.body.message)
            console.log(response.body.message)
        else if(response.body.features.length === 0)
            console.log('No such city exist!')
    }else{
        const longi = response.body.features[0].center[0]
        const lati  = response.body.features[0].center[1]
        console.log(longi +', '+ lati)
    }
});

