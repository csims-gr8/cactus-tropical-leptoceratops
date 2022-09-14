const getJobs = async (db, search) => {
  if (!db) {
    return { error: "no database!" };
  }

  let lowerSearch = search
    ? search.toLowerCase()
    : undefined;
  let sqlSearch = lowerSearch
    ? `SELECT * FROM Jobs WHERE LOWER(title) LIKE ${lowerSearch} OR LOWER(description) LIKE ${lowerSearch} OR LOWER(location) LIKE ${lowerSearch}`
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
