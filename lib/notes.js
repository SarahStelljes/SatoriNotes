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
}

// findById function
    // after a certain element is clicked, it gets the id that matches the element?
    // when it gets the id, it pulls the rest of the data and returns it

// validate Note requirements

// pull notes on load (possibly here)

// delete notes function (For Bonus)

// clear fields (may not be in this file)

module.exports = { createNewNote, };