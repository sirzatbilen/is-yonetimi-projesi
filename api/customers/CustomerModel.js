const db = require("../../data/Db/db");

const getAll = async (customer_id) => {
  const rows = await db("customer");
};

const create = async (payload) => {
  const [customer_id] = await db("customer").insert(payload);
  const newCustomer = await db("customer")
    .where("customer_id", customer_id)
    .first();
};

module.exports = {
  getAll,
  create,
};
