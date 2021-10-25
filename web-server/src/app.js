const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { query } = require('express')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public','index.html'))

const app = express()
const port = process.env.PORT || 3000

//define paths for express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath) //by default express expects the templates to be in 'views' directory of the project.

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

hbs.registerPartials(partialsPath)

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather',
        name: 'Bhavuk'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Bhavuk'
    })
})

app.get('/help', (req, res) =>{
    res.render('help', {
        title: 'Help',
        name: 'Bhavuk',
        helpText: 'To find weather of any location input zipcode/address/initials of the area',
    })
})

app.get('/weather', (req, res) => {

    const area = req.query.address
    if(!area){
        return res.send({
            error: 'Insert an address query param'
        })
    }

    geocode(area, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return res.send({error})//shorthand for error: error
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({ error }) //shorthand for error: error
            }
            // res.send({
            //     forecastData
            // })
            res.send({
                address: req.query.address,
                location: location,
                forecast: forecastData,
                // condition: forecastData.condition,
                // rain: forecastData.rain
            })
        })

    })
    // const weather = forecast(coord.latitude, coord.longitude)
    // console.log(weather)

    
})
    
app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Bhavuk',
        errorMsg: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Bhavuk',
        errorMsg: 'My 404 page'
    })
})

app.listen(port, () => {
    console.log('Server is up and running! on port : ' + port)
})