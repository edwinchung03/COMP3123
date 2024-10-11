const noteModel = require('../models/NotesModel');
const express = require('express');
const router = express.Router();

//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
router.post('/', (req, res) => {
    // Validate request
    const { noteTitle, noteDescription, priority } = req.body;

    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to save the note

    let note = new noteModel ({ noteTitle, noteDescription, priority });
    
    note.save();

    return res.status(201).send({
        message: "Note added successfully",
        note_id: note._id
    });
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
router.get('/', async (req, res) => {
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to returns all note
    const notes = await noteModel.find({});

    return res.status(200).json(
      // function to replace for loop
      notes.map((note) => ({
        note_id: note._id,
        noteTitle: note.noteTitle,
        noteDescription: note.noteDescription,
        priority: note.priority,
        dateAdded: note.dateAdded,
        dateUpdated: note.dateUpdated,
      }))
    );
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
router.get('/:noteId', async (req, res) => {

    const note = await noteModel.findById(req.params.noteId);
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    return res.status(200).json({
        note_id : note.note_id,
        noteTitle : note.noteTitle,
        noteDescription : note.noteDescription,
        priority: note.priority,
        dateAdded: note.dateAdded,
        dateUpdated: note.dateUpdated
      });
});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
router.put('/:noteId', async (req, res) => {
    const { noteDescription } =req.body 
    const note = await noteModel.findById(req.params.noteId);
    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to update the note using noteid

    if (noteDescription) note.noteDescription = noteDescription;
    note.dateUpdated = Date.now();
    
    await note.save();

    return res.status(200).json({
        message: "Note details updated successfully",
      });
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
router.delete('/:noteId', async (req, res) => {

    // Validate request
    if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to delete the note using noteid
    const note = await noteModel.findByIdAndDelete(req.params.noteId);

    return res.status(204).json({ message: "Note deleted successfully" });

});

module.exports = router;