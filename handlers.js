const getJobs = async db => {
  if (!db) {
    return { error: "no database!" };
  }
  const result = await db.all("SELECT * from Jobs", []);
  if (result.error) {
    return { error: result.error };
  }

  return result;
};

module.exports = {
  getJobs
};
