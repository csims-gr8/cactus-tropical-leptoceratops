const getJobs = async (db) => {
  
    const result = await db.all("SELECT * from Jobs");
    if (result.error) {
      return result.error;
    }
  
    return JSON.stringify(result.rows);
};

module.exports = {
  getJobs
};