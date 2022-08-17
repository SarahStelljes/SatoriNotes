const router = require('express').Router();
const { validateNote, deleteNote, createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

// set with "get" where the api is located
    // set notes data to result

// get id when certain element is clicked
    // if there is a result, respond with the result
    // else respond with sendStatus(404) (might need this, idk yet)
router.get('/notes', (req, res) => {
    let results = notes;

    res.json(results);
});

// Save Note
router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();

    if(!validateNote(req.body)) {
        res.sendStatus(400).send("The note is not properly formatted.");
    } else {
        const note = createNewNote(req.body, notes);

        res.json(note);
    }
});

router.delete('/notes/:id', (req, res) => {
    const updatedData = deleteNote(req, notes);

    res.json(updatedData);
});

module.exports = router;