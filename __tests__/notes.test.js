const fs = require('fs');
const {
    createNewNote,
    deleteNote,
    validateNote
} = require('../lib/notes');
const { notes } = require('../db/db.json');

jest.mock('fs');

test("Creates a note object", () => {
    const note = createNewNote(
        { title: "Kingpin", text: "Voucher."},
        notes
    );

    expect(note.title).toBe("Kingpin");
    expect(note.text).toBe("Voucher.");
});

test("Deletes a note", () => {
    const startingNotes = [
        {
            id: "0",
            title: "Kingpin",
            text: "Voucher."
        },
        {
            id: "1",
            title: "Horseshoe",
            text: "Batwing"
        },
        {
            id: "2",
            title: "catpaw",
            text: "whiskers"
        },
    ];

    const result = deleteNote("1", startingNotes);
    expect(result.length).toBe(2);
    expect(result[1].id).toBe("1");
});

test("validates the input of the note", () => {
    const validNote = {
        id: "0",
        title: "Kingpin",
        text: "Voucher."
    };

    const invalidNote = {
        id: "1",
        title: "",
        text: "Batwing"
    };

    const invalidNote2 = {
        id: "2",
        title: "catpaw",
        text: ""
    };

    const result1 = validateNote(validNote);
    const result2 = validateNote(invalidNote);
    const result3 = validateNote(invalidNote2);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
    expect(result3).toBe(false);
});