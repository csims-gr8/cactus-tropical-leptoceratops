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

    db.run(
      "DROP TABLE Jobs; CREATE TABLE Jobs (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, location TEXT)"
    );
    console.log("New table Jobs created!");

  //   // insert starter jobs
  //   // );
  //   console.log('Database "Jobs" ready to go!');
  //   db.each("SELECT * from Jobs", (err, row) => {
  //     if (row) {
  //       console.log(`record: ${row.title}`);
  //     }
  //   });
  // });
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
