const path = require('path');
const router = require('express').Router();

// when no specified url path is given, directs user to index page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// when notes is specified in the url path, directs user to notes page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// when anything other than the defined url paths above is entered, directs user to index page
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;