const router = require('express').Router();
// require notes library from lib folder
const notesArr = require('../../db/db.json');

// set with "get" where the api is located
    // set notes data to result

// get id when certain element is clicked
    // if there is a result, respond with the result
    // else respond with sendStatus(404) (might need this, idk yet)

// post data (create new note)
    // set id based on the next item in the array
    // validate if there is any incorrect fields/entries. If so, send 400 error back in alert
    // if not, then create new note