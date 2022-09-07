const getJobs = async (db, query) => {
  if (!db) {
    return { error: "no database!" };
  }
  
  // TODO Add filter
  const result = await db.all("SELECT * from Jobs", []);
  
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
