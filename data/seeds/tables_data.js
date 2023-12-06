/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.seed = function (knex) {
  return knex("company_representatives")
    .del()
    .then(() => knex("customer").del())
    .then(() => {
      return knex("customer").insert([
        {
          company_brand_name: "ABC Company",
          company_trade_name: "ABC Trade",
          company_type: "Type A",
          main_company_trade_name: "Main Trade",
          address: "123 Main St",
          tax_office: "City Tax Office",
          tax_number: 1234567890,
          mersis_number: 987654321,
          website: "https://www.abc.com",
          email: "info@abc.com",
          phone_number: "123-456-7890",
          fax_number: "123-456-7891",
          logo: "abc_logo.png",
          reference: "John Doe",
          registration_date: new Date(),
          recorded_by_employee: "Employee A",
        },
      ]);
    })
    .then(() => {
      return knex("company_representatives").insert([
        {
          representative_name: "John Doe",
          job_title: "Manager",
          mobile_phone: "987-654-3210",
          work_phone: "987-654-3211",
          landline_phone: "987-654-3212",
          email: "john.doe@abc.com",
          birth_date: new Date(),
          customer_id: 1,
        },
      ]);
    });
};
