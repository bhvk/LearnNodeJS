const chalk = require('chalk')
const log = console.log

// const sq = function(x){
//     log(chalk.bold.red.inverse(x*x))
// }

// const sq = (x) => {
//     return x*x
// }

// const sq = (x) => x*x

// log(chalk.bold.red.inverse(sq(12)))



//How arrow functions work in context of methods. i.e arrow function as property on an object


//ARROW FUNCS do NOT bind their own this value
/*
We get undefined......
It actually makes sense. 
In the regular function, a function always defines its this value. 
Arrow functions treat this keyword differently. 
They do NOT define their own context since it doesn’t have its own this context. 
They inherit that from the parent scope whenever you call this.
*/
/*
const event = {
    name: 'Birthday party',
    printGuestList: () => {
        log('Guest List for ' + this.name)    //INVALID w arrow function, use function() only
    }
}
*/
const event = {
    name: 'Birthday party',
    printGuestList: function(){               //VALID if you want to use this keyword inside func body
        log('Guest List for ' + this.name)  
    }
}

//ALTERNATE 
const eve   = {
    name: 'Anniversary party',
    printGuestList(){                       //Also VALID if you want to use this keyword inside func body
        log('Guest List for ' + this.name)  
    }
}

eve.printGuestList()