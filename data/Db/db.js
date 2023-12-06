const knex = require("knex");

const connect = {
  client: "mysql",
  connection: {
    host: "localhost",
    user: "root",
    password: "05302259079",
    database: "yonetim_veri",
  },
  migrations: {
    tableName: "yonetim_veri",
    directory: "./migrations",
  },
};

module.exports = knex(connect);
