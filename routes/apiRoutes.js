//This code imports the necessary modules and creates an Express.js router with a single GET endpoint '/api/notes'. When a GET request is received at this endpoint, the 'notesData' from the 'db.json' file is returned as a JSON response.
const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const notesData = require('../db/db.json');

router.get('/api/notes', (req, res) => {
  res.json(notesData);
});

//This code creates a POST endpoint '/api/notes' in an Express.js router. When a POST request is received at this endpoint, it extracts the request body and adds a unique ID to it using the uuid module. The updated data is then added to the notesData array and saved to the 'db.json' file. Finally, the created note is returned as a JSON response.
router.post('/api/notes', (req, res) => {
    let notesDataPath = path.join(__dirname, '../db/db.json');
    let createNote = req.body;
  
    createNote.id = uuidv4();
    notesData.push(createNote);
    fs.writeFile(notesDataPath, JSON.stringify(notesData), (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('Your notes has been created!');
      });
      res.json(createNote);
    });

    //This code writes the notesData array to a file using the fs.writeFile method and returns the created note as a JSON response upon successful completion. An error message is logged to the console if the write operation fails.
    fs.writeFile(notesDataPath, JSON.stringify(notesData), (err) => {
        if (err) {
          return console.log(err);
        }
        console.log('Your notes have been created!');
        res.json(createNote);
      });

      //This code creates a DELETE endpoint '/api/notes/:id' in an Express.js router. When a DELETE request is received at this endpoint with an id parameter, it searches the notesData array for a note with a matching ID and removes it. The updated notesData array is then written to the 'db.json' file.
      router.delete('/api/notes/:id'), (req, res) => {
        let notesDataPath = path.join(__dirname, '../db/db.json');
      }
        for (let i = 0; i < notesData.length; i++){
        if (notesData[i].id == req.params.id) 
            notesData.splice(i, 1);
            break;
    
    }
    
    //This code writes the notesData array to a file using the synchronous version of fs.writeFile, fs.writeFileSync, and returns the updated notesData as a JSON response. If the write operation fails, an error message is logged to the console.
    fs.writeFileSync(notesDataPath, JSON.stringify(notesData), (err) => {
      if (err) {
        return console.log(err);
      } else {
        console.log('Your notes has been deleted!');
      }
    res.json(notesData);
  });
  
  module.exports = router;