const { table } = require("../data/config");

exports.up = async function(knex) {
    await knex("fruits").truncate()
    await knex.schema.createTable('cars', (table) => {
      table.increments('id')
      table.text('VIN').notNull().unique()
      table.text('make').notNull()
      table.text('model').notNull()
      table.real('mileage').notNull()
      table.boolean('transmission').defaultTo(true)
      table.text('title')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('cars')
};
