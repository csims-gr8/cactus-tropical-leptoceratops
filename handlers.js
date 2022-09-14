const getJobs = async (db, search) => {
  if (!db) {
    return { error: "no database!" };
  }
  
  // let sqlSearch = 'SELECT * FROM Jobs';
  let sqlSearch = search 
    ? `SELECT * FROM Jobs WHERE LOWER(title) LIKE LOWER(search) OR LOWER(description) LIKE LOWER(search) OR LOWER(location) LIKE LOWER(search)`
    : 'SELECT * FROM Jobs';

  console.log(sqlSearch);
  // TODO Add filter
  const result = await db.all(sqlSearch, []);
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
