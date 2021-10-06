const fs = require('fs')
const chalk = require('chalk')
const log = console.log

const getNotes = () => {
    const dataBuffer = fs.readFileSync('notes.txt')
    const data = JSON.parse(dataBuffer.toString())
    return data
}

const addNote = (title, body) => {

    const notes = loadNotes()
    if(notes){
        log(chalk.yellow.bold('Notes are not empty'))
        // log(chalk.blue.bold.inverse(notes[0].title))
    }else{
        log(chalk.blue.bold.inverse('Forming first of the notes'))
    }

    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    // if(duplicateNotes.length === 0 ){
    if(duplicateNote === undefined ){ //or if(!duplicateNote)
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
    } else{
        log(chalk.red.bold.inverse('Note title already taken'))
    }
    // fs.appendFileSync('notes.json', JSON.stringify(notes.toString()))
}

const removeNote = (title) => {

    console.log('Inside remove note function required to remove note with title:'+' '+title)
    
    const notes = loadNotes()
    var count = 0
    for (var i = notes.length - 1; i >= 0; --i) {
        if (notes[i].title === title) {
            notes.splice(i,1);
            count++;
        }
    }
    if(count > 0){
        saveNotes(notes)
    }
    else{
        console.log(chalk.yellow.bold.inverse('Note with given title to be removed does NOT exist!'))
    }
}

const listNotes = () =>{
    console.log(chalk.yellow.bold.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((element) => element.title === title)
    if(!note){
        console.log(chalk.red.bold('Note with provided title DOES NOT exist'))
    }
    else{
        console.log(chalk.yellow.bold.inverse(note.title))
        console.log(note.body)
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
    log(chalk.green.bold.inverse('SUCCESS notes updated !'))
}

const loadNotes = () => {
    try{
        const notesBuffer = fs.readFileSync('notes.json')
        const notesJSON = notesBuffer.toString()
        return JSON.parse(notesJSON)   
    }catch(e) {
        return [] //empty
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};