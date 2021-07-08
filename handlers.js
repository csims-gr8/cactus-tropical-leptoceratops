const getJobs = async (db, query) => {
  if (!db) {
    return { error: "no database!" };
  }
  
  // TODO Add filter
  const result = await db.all("SELECT * from Jobs", []);
  
  //array
  return result.filter(job => {
    return job.title === 'Software Engineer'
  }).map(job => job)
  
  if (result.error) {
    return { error: result.error };
  }

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
