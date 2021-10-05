const fs = require('fs')
const chalk = require('chalk');


const log = console.log;

// const book = {
//     title: 'Mind Master',
//     author: 'Vishy Anand'
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// log( bookJSON);

// const parsedBook = JSON.parse(bookJSON);

// log(chalk.yellow.bold.inverse(parsedBook.author));


// const dataBuffer = fs.readFileSync('1-json.json') //binary data

// log(dataBuffer); //prints the binary data buffer
// log(chalk.cyanBright.bold(dataBuffer.toString()));

// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON); //important step
// log(chalk.yellow.inverse.bold(data.author));


const dataBuffer = fs.readFileSync('1-json.json'); //binary data
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
const data = JSON.parse(dataBuffer.toString());

log(chalk.bold.inverse.green(data.name));
log(chalk.bold.inverse.cyanBright(data.planet));
log(chalk.bold.inverse.yellow(data.age));

data.age = 26;
data.name = 'Bharat';

log(chalk.bold.inverse.green(data.name));
log(chalk.bold.inverse.cyanBright(data.planet));
log(chalk.bold.inverse.yellow(data.age));

const dataJSON = JSON.stringify(data);

fs.writeFileSync('1-json.json', dataJSON);

