const getJobs = async (db, query) => {
  if (!db) {
    return { error: "no database!" };
  }
  
  // TODO Add filter
  const result = await db.all("SELECT * from Jobs", []);
  
  //array
  result.filter(job => {
    return job.title === 'Software Engineer'
  })
  
  if (result.error) {
    return { error: result.error };
  }

  return result;
};

const saveJob = async db => {
  // TODO
  const result = await db.all("SELECT * from Jobs", []);
  
  if(result.error) {
    return { error: result.error}
  }
};

module.exports = {
  getJobs,
  saveJob
};
