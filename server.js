// server.js
// where your node app starts

// init project
const express = require("express");
const bodyParser = require("body-parser");
const handlers = require("./handlers.js")
const app = express();
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// init sqlite db
const dbFile = "./.data/sqlite.db";
const exists = fs.existsSync(dbFile);
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(dbFile);

// if ./.data/sqlite.db does not exist, create it, otherwise print records to console
db.serialize(() => {
  if (!exists) {
    db.run(
      "CREATE TABLE Jobs (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, location TEXT)"
    );
    console.log("New table Jobs created!");

    // insert starter jobs
    db.serialize(() => {
      db.run(
        'INSERT INTO Jobs (title, description, location) VALUES ("Software Engineer", "Come write some code with us!", "Yardley, PA"), ("Product Manager", "Develop our product roadmap.", "Yardley, PA"), ("Sales Engineer", "Focus on the technical needs of our next customers.", "Yardley, PA")'
      );
    });
    
  } else {
    console.log('Database "Jobs" ready to go!');
    db.each("SELECT * from Jobs", (err, row) => {
      if (row) {
        console.log(`record: ${row.title}`);
      }
    });
  }
});


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// endpoint to get all the jobs in the database
app.get("/jobs", async (request, response) => {
  console.log(handlers);
  const jobsData = await handlers.getJobs(db);
  console.log(jobsData);
  response.send(JSON.stringify(jobsData))
});


// helper function that prevents html/css/script malice
const cleanseString = function(string) {
  return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});