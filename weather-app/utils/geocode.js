const request = require('postman-request')
const { builtinModules } = require("module");

/*
// const place = 'Shimla'
const geoCodeURL  = 'https://api.mapbox.com/geocoding/v5/mapbox.places/cupertino.json?access_token=pk.eyJ1Ijoia2VuamltYXBib3giLCJhIjoiY2t1cGl6OGdxMThvbDJ2cDFwNngyanNmZyJ9.HjXFdRkpXvWuHR3eFGP59g&limit=1'

request({url: geoCodeURL, json: true}, (error, response)=>{
    if(error){
        console.log('Unable to connect to mapbox service')
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
*/
const geocode = (address, callback) => {
    const geoCodeURL  = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoia2VuamltYXBib3giLCJhIjoiY2t1cGl6OGdxMThvbDJ2cDFwNngyanNmZyJ9.HjXFdRkpXvWuHR3eFGP59g&limit=1'
    request({url: geoCodeURL, json: true}, (error, {body})=>{
        if(error){
            // console.log('Unable to connect to mapbox service')
            callback('Unable to connect to mapbox service', undefined)
        }else if(body.features.length === 0){
            // console.log('No such city exist!')
            callback('No such city exist! Try another search', undefined)
        }else{
            const longi = body.features[0].center[0]
            const lati  = body.features[0].center[1]
            callback(undefined, {
                longitude: longi,
                latitude: lati,
                location: body.features[0].place_name
            })
        }
    });
}

module.exports = geocode