const getJobs = async (db) => {
  console.log(db)
    const result = await db.all("SELECT * from Jobs", []);
  console.log(result)
    if (result.error) {
      return result.error;
    }
  
    return JSON.stringify(result.rows);
};

module.exports = {
  getJobs
};