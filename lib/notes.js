const fs = require('fs');
const path = require('path');

// Create a Note function
    // most likely needs passed vars that essentially links to the html file, therefore the index.js file?
    // creates an object that follows a certain criteria
    // writes object data to db.js file
function createNewNote(body, notesArray) {
    const note = body;

    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

// validate Note requirements
function validateNote(note){
    if(!note.title || typeof note.title !== "string"){
        return false;
    }
    if(!note.text || typeof note.text !== "string"){
        return false;
    }
    return true;
}

// delete notes function
function deleteNote(id, notesArray) {
    // filters through notes array
    const theNote = notesArray.filter(note => note.id === id)[0];

    // gets the index of the note that's to be deleted
    const index = notesArray.indexOf(theNote);

    // deletes chosen note from array
    notesArray.splice(index, 1);

    // creates new notes array
    let newNotesArray = [];

    // loops through old notes array
    for(let i = 0; i < notesArray.length; i++){
        // creates new object id
        let newObjectId = i;

        // creates new object
        const newObject = {
            // sets new object id to a string
            id: newObjectId.toString(),

            // gets current note's title
            title: notesArray[i].title,

            // gets current note's text
            text: notesArray[i].text
        };
        // adds updated note to new array
        newNotesArray.push(newObject);
    };

    // overwrites old database data with data from new notes array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: newNotesArray }, null, 2)
    );

    // returns the new note data array
    return newNotesArray;
};

module.exports = { createNewNote, deleteNote, validateNote };