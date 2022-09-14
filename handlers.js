const getJobs = async (db, query) => {
  if (!db) {
    return { error: "no database!" };
  }
  
  let sqlSearch;
  if (query) {
    sqlSearch = `SELECT * FROM Jobs WHERE `
  }
  // TODO Add filter
  const result = await db.all("SELECT * from Jobs", []);
  console.log(result);
  if (result.error) {
    return { error: result.error };
  }

  return result;
};

const saveJob = async db => {
  // TODO: mark a job as saved in the database (need to add a new column to the SQL table)
};

module.exports = {
  getJobs,
  saveJob
};
