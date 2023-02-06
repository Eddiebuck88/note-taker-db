const notes = require('express').Router();
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const uuid = require("uniqid");
const { response } = require('.');

//GET request for API (/api/notes)
notes.get("/", (req, res) => {
    console.log("here");

//log our request to terminal
console.info(`${req.method} request received to get notes`);

//need to read db.json file and return all saved notes as JSON
readFileAsync(`db/db.json`, "utf8").then((data) => {
    //convert string to JSON object
    let noteArr = JSON.parse(data);
    console.log(noteArr);
    res.json(noteArr);
  });
});
