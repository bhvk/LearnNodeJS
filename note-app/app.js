const chalk = require('chalk');
const yargs = require('yargs');
const log = console.log;
const notes = require('./notes.js') 

//App functionality: add, remove, read, list

yargs.command({
    command: 'add',
    describe: 'Adds a new note to the app',
    builder: {
        title:{
            describe: 'Title or heading of the Note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note',
            demandOption: true,
            type: 'string'
        }
        
    },
    handler(argv){
        // console.log(chalk.green.bold.inverse(argv.title));
        // console.log(chalk.blue.bold.inverse(argv.body)+"\n");
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe : 'Remove a note from the app',
    builder: {
        title: {
            describe: 'title of note to be removed',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Remove the note :'+' '+argv.title)
        notes.removeNote(argv.title)
        // console.log(('REMOVED')
    }
})

yargs.command({
    command: 'read',
    describe : 'Reads a note from the app',
    builder: {
        title: {
            describe: 'title of note to be read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        console.log(chalk.blue.bold.inverse('Read the note with title = '+ argv.title))
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe : 'Lists all notes from the app',
    handler(){
        notes.listNotes()
    }
})

// yargs.argv //this is somehow important to call here
yargs.parse()
