console.log('Client side JS file loaded')


// fetch('https://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })

// fetch('http://localhost:3000/weather?address=!').then((response) => {
//     response.json().then((error, data) => {
//         if(error){
//             console.log(error)
//             return
//         }
//         console.log(data)
//     })
// })


const weatherForm = document.querySelector('form');
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const location = search.value
    // console.log(location)
    message1.textContent = 'Loading . . .'
    message2.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log(data.error)
                return message1.textContent = data.error
            }
            // console.log(data)
            message1.textContent = data.location
            message2.textContent = data.forecast
        })
    });
})

