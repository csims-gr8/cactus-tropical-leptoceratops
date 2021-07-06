const getJobs = (db) => {
    db.all("SELECT * from Jobs", (err, rows) => {
      return JSON.stringify(rows)
  });
}

export default {
  getJobs
}