console.log('file is starting notes.js');

const fs = require('fs');


var addNote = (title,body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (e) {

    }
    
    var duplicateNotes = notes.filter((notes) =>  notes.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note); // array of note object
        fs.writeFileSync('notes-data.json',JSON.stringify(notes));
    }

    
    
};


var getAll = () => {
    console.log("getting all notes");
    
};

var getNote = (title) => {
    console.log('reading ', title);
    
};

var removeNote = (title) => {
    console.log("removing ", title);
    
}



module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};



