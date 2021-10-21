const path = require('path')
const express = require('express')
const hbs = require('hbs')

// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public','index.html'))

const app = express()

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
        helpText: 'We are in a bit of a fix 😬 , HELP US! 🙏 ',
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Chandigarh',
        forecast: 27
    })
})

app.listen(3000, () => {
    console.log('Server is up and running!')
})