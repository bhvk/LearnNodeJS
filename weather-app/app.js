const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')
const chalk = require('chalk')

const city = process.argv[2]
console.log('city entered = ',city)

if(!city){
    console.log(chalk.red.bold.inverse('PLEASE ENTER CITY/LOCATION TO GET WEATHER'))
}else{
    geocode(city, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return console.log(error)
        }
        
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            
            console.log('Location    = ', location)
            // console.log('Temperature = ', forecastData.temperature)
            // console.log('Condition   = ', forecastData.condition)
            console.log(forecastData)
          })
    })
}

