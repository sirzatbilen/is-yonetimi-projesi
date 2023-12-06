const db = require("../../data/Db/db");

const getAll = (representatives_id) => {
  return db("company_representatives");
};

const create = async (payload) => {
  const [representatives_id] = await db("company_representatives").insert(
    payload
  );
  const newRepresentatives = await db("company_representatives")
    .where("representatives_id", representatives_id)
    .first();
  return newRepresentatives;
};

module.exports = {
  getAll,
  create,
};
