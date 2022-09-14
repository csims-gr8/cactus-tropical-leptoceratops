const getJobs = async (db, search) => {
  if (!db) {
    return { error: "no database!" };
  }
  
  let sqlSearch = search 
    ? `SELECT * FROM Jobs WHERE LOWER(title) LIKE LOWER(search) OR LOWER(description) LIKE LOWER(search) OR LOWER(location) LIKE LOWER(search)`
    : 'SELECT * from Jobs';
    
  // TODO Add filter
  const result = await db.all(sqlSearch, []);
  console.log(result);
  if (result.error) {
    return { error: result.error };
  }

  return result;
};

const saveJob = async (db, id) => {
  
};

module.exports = {
  getJobs,
  saveJob
};
