// server.js
// where your node app starts

// init project
const express = require("express");
const bodyParser = require("body-parser");
const handlers = require("./handlers.js");
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
const { open } = require("sqlite");

let db;

open({ filename: dbFile, driver: sqlite3.Database }).then(newDb => {
  console.log("database opened");

  db = newDb;

  if (!exists) {
    console.log('creating new table');
    // Delete .data/sqlite.db to reset data and rerun this process. Then 
    // run 'refresh' to restart server.
    db.run(
      "CREATE TABLE Jobs (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, location TEXT)"
    ).then((result) => {
      // Insert starter jobs
      db.run(
        'INSERT INTO Jobs (title, description, location) VALUES ("Software Engineer", "Come write some code with us!", "Yardley, PA"), ("Product Manager", "Develop our product roadmap.", "Yardley, PA"), ("Sales Engineer", "Focus on the technical needs of our next customers.", "Yardley, PA")'
      );
    });
  } else {
    console.log('Existing job data...')
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
  const jobsData = await handlers.getJobs(db);
  response.send(JSON.stringify(jobsData));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`);
});
