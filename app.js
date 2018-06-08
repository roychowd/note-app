console.log('starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');

const titleOptions =  {
        describe: 'title of note',
        demand: true,
        alias: 't'
    }

const bodyOptions = {
        describe: "Add a body",
        demand: true,
        alias: 'b'
}





const argv = yargs
    .command('add','Add a new note', {
        title: titleOptions,
        body: bodyOptions,
       
    })
    .command('list', "list all ntoes")
    .command('read', "read a note", {
        title: titleOptions
    })
    .command('remove', 'remove a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    }
}
else if (command === 'list') {
    var list = notes.getAll();
    for (var i =0 ; i < list.length; i++) 
    {
        notes.logNote(list[i]);
    }
}
else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    }
    else 
    {
        console.log('note not found');
        
    }
}
else if (command === 'remove') {
    
    var noteRemoved = notes.removeNote(argv.title);
    noteRemoved ? console.log("Note was Removed") : console.log("Note Not found");
    
    


}
else {
    console.log('command not recognized');
}