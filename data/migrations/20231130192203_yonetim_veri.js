/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("customer", function (cu) {
      cu.increments("customer_id").primary().unsigned();
      cu.string("company_brand_name", 256).notNullable();
      cu.string("company_trade_name", 256).notNullable();
      cu.string("company_type", 256).notNullable();
      cu.string("main_company_trade_name", 256);
      cu.string("address", 256).notNullable();
      cu.string("tax_office", 256).notNullable();
      cu.integer("tax_number").notNullable();
      cu.integer("mersis_number").notNullable();
      cu.string("website", 256);
      cu.string("email", 256).notNullable();
      cu.string("phone_number").notNullable();
      cu.string("fax_number");
      cu.string("logo", 256);
      cu.string("reference", 256);
      cu.date("registration_date");
      cu.string("recorded_by_employee", 256);
    })
    .createTable("company_representatives", function (co) {
      co.increments("representatives_id");
      co.string("representative_name", 256).notNullable();
      co.string("job_title", 256).notNullable();
      co.string("mobile_phone").notNullable();
      co.string("work_phone").notNullable();
      co.string("landline_phone", 64);
      co.string("email", 256);
      co.date("birth_date");
      co.integer("customer_id")
        .unsigned()
        .references("customer_id")
        .inTable("customer")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("company_representatives")
    .dropTableIfExists("customer");
};
