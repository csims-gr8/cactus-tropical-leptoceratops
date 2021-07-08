const getJobs = async db => {
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
  // TODO
};

module.exports = {
  getJobs,
  saveJob
};
