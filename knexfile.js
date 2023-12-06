// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: "localhost",
      user: "root",
      password: "05302259079",
      database: "yonetim_veri",
      insecureAuth: true,
      port: 3306,
    },
    migrations: {
      tableName: "knex_migrations", // migrations tablosunun adı
      directory: "./data/migrations", // migrations dosyalarının bulunduğu klasör
    },
    seeds: {
      directory: "./data/seeds", // seeds dosyalarının bulunduğu klasör
    },
  },
};
