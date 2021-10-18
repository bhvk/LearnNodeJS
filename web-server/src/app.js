const path = require('path')
const express = require('express')


// console.log(__dirname)
// console.log(__filename)
// console.log(path.join(__dirname, '../public','index.html'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => {
    res.send({
        location: 'Chandigarh',
        forecast: 27
    })
})

app.listen(3000, () => {
    console.log('Server is up and running!')
})