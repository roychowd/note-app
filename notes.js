console.log('file is starting notes.js');

var addNote = (title,body) => {
    console.log('Adding note', title, body);
    
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



