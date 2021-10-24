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

weatherForm.addEventListener('submit', (e) =>{

    e.preventDefault()

    const location = search.value
    // console.log(location)

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
    response.json().then((error, data) => {
        if(error){
            return console.log(error)
        }
        console.log(data)
    })
})
})