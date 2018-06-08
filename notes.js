console.log('file is starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};


var addNote = (title,body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    var duplicateNotes = notes.filter((notes) =>  notes.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note); // array of note object
        saveNotes(notes);
        return note;
    }

    
    
};


var getAll = () => {
    console.log("getting all notes");
    return fetchNotes();

    
    
};

var getNote = (title) => {
    var notes = fetchNotes();
    var note = notes.filter((notes) => notes.title === title);
    return note[0];
};

var removeNote = (title) => {
    // fetch notes
    // filter notes removing one with title of argument
    //to save new notes array
    var notes = fetchNotes();
    var findingNote = notes.filter((notes) => notes.title !== title);
    saveNotes(findingNote);
    return notes.length !== findingNote.length;
}

var logNote = (note) => {
    console.log('-------------');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
    
    
    
}



module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};



