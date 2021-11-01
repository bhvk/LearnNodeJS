const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve([1,2,3,4])
        // reject('ERRORED OUT')
    }, 2000);
})

doWorkPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})



//                               fulfilled
//                             /
// Promise   ----  pending -->
//                             \
//                               rejected